// src/components/StoryTimeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
const ACCENT_GOLD = '#cfa866';

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
};

// Placeholder Icon/Image Component (use this when you don't have a real image)
// You should replace the <img /> tag with an actual icon component like from react-icons
const TimelineImage = ({ src, alt, isLeft }) => (
    <div 
        // Image container styling: small circle, white background, shadow
        className={`absolute w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg z-20 
                    top-1/2 transform -translate-y-1/2 
                    // Positioning: Pushed out from the center line
                    ${isLeft ? 'left-0 -translate-x-[150%] mr-4' : 'right-0 translate-x-[150%] ml-4'}`}
    >
        <img 
            src={src} 
            alt={alt} 
            className="w-8 h-8 object-contain" 
            // Fallback for missing image (e.g., a simple square)
            onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/32/cfa866/ffffff?text=★" }}
        /> 
    </div>
);


const StoryTimeline = ({ story }) => {
   const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        //textShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };
  return (
    <section className="relative container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#cfa866]" style={titleStyle}>Our Journey of Growth</h2>
      
      {/* Central Vertical Timeline Line (Desktop Only) */}
      <div className="absolute left-1/2 w-0.5 bg-[#cfa866]/30 h-full transform -translate-x-1/2 hidden md:block z-0"></div> 
      
      <div className="space-y-32"> {/* Increased vertical space for visual separation */}
        {story.map((item, index) => {
          const isLeft = index % 2 === 0; // Card on the left side (even index)
          
          return (
            <motion.div
              key={index}
              className={`relative flex items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              
              {/* Timeline Connector Components & Image (Desktop Only) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                
                {/* Image Component */}
                {item.image && (
                    <TimelineImage 
                        src={item.image} 
                        alt={item.title} 
                        isLeft={isLeft} 
                    />
                )}

                {/* Year Pill (The center marker) */}
                <div 
                  className="w-16 h-8 bg-[#cfa866] rounded-full flex items-center justify-center 
                           text-white font-bold text-sm shadow-xl ring-4 ring-[#fcfaf7] z-10"
                >
                  {item.year} 
                </div>

                {/* Horizontal Connector Line (Elegant link to the card) */}
                <div 
                  className={`
                    absolute top-1/2 h-0.5 w-12 bg-[#cfa866]/50 transform -translate-y-1/2 z-0
                    ${isLeft ? 'right-full' : 'left-full'}
                  `}
                ></div>
              </div>
            
              {/* Story Content Card */}
              <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-24' : 'md:pl-24'}`}>
                <div 
                  className={`p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#cfa866] 
                            ${!isLeft ? 'md:border-l-0 md:border-r-4' : ''}`}
                > 
                  {/* Mobile Content (Pill and Image are hidden, so display year and image here) */}
                  <div className="flex items-center gap-2 mb-2 md:hidden">
                    <p className="text-sm font-light text-gray-500">{item.year}</p> 
                    {item.image && <img src={item.image} alt={item.title} className="w-6 h-6 object-contain" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#a5864e] mt-1">{item.title}</h3> 
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
              
              {/* Simple Mobile Dot (For visual continuity on small screens) */}
              <div 
                  className={`absolute top-0 w-3 h-3 bg-[#cfa866] rounded-full z-10 ring-4 ring-[#fcfaf7] 
                            -left-1.5 md:hidden`}
              ></div>
            
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StoryTimeline;