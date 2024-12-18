import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Agnes",
            text: "The crocheted products are amazing! The quality is unmatched.",
            rating: 5,
        },
        {
            name: "John ",
            text: "I love the plaiting services. My hair looks fantastic every time!",
            rating: 4,
        },
        {
            name: "Emily ",
            text: "Exceptional customer service and beautiful designs!",
            rating: 5,
        },
    ];

    return (
        <>
            <section className="py-12 bg-gradient-to-r bg-white text-blue">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Style?</h2>
                    <p className="text-lg mb-6">
                        Explore our range of crocheting and salon services today!
                    </p>

                    <button className="bg-blue-600 rounded text-white p-3">
                        <AnchorLink
                            href="#contact"
                            offset={50}
                            className="block hover:text-gray-200 transition duration-200"
                        >

                        </AnchorLink>  contact us
                    </button>
                </div>
            </section >
            <div id="testimonials" className="bg-blue-50 py-12">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white border rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
                            >
                                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                                <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                                <p className="text-yellow-500">
                                    {"⭐".repeat(testimonial.rating)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
