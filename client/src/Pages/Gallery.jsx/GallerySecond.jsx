import React, { useState } from "react";
import { motion } from "framer-motion";


 //Load Tailwind CSS from CDN for styling (required in single-file React/HTML environments)
 const TailwindLoader = () => (
     <script src="https://cdn.tailwindcss.com"></script>
 );

const ACCENT_GOLD = '#cfa866';

/* ---------------- DATA ---------------- */
// Using a generic placeholder URL for unavailable images to ensure the cards look good.
const PLACEHOLDER_IMG = "https://placehold.co/600x400/3A3A3A/CFA866?text=Image+Missing";

const resultsData = [
  //  Zardosi
  {  imageSrc: "/Zardosi/Zardosi-1.webp", category: "Zardosi" },
  {  imageSrc:"/Zardosi/Zardosi-2.webp",  category: "Zardosi" },
  {  imageSrc: "/Zardosi/Zardosi-3.webp", category: "Zardosi" },
  {  imageSrc: "/Zardosi/Zardosi-4.webp", category: "Zardosi" },
  {  imageSrc: "/Zardosi/Zardosi-5.webp", category: "Zardosi" },
  {  imageSrc: "/Zardosi/Zardosi.webp",   category: "Zardosi" },

  // 🏥Aari
  {  imageSrc: "/aari work/aari work-1.webp", category: "Aari" },
  {  imageSrc: "/aari work/aari work-2.webp", category: "Aari" },
  {  imageSrc: "/aari work/aari work-3.webp", category: "Aari" },
  {  imageSrc: "/aari work/aari work-4.webp", category: "Aari" },
  {  imageSrc: "/aari work/aari work-5.webp", category: "Aari" },
  {  imageSrc: "/aari work/aari work.webp",   category: "Aari" },

  // ⚖️ Dabka
  {  imageSrc: "/Dabka work/Dabka-1.webp", category: "Dabka" },
  {  imageSrc: "/Dabka work/Dabka-2.webp", category: "Dabka" },
  {  imageSrc: "/Dabka work/Dabka-3.webp", category: "Dabka" },
  {  imageSrc: "/Dabka work/Dabka-4.webp", category: "Dabka" },
  {  imageSrc: "/Dabka work/Dabka-5.webp", category: "Dabka" },
  {  imageSrc: "/Dabka work/Dabka.webp",   category: "Dabka" },


  // 🚗 Beads
  {  imageSrc: "/Beadwork/Beadwork-1.webp", category: "Beads" },
  {  imageSrc: "/Beadwork/Beadwork-2.webp", category: "Beads" },
  {  imageSrc: "/Beadwork/Beadwork-3.webp", category: "Beads" },
  {  imageSrc: "/Beadwork/Beadwork-4.webp", category: "Beads" },
  {  imageSrc: "/Beadwork/Beadwork-5.webp", category: "Beads" },
  {  imageSrc: "/Beadwork/Beadwork.webp",   category: "Beads" },

  // 🏢 Golden Zari Dupatta
//   {  imageSrc: "/Zardosi/Zardosi-1.webp", category: "Golden Zari Dupatta" },
//   {  imageSrc: "/Zardosi/Zardosi-1.webp", category: "Golden Zari Dupatta" },
//   {  imageSrc: "/Zardosi/Zardosi-1.webp", category: "Golden Zari Dupatta" },
//   {  imageSrc: "/Zardosi/Zardosi-1.webp", category: "Golden Zari Dupatta" },
//   {  imageSrc: "/Zardosi/Zardosi-1.webp", category: "Golden Zari Dupatta" },
//   {  imageSrc: "/Zardosi/Zardosi-1.webp", category: "Golden Zari Dupatta" },

  // 🛍️ Cutwork
  {  imageSrc:"/Cutwork/Cutwork-1.webp",  category: "Cutwork" },
  {  imageSrc: "/Cutwork/Cutwork-2.webp", category: "Cutwork" },
  {  imageSrc: "/Cutwork/Cutwork-3.webp", category: "Cutwork" },
  {  imageSrc: "/Cutwork/Cutwork-4.webp", category: "Cutwork" },
  {  imageSrc: "/Cutwork/Cutwork-5.webp", category: "Cutwork" },
  {  imageSrc: "/Cutwork/Cutwork.webp",   category: "Cutwork" },

  // ⚙️ Sequins
  {  imageSrc: "/Sequins work/Sequins work-1.webp", category: "Sequins" },
  {  imageSrc: "/Sequins work/Sequins work-2.webp", category: "Sequins" },
  {  imageSrc: "/Sequins work/Sequins work-3.webp", category: "Sequins" },
  {  imageSrc: "/Sequins work/Sequins work-4.webp", category: "Sequins" },
  {  imageSrc: "/Sequins work/Sequins work-5.webp", category: "Sequins" },
  {  imageSrc: "/Sequins work/Sequins work.webp",   category: "Sequins" },

  // 🧰 Thread Work
  {  imageSrc: "/thread work/thread work-1.webp", category: "Thread Work" },
  {  imageSrc: "/thread work/thread work-2.webp", category: "Thread Work" },
  {  imageSrc: "/thread work/thread work-3.webp", category: "Thread Work" },
  {  imageSrc: "/thread work/thread work-4.webp", category: "Thread Work" },
  {  imageSrc: "/thread work/thread work-5.webp", category: "Thread Work" },
  {  imageSrc: "/thread work/thread work.webp",   category: "Thread Work" },


// 🧰 Mirror Work
  {  imageSrc: "/Mirror work/Mirror work-1.webp", category: "Mirror Work" },
  {  imageSrc: "/Mirror work/Mirror work-2.webp", category: "Mirror Work" },
  {  imageSrc: "/Mirror work/Mirror work-3.webp", category: "Mirror Work" },
  {  imageSrc: "/Mirror work/Mirror work-4.webp", category: "Mirror Work" },
  {  imageSrc: "/Mirror work/Mirror work-5.webp", category: "Mirror Work" },
  {  imageSrc: "/Mirror work/Mirror work.webp",   category: "Mirror Work" },

// 🧰 Stone Work
  {  imageSrc: "/Stone Work/Stone Wrok-1.webp", category: "Stone Work" },
  {  imageSrc: "/Stone Work/Stone Wrok-2.webp", category: "Stone Work" },
  {  imageSrc: "/Stone Work/Stone Wrok-3.webp", category: "Stone Work" },
  {  imageSrc: "/Stone Work/Stone Wrok-4.webp", category: "Stone Work" },
  {  imageSrc: "/Stone Work/Stone Wrok-5.webp", category: "Stone Work" },
  {  imageSrc: "/Stone Work/Stone Wrok.webp",   category: "Stone Work" },


// 🧰 Gota Patti Work 
  {  imageSrc: "/Gota Patti Work/Gota Patti Work-1.webp", category: "Gota Patti Work" },
  {  imageSrc: "/Gota Patti Work/Gota Patti Work-2.webp", category: "Gota Patti Work" },
  {  imageSrc: "/Gota Patti Work/Gota Patti Work-3.webp", category: "Gota Patti Work" },
  {  imageSrc: "/Gota Patti Work/Gota Patti Work-4.webp", category: "Gota Patti Work" },
  {  imageSrc: "/Gota Patti Work/Gota Patti Work-5.webp", category: "Gota Patti Work" },
  {  imageSrc: "/Gota Patti Work/Gota Patti Work.webp",   category: "Gota Patti Work" },
];

