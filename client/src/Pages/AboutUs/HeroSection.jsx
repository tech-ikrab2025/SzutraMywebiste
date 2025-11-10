// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
const ACCENT_GOLD = '#cfa866';

const HeroSection = ({ mission }) => {
  const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
    };
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div id="about-us" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 sm:py-50" style={{
            backgroundImage: "url('/AboutUsImage.png')",
            backgroundSize: "Cover",
            backgroundPosition: "center",
          }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl sm:text-5xl font-extrabold tracking-tight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={titleStyle}
        >
          Crafting Legacy:<span className="text-[#cfa866]" style={titleStyle}>Handmade Designer Zari</span> {/* Use hex code */}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl font-light opacity-80"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {mission}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;