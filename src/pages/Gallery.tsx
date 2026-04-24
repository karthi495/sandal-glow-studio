import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import bridal from "@/assets/service-bridal.jpg";
import skin from "@/assets/service-skin.jpg";
import spa from "@/assets/service-spa.jpg";

const images = [
  { src: bridal, alt: "Bridal makeup look" },
  { src: g2, alt: "Manicured hands with rose" },
  { src: g1, alt: "Makeup brushes & cosmetics" },
  { src: g3, alt: "Spa treatment room" },
  { src: skin, alt: "Skincare products" },
  { src: g5, alt: "Bridal flower bouquet" },
  { src: g4, alt: "Henna mehndi art" },
  { src: spa, alt: "Spa relaxation flat lay" },
  { src: g6, alt: "Luxury perfume and pearls" },
];

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Our Work"
            title="A glimpse of glow"
            description="Real moments from our studio — from radiant brides to soothing rituals."
          />
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setOpen(i)}
              className={`relative overflow-hidden rounded-2xl md:rounded-3xl group shadow-card hover-lift ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"
              }`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-card text-foreground flex items-center justify-center shadow-elegant"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              key={open}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[open].src}
              alt={images[open].alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;