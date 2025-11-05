import React from 'react';

const ACCENT_GOLD = '#cfa866';

const HomeForthSection = () => {
    // URL for the teamwork image from your screenshot (Assuming the image is placed at the project root)
    const imageUrl = './SzutraScrolldesign.png';
    
    // Style for the main headers and titles (Cinzel Decorative)
    const titleStyle = {
        fontFamily: 'Cinzel Decorative, serif', 
        textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };

    return (
        // Changed to min-h-screen for a full-viewport display
        <div className="relative min-h-screen flex items-center justify-start bg-black overflow-hidden">
            
            {/* 1. FIXED BACKGROUND IMAGE CONTAINER (The Parallax Image) */}
            <div 
                className="absolute inset-0 
                         bg-cover bg-top bg-no-repeat 
                         bg-fixed" // <-- bg-cover ensures no black margins. bg-top prioritizes the upper part of the image.
                style={{
                    backgroundImage: `url('${imageUrl}')`,
                }}
                aria-hidden="true"
            >
                {/* Dark Overlay for better text contrast */}
                {/* Made the overlay slightly darker (bg-black/70) to ensure the white text pops over a complex image. */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* 2. CONTENT CONTAINER */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white overflow-hidden" >
                <div className="max-w-3xl text-left">
                    {/* Applying responsive text size for better readability on smaller screens */}
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg"
                        style={titleStyle}>
                        Luxury redefined through the art of intricate Zari craftsmanship.
                    </p>
                </div>
            </div>
        </div>
    );
};

export {HomeForthSection};
