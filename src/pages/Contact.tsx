import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    service: "Pansion",
    transport: false,
    dates: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Upit - ${formData.service}`);
    const body = encodeURIComponent(
      `Ime: ${formData.name}\nRasa/Starost: ${formData.breed}\nUsluga: ${formData.service}\nPrevoz: ${formData.transport ? "Da" : "Ne"}\nDatum: ${formData.dates}\n\nPoruka: ${formData.message}`
    );
    window.location.href = `mailto:dresuraipansionzapseduh@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Kontakt – DUH Dresura i pansion za pse | Novi Sad</title>
        <meta name="description" content="Kontaktirajte centar DUH za dresuru i pansion za pse. Telefon, email, adresa i kontakt forma za rezervacije." />
      </Helmet>
      <HeroSection
        image={heroContact}
        title="Kontakt"
        subtitle="Dresura, pansion, rezervacija — pišite kad god."
        height="medium"
        overlay="medium"
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-gold">
              Kontaktirajte nas
            </h2>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              Isplanirajte boravak ili obuku vašeg ljubimca bez komplikacija. Odgovaramo brzo i možemo pomoći oko prevoza, specifičnih dijeta i termina obuke.
            </p>

            <div className="mt-8 space-y-5">
              <a href="tel:+381638003865" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider">Telefon</p>
                  <p className="font-body text-muted-foreground">063 800 3865</p>
                </div>
              </a>

              <a href="mailto:dresuraipansionzapseduh@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider">Email</p>
                  <p className="font-body text-muted-foreground break-all">dresuraipansionzapseduh@gmail.com</p>
                </div>
              </a>

              <a href="https://www.google.com/maps/place/Dresura+pasa+DUH/@45.3710946,19.8660011,17z/data=!4m15!1m8!3m7!1s0x475b16182f2680ff:0x4ddaed4ae917690c!2zxb1lbGV6bmnEjWthIDIsIEJhxI1raSBKYXJhayAyMTIzNA!3b1!8m2!3d45.3710946!4d19.8660011!16s%2Fg%2F11wb1nffrh!3m5!1s0x475b111aafb5170d:0xc25f272da0f5f94e!8m2!3d45.3711133!4d19.8659121!16s%2Fg%2F11z1hsywcj?hl=en-GB&entry=ttu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider">Adresa</p>
                  <p className="font-body text-muted-foreground">Železnička 2, Bački Jarak</p>
                </div>
              </a>

              <a href="https://www.instagram.com/dresuraipansionzapseduhnovisad/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Instagram className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider">Instagram</p>
                  <p className="font-body text-muted-foreground">dresuraipansionzapseduh</p>
                </div>
              </a>

              <a href="https://www.facebook.com/dresura.pasa.duh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Facebook className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider">Facebook</p>
                  <p className="font-body text-muted-foreground">Dresura i pansion za pse DUH</p>
                </div>
              </a>
            </div>

          </div>

          {/* Form */}
          <div className="bg-card border border-border p-8">
            <h3 className="font-heading text-2xl uppercase tracking-wider text-gold mb-2">
              Pošaljite upit
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Koristite formu ispod i odgovorićemo u roku od 24–48h.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-heading text-xs uppercase tracking-wider mb-1.5">Ime i prezime vlasnika *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="Vaše ime"
                />
              </div>

              <div>
                <label className="block font-heading text-xs uppercase tracking-wider mb-1.5">Rasa i starost psa</label>
                <input
                  type="text"
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="Npr. Nemački ovčar, 3 godine"
                />
              </div>

              <div>
                <label className="block font-heading text-xs uppercase tracking-wider mb-1.5">Usluga *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                >
                  <option>Pansion</option>
                  <option>Obuka</option>
                  <option>Pansion + Obuka</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="transport"
                  checked={formData.transport}
                  onChange={(e) => setFormData({ ...formData, transport: e.target.checked })}
                  className="w-4 h-4 accent-gold"
                />
                <label htmlFor="transport" className="font-heading text-xs uppercase tracking-wider cursor-pointer">Prevoz</label>
              </div>

              <div>
                <label className="block font-heading text-xs uppercase tracking-wider mb-1.5">Datum (od–do)</label>
                <input
                  type="text"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="Npr. 15.07 – 22.07"
                />
              </div>

              <div>
                <label className="block font-heading text-xs uppercase tracking-wider mb-1.5">Poruka</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input font-body text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Vaša poruka..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold py-4 font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-gold-dark transition-colors"
              >
                Pošalji
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* Map */}
      <SectionWrapper dark>
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-gold text-center mb-8">
          Pronađite nas
        </h2>
        <div className="aspect-video w-full max-w-5xl mx-auto">
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
    </>
  );
};

export default Contact;
