// src/components/TermsAndConditions.jsx

import React from 'react';
import { motion } from 'framer-motion';
const ACCENT_GOLD = '#cfa866';

const TermsAndConditions = () => {

  const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
    };
  // 1. Animation settings for Framer Motion (DURATION INCREASED)
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 30, // Lowered from 50 for a slower, smoother bounce
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2, // Increased from 0.1 to slow down the cascading effect
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  // 2. Full Legal Content (Modified for Teesta Networks)
  const sections = [
    { 
      title: "Introduction", 
      content: `The domain name **https://teestanetworks.com** (hereinafter referred to as "Site") is owned by **Teesta Networks** (the "**Group**," "**we**," "**our**," or "**us**," which includes all its partners, affiliates, joint ventures, or related entities). Any person using the Site ("**User**" or "**you**") is deemed to have read and accepted these Terms of Use, forming a binding agreement between the User and Teesta Networks. Your use of the Site is governed by these Terms of Use, including the Disclaimer and Privacy Policy, which are incorporated by reference. By using the Site, you are obligated to comply with these terms.`
    },
    { 
      title: "Eligibility", 
      content: `Access to the Site is restricted to individuals **over 18 (eighteen) years old** who are legally competent to enter into a contract under applicable law. Your access or use represents that you are capable of contracting. If you are registering a business entity, you warrant that you have the authority to bind that entity to these Terms of Use. You are financially responsible for all use of the Site (including the purchase of units in any project) and access to the Site (including use by others via your account). These Terms are void where prohibited by law.`
    },
    { 
      title: "Data Provided & Account Security", 
      content: `Any information you provide is protected according to our Privacy Policy. You are responsible for maintaining the confidentiality of your password and account and for all activity that occurs through your account. We are not liable for any loss or damage resulting from your failure to protect your password or account. If you suspect unauthorized use, you must notify us immediately at **support@teestanetworks.com**. We may require you to change your password or suspend your account if we suspect a security breach. You agree to: (1) provide **accurate, current, and complete information** ("Shared Data"); and (2) promptly update the Shared Data. We reserve the right to suspend or terminate your access if any provided information is false or inaccurate. You grant us a non-exclusive, worldwide, royalty-free right to use your Shared Data for the purpose of operating the Site.`
    },
    { 
      title: "User Agreements and Restrictions", 
      content: `You understand you are solely responsible for the Shared Data and agree not to host, display, upload, modify, publish, transmit, update, or share any information that: (1) belongs to another person without right; (2) is harmful, harassing, defamatory, obscene, indecent, or otherwise unlawful; (3) harms minors; (4) **infringes any patent, trademark, copyright, or other proprietary rights**; (5) violates any applicable law; (6) impersonates another person; (7) contains software viruses or other harmful computer code; (8) threatens the unity, integrity, security, or sovereignty of India, friendly relations with foreign states, or public order; or (9) constitutes political campaigning, unsolicited advertising, or spam. You shall not attempt to gain unauthorized access to the Site or other Users' accounts through hacking, phishing, or other means.`
    },
    { 
      title: "Force Majeure", 
      content: `We will not be liable for any failure or delay in performance caused by circumstances beyond our reasonable control, including but not limited to acts of God, war, riot, embargoes, acts of civil or military authorities, fire, floods, accidents, service failures, or shortages of transportation, facilities, fuel, energy, labor, or materials. This clause does not excuse your obligation to pay for services rendered prior to the event of force majeure.`
    },
    { 
      title: "Email Communication", 
      content: `We may send you emails regarding new real property or other information. To facilitate this, we may track some pages you visit. You may unsubscribe at any time using the link provided in the mailers or by emailing **support@teestanetworks.com** to have your email address removed from our lists.`
    },
    { 
      title: "Restriction on Use of Content", 
      content: `The information provided on the Site is the exclusive property of the Group and is protected by applicable intellectual property laws. No person shall use, copy, transmit, reproduce, publish, modify, or distribute the same or any part of the Site without the **express written permission of the Group**.`
    },
    { 
      title: "Applicable Law & Jurisdiction", 
      content: `These Terms of Use will be governed by and interpreted in accordance with the laws of **India**. The courts at **Kolkata (West Bengal)** will have exclusive jurisdiction over any proceedings arising out of or in connection with these Terms of Use.`
    },
  ];

  // 3. The JSX Return (Tailwind Arbitrary Values for #cfa866 remain)
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-6 sm:p-10 shadow-xl rounded-lg border border-gray-100"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mt-10 mb-4 border-b pb-2"  style={titleStyle}>
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: October 28, 2025
        </p>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            className="mb-8"
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-[#cfa866] mb-3 border-l-4 border-[#cfa866] pl-3">
              {index + 1}. {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {section.content}
            </p>
          </motion.section>
        ))}

        <div className="mt-10 pt-4 border-t text-center">
          <p className="text-sm text-gray-500">
            By using our website, you hereby consent to our Terms and Conditions.
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default TermsAndConditions;