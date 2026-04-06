# DUH — Dog training & boarding website

Marketing site for **DUH** (*Dresura i pansion za pse*), a professional dog training and boarding business near Novi Sad, Serbia (Bački Jarak). UI copy and content are primarily in **Serbian**.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** — dev server and production build
- **React Router** — client-side routing
- **Tailwind CSS** — styling
- **shadcn/ui** (Radix UI) — accessible components
- **Framer Motion** — light animations
- **react-helmet-async** — per-route `<title>` and meta tags

## Prerequisites

- **Node.js** 18+ (or 20+ recommended)
- **npm** (or `pnpm` / `yarn` if you prefer)

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:8080` (see `vite.config.ts`).

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start Vite dev server with HMR |
| `npm run build`| Production build → `dist/`     |
| `npm run preview` | Serve `dist/` locally          |
| `npm run lint` | Run ESLint                     |
| `npm run test` | Run Vitest tests               |

## Deployment

1. Run `npm run build`.
2. Deploy the **`dist/`** folder to any static host (e.g. **Vercel**, Netlify, Cloudflare Pages).

### Production URL (SEO)

Canonical domain and absolute URLs for Open Graph, JSON-LD, `sitemap.xml`, and `robots.txt` are configured in:

- `src/lib/site.ts` — `SITE_URL` (currently `https://dresurapasaduh.rs`)

Update `SITE_URL` if the live domain changes. Keep `public/sitemap.xml` and `public/robots.txt` in sync with the same base URL.

Static assets served at the site root (favicon, `og-image.jpg`, sitemap, robots) live in **`public/`**.

## Project structure (high level)

```
src/
  components/     # Layout, Header, Footer, SEO, UI primitives
  pages/          # Route pages (Home, About, Services, Gallery, Contact)
  lib/            # Shared helpers (e.g. site URL)
public/           # Static files copied to build output root
```

## License / credits

Private project. Website credits appear in the site footer where applicable.
