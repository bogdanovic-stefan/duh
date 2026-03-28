import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    service: "Pansion",
    dates: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Upit - ${formData.service}`);
    const body = encodeURIComponent(
      `Ime: ${formData.name}\nRasa/Starost: ${formData.breed}\nUsluga: ${formData.service}\nDatum: ${formData.dates}\n\nPoruka: ${formData.message}`
    );
    window.location.href = `mailto:dresuraipansionzapseduh@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <HeroSection
        image={heroContact}
        title="Kontakt"
        subtitle="Dresura, pension, rezervacija — pišite kad god."
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

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider">Adresa</p>
                  <p className="font-body text-muted-foreground">Železnička 2, Bački Jarak</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gold/10 hover:bg-gold/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gold/10 hover:bg-gold/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gold" />
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
                  <option>Prevoz</option>
                  <option>Pansion + Obuka</option>
                </select>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800!2d19.87!3d45.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zxb1lbGV6bmnEjWthIDIsIEJhxI1raSBKYXJhaw!5e0!3m2!1ssr!2srs!4v1"
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
