import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Početna" },
  { to: "/o-nama", label: "O nama" },
  { to: "/usluge", label: "Usluge" },
  { to: "/galerija", label: "Galerija" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg animate-slide-down"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-dark-foreground">
            DUH
          </span>
          <span className="hidden sm:block text-xs font-body uppercase tracking-widest text-gold">
            Dresura & Pansion
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm uppercase tracking-widest transition-colors duration-200 hover:text-gold ${
                location.pathname === link.to
                  ? "text-gold"
                  : "text-dark-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+381638003865"
            className="flex items-center gap-2 bg-gold px-5 py-2.5 font-heading text-sm uppercase tracking-wider text-primary-foreground hover:bg-gold-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            Rezervacija
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-dark-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <nav className="lg:hidden bg-dark/98 backdrop-blur-md border-t border-dark-muted">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-heading text-lg uppercase tracking-widest py-2 transition-colors ${
                  location.pathname === link.to
                    ? "text-gold"
                    : "text-dark-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="flex items-center justify-center gap-2 bg-gold px-5 py-3 mt-2 font-heading text-sm uppercase tracking-wider text-primary-foreground"
            >
              <Phone className="w-4 h-4" />
              Rezervacija
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
