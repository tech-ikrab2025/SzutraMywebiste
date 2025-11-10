import React from 'react';
// Import all section components from their respective files
import { HeroSection } from './homeFull/HeroSec';
import { HomeGallerySection } from './homeFull/HomeGallerySection';
import { HomeForthSection } from './homeFull/HomeForthSection';
import { HomeFifthSection } from './homeFull/HomeFifthSection.jsx';
import { WelcomeToSzutra } from './homeFull/WelcomeToSzutra.jsx';
import { WhySzutraStands } from './homeFull/WhySzutraStands.jsx';

// Corrected syntax: Define the component using const
const Home = () => {
    return (
        <div className="min-h-screen bg-white mb-0 pb-0">
            <HeroSection/>
            <WelcomeToSzutra />
            <HomeGallerySection/>
             <WhySzutraStands /> 
            <HomeForthSection/>
            <HomeFifthSection/>
        </div>
    );
};

// Export the defined component as the default export
export default Home;