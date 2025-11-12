import React, { useRef, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ACCENT_GOLD = '#cfa866';

// --- MOCK IMAGE DATA ---
const galleryItems = [
    { id: 1, url: "/AboutUsImage.webp", title: "Image 1"},
    { id: 2, url: "/GalleryImage_2.webp", title: "Image 2"},
    { id: 3, url: "/home page new image.webp", title: "Image 3"},
];

const GalleryThird = () => {
    const scrollContainerRef = useRef(null);
    // Index tracks the first image of the visible item (0, 1, 2...)
    const [currentIndex, setCurrentIndex] = useState(0);

    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif',
        color: ACCENT_GOLD,
    };

    // Width of a single image (now 100% of the viewport)
    const getItemWidth = useCallback(() => {
        if (scrollContainerRef.current) {
            // ⭐ CHANGE: Returns 100% of the container width
            return scrollContainerRef.current.clientWidth; 
        }
        return 0;
    }, []);

    // Function to scroll to a specific image index
    const scrollToImage = useCallback((index) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const itemWidth = getItemWidth();
            
            container.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
            });
            setCurrentIndex(index);
        }
    }, [getItemWidth]); 

    // Handle navigation logic (Next/Previous)
    const handleNext = useCallback(() => {
        // ⭐ CHANGE: Jump ahead by 1 index
        const nextIndex = currentIndex + 1;
        
        // ⭐ CHANGE: Last valid index is length - 1
        if (nextIndex <= (galleryItems.length - 1)) {
            scrollToImage(nextIndex);
        }
    }, [currentIndex, scrollToImage]);

    const handlePrevious = useCallback(() => {
        // ⭐ CHANGE: Jump back by 1 index
        const prevIndex = currentIndex - 1;
        
        if (prevIndex >= 0) {
            scrollToImage(prevIndex);
        } else {
            scrollToImage(0); 
        }
    }, [currentIndex, scrollToImage]);

    // Handle scroll events to update current index (for swipe)
    const handleScroll = useCallback(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollLeft = container.scrollLeft;
            const itemWidth = getItemWidth();
            
            // Determine the new index by rounding the scroll position divided by the item width (which is 100%)
            const newIndex = Math.round(scrollLeft / itemWidth);
            
            // ⭐ CHANGE: Boundary check only needs to be against length - 1
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= (galleryItems.length -1)) {
                 setCurrentIndex(newIndex);
            }
        }
    }, [currentIndex, getItemWidth]);

    // Set up scroll event listener
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, [handleScroll]);


    return (
        <section className="py-12 sm:py-10 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#CFA866]" style={titleStyle}>
                    The Legacy of Zari Craftsmanship
                </h2>
            </div>
            
            <div className="relative w-full overflow-hidden bg-gray-900 font-sans text-white h-[80vh] md:h-[85vh]">
                <style jsx="true">{`
                    /* CSS to hide scrollbar for a clean, paginated look */
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none; /* IE and Edge */
                        scrollbar-width: none; /* Firefox */
                    }
                `}</style>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex h-full w-full overflow-x-scroll snap-x snap-mandatory hide-scrollbar relative z-10"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            // ⭐ CRITICAL FIX: Use w-full (or w-screen) for 100% width
                            className="flex-none w-full h-full snap-start relative overflow-hidden bg-black flex items-center justify-center"
                        >
                            <img
                                src={item.url} 
                                alt={`Gallery image ${item.id}`}
                                className="w-full h-full object-cover" 
                            />
                            {/* Title overlay on the image itself */}
                            {/* <div className="absolute inset-0 bg-black/40 flex items-end p-8 md:p-16">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="text-xl font-extrabold drop-shadow-lg text-white"
                                >
                                    {item.title || `Image ${item.id}`}
                                </motion.h2>
                            </div> */}
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 z-20 pointer-events-none">
                    <motion.button
                        onClick={handlePrevious}
                        // Disable when on the first image (index 0)
                        disabled={currentIndex === 0} 
                        className="p-3 bg-black/50 text-white rounded-full hover:bg-black hover:text-white transition duration-300 pointer-events-auto focus:outline-none focus:ring-4 focus:ring-[#CFA866]/50 disabled:opacity-30 disabled:hover:bg-black/50"
                        aria-label="Previous Image"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowLeft size={32} />
                    </motion.button>
                    <motion.button
                        onClick={handleNext}
                        // ⭐ CHANGE: Disable when showing the last image (length - 1)
                        disabled={currentIndex >= (galleryItems.length - 1)}
                        className="p-3 bg-black/50 text-white rounded-full hover:bg-black hover:text-white transition duration-300 pointer-events-auto focus:outline-none focus:ring-4 focus:ring-[#CFA866]/50 disabled:opacity-30 disabled:hover:bg-black/50"
                        aria-label="Next Image"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowRight size={32} />
                    </motion.button>
                </div>

                {/* Image Dots Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3 bg-black/60 px-5 py-2 rounded-full backdrop-blur-sm">
                    {/* Now, we show a dot for every image since each one is a "page" */}
                    {galleryItems.map((_, dotIndex) => (
                        <motion.button
                            key={dotIndex} 
                            onClick={() => scrollToImage(dotIndex)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 pointer-events-auto ${currentIndex === dotIndex
                                ? 'bg-[#CFA866] scale-125'
                                : 'bg-gray-400 hover:bg-[#CFA866]/50'
                                }`}
                            aria-label={`Go to image ${dotIndex + 1}`}
                            whileHover={{ scale: 1.25 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryThird;