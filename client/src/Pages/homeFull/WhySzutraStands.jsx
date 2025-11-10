import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView} from 'framer-motion';
import { AnimatedSection, fadeInUp } from '../../Components/SeoAnimate';
const ACCENT_GOLD = '#cfa866';
const WhySzutraStands = () => {
    const stats = [
        { value: 98, label: "Client Satisfaction" },
        { value: 150, label: "Projects Completed" },
        { value: 8, label: "Years of Experience" }
    ];
    
     const titleStyle = {
        // IMPORTANT: The font name should be Cinzel Decorative.
        fontFamily: 'Playfair Display, Georgia, serif', 
        textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };

    const ParagraphStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
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
                {/* IMAGE CONTAINER: Removed md:pl-5 as we are centering the image */}
                <motion.div variants={fadeInUp}>
                    <img 
                      src="/WhyChooseUsImage.png"
                      alt="Marketing team collaborating" 
                      
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover mx-auto" 
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Team+Image'; }}
                    />
                </motion.div>

                {/* TEXT CONTAINER: Apply text-center to the entire div. */}
                <motion.div variants={fadeInUp} className="text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none mb-3"
                        style={titleStyle}>
                        Why Szutra Stands?
                    </h2>
                    
                    {/* UNDERLINE: Keeping mx-auto which correctly centers block element */}
                    <div 
                        className="w-24 h-[6px] mb-8 mx-auto"
                        style={{ backgroundColor: ACCENT_GOLD }} 
                    ></div>
                    
                    {/* UL is an inline element within the centered text block. 
                      We must make the UL centered and remove the list style.
                    */}
                    <p className="text-gray-800 mb-6 text-lg" style={ParagraphStyle} > 
                        <ul className="list-none inline-block text-left"> {/* Center UL container, but align list items left */}
                            <li>• Authentic hand embroidery by expert artisans</li>
                            <li>• Custom designs & sampling for designers</li>
                            <li>• High-quality, professional finish</li>
                            <li>• On-time delivery across India and worldwide</li>
                            <li>• Empowering artisans and preserving traditional craft</li>
                            With Szutra, you get more than embroidery — you get a legacy in every stitch.
                        </ul> 
                    </p>
                    
                    {/* Stats are already centered */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center" style={ParagraphStyle}>
                        {stats.map(stat => (
                            <div key={stat.label}>
                                <h3 className="text-5xl font-bold text-[#cfa866]">
                                   <AnimatedCounter to={stat.value} />%
                                </h3>
                                <p className="text-gray-800 mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};
export {WhySzutraStands};