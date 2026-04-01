import { useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroHome from "@/assets/hero-home.jpg";

const categories = [
  { key: "dresura", label: "Dresura" },
  { key: "pansion", label: "Pansion" },
  { key: "gosti", label: "Naši gosti" },
  { key: "kucni", label: "Kućni smeštaj" },
  { key: "dvoriste", label: "Dvorište" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

// Placeholder images per category — replace src with real Instagram embed URLs
const galleryData: Record<CategoryKey, { src: string; alt: string }[]> = {
  dresura: Array.from({ length: 12 }, (_, i) => ({
    src: `https://placehold.co/600x600/141414/C4922A?text=Dresura+${i + 1}`,
    alt: `Dresura ${i + 1}`,
  })),
  pansion: Array.from({ length: 12 }, (_, i) => ({
    src: `https://placehold.co/600x600/141414/C4922A?text=Pansion+${i + 1}`,
    alt: `Pansion ${i + 1}`,
  })),
  gosti: Array.from({ length: 12 }, (_, i) => ({
    src: `https://placehold.co/600x600/141414/C4922A?text=Gosti+${i + 1}`,
    alt: `Naši gosti ${i + 1}`,
  })),
  kucni: Array.from({ length: 12 }, (_, i) => ({
    src: `https://placehold.co/600x600/141414/C4922A?text=Kucni+${i + 1}`,
    alt: `Kućni smeštaj ${i + 1}`,
  })),
  dvoriste: Array.from({ length: 12 }, (_, i) => ({
    src: `https://placehold.co/600x600/141414/C4922A?text=Dvoriste+${i + 1}`,
    alt: `Dvorište ${i + 1}`,
  })),
};

const Gallery = () => {
  const [active, setActive] = useState<CategoryKey>("dresura");
  const images = galleryData[active];

  return (
    <>
      <HeroSection
        image={heroHome}
        title="Galerija"
        subtitle="Pogledajte naš prostor, treninge i srećne pse"
        height="medium"
        overlay="dark"
      />

      <SectionWrapper>
        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-2.5 rounded-sm font-heading text-sm uppercase tracking-widest transition-all duration-300 border ${
                active === cat.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={`${active}-${i}`} className="overflow-hidden group aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

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
      </SectionWrapper>
    </>
  );
};

export default Gallery;
