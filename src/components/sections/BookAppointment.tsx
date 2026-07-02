import { motion, AnimatePresence } from "motion/react";
import { Calendar as CalendarIcon, Clock, Check, MessageCircle, ArrowRight, ShieldCheck, User, Phone, Sparkles } from "lucide-react";
import * as React from "react";
import { siteConfig } from "../../config/siteConfig";

interface BookAppointmentProps {
  selectedService: string;
  onPageChange: (pageId: string) => void;
}

export const BookAppointment: React.FC<BookAppointmentProps> = ({ selectedService, onPageChange }) => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phoneNumber: "",
    service: selectedService || "",
    date: "",
    timeSlot: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Sync state if selectedService changes from catalog
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const timeSlots = [
    "10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM", "07:00 PM"
  ];

  // Flat list of services from siteConfig for the select list
  const allServices = siteConfig.services.flatMap((category) => 
    category.items.map((item) => `${category.title.split(" ")[1] || category.title} - ${item.name} (${item.price})`)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (slot: string) => {
    setFormData((prev) => ({ ...prev, timeSlot: slot }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.service || !formData.date || !formData.timeSlot) {
      alert("Please complete all required fields to register your seat.");
      return;
    }

    // Success State
    setIsSubmitted(true);

    // Formulate WhatsApp message body
    const msg = `👑 *NEW ROYAL APPOINTMENT REQUEST* 👑
---------------------------------------
👤 *Client:* ${formData.fullName}
📞 *Contact:* ${formData.phoneNumber}
✨ *Service:* ${formData.service}
📅 *Date:* ${formData.date}
⏰ *Preferred Time:* ${formData.timeSlot}
📝 *Special Requests:* ${formData.notes || "None"}
---------------------------------------
_Sent via The Beauty Planet Luxury Reservation portal_`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMsg}`;

    // Open WhatsApp after a brief delay so they see our luxury confirmation screen
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1800);
  };

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-luxury-dark/60 border border-white/5 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-2xl"
            >
              {/* Left Column: Story/Info (5 columns) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                <div>
                  <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold block mb-3">
                    Royal Reservation
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight mb-4">
                    Book Your Sanctuary Seat
                  </h2>
                  <div className="w-16 h-[1.5px] bg-gold-400 mb-6" />
                  <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
                    Indulge in couture aesthetics. Our appointment concierge will contact you immediately to lock in your preferred date and pair you with our leading cosmetologists.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                        Premium Material Hygiene
                      </p>
                      <p className="text-xs text-gray-400 font-light mt-0.5">
                        All chemical products, makeup kits, and sculpting needles undergo autoclave medical-grade sanitation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shrink-0">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                        No Deposit Booking
                      </p>
                      <p className="text-xs text-gray-400 font-light mt-0.5">
                        Reserve your luxurious time slot for free. Settlement occurs on-site post-service.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct info links */}
                <div className="pt-6 border-t border-white/5 text-xs text-gray-500 font-light">
                  <p>Need custom bridal bulk slots or direct corporate bookings?</p>
                  <p className="text-gold-400 font-medium mt-1">
                    Call Direct: {siteConfig.contact.phoneDisplay}
                  </p>
                </div>
              </div>

              {/* Right Column: Form (7 columns) */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
                
                {/* Full Name Input */}
                <div className="relative group">
                  <label className="text-xs text-gray-400 font-sans tracking-widest uppercase block mb-2 font-medium">
                    Full Name <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                      <User size={14} />
                    </span>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full pl-10 pr-4 py-3 bg-luxury-black/80 border border-white/10 text-white placeholder-gray-600 focus:border-gold-400 focus:outline-none transition-colors rounded-none font-light text-sm"
                    />
                  </div>
                </div>

                {/* Contact phone Input */}
                <div className="relative group">
                  <label className="text-xs text-gray-400 font-sans tracking-widest uppercase block mb-2 font-medium">
                    Phone Number <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                      <Phone size={14} />
                    </span>
                    <input
                      required
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 bg-luxury-black/80 border border-white/10 text-white placeholder-gray-600 focus:border-gold-400 focus:outline-none transition-colors rounded-none font-light text-sm"
                    />
                  </div>
                </div>

                {/* Service Dropdown Select */}
                <div className="relative group">
                  <label className="text-xs text-gray-400 font-sans tracking-widest uppercase block mb-2 font-medium">
                    Select Elite Treatment <span className="text-gold-400">*</span>
                  </label>
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-luxury-black/80 border border-white/10 text-white focus:border-gold-400 focus:outline-none transition-colors rounded-none font-light text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-600">-- Choose your ritual --</option>
                    {allServices.map((srv, idx) => (
                      <option key={idx} value={srv} className="bg-luxury-dark text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grid for date picker */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Input */}
                  <div className="relative group">
                    <label className="text-xs text-gray-400 font-sans tracking-widest uppercase block mb-2 font-medium">
                      Select Date <span className="text-gold-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="date"
                        name="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-luxury-black/80 border border-white/10 text-white focus:border-gold-400 focus:outline-none transition-colors rounded-none font-light text-sm cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Time Slots Selection */}
                  <div className="flex flex-col">
                    <label className="text-xs text-gray-400 font-sans tracking-widest uppercase block mb-2 font-medium">
                      Preferred Time Slot <span className="text-gold-400">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => {
                        const isSelected = formData.timeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className={`py-2 px-1 text-[10px] uppercase tracking-wider transition-all duration-300 rounded-none cursor-pointer border ${
                              isSelected
                                ? "bg-gold-400 text-black border-gold-400 font-semibold"
                                : "bg-luxury-black/80 text-gray-400 border-white/10 hover:border-gold-400/40 hover:text-white"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="relative group">
                  <label className="text-xs text-gray-400 font-sans tracking-widest uppercase block mb-2 font-medium">
                    Special Demands / Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. skin sensitivities, specific master stylist preference, nail extension shape, etc."
                    rows={3}
                    className="w-full px-4 py-3 bg-luxury-black/80 border border-white/10 text-white placeholder-gray-600 focus:border-gold-400 focus:outline-none transition-colors rounded-none font-light text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-gold-400 text-black font-semibold text-xs sm:text-sm tracking-[0.15em] py-4 uppercase flex items-center justify-center gap-2 rounded-none transition-colors hover:bg-white hover:text-black cursor-pointer shadow-lg shadow-gold-500/10"
                  >
                    <MessageCircle size={16} />
                    <span>Confirm & Book on WhatsApp</span>
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          ) : (
            /* Success confirmation splash block */
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="max-w-xl mx-auto p-8 sm:p-12 bg-luxury-dark border border-gold-400/30 text-center flex flex-col items-center space-y-6 shadow-2xl relative"
            >
              {/* Inner shiny glow */}
              <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />

              <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                <Check size={32} />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light uppercase tracking-wide">
                Sanctuary Reserved
              </h3>
              <div className="w-10 h-[1px] bg-gold-400" />
              
              <div className="space-y-2 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                <p className="font-medium text-gold-400">
                  Congratulations, {formData.fullName}!
                </p>
                <p>
                  Your luxury request for <span className="text-white font-normal">"{formData.service}"</span> is currently being parsed by our concierge team.
                </p>
                <p className="text-xs text-gray-500 italic mt-2">
                  Your WhatsApp redirect has been triggered automatically. If the window did not open, please click the button below to connect with our booking agents directly.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-xs tracking-wider font-semibold uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>Open WhatsApp Chat</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      phoneNumber: "",
                      service: "",
                      date: "",
                      timeSlot: "",
                      notes: "",
                    });
                  }}
                  className="flex-1 py-3 bg-transparent hover:bg-white/5 border border-white/10 text-white text-xs tracking-wider uppercase transition-colors"
                >
                  Book Another Ritual
                </button>
              </div>

              <button
                onClick={() => onPageChange("home")}
                className="text-xs text-gold-400 hover:text-white transition-colors uppercase tracking-widest pt-2 underline"
              >
                Return to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
