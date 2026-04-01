import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroHome from "@/assets/hero-home.jpg";
import serviceObedience from "@/assets/service-obedience.jpg";
import serviceSocialization from "@/assets/service-socialization.jpg";
import serviceProtection from "@/assets/service-protection.jpg";

const pricingData = [
  { breed: "Mala rasa", price: "1.500", highlight: false },
  { breed: "Srednja rasa", price: "1.800", highlight: true },
  { breed: "Velika rasa", price: "2.000", highlight: false },
];

const trainingPrograms = [
  {
    title: "Socijalizacija",
    desc: "Socijalizacija i rešavanje problema ponašanja.",
    image: serviceSocialization,
    details: "Rad sa psima na ponašanju u grupi i eliminisanju strahova ili agresije. Program je prilagođen svakom psu individualno.",
  },
  {
    title: "Osnovna poslušnost",
    desc: "Osnovna poslušnost (sedni, lezi, dođi, pored).",
    image: serviceObedience,
    details: "Od hodanja na povocu do kompleksnih komandi, gradimo autoritet kroz poverenje. Sistematski pristup sa dokazanim rezultatima.",
  },
  {
    title: "Napad i odbrana",
    desc: "Napredna obuka i specifične namene (Napad/Odbrana).",
    image: serviceProtection,
    details: "Profesionalna priprema radnih pasa uz maksimalnu kontrolu i disciplinu. Program zasnovan na vojnim standardima obuke.",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Usluge i cenovnik – DUH Dresura i pansion za pse | Novi Sad</title>
        <meta name="description" content="Pogledajte cenovnik pansiona i programe dresure pasa u centru DUH. Socijalizacija, osnovna poslušnost, napad i odbrana." />
      </Helmet>
      <HeroSection
        image={heroHome}
        title="Usluge i cenovnik"
        subtitle="Cenovnik i programi — Dresura i pansion za pse Duh"
        height="large"
        overlay="dark"
      />

      {/* Pricing */}
      <SectionWrapper>
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold text-center">
          Cenovnik pansiona
        </h2>
        <p className="font-body text-center text-muted-foreground mt-2">Dnevna cena</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {pricingData.map((p) => (
            <div
              key={p.breed}
              className="text-center p-8 border-2 border-gold bg-gold/5 shadow-lg transition-all hover:scale-105"
            >
              <h3 className="font-heading text-xl uppercase tracking-wider">{p.breed}</h3>
              <div className="mt-4">
                <span className="font-heading text-4xl md:text-5xl font-bold text-gold">{p.price}</span>
                <span className="font-body text-muted-foreground ml-1">din</span>
              </div>
              <p className="font-body text-sm text-muted-foreground mt-2">po danu</p>
              <Link
                to="/kontakt"
                className="inline-block mt-6 bg-gold px-6 py-3 font-heading text-xs uppercase tracking-widest text-primary-foreground hover:bg-gold-dark transition-colors"
              >
                Rezerviši
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Training Programs */}
      <SectionWrapper dark>
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold text-center">
          Programi dresure
        </h2>
        <div className="mt-12 space-y-16">
          {trainingPrograms.map((prog, i) => (
            <div key={prog.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={`aspect-[3/2] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={prog.image} alt={prog.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-heading text-2xl uppercase tracking-wider text-gold">{prog.title}</h3>
                <p className="font-body text-dark-foreground/80 mt-4 leading-relaxed">{prog.desc}</p>
                <p className="font-body text-dark-foreground/60 mt-2 leading-relaxed">{prog.details}</p>
                <Link
                  to="/kontakt"
                  className="inline-block mt-6 border-2 border-gold px-6 py-3 font-heading text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
                >
                  Zakažite konsultaciju
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gold py-16">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-primary-foreground">
            Spremni za početak?
          </h2>
          <p className="font-body text-primary-foreground/80 mt-4">
            Kontaktirajte nas za konsultacije, zakazivanje termina ili informacije o programima.
          </p>
          <Link
            to="/kontakt"
            className="inline-block mt-8 bg-dark px-10 py-4 font-heading text-sm uppercase tracking-widest text-dark-foreground hover:bg-dark-muted transition-colors"
          >
            Kontakt
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
