import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageCircle, Sparkles, FileText } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";
 
interface HeaderProps {
  currentPage: string;
  onPageChange: (pageId: string) => void;
}
 
export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onPageChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
 
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Salon Services" },
    { id: "academy", label: "Beauty Academy" },
    { id: "gallery", label: "Portfolio" },
    { id: "reviews", label: "Reviews" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];
 
  const handleNavClick = (id: string) => {
    onPageChange(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  const handlePriceList = () => {
    onPageChange("pricelist");
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#0b0b0b] border-b border-white/5 text-[10px] sm:text-xs text-gray-400 py-2 px-4 sm:px-8 flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone size={11} className="text-yellow-500" />
            <span>Call: {siteConfig.contact.phoneDisplay}</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <MessageCircle size={11} className="text-green-500" />
            <span>WhatsApp Live Support Available</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-yellow-500">
            <Sparkles size={11} />
            <span>ISO 9001:2015 Accredited</span>
          </span>
          <span className="hidden sm:inline">Address: Jankipuram, Lucknow</span>
        </div>
      </div>
 
      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          scrolled
            ? "bg-black/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-black py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
 
          {/* Logo */}
          <div
            onClick={() => handleNavClick("home")}
            className="cursor-pointer flex items-center"
          >
            <img
              src="/logo.png"
              alt="The Beautyy Planet"
              className="h-[60px] w-auto object-contain"
            />
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-xs uppercase tracking-widest transition-all ${
                    isActive ? "text-yellow-500" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow-500"
                    />
                  )}
                </button>
              );
            })}
          </nav>
 
          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* ✅ Price List button — Book Seat ki jagah (desktop) */}
            <button
              onClick={handlePriceList}
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-yellow-500/60 text-yellow-500 hover:bg-yellow-500 hover:text-black text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            >
              <FileText size={13} />
              Price List
            </button>
 
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
 
        </div>
      </motion.header>
 
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 h-full w-[300px] bg-black z-50 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex justify-between items-center mb-8">
                <img src="/logo.png" alt="Logo" className="h-[50px]" />
                <button onClick={() => setIsOpen(false)}>
                  <X size={22} />
                </button>
              </div>
 
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left text-gray-300 uppercase tracking-widest hover:text-yellow-500"
                  >
                    {item.label}
                  </button>
                ))}
 
                {/* ✅ Price List button — mobile drawer mein bhi */}
                <button
                  onClick={handlePriceList}
                  className="flex items-center gap-2 text-left text-yellow-500 uppercase tracking-widest hover:text-yellow-400 border-t border-white/10 pt-6 mt-2 font-semibold"
                >
                  <FileText size={14} />
                  Price List
                </button>
              </div>
 
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};