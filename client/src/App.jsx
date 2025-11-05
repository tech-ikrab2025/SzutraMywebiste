import { useState } from 'react'

import Home  from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import GalleryFull from './Pages/GalleryFull';
import { Routes, Route  } from 'react-router-dom';
import ContactUs from './Pages/ContactUs';
import { PrivacyPolicy } from './Pages/PrivacyPolicy';
import AboutUs from './Pages/AboutUs';
import { FloatingWhatsAppButton } from './Components/Whatsapp' ;
import TermsAndConditions from './Pages/TermsAndConditions';
import ProductDetailPage from './Pages/homeFull/ProductDetailPage';

function App() { 
  return (
    <>       
    <Header/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/GalleryFull" element={<GalleryFull />} />
          <Route path="/ContactUs" element={<ContactUs />} />  
          <Route path="/AboutUs" element={<AboutUs />} /> 
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />  
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />  
          <Route path="/product-details" element={<ProductDetailPage />} />
        </Routes>
        <FloatingWhatsAppButton/> 
   <Footer/>
    </>
  )
}

export default App;