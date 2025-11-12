import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView} from 'framer-motion';
import { AnimatedSection, fadeInUp } from '../../Components/SeoAnimate';
const ACCENT_GOLD = '#cfa866';
const HomeThirdSection = () => {
    const stats = [
        { value: 98, label: "Client Satisfaction" },
        { value: 150, label: "Projects Completed" },
        { value: 8, label: "Years of Experience" }
    ];
    
     const titleStyle = {
        // IMPORTANT: The font name should be Cinzel Decorative.
        // I've included a fallback serif font.
        fontFamily: 'Cinzel Decorative, serif', 
        textShadow: '0 0 0px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };

    const ParagraphStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        //textShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
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
                      src="/WhyChooseUsImage.webp"
                      alt="Marketing team collaborating" 
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover" mx-auto px-4 
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Team+Image'; }}
                    />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <h2 className="text-6xl sm:text-8xl md:text-6xl font-bold leading-none mb-6"
                        style={titleStyle}>
                        Why Choose Szutra?
                    </h2>
                    <p className="text-gray-800 mb-6 text-lg" style={ParagraphStyle} >We are not just another agency; we are your growth partners. Our approach is rooted in transparency, expertise, and a relentless pursuit of results that matter to your bottom line.</p>
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
export {HomeThirdSection};
