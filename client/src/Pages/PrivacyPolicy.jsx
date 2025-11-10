import React from 'react';
import { motion } from 'framer-motion';
// Icons for visual appeal
import { Shield, Lock, Cookie, Users, Mail, Globe } from 'lucide-react';

// Define the colors
const ACCENT_GOLD = '#cfa866'; // Elegant Gold
const PRIMARY_DARK = '#1a1a1a'; // Deep Dark Background
const CARD_DARK = '#242424'; // Slightly Lighter Card Background
const BORDER_COLOR = '#383838'; // Subtle Border for contrast

// --- Framer Motion Variants (No change needed here, they are good) ---

// Parent container variant for staggered children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Item variant for subtle fade and lift
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

// Hero title animation
const titleVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.1 } },
};

// Component to display a standard policy section block
const PolicyBlock = ({ title, icon: Icon, children, delay = 0 }) => (
    <motion.div
        // Updated bg and border colors for the new dark, gold theme
        className={`p-6 md:p-8 ${CARD_DARK} rounded-xl shadow-2xl border ${BORDER_COLOR} transition-transform duration-300`}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: delay }}
        whileHover={{ scale: 1.01, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.4)" }} // Slight lift on hover
    >
        {/* Replaced border-indigo-500/20 with a subtle gray or gold line */}
        <div className={`flex items-center mb-4 border-b border-gray-600/50 pb-3`}>
            {/* Icon color changed to the elegant ACCENT_GOLD */}
            <Icon className="w-8 h-8 mr-3" style={{ color: ACCENT_GOLD }} />
            <h2 className="text-3xl font-bold text-[#cfa866]">{title}</h2>
        </div>
        <div className="text-gray-800 leading-relaxed space-y-4">
            {children}
        </div>
    </motion.div>
);


// Main Application Component
const PrivacyPolicy = () => {
    // Applied the requested textShadow and ACCENT_GOLD color
    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        //textShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD, // Set the text color explicitly
    };

    const ParagraphStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        //textShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
    };

    return (
        // Set the primary background to a deep dark color
        <div className="min-h-screen font-sans antialiased" style={{ backgroundColor: '#FFFFFF', color: ACCENT_GOLD }}> 

            

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"  style={ParagraphStyle}>

                {/* Hero / Title Section */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                >
                    {/* Removed bg-gradient-to-r from-indigo-400 to-pink-500 */}
                    <h1 
                        className="text-5xl md:text-7xl font-extrabold leading-tight mt-10" 
                        style={titleStyle} // Applies Playfair Display, text-shadow, and ACCENT_GOLD color
                    >
                        PRIVACY POLICY
                    </h1>
                    {/* Updated text color for better contrast on dark background */}
                    <p className="mt-2 text-xl text-gray-800 max-w-4xl mx-auto"  style={ParagraphStyle}>
                        In this Privacy Policy you will find how SZUTRA (hence by referred to as "we" or "us”) uses and protects any information that you provide to SZUTRA when you use our website. We are committed towards ensuring that your privacy is protected. Without any prior information we may update our privacy policy. You should check this page regularly to make sure that you are updated with any changes.
                    </p>
                </motion.div>


                {/* Policy Sections Grid */}
                <motion.div
                    className="grid grid-cols-1 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    
                >
                    {/* The rest of your PolicyBlocks remain the same, inheriting the new dark/gold style */}
                    <PolicyBlock title="1. What we collect" icon={Users} >
                        <p>
                            **Personal information** means any information that may be used to identify an individual, including, first and last name, email address, postal or other physical address, other contact information, title, occupation, industry, personal interests, and other information when needed to provide a service or product or carry out a transaction you have requested.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="2. Internal record keeping" icon={Lock} delay={0.1}>
                        <p>
                            We may use the information to **improve our products and services**. We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided. From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="3. Confidentiality" icon={Shield} delay={0.2}>
                        <p>
                            SZUTRA do not transfer or share your information except as provided below:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800">
                            <li>We may also send your personal information to other companies or people if, We have users' **consent** to share the information.</li>
                            <li>We may share user's personally identifiable information with our **resellers and partners**, so that such resellers and partners may use such information to market SZUTRA's products and services, and to market their own products and services.</li>
                            <li>We may engage certain trusted **third parties** to perform function and provide services to us, including without limitation, hosting and management services, customer relationship services, database storage and management services, fulfilling orders, sending email, processing credit card payments or other functions necessary to our business; and I-KRAB may share your personally identifiable information with these third parties, but only to the extent necessary to perform these functions and provide such services, and only pursuant to binding contractual obligations requiring such third parties to maintain confidentiality of your data.</li>
                            <li>We may also reveal a user's identity or relevant information if SZUTRA knows or believes that user is harming or interfering with other our users, anyone else, or violating the Agreement or infringing any of the SZUTRA's legal rights.</li>
                            <li>SZUTRA may also reveal user's personal information when **required to do so by law**, or if we have a good-faith belief that such action is necessary to comply with a court order or subpoena, to cooperate with investigations by law enforcement or regulatory authorities or to participate or cooperate with a judicial proceeding, or in urgent circumstances, to protect personal safety, the public or our websites; to protect the property and rights of I-KRAB or a third party, the safety of the public or any person; to prevent or stop any illegal, unethical or legally actionable activity.</li>
                            <li>In the event of a **merger, consolidation or reorganization** involving SZUTRA, acquisition of SZUTRA by another company, or other similar transaction, your personal information will, in most instances, be transferred to the control of the third party that is part of that transaction.</li>
                        </ul>
                    </PolicyBlock>

                    <PolicyBlock title="4. Security" icon={Lock} delay={0.3}>
                        <p>
                            We are committed to ensuring that your information is **secure**. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="5. How we use cookies" icon={Cookie} delay={0.4}>
                        <p>
                            A **cookie** is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. We only use this information for statistical analysis purposes and then the data is removed from the system. You can choose to accept or decline cookies in your browser settings. This may prevent you from taking full advantage of the website.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="6. Links to other websites" icon={Globe} delay={0.5}>
                        <p>
                            Our website may contain links to **other websites of interest**. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="7. Controlling your personal information" icon={Mail} delay={0.6}>
                        <p>
                            You may choose to **restrict the collection or use of your personal information** in the following ways:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800">
                            <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for **direct marketing** purposes.</li>
                            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may **change your mind** at any time by writing to or emailing us at **bose@ikrabesol.in**.</li>
                            <li>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.</li>
                            <li>You may request details of personal information which we hold about you as governed by the laws of India. A small fee may be payable. If you would like a copy of the information held on you please write to SZUTRA, 4/3 Poddar Nagar, Kolkata - 700068.</li>
                            <li>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly **correct any information** found to be incorrect.</li>
                        </ul>
                    </PolicyBlock>
                </motion.div>

            </main>
        </div>
    );
};

export { PrivacyPolicy };