/* ---------------- COMPONENTS & VARIANTS ---------------- */

const categories = [
  "Zardosi",
  "Aari",
  "Dabka",
  "Beads",
//   "Golden Zari Dupatta",
  "Cutwork",
  "Sequins",
  "Thread Work",
  "Mirror Work",
  "Stone Work",
  "Gota Patti Work",
];

// Animation variants for card appearance
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 19,
      damping: 24,
      delay: custom * 0.05, // Staggered delay for wave effect
    },
  }),
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* ---------------- Card Component (Updated) ---------------- */
const ResultCard = ({ result, index }) => {
    // State to handle image loading errors (i.e., when an image path is broken)
    const [imageLoadError, setImageLoadError] = useState(false);

    const handleError = () => {
        // If the placeholder image (PLACEHOLDER_IMG) fails, something is very wrong,
        // so we only update state if the path isn't the fallback itself.
        if (result.imageSrc !== PLACEHOLDER_IMG) {
            setImageLoadError(true);
        }
    };
 const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        color: ACCENT_GOLD,
    };
    // Determine the image source to use
    const finalImageSrc = imageLoadError ? PLACEHOLDER_IMG : result.imageSrc;

    return (
        <motion.div
            className="bg-[#1A1A1A] text-[#EDEDED] shadow-xl rounded-xl overflow-hidden flex flex-col border border-[#CFA866]/30 transition-all duration-300"
            variants={cardVariants}
            custom={index}
            initial="hidden"
            animate="visible"
            exit="hidden" // Add exit state for smooth filtering
            whileHover={{
                scale: 1.03, // Slight scale for hover effect
                boxShadow: "0 25px 50px -12px rgba(207,168,102,0.4)",
                borderColor: "#CFA866",
            }}
        >
            {/* Image Container */}
            <div className=" bg-[#0F0F0F] flex items-center justify-center p-4"> 
                
                {/* Always render the image tag, and let the onError handle the fallback logic */}
                <img
                    src={finalImageSrc}
                    alt={result.title}
                    className="object-fit w-full h-auto rounded-md transition duration-300"
                    onError={handleError}
                />

                {/* Show the text overlay only if a generic placeholder URL is being used */}
                {finalImageSrc === PLACEHOLDER_IMG && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#CFA866]/40 to-[#E5BB73]/50 flex items-center justify-center">
                        <p className="text-[#EDEDED] font-semibold italic text-sm px-4 text-center">
                            {result.imageSrc !== PLACEHOLDER_IMG ? 
                                `Image Not Found: ${result.imageSrc.split('/').pop()}` :
                                'Generic Placeholder'
                            }
                        </p>
                    </div>
                )}
            </div>

            {/* Title */}
            {/* <div className="p-5 text-center" style={titleStyle}>
                <h3 className="text-xl font-bold text-[#CFA866]">{result.title}</h3>
            </div> */}
        </motion.div>
    );
};

