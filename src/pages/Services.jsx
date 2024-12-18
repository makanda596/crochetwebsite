import React from "react";
import salon from '../assets/salon1.jpg';
import dread from '../assets/dread.jpg';
import dread2 from '../assets/dread2.jpg';
import nail from '../assets/nail.jpg'
const OtherServices = () => {
    const services = [
        {
            id: 1,
            name: "Salon Services",
            description: "Professional hair styling, treatments, and grooming services to make you look your best.",
            image: salon,
        },
        {
            id: 2,
            name: "Nail Art",
            description: "Relaxing nail care services for healthy and beautiful hands and feet.",
            image: nail,
        },
        {
            id: 3,
            name: "Dreadlocks Services",
            description: "Customized hair coloring services to suit your style and personality.",
            image: dread,
        },
        {
            id: 4,
            name: "Braiding & Plaiting",
            description: "Expert braiding and plaiting for stunning, long-lasting styles.",
            image: dread2,
        },
    ];

    return (
        <section id="services">
            <div className="bg-gray-50 py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
                        Our Other Services
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                    {service.name}
                                </h2>
                                <p className="text-gray-600 text-center mb-4">
                                    {service.description}
                                </p>

                                {/* Order Now Button */}
                                <button className="mt-1 bg-green-500 text-white py-0 px-2 rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
                                    <a
                                        href="https://wa.me/+254748431913"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-lg font-semibold"
                                    >
                                        INQUIRE FOR MORE
                                    </a>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherServices;
