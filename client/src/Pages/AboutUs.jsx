// src/components/AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './AboutUs/HeroSection';
import StoryTimeline from './AboutUs/StoryTimeline';
import ValuesGrid from './AboutUs/ValuesGrid';


// Define the umbrella company data (omitted for brevity, assume it's the same)
 const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
    };
const companyData = {
  mission: "We are the curators of bespoke zari luxury, supplying premier fashion houses with textiles woven from timeless heritage.",
  story: [
    { year: 2010, title: "Craftsmanship & Heritage", description: "We respect and uphold the rich, centuries-old tradition of Zari work. Every piece of fabric we produce honors this legacy of artistry, merging meticulous hand-skill with modern precision to create textiles that are truly exceptional." },
    { year: 2015, title: "Unyielding Quality", description: "Quality is non-negotiable. From selecting the finest base silks and threads to implementing rigorous multi-point inspections, we commit to manufacturing a product that meets the highest standards of luxury fashion—consistency, luster, and durability are guaranteed." },
    { year: 2020, title: "Design Innovation", description: "While rooted in tradition, we are always forward-thinking. Our team is dedicated to continuous research and development, creating exclusive, on-trend Zari patterns and applications that provide our customer brands with a distinct competitive edge." },
    { year: 2025, title: "Integrity & Reliability", description: "We operate with total transparency and honesty. Brands choose us because they trust us to deliver what we promise—on time, on spec, and on budget. Our reputation is woven into every yard of cloth." },
  ],
  
  values: [
    { title: "Heritage Craftsmanship", icon: "⚜️", description: "Preserving the time-honored art of zari work. We weave quality and authentic tradition into every garment through meticulous skill." },
    { title: "Design Innovation", icon: "💎", description: "Blending classic zari techniques with contemporary design. We continuously push boundaries to pioneer the future of ethnic designer wear." },
    { title: "Quality Integrity", icon: "👑", description: "Upholding the highest standards by using the finest genuine materials. We guarantee impeccable finish and true value in every single piece." },
    { title: "Artisan Empowerment", icon: "🌱", description: "Fostering the growth and well-being of our skilled artisans. We provide a platform that ensures the community behind our craft thrives." },
  ]
};

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
  };

  return (
    <motion.div
      // Using hex codes for background and text colors
      className="min-h-screen bg-[#fcfaf7] text-[#333333] font-sans" style={titleStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroSection mission={companyData.mission} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        <StoryTimeline story={companyData.story} />
        
        <ValuesGrid values={companyData.values} />

      </div>
    </motion.div>
  );
};

export default AboutUs;