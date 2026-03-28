import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-wider mb-4">DUH</h3>
            <p className="text-sm text-dark-foreground/70 font-body leading-relaxed">
              Profesionalna dresura i pansion za pse. Vojnička preciznost, kućna toplina.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/dresuraipansionzapseduhnovisad/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-dark-foreground/60 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/dresura.pasa.duh/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-dark-foreground/60 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
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
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Železnička 2, Bački Jarak</span>
              </div>
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
          <p>© {new Date().getFullYear()} Dresura i pension za pse DUH. Sva prava zadržana.</p>
          <p>Železnička 2, Bački Jarak</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
