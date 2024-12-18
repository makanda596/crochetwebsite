import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f07646d0-18e9-462c-af68-0d73a710f3b2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };
    return (
        <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-white text-3xl font-extrabold hover:opacity-90 transition duration-200">
                    <h1>Yarnhaven</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-white text-lg font-medium items-center">
                    <li>
                        <a href="/" className="hover:text-gray-200 transition duration-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <AnchorLink href="#about" offset={50} className="hover:text-gray-200 transition duration-200">
                            About Us
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#products" offset={50} className="hover:text-gray-200 transition duration-200">
                            My Products
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#services" offset={50} className="hover:text-gray-200 transition duration-200">
                            Other Services
                        </AnchorLink>
                    </li>
                    <li>
                        <button
                            className="hover:text-gray-200 transition duration-200"
                            onClick={() => setIsContactFormOpen(true)}
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {dropdownOpen && (
                <ul className="md:hidden bg-blue-600 text-white text-lg font-medium space-y-2 py-4 px-4">
                    <li>
                        <a href="/" className="block hover:text-gray-200 transition duration-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <AnchorLink
                            href="#about"
                            offset={50}
                            className="block hover:text-gray-200 transition duration-200"
                        >
                            About Us
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            href="#products"
                            offset={50}
                            className="block hover:text-gray-200 transition duration-200"
                        >
                            My Products
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            href="#services"
                            offset={50}
                            className="block hover:text-gray-200 transition duration-200"
                        >
                            Other Services
                        </AnchorLink>
                    </li>
                    <li>
                        <button
                            className="block text-left hover:text-gray-200 transition duration-200"
                            onClick={() => {
                                setDropdownOpen(false);
                                setIsContactFormOpen(true);
                            }}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            )}

            {/* Contact Form Popup */}
            {isContactFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h2>
                        <form onSubmit={onSubmit}>
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    type="button"
                                    onClick={() => setIsContactFormOpen(false)}
                                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
