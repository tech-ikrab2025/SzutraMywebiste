import React from 'react';

// Re-using the color constants from your other component for consistency
const ACCENT_GOLD = '#cfa866';
const PRIMARY_BLUE = '#1b2e4e';

// Example product data - The rich features are NOT stored here (see ProductDetailPage)
const products = [
    {
        id: 1,
        src: "/Zardosi (1).png", 
        alt: 'Zardosi',
        richDescription: 'Royal metallic thread embroidery with rich detail',
    },
    {
        id: 2,
        src: "/SzutraProduct_1.png",
        alt: 'Aari ',
        richDescription: 'Fine hand chain-stitch art done with hooked needle',
    },
    {
        id: 3,
        src: "/SzutraProduct_1.png",
        alt: 'Dabka',
        richDescription: 'Coiled wire embroidery adding depth and shine',
    },
    {
        id: 4,
        src: '/SzutraProduct_1.png',
        alt: 'Beads',
        richDescription: 'Hand-stitched beads for sparkle and texture',
    },
    {
        id: 5,
        src: '/SzutraProduct_1.png',
        alt: 'Golden Zari Dupatta',
        richDescription: 'Golden Zari Dupatta, Shimmering gold, luxury, elevates any outfit.',
    },
    {
        id: 6,
        src: '/SzutraProduct_1.png',
        alt: 'Cutwork',
        richDescription: 'Elegant open-pattern design crafted by hand',
    },

    {
        id: 7,
        src: '/SzutraProduct_1.png',
        alt: 'Sequins',
        richDescription: 'Shimmering sequins that bring fabric to life',
    },

    {
        id: 8,
        src: '/SzutraProduct_1.png',
        alt: 'Thread Work ',
        richDescription: 'Colorful silk threads create elegant patterns ',
    },

    {
        id: 9,
        src: '/SzutraProduct_1.png',
        alt: 'Mirror Work ',
        richDescription: 'Tiny mirrors stitched for festive sparkle',
    },

    {
        id: 10,
        src: '/SzutraProduct_1.png',
        alt: 'Stone Work ',
        richDescription: 'Shiny stones add luxury and brilliance',
    },
     {
        id: 11,
        src: '/SzutraProduct_1.png',
        alt: 'Gota Patti Work  ',
        richDescription: 'Gold ribbons stitched for royal charm',
    },
];

const HomeGallerySection = () => {
    
    // Inline style to hide scrollbar (as used in your SzutraSecondSec)
    const hideScrollbar = {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    };
    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };
      
    
    return (
        <section id="home-gallery" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <h2 
                    className="text-4xl md:text-7xl font-extrabold text-center mb-3"
                    style={ titleStyle }
                >
                    Our Exclusive Collection
                </h2>
                <div 
    className="w-24 h-[6px] mb-6 mx-auto" // h-[6px] is equivalent to h-1.5, giving a custom thickness
    style={{ backgroundColor: ACCENT_GOLD }} 
></div>
                <p 
                    className="text-center text-lg md:text-2xl text-gray-800 mx-auto mb-8" 
                >
                    Discover the artistry of Zari through our curated selection of masterpieces.
                </p>

                {/* === Carousel Wrapper - Fixed to horizontal scroll on ALL screens === */}
                <div 
                    className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-6 px-4"
                    style={hideScrollbar} 
                >
                    {products.map(product => (
                        <div 
                            key={product.id} 
                            className="flex-none w-72 snap-center rounded-lg shadow-xl bg-white overflow-hidden transition-transform duration-300 hover:scale-105" 
                        >
                            <a 
                                // Action: Only pass the unique 'id' to the detail page.
                                href={`/product-details?id=${product.id}&heading=${encodeURIComponent(product.alt)}&image=${encodeURIComponent(product.src)}&desc=${encodeURIComponent(product.richDescription)}`}
                                target="_blank" // Opens in a new tab
                                rel="noopener noreferrer" 
                                className="block h-full w-full group"
                                aria-label={`View ${product.alt}`}
                            >
                                {/* Image Container */}
                                   <div className="h-100 overflow-hidden">
                                        <img 
                                            src={product.src} 
                                            alt={product.alt} 
                                            className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105 bg-gray-200"
                                        />
                                    </div> 
                                    
                                    {/* Card Body Content */}
                                    <div className="p-5 flex flex-col justify-between min-h-[140px]">
                                        <div>
                                            <h3 
                                                className="text-xl font-bold mb-2 truncate"
                                                style={{ color: ACCENT_GOLD }}
                                            >
                                                {product.alt}
                                            </h3>
                                            <p className="text-gray-800 mb-4 text-sm">
                                               {product.richDescription}
                                            </p>
                                        </div>
                                        
                                        {/* View Product Button (Styled to match your other component) */}
                                        <div className="mt-auto text-right">
                                            <span 
                                                className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md shadow transition-colors text-gray-800"
                                                style={{ backgroundColor: ACCENT_GOLD }}
                                            >
                                                View Product
                                                <svg className="ml-2 h-4 w-4" style={{ color: PRIMARY_BLUE }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { HomeGallerySection };