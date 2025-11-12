import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView} from 'framer-motion';
import { AnimatedSection, fadeInUp } from '../../Components/SeoAnimate';
const ACCENT_GOLD = '#cfa866';
const WelcomeToSzutra = () => {
   
    
     const titleStyle = {
        // IMPORTANT: The font name should be Cinzel Decorative.
        // I've included a fallback serif font.
        fontFamily: 'Playfair Display, Georgia, serif', 
        textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };

    const AnimatedCounter = ({ to, duration = 2 }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.5 });
        const controls = useAnimation();
        
        useEffect(() => {
            if (isInView) {
                controls.start({
                    value: to,
                    transition: { duration, ease: "easeOut" }
                });
            }
        }, [isInView, to, controls]);

        return (
            <motion.span ref={ref} initial={{ value: 0 }}>
                {isInView ? <Counter from={0} to={to} /> : 0}
            </motion.span>
        );
    };

    const Counter = ({ from, to }) => {
        const [count, setCount] = useState(from);

        useEffect(() => {
            const controls = {
                stop: () => {}
            };
            const animateValue = (start, end, duration) => {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    setCount(Math.floor(progress * (end - start) + start));
                    if (progress < 1) {
                        controls.stop = requestAnimationFrame(step);
                    }
                };
                controls.stop = requestAnimationFrame(step);
            };

            animateValue(from, to, 2000); // 2 second animation

            return () => cancelAnimationFrame(controls.stop);
        }, [from, to]);
        
        return <span>{count}</span>
    }
    return (
        <AnimatedSection id="why-us" className="bg-White text-[#cfa866] overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp} className="md:pl-5">
                    <img 
                      src="/AboutUsImage.webp"
                      alt="Marketing team collaborating" 
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover" mx-auto px-4 
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Team+Image'; }}
                    />
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none mb-3"
                        style={titleStyle}>
                        Your Zari Production Partner
                    </h2>

                    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold leading-none mb-3"
                        style={titleStyle}>
                        Bulk Custom Zari work
                    </h3>
                    {/* Luxurious Gold Underline Bar */}
{/* w-24 (wider), h-1.5 (slightly thicker), and mb-12 (for section spacing) */}
<div 
    className="w-24 h-[6px] mb-8 mx-auto" // h-[6px] is equivalent to h-1.5, giving a custom thickness
    style={{ backgroundColor: ACCENT_GOLD }} 
></div>
                    <p className="text-gray-800 mb-6 text-lg" >At Szutra, every stitch tells a story.
            At Szutra, we are a dedicated manufacturer specializing exclusively in exquisite zari clothing. Our mission is to deliver the best handmade cloths directly to our valued customers who place bulk orders, including fashion houses, designers, and large-scale retailers. We combine the rich tradition of Indian craftsmanship with modern production efficiency. Our team of master artisans ensures every yard of fabric and every piece of attire showcases unparalleled quality, authenticity, and royal craftsmanship. Partner with us for reliable, high-volume supply that never compromises on the artistry of zari embroidery.
            </p>
                    <a
                    href="/ContactUs" // Set your destination URL here
                    // target="_blank" // This ensures the link opens in a new tab
                    //rel="noopener noreferrer" // Security best practice for target="_blank"
                    className={`
                        text-gray-800 font-semibold py-3 px-10 rounded-full shadow-xl 
                        uppercase tracking-wider transition duration-300 ease-in-out
                        hover:scale-105 transform active:scale-95 border-2 border-transparent hover:border-white
                        focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
                        inline-flex items-center justify-center mt-15
                    `}
                    style={{ backgroundColor: ACCENT_GOLD }} 
                    aria-label="Shop our new Zari collection now"
                >
                    ORDER NOW
                </a>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};
export {WelcomeToSzutra};
