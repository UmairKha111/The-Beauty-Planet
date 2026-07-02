import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const letters = siteConfig.brand.name.split("");

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-luxury-black text-white"
        >
          {/* Ambient Gold Radial Glow */}
          <div className="absolute inset-0 bg-radial-gradient opacity-60" />

          {/* Luxury Abstract Circle Frame */}
          <div className="relative flex items-center justify-center w-40 h-40 mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border border-gold-400/20"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[90%] h-[90%] rounded-full border-t border-b border-gold-400"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[80%] h-[80%] rounded-full border-l border-r border-gold-400/40"
              animate={{ rotate: 180 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            
            {/* Elegant Letter Emblem "B" or planet sphere */}
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-serif text-5xl font-light text-gold-400 select-none"
            >
              B
            </motion.span>
          </div>

          {/* Staggered Brand Name Reveal */}
          <div className="flex gap-1.5 overflow-hidden py-2 px-6">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className={`font-serif text-xl sm:text-3xl tracking-widest uppercase text-white font-light ${
                  letter === " " ? "w-3" : ""
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle / Academy Indicator */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-3 font-sans text-[10px] sm:text-xs tracking-[0.35em] text-gold-400/80 uppercase font-light"
          >
            {siteConfig.brand.tagline}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mt-6"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
