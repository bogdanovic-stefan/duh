import { Link } from "react-router-dom";
import { Shield, Home, TreePine, Target, Phone, MapPin, Mail, Truck, Car, ParkingCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroDogPortrait from "@/assets/hero-dog-portrait.jpg";
import trainerPortrait from "@/assets/trainer-portrait.jpg";
import facilityInterior from "@/assets/facility-interior.jpg";
import facilityYard from "@/assets/facility-yard.jpg";
import facilityTraining from "@/assets/facility-training.jpg";
import facilityHomeBoarding from "@/assets/facility-home-boarding.jpg";
import serviceObedience from "@/assets/service-obedience.jpg";
import serviceSocialization from "@/assets/service-socialization.jpg";
import serviceProtection from "@/assets/service-protection.jpg";

const facilities = [
  { icon: Home, title: "Unutrašnji hotel", desc: "Prostrane, čiste i klimatizovane sobe.", image: facilityInterior },
  { icon: Shield, title: "Kućni pansion", desc: "Boravak u toplom, porodičnom okruženju.", image: facilityHomeBoarding },
  { icon: TreePine, title: "Dvorište", desc: "Velika travnata površina za istrčavanje i igru.", image: facilityYard },
  { icon: Target, title: "Poligon", desc: "Opremljen teren za profesionalnu obuku i učenje.", image: facilityTraining },
];

const services = [
  { title: "Osnovna i napredna obuka", desc: "Od hodanja na povocu do kompleksnih komandi, gradimo autoritet kroz poverenje.", image: serviceObedience },
  { title: "Socijalizacija", desc: "Rad sa psima na ponašanju u grupi i eliminisanju strahova ili agresije.", image: serviceSocialization },
  { title: "Napad i odbrana", desc: "Profesionalna priprema radnih pasa uz maksimalnu kontrolu i disciplinu.", image: serviceProtection },
];

const directions = [
  { icon: Car, title: "Autom", desc: "Jednostavan prilaz iz pravca Novog Sada (samo 15 min vožnje)." },
  { icon: Truck, title: "Naš prevoz", desc: "Vršimo uslugu prevoza pasa koji dolaze na pansion direktno sa vaše adrese." },
  { icon: ParkingCircle, title: "Pristupačnost", desc: "Obezbeđen parking ispred objekta i lak istovar pasa." },
];

const Index = () => {
  return (
    <>
      <HeroSection
        image={heroDogPortrait}
        title="Dresura i pension za pse"
        scriptText="Duh"
        subtitle="Sigurno mesto za vašeg psa – profesionalna dresura, hotel za pse, kućni smeštaj i veliko dvorište."
        ctaLabel="Rezerviši smeštaj"
        ctaTo="/kontakt"
        secondaryCta={{ label: "Pogledaj programe obuke", to: "/usluge" }}
      />

      {/* Quick Info Bar */}
      <div className="hidden md:block bg-gold">
        <div className="container py-4 flex flex-row justify-center items-center gap-12 text-primary-foreground">
          <span className="font-heading text-sm uppercase tracking-widest">Dresura</span>
          <span className="font-heading text-sm uppercase tracking-widest">Pansion</span>
          <span className="font-heading text-sm uppercase tracking-widest">Profesionalni poligon</span>
          <span className="font-heading text-sm uppercase tracking-widest">Nadzor 24/7</span>
          <span className="font-heading text-sm uppercase tracking-widest">Usluga prevoza pasa</span>
        </div>
      </div>

      {/* Why Here */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold">
            Zašto baš ovde
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
            Smešten u Bačkom Jarku, DUH je stvoren za vlasnike kojima je bitna bezbednost i pravilan razvoj psa. Bilo da vam treba socijalizacija ili sigurno mesto za boravak — vaš pas ovde dobija stručnu pažnju i prostor za istrčavanje.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
          <a href="tel:+381638003865" className="flex flex-col items-center gap-2 p-6 rounded-lg hover:bg-muted transition-colors">
            <span className="font-heading text-xs uppercase tracking-widest text-gold mb-1">Kontakt</span>
            <Phone className="w-6 h-6 text-gold" />
            <span className="font-heading text-sm uppercase tracking-wider">063 800 3865</span>
          </a>
          <a href="mailto:dresuraipansionzapseduh@gmail.com" className="flex flex-col items-center gap-2 p-6 rounded-lg hover:bg-muted transition-colors">
            <span className="font-heading text-xs uppercase tracking-widest text-gold mb-1">Email</span>
            <Mail className="w-6 h-6 text-gold" />
            <span className="font-heading text-sm uppercase tracking-wider text-center break-all">dresuraipansionzapseduh@gmail.com</span>
          </a>
          <a href="https://www.google.com/maps/place/Dresura+pasa+DUH/@45.3710946,19.8660011,17z/data=!4m15!1m8!3m7!1s0x475b16182f2680ff:0x4ddaed4ae917690c!2zxb1lbGV6bmnEjWthIDIsIEJhxI1raSBKYXJhayAyMTIzNA!3b1!8m2!3d45.3710946!4d19.8660011!16s%2Fg%2F11wb1nffrh!3m5!1s0x475b111aafb5170d:0xc25f272da0f5f94e!8m2!3d45.3711133!4d19.8659121!16s%2Fg%2F11z1hsywcj?hl=en-GB&entry=ttu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-6 rounded-lg hover:bg-muted transition-colors">
            <span className="font-heading text-xs uppercase tracking-widest text-gold mb-1">Lokacija</span>
            <MapPin className="w-6 h-6 text-gold" />
            <span className="font-heading text-sm uppercase tracking-wider">Železnička 2, Bački Jarak</span>
          </a>
        </div>
      </SectionWrapper>

      {/* Facilities */}
      <SectionWrapper dark>
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold text-center">
          Naš prostor
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {facilities.map((f) => (
            <div key={f.title} className="group overflow-hidden flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={f.image} alt={f.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 bg-dark-muted flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <f.icon className="w-5 h-5 text-gold shrink-0" />
                  <h3 className="font-heading text-lg uppercase tracking-wider">{f.title}</h3>
                </div>
                <p className="font-body text-sm text-dark-foreground/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Services Preview */}
      <SectionWrapper>
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold text-center">
          Izdvojene usluge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((s) => (
            <div key={s.title} className="group">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-heading text-xl uppercase tracking-wider mt-4">{s.title}</h3>
              <p className="font-body text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/usluge" className="inline-block bg-gold px-8 py-4 font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-gold-dark transition-colors">
            Svi programi i cene
          </Link>
        </div>
      </SectionWrapper>

      {/* Directions */}
      <SectionWrapper dark>
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold text-center">
          Kako do nas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {directions.map((d) => (
            <div key={d.title} className="flex flex-col items-center text-center p-6">
              <d.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-heading text-lg uppercase tracking-wider mb-2">{d.title}</h3>
              <p className="font-body text-sm text-dark-foreground/70">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 aspect-video w-full max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800!2d19.8660011!3d45.3710946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b111aafb5170d:0xc25f272da0f5f94e!2sDresura+pasa+DUH!5e0!3m2!1ssr!2srs!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokacija - Železnička 2, Bački Jarak"
          />
        </div>
      </SectionWrapper>

      {/* Meet the Trainer */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
            <img src={trainerPortrait} alt="Milan - profesionalni dreser" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-heading text-sm uppercase tracking-widest text-gold mb-2">Upoznajte dresera</p>
            <h2 className="font-script text-5xl md:text-6xl text-gold">Milan</h2>
            <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
              Profesionalni dreser sa karijerom građenom u Vojsci Srbije. Kao dugogodišnji vodič službenih pasa, Milan donosi najviše standarde discipline, sigurnosti i stručnosti u rad sa vašim ljubimcima.
            </p>
            <p className="font-body text-lg text-muted-foreground mt-4 leading-relaxed">
              Svaki trening u centru "DUH" zasnovan je na iskustvu gde su preciznost i poverenje ključ uspeha.
            </p>
            <Link to="/o-nama" className="inline-block mt-8 border-2 border-gold px-8 py-3 font-heading text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
              Pročitaj više
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-gold py-16">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-primary-foreground">
            Kontaktirajte nas
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Isplanirajte boravak ili obuku vašeg ljubimca bez komplikacija. Odgovaramo brzo i možemo pomoći oko prevoza, specifičnih dijeta i termina obuke.
          </p>
          <Link
            to="/kontakt"
            className="inline-block mt-8 bg-dark px-10 py-4 font-heading text-sm uppercase tracking-widest text-dark-foreground hover:bg-dark-muted transition-colors"
          >
            Rezervacija
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
