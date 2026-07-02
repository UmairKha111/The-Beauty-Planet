import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Award, Clock, Check, ChevronDown, ChevronUp, Sparkles, MessageCircle, Info } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";
import { PremiumButton } from "../ui/PremiumButton";

interface AcademyProps {
  onPageChange: (pageId: string) => void;
  setSelectedCourse?: (courseTitle: string) => void;
}

export const Academy: React.FC<AcademyProps> = ({ onPageChange, setSelectedCourse }) => {
  const [expandedCourse, setExpandedCourse] = React.useState<string | null>("c1");

  const toggleCourse = (id: string) => {
    if (expandedCourse === id) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(id);
    }
  };

  const handleInquireCourse = (courseTitle: string) => {
    if (setSelectedCourse) {
      setSelectedCourse(courseTitle);
    }
    // Formulate a beautiful message to send on WhatsApp
    const message = encodeURIComponent(
      `Hello The Beauty Planet Academy! I would like to inquire about the course: "${courseTitle}". Please share batch timings and enrollment details.`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 bg-luxury-dark relative overflow-hidden">
      {/* Subtle top horizontal separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold block mb-3">
              {siteConfig.academy.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              {siteConfig.academy.heading}
            </h2>
            <div className="w-16 h-[1.5px] bg-gold-400 mt-5" />
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
              {siteConfig.academy.description}
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {siteConfig.academy.benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-4 p-5 bg-luxury-black border border-white/5 hover:border-gold-400/10 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0">
                <Check size={14} />
              </div>
              <div>
                <p className="text-sm font-light text-gray-200 leading-normal">
                  {benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses Listing with Curriculums Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Courses Accordion List (7 columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <h3 className="font-serif text-lg sm:text-xl text-white font-light tracking-wide uppercase mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-gold-400" />
              <span>Available Professional Diplomas</span>
            </h3>

            {siteConfig.academy.courses.map((course) => {
              const isExpanded = expandedCourse === course.id;
              return (
                <div
                  key={course.id}
                  className={`border transition-all duration-500 rounded-none overflow-hidden ${
                    isExpanded
                      ? "bg-luxury-black border-gold-400/30 shadow-lg shadow-gold-500/5"
                      : "bg-luxury-black/60 border-white/5 hover:border-gold-400/20"
                  }`}
                >
                  {/* Clickable Header */}
                  <div
                    onClick={() => toggleCourse(course.id)}
                    className="p-5 sm:p-6 flex justify-between items-center cursor-pointer select-none"
                  >
                    <div className="flex flex-col space-y-1 pr-4">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[9px] tracking-wider font-mono text-gold-400 bg-gold-400/10 px-2.5 py-0.5 uppercase">
                          {course.duration}
                        </span>
                        <span className="text-[9px] tracking-wider font-sans text-gray-500 uppercase">
                          {course.level}
                        </span>
                      </div>
                      <h4 className="font-serif text-base sm:text-lg md:text-xl text-white font-light mt-1.5 hover:text-gold-400 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 italic font-light">
                        {course.tagline}
                      </p>
                    </div>

                    <div className="text-gold-400 shrink-0">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Expandable Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <div className="p-6 sm:p-8 border-t border-white/5 bg-luxury-black/95">
                          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                            {course.description}
                          </p>

                          {/* Certification Badge */}
                          <div className="flex items-start gap-3 p-4 bg-luxury-dark border border-white/5 mb-6">
                            <Award className="text-gold-400 shrink-0 mt-0.5" size={16} />
                            <div>
                              <p className="text-xs text-gold-400 font-semibold tracking-wider uppercase">
                                Award Credentials
                              </p>
                              <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                                {course.certification}
                              </p>
                            </div>
                          </div>

                          {/* Curriculum Syllabus list */}
                          <div className="mb-6">
                            <p className="text-xs tracking-wider uppercase font-semibold text-white mb-3">
                              Syllabus Curriculum:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-400 font-light">
                              {course.curriculum.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-gold-400 shrink-0 mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Action footer */}
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/5">
                            <div>
                              <span className="text-xs text-gray-500 block uppercase tracking-wider">
                                Tuition Investment
                              </span>
                              <span className="font-serif text-xl sm:text-2xl text-gold-400 font-light">
                                {course.price} <span className="text-xs font-sans text-gray-500 font-light">Total Fee</span>
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                              <PremiumButton
                                variant="gold"
                                size="sm"
                                icon={<MessageCircle size={14} />}
                                onClick={() => handleInquireCourse(course.title)}
                                className="w-full sm:w-auto"
                              >
                                Enquire Now
                              </PremiumButton>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick Academy Image Spotlight Card (5 columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h3 className="font-serif text-lg sm:text-xl text-white font-light tracking-wide uppercase mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-gold-400" />
              <span>Campus Spotlight</span>
            </h3>

            <div className="relative group overflow-hidden border border-white/10 aspect-16/10 lg:aspect-square">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="The Beauty Planet Academy Training Session"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="text-[10px] tracking-[0.25em] text-gold-400 uppercase font-semibold">
                  LIVE INTERNSHIPS
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-white font-light mt-1 uppercase">
                  Real salon client practice
                </h4>
              </div>
            </div>

            <div className="p-5 bg-luxury-black border border-white/5 flex gap-4">
              <Info className="text-gold-400 shrink-0" size={18} />
              <div className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                We provide dynamic training with real clients under close supervision, ensuring you gain practical, professional confidence before launching your career.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
