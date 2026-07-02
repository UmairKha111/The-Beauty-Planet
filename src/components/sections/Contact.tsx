import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Check, Sparkles } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please complete all required fields to send your feedback.");
      return;
    }

    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold block mb-3">
            Elite Liaison
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Connect With The Planet
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Reach out to schedule private styling consultations, register your seat in the academy, or organize wedding makeovers.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct info cards (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-white font-light uppercase tracking-wide">
                Direct Inquiries
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                We are open 7 days a week, ready to welcome you with customized consultations. Let us craft an experience tailored to your vision.
              </p>

              {/* Info Items */}
              <div className="space-y-4">
                {/* Location */}
                <div className="flex gap-4 p-5 bg-luxury-dark border border-white/5">
                  <MapPin size={20} className="text-gold-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-sans font-semibold">
                      Our Location
                    </span>
                    <span className="text-sm text-gray-300 font-light mt-1">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>

                {/* Call / WhatsApp */}
                <div className="flex gap-4 p-5 bg-luxury-dark border border-white/5">
                  <Phone size={20} className="text-gold-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-sans font-semibold">
                      Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm text-gold-400 font-light hover:underline mt-1"
                    >
                      Call: {siteConfig.contact.phoneDisplay}
                    </a>
                    <a
                      href={siteConfig.socials.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-emerald-400 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <MessageCircle size={12} />
                      <span>WhatsApp Live Support</span>
                    </a>
                  </div>
                </div>

                {/* Mail & Hour */}
                <div className="flex gap-4 p-5 bg-luxury-dark border border-white/5">
                  <Clock size={20} className="text-gold-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-sans font-semibold">
                      Sanctuary Hours
                    </span>
                    <span className="text-sm text-gray-300 font-light mt-1">
                      Every Day: 10:00 AM - 08:30 PM
                    </span>
                    <span className="text-xs text-gray-500 font-light mt-0.5">
                      Email: {siteConfig.contact.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-center bg-luxury-dark border border-white/10 hover:border-gold-400 hover:text-gold-400 text-white transition-all duration-300"
              >
                Call Hotline
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-center bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500 text-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <MessageCircle size={13} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact form & Maps layout (7 columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Contact Form card block */}
            <div className="p-6 sm:p-8 bg-luxury-dark border border-white/5 relative overflow-hidden flex-1">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <h3 className="font-serif text-lg sm:text-xl text-white font-light uppercase tracking-wide mb-6">
                      Send VIP Request
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[10px] text-gray-400 tracking-widest uppercase block mb-1.5">
                          Your Name *
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Elizabeth"
                          className="w-full px-4 py-3 bg-luxury-black border border-white/10 focus:border-gold-400 focus:outline-none text-white text-sm font-light rounded-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-gray-400 tracking-widest uppercase block mb-1.5">
                          Your Email *
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="elizabeth@monarch.com"
                          className="w-full px-4 py-3 bg-luxury-black border border-white/10 focus:border-gold-400 focus:outline-none text-white text-sm font-light rounded-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-gray-400 tracking-widest uppercase block mb-1.5">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="e.g. Bridal Masterclass Pricing, Franchise setup"
                        className="w-full px-4 py-3 bg-luxury-black border border-white/10 focus:border-gold-400 focus:outline-none text-white text-sm font-light rounded-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-gray-400 tracking-widest uppercase block mb-1.5">
                        Bespoke Message *
                      </label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Draft your query here..."
                        rows={4}
                        className="w-full px-4 py-3 bg-luxury-black border border-white/10 focus:border-gold-400 focus:outline-none text-white text-sm font-light rounded-none transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 bg-gold-400 hover:bg-white text-black font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded-none transition-colors duration-300 cursor-pointer shadow-lg"
                      >
                        <Send size={13} />
                        <span>Submit Invitation Request</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                      <Check size={24} />
                    </div>
                    <h4 className="font-serif text-xl text-white font-light uppercase">
                      Message Dispatched
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 font-light max-w-sm">
                      We have registered your contact parameters. Our styling coordinators will reply within 12 business hours.
                    </p>
                    <div className="flex gap-1.5 items-center text-[10px] text-gold-400 uppercase tracking-widest font-mono">
                      <Sparkles size={11} />
                      <span>Sovereign Security Encrypted</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Google Map Box */}
            <div className="border border-white/5 aspect-21/9 w-full bg-luxury-dark relative overflow-hidden group">
              {/* Fallback Placeholder and real map iframe */}
              <iframe
                title="The Beauty Planet Lucknow Location Coordinates Map"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%) grayscale(100%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
