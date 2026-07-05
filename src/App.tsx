import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "./config/siteConfig";
 
// Layout & Core UI
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { WhatsappButton } from "./components/ui/WhatsappButton";
 
// Page/Section Components
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { Services } from "./components/sections/Services";
import { Academy } from "./components/sections/Academy";
import { Portfolio } from "./components/sections/Portfolio";
import { InstagramShowcase } from "./components/sections/InstagramShowcase";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { About } from "./components/sections/About";
import { BookAppointment } from "./components/sections/BookAppointment";
 
// ✅ Price List page
import { PriceList } from "./components/sections/PriceList";
import { PriceListButton } from "./components/ui/PriceListButton";
 
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedService, setSelectedService] = useState("");
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);
 
  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  const handleBookServiceTrigger = (serviceName: string) => {
    setSelectedService(serviceName);
    setCurrentPage("book");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Hero onPageChange={handlePageChange} />
            <Stats />
            <Services onPageChange={handlePageChange} setSelectedService={handleBookServiceTrigger} />
            <Academy onPageChange={handlePageChange} setSelectedCourse={setSelectedService} />
            <Portfolio />
            <InstagramShowcase />
            <Testimonials onPageChange={handlePageChange} />
            <FAQ />
            <Contact />
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            key="about-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <About />
            <Stats />
            <Testimonials onPageChange={handlePageChange} />
          </motion.div>
        );
      case "services":
        return (
          <motion.div
            key="services-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Services onPageChange={handlePageChange} setSelectedService={handleBookServiceTrigger} />
          </motion.div>
        );
      case "academy":
        return (
          <motion.div
            key="academy-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Academy onPageChange={handlePageChange} setSelectedCourse={setSelectedService} />
          </motion.div>
        );
      case "gallery":
        return (
          <motion.div
            key="gallery-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Portfolio />
            <InstagramShowcase />
          </motion.div>
        );
      case "reviews":
        return (
          <motion.div
            key="reviews-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Testimonials onPageChange={handlePageChange} />
          </motion.div>
        );
      case "faq":
        return (
          <motion.div
            key="faq-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FAQ />
          </motion.div>
        );
      case "contact":
        return (
          <motion.div
            key="contact-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Contact />
          </motion.div>
        );
      case "book":
        return (
          <motion.div
            key="book-page"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <BookAppointment selectedService={selectedService} onPageChange={handlePageChange} />
          </motion.div>
        );
 
      // ✅ Price List case — yahi missing tha!
      case "pricelist":
        return (
          <motion.div
            key="pricelist-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PriceList />
          </motion.div>
        );
 
      default:
        return null;
    }
  };
 
  return (
    <>
      <LoadingScreen isLoading={isLoading} />
 
      <div className="relative min-h-screen bg-luxury-black text-white selection:bg-gold-400 selection:text-black overflow-hidden flex flex-col justify-between">
        
        <div className="absolute top-[10%] left-[-20%] w-[60%] h-[50%] bg-radial-gradient opacity-40 pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[-20%] w-[60%] h-[50%] bg-radial-gradient opacity-40 pointer-events-none z-0" />
 
        <div className="absolute inset-0 pointer-events-none z-0 opacity-15">
          <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/5 via-gold-400/5 to-transparent" />
          <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-400/5 to-white/5" />
        </div>
 
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <div>
            <Header currentPage={currentPage} onPageChange={handlePageChange} />
            <main className="w-full">
              <AnimatePresence mode="wait">
                {renderPageContent()}
              </AnimatePresence>
            </main>
          </div>
          <Footer onPageChange={handlePageChange} />
          <WhatsappButton />
          {/* ✅ Floating Price List Button */}
          <PriceListButton onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  );
}