import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import studio from "@/assets/about-studio.jpg";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
};

const stats = [
  { icon: Users, value: 2500, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 12, suffix: "+", label: "Years Experience" },
  { icon: Heart, value: 800, suffix: "+", label: "Bridal Looks" },
  { icon: Sparkles, value: 25, suffix: "+", label: "Signature Services" },
];

const team = [
  { name: "Riya Mehra", role: "Founder & Lead Bridal Artist", initial: "R" },
  { name: "Sana Kapoor", role: "Senior Hair Stylist", initial: "S" },
  { name: "Tanya Iyer", role: "Skincare Therapist", initial: "T" },
];

const About = () => {
  return (
    <div>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Our Story"
            title="A sanctuary of soft luxury"
            description="Sandal Glow was born from a simple belief — beauty should feel like care, not effort."
          />
        </div>
      </section>

      <section className="container py-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-3 gradient-rose rounded-[2rem] blur-2xl opacity-20" />
          <img src={studio} alt="Sandal Glow Beauty Studio interior" loading="lazy" className="relative rounded-[2rem] shadow-elegant w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Since 2012</div>
          <h2 className="font-serif text-4xl text-foreground">Where every woman finds her glow</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded by celebrity makeup artist Riya Mehra, Sandal Glow began as a small bridal studio
            and grew into a beloved sanctuary for women across the city. Our philosophy is simple —
            enhance, never mask. We use clean, premium products and gentle techniques to bring out
            your natural radiance.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From the soft sandal walls to the calming aroma of our signature blends, every detail is
            crafted to make you feel pampered, present and beautiful — exactly as you are.
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="gradient-soft py-16">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-3xl p-7 text-center border border-border shadow-card"
            >
              <div className="w-12 h-12 rounded-2xl gradient-rose flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="font-serif text-4xl text-foreground mb-1">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="container py-20">
        <SectionHeading eyebrow="Meet The Team" title="The artists behind your glow" />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-3xl p-8 text-center border border-border shadow-card hover-lift"
            >
              <div className="w-24 h-24 rounded-full gradient-rose flex items-center justify-center mx-auto mb-5 font-serif text-4xl text-accent-foreground shadow-soft">
                {m.initial}
              </div>
              <h3 className="font-serif text-xl text-foreground">{m.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;