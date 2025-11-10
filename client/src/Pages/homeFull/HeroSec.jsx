import React from 'react';

// Custom rich gold color accent
const ACCENT_GOLD = '#cfa866';

const HeroSection = () => {
    // Custom style for the elegant main title text
    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        textShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };
    // Utility function to handle the smooth scroll
    const scrollToGallery = (e) => {
    e.preventDefault(); // Prevents the default anchor link jump
    const gallerySection = document.getElementById('home-gallery');
    if (gallerySection) {
        gallerySection.scrollIntoView({
            behavior: 'smooth', // This is the key for smooth scrolling
            block: 'start',      // Scroll to the top of the element
        });
        }
    };

    return (
        // Set the main container to w-screen h-screen to ensure the video covers the full viewport
        // relative is necessary for the absolute children positioning
        <header className="relative w-screen h-[90vh] overflow-hidden bg-black">
            
            {/* Background Video - Using object-cover to ensure no edge is visible */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-[90vh] object-cover"
                poster="placeholder-image.jpg" 
                // Added key to force remount/reload if video issues persist
                key="szutra-hero-video"
            >
                {/* Ensure the path to your video file is correct: /szutravideo.mp4 */}
                <source src="/szutravideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Slightly darker overlay for dramatic contrast */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Main Text Content (Centered) 
                FIX: Use absolute inset-0 to make the container cover the full screen
                This allows justify-center and items-center to work correctly for centering
            */}
            <div 
                className="absolute inset-0 z-10 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
                style={{ color: ACCENT_GOLD }} // Using the constant for text color
            >
                
                {/* Brand and Headline */}
                <h2 className="text-xl sm:text-2xl uppercase mb-4 drop-shadow-md">
                    Masterpieces Woven by SZUTRA
                </h2>
                
                {/* Main Title */}
                <h1 
                    className="text-6xl sm:text-8xl md:text-9xl font-bold leading-none mb-6 drop-shadow-lg"
                    style={titleStyle}
                >
                    The Zari Legacy
                </h1>

                {/* Tagline */}
                <p className="text-xl sm:text-2xl max-w-3xl drop-shadow-md mb-12">
                    Opulent threads. Modern silhouettes. Elevate your style with genuine Zari.
                </p>

                

                {/* CTA Button (Styled for luxury) */}
                <a
                    href="#home-gallery" // Set your destination URL here
                    //target="_blank" // This ensures the link opens in a new tab
                    //rel="noopener noreferrer" // Security best practice for target="_blank"
                    className={`
                        text-gray-800 font-semibold py-3 px-10 rounded-full shadow-xl 
                        uppercase tracking-wider transition duration-300 ease-in-out
                        hover:scale-105 transform active:scale-95 border-2 border-transparent hover:border-white
                        focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
                        inline-flex items-center justify-center 
                    `}
                    style={{ backgroundColor: ACCENT_GOLD }} 
                    aria-label="Shop our new Zari collection now"
                >
                    Explore Collection
                </a>
            </div>
        </header>
    );
};

export {HeroSection} ;