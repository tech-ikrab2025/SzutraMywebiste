import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Link } from 'lucide-react'; // Using Lucide for icons

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ACCENT_GOLD = "#cfa866";
  const DARK_PRIMARY = "#1b2e4e"; 
  const black = "#121212"// Dark color for the bottom bar
   const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        backgroundColor: ACCENT_GOLD,
        textolor: black,
    };
    const ParagraphStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        //textShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
    };

  // Consolidated links based on the user's provided structure
  const navigationData = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Contact", href: "/ContactUs" },
    { name: "Privacy Policy", href: "/PrivacyPolicy" },
    { name: "Terms & Condition", href: "/TermsAndConditions" },
  ];
  
  // Placeholder contact information
  const contactDetails = [
    { icon: <MapPin size={16} />, text: "364, Shantipally, Rajdanga, Kasba, South 24 Parganas, Kolkata-700107 West Bengal, India.", href: "https://www.google.com/maps/search/364,+Shantipally,+Rajdanga,+Kasba,+South+24+Parganas,+Kolkata-700107+West+Bengal,+India./@22.5139614,88.3884803,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D", target: '_blank' },
    { icon: <Phone size={16} />, text: "+91 801608201", href: "tel:+91801608201" },
    { icon: <Mail size={16} />, text: "business@szutra.com", href: "mailto:business@szutra.com" },
  ];

  return (
    <footer className="bg-[#f8f8f5] text-[#1d1d1d] shadow-2xl mt-16 "  >
      {/* Top section: Brand Info, Links, and Contact */}
      <div className="max-w-7xl mx-auto pt-6 pb-10 px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8">
        
        {/* Column 1: Brand Focus (Takes 3/12 columns on large screens) */}
        <div className="md:col-span-2 lg:col-span-3 space-y-4">
          <a href="/" className="block h-1px w-2px py-2"> 
              <img
                className="h-1px w-2px rounded-md "
                src="/SzutraLogo_1.webp"
                alt="Szutra Brand Logo"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x40/cfa866/ffffff?text=SZUTRA" }}
              />
            </a>
          <p className="text-sm text-[#1d1d1d] opacity-80 max-w-xs">
            Curators of bespoke zari luxury, supplying the world's finest fashion houses with hand-woven heritage.
          </p>

          {/* Social Icons - Placed here for a clean look */}
          <div className="flex space-x-4 pt-4">
            <a href="#" aria-label="Facebook" className="text-[#1d1d1d] hover:text-[#cfa866] transition"><Facebook size={24} /></a>
            <a href="#" aria-label="Instagram" className="text-[#1d1d1d] hover:text-[#cfa866] transition"><Instagram size={24} /></a>
            <a href="#" aria-label="Twitter" className="text-[#1d1d1d] hover:text-[#cfa866] transition"><Twitter size={24} /></a>
          </div>
        </div>

        {/* Column 2: Navigation Links (Takes 3/12 columns on large screens) */}
        <div className="md:col-span-1 lg:col-span-3">
          <h3 className="font-bold text-lg mb-5 uppercase tracking-wider text-[#cfa866]" style={ParagraphStyle}>
            Quick Links
          </h3>
          <ul className="space-y-3">
            {navigationData.map((item, i) => (
              <li 
                key={i}
                className="text-[#1d1d1d] cursor-pointer text-base transition-all duration-200 hover:text-[#cfa866] hover:translate-x-1"
              >
                <a href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Column 3: Contact Details (Takes 6/12 columns on large screens) */}
        <div className="md:col-span-1 lg:col-span-6">
          <h3 className="font-bold text-lg mb-5 uppercase tracking-wider text-[#cfa866]" style={ParagraphStyle}>
            Contact & Location
          </h3>
          <ul className="space-y-4">
            {contactDetails.map((detail, i) => (
              <li 
                key={i}
                className="flex items-start text-base text-[#1d1d1d]"
              >
                <a 
                  href={detail.href} 
                  className="flex items-start group hover:text-[#cfa866] transition-colors duration-200 "
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <span className="mr-3 mt-1 text-[#1d1d1d] group-hover:text-[#cfa866] transition-colors">{detail.icon}</span>
                  <span className="group-hover:underline">{detail.text}</span>
                </a>
              </li>
            ))}
             {/* <li className="text-base text-[#1d1d1d] pt-2">
                <a href="/ContactUs" className="inline-flex items-center font-semibold text-sm transition-colors duration-200 hover:text-[#cfa866]">
                    View Location Map <Link size={16} className="ml-1"/>
                </a>
            </li> */}
          </ul>
        </div>

      </div>

      {/* Bottom bar: Copyright and Legal Links */}
      <div 
        style={titleStyle} 
        className="text-[##121212] py-5 px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm" 
      >
        <p className="text-center md:text-left order-2 md:order-1 mt-3 md:mt-0 opacity-80">
          Copyright © {currentYear} Teesta Networks Pvt. Ltd. All Rights Reserved.
        </p>
        
        {/* The legal links are now grouped into one list and moved to the right */}
        <div className="space-x-4 order-1 md:order-2">
          <a href="/TermsAndConditions" className="hover:text-[#cfa866] transition">
            Terms of Use
          </a>
          <span className="opacity-50">|</span>
          <a href="/PrivacyPolicy" className="hover:text-[#cfa866] transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
