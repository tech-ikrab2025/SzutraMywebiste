import React from 'react';

// Re-using the color constants from your other component for consistency
const ACCENT_GOLD = '#cfa866';
const PRIMARY_BLUE = '#1b2e4e';

// Example product data (kept the same)
const products = [
    {
        id: 1,
        src: "/Zardosi/Zardosi-1.png",
        alt: 'Zardosi',
        richDescription: 'Royal metallic thread embroidery with rich detail',
    },
    {
        id: 2,
        src: "/aari work/aari work-1.png",
        alt: 'Aari ',
        richDescription: 'Fine hand chain-stitch art done with hooked needle',
    },
    {
        id: 3,
        src: "/Dabka work/Dabka-1.png",
        alt: 'Dabka',
        richDescription: 'Coiled wire embroidery adding depth and shine',
    },
    {
        id: 4,
        src: '/Beadwork/Beadwork-1.png',
        alt: 'Beads',
        richDescription: 'Hand-stitched beads for sparkle and texture',
    },
    // ... (rest of your product data)
    {
        id: 6,
        src: '/Cutwork/Cutwork-1.png',
        alt: 'Cutwork',
        richDescription: 'Elegant open-pattern design crafted by hand',
    },

    {
        id: 7,
        src: '/Sequins work/Sequins work-1.png',
        alt: 'Sequins',
        richDescription: 'Shimmering sequins that bring fabric to life',
    },

    {
        id: 8,
        src: '/thread work/thread work-1.png',
        alt: 'Thread Work ',
        richDescription: 'Colorful silk threads create elegant patterns ',
    },

    {
        id: 9,
        src: '/Mirror work/Mirror work-1.png',
        alt: 'Mirror Work ',
        richDescription: 'Tiny mirrors stitched for festive sparkle',
    },

    {
        id: 10,
        src: '/Stone Work/Stone Wrok-1.png',
        alt: 'Stone Work ',
        richDescription: 'Shiny stones add luxury and brilliance',
    },
    {
        id: 11,
        src: '/Gota Patti Work/Gota Patti Work-1.png',
        alt: 'Gota Patti Work  ',
        richDescription: 'Gold ribbons stitched for royal charm',
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
                                        href={`/product-details?id=${product.id}&heading=${encodeURIComponent(product.alt)}&image=${encodeURIComponent(product.src)}&desc=${encodeURIComponent(product.richDescription)}`}
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