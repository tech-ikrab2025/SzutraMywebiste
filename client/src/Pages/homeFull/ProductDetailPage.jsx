import React, { useEffect, useState } from 'react';

// Re-using the color constants for consistency
const ACCENT_GOLD = '#cfa866';
const PRIMARY_BLUE = '#1b2e4e';

// 🌟 IMPORTANT: Data containing the rich feature lists (React Elements) mapped to product IDs
// This is the source of your unique, list-based features.
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
    // Add more features here for product IDs 3, 4, 5, 6, etc.
};


// --- Helper Hook to get URL Query Parameters ---
const useQuery = () => {
    return new URLSearchParams(window.location.search);
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
        fontFamily: 'Cinzel Decorative, serif',
        textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
        color: PRIMARY_BLUE,
    };
    const ParagraphStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
    };
    return (
        <div className="min-h-screen pt-30 bg-gray-50 flex flex-col pt-16 pb-12">
            {/* --- Product Details Section --- */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">

                <div className="lg:flex lg:space-x-12">
                    {/* === Left Column: Image === */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0 shadow-2xl rounded-lg overflow-hidden border-4" style={{ borderColor: ACCENT_GOLD }}>
                        <div className={`h-96 sm:h-[500px] lg:h-auto lg:aspect-square bg-[#cfa866] ${!imageLoaded ? 'animate-pulse' : ''}`}>
                            <img
                                src={imageUrl}
                                alt={heading}
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageLoaded(false)}
                                className={`w-full h-full object-contain transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>
                    </div>

                    {/* === Right Column: Text Details === */}
                    <div className="lg:w-1/2 p-4 sm:p-6 bg-white rounded-lg shadow-xl">

                        {/* --- Dynamic Heading --- */}
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 border-b pb-3"
                            style={titleStyle}
                        >
                            {heading}
                        </h1>

                        {/* --- Description Block --- */}
                        <div className="space-y-6 text-gray-700 mt-6 text-lg" style={ParagraphStyle}>
                            <p>
                                <strong style={{ color: PRIMARY_BLUE }}>Product Description:</strong>
                            </p>
                            <p>
                                {description}
                            </p>

                            {/* --- Key Features Block (Conditional Rendering) --- */}
                            {featuresListElement && (
                                <div className='pt-4'>
                                    <h3 className="text-2xl font-semibold pt-2" style={goldTextStyle}>
                                        Key Features
                                    </h3>
                                    {/* Renders the unique, list-based feature element */}
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;