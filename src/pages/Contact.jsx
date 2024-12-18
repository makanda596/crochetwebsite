import React, { useState } from "react";
import pic7 from '../assets/pic7.jpg';

function Contact() {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        additionalInfo: "",
        date: "",
    });

    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission to Web3Forms
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = new FormData();
        form.append("access_key", "f07646d0-18e9-462c-af68-0d73a710f3b2"); // Replace with your Web3Forms API key
        form.append("name", formData.name);
        form.append("phone", formData.phone);
        form.append("email", formData.email);
        form.append("service", formData.service);
        form.append("additionalInfo", formData.additionalInfo);
        form.append("date", formData.date);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });

            const json = await res.json();
            if (json.success) {
                setMessage("Your booking request has been sent successfully.");
                setFormSuccess(true);
            } else {
                setMessage("There was a problem sending your request.");
            }
        } catch (error) {
            alert("There was an error submitting the form.");
        }

        setIsSubmitting(false);
    };

    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-6">
                    {/* Left Form Section */}
                    <div className="w-full mb-6 lg:mb-0">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Book Us Today</h2>
                        {formSuccess ? (
                            <div className="text-green-600 font-semibold">{message}</div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <div className="space-y-2">
                                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information:</label>
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        value={formData.additionalInfo}
                                        onChange={handleInputChange}
                                        placeholder="Any specific requests or details?"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Booking"}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Side: Image Section */}
                    <div className="w-full flex justify-center items-center">
                        <img src={pic7} alt="" className="hidden w-full h-[540px] rounded-lg object-cover md:flex " />
                    </div>
                </div>

                {message && <div className="text-center mt-6 text-red-600">{message}</div>}
            </div>
        </div>
    );
}

export default Contact;
