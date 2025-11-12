import React from 'react';

// Re-using the color constants from your other component for consistency
const ACCENT_GOLD = '#cfa866';
const PRIMARY_BLUE = '#1b2e4e';

// Example product data (kept the same)
const products = [
    {
        id: 1,
        src: "/Zardosi/Zardosi-1.webp",
        alt: 'Zardosi',
        richDescription: 'Royal metallic thread embroidery with rich detail',
        productDetails: 'Zardozi is an opulent, centuries-old Persian embroidery technique meaning "gold work," which flourished under the Mughal Empire. It is characterized by its heavy, three-dimensional texture, achieved by sewing metallic threads (Zari, traditionally gold or silver, now often gilded wire) and embellishments like beads and stones onto a sturdy base fabric like velvet or silk. The work is typically done on a large wooden frame (Adda) using an Aari (hooked needle). Today, Zardozi symbolizes luxury and is primarily used for grand ceremonial and bridal attire, featuring intricate floral and Mughal-inspired motifs.',
    },
    {
        id: 2,
        src: "/aari work/aari work-1.webp",
        alt: 'Aari ',
        richDescription: 'Fine hand chain-stitch art done with hooked needle',
        productDetails:'Aari Work is a revered Indian embroidery form distinguished by its use of a specialized, long, fine, hooked needle, also known as an Aari or tambour needle. The technique involves creating continuous, intricate loops to form a dense chain stitch texture, giving the finished product a smooth, neat appearance often mistaken for machine embroidery. Highly versatile, Aari work is valued for the speed and precision with which it secures small beads, sequins, and metallic Zari wires to the fabric. It is foundational to many Indian embroideries and is widely used across the subcontinent, especially in Kashmir, for bridal and festive attire, featuring delicate floral vines and geometric patterns.',
    },
    {
        id: 3,
        src: "/Dabka work/Dabka-1.webp",
        alt: 'Dabka',
        richDescription: 'Coiled wire embroidery adding depth and shine',
        productDetails:'Dabka Work is an elaborate form of metallic embroidery, categorized under Zardozi, that uses a thin, tightly coiled metallic wire called Dabka. The key feature is the wire being cut and stitched through its hollow center, which creates a prominent raised, three-dimensional texture on the fabric surface. It is used on luxurious fabrics for bridal and formal wear to create opulent, shimmering, floral, and geometric motifs.',
    },
    {
        id: 4,
        src: '/Beadwork/Beadwork-1.webp',
        alt: 'Beads',
        richDescription: 'Hand-stitched beads for sparkle and texture',
        productDetails:'Beadwork involves meticulously stitching various beads (like seed beads, bugle beads, and pearls) onto fabric to create decorative, textured patterns. The technique is valued for adding weight, dimension, and intense sparkle to garments, ranging from delicate outlining to complete fabric coverage for a dramatic effect. Due to its versatility, Beadwork is frequently combined with other embroideries, such as Zardozi or Aari, making it an essential feature in high-fashion couture and traditional bridal attire.',
    },
    {
        id: 5,
        src: '/Cutwork/Cutwork-1.webp',
        alt: 'Cutwork',
        richDescription: 'Elegant open-pattern design crafted by hand',
        productDetails:'Cutwork involves a two-step process: first, outlining design areas with dense embroidery (usually buttonhole or satin stitch), and second, carefully cutting out the fabric within these outlines to expose the underlying surface. This meticulous technique creates intricate, framed voids, giving the textile a structured, lace-like appearance through the contrast of solid fabric and open space. It is often employed to create elaborate floral and geometric designs on fine materials, adding a classic, handcrafted sense of luxury to items ranging from formal clothing to high-quality household linens.',
    },

    {
        id: 6,
        src: '/Sequins work/Sequins work-1.webp',
        alt: 'Sequins',
        richDescription: 'Shimmering sequins that bring fabric to life',
        productDetails:'Sequins work is a dynamic embroidery technique that involves the strategic application of tiny, lightweight, reflective discs—made from materials like plastic or metal—to the textile surface. These discs, often referred to as sitara, can be cupped, flat, or faceted to enhance their light-reflecting quality. The sequins are secured to the fabric using a needle and thread, often in fast, efficient methods like the Aari (Tambour) technique, or sewn down meticulously one-by-one. It is widely used in high-glamour fashion, including dance costumes, evening wear, and bridal accents, due to its ability to create a dense, glittering texture and dramatic, highly visible patterns.',
    },

    {
        id: 7,
        src: '/thread work/thread work-1.webp',
        alt: 'Thread Work ',
        richDescription: 'Colorful silk threads create elegant patterns ',
        productDetails:'Thread work is the foundation of most embroidery, utilizing non-metallic threads (like silk or cotton) to create designs. The technique relies entirely on the mastery of various stitches to achieve texture, shading, and dimension (e.g., satin stitch, crewel work). Celebrated for its versatility and comfort, thread work allows for intricate, colorful motifs on everything from cotton kurtas to luxurious silk sarees, emphasizing pure fiber manipulation.',
    },

    {
        id: 8,
        src: '/Mirror work/Mirror work-1.webp',
        alt: 'Mirror Work ',
        richDescription: 'Tiny mirrors stitched for festive sparkle',
        productDetails: 'Mirror work (Shisha) is a vibrant Indian embroidery, mainly from Gujarat and Rajasthan, that involves securing small, reflective mirrors onto fabric with intricate framework stitches. The key feature is the light-reflecting sparkle and it is widely used for festive clothing (like Chaniya Cholis), folk costumes, and home décor, often believed to ward off the evil eye.',
    },

    {
        id: 9,
        src: '/Stone Work/Stone Wrok-1.webp',
        alt: 'Stone Work ',
        richDescription: 'Shiny stones add luxury and brilliance',
        productDetails:'Stone Work is an opulent embellishment technique where various types of rhinestones, crystals, glass gems, or semi-precious stones are attached to fabric, either by secure embroidery stitches or strong adhesive. The defining feature is the creation of a dramatic, glittering, and weighted texture due to the intense sparkle and density of the stones. It is highly favored in high-end bridal wear, evening gowns, and couture fashion to create luxurious, highly reflective designs, often in combination with Zardozi or beadwork.',
    },
    {
        id: 10,
        src: '/Gota Patti Work/Gota Patti Work-1.webp',
        alt: 'Gota Patti Work  ',
        richDescription: 'Gold ribbons stitched for royal charm',
        productDetails:'Gota Patti Work is a unique Indian appliqué technique from Rajasthan that involves folding and cutting pieces of woven metallic ribbon (Gota) into shapes like leaves (patti) and flowers. These pieces are stitched onto fabric, creating a dense but remarkably lightweight metallic surface. Unlike heavy Zardozi, Gota Patti provides high visual sparkle, making it a favorite for bridal wear and festive attire across the subcontinent.',
    },
];

