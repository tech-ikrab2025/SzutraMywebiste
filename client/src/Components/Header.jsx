import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react'; 

// --- Configuration ---
// !!! IMPORTANT: REPLACE WITH YOUR ACTUAL PHONE NUMBER !!!
const PHONE_NUMBER = '+911234567890';
const CALL_TO_ACTION_LINK = `tel:${PHONE_NUMBER.replace(/[^0-9+]/g, '')}`; // Format for tel: link

// Define the menu links with the correct 'href' and 'target' properties.
const navLinks = [
    { name: 'Home', href: '/', target: '_self' },
    { name: 'Gallery', href: '/GalleryFull', target: '_self' },
    { name: 'Contact Us', href: '/ContactUs', target: '_self' },
    { name: 'About Us', href: '/AboutUs', target: '_self' },
    { name: 'Privacy Policy', href: '/PrivacyPolicy', target: '_self' },
];

// Define the style object for the navigation text
const navLinkStyle = {
    fontFamily: 'Playfair Display, Georgia, serif',
};
// ---------------------

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    // 1. Create a ref to attach to the header element
    const menuRef = useRef(null); 

    // Define the golden color for consistency
    const GOLD_COLOR = '#cfa866';
    const LIGHT_CREAM = '#fcfaf7';

    // Get the current URL path to determine the active link
    // Fallback logic for environments where window is undefined
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

    // Function to determine if a link should be highlighted
    const isActive = (href) => {
        const normalizedCurrentPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
        const normalizedHref = href.startsWith('/') ? href : `/${href}`;

        if (normalizedHref === '/' && normalizedCurrentPath === '/') {
            return true;
        }

        return normalizedCurrentPath === normalizedHref || (normalizedHref !== '/' && normalizedCurrentPath.startsWith(normalizedHref));
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // 2. useEffect for handling click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click occurred outside the menu reference
            // AND ensure the menu is actually open before closing
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Attach event listener only when the menu is open
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            // Cleanup function to remove the event listener
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [isOpen]); // Rerun effect whenever the menu state changes

    return (
        // 3. Attach the ref to the root header element
        <header 
            ref={menuRef}
            className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 rounded-b-lg shadow-xl"
        >
            <div className="mx-auto px-4 lg:pl-12 lg:pr-8">
                <div className="flex justify-between items-center h-24 lg:h-20 relative">

                    {/* 1. Left: Logo/Brand Name */}
                    <div className="flex-shrink-0 flex items-center h-full z-20">
                        <a href="/" className="block h-full w-auto py-2">
                            <img
                                className="h-full w-auto rounded-md max-h-full lg:max-h-16" 
                                src="/SzutraLogo_1.webp"
                                alt="Szutra Brand Logo"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x40/cfa866/ffffff?text=SZUTRA" }}
                            />
                        </a>
                    </div>

                    {/* 2. Center: Desktop Navigation Links (Absolute Center) */}
                    <div className="hidden lg:flex absolute inset-x-0 h-full items-center justify-center pointer-events-none z-10">
                        <nav className="flex space-x-8 h-full items-center pointer-events-auto">
                            {navLinks.map((link) => {
                                const active = isActive(link.href);

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target={link.target}
                                        rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                        // --- FONT STYLE APPLIED HERE (Desktop) ---
                                        style={navLinkStyle} 
                                        className={`
                                            transition duration-200 ease-in-out font-medium uppercase text-sm
                                            py-1 border-b-2
                                            ${active
                                                ? `text-[${GOLD_COLOR}] border-[${GOLD_COLOR}] font-bold` // Active State: Golden color
                                                : `text-gray-600 border-transparent hover:text-[${GOLD_COLOR}] hover:border-[${GOLD_COLOR}]` // Hover State: Golden color
                                            }
                                        `}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </nav>
                    </div>

                    {/* 3. Right: Call Button & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-2 lg:space-x-4 h-full z-20">

                        {/* Desktop Call Button (Visible lg and up) */}
                        <a
                            href={CALL_TO_ACTION_LINK}
                            target="_self"
                            className={`
                                hidden lg:inline-flex items-center px-4 py-2 text-sm font-bold uppercase rounded-full shadow-lg transition
                                bg-[${GOLD_COLOR}] text-white hover:bg-opacity-90 transform hover:scale-[1.03]
                                ring-2 ring-offset-2 ring-[${GOLD_COLOR}]
                            `}
                            aria-label="Call Now"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                        </a>

                        {/* Mobile Menu Button (Always visible on small screens) */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className={`inline-flex items-center justify-center p-2 rounded-md transition
                                    ${isOpen ? `text-gray-900 bg-[${LIGHT_CREAM}]` : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}
                                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[${GOLD_COLOR}]`}
                                aria-expanded={isOpen}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel - Shown on screens < lg */}
            <div className={`lg:hidden bg-white shadow-xl transition-all duration-300 ease-in-out
                ${isOpen ? 'max-h-screen opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                    {/* Mobile Call Now Button (Placed at the top of the mobile menu) */}
                    <a
                        href={CALL_TO_ACTION_LINK}
                        target="_self"
                        className={`
                            flex items-center justify-center w-full px-3 py-3 mb-2 rounded-lg text-base font-bold uppercase transition duration-150 ease-in-out
                            bg-[${GOLD_COLOR}] text-white shadow-md hover:bg-opacity-90
                        `}
                        onClick={() => setIsOpen(false)}
                        aria-label="Call Now"
                    >
                        <Phone className="w-5 h-5 mr-3" />
                        Call Now: {PHONE_NUMBER}
                    </a>
                    <div className="border-t border-gray-100 my-2" aria-hidden="true"></div>

                    {/* Existing Nav Links */}
                    {navLinks.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.target}
                                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                // --- FONT STYLE APPLIED HERE (Mobile) ---
                                style={navLinkStyle}
                                className={`block px-3 py-3 rounded-lg text-base font-semibold transition duration-150 ease-in-out
                    
                                    ${active
                                        ? `text-white bg-[${GOLD_COLOR}] shadow-md` // Active: White text on solid gold background
                                        : `text-gray-800 hover:text-[${GOLD_COLOR}] hover:bg-[${LIGHT_CREAM}]` // Hover: Gold text on light cream background
                                    }
                                `}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            </div>
        </header>
    );
};

export default Header;