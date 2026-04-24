import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Scissors, Flower2, Brush, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import hero from "@/assets/hero.jpg";
import { services } from "@/data/services";

const highlights = [
  { icon: Brush, title: "Bridal Makeup", desc: "Timeless looks for your big day." },
  { icon: Sparkles, title: "Glow Facials", desc: "Customised skincare rituals." },
  { icon: Scissors, title: "Hair Spa", desc: "Repair, hydrate, shine." },
  { icon: Flower2, title: "Spa & Relaxation", desc: "Unwind in pure calm." },
];

const testimonials = [
  { name: "Ananya R.", role: "Bride", text: "My wedding makeup was a dream — flawless and so light on the skin. I felt like the most beautiful version of myself." },
  { name: "Priya S.", role: "Regular Client", text: "The facial here is pure magic. My skin glows for weeks. The studio feels so calming, like a luxury escape." },
  { name: "Meera T.", role: "Bride's Mom", text: "Such warm, professional staff. They made my daughter's day truly special. Highly recommend Sandal Glow!" },
];

const Index = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <img
          src={hero}
          alt="Sandal Glow Beauty Studio interior with rose gold accents"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/15 to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/40 blur-3xl" />

        <div className="container relative py-20 md:py-28">
          <div className="space-y-7 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-soft"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/70">Premium Beauty Studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground"
            >
              Pure Beauty,
              <br />
              <span className="text-gradient-rose italic">Naturally You.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Step into Sandal Glow — a soft, luxurious sanctuary for bridal,
              hair, skin and spa rituals crafted to reveal your most radiant self.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/booking">
                  Book Appointment <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-background gradient-rose" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Loved by 2,000+ happy clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Our Specialties"
          title="Crafted rituals for radiant you"
          description="From bridal glamour to soothing spa escapes, every service is designed with care and finished with elegance."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-3xl p-7 border border-border shadow-card hover-lift cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl gradient-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-bounce">
                <h.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-foreground">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="gradient-soft py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Most Loved"
            title="Signature services"
            description="A glimpse of our most-requested treatments — explore the full menu in our services."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover-lift"
              >
                <div className="relative h-60 overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-medium text-foreground">{s.price}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-accent mb-2">{s.category}</div>
                  <h3 className="font-serif text-xl mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore All Services <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by women like you"
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-3xl p-7 border border-border shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
              <div className="flex gap-0.5 text-accent mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full gradient-rose flex items-center justify-center text-accent-foreground font-serif">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] gradient-rose p-12 md:p-16 text-center shadow-elegant"
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div className="relative">
            <h2 className="font-serif text-3xl md:text-5xl text-accent-foreground mb-4">Ready to glow?</h2>
            <p className="text-accent-foreground/90 mb-8 max-w-xl mx-auto">Book your personalised beauty experience today and let us pamper you the way you deserve.</p>
            <Button asChild variant="default" size="lg" className="bg-card text-foreground hover:bg-card/90">
              <Link to="/booking">Book Your Appointment <ArrowRight /></Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
