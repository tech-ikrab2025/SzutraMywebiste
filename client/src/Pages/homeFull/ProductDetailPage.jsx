import React, { useEffect, useState } from 'react';

// Re-using the color constants for consistency
const ACCENT_GOLD = '#cfa866'; // A richer, elegant gold
const PRIMARY_BLUE = '#1b2e4e'; // A deep, elegant navy blue

// 🌟 IMPORTANT: Data containing the rich feature lists (React Elements) mapped to product IDs
const productFeaturesMap = {
    // Product ID 1 Features
    '1': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>Material:</strong> Finest Silk with authentic Zari thread.</li>
            <li><strong>Weight:</strong> Exceptionally Lightweight.</li>
            <li><strong>Design:</strong> Intricate traditional gold border.</li>
            <li><strong>Best for:</strong> Grand ceremonial occasions.</li>
        </ul>
    ),
    // Product ID 2 Features
    '2': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>Material:</strong> Premium Silk with authentic Zari weaving.</li>
            <li><strong>Craftsmanship:</strong> Hand-woven by master artisans in Varanasi.</li>
            <li><strong>Occasion:</strong> Perfect for weddings, festivals, and grand events.</li>
            <li><strong>Care:</strong> Dry clean only to preserve the zari work.</li>
        </ul>
    ),

    '3': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>Material:</strong> 3 Premium Silk with authentic Zari weaving.</li>
            <li><strong>Craftsmanship:</strong> Hand-woven by master artisans in Varanasi.</li>
            <li><strong>Occasion:</strong> Perfect for weddings, festivals, and grand events.</li>
            <li><strong>Care:</strong> Dry clean only to preserve the zari work.</li>
        </ul>
    ),

    '4': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>Material:</strong> 4 Premium Silk with authentic Zari weaving.</li>
            <li><strong>Craftsmanship:</strong> Hand-woven by master artisans in Varanasi.</li>
            <li><strong>Occasion:</strong> Perfect for weddings, festivals, and grand events.</li>
            <li><strong>Care:</strong> Dry clean only to preserve the zari work.</li>
        </ul>
    ),

    '5': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>Material:</strong> 5 Premium Silk with authentic Zari weaving.</li>
            <li><strong>Craftsmanship:</strong> Hand-woven by master artisans in Varanasi.</li>
            <li><strong>Occasion:</strong> Perfect for weddings, festivals, and grand events.</li>
            <li><strong>Care:</strong> Dry clean only to preserve the zari work.</li>
        </ul>
    ),

    '6': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>Material:</strong> 6 Premium Silk with authentic Zari weaving.</li>
            <li><strong>Craftsmanship:</strong> Hand-woven by master artisans in Varanasi.</li>
            <li><strong>Occasion:</strong> Perfect for weddings, festivals, and grand events.</li>
            <li><strong>Care:</strong> Dry clean only to preserve the zari work.</li>
        </ul>
    ),
};


// --- Helper Hook to get URL Query Parameters ---
const useQuery = () => {
    // Note: This hook assumes a browser environment where window.location is available.
    return new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
};

const ProductDetailPage = () => {
    const query = useQuery();
     

    // Get the ID and other details from the URL
    const id = query.get('id');
    const heading = query.get('heading') || 'Product Not Found';
    const imageUrl = query.get('image') || 'placeholder.jpg';
    const description = query.get('desc') || 'The details for this product could not be loaded.';

    // ACTION: Look up the rich feature list (React Element) using the ID
    const featuresListElement = productFeaturesMap[id];


    const [imageLoaded, setImageLoaded] = useState(false);

    // Style for the gold accents
     const goldTextStyle = { color: ACCENT_GOLD };

    // Style for the main heading
    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif',
        color: PRIMARY_BLUE,
        textShadow: `1px 1px 2px rgba(0, 0, 0, 0.1)`, 
    };

    return (
        <div className="bg-gray-50 flex flex-col pt-30 pb-12 w-full lg:h-[150vh]">
            {/* --- Product Details Section Container --- */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">

                {/* This wrapper ensures the layout changes from stack (mobile) to side-by-side (lg) */}
                <div className="lg:flex lg:space-x-12">
                    
                    {/* === Left Column: Image (Mobile-First responsive) === */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
                        {/* On mobile, this div is centered and has a max width (md:max-w-md, e.g., 28rem/448px) 
                            to prevent it from stretching too wide on tablet sizes.
                            w-full ensures it takes up available width up to the max-w
                        */}
                        <div 
                            className="w-full h-full shadow-2xl rounded-xl overflow-hidden border-4" 
                            style={{ borderColor: ACCENT_GOLD }}
                        >
                            <div className={`w-full  ${!imageLoaded ? 'animate-pulse bg-gray-200' : ''}`}>
                                <img
                                    src={imageUrl}
                                    alt={heading}
                                    onLoad={() => setImageLoaded(true)}
                                    onError={() => setImageLoaded(false)}
                                    // w-full h-auto and object-contain ensures the image fits perfectly
                                    className={`w-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* === Right Column: Text Details and CTA === */}
                    <div className="lg:w-1/2 p-6 md:p-8 bg-white rounded-xl shadow-2xl border border-gray-100">

                        {/* --- Dynamic Heading --- */}
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 border-b pb-3"
                            style={titleStyle}
                        >
                            {heading}
                        </h1>
                        
                        {/* --- Price/Accent Divider --- */}
                        <div 
                            className="text-xl font-bold py-2 mb-6" 
                            style={goldTextStyle}
                        >
                            Exquisite Handcrafted Design
                        </div>


                        {/* --- Description and Features Block --- */}
                        <div className="space-y-6 text-gray-700 text-lg">
                            <p>
                                <strong style={{ color: PRIMARY_BLUE }}>Product Description:</strong>
                            </p>
                            <p className="leading-relaxed">
                                {description}
                            </p>

                            {/* --- Key Features Block (Conditional Rendering) --- */}
                            {featuresListElement && (
                                <div className='pt-6 border-gray-200'>
                                    <h3 
                                        className="text-2xl font-bold mb-3" 
                                        style={goldTextStyle}
                                    >
                                        Key Features
                                    </h3>
                                    {featuresListElement}
                                </div>
                            )}

                            {/* Fallback if no specific features are found for this ID */}
                            {!featuresListElement && (
                                <p className='italic text-gray-500 pt-4'>
                                    Detailed feature breakdown coming soon for this product.
                                </p>
                            )}
                        </div>

                        <a
                    href="/ContactUs" // Set your destination URL here
                    target="_blank" // This ensures the link opens in a new tab
                    rel="noopener noreferrer" // Security best practice for target="_blank"
                    className={`
    mt-8 pt-4 block mx-auto border-t border-gray-200 
    text-[#1b2e4e] font-semibold py-2 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-10 
    rounded-full shadow-xl uppercase tracking-wider transition duration-300 ease-in-out 
    bg-[#cfa866] hover:scale-105 transform active:scale-95 border-2 border-transparent hover:border-white
    focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
    inline-flex items-center justify-center
`}
                     
                    aria-label="Shop our new Zari collection now"
                >
                 Place Order
                </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;