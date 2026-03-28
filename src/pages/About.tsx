import { Link } from "react-router-dom";
import { Shield, Sparkles, Eye } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroAbout from "@/assets/hero-about.jpg";
import trainerPortrait from "@/assets/trainer-portrait.jpg";

const values = [
  { icon: Shield, title: "Disciplina bez surovosti", desc: "Verujemo u jasan autoritet i pozitivnu motivaciju." },
  { icon: Sparkles, title: "Higijena i komfor", desc: "Sobe se čiste svakodnevno, a prostor je klimatizovan radi maksimalne udobnosti." },
  { icon: Eye, title: "Transparentnost", desc: "Vlasnici dobijaju redovne izveštaje, slike ili video snimke svog psa tokom boravka." },
];

const About = () => {
  return (
    <>
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
                Profesionalni dreser sa karijerom građenom u Vojsci Srbije. Kao dugogodišnji vodič službenih pasa, Milan donosi najviše standarde discipline, sigurnosti i stručnosti u rad sa vašim ljubimcima. Svaki trening u centru "DUH" zasnovan je na iskustvu gde su preciznost i poverenje ključ uspeha.
              </p>
              <p>
                Srce ovog pansiona i razlog za njegovo ime je Duh – moj službeni pas sa kojim sam prošao kroz najteže vojničke zadatke. On nije bio samo radni pas, već partner koji me je naučio da se vrhunski rezultati postižu isključivo kroz uzajamno poštovanje i nepokolebljivu disciplinu.
              </p>
              <p>
                Danas, kroz "Dresura i pension za pse Duh", tu istu posvećenost i vojničku preciznost prenosim na rad sa vašim ljubimcima. Naš pristup nije samo obično čuvanje pasa – to je sistematska briga o njihovom fizičkom i mentalnom stanju, u uslovima koji simuliraju toplinu doma, ali zadržavaju najviše standarde bezbednosti.
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
        <div className="text-center mt-12">
          <Link to="/kontakt" className="inline-block bg-gold px-8 py-4 font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-gold-dark transition-colors">
            Kontaktirajte nas
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
