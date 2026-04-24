import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Please fill in your name and message");
      return;
    }
    toast.success("Thank you! We'll be in touch soon. 💕");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Say Hello"
            title="We'd love to hear from you"
            description="Have a question or want to plan a special occasion? Reach out — we're always here."
          />
        </div>
      </section>

      <section className="container py-16 grid lg:grid-cols-5 gap-10">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={submit}
          className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="cname">Name</Label>
              <Input id="cname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 rounded-xl" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cemail">Email</Label>
              <Input id="cemail" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 rounded-xl" placeholder="you@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cmsg">Message</Label>
            <Textarea id="cmsg" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-xl resize-none" placeholder="How can we help?" />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-5"
        >
          <a href="tel:+919876543210" className="block bg-card rounded-3xl p-6 border border-border shadow-card hover-lift">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl gradient-rose flex items-center justify-center"><Phone className="w-5 h-5 text-accent-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Call Us</div>
                <div className="font-serif text-lg text-foreground">+91 98765 43210</div>
              </div>
            </div>
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="block bg-card rounded-3xl p-6 border border-border shadow-card hover-lift">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center"><MessageCircle className="w-5 h-5 text-white" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">WhatsApp</div>
                <div className="font-serif text-lg text-foreground">Chat with us</div>
              </div>
            </div>
          </a>
          <a href="mailto:hello@sandalglow.in" className="block bg-card rounded-3xl p-6 border border-border shadow-card hover-lift">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl gradient-rose flex items-center justify-center"><Mail className="w-5 h-5 text-accent-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Email</div>
                <div className="font-serif text-lg text-foreground">hello@sandalglow.in</div>
              </div>
            </div>
          </a>
          <div className="bg-card rounded-3xl p-6 border border-border shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl gradient-rose flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-accent-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Visit</div>
                <div className="font-serif text-lg text-foreground leading-tight">12 Lotus Lane, Indiranagar</div>
                <div className="text-sm text-muted-foreground">Bangalore, 560038</div>
              </div>
            </div>
          </div>
        </motion.aside>
      </section>

      <section className="container pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-elegant border border-border"
        >
          <iframe
            title="Sandal Glow Beauty Studio location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.83399489846!2d77.6386!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzgnMTguOSJF!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-[420px] border-0"
            loading="lazy"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;