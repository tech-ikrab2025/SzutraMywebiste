import React from 'react';

// NOTE: For the 'Cinzel Decorative' font to display, ensure it is linked
// in your main HTML file (e.g., via Google Fonts).

const ACCENT_GOLD = '#cfa866';

// Style for the main headers and titles (Cinzel Decorative)
const titleStyle = {
    fontFamily: 'Cinzel Decorative, serif', 
    // Removed textShadow from the inline style for a cleaner look, relying on the overlay for contrast
    color: ACCENT_GOLD,
};

// Style for body and descriptive text (Playfair Display for a complementary elegant serif look)
const bodyTextStyle = {
    fontFamily: 'Playfair Display, Georgia, serif',
};

// Data for the project cards (unchanged)
const projects = [
    
    {
        title: "Elegenza Chic Boutique",
        description: "Ridiculus himenaeos metus torquent lobortis adipiscing gravida lacus.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIy37M8CJgYoHBZusHr2qkcdR2Uy5DDNuDg&s", 
        
    },
    {
        title: "GlamRise Fashions",
        description: "Ridiculus himenaeos metus torquent lobortis adipiscing gravida lacus.",
        imageUrl: "https://media.urbanwomania.com/wp-content/uploads/2023/09/Regional-Sarees-Every-Woman-Must-Have.jpg", 
        
    },
    {
        title: "Radiant Reverie Apparel",
        description: "Ridiculus himenaeos metus torquent lobortis adipiscing gravida lacus.",
        imageUrl: "https://dorabyphoenix.com/wp-content/uploads/2022/08/Madhubani-on-Tussar-Silk-Saree.png", 
        
    },
    {
        title: "Nova Bridal Couture",
        description: "Ridiculus himenaeos metus torquent lobortis adipiscing gravida lacus.",
        imageUrl: "https://www.manyavar.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw065d0c65/Significance%20of%20Each%20Element%20in%20a%20Traditional%20Saree%20Look%20of%20Every%20Region_blog%201.jpg", 
        
    },
];

// Data for the large, featured project card (unchanged)
const featuredProject = {
    title: "LuxeVogue Creations",
    description: "Ridiculus himenaeos metus torquent lobortis adipiscing gravida lacus.",
    imageUrl: "https://vastraan.com/cdn/shop/files/vastraan-red-zari-woven-saree-jimmy-choo-luxury-touch.webp?v=1734773704", 
    
};


// Helper component for a single card (unchanged)
const ProjectCard = ({ title, description, imageUrl, link = "#", isFeatured = false }) => (
    // Height is managed here: featured is tall, standard is regular
    <a 
        href={link} 
        className={`relative overflow-hidden group block w-full rounded-xl shadow-lg transition duration-300 transform hover:shadow-2xl hover:scale-[1.01] 
        ${isFeatured ? 'h-[30rem] md:h-full' : 'h-80'}`} // Using specific heights for better grid control on mobile
    >
        {/* Image Container with Overlay */}
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/1C1C1C/FFFFFF?text=Image+Placeholder'; }}
        >
            {/* --- BLACK OVERLAY ADDED HERE --- */}
            <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover:bg-black/40"></div>
            {/* Subtle Gradient for Text Readability at the Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Text Content */}
        <div className="absolute bottom-0 p-8 w-full z-10">
            {/* Title uses Cinzel Decorative for high-end look */}
            <h3 className="text-3xl font-semibold text-white mb-3" style={{ fontFamily: titleStyle.fontFamily }} >{title}</h3>
            {/* Description uses Playfair Display for readability */}
            <p className="text-gray-200 text-lg mb-6" style={titleStyle}>{description}</p>
        </div>
    </a>
);

// Main Component
const HomeFifthSection = () => {
    return (
        // Ensured full mobile responsiveness via Tailwind utility classes
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
            {/* MODIFIED: Increased padding on all sides for large screens (lg:px-12) */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12"> {/* <--- **MODIFIED PADDING CLASSES HERE** */}
                
                {/* Header/Intro Section */}
                <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
                    <div className="md:col-span-1">
                        {/* Sub-Heading - Gold Accent and Cinzel Decorative */}
                        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={ { ...titleStyle, color: ACCENT_GOLD } }>
                            OUR LATEST PROJECT
                        </p>
                        {/* Main Heading - Gold Accent and Cinzel Decorative */}
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={ { ...titleStyle, color: ACCENT_GOLD } }>
                            We deliver fashion as <br className="hidden md:inline"/> unique as you
                        </h2>
                    </div>
                    {/* Descriptive Paragraph - Playfair Display for readability */}
                    <p className="text-gray-600 dark:text-gray-400 md:col-span-1 text-base leading-relaxed" style={bodyTextStyle}>
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
                        <ProjectCard {...projects[0]} /> {/* Elegenza Chic Boutique */}
                    </div>
                    <div className="md:col-span-1">
                        <ProjectCard {...projects[1]} /> {/* GlamRise Fashions */}
                    </div>

                    {/* 3. Bottom-Right Cards (Row 2, Columns 2 & 3 on desktop) */}
                    <div className="md:col-span-1 md:col-start-2">
                        <ProjectCard {...projects[2]} /> {/* Radiant Reverie Apparel */}
                    </div>
                    <div className="md:col-span-1">
                        <ProjectCard {...projects[3]} /> {/* Nova Bridal Couture */}
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export {HomeFifthSection};