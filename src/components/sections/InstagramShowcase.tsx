import { motion } from "motion/react";
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

export const InstagramShowcase: React.FC = () => {
  const feedItems = [
    {
      id: "i1",
      image: "https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/734896410_1353667023389319_987341822602035006_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=wQiMDJaCkbgQ7kNvwH4lEzj&_nc_oc=AdpmOtZ-lnx2NSt6fekwiqHi4GvordwObAmgS2jFOhqugE_xZ_pieQ47pGoKn8jGB-XDAcepVlGr4b0mXIUyesMB&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD5wH2BN-0Dcdr5bZ741i7f9ba1kQ17mLx5tFty5WDEFUaew&oe=6A6D8A3D",
      likes: "1.4k",
      comments: "42",
      tag: "BridalGlam",
    },
    {
      id: "i2",
      image: "https://scontent.flko1-2.fna.fbcdn.net/v/t1.15752-9/734718080_1352506126842373_4469514152813244388_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=fUdLlgjXMWYQ7kNvwE4ZKtC&_nc_oc=Adoa3MVyVEIi15f0xKTRhJX90cvZScS4ocGuNmZCIguQNvlgCB6-U-ZAMmhjmB2u601iY-N1FrlZmUTOM4mSNuI5&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD5wFf_jZ9a25gLa_mJTVohg0Sldh3UVBq4xXAO9PWv9TE9w&oe=6A6D8598",
      likes: "980",
      comments: "19",
      tag: "CoutureBalayage",
    },
    {
      id: "i3",
      image: "https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/732011186_1709103356909261_8899242469636402497_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=tcgwM-x4SAAQ7kNvwEII4jJ&_nc_oc=AdqNpCONPbXkrG-1WTCHagu7gePKwNjjfsWpKAQrZX5GhxntQu-RyA6lxL5CLTwrka8MdE_bgz7sS5seGTS6BIeI&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD5wF7KjRQFvs6dc-mturfckVzFS1eFbCAVqTHWLDBUGSptQ&oe=6A6D6FA0",
      likes: "2.1k",
      comments: "85",
      tag: "CelebrityMakeup",
    },
    {
      id: "i4",
      image: "https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/735734776_1307299951433601_487309044681863794_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=_PlbD9RcSfsQ7kNvwFVDi7m&_nc_oc=AdoAVoV9wx9lbkgUpxqARfLItI81Dz6H6PpTlfeyS4ANacLobG1bpGfJKFHEIr7raUU2VrPTDrzlAx1T_ZH3lWTJ&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD5wG8W03_oFh3QHbmfcudQu6WiFnDPrWx-6hY1d0RkDhbbw&oe=6A6D7AFF",
      likes: "740",
      comments: "31",
      tag: "LuxuryNailArt",
    },
    {
      id: "i5",
      image: "https://scontent.flko1-3.fna.fbcdn.net/v/t1.15752-9/732226162_2147155112898452_6605051886844535121_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=ZuVhU6weOaYQ7kNvwGQiK_R&_nc_oc=AdotfPeABzJ3ebV0Nq43YJAXNrSQFFCCMulg11ZC62y3j96oYDdqAAT02DLY93TUXVr_atIFI2q8nvRgjPXi4rH7&_nc_zt=23&_nc_ht=scontent.flko1-3.fna&_nc_ss=7b6a8&oh=03_Q7cD5wEOyx3pvtApZAaX-lEiZY8PyJ2tXZCSK4JTMC_oqAwjFQ&oe=6A6D809B",
      likes: "1.8k",
      comments: "64",
      tag: "FlawlessAesthetics",
    },
    {
      id: "i6",
      image: "https://scontent.flko1-3.fna.fbcdn.net/v/t1.15752-9/733810152_2012164896059935_8205604386558258185_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=vFDQ5r1G26IQ7kNvwEMFWKr&_nc_oc=AdqjdYKK6Jqsm9N_r4p94524GZq2p3AIx7qrwedfp3h8TwzHt7EusKaKKMIdOFnRyoAMgHlcpkN_d6AGPVczigPw&_nc_zt=23&_nc_ht=scontent.flko1-3.fna&_nc_ss=7b6a8&oh=03_Q7cD5wFwZrynJODEwWueES-1HXHUQrdK2ozJ3VVevPEZ8JasKw&oe=6A6D7EA7",
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
