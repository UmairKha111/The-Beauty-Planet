import { motion, AnimatePresence } from "motion/react";
import { Scissors, Sparkles, Heart, Hand, Smile, Clock, ArrowRight } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";
import { PremiumButton } from "../ui/PremiumButton";

interface ServicesProps {
  onPageChange: (pageId: string) => void;
  setSelectedService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onPageChange, setSelectedService }) => {
  const [activeTab, setActiveTab] = React.useState("hair");

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors":
        return <Scissors size={18} />;
      case "Sparkles":
        return <Sparkles size={18} />;
      case "Heart":
        return <Heart size={18} />;
      case "Hand":
        return <Hand size={18} />;
      case "Smile":
        return <Smile size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  const currentCategory = siteConfig.services.find((cat) => cat.id === activeTab) || siteConfig.services[0];

  const handleBookService = (serviceName: string) => {
    if (setSelectedService) {
      setSelectedService(serviceName);
    }
    onPageChange("book");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold block mb-3">
            Elite Treatments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Our Signature Salon Rituals
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Every service is a bespoke ritual crafted by our global hair stylists, professional cosmetologists, and bridal masters.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16 border-b border-white/5 pb-6">
          {siteConfig.services.map((category) => {
            const isSelected = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-3 text-xs tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer border ${
                  isSelected
                    ? "bg-gold-400 text-black border-gold-400 font-semibold"
                    : "bg-luxury-dark text-gray-400 border-white/5 hover:text-white hover:border-gold-400/40"
                }`}
              >
                {getIcon(category.icon)}
                <span>{category.title.split(" ")[1] || category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Cover Card & Bio (5 columns) */}
          <motion.div
            key={`cover-${activeTab}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="relative group overflow-hidden border border-white/10 aspect-4/3 sm:aspect-16/10 lg:aspect-square">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
              <img
                src={currentCategory.coverImage}
                alt={currentCategory.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="text-[10px] tracking-[0.25em] text-gold-400 uppercase font-semibold">
                  {currentCategory.tagline}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-light mt-1 uppercase">
                  {currentCategory.title}
                </h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
              {currentCategory.description}
            </p>
            <div className="pt-4">
              <PremiumButton
                variant="outline"
                size="md"
                onClick={() => onPageChange("book")}
                icon={<ArrowRight size={14} />}
                className="border-gold-400/30 text-gold-400"
              >
                Book Category Consultation
              </PremiumButton>
            </div>
          </motion.div>

          {/* List of services (7 columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`items-${activeTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col space-y-4"
              >
                {currentCategory.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 bg-luxury-dark border border-white/5 hover:border-gold-400/25 transition-all duration-300 group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                  >
                    <div className="flex gap-4 items-start">
                      {/* Optional service thumbnail */}
                      <div className="w-16 h-16 shrink-0 border border-white/10 overflow-hidden hidden sm:block">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <h4 className="font-serif text-base sm:text-lg text-white font-light group-hover:text-gold-400 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-md">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-mono">
                          <Clock size={11} className="text-gold-500/80" />
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <span className="font-serif text-lg sm:text-xl font-light text-gold-400 mb-1">
                        {item.price}
                      </span>
                      <button
                        onClick={() => handleBookService(`${currentCategory.title} - ${item.name}`)}
                        className="text-[10px] tracking-widest uppercase font-semibold text-white group-hover:text-gold-400 transition-all duration-300 flex items-center gap-1 cursor-pointer border-b border-transparent hover:border-gold-400"
                      >
                        <span>Book</span>
                        <ArrowRight size={10} />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
