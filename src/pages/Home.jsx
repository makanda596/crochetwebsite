import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pic13 from '../assets/pic13.jpg';
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const HomePage = () => {
    // Refs for sections to track scroll-in-view
    const aboutRef = useRef(null);
    const isAboutInView = useInView(aboutRef, { once: true });

    const featuredRef = useRef(null);
    const isFeaturedInView = useInView(featuredRef, { once: true });

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <motion.section
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <div
                    className="h-[600px] bg-cover bg-center object-cover"
                    style={{
                        backgroundImage: "url('https://media.istockphoto.com/id/1736876124/photo/crochet-club-elderly-women-friends-knitting-together-with-colored-wool.webp?a=1&b=1&s=612x612&w=0&k=20&c=NDTHP9ffhG_qijqo5qugYNcL23YSZ8_qqltGkEgZGtE=')",
                    }}
                >
                    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                        <motion.h1
                            className="text-white text-4xl md:text-6xl font-bold text-center"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Welcome to My Salon & Crocheting Services
                        </motion.h1>
                    </div>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                className="py-12 px-6 md:px-12 bg-white"
                id="about"
                ref={aboutRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isAboutInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
                        About Our Services
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At My Salon, we specialize in delivering exceptional crocheting and salon services. Our team is dedicated to crafting stunning, handmade crocheted pieces that add elegance and charm to any occasion. From stylish crochet wear to personalized gifts, we bring creativity and passion to everything we do.
                    </p>
                </div>
            </motion.section>

            {/* Featured Image Section */}
            <section className="py-12" ref={featuredRef}>
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Image */}
                        <motion.div
                            className="w-full md:w-1/2 px-4"
                            initial={{ x: -100, opacity: 0 }}
                            animate={isFeaturedInView ? { x: 0, opacity: 2 } : {}}
                            transition={{ duration: 2 }}
                        >
                            <img
                                src={pic13}
                                alt="Crocheting Work"
                                className="rounded-lg shadow-lg h-[400px] w-full object-cover"
                            />
                        </motion.div>
                        {/* Text */}
                        <motion.div
                            className="w-full md:w-1/2 px-4 mt-8 md:mt-0"
                            initial={{ x: -100, opacity: 0 }}
                            animate={isFeaturedInView ? { x: 0, opacity: 2 } : {}}
                            transition={{ duration: 2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Our Unique Crocheting Work
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Each piece is crafted with precision, creativity, and love. Whether you need a cozy sweater, a decorative tablecloth, or unique accessories, our crocheting services are tailored to meet your needs. We value quality and customer satisfaction above all else, ensuring that you get the best every time.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Fixed WhatsApp Button */}
            <a
                href="https://wa.me/+254748431913"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out"
            >
                <FaWhatsapp className="text-2xl" />
            </a>
        </div>
    );
};

export default HomePage;
