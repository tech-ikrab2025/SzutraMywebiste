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
    { year: "1st", title: "Craftsmanship & Heritage", description: "At Szutra, we believe that true elegance is born from the art of fine craftsmanship. We are a designer zari manufacturing house dedicated to creating exquisite designs that blend heritage with innovation. Our work reflects a deep respect for traditional Indian artistry, brought to life with a modern design approach.Each piece we produce is more than just fabric — it’s a harmony of creativity, culture, and precision. Our zari threads are not only woven with skill but also with passion, carrying the essence of luxury that defines timeless fashion.",
      illustration: "Craftsmanship & Heritage.webp" },// NEW PROP for the large illustration},
    { year: "2nd", title: "Unyielding Quality", description: "We design and manufacture premium zari work that enhances the collections of renowned fashion brands across the industry. Our expertise lies in creating intricate zari designs that elevate fabrics into statements of art.Every creation that leaves our studio undergoes careful design consideration, material selection, and skilled handwork — ensuring the final product embodies sophistication and superior quality. Whether it’s couture pieces, bridal ensembles, or luxury ethnic wear, our zari brings life, texture, and radiance to every design.",
      illustration: "Unyielding Quality.webp" },
    { year: "3rd", title: "Design Innovation", description: "Our artisans are the soul of our brand — the true custodians of our craft. Each artisan carries generations of experience, blending age-old techniques with a modern sense of beauty. Their hands turn delicate threads into masterpieces, weaving emotion, tradition, and creativity into every motif.We take immense pride in providing them an environment that values their artistry and nurtures their skill. Their dedication transforms our vision into tangible beauty — where every shimmer of zari tells a story of human touch and heritage.",
      illustration: "Design Innovation-1.webp" },
    { year: "4th", title: "Integrity & Reliability", description: "Our craftsmanship stands as a tribute to the timeless charm of handmade perfection. From selecting the finest threads to the final finishing, every step of our process is guided by precision and passion.Our design philosophy lies in the details — delicate patterns, refined textures, and graceful finishes that celebrate both cultural richness and contemporary taste. The result is a collection of zari designs that exude sophistication, radiance, and enduring elegance.",
      illustration: "Integrity & Reliability.webp" },
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
      className="min-h-screen bg-[#fcfaf7] text-[#333333] font-sans " 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroSection mission={companyData.mission} style={titleStyle}/>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        <StoryTimeline story={companyData.story} />
        
        <ValuesGrid values={companyData.values} />

      </div>
    </motion.div>
  );
};

export default AboutUs;