import React, { useRef, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ACCENT_GOLD = '#cfa866';

// --- MOCK IMAGE DATA (Ensuring an even number is best for this layout) ---
const galleryItems = [
    { id: 1, url: "/AboutUsImage.png"},
    { id: 2, url: "/GalleryImage_2.png"},
    { id: 3, url: "/home page new image.png"},
    { id: 4, url: "https://placehold.co/1920x1080/4ECDC4/FFFFFF?text=4.+Responsive+Solution"},
    { id: 5, url: "https://placehold.co/1920x1080/8D99AE/FFFFFF?text=5.+Final+Concept"},
    { id: 6, url: "https://placehold.co/1920x1080/8D99AE/FFFFFF?text=6.+Extra+Image"},
];

const GalleryThird = () => {
    const scrollContainerRef = useRef(null);
    // Index tracks the first image of the visible pair.
    const [currentIndex, setCurrentIndex] = useState(0);

    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif',
        color: ACCENT_GOLD,
    };

    // Width of a single image (50% of the viewport)
    const getItemWidth = useCallback(() => {
        if (scrollContainerRef.current) {
            return scrollContainerRef.current.clientWidth / 2; 
        }
        return 0;
    }, []);

    // Function to scroll to a specific image index
    const scrollToImage = useCallback((index) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const itemWidth = getItemWidth();
            
            // Scroll by the amount needed to bring the index-th image to the far left.
            container.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
            });
            setCurrentIndex(index);
        }
    }, [getItemWidth]); 

    // Handle navigation logic (Next/Previous)
    const handleNext = useCallback(() => {
        // ❗ FIX: Jump ahead by 2 indices (a full pair of new content)
        const nextIndex = currentIndex + 2;
        
        // Ensure we don't scroll past the last valid starting index (length - 2)
        if (nextIndex <= (galleryItems.length - 2)) {
            scrollToImage(nextIndex);
        }
    }, [currentIndex, scrollToImage]);

    const handlePrevious = useCallback(() => {
        // ❗ FIX: Jump back by 2 indices
        const prevIndex = currentIndex - 2;
        
        // Ensure we don't go below the first item (index 0)
        if (prevIndex >= 0) {
            scrollToImage(prevIndex);
        } else {
             // If we're at index 1 and click previous, go back to index 0
            scrollToImage(0); 
        }
    }, [currentIndex, scrollToImage]);

    // Handle scroll events to update current index (for swipe)
    const handleScroll = useCallback(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollLeft = container.scrollLeft;
            const itemWidth = getItemWidth();
            
            // Determine the new index by rounding the scroll position divided by the single item width
            const newIndex = Math.round(scrollLeft / itemWidth);
            
            // Only update if the index is a valid starting position for a pair (even number) 
            // and is within the boundary (length - 2).
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= (galleryItems.length - 2)) {
                // To ensure only full pages (index 0, 2, 4...) are tracked, we might adjust rounding here, 
                // but rounding is fine if snap-start is strong.
                setCurrentIndex(newIndex);
            }
        }
    }, [currentIndex, getItemWidth]);

    // Set up scroll event listener
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // Re-adding the scroll listener
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
                    // Crucial: snap-x snap-mandatory ensures scrolling stops on the boundary between images.
                    className="flex h-full w-full overflow-x-scroll snap-x snap-mandatory hide-scrollbar relative z-10"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            // ❗ CRITICAL CSS: w-1/2 w-screen ensures two images fit perfectly.
                            // snap-start aligns the image to the start of the viewport, which will now be the boundary between pairs.
                            className="flex-none w-1/2 w-screen h-full snap-start relative overflow-hidden bg-black flex items-center justify-center"
                        >
                            <img
                                src={item.url} 
                                // alt={item.title}
                                // object-cover fills the space, eliminating black bars (cropping may occur).
                                className="w-full h-full object-cover" 
                            />
                            {/* Title overlay on the image itself */}
                            <div className="absolute inset-0 bg-black/40 flex items-end p-8 md:p-16">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    //className="text-xl font-extrabold drop-shadow-lg text-white bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-lg"
                                >
                                    {item.title}
                                </motion.h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 z-20 pointer-events-none">
                    <motion.button
                        onClick={handlePrevious}
                        // Disable when the first visible item is the very first one
                        disabled={currentIndex === 0} 
                        className="p-3 bg-black/50 text-white rounded-full hover:bg-black hover:text-white transition duration-300 pointer-events-auto focus:outline-none focus:ring-4 focus:ring-[#CFA866]/50 disabled:opacity-30 disabled:hover:bg-black/50"
                        aria-label="Previous Page"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowLeft size={32} />
                    </motion.button>
                    <motion.button
                        onClick={handleNext}
                        // Disable when the current view shows the last two images
                        disabled={currentIndex >= (galleryItems.length - 2)}
                        className="p-3 bg-black/50 text-white rounded-full hover:bg-black hover:text-white transition duration-300 pointer-events-auto focus:outline-none focus:ring-4 focus:ring-[#CFA866]/50 disabled:opacity-30 disabled:hover:bg-black/50"
                        aria-label="Next Page"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowRight size={32} />
                    </motion.button>
                </div>

                {/* Image Dots Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3 bg-black/60 px-5 py-2 rounded-full backdrop-blur-sm">
                    {/* Only create a dot for the starting index of each two-image view (index 0, 2, 4...) */}
                    {galleryItems.filter((_, index) => index % 2 === 0).map((_, index) => {
                        const dotIndex = index * 2;
                        // Only show dots up to the last valid starting position
                        if (dotIndex <= galleryItems.length - 2) {
                            return (
                                <motion.button
                                    key={dotIndex} 
                                    onClick={() => scrollToImage(dotIndex)}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 pointer-events-auto ${currentIndex === dotIndex
                                        ? 'bg-[#CFA866] scale-125'
                                        : 'bg-gray-400 hover:bg-[#CFA866]/50'
                                        }`}
                                    aria-label={`Go to page starting at image ${dotIndex + 1}`}
                                    whileHover={{ scale: 1.25 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    );
};

export default GalleryThird;