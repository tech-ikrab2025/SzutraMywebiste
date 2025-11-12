import React, { useState } from 'react';

// --- Color Constants (Re-used for consistency) ---
const ACCENT_GOLD = '#cfa866'; // A richer, elegant gold
const PRIMARY_BLUE = '#1b2e4e'; // A deep, elegant navy blue

const productFeaturesMap = {
    // Product ID 1 Features
     '1': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong> A centuries-old, elaborate Persian form of metal embroidery (meaning "gold work") that uses various metallic threads (Zari) to create a heavily embellished surface design.</li>
            <li><strong>Key Feature:</strong> Characterized by its opulence and three-dimensional, raised effect. It is traditionally done by stitching real gold and silver wires/threads onto heavy silk, velvet, or brocade fabric, making the fabric stiff and weighty.</li>
            <li><strong>Occasion:</strong>Historically patronized by royalty (Mughal emperors), it is essential for bridal wear, high-end fashion, ceremonial robes, and luxurious tapestries.</li>
            <li><strong>Motifs:</strong> Features detailed motifs like peacocks, floral vines (Buti and Jaal), hunting scenes, and traditional Mughal architectural designs.</li>
        </ul>
    ),
    // Product ID 2 Features
    '2': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong> A traditional Indian needlework technique using a specialized, long, hooked needle (the Aari or Tambour needle) to create embroidery by forming fine, quick chain stitches.</li>
            <li><strong>Key Feature:</strong> The continuous, fine chain stitch texture and the speed with which intricate designs can be created. It serves as a versatile foundation for adding rich embellishments like beads, sequins, and metallic Zari or Zardozi threads.</li>
            <li><strong>Occasion:</strong> Highly popular for bridal wear (especially blouses, lehengas, and shawls), as well as elaborate ethnic and fusion garments for festivals and grand celebrations.</li>
            <li><strong>Motifs:</strong>Features delicate designs like floral vines (Jaal), peacocks, paisleys, and traditional Mughal and geometric patterns.</li>
        </ul>
    ),

    '3': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong> A specific, detailed form of embroidery (part of Zari/Zardozi) that uses coiled, thin metal wire (often gold or silver-colored) which looks like a tiny spring.</li>
            <li><strong>Key Feature:</strong> The coiled wire is stitched onto the fabric by passing the needle through its center, giving the embroidery a raised, 3D (three-dimensional) texture.</li>
            <li><strong>Occasion:</strong> Perfect for weddings, festivals, and grand events.</li>
            <li><strong>Motifs:</strong> It's known for creating both delicate floral patterns and bold geometric designs.</li>
        </ul>
    ),

    '4': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong> The art of attaching tiny decorative elements—most commonly glass beads (seed beads, bugle beads, cut beads) or pearls—to the surface of a fabric using a needle and thread.</li>
            <li><strong>Key Feature:</strong> Creates a dense, shimmering, and often heavy, textural surface by completely or partially covering the base fabric with beads. It is frequently combined with other techniques like Aari (Tambour) or Zardozi to add dimension and sparkle.</li>
            <li><strong>Occasion:</strong> Highly prevalent in Haute Couture and bridal fashion (lehengas, gowns, veils) for its opulent effect, as well as in traditional Indian accessories like torans (door hangings) and deity attire.</li>
            <li><strong>Motifs:</strong> Includes both delicate floral patterns (vines, butis) and intricate geometric and paisley designs, with traditional tribal beadwork (like Motibharat in Gujarat) focusing on abstract and natural surroundings (phulki, hayedi).</li>
        </ul>
    ),

    '5': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong> A needlework technique (punto tagliato in Italian) where portions of the base fabric are cut away and the resulting openings (holes) are reinforced and decorated with embroidery stitches.</li>
            <li><strong>Key Feature:</strong> Cutwork is defined by the negative space that creates a lace-like, semi-sheer effect. The cut edges are finished with dense stitches (like buttonhole or satin stitch) and often joined by embroidered bars or bridges across the gaps.</li>
            <li><strong>Occasion:</strong> Primarily used for heirloom linens (tablecloths, napkins), bridal wear, elegant home furnishings (curtains), and high-end formal wear for a sophisticated, classic look.</li>
            <li><strong>Motifs:</strong> Most commonly features floral and vine patterns, geometric shapes, or repeating eyelets (a form of cutwork known as Broderie Anglaise).</li>
        </ul>
    ),

    '6': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong> A decorative technique involving the application of small, reflective, disc-shaped ornaments (sequins or sitara) onto fabric to create sparkle and texture.</li>
            <li><strong>Key Feature:</strong> Known for its highly reflective and shimmering surface that catches the light dramatically. Sequins can be flat, cupped, faceted, or holographic and are usually stitched individually or in overlapping rows to cover large areas.</li>
            <li><strong>Occasion:</strong> Essential for party wear, evening gowns, dance costumes, Bollywood-style fashion, and festive occasion wear where high glamour and visibility are desired.</li>
            <li><strong>Motifs:</strong> Often used to create dense geometric patterns, large-scale abstract designs, or to fill in elements of a pattern like petals or leaves that require maximum flash and shine.</li>
        </ul>
    ),

    '7': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong> A broad term for any decorative needlework that uses strands of non-metallic fiber (like cotton, silk, or wool) to create surface designs on a fabric base. It is the foundation of most traditional embroidery arts.</li>
            <li><strong>Key Feature:</strong> Focuses on the texture, color, and density of stitches (e.g., Running Stitch, Satin Stitch, Chain Stitch) rather than on heavy embellishments or cut fabric. Styles range from the fine, delicate finish of Chikankari to the rich, geometric darning of Phulkari.</li>
            <li><strong>Occasion:</strong> Versatile for daily wear (e.g., light Chikankari kurtas), formal/festival attire (e.g., Resham work on silks), and home textiles (e.g., Kantha bedspreads).</li>
            <li><strong>Motifs:</strong> Motifs depend heavily on the regional style but commonly include intricate florals and vines, geometric patterns, or stylized representations of nature (birds, leaves, water bodies).</li>
        </ul>
    ),
    '8': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong>A traditional form of embroidery, also known as Shisha or Abhla Bharat (in Gujarat/Rajasthan), where small, reflective pieces of glass or metal are stitched onto fabric using intricate decorative threads.</li>
            <li><strong>Key Feature:</strong> Mirror work's key feature is the dazzling, light-reflecting surface created by securing small mirrors (glass or acrylic) to the fabric using intricate framework stitches (Buttonhole or Chain Stitch), which are the main decorative element.</li>
            <li><strong>Occasion:</strong>Mirror work is popular for festive clothing (like Chaniya Cholis for Navratri), folk costumes, and everyday wear, primarily in Gujarat and Rajasthan, where it is traditionally believed to ward off the evil eye.</li>
            <li><strong>Motifs:</strong> Features bold, bright colors and geometric patterns (circles, squares, diamonds) surrounding the mirrors, often mixed with traditional Kutchi embroidery styles of floral vines, peacocks, and animals.</li>
        </ul>
    ),
    '9': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong> A highly opulent embellishment technique where various types of rhinestones, crystals, glass beads, or semi-precious stones are attached to the fabric using either needle-and-thread embroidery or strong adhesive.</li>
            <li><strong>Key Feature:</strong> Known for its dramatic sparkle, weight, and luxurious appeal, as the stones catch and reflect light. It often creates a rich, three-dimensional surface, frequently used in combination with Zari (metallic thread) and other types of beadwork to add depth.</li>
            <li><strong>Occasion:</strong>The cornerstone of high-end bridal wear (Lehengas, Sarees, Gowns), evening wear, and red carpet fashion where a striking, glamorous statement is desired.</li>
            <li><strong>Motifs:</strong> Stones are often used to highlight and fill in intricate traditional motifs like floral arrangements and vines, or to form geometric clusters and bold, glittering borders.</li>
        </ul>
    ),
    '10': (
        <ul className="list-disc list-inside space-y-2 pl-4 text-base text-gray-700">
            <li><strong>What it is:</strong> A traditional form of appliqué embroidery originating in Rajasthan, India, where small pieces of woven metallic ribbon (Gota) are cut into shapes and sewn onto the base fabric.</li>
            <li><strong>Key Feature:</strong> Creates bright, shimmering metallic patterns (gold, silver, or copper color) that are lightweight to wear compared to Zardozi. The ribbon pieces (patti or leaves) are folded and stitched down along their edges to form the motifs.</li>
            <li><strong>Occasion:</strong> Highly auspicious and popular for South Asian wedding attire (Lehengas, Sarees, Dupattas, Turbans), major festivals like Diwali and Teej, and other celebratory occasions (shagan).</li>
            <li><strong>Motifs:</strong> Inspired by nature, common motifs include leaves (patti), flowers (phool), peacocks, paisleys (keri), and various other geometric and floral patterns stitched together to form intricate jaals (nets).</li>
        </ul>
    ),
};





