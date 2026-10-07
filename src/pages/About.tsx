import { Link } from "react-router-dom";
import { Shield, Sparkles, Eye, Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Seo from "@/components/Seo";
import SectionWrapper from "@/components/SectionWrapper";
import heroAbout from "@/assets/hero-about.jpg";
import trainerPortrait from "@/assets/trainer-portrait.jpg";
import humanvetLogo from "@/assets/humanvet-logo.png";

const HUMANVET_PHONE_HREF = "tel:+381654214729";
const HUMANVET_MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=HUMANVET%20Mo%C5%A1e%20Pijade%2087%20Ba%C4%8Dki%20Jarak";

const values = [
  { icon: Shield, title: "Disciplina bez surovosti", desc: "Verujemo u jasan autoritet i pozitivnu motivaciju." },
  { icon: Sparkles, title: "Higijena i komfor", desc: "Sobe se čiste svakodnevno, a prostor je klimatizovan radi maksimalne udobnosti." },
  { icon: Eye, title: "Transparentnost", desc: "Vlasnici dobijaju redovne izveštaje, slike ili video snimke svog psa tokom boravka." },
];

const About = () => {
  return (
    <>
      <Seo
        title="O nama - DUH Dresura i pansion za pse"
        description="Upoznajte Milana, profesionalnog dresera sa iskustvom u vojnoj policiji. Saznajte više o našem pristupu dresuri i pansionu."
        path="/o-nama"
      />
      <HeroSection
        image={heroAbout}
        title="O nama"
        subtitle="Više od pansiona – Misija zasnovana na disciplini i poverenju."
        height="large"
        overlay="dark"
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-heading text-sm uppercase tracking-widest text-gold mb-4">Od vojnih jedinica do vašeg dvorišta</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider">
            Disciplina, poverenje i profesionalizam.
          </h2>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
            <img src={trainerPortrait} alt="Milan - profesionalni dreser" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-script text-5xl md:text-6xl text-gold mb-6">Milan</h2>
            <div className="space-y-5 font-body text-dark-foreground/80 leading-relaxed">
              <p>
                Profesionalni dreser sa karijerom građenom u vojnoj policiji. Kao dugogodišnji vodič službenih pasa, Milan donosi najviše standarde discipline, sigurnosti i stručnosti u rad sa vašim ljubimcima. Svaki trening u centru "DUH" zasnovan je na iskustvu gde su preciznost i poverenje ključ uspeha.
              </p>
              <p>
                Srce ovog pansiona i razlog za njegovo ime je Duh – moj službeni pas sa kojim sam prošao kroz najteže vojno-policijske zadatke. On nije bio samo radni pas, već partner koji me je naučio da se vrhunski rezultati postižu isključivo kroz uzajamno poštovanje i nepokolebljivu disciplinu.
              </p>
              <p>
                Danas, kroz "Dresura i pansion za pse Duh", tu istu posvećenost i vojničku preciznost prenosim na rad sa vašim ljubimcima. Naš pristup nije samo obično čuvanje pasa – to je sistematska briga o njihovom fizičkom i mentalnom stanju, u uslovima koji simuliraju toplinu doma, ali zadržavaju najviše standarde bezbednosti.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold text-center">
          Naše vrednosti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((v) => (
            <div key={v.title} className="text-center p-8 border border-border hover:border-gold transition-colors">
              <v.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-lg uppercase tracking-wider mb-3">{v.title}</h3>
              <p className="font-body text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper dark id="prijatelji-pansiona">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold text-center">
          Prijatelji pansiona
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          <div className="flex justify-center items-center">
            <img
              src={humanvetLogo}
              alt="Humanvet — Naši ljubimci zaslužuju najbolje. 065 421 47 29, Moše Pijade 87, Bački Jarak"
              className="w-full max-w-md lg:max-w-lg h-auto"
            />
          </div>

          <div>
            <p className="font-heading text-sm uppercase tracking-widest text-gold mb-4">Veterinarska saradnja</p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider">
              Humanvet
            </h3>
            <p className="font-body text-dark-foreground/80 leading-relaxed mt-6">
              Pansion DUH sarađuje sa veterinarskom ambulantom Humanvet u Bačkom Jarku. Ako tokom boravka zatreba pregled ili hitna pomoć, vaš pas ide kod proverenog veterinara — u istom mestu, bez gubljenja vremena.
            </p>

            <div className="mt-8 space-y-4">
              <a href={HUMANVET_PHONE_HREF} className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider">Telefon</p>
                  <p className="font-body text-dark-foreground/70">065 421 47 29</p>
                </div>
              </a>
              <a
                href={HUMANVET_MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider">Adresa</p>
                  <p className="font-body text-dark-foreground/70">Moše Pijade 87, Bački Jarak</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-gold py-16">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-primary-foreground">
            Upoznajte nas
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Ako vam je bitno ko brine o psu dok vas nema, javite se. Objasnićemo pristup, uslove boravka i kako izgleda prvi trening — bez obaveze.
          </p>
          <Link
            to="/kontakt"
            className="inline-block mt-8 bg-dark px-10 py-4 font-heading text-sm uppercase tracking-widest text-dark-foreground hover:bg-dark-muted transition-colors"
          >
            Pošaljite upit
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
