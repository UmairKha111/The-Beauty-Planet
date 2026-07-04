import { motion } from "motion/react";
import { Award, Users, ShieldCheck, Heart, Sparkles } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

export const About: React.FC = () => {
  const brandValues = [
    {
      icon: <Award className="text-gold-400" size={24} />,
      title: "Global Accreditation",
      desc: "Our beauty academy maintains standard ISO certifications, ensuring all graduate credentials are high-value and recognized globally.",
    },
    {
      icon: <Users className="text-gold-400" size={24} />,
      title: "Elite Master Educators",
      desc: "Receive hair designing and cosmetic makeovers directly from internationally trained cosmetologists with 8+ years of industry tenure.",
    },
    {
      icon: <ShieldCheck className="text-gold-400" size={24} />,
      title: "Premium Cosmetic Elixirs",
      desc: "We prioritize hair & skin integrity, using only elite dermatologist-approved brands (Dior, Chanel, Olaplex, Schwarzkopf).",
    },
    {
      icon: <Heart className="text-gold-400" size={24} />,
      title: "Royal Client Hospitality",
      desc: "Step into our serene, high-luxury aesthetic lounge featuring a private bar, customized sensory lighting, and master consultations.",
    }
  ];

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-radial-gradient opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold block mb-3">
            Our Elite Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            The Philosophy of The Beauty Planet
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Lucknow's absolute premier destination for discerning individuals seeking high-definition bridal styling, structural hair engineering, and prestigious professional cosmetology training.
          </p>
        </div>

        {/* Narrative & Cover Image (Bento style block) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Text block (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide uppercase">
              Bespoke Luxury Crafted For Your Radiant Majesty
            </h3>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              The Beautyy Planet was established on 16 January 2026 with a mission to deliver luxury beauty experiences and world-class professional beauty education., **The Beauty Planet** (located in Jankipuram Gardens, Lucknow) has elevated luxury grooming to a majestic science. Our salon is not merely a styling lounge; it is a holistic wellness haven where hair chemistry, facial anatomy, and custom chromatic styling converge.
            </p>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Furthermore, through our **Professional Academy**, we act as pioneers of vocational beauty education. We believe in crafting world-class artists rather than just technical graduates. By using premium makeup, skin, and nail products, and conducting intensive hands-on practical masterclasses with actual models, our graduates enter the styling industry equipped with unmatched confidence.
            </p>
            
            {/* Quick statement details */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
              <div>
                <span className="text-gold-400 font-serif text-2xl sm:text-3xl">100%</span>
                <span className="text-[10px] text-gray-400 block uppercase tracking-widest mt-1">Practical focus</span>
              </div>
              <div>
                <span className="text-gold-400 font-serif text-2xl sm:text-3xl">ISO</span>
                <span className="text-[10px] text-gray-400 block uppercase tracking-widest mt-1">Certified Academy</span>
              </div>
              <div>
                <span className="text-gold-400 font-serif text-2xl sm:text-3xl">Premium</span>
                <span className="text-[10px] text-gray-400 block uppercase tracking-widest mt-1">Imported Brands</span>
              </div>
            </div>
          </div>

          {/* Luxury Showcase Image (5 columns) */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-white/10 aspect-square sm:aspect-16/10 lg:aspect-square">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
            <img
              src="https://scontent.flko1-3.fna.fbcdn.net/v/t1.15752-9/732026419_1498153028189470_324578853942697418_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=4LMe6WFxvLYQ7kNvwGdOXjq&_nc_oc=AdpZihYmsfHYZBqDs2XAy_jFGLJfltFt8HG1xrsTz4YKvybxEwH_cyyWdR_qv31CTsfPRgtJIMW1_dnwyCO14Dl8&_nc_ad=z-m&_nc_cid=1012&_nc_zt=23&_nc_ht=scontent.flko1-3.fna&_nc_ss=7a22e&oh=03_Q7cD5wEbjvTHOTtsHUoJFTudmprYIHzlcRyBHAqvi2h2vEiJBQ&oe=6A6DF509"
              alt="The Beauty Planet luxury lounge lobby"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Soft gold decorative frame border */}
            <div className="absolute inset-4 border border-gold-400/20 group-hover:border-gold-400/50 transition-colors pointer-events-none z-20" />
            
            {/* Badge overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-luxury-black/95 border border-gold-400/20 p-4">
              <span className="text-gold-400 font-mono text-[9px] block tracking-widest uppercase mb-1">
                LUCKNOW SANCTUARY
              </span>
              <p className="font-serif text-sm text-white font-light uppercase">
                Step into state-of-the-art aesthetic chambers
              </p>
            </div>
          </div>
        </div>
{/* Owner Section */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 border-t border-white/5 pt-20">

  {/* Owner Image Left */}
  <div className="lg:col-span-5 relative overflow-hidden border border-gold-400/20 group">

    <img
      src="/owner.jpg"
      alt="Owner The Beauty Planet"
      className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/30" />

    <div className="absolute bottom-6 left-6 right-6 bg-luxury-black/90 border border-gold-400/20 p-4">
      <span className="text-gold-400 text-[10px] uppercase tracking-[0.3em] block mb-2">
      Shalini Mishra  Founder & Beauty Artist
      </span>

      <h3 className="text-white text-xl font-serif">
        Owner – The Beautyy Planet
      </h3>
    </div>

  </div>

  {/* Owner Details Right */}
  <div className="lg:col-span-7 space-y-6">

    <span className="text-gold-400 uppercase tracking-[0.3em] text-xs">
      Meet Our Founder
    </span>

    <h2 className="text-white font-serif text-3xl sm:text-4xl">
      Passionate Makeup Artist & Beauty Educator
    </h2>

    <p className="text-gray-300 leading-relaxed">
     
       Shalini mishra
      <span className="text-gold-400">  </span>
        is a passionate and professionally trained
    makeup artist, beauty educator, and entrepreneur dedicated to
    helping women look and feel their absolute best. Her journey in
    the beauty industry is driven by creativity, precision, and a
    commitment to excellence.
    </p>

    <p className="text-gray-300 leading-relaxed">
      Our founder is professionally trained by
      <span className="text-gold-400"> Minakshi Dutt </span>,
      one of India's most recognized makeup educators.
      Through advanced training and hands-on expertise,
      our salon combines modern beauty trends with premium artistry.
    </p>

    <p className="text-gray-300 leading-relaxed">
      From bridal transformations and makeup artistry
      to salon services and beauty academy training,
      every service reflects precision, luxury and creativity.
    </p>

    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">

      <div>
        <span className="text-gold-400 text-2xl font-serif">
          4+ Year's
        </span>
        <span className="block text-[10px] text-gray-400 uppercase tracking-widest mt-2">
          Experience
        </span>
      </div>

      <div>
        <span className="text-gold-400 text-2xl font-serif">
          Certified
        </span>
        <span className="block text-[10px] text-gray-400 uppercase tracking-widest mt-2">
          Makeup Artist
        </span>
      </div>

      <div>
        <span className="text-gold-400 text-2xl font-serif">
          Elite
        </span>
        <span className="block text-[10px] text-gray-400 uppercase tracking-widest mt-2">
          Traininer
        </span>
      </div>

    </div>

  </div>

</div>
        {/* Brand Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/5">
          {brandValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-luxury-dark border border-white/5 hover:border-gold-400/10 transition-colors duration-300 flex flex-col space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center">
                {val.icon}
              </div>
              <h4 className="font-serif text-lg text-white font-light tracking-wide uppercase">
                {val.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
