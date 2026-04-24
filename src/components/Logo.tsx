import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 group ${className}`}>
    <div className="relative w-10 h-10 rounded-full gradient-rose flex items-center justify-center shadow-soft transition-bounce group-hover:scale-110">
      <Sparkles className="w-5 h-5 text-accent-foreground" />
    </div>
    <div className="leading-tight">
      <div className="font-serif text-lg font-semibold text-foreground">Sandal Glow</div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Beauty Studio</div>
    </div>
  </Link>
);

export default Logo;