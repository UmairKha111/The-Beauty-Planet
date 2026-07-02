import { motion, AnimatePresence } from "motion/react";
import { Filter, X, Eye, ZoomIn } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [selectedImage, setSelectedImage] = React.useState<{
    image: string;
    title: string;
    category: string;
    description?: string;
  } | null>(null);

  const categories = siteConfig.portfolio.categories;
  const portfolioItems = siteConfig.portfolio.items;

  const filteredItems = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[30%] bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold block mb-3">
            Pure Elegance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            {siteConfig.portfolio.heading}
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            {siteConfig.portfolio.description}
          </p>
        </div>

        {/* Filter Buttons/Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          <div className="flex items-center gap-1.5 text-gray-500 mr-2 hidden sm:flex text-xs uppercase tracking-wider">
            <Filter size={12} className="text-gold-500" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer border ${
                  isSelected
                    ? "bg-gold-400 text-black border-gold-400 font-semibold"
                    : "bg-luxury-dark/80 text-gray-400 border-white/5 hover:text-white hover:border-gold-400/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage({
                  image: item.image,
                  title: item.title,
                  category: item.category,
                  description: item.description
                })}
                className="relative group aspect-square bg-luxury-dark border border-white/5 overflow-hidden cursor-pointer shadow-lg hover:border-gold-400/30 transition-all duration-300"
              >
                {/* Image Cover */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Dark Glass Hover Mask Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6 z-10">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400">
                    <ZoomIn size={14} />
                  </div>
                  <span className="text-[9px] tracking-widest text-gold-400 uppercase font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg text-white font-light mt-1 uppercase">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-xs text-gray-300 font-light mt-1.5 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop Mask */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-black/95 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-4xl w-full bg-luxury-dark border border-white/10 overflow-hidden z-10 flex flex-col md:flex-row shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white hover:text-gold-400 flex items-center justify-center border border-white/15 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Left Side: High Quality Image */}
                <div className="w-full md:w-3/5 aspect-square sm:aspect-16/10 md:aspect-auto md:h-[550px] bg-black">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Side: High Quality Details */}
                <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-luxury-dark">
                  <div className="space-y-4">
                    <span className="text-[10px] sm:text-xs tracking-[0.25em] text-gold-400 uppercase font-semibold">
                      {selectedImage.category} Showcase
                    </span>
                    <h3 className="font-serif text-2xl text-white font-light uppercase tracking-wide">
                      {selectedImage.title}
                    </h3>
                    <div className="w-10 h-[1px] bg-gold-400" />
                    {selectedImage.description && (
                      <p className="text-sm text-gray-400 font-light leading-relaxed">
                        {selectedImage.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/5 flex flex-col gap-3">
                    <p className="text-xs text-gray-500 font-light italic">
                      Interested in reproducing this flawless style? Book a consultation with our primary artists.
                    </p>
                    <a
                      href={siteConfig.socials.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs tracking-widest uppercase font-semibold bg-gold-400 text-black hover:bg-white hover:text-black transition-all duration-300 text-center"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
