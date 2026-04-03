import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import { Instagram, Facebook } from "lucide-react";
import TikTokIcon from "@/components/TikTokIcon";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroAbout from "@/assets/hero-about.jpg";

type Tab = "slike" | "snimci";

const pansionImages = Array.from({ length: 12 }, (_, i) => ({
  src: `https://placehold.co/600x600/141414/C4922A?text=Pansion+${i + 1}`,
  alt: `Pansion ${i + 1}`,
}));

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
  const embedContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active === "snimci") {
      // Load Instagram embed script
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript) {
        // Re-process embeds
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
        <meta name="description" content="Pogledajte fotografije iz centra DUH – dresura, pansion, dvorište i srećni psi. Pratite nas na Instagramu i Facebooku." />
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {pansionImages.map((img, i) => (
              <div key={i} className="overflow-hidden group aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        ) : (
          <div ref={embedContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
