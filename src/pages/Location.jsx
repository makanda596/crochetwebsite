import React from "react";

const Location = () => {
    return (
        <div id="location" className="py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
                <div className="flex justify-center">
                    <iframe
                        title="This is a unique title"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.6853046217846!2d35.29025464007813!3d0.2903323000000033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780f502e43959db%3A0x1e7494c4904df5ec!2sTBE%20Productions!5e1!3m2!1sen!2ske!4v1734239546668!5m2!1sen!2ske"
                        className="w-full h-[450px] rounded-lg shadow-lg border-none"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;
