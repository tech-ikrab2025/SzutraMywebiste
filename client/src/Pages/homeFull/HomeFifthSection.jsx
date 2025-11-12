import React from 'react';

// NOTE: For the 'Cinzel Decorative' font to display, ensure it is linked
// in your main HTML file (e.g., via Google Fonts).

const ACCENT_GOLD = '#cfa866';

// Style for the main headers and titles (Cinzel Decorative fallback to Playfair Display)
const titleStyle = {
    // IMPORTANT: The font name should be Cinzel Decorative.
    // I've included a fallback serif font.
    fontFamily: 'Playfair Display, Georgia, serif', 
    textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
    color: ACCENT_GOLD,
};

// Data for the project cards (unchanged)
const projects = [
    {
        title: "Preserving Art, Creating Elegance",
        description: "At Szutra, we keep ancient artistry alive — shaping it into modern masterpieces that inspire.",
        imageUrl: "/Fifth_2.webp", 
    },
    {
        title: "True luxury is handmade",
        description: "True luxury is handmade — where patience meets perfection and every detail shines.",
        imageUrl: "/Fifth_3.webp", 
        
    },
    {
        title: "Crafted by Hand, Honoured by Heritage",
        description: "From royal Zardosi to modern couture, every piece reflects India’s golden legacy of art.",
        imageUrl: "/Fifth_4.webp", 
        
    },
    {
        title: "Where Every Thread Tells a Stor",
        description: "Each stitch carries the soul of our artisans — blending tradition, passion, and timeless beauty.",
        imageUrl: "/Fifth_5.webp", 
        
    },
];

// Data for the large, featured project card (unchanged)
const featuredProject = {
    title: "Luxury Begins with a Single Stitch",
    description: "True luxury is handmade — where patience meets perfection and every detail shines.",
    imageUrl: "/FifthSec_1.webp", 
    
};


// Helper component for a single card (MODIFIED: Font sizes reduced)
const ProjectCard = ({ title, description, imageUrl, isFeatured = false }) => (
    // Height is managed here: featured is tall, standard is regular
    <a 
         
        className={`relative overflow-hidden group block w-full rounded-xl shadow-lg transition duration-300 transform hover:shadow-2xl hover:scale-[1.01] 
        ${isFeatured ? 'h-[30rem] md:h-full' : 'h-80'}`} // Using specific heights for better grid control on mobile
    >
        {/* Image Container with Overlay */}
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}
            
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/1C1C1C/FFFFFF?text=Image+Placeholder'; }}
        >
            {/* --- BLACK OVERLAY ADDED HERE --- */}
            <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover:bg-black/40"></div>
            {/* Subtle Gradient for Text Readability at the Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Text Content */}
        <div className="absolute bottom-0 p-8 w-full z-10">
            {/* MODIFIED: Heading size reduced from text-3xl to text-2xl */}
            <h3 
                className="text-2xl font-semibold mb-3" 
                style={{ color: ACCENT_GOLD, fontFamily: 'Playfair Display, Georgia, serif' }}
            >
                {title}
            </h3>
            {/* MODIFIED: Description size reduced from text-lg to text-base */}
            <p className="text-white text-base mb-6" >{description}</p>
        </div>
    </a>
);

// Main Component
const HomeFifthSection = () => {
    // Re-defining titleStyle locally just to ensure scope is clear, though it's already defined globally.
    const headerTitleStyle = {
        // IMPORTANT: The font name should be Cinzel Decorative.
        // I've included a fallback serif font.
        fontFamily: 'Cinzel Decorative, Playfair Display, Georgia, serif', 
        textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };

    return (
        // Ensured full mobile responsiveness via Tailwind utility classes
        <section className="py-16 md:py-24 bg-White dark:bg-White text-gray-800 dark:text-white">
            {/* MODIFIED: Increased padding on all sides for large screens (lg:px-12) */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                
                {/* Header/Intro Section */}
                <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
                    <div className="md:col-span-1">
                        {/* Sub-Heading - Gold Accent and Cinzel Decorative */}
                        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={ { color: ACCENT_GOLD } }>
                            OUR LATEST PROJECT
                        </p>
                        {/* Main Heading - Gold Accent and Cinzel Decorative */}
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={headerTitleStyle}>
                            We deliver fashion as <br className="hidden md:inline"/> unique as you
                        </h2>
                    </div>
                    {/* Descriptive Paragraph - Playfair Display for readability */}
                    <p className="text-gray-600 dark:text-gray-400 md:col-span-1 text-base leading-relaxed">
                        Szutra redefines heritage with every exquisite weave. Our Zari creations blend royal tradition and modern artistry,
                        handcrafted to perfection. Each ensemble radiates opulence,
                        celebrating the spirit of timeless beauty for those who embrace luxury with grace. 
                    </p>
                </div>
                
                {/* Projects Grid (Unchanged) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* 1. Featured Left Card */}
                    <div className="md:col-span-1 md:row-span-2 h-[30rem] md:h-full">
                        <ProjectCard {...featuredProject} isFeatured={true} />
                    </div>
                    
                    {/* 2. Top-Right Cards (Row 1, Columns 2 & 3 on desktop) */}
                    <div className="md:col-span-1">
                        <ProjectCard {...projects[0]} />
                    </div>
                    <div className="md:col-span-1">
                        <ProjectCard {...projects[1]} />
                    </div>

                    {/* 3. Bottom-Right Cards (Row 2, Columns 2 & 3 on desktop) */}
                    <div className="md:col-span-1 md:col-start-2">
                        <ProjectCard {...projects[2]} />
                    </div>
                    <div className="md:col-span-1">
                        <ProjectCard {...projects[3]} />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export {HomeFifthSection};