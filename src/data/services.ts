import bridal from "@/assets/service-bridal.jpg";
import hair from "@/assets/service-hair.jpg";
import skin from "@/assets/service-skin.jpg";
import spa from "@/assets/service-spa.jpg";

export type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "bridal",
    title: "Signature Bridal Makeup",
    category: "Bridal Makeup",
    description: "A flawless, long-lasting bridal look with HD makeup, draping & hair styling.",
    price: "₹15,000",
    duration: "3 hrs",
    image: bridal,
  },
  {
    id: "engagement",
    title: "Engagement Glow",
    category: "Bridal Makeup",
    description: "Soft, romantic look perfect for engagement and pre-wedding shoots.",
    price: "₹6,500",
    duration: "1.5 hrs",
    image: bridal,
  },
  {
    id: "haircut",
    title: "Style & Blowout",
    category: "Hair Styling",
    description: "Precision haircut with deep wash, head massage and silky blowout finish.",
    price: "₹1,200",
    duration: "1 hr",
    image: hair,
  },
  {
    id: "hairspa",
    title: "Nourishing Hair Spa",
    category: "Hair Styling",
    description: "Deep conditioning hair spa to repair, hydrate and add radiant shine.",
    price: "₹1,800",
    duration: "1.5 hrs",
    image: hair,
  },
  {
    id: "facial",
    title: "Glow Facial Ritual",
    category: "Skin Care",
    description: "Customised facial with cleanse, exfoliate, mask and a luminous finish.",
    price: "₹2,200",
    duration: "1 hr",
    image: skin,
  },
  {
    id: "cleanup",
    title: "Clean Up & Detox",
    category: "Skin Care",
    description: "Quick cleanup to refresh tired skin — perfect for a midweek glow.",
    price: "₹900",
    duration: "45 min",
    image: skin,
  },
  {
    id: "massage",
    title: "Aroma Body Massage",
    category: "Spa & Relaxation",
    description: "Full-body aromatherapy massage to release tension and restore calm.",
    price: "₹2,800",
    duration: "1 hr",
    image: spa,
  },
  {
    id: "pedicure",
    title: "Luxury Pedicure",
    category: "Spa & Relaxation",
    description: "Soothing foot soak, exfoliation and rose-gold finish for happy feet.",
    price: "₹1,400",
    duration: "1 hr",
    image: spa,
  },
];

export const categories = [
  "All",
  "Bridal Makeup",
  "Hair Styling",
  "Skin Care",
  "Spa & Relaxation",
] as const;