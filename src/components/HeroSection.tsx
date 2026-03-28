import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  scriptText?: string;
  ctaLabel?: string;
  ctaTo?: string;
  secondaryCta?: { label: string; to: string };
  overlay?: "dark" | "medium" | "light";
  height?: "full" | "large" | "medium";
}

const HeroSection = ({
  image,
  title,
  subtitle,
  scriptText,
  ctaLabel,
  ctaTo = "/kontakt",
  secondaryCta,
  overlay = "dark",
  height = "full",
}: HeroSectionProps) => {
  const overlayOpacity = overlay === "dark" ? "bg-dark/70" : overlay === "medium" ? "bg-dark/50" : "bg-dark/30";
  const heightClass = height === "full" ? "min-h-screen" : height === "large" ? "min-h-[70vh]" : "min-h-[50vh]";

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className={`absolute inset-0 ${overlayOpacity}`} />

      <div className="relative z-10 container text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-dark-foreground text-shadow-lg"
        >
          {title}
        </motion.h1>

        {scriptText && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-3xl md:text-5xl text-gold mt-4 text-shadow"
          >
            {scriptText}
          </motion.p>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-dark-foreground/80 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {(ctaLabel || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            {ctaLabel && (
              <Link
                to={ctaTo}
                className="inline-block bg-gold px-8 py-4 font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-gold-dark transition-colors"
              >
                {ctaLabel}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="inline-block border-2 border-dark-foreground/30 px-8 py-4 font-heading text-sm uppercase tracking-widest text-dark-foreground hover:border-gold hover:text-gold transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
