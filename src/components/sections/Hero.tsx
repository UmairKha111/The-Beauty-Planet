import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Scissors, ArrowRight } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";
import { PremiumButton } from "../ui/PremiumButton";

interface HeroProps {
  onPageChange: (pageId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onPageChange }) => {
  const [currentBg, setCurrentBg] = React.useState(0);
  const images = siteConfig.hero.bgImages;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden bg-black py-20 px-4 sm:px-8">
      {/* Background Image Carousel with Ken Burns Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.55, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentBg]})` }}
          />
        </AnimatePresence>
        
        {/* Luxury Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-transparent to-luxury-black/30" />
      </div>

      {/* Elegant Floating Luxury Light Sparks */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const delay = i * 2;
          const left = 10 + i * 12;
          return (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-gold-400/40 blur-xs animate-pulse"
              style={{
                left: `${left}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${3 + (i % 4)}s`,
              }}
            />
          );
        })}
      </div>

      {/* Hero Core Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Luxury Gold Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-400/30 bg-gold-400/5 mb-6 rounded-none backdrop-blur-xs"
        >
          <Sparkles className="text-gold-400" size={13} />
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-300 font-semibold uppercase">
            {siteConfig.hero.badge}
          </span>
        </motion.div>

        {/* Animated Main Luxury Headline */}
        <div className="overflow-hidden mb-6 py-2">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-extralight tracking-tight text-white leading-[1.1] max-w-4xl"
          >
            Indulge In <span className="italic font-normal text-gold-400 font-serif-luxury">Cinematic</span> Beauty & Artistry
          </motion.h1>
        </div>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mb-12"
        >
          {siteConfig.hero.description}
        </motion.p>

        {/* Dynamic CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <PremiumButton
            variant="gold"
            size="lg"
            icon={<Calendar size={16} />}
            iconPosition="left"
            onClick={() => onPageChange("book")}
            className="w-full sm:w-auto"
          >
            {siteConfig.hero.ctaBook}
          </PremiumButton>
          <PremiumButton
            variant="outline"
            size="lg"
            icon={<Scissors size={15} />}
            iconPosition="right"
            onClick={() => onPageChange("services")}
            className="w-full sm:w-auto border-gold-400 text-gold-400"
          >
            {siteConfig.hero.ctaServices}
          </PremiumButton>
          <PremiumButton
            variant="dark"
            size="lg"
            onClick={() => onPageChange("academy")}
            className="w-full sm:w-auto text-white"
          >
            {siteConfig.hero.ctaAcademy}
          </PremiumButton>
        </motion.div>

        {/* Scroll Down Hint / Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-[-15px] sm:bottom-[-25px] flex flex-col items-center cursor-pointer"
          onClick={() => onPageChange("services")}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-gold-400/70 font-light mb-1.5">
            Discover Experience
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gold-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