// --- Helper Hook to get URL Query Parameters ---
const useQuery = () => {
    // Note: Use 'typeof window !== 'undefined' for Next.js/SSR compatibility
    return new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
};

const ProductDetailPage = () => {
    const query = useQuery();

    // Get the ID and other details from the URL
    const id = query.get('id');
    const heading = query.get('heading') || 'Product Not Found';
    // Using a fallback image/URL that is more likely to exist than 'placeholder.jpg'
    const imageUrl = query.get('image') || 'https://via.placeholder.com/600x800?text=Image+Missing'; 
    const description = query.get('desc') || 'The details for this product could not be loaded. Please check the product ID.';

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
        // Added pt-20 to ensure content is below a fixed navigation bar if present
        <div className="bg-gray-50 flex flex-col pt-20 pb-12 w-full min-h-screen">
            {/* --- Product Details Section Container --- */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">

                {/* This wrapper ensures the layout changes from stack (mobile) to side-by-side (lg) */}
                <div className="lg:flex lg:space-x-12">

                    {/* === Left Column: Image (Mobile-First responsive) === */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:sticky lg:top-24 lg:h-fit">
                        {/* The container uses aspect ratio on small screens to maintain shape */}
                        <div
                            className="w-full max-w-lg shadow-2xl rounded-xl overflow-hidden border-4 aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto"
                            style={{ borderColor: ACCENT_GOLD, height: 'auto' }}
                        >
                            <div className={`w-full h-full ${!imageLoaded ? 'animate-pulse bg-gray-200' : ''}`}>
                                <img
                                    src={imageUrl}
                                    alt={heading}
                                    onLoad={() => setImageLoaded(true)}
                                    onError={() => setImageLoaded(false)}
                                    // object-cover is better for product images to fill space, use object-contain only if aspect ratio preservation is critical
                                    className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
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

                        {/* --- Accent Divider --- */}
                        <div
                            className="text-xl font-bold py-2 mb-6 tracking-wide"
                            style={goldTextStyle}
                        >
                            Exquisite Handcrafted Design
                        </div>
                        {/* --- Description and Features Block --- */}
                        <div className="space-y-6 text-gray-700 text-lg">
                            <p>
                                <strong style={{ color: PRIMARY_BLUE }}>Product Description:</strong>
                            </p>
                            <p className="leading-relaxed whitespace-pre-line">
                                {description}
                            </p>

                            {/* --- Key Features Block (Conditional Rendering) --- */}
                            {featuresListElement && (
                                <div className='pt-6 border-t border-gray-200'>
                                    <h3
                                        className="text-2xl font-bold mb-3 mt-4"
                                        style={goldTextStyle}
                                    >
                                        Key Features
                                    </h3>
                                    {featuresListElement}
                                </div>
                            )}

                            {/* Fallback if no specific features are found for this ID */}
                            {!featuresListElement && (
                                <p className='italic text-gray-500 pt-4 border-t border-gray-200'>
                                    Detailed feature breakdown coming soon for this product.
                                </p>
                            )}
                        </div>

                        <a
                            href="/ContactUs" // Set your destination URL here
                            target="_blank" // This ensures the link opens in a new tab
                            rel="noopener noreferrer" // Security best practice for target="_blank"
                            className={`
                                mt-8 
                                inline-flex items-center justify-center 
                                w-full sm:w-auto // Full width on mobile, auto width on desktop
                                bg-[#cfa866] text-[#1b2e4e] 
                                font-semibold uppercase tracking-wider 
                                rounded-full shadow-xl 
                                transition duration-300 ease-in-out 
                                hover:scale-[1.02] transform active:scale-[0.98] 
                                px-10 py-4 // Larger padding for a strong CTA
                                focus:outline-none focus:ring-4 focus:ring-[#cfa866] focus:ring-opacity-50
                            `}
                            aria-label="Place Order or Inquire About the Product"
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