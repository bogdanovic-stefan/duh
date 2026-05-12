/**
 * Posle `vite build` snima HTML za svaku rutiranu stranicu (Playwright + vite preview).
 * Rezultat: dist/index.html, dist/o-nama/index.html, … sa jednim setom meta tagova (Helmet).
 */
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import net from "node:net";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");

function pickFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(0, "127.0.0.1", () => {
      const addr = server.address();
      const port = typeof addr === "object" && addr ? addr.port : null;
      server.close(() => {
        if (port == null) reject(new Error("nije moguće odrediti slobodan port"));
        else resolve(port);
      });
    });
    server.on("error", reject);
  });
}

/** Rute koje odgovaraju App.tsx i sitemap.xml (bez wildcard 404). */
const ROUTES = ["/", "/o-nama", "/usluge", "/galerija", "/kontakt"];

function distPathForRoute(route) {
  if (route === "/") return join(dist, "index.html");
  const slug = route.replace(/^\//, "");
  return join(dist, slug, "index.html");
}

function waitForPreviewReady(origin) {
  const deadline = Date.now() + 60_000;
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(origin);
        if (res.ok) {
          resolve();
          return;
        }
      } catch {
        /* server još nije spreman */
      }
      if (Date.now() > deadline) {
        reject(new Error("vite preview se nije podigao na vreme."));
        return;
      }
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  const port = await pickFreePort();
  const origin = `http://127.0.0.1:${port}`;

  const preview = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
    cwd: root,
    shell: true,
    stdio: "inherit",
  });

  preview.on("error", (err) => {
    console.error(err);
    process.exit(1);
  });

  try {
    await waitForPreviewReady(origin);
  } catch (e) {
    preview.kill();
    throw e;
  }

  let browser;
  try {
    browser = await chromium.launch({
      channel: process.env.PW_CHROMIUM_CHANNEL ?? undefined,
    });
  } catch (e) {
    preview.kill();
    console.error(e);
    console.error(
      "\nNije pronađen Chromium za Playwright. Instaliraj: npx playwright install chromium\n",
    );
    process.exit(1);
  }

  const context = await browser.newContext();
  const page = await context.newPage();

  let minimalShell = "";
  try {
    minimalShell = await readFile(join(dist, "index.html"), "utf8");
  } catch {
    throw new Error("dist/index.html ne postoji — prvo pokreni vite build.");
  }

  try {
    for (const route of ROUTES) {
      const url = route === "/" ? `${origin}/` : `${origin}${route}`;
      await page.goto(url, { waitUntil: "load", timeout: 120_000 });
      await page.waitForSelector('meta[property="og:url"]', { state: "attached", timeout: 30_000 });
      const ogUrl = await page.locator('meta[property="og:url"]').getAttribute("content");
      const expectedSuffix = route === "/" ? "dresurapasaduh.rs/" : `dresurapasaduh.rs${route}`;
      if (!ogUrl?.includes(expectedSuffix)) {
        throw new Error(`og:url ne odgovara ruti ${route}: ${ogUrl}`);
      }
      await page.evaluate(
        () =>
          new Promise((resolve) => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => resolve(undefined));
            });
          }),
      );

      const html = await page.content();
      const outFile = distPathForRoute(route);
      await mkdir(dirname(outFile), { recursive: true });
      await writeFile(outFile, html, "utf8");
      console.log("prerender:", route, "->", relative(root, outFile));
    }

    await writeFile(join(dist, "__spa-fallback.html"), minimalShell, "utf8");
    console.log("prerender: SPA fallback -> dist/__spa-fallback.html");
  } finally {
    await context.close();
    await browser.close();
    preview.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
