// src/components/ValuesGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
const ACCENT_GOLD = '#cfa866';

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 150, 
      damping: 10 
    } 
  },
};

const ValuesGrid = ({ values }) => {
  const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        //textShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };
  return (
    <section>
      <h2 className="text-4xl font-bold text-center pt-20 mb-12 text-[#cfa866]" style={titleStyle}>Our Guiding Core Values</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            // Use hex code for border
            className="bg-[#cfa866] p-8 rounded-xl shadow-xl border-b-4 border-[#cfa866] text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Use hex code for icon color */}
            <div className="text-6xl text-[#cfa866] mb-4 mx-auto w-fit">
                {value.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#333333]">{value.title}</h3>
            <p className="text-[White]">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValuesGrid;