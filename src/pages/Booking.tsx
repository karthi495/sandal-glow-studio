import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, User, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919876543210";

const Booking = () => {
  const [params] = useSearchParams();
  const preselect = params.get("service") ?? "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: preselect,
    date: "",
    time: "",
  });

  useEffect(() => {
    if (preselect) setForm((f) => ({ ...f, service: preselect }));
  }, [preselect]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      toast.error("Please fill all fields to continue");
      return;
    }
    const message = `Hi, I want to book ${form.service} on ${form.date} at ${form.time} at Sandal Glow Beauty Studio.%0A%0AName: ${form.name}%0APhone: ${form.phone}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");
    toast.success("Opening WhatsApp to confirm your booking!");
  };

  return (
    <div>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Reserve Your Glow"
            title="Book your appointment"
            description="Fill in your details and we'll confirm your booking instantly via WhatsApp."
          />
        </div>
      </section>

      <section className="container py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-accent" /> Your Name
                </Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Ananya" className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-accent" /> Phone Number
                </Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="h-12 rounded-xl" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm">
                <Sparkles className="w-4 h-4 text-accent" /> Service
              </Label>
              <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.id} value={s.title}>
                      {s.title} — {s.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2 text-sm">
                  <CalendarDays className="w-4 h-4 text-accent" /> Date
                </Label>
                <Input id="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-accent" /> Time
                </Label>
                <Input id="time" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="h-12 rounded-xl" />
              </div>
            </div>

            <Button type="submit" variant="whatsapp" size="lg" className="w-full">
              Book via WhatsApp
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Your appointment will be confirmed within minutes. No payment required to book.
            </p>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="gradient-soft rounded-3xl p-8 border border-border">
              <h3 className="font-serif text-2xl mb-3 text-foreground">Why book with us?</h3>
              <ul className="space-y-3 text-sm text-foreground/80">
                {[
                  "Premium products & hygienic studio",
                  "Certified, friendly beauty experts",
                  "Personalised consultations",
                  "Flexible timings, all 7 days",
                ].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-3xl p-8 border border-border shadow-card">
              <h3 className="font-serif text-xl mb-2 text-foreground">Studio Hours</h3>
              <p className="text-sm text-muted-foreground mb-4">Open 7 days a week</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-foreground/70">Mon — Sat</span><span className="text-foreground">10:00 AM — 8:00 PM</span></div>
                <div className="flex justify-between"><span className="text-foreground/70">Sunday</span><span className="text-foreground">11:00 AM — 6:00 PM</span></div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
};

export default Booking;