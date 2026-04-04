import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Instagram, Facebook } from "lucide-react";
import TikTokIcon from "@/components/TikTokIcon";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroAbout from "@/assets/hero-about.jpg";

import pansion1 from "@/assets/gallery/pansion-1.jpg";
import pansion2 from "@/assets/gallery/pansion-2.jpg";
import pansion3 from "@/assets/gallery/pansion-3.jpg";
import pansion4 from "@/assets/gallery/pansion-4.jpg";
import nasPrevoz from "@/assets/gallery/nas-prevoz.jpg";
import kaveziZaPrevoz from "@/assets/gallery/kavezi-za-prevoz.jpg";
import milanDuh from "@/assets/gallery/milan-duh.jpg";
import milanDuh2 from "@/assets/gallery/milan-duh2.jpg";
import milanDuh3 from "@/assets/gallery/milan-duh3.jpg";
import milanDuh4 from "@/assets/gallery/milan-duh4.jpg";
import milanDuh42 from "@/assets/gallery/milan-duh4-2.jpg";
import milanDuh5 from "@/assets/gallery/milan-duh5.jpg";
import milanDuh6 from "@/assets/gallery/milan-duh6.jpg";
import odbrana from "@/assets/gallery/odbrana.jpg";
import dvoriste1 from "@/assets/gallery/dvoriste-1.jpg";
import dvoriste2 from "@/assets/gallery/dvoriste-2.jpg";

type Tab = "slike" | "snimci";

const pansionImages = [
  { src: pansion1, alt: "Unutrašnjost pansiona - boksovi za pse" },
  { src: nasPrevoz, alt: "Naš prevoz za pse - brendirano vozilo" },
  { src: milanDuh, alt: "Milan i Duh - vojni pas" },
  { src: pansion2, alt: "Boksovi za pse sa ležajevima" },
  { src: pansion3, alt: "Duh ispred ulaza u pansion" },
  { src: pansion4, alt: "Pansion DUH - spoljašnjost" },
  { src: dvoriste1, alt: "Psi na dvorištu pansiona" },
  { src: milanDuh2, alt: "Milan sa Duhom u opremi" },
  { src: milanDuh3, alt: "Milan i Duh u vojsci" },
  { src: kaveziZaPrevoz, alt: "Kavez za siguran prevoz pasa" },
  { src: odbrana, alt: "Trening napada i odbrane" },
  { src: milanDuh42, alt: "Milan i Duh na zadatku" },
  { src: milanDuh5, alt: "Milan i Duh u akciji" },
  { src: milanDuh6, alt: "Milan i Duh - vojna policija" },
  { src: dvoriste2, alt: "Psi se igraju na dvorištu" },
  { src: milanDuh4, alt: "Milan i Duh na terenu" },
];

const reelIds = [
  "DRQMx0fjVWT",
  "DPgUlqnjdmp",
  "DSnCPsBjZqZ",
  "DVtB7wzjNJZ",
  "DVYn_8ADd41",
  "DPljMdtjUmV",
  "DGdSJJvNveo",
  "DKkZBEMNLsO",
  "DUYlmrSDZYK",
  "DJ4GO3Rt5tD",
  "DQNIysTDRKT",
  "DPZftLNjR1Y",
];

const Gallery = () => {
  const [active, setActive] = useState<Tab>("slike");

  useEffect(() => {
    if (active === "snimci") {
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript) {
        (window as any).instgrm?.Embeds?.process();
      } else {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [active]);

  return (
    <>
      <Helmet>
        <title>Galerija – DUH Dresura i pansion za pse | Novi Sad</title>
        <meta name="description" content="Pogledajte fotografije iz centra DUH – dresura, pansion, dvorište i srećni psi. Pratite nas na Instagramu, Facebooku i TikToku." />
        <link rel="canonical" href="https://dresuraipansionzapseduh.rs/galerija" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dresuraipansionzapseduh.rs/galerija" />
        <meta property="og:title" content="Galerija – DUH Dresura i pansion za pse | Novi Sad" />
        <meta property="og:description" content="Pogledajte fotografije iz centra DUH – dresura, pansion, dvorište i srećni psi. Pratite nas na Instagramu, Facebooku i TikToku." />
        <meta property="og:locale" content="sr_RS" />
        <meta property="og:site_name" content="DUH – Dresura i pansion za pse" />
      </Helmet>
      <HeroSection
        image={heroAbout}
        title="Galerija"
        subtitle="Pogledajte naš prostor, treninge i srećne pse"
        height="medium"
        overlay="dark"
      />

      <SectionWrapper>
        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { key: "slike" as Tab, label: "Slike pansiona" },
            { key: "snimci" as Tab, label: "Snimci dresura" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-6 py-2.5 rounded-sm font-heading text-sm uppercase tracking-widest transition-all duration-300 border ${
                active === tab.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {active === "slike" ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {pansionImages.map((img, i) => (
              <div key={i} className="overflow-hidden group break-inside-avoid">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reelIds.map((id, i) => (
              <div key={id} className="flex justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`https://www.instagram.com/reel/${id}/`}
                  data-instgrm-version="14"
                  style={{
                    background: "#141414",
                    border: 0,
                    borderRadius: "8px",
                    margin: 0,
                    maxWidth: "540px",
                    minWidth: "280px",
                    padding: 0,
                    width: "100%",
                  }}
                >
                  <a
                    href={`https://www.instagram.com/reel/${id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 text-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm">Pogledajte snimak {i + 1} na Instagramu</span>
                  </a>
                </blockquote>
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>

      <div className="container pb-16 -mt-8">
        <div className="text-center">
          <p className="font-body text-lg text-muted-foreground mb-6">
            Zapratite nas na društvenim mrežama za još novosti.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/dresuraipansionzapseduhnovisad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/dresura.pasa.duh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://www.tiktok.com/@dresurapasaduh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <TikTokIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
