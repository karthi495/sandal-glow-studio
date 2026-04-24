import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { services, categories } from "@/data/services";

const Services = () => {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <div>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Our Menu"
            title="Beauty rituals & treatments"
            description="Each service is thoughtfully designed using premium products and gentle techniques to leave you radiant, refreshed and renewed."
          />
        </div>
      </section>

      <section className="container py-16">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${
                active === c
                  ? "gradient-rose text-accent-foreground shadow-soft"
                  : "bg-card border border-border text-foreground/70 hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((s, i) => (
              <motion.article
                layout
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover-lift flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs uppercase tracking-widest text-accent mb-2">{s.category}</div>
                  <h3 className="font-serif text-xl mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.description}</p>
                  <div className="flex items-center justify-between mt-5 pt-5 border-t border-border">
                    <div>
                      <div className="font-serif text-xl text-foreground">{s.price}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <Clock className="w-3 h-3" /> {s.duration}
                      </div>
                    </div>
                    <Button asChild variant="soft" size="sm">
                      <Link to={`/booking?service=${encodeURIComponent(s.title)}`}>Book <ArrowRight /></Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;