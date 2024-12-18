import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import pic14 from '../assets/pic14.jpg';
import pic1 from '../assets/pic1.jpg';
import pic3 from '../assets/pic3.jpg';
import pic13 from '../assets/pic13.jpg';
import pic11 from '../assets/pic11.jpg';
import pic12 from '../assets/pic12.jpg';
import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.jpg';
import pic5 from '../assets/pic5.jpg';
import pic15 from '../assets/pic15.jpg';
import pic16 from '../assets/pic16.jpg';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const ProductPage = () => {
    const products = [
        { id: 1, name: "Handmade Crochet Bag", image: pic14, description: "A beautiful and stylish handmade crochet bag for all occasions.", oldPrice: "$40", newPrice: "$30" },
        { id: 2, name: "Knitted Sweater", image: pic3, description: "Cozy and warm knitted sweater perfect for the winter season.", oldPrice: "$60", newPrice: "$50" },
        { id: 3, name: "Decorative Tablecloth", image: pic1, description: "Elegant crochet tablecloth to add charm to your dining area.", oldPrice: "$25", newPrice: "$20" },
        { id: 4, name: "Crochet Scarf", image: pic13, description: "Lightweight and stylish scarf for all seasons.", oldPrice: "$35", newPrice: "$28" },
        { id: 5, name: "Knitted Beanie", image: pic15, description: "Warm and cozy beanie to keep you stylish during winter.", oldPrice: "$20", newPrice: "$15" },
        { id: 6, name: "Crochet Blanket", image: pic12, description: "Soft and comfortable blanket for your home or as a gift.", oldPrice: "$70", newPrice: "$55" },
        { id: 7, name: "Crochet Blanket", image: pic8, description: "Beautiful handmade crochet blanket for cozy nights.", oldPrice: "$80", newPrice: "$65" },
        { id: 8, name: "Crochet Blanket", image: pic5, description: "Stylish and warm crochet blanket for your living room.", oldPrice: "$90", newPrice: "$75" },
        { id: 9, name: "Crochet Blanket", image: pic9, description: "A soft and colorful crochet blanket, perfect for gifts.", oldPrice: "$85", newPrice: "$70" },
        { id: 10, name: "Crochet Blanket", image: pic11, description: "Handmade crochet blanket for comfort and style.", oldPrice: "$95", newPrice: "$80" },
        { id: 11, name: "Crochet Blanket", image: pic16, description: "Elegant and cozy crochet blanket for all seasons.", oldPrice: "$100", newPrice: "$85" },
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Ref and in-view state for product section
    const productSectionRef = useRef(null);
    const isProductSectionInView = useInView(productSectionRef, { once: false });

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 5 >= products.length ? 0 : prevIndex + 5
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 5 < 0 ? products.length - 5 : prevIndex - 5
        );
    };

    return (
        <section id="products" ref={productSectionRef}>
            <div className="bg-gray-100 min-h-screen py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
                        Our Products
                    </h1>
                    <div className="relative">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {products.slice(currentIndex, currentIndex + 5).map((product) => (
                                <motion.div
                                    key={product.id}
                                    className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isProductSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* Image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-48 h-48 object-cover rounded-md mb-4 cursor-pointer"
                                        onClick={() => setSelectedImage(product.image)}
                                    />

                                    {/* Product Name */}
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                                        {product.name}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-gray-600 text-center mb-4">
                                        {product.description}
                                    </p>

                                    {/* Pricing */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-red-500 line-through">
                                            {product.oldPrice}
                                        </span>
                                        <span className="text-green-600 font-bold">
                                            {product.newPrice}
                                        </span>
                                    </div>

                                    {/* Order Now Button */}
                                    <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
                                        <a
                                            href="https://wa.me/+254748431913"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-lg font-semibold"
                                        >
                                            ORDER NOW
                                        </a>
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={prevSlide}
                                className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
                            >
                                Previous
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal to display selected image */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2 }}
                    transition={{ duration: 5 }}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 5 }}
                        className="relative"
                    >
                        <img
                            src={selectedImage}
                            alt="Selected Product"
                            className="max-w-full max-h-[90vh] rounded-lg"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition"
                        >
                            X
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default ProductPage;
