import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroHome from "@/assets/hero-home.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import facilityInterior from "@/assets/facility-interior.jpg";
import facilityYard from "@/assets/facility-yard.jpg";
import facilityTraining from "@/assets/facility-training.jpg";
import facilityHomeBoarding from "@/assets/facility-home-boarding.jpg";
import serviceObedience from "@/assets/service-obedience.jpg";
import serviceSocialization from "@/assets/service-socialization.jpg";

const images = [
  { src: gallery1, alt: "Psi na treningu", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Skok preko prepreke", span: "col-span-1" },
  { src: facilityInterior, alt: "Unutrašnji hotel", span: "col-span-1" },
  { src: gallery3, alt: "Belgijski ovčar", span: "col-span-1 row-span-2" },
  { src: facilityYard, alt: "Dvorište za igru", span: "col-span-1" },
  { src: gallery4, alt: "Šetnja sa psima", span: "col-span-1" },
  { src: facilityTraining, alt: "Teren za obuku", span: "col-span-1" },
  { src: serviceObedience, alt: "Obuka poslušnosti", span: "col-span-1" },
  { src: gallery5, alt: "Psi u igri", span: "col-span-2" },
  { src: serviceSocialization, alt: "Socijalizacija", span: "col-span-1" },
  { src: facilityHomeBoarding, alt: "Kućni pansion", span: "col-span-1" },
  { src: gallery6, alt: "Zaštitna obuka", span: "col-span-1" },
];

const Gallery = () => {
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className={`${img.span} overflow-hidden group`}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <p className="text-center font-body text-muted-foreground mt-8 text-sm">
          {/* Placeholder: Replace with real photos from the facility */}
          Fotografije su ilustrativne. Zamenite pravim fotografijama iz objekta.
        </p>
      </SectionWrapper>
    </>
  );
};

export default Gallery;
