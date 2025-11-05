import React from 'react';

// Re-using the color constants from your other component for consistency
const ACCENT_GOLD = '#cfa866';
const PRIMARY_BLUE = '#1b2e4e';

// Example product data - The rich features are NOT stored here (see ProductDetailPage)
const products = [
    {
        id: 1,
        src: "/SzutraProduct_1.png", 
        alt: 'Elegant Zari Saree',
        richDescription: 'This exquisite Elegant Zari Saree is a testament to timeless grace. Woven with the finest silk and intricate gold thread, it drapes beautifully, offering a regal look for any grand occasion. The lightweight fabric ensures comfort without compromising on opulence. A true masterpiece of traditional Indian textile art.',
    },
    {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGeoi_w083nCr_BjbjckN8adwcHEYGFE5tA&s",
        alt: 'Royal Blue Zari Lehenga',
        richDescription: 'The Royal Blue Zari Lehenga is designed for the modern queen. Its deep, rich blue color provides a stunning contrast to the heavy gold zari embroidery, covering the voluminous skirt and choli. This piece is perfect for a wedding reception or a major festive celebration, embodying traditional luxury.',
    },
    {
        id: 3,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkeb3eLI-jPuJItYA0G1J83fOviM5QyiIqQ&s",
        alt: 'Green Zari Kurta Set',
        richDescription: 'This vibrant Green Zari Kurta Set is a comfortable yet chic choice. The subtle zari detailing on the neckline and cuffs adds a touch of sophistication, making it ideal for smaller gatherings or office parties. The breathability of the fabric ensures all-day comfort.',
    },
    {
        id: 4,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbGP9Ju7qUwUiiGzpwiSMwccbCTFZd5IS0A&s',
        alt: 'Sky Blue Zari Dress',
        richDescription: 'A breath of fresh air, the Sky Blue Zari Dress offers a contemporary silhouette with traditional artistry. The delicate zari border complements the flowing fabric, creating an ethereal look. Perfect for a summer daytime event or a bridal shower.',
    },
    {
        id: 5,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiR8aKNRTwyhHBzoNOILH7ubEwvqgDtA9CQ&s',
        alt: 'Golden Zari Dupatta',
        richDescription: 'The Golden Zari Dupatta is the perfect accessory to elevate any outfit. Handwoven with shimmering gold threads, it adds a layer of unparalleled luxury and tradition. Its versatile design pairs beautifully with a plain suit or a simple lehenga.',
    },
    {
        id: 6,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoW846fpP_uq3q8AMZgfNiEmbzaa_Oc76Pg&s',
        alt: 'Silver Zari Gown',
        richDescription: 'Make a statement with the Silver Zari Gown. This modern gown features geometric patterns in silver zari, giving a unique, contemporary edge to traditional weaving. Its structure and shimmer are guaranteed to turn heads at any evening gala.',
    }
];

const HomeGallerySection = () => {
    
    // Inline style to hide scrollbar (as used in your SzutraSecondSec)
    const hideScrollbar = {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    };
    const titleStyle = {
        fontFamily: 'Cinzel Decorative, serif', 
        textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };
      const ParagraphStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
    };
    
    return (
        <section id="home-gallery" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <h2 
                    className="text-4xl md:text-7xl font-extrabold text-center mb-12"
                    style={ titleStyle }
                >
                    Our Exclusive Collection
                </h2>
                <p 
                    className="text-center text-lg md:text-1xl text-[#cfa866] max-w-3xl mx-auto mb-16" style={ParagraphStyle}
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
                            className="flex-none w-72 snap-center rounded-lg shadow-xl bg-white overflow-hidden transition-transform duration-300 hover:scale-105" style={ParagraphStyle}
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
                                                Explore the intricate details and fine craftsmanship.
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