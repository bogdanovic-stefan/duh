import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import logoDuh from "@/assets/logo-duh.webp";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logoDuh} alt="DUH - Dresura i pansion za pse" className="h-14 w-auto mb-4" />
            <p className="text-sm text-dark-foreground/70 font-body leading-relaxed">
              Profesionalna dresura i pansion za pse. Vojnička preciznost, kućna toplina.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/dresuraipansionzapseduhnovisad/" target="_blank" rel="noopener noreferrer" className="text-dark-foreground/60 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/dresura.pasa.duh" target="_blank" rel="noopener noreferrer" className="text-dark-foreground/60 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-dark-foreground/50 font-body mt-3">PIB: 115259625</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-gold mb-4">Navigacija</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: "Početna" },
                { to: "/o-nama", label: "O nama" },
                { to: "/usluge", label: "Usluge" },
                { to: "/galerija", label: "Galerija" },
                { to: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-dark-foreground/70 hover:text-gold transition-colors font-body">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-gold mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3 text-sm text-dark-foreground/70 font-body">
              <a href="tel:+381638003865" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                063 800 3865
              </a>
              <a href="mailto:dresuraipansionzapseduh@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                dresuraipansionzapseduh@gmail.com
              </a>
              <a href="https://www.google.com/maps/place/Dresura+pasa+DUH/@45.3710946,19.8660011,17z/data=!4m15!1m8!3m7!1s0x475b16182f2680ff:0x4ddaed4ae917690c!2zxb1lbGV6bmnEjWthIDIsIEJhxI1raSBKYXJhayAyMTIzNA!3b1!8m2!3d45.3710946!4d19.8660011!16s%2Fg%2F11wb1nffrh!3m5!1s0x475b111aafb5170d:0xc25f272da0f5f94e!8m2!3d45.3711133!4d19.8659121!16s%2Fg%2F11z1hsywcj?hl=en-GB&entry=ttu" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-gold transition-colors">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Železnička 2, Bački Jarak</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-gold mb-4">Radno vreme</h4>
            <div className="flex flex-col gap-2 text-sm text-dark-foreground/70 font-body">
              <p>Ponedeljak – Nedelja</p>
              <p>Nadzor 24/7</p>
              <p className="mt-2 text-gold">Usluga prevoza pasa</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-muted">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-foreground/50 font-body">
          <p>© {new Date().getFullYear()} Dresura i pansion za pse DUH. Sva prava zadržana.</p>
          <a href="https://github.com/bogdanovic-stefan" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Website by Stefan Bogdanović</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
