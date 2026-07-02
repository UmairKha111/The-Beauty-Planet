import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = React.useState<string | null>("f1");

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-radial-gradient opacity-20 pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-radial-gradient opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold block mb-3">
            Concierge Support
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Frequently Asked Queries
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Have questions about booking sessions, professional curriculums, or certifications? Read our verified guide.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border transition-colors duration-400 ${
                  isOpen
                    ? "bg-luxury-dark border-gold-400/30 shadow-lg shadow-gold-500/5"
                    : "bg-luxury-dark/50 border-white/5 hover:border-gold-400/10"
                }`}
              >
                {/* Header button click trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex gap-3 items-start pr-2">
                    <HelpCircle size={18} className="text-gold-400 shrink-0 mt-0.5" />
                    <span className="font-serif text-base sm:text-lg text-white font-light hover:text-gold-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-gold-400 shrink-0">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-400 font-light leading-relaxed border-t border-white/5 bg-luxury-dark/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
