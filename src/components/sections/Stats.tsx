import { motion } from "motion/react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

export const Stats: React.FC = () => {
  return (
    <section className="relative py-16 bg-luxury-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {siteConfig.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4 relative"
            >
              {/* Optional separator line for large screens */}
              {idx < 3 && (
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
              
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gold-400 mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-gray-400 uppercase font-light">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