/* ---------------- MAIN COMPONENT ---------------- */
export default function GallerySecond() {

    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        color: ACCENT_GOLD,
    };
    // Set default category to 'Home Services' as per the screenshot
    const [activeCategory, setActiveCategory] = useState("Zardosi");

    // Filter the results based on the active category
    const filteredResults = resultsData.filter(
        (item) => item.category === activeCategory
    );

    // Custom CSS for scrollbar-hide utility (necessary for single-file styling)
    const customStyles = `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }
    `;

    return (
        <div className="font-inter">
            <style>{customStyles}</style>
            <TailwindLoader />
            {/* Set section background to a very dark color for contrast with the white surrounding environment */}
            <section className="py-12 sm:py-20 bg-[#0F0F0F] min-h-screen text-white"> 
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10" style={titleStyle}>
                        Our Gallery
                    </h2>

                    {/* Category Buttons - Mobile Responsive (Scrollable) */}
                    <div className="flex justify-center mb-12">
                        {/* Enables horizontal scroll for many buttons on small screens */}
                        <div className="flex overflow-x-auto gap-3 py-2 px-4 max-w-full justify-start sm:justify-center whitespace-nowrap scrollbar-hide" style={titleStyle}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`
                                        px-4 py-2 text-sm font-medium rounded-full border-2 
                                        transition-all duration-300 focus:outline-none 
                                        min-w-max 
                                        ${
                                            cat === activeCategory
                                                ? "bg-[#CFA866] border-[#CFA866] text-[#0F0F0F] shadow-lg shadow-[#CFA866]/40 scale-100"
                                                : "bg-transparent border-[#3A3A3A] text-[#EDEDED] hover:border-[#CFA866] hover:text-[#CFA866]"
                                        }
                                        
                                    `}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards Grid - Mobile Responsive (1 column on mobile, 3 on large screens) */}
                    <motion.div
                        key={activeCategory} // Key change triggers the animation reset for the new category
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        
                    >
                        {filteredResults.length > 0 ? (
                            filteredResults.map((res, i) => (
                                <ResultCard key={res.title} result={res} index={i} />
                            ))
                        ) : (
                            <div className="col-span-full text-center text-[#9A9A9A] py-10 text-lg">
                                No results available for{" "}
                                <span className="text-[#CFA866] font-semibold">{activeCategory}</span>.
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
