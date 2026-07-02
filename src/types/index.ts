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
