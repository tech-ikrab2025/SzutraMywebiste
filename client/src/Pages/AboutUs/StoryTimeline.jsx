// src/components/StoryTimeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
const ACCENT_GOLD = '#cfa866';

const itemVariants = {
  // Using a slightly different animation path for the text/card now
  // Hidden state is now based on isLeft/isRight for a smoother feel
  hidden: ({ isLeft }) => ({ 
    opacity: 0, 
    x: isLeft ? -100 : 100 
  }),
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 80 } 
  },
};

// TimelineIconMarker: Small icon on the central spine (No change)
const TimelineIconMarker = ({ src, alt }) => (
    <div 
        className={`absolute w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg z-20 
                    top-1/2 transform -translate-y-1/2 
                    left-1/2 -translate-x-1/2`} 
    >
        <img 
            src={src} 
            alt={alt} 
            className="w-8 h-8 object-contain" 
            onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/32/cfa866/ffffff?text=★" }}
        /> 
    </div>
);

// TimelineIllustration: Full-width container for the image (Minor change to positioning padding)
const TimelineIllustration = ({ src, alt }) => (
    <div className="w-full h-64 md:h-full overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-[1.02] duration-300">
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover" 
            onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/600x400/f0e6d6/333333?text=Illustration+Missing" }}
        />
    </div>
);


const StoryTimeline = ({ story }) => {
    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        color: ACCENT_GOLD,
    };
    
  return (
    <section className="relative container mx-auto px-4 py-8 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#cfa866]" style={titleStyle}>Our Journey of Growth</h2>
      
      {/* Central Vertical Timeline Line (Desktop Only) */}
      <div className="absolute left-1/2 w-0.5 bg-[#cfa866]/30 h-full transform -translate-x-1/2 hidden md:block z-0"></div> 
      
      <div className="space-y-32">
        {story.map((item, index) => {
          const isLeft = index % 2 === 0; // Card on the left side (even index)
          
          // Determine the order for the two grid columns:
          // Item 0 (isLeft=true): Image (Order 1) | Text (Order 2)
          // Item 1 (isLeft=false): Text (Order 1) | Image (Order 2)
          const textOrder = isLeft ? 'order-2' : 'order-1';
          const imageOrder = isLeft ? 'order-1' : 'order-2';

          // Determine the appropriate padding/margin for the gap between card/image and central line
          const textSpacing = isLeft ? 'md:pl-12' : 'md:pr-12';
          const imageSpacing = isLeft ? 'md:pr-12' : 'md:pl-12';

          return (
            <motion.div
              key={index}
              className="relative w-full md:grid md:grid-cols-2 items-center" 
              variants={itemVariants}
              custom={{ isLeft }} // Pass isLeft/isRight for custom animation
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              
              {/* === Illustration Column (md: Alternates left/right) === */}
              {item.illustration && (
                <div className={`hidden md:block w-full h-full ${imageOrder} ${imageSpacing}`}>
                    <TimelineIllustration src={item.illustration} alt={item.title + " illustration"} />
                </div>
              )}
              
              {/* === Timeline Connector Components & Markers (Desktop Only) === */}
              {/* The spine markers should always be centered and absolute regardless of grid order */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10 top-0 bottom-0 flex items-center">
                  
                  {/* Icon Marker */}
                  {item.icon && (
                      <TimelineIconMarker src={item.icon} alt={item.title} />
                  )}

                  {/* Year Pill (The center marker) */}
                  <div 
                    className="w-16 h-8 bg-[#cfa866] rounded-full flex items-center justify-center 
                               text-white font-bold text-sm shadow-xl ring-4 ring-[#fcfaf7] z-10"
                  >
                    {item.year} 
                  </div>

                  {/* Horizontal Connector Line (This line needs to point toward the text/card) */}
                  {/* <div 
                    className={`
                      absolute top-1/2 h-0.5 w-12 bg-[#cfa866]/50 transform -translate-y-1/2 z-0
                      // Line points opposite of the content text block's column
                      ${isLeft ? 'right-full' : 'left-full'}
                    `}
                  ></div> */}
              </div>
            
              {/* === Story Content Card Column (md: Alternates left/right) === */}
              <div className={`w-full ${textOrder} ${textSpacing}`}>
                <div 
                  className={`p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#cfa866] 
                              ${!isLeft ? 'md:border-l-0 md:border-r-4' : ''}`}
                > 
                  {/* Mobile Content - Text and Year */}
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-light text-gray-500">{item.year}</p> 
                  </div>
                  
                  {/* Mobile Illustration (Displayed above text on smaller screens) */}
                  {item.illustration && 
                    <div className="md:hidden mb-4">
                        <img src={item.illustration} alt={item.title} className="w-full h-32 object-cover rounded-md" />
                    </div>
                  }
                  
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