const HomeGallerySection = () => {

    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif',
        textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };
    
    // Calculate the total width of the content (11 items * 288px width + 10 spaces * 24px gap)
    // We remove the explicit minWidth *style* from the component
    // as we'll rely on the flex container and overflow-x-auto/scroll to handle the width.

    // --- 1. Custom CSS Styles for Marquee Animation ---
    // IMPORTANT: We change the animation to only apply to the *content* inside the scrollable wrapper.
    // We are changing the target of the scrolling effect.
    const marqueeStyles = `
        /* Hide scrollbar, useful when overflow-x-auto is applied */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Define the scrolling keyframes */
        /* This animation is now moving the content to simulate scroll */
        @keyframes scroll-x {
            0% {
                /* Start with no offset */
                transform: translateX(0%);
            }
            100% {
                /* Scroll a distance equal to the total width of the content minus the container width. 
                   The value 'calc(-100% + 100vw)' is generally for a full marquee.
                   For a scroll-view, you typically use a specific pixel value or a large percentage based on content duplication.
                   
                   A simpler approach for one-directional movement is to just move it off-screen,
                   but since you want the original content to scroll *back* smoothly, we'll keep the alternate keyframes.
                   
                   To combine auto-scroll AND manual scroll, it's better to remove the auto-scroll completely
                   and use an alternative method, or stick to the scroll-snap. 
                   
                   ***However, to maintain the requested combination, let's keep the existing marquee but only apply it to the content, and rely on the user's manual scroll to be the primary interaction.***

                   For a true "auto-scroll + manual scroll" experience, where the user can interrupt the auto-scroll,
                   we must switch the implementation.

                   --- NEW STRATEGY: Use JavaScript for auto-scroll that can be manually overridden. ---
                */
               /* Keeping the existing keyframes for now, but will make the JS solution cleaner */
                transform: translateX(calc(-100% + 100vw)); 
            }
        }
        
        /* Apply the animation class */
        .auto-scroll {
            /* Keep the animation applied to the flex container for the time being */
            animation: scroll-x 90s linear infinite alternate; 
        }
        
        /* Pause the scrolling animation on hover */
        .auto-scroll:hover {
            animation-play-state: paused;
        }
    `;
    // --------------------------------------------------

    /* *** Implementation Note: ***
    CSS-based animations like `transform: translateX()` fight directly with scroll events
    (manual scrolling changes the scroll position, the animation changes the element's position).
    
    The **simplest working solution** that supports both is to **remove the CSS animation** and **re-enable the native browser scroll** with `overflow-x-auto`. 
    
    Then, you'll implement the auto-scroll logic using **React's `useEffect` and `setInterval/requestAnimationFrame`** to gently manipulate the `scrollLeft` property. This way, the user's manual scroll *naturally* overrides the automatic scroll.
    
    Let's refactor to use a JS-based auto-scroll for control.
    */

    const carouselRef = React.useRef(null);
    const [isHovering, setIsHovering] = React.useState(false);

    React.useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let scrollInterval;
        let direction = 1; // 1 for right, -1 for left
        const scrollStep = 1; // Pixels to scroll per interval

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                if (isHovering) return; // Pause on hover check

                const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

                if (direction === 1) {
                    carousel.scrollLeft += scrollStep;
                    if (carousel.scrollLeft >= maxScrollLeft) {
                        // Change direction at the end
                        direction = -1;
                    }
                } else if (direction === -1) {
                    carousel.scrollLeft -= scrollStep;
                    if (carousel.scrollLeft <= 0) {
                        // Change direction at the beginning
                        direction = 1;
                    }
                }
            }, 30); // Scroll speed: lower value = faster scroll
        };

        startScrolling();

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(scrollInterval);
    }, [isHovering]); // Re-run effect if isHovering state changes

    // Remove CSS for auto-scroll, keep only the scrollbar-hide part
    const scrollbarStyles = `
        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    `;

    return (
        <div className="relative">
            {/* Embed the scrollbar hide custom CSS styles */}
            <style>{scrollbarStyles}</style>

            <section id="home-gallery" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-4xl md:text-7xl font-extrabold text-center mb-3"
                        style={titleStyle}
                    >
                        Our Exclusive Collection
                    </h2>
                    <div
                        className="w-24 h-[6px] mb-6 mx-auto"
                        style={{ backgroundColor: ACCENT_GOLD }}
                    ></div>
                    <p
                        className="text-center text-lg md:text-2xl text-gray-800 mx-auto mb-8"
                    >
                        Discover the artistry of Zari through our curated selection of masterpieces.
                    </p>

                    {/* === Carousel Wrapper - Modified for JS Auto-Scroll === */}
                    <div className="relative">
                        <div
                            ref={carouselRef} // Attach ref for JS control
                            className={`flex pb-6 space-x-6 px-4 overflow-x-auto scrollbar-hide`} // Key change: Added 'overflow-x-auto'
                            onMouseEnter={() => setIsHovering(true)} // Set state for pause
                            onMouseLeave={() => setIsHovering(false)} // Resume scroll
                            // The custom 'carouselContentWidth' style is removed, as 'overflow-x-auto' handles the container size naturally
                        >
                            {products.map(product => (
                                <div
                                    key={product.id}
                                    className="flex-none w-72 snap-center rounded-lg shadow-xl bg-white overflow-hidden transition-transform duration-300 hover:scale-105"
                                >
                                    <a
                                        href={`/product-details?id=${product.id}&heading=${encodeURIComponent(product.alt)}&image=${encodeURIComponent(product.src)}&desc=${encodeURIComponent(product.productDetails)}`}
                                        target="_blank"
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

                                            {/* View Product Button */}
                                            <div className="mt-auto text-right">
                                                <span
                                                    className={`
                                                        text-gray-800 font-semibold py-3 px-10 rounded-full shadow-xl
                                                        uppercase tracking-wider transition duration-300 ease-in-out
                                                        hover:scale-105 transform active:scale-95 border-2 border-transparent hover:border-white
                                                        focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
                                                        inline-flex items-center justify-center
                                                    `}
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
                </div>
            </section>
        </div>
    );
};

export { HomeGallerySection };