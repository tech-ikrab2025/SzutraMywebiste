import { motion } from "framer-motion";
import WappImg from "../../public/whatsapp_btn.webp";
// --- Framer Motion Variants ---

export const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- Floating WhatsApp Button Component ---
// NOTE: Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number (including country code, no +, no dashes).
// Example: 919876543210 (for India) or 15551234567 (for US)
const WHATSAPP_NUMBER = "918016082014";
const PRE_FILLED_MESSAGE =
  "Hello Szutra, I'd like to inquire about your services.";

export const FloatingWhatsAppButton = () => {
  // Function to construct the WhatsApp link
  const getWhatsAppLink = () => {
    const message = encodeURIComponent(PRE_FILLED_MESSAGE);
    // Use the wa.me link for direct chat
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  // Animation for the floating button
  const floatVariants = {
    initial: { scale: 0, rotate: 180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    // Subtle hover effect
    whileHover: {
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(37, 211, 102, 0.8)",
    },
  };

  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-20 w-20 rounded-full text-white shadow-xl cursor-pointer"
      variants={floatVariants}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      {/* Simple WhatsApp Icon (using a unicode character for simplicity, you can use an SVG icon library like Heroicons instead) */}
      <span className="">
        <img
          src={WappImg} //"https://static.vecteezy.com/system/resources/previews/024/398/617/original/whatsapp-logo-icon-isolated-on-transparent-background-free-png.webp"
          alt=""
          className="w-30"
        />
      </span>
    </motion.a>
  );
};