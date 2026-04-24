import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919876543210";

const WhatsAppFloat = () => (
  <motion.a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hi! I would love to book an appointment at Sandal Glow Beauty Studio."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant animate-glow-pulse"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
  </motion.a>
);

export default WhatsAppFloat;