import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Pure Beauty, Naturally You. A premium sanctuary for bridal, hair,
            skincare and spa rituals — designed to make you glow.
          </p>
          <div className="flex gap-3 pt-2">
            {[Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent transition-smooth"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4 text-foreground">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/about", "About"],
              ["/booking", "Book Now"],
            ].map(([to, l]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-accent transition-smooth">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4 text-foreground">Visit Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent" /> 12 Lotus Lane, Bangalore</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-accent" /> hello@sandalglow.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Sandal Glow Beauty Studio. All rights reserved.</span>
          <span>Crafted with love for radiant women.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;