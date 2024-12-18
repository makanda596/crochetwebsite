import React from "react";

const SpecialOffers = () => {
    return (
        <section id="special-offers" className="bg-pink-500 py-16 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-maroon-500">Special Offers</h2>
                <div className="flex flex-wrap justify-center space-x-8">
                    {/* First Visit Offer */}
                    <div className="offer-card bg-black p-6 rounded-lg shadow-lg w-full sm:w-80 md:w-64 mb-8 relative overflow-hidden group">
                        <h3 className="text-2xl font-semibold mb-4">First Visit Deal</h3>
                        <p className="text-gray-300 mb-4">
                            Get 20% off on your first visit to any service!
                        </p>
                        <div className="absolute inset-0 bg-pink-600 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-semibold">Claim your discount now!</p>
                        </div>
                        <button className="bg-maroon-500 hover:bg-maroon-600 text-white py-2 px-4 rounded-md mt-4">
                            Learn More
                        </button>
                    </div>

                    {/* Membership Offer */}
                    <div className="offer-card bg-black p-6 rounded-lg shadow-lg w-full sm:w-80 md:w-64 mb-8 relative overflow-hidden group">
                        <h3 className="text-2xl font-semibold mb-4">Membership Packages</h3>
                        <p className="text-gray-300 mb-4">
                            Exclusive deals for members. Join now and save big!
                        </p>
                        <div className="absolute inset-0 bg-pink-600 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-semibold">Discover benefits today!</p>
                        </div>
                        <button className="bg-maroon-500 hover:bg-maroon-600 text-white py-2 px-4 rounded-md mt-4">
                            Learn More
                        </button>
                    </div>

                    {/* Ongoing Discount */}
                    <div className="offer-card bg-black p-6 rounded-lg shadow-lg w-full sm:w-80 md:w-64 mb-8 relative overflow-hidden group">
                        <h3 className="text-2xl font-semibold mb-4">Ongoing Discounts</h3>
                        <p className="text-gray-300 mb-4">
                            Enjoy up to 30% off select services this month.
                        </p>
                        <div className="absolute inset-0 bg-pink-600 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-semibold">Limited time offer!</p>
                        </div>
                        <button className="bg-maroon-500 hover:bg-maroon-600 text-white py-2 px-4 rounded-md mt-4">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
