import React from 'react';
// Import all section components from their respective files
import  GallerySecond  from './Gallery.jsx/GallerySecond';
import { GalleryFirst } from './Gallery.jsx/GalleryFirst';
import GalleryThird from './Gallery.jsx/GalleryThird';

// Corrected syntax: Define the component using const
const GalleryFull = () => {
    return (
        <div className="min-h-screen bg-white">
            <GalleryFirst/>
            <GallerySecond/>
            <GalleryThird/>
            
        </div>
    );
};

// Export the defined component as the default export
export default GalleryFull;