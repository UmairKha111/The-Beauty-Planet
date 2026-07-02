/**
 * Global site configuration for The Beauty Planet.
 * Update any value here to automatically update across the entire application.
 */

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  coverImage: string;
  items: ServiceItem[];
}

export interface AcademyCourse {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  level: string;
  certification: string;
  price: string;
  description: string;
  curriculum: string[];
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const siteConfig = {
  brand: {
    name: "The Beautyy Planet",
    tagline: "Where Luxury Meets Beauty Excellence",
    subtitle: "A premier sanctuary for world-class salon services & professional beauty education.",
    established: "2026",
    logoText: "THE BEAUTYY PLANET",
    instagramHandle: "thebeautyyplanetsalon",
  },
  contact: {
    phone: "+91 9277438308",
    phoneDisplay: "+91 9277438308",
    whatsapp: "https://wa.me/919277438308", // URL-friendly number without symbols
    whatsappDisplay: "+91 9277438308",
    email: "shalinimishar56@gmail.com",
    address: "Shop No. 4, U.G.F, Shyam Arcade, Jankipuram Gardens, Near Tiwari Chouraha, Lucknow, Uttar Pradesh 226021",
    hours: [
      { days: "Monday - Sunday", time: "10:00 AM - 08:30 PM" }
    ],
    googleMapsEmbedUrl:
"https://maps.google.com/maps?q=The%20Beautyy%20Planet%20Unisex%20Salon%20Shop%20No.%204%20UGF%20Jankipuram%20Garden%20Shyam%20Arcade%20near%20Tiwari%20Chouraha%20Janki%20Vihar%20Colony%20Jankipuram%20Lucknow%20Uttar%20Pradesh%20226021&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  socials: {
    instagram: "https://www.instagram.com/thebeautyyplanetsalon",
    youtube: "https://www.youtube.com/@thebeautyyplanet",
    whatsapp: "https://wa.me/919277438308",
    facebook: "https://facebook.com/thebeautyyplanet",
  },
  stats: [
    { value: "8,00+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
    { value: "40+", label: "Certified Students" },
    { value: "15+", label: "Expert Artists" },
  ],
  hero: {
    badge: "THE EPITOME OF ULTRA LUXURY",
    heading: "Indulge In Cinematic Beauty & Perfect Artistry",
    description: "Welcome to India's ultra-luxury salon and beauty academy. Experience personalized treatments designed by elite global artists and professional training accredited internationally.",
    ctaBook: "Book Appointment",
    ctaServices: "Explore Services",
    ctaAcademy: "Join Academy",
    videoPlaceholderImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80",
    bgImages: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80", // Salon luxurious interior
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=80", // Elegant hair
      "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=1920&q=80", // Royal bridal
    ],
  },
  services: [
    {
      id: "hair",
      title: "Couture Hair Artistry",
      tagline: "Sculpted. Colored. Restructured.",
      description: "From precision couture haircuts to bespoke balayage, our global educators transform your hair into a statement of pure luxury.",
      icon: "Scissors",
      coverImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      items: [
        { id: "h1", name: "Couture Cut & Style", description: "Personalized haircutting consultation, luxury hair bath, and signature blowout.", price: "₹1,800+", duration: "60 mins", image: "https://images.unsplash.com/photo-1634449571010-02c29315750e?auto=format&fit=crop&w=500&q=80" },
        { id: "h2", name: "Bespoke Balayage & Highlights", description: "Hand-painted dimensional hair coloring using premium French formulas.", price: "₹6,500+", duration: "180 mins", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=500&q=80" },
        { id: "h3", name: "Keratin Caviar Infusion", description: "Advanced hair straightening and deep structural rebuilding with organic proteins.", price: "₹5,500+", duration: "120 mins", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=500&q=80" },
        { id: "h4", name: "Signature Hair Spa Ritual", description: "Luxury scalp massage, steam, and intense nourishing lipid therapy.", price: "₹2,500+", duration: "75 mins", image: "https://images.unsplash.com/photo-1516975080664-ed2fc1fa2f0c?auto=format&fit=crop&w=500&q=80" },
      ],
    },
    {
      id: "makeup",
      title: "Bespoke Glamour & Makeup",
      tagline: "Radiant. Flawless. High-Definition.",
      description: "Step into the spotlight with professional makeup services designed for television, editorial, runways, and elite social galas.",
      icon: "Sparkles",
      coverImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      items: [
        { id: "m1", name: "Ultra HD Celebrity Glam", description: "High-definition flawless finish with luxury premium cosmetics (Dior, Chanel).", price: "₹4,500+", duration: "90 mins", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80" },
        { id: "m2", name: "Airbrush Luxury Makeup", description: "Flawless, lightweight, and extremely long-lasting specialized spray application.", price: "₹6,000+", duration: "90 mins", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80" },
        { id: "m3", name: "Editorial / Fashion Runway", description: "Avant-garde or ultra-modern camera-ready creative makeup styling.", price: "₹7,500+", duration: "120 mins", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=500&q=80" },
      ],
    },
    {
      id: "bridal",
      title: "Royal Bridal Elixir",
      tagline: "Timeless. Majestic. Unforgettable.",
      description: "The ultimate bridal experience. Handcrafted looks combining traditional opulence with modern luxury aesthetics.",
      icon: "Heart",
      coverImage: "https://i.ibb.co/Y79myVLX/cd330664-2922-446e-bb06-232c1acd2a3e.png",
      items: [
        { id: "b1", name: "Royal Signature Bridal Makeup", description: "Pre-bridal consultation, HD/Airbrush makeup, hair styling, draping, and jewelry setting.", price: "₹18,000+", duration: "240 mins", image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=500&q=80" },
        { id: "b2", name: "Bespoke Groom Styling", description: "Precision beard and hair grooming, skin prep, and luxury styling for the groom.", price: "₹5,000+", duration: "90 mins", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80" },
        { id: "b3", name: "Imperial Pre-Bridal Package", description: "Bespoke 3-day glow therapy, body polishing, luxury manicure, pedicure, and deep hair spa.", price: "₹12,000+", duration: "3 Days", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80" },
      ],
    },
    {
      id: "nails",
      title: "Luxury Nail Lounge",
      tagline: "Sculpted. Polished. Elegant.",
      description: "Adorn your hands with state-of-the-art extensions, gel overlays, and premium custom hand-painted nail art.",
      icon: "Hand",
      coverImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
      items: [
        { id: "n1", name: "AcroGel Extensions & Sculpting", description: "Premium, highly durable, natural-feeling acrylic-gel hybrid sculpting.", price: "₹2,500+", duration: "90 mins", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=500&q=80" },
        { id: "n2", name: "Couture Gel Manicure", description: "Nail shaping, cuticle therapy, luxury massage, and premium non-chip gel polish.", price: "₹1,200+", duration: "45 mins", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=500&q=80" },
        { id: "n3", name: "Signature Nail Art (Per Nail)", description: "Bespoke hand-painted designs, chrome finishes, encapsulation, or Swarovski crystal studs.", price: "₹150+", duration: "15 mins", image: "https://images.unsplash.com/photo-1522337094156-818fa852d711?auto=format&fit=crop&w=500&q=80" },
      ],
    },
    {
      id: "skincare",
      title: "Advanced Skin Therapeutics",
      tagline: "Rejuvenating. Clinical. Sublime.",
      description: "Medical-grade aesthetic procedures and luxurious botanical therapies for everlasting radiant youth.",
      icon: "Smile",
      coverImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
      items: [
        { id: "s1", name: "Collagen Gold Dermal Therapy", description: "24k Gold leaf facial paired with dynamic microcurrent tissue sculpting.", price: "₹4,500+", duration: "90 mins", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=500&q=80" },
        { id: "s2", name: "Hydro-Dermabrasion Facial", description: "Intense vacuum pore cleansing, exfoliation, and targeted hyaluronic acid infusion.", price: "₹3,500+", duration: "60 mins", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80" },
        { id: "s3", name: "Intense Glow Vitamin-C Elixir", description: "Medical-grade antioxidant cocktail mask with cold-laser therapy for uneven skin tone.", price: "₹3,800+", duration: "75 mins", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80" },
      ],
    }
  ] as ServiceCategory[],
  academy: {
    badge: "GLOBAL ACCREDITATION & EXPERT CERTIFICATION",
    heading: "Launch Your Global Career in Elite Beauty",
    description: "At The Beauty Planet Professional Academy, we turn passionate minds into certified global artists. Learn from international educators, master professional business practices, and receive guaranteed lifetime placement support.",
    benefits: [
      "International Standard Curriculum",
      "100% Practical Hands-on Training",
      "Government Registered Certifications",
      "Top Cosmetics Kits Included in Course Fee",
      "High-paying Salon & Fashion Placement Assistance",
      "Portfolio photoshoot with top Indian models",
    ],
    courses: [
      {
        id: "c1",
        title: "Masters in Professional Cosmetology",
        tagline: "The Ultimate All-in-One Elite Diploma",
        duration: "6 Months",
        level: "Beginner to Pro",
        certification: "Government ISO Registered International Diploma",
        price: "₹75,000",
        description: "An intensive comprehensive program covering advanced hair styling, international makeup design, clinical skincare therapies, and modern nail technology.",
        curriculum: [
          "Bespoke Couture Hair Sculpting & Designing",
          "Advanced Chemistry of Hair Colors and Formulations",
          "High Definition (HD) & Airbrush Celebrity Makeup",
          "Clinical Esthetics, Chemical Peels & HydraFacials",
          "Salon Leadership, Personal Branding, and Marketing Strategy",
        ],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        features: ["Premium Kit Included", "Live Studio Internships", "Global Certification"],
      },
      {
        id: "c2",
        title: "Advanced Couture Hair Styling & Coloring",
        tagline: "Master the Chemistry and Geometry of Hair",
        duration: "3 Months",
        level: "Intermediate",
        certification: "Couture Hair Educator Certificate",
        price: "₹45,000",
        description: "Specialized deep dive into advanced haircutting techniques, complex color matching, custom balayage artistry, and structural straightening procedures.",
        curriculum: [
          "Geometric Hair Design & Framing",
          "Advanced Freehand Painting (Balayage, Ombre)",
          "Keratin, Smoothening, and Hair Botox chemical science",
          "Symphonic Hair Updos & Runway styling",
        ],
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
        features: ["Practice on Real Hair Dummies", "Color Formulation Mastery", "Portfolio Photoshoot"],
      },
      {
        id: "c3",
        title: "Celebrity & Bridal Makeup Masterclass",
        tagline: "Create Majestic Camera-Ready Artistry",
        duration: "2 Months",
        level: "Beginner to Pro",
        certification: "Global Bridal Makeup Artist Certification",
        price: "₹50,000",
        description: "Focuses on skin-prep science, facial geometry, advanced color theory, traditional royal bridal draping, and contemporary high-definition celebrity makeup styles.",
        curriculum: [
          "Facial Symmetry and Corrective Contouring",
          "Luxury HD Makeup and Silicon Airbrush techniques",
          "Traditional Indian & International Bridal Styles",
          "Studio Lighting & Mobile Photography for Artists",
        ],
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
        features: ["International Cosmetics Included", "Model Casting Included", "Studio Lighting Workshop"],
      },
      {
        id: "c4",
        title: "Professional Nail Extensions & Sculpting",
        tagline: "Sculpt Timeless Miniature Artworks",
        duration: "1 Month",
        level: "Beginner",
        certification: "Professional Nail Technician Diploma",
        price: "₹25,000",
        description: "Learn nail anatomy, acrylic sculpting, polymer extensions, overlay systems, 3D embossing, rhinestone encapsulation, and airbrush nail designs.",
        curriculum: [
          "Nail Health, Prep & Extension Chemistry",
          "Acrylic, Gel & AcroGel Sculpting over tips",
          "Advanced Nail Art: Marble, Ombre & Hand-Paintings",
          "Refills, In-fills, Safe Nail Removals & Maintenance",
        ],
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
        features: ["Complete Acrylic Gel Toolset", "Practice on Live Models", "Nail Salon Set-up Mentorship"],
      }
    ] as AcademyCourse[],
  },
  portfolio: {
    heading: "Bespoke Artistry Showcase",
    description: "Browse through our collection of premium, handcrafted luxury creations crafted by our top master stylists.",
    categories: ["All", "Hair", "Makeup", "Bridal", "Nails", "Academy"],
    items: [
      { id: "p1", title: "Royal Golden Bridal Glitz", category: "Bridal", image: "https://i.ibb.co/Y79myVLX/cd330664-2922-446e-bb06-232c1acd2a3e.png", description: "Royal luxury bridal look featuring authentic gold jewelry and soft smokey eye contour." },
      { id: "p2", title: "Dimensional French Balayage", category: "Hair", image: "https://i.ibb.co/2f2RQWJ/8cee3336-2b99-4f73-8f89-b5129b24750f.png", description: "Multi-layered caramel balayage with high-contrast framing highlights." },
      { id: "p3", title: "Celebrity Red Carpet Glam", category: "Makeup", image: "https://i.ibb.co/RpNb8BdV/3b9b90b1-e204-415f-9ab6-eb270656dfe8.png", description: "Stunning red lip pair with high gloss porcelain skin finish for celebrity runway." },
      { id: "p4", title: "Midnight Chrome Extensions", category: "Nails", image: "https://i.ibb.co/5XRX2cvV/f0af8746-0454-4813-9da7-8a1231206402.png", description: "Bespoke stiletto extensions utilizing premium dark chrome and diamond studs." },
      { id: "p5", title: "Live Academy Cosmetics Demo", category: "Academy", image: "https://i.ibb.co/Pv6Tr43Y/b5970891-fcaa-4d8b-95ef-e4dadf8351ba.png", description: "Students practicing contouring and base matching under the guidance of our global educators." },
      { id: "p6", title: "Avant-Garde Runway Hair", category: "Hair", image: "https://i.ibb.co/mVgZJ40q/a4528e02-a370-4021-a766-f47570f7637d.png", description: "Symmetric structural curls and volume modeling for a leading fashion brand's photoshoot." },
      { id: "p7", title: "Vibrant Pastel Acrylic Sculpting", category: "Nails", image: "https://i.ibb.co/mrPgYXPh/371cb76e-c5f4-4f2d-990b-4e4a735fea99.png", description: "Bespoke ombre pastel shades combined with luxury hand-drawn flower elements." },
      { id: "p8", title: "Sublime Dewy Summer Glow", category: "Makeup", categoryLower: "makeup", image: "https://i.ibb.co/zh33YBSH/1f709d73-dc8a-461c-b142-4d2e5a2fccac.png", description: "Minimal makeup styling emphasizing radiant skin and soft nude-toned highlights." }
    ] as GalleryItem[],
  },
  testimonials: [
    {
      id: "t1",
      name: "ayushi banerjee (Verified Client)",
      role: "Bridal Client",
      rating: 5,
      comment: "I had a really great experience at the salon. The staff was friendly, professional, and made me feel very comfortable. They listened to what I wanted and delivered exactly that. Super happy with the service and the results. Will definitely visit again!",
      date: "2 weeks ago",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVuj_rRaEdXCcgvOvQcx64_tg7lAfDhA_VaEHt-qmcufHY52MMbDQ=w108-h108-p-rp-mo-br100",
    },
    {
      id: "t2",
      name: "anushka tripathi",
      role: "Luxury Hair Client",
      rating: 5,
      comment: "Best salon in Lucknow and the owner shalini mishra is such a beautiful soul All the staff members are very polite. Must visit",
      date: "4 month ago",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUO3kqbvR1nbAm-0ydYXMEWbS_R6uScISH2IzE1z_SB3oujWf4UtQ=w108-h108-p-rp-mo-br100",
    },
    {
      id: "t3",
      name: "Nimish Mishra",
      role: "Pedicure",
      rating: 5,
      comment: "I had an exceptional pedicure experience at The Beauty Planet by Shalini and Saumya. The service was thoughtfully curated, delivered with precision and care, and reflected high standards of hygiene and professionalism. The calming ambiance and skilled expertise made the entire experience truly indulgent. Highly recommended for those who appreciate refined salon services...",
      date: "4 weeks ago",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVkhMXKRVVDqUsXndper8qfhTojqp10ZQe_tGj5XqdyJ02Df7Nq=w108-h108-p-rp-mo-br100",
    },
    {
      id: "t4",
      name: "Mrs Megha Bhatnagar",
      role: "Nails & Makeup regular",
      rating: 5,
      comment: "Excellent parlour with very polite and professional staff. The service was amazing and the place was very clean. I am completely satisfied. Highly recommended! ..... The Beauty Planet Jankipuram",
      date: "5 months ago",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWZ1SoVm_MJo_exD4WJPg1PDmFPFwvBwZg-v2nMKOkM7tufsHsrEg=w108-h108-p-rp-mo-br100",
    }
  ] as Testimonial[],
  faqs: [
    {
      id: "f1",
      question: "Where is The Beauty Planet salon located in Lucknow?",
      answer: "We are situated in a highly premium accessible location: Shop No. 4, U.G.F, Shyam Arcade, Jankipuram Gardens, Near Tiwari Chouraha, Lucknow, Uttar Pradesh 226021. Valet parking is available for all luxury clients.",
    },
    {
      id: "f2",
      question: "Do I need to book an appointment in advance?",
      answer: "While we do accommodate walk-ins when possible, we highly recommend booking an appointment online or via WhatsApp (+91 91404 88358) in advance to ensure your favorite master stylist is available.",
    },
    {
      id: "f3",
      question: "What cosmetics brands are used for makeup and skincare?",
      answer: "We use only premium, internationally-acclaimed cosmetics brands including Dior, Chanel, Estée Lauder, MAC, Kryolan, NARS, Olaplex, L'Oréal Professionnel, and Schwarzkopf.",
    },
    {
      id: "f4",
      question: "Are the Beauty Academy courses suitable for absolute beginners?",
      answer: "Yes, absolutely! Our courses (including the Masters in Cosmetology and Makeup Masterclass) are meticulously structured from beginner to elite professional. No prior beauty experience is required.",
    },
    {
      id: "f5",
      question: "Do students receive a government-registered certification?",
      answer: "Yes, all our graduates receive standard government-registered ISO certifications which are recognized globally, allowing you to seek premium employment both in India and abroad, or launch your own salon business.",
    },
    {
      id: "f6",
      question: "Does the academy provide professional cosmetics kits?",
      answer: "Yes! Based on the selected course, students are provided with a professional makeup/nail/hair kit containing premium brand products, brushes, and specialized tools to practice.",
    }
  ] as FAQItem[],
};
