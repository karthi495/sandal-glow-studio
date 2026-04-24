import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

const SectionHeading = ({ eyebrow, title, description, align = "center" }: Props) => (
  <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-medium uppercase tracking-[0.2em] mb-4"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        {eyebrow}
      </motion.div>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="font-serif text-3xl md:text-5xl font-medium text-foreground"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-muted-foreground leading-relaxed"
      >
        {description}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;