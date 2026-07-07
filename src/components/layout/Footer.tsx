import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Facebook,
  Send,
} from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

interface FooterProps {
  onPageChange: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const handleNavClick = (id: string) => {
    onPageChange(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-luxury-black border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-radial-gradient opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/5">

          {/* Brand Info */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] text-white">
                THE BEAUTY
                <span className="text-gold-400 font-normal">Y</span>
              </span>

              <p className="text-[9px] tracking-[0.5em] text-gold-400 uppercase">
                PLANET
              </p>
            </div>

            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Experience the absolute height of premium salon aesthetics &
              internationally accredited beauty training. Guided by elite
              artists, tailored for the sophisticated mind.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
              >
                <Youtube size={16} />
              </a>

              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-6">

            <h4 className="font-serif text-sm tracking-widest text-gold-400 uppercase">
              Quick Navigation
            </h4>

            <div className="grid grid-cols-2 gap-3 text-sm">

              {[
                ["home", "Home"],
                ["about", "About Us"],
                ["services", "Salon Services"],
                ["academy", "Beauty Academy"],
                ["gallery", "Gallery"],
                ["reviews", "Client Reviews"],
                ["faq", "FAQ"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="text-gray-400 hover:text-white transition-colors text-left font-light"
                >
                  {label}
                </button>
              ))}

            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-6">

            <h4 className="font-serif text-sm tracking-widest text-gold-400 uppercase">
              Luxury Sanctuary
            </h4>

            <div className="space-y-4 text-sm text-gray-400 font-light">

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-gold-400 mt-1 shrink-0"
                />
                <span>{siteConfig.contact.address}</span>
              </div>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 hover:text-gold-400 transition-colors"
              >
                <Phone size={16} className="text-gold-400" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 hover:text-gold-400 transition-colors"
              >
                <Mail size={16} className="text-gold-400" />
                <span>{siteConfig.contact.email}</span>
              </a>

            </div>
          </div>

          {/* Umanz Technology */}
          <div className="flex flex-col space-y-6">

            <h4 className="font-serif text-sm tracking-widest text-gold-400 uppercase">
              Digital Partner
            </h4>

            <div className="space-y-4">

              <div>
                <h3 className="text-lg text-white font-medium">
                  Umanz Technology
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed font-light mt-2">
                  Premium digital agency creating luxury websites,
                  branding experiences, SEO systems and business growth
                  solutions for modern brands.
                </p>
              </div>

              <a
                href="https://umanztechnology.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-white transition-colors text-sm inline-flex"
              >
                www.umanztechnology.in
              </a>

              <div className="flex flex-wrap gap-2">

                <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-gray-400">
                  Web Design
                </span>

                <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-gray-400">
                  Branding
                </span>

                <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-gray-400">
                  SEO
                </span>

                <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-gray-400">
                  Growth
                </span>

              </div>

            </div>

          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-6">

            <h4 className="font-serif text-sm tracking-widest text-gold-400 uppercase">
              VIP Royal Club
            </h4>

            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Subscribe to receive private invitations to masterclasses,
              celebrity styling trends and luxury seasonal catalogs.
            </p>

            <div className="flex border border-white/10 bg-luxury-dark focus-within:border-gold-400 transition-colors">

              <input
                type="email"
                placeholder="Your luxury email"
                className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              />

              <button className="px-4 text-gold-400 hover:text-white hover:bg-gold-400/5 transition-colors">
                <Send size={14} />
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">

          <div className="flex items-center gap-2">
            <Clock
              size={14}
              className="text-gold-400"
            />
            <span>
              Open Every Day: 10:00 AM - 08:30 PM
            </span>
          </div>

          <div className="text-center md:text-right">

            <p>
              © {new Date().getFullYear()}{" "}
              {siteConfig.brand.name}. All Rights Reserved.
            </p>

            <p className="text-[10px] text-gray-600 mt-1">
              Crafted with excellence by{" "}
              <a
                href="https://umanztechnology.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-white transition-colors"
              >
                Umanz Technology
              </a>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};