import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
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
                    <p className="mb-2">Contact us:</p>
                    <p className="mb-2">
                        <a href="mailto:maryanyega2021@gmail.com" className="text-blue-400 ">maryanyega2021@gmail.com</a>
                    </p>
                    <p className="mb-2">
                        <a href="https://wa.me/+254742149060" target="_blank" rel="noopener noreferrer" className="text-green-500">
                            <i className="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </p>
                    <p >
                        <a href="tel:+25474831913" className="text-blue-400">
                            <i className="fas fa-phone-alt"></i> Call us: +254 7483 1913
                        </a>
                    </p>
                </div>
                <div className="mt-4">
                    <p>&copy; 2024 Created by
                        <a href="https://wa.me/+25474831913" target="_blank" rel="noopener noreferrer" className="text-pink-500"> Makanda Worksoft</a>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
