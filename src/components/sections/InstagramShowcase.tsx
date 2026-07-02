import { motion } from "motion/react";
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

export const InstagramShowcase: React.FC = () => {
  const feedItems = [
    {
      id: "i1",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=600&q=80",
      likes: "1.4k",
      comments: "42",
      tag: "BridalGlam",
    },
    {
      id: "i2",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
      likes: "980",
      comments: "19",
      tag: "CoutureBalayage",
    },
    {
      id: "i3",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
      likes: "2.1k",
      comments: "85",
      tag: "CelebrityMakeup",
    },
    {
      id: "i4",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
      likes: "740",
      comments: "31",
      tag: "LuxuryNailArt",
    },
    {
      id: "i5",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
      likes: "1.8k",
      comments: "64",
      tag: "FlawlessAesthetics",
    },
    {
      id: "i6",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      likes: "3.2k",
      comments: "156",
      tag: "BeautyAcademy",
    }
  ];

  return (
    <section className="py-24 bg-luxury-dark relative overflow-hidden border-t border-white/5">
      {/* Absolute backdrop glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold block mb-3 flex items-center gap-1.5">
              <Instagram size={13} />
              <span>Social Spotlight</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight">
              Behind The Scenes On Instagram
            </h2>
            <div className="w-16 h-[1.5px] bg-gold-400 mt-5" />
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs tracking-widest font-semibold uppercase bg-gold-400 text-black hover:bg-white hover:text-black transition-all duration-300 shadow-md"
            >
              <Instagram size={14} />
              <span>Follow @{siteConfig.brand.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Instashowcase Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feedItems.map((item, idx) => (
            <motion.a
              key={item.id}
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group aspect-square bg-luxury-black border border-white/5 overflow-hidden shadow-lg block"
            >
              {/* Actual Image */}
              <img
                src={item.image}
                alt={`The Beauty Planet style post #${item.id}`}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover Details Mask Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4 z-10 text-white">
                <div className="flex items-center justify-between text-[10px] text-gold-400">
                  <span className="font-mono tracking-wider">#{item.tag}</span>
                  <ExternalLink size={10} />
                </div>

                <div className="flex justify-center gap-4 text-sm font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="text-red-500 fill-red-500" />
                    <span>{item.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    <span>{item.comments}</span>
                  </span>
                </div>

                <div className="text-[8px] uppercase tracking-wider text-gray-400 text-center">
                  Click to View Post
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Subtext banner */}
        <div className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1 text-gold-500">
            <Sparkles size={12} />
            <span>Tag us on your posts with #TheBeautyPlanet to get featured in our Royal Catalogue.</span>
          </span>
        </div>
      </div>
    </section>
  );
};
