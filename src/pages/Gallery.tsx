import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroAbout from "@/assets/hero-about.jpg";

type Tab = "slike" | "snimci";

// Placeholder images for pansion — replace with real photos later
const pansionImages = Array.from({ length: 12 }, (_, i) => ({
  src: `https://placehold.co/600x600/141414/C4922A?text=Pansion+${i + 1}`,
  alt: `Pansion ${i + 1}`,
}));

const reelsEmbeds = [
  "https://www.instagram.com/reel/DVtB7wzjNJZ/?utm_source=ig_embed",
  "https://www.instagram.com/reel/DVYn_8ADd41/?utm_source=ig_embed",
  "https://www.instagram.com/reel/DUYlmrSDZYK/?utm_source=ig_embed",
  "https://www.instagram.com/reel/DSnCPsBjZqZ/?utm_source=ig_embed",
  "https://www.instagram.com/reel/DRQMx0fjVWT/?utm_source=ig_embed",
  "https://www.instagram.com/reel/DPljMdtjUmV/?utm_source=ig_embed",
  "https://www.instagram.com/reel/DPgUlqnjdmp/?utm_source=ig_embed",
  "https://www.instagram.com/reel/DMyCrMhNEr3/?utm_source=ig_embed",
  "https://www.instagram.com/reel/DKkZBEMNLsO/?utm_source=ig_embed",
  "https://www.instagram.com/reel/DGdSJJvNveo/?utm_source=ig_embed",
];

const Gallery = () => {
  const [active, setActive] = useState<Tab>("slike");

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reelsEmbeds.map((url, i) => (
              <div key={i} className="aspect-[9/16] w-full">
                <iframe
                  src={`${url}&amp;rd=1`}
                  className="w-full h-full border-0 rounded-lg"
                  allowFullScreen
                  loading="lazy"
                  title={`Dresura snimak ${i + 1}`}
                />
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>

      <div className="container pb-16 -mt-8">
        <div className="text-center">
          <p className="font-body text-lg text-muted-foreground mb-6">
            Zapratite nas na Instagramu i Facebooku za još fotografija i novosti.
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
