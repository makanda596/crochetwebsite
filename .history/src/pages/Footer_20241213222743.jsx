import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 My Salon. All rights reserved.</p>
                <div className="mt-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                </div>
                <div className="mt-4">
                    <p>Contact us: <a href="mailto:info@mysalon.com" className="text-blue-400">info@mysalon.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
