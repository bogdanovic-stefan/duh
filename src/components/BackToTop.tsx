import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gold hover:bg-gold-dark text-primary-foreground flex items-center justify-center shadow-lg transition-colors"
      aria-label="Vrati se na vrh"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
