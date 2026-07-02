import { motion } from "motion/react";
import { Star, MessageCircle, Quote } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";
import { PremiumButton } from "../ui/PremiumButton";

interface TestimonialsProps {
  onPageChange: (pageId: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onPageChange }) => {
  const testimonials = siteConfig.testimonials;

  return (
    <section className="py-24 bg-luxury-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-radial-gradient opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold block mb-3">
            Client Diatribes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Words From Our Royals
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Discover honest testimonials from high-society bridal patrons, regular salon members, and certified academy graduates.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 bg-luxury-black border border-white/5 hover:border-gold-400/20 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Quote Mark background */}
              <div className="absolute top-6 right-6 text-gold-400/5 select-none pointer-events-none group-hover:text-gold-400/10 transition-colors">
                <Quote size={56} />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars Indicator */}
                <div className="flex gap-1 text-gold-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Review Message */}
                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author Info block */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-400/30">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-sm sm:text-base text-white font-light">
                    {testimonial.name}
                  </span>
                  <div className="flex gap-2 items-center text-[10px] text-gray-400">
                    <span className="text-gold-400 uppercase tracking-widest">{testimonial.role}</span>
                    <span>•</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link underneath */}
        <div className="text-center">
          <p className="text-sm text-gray-400 font-light mb-6">
            Loved our high-end grooming or professional academy courses? Share your story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PremiumButton
              variant="outline"
              size="md"
              onClick={() => onPageChange("book")}
            >
              Book Your Experience
            </PremiumButton>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm tracking-wider uppercase border border-transparent hover:border-gold-400 text-gold-400 hover:text-white transition-all duration-300"
            >
              <MessageCircle size={15} />
              <span>Connect On Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
