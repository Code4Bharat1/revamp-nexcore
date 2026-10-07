import React from "react";
import Link from "next/link"; // Import Link from Next.js

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center min-h-[300px] sm:min-h-[400px] flex items-center justify-center mt-4 lg:-mt-[15px]"
      style={{
        backgroundImage:
          "url('/images/odoo-images/bg-contact-us.jpg')", // Background Image
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      <div className="relative z-10 px-4 sm:px-0">
        {/* Subheading */}
        <h3 className="text-white text-[16px] sm:text-[22px] leading-tight">
          Get Odoo Events App to organize business events and make them a huge success.
        </h3>
        {/* Heading */}
        <h3 className="text-white text-[20px] sm:text-[22px] mt-4 leading-snug">
          Talk to our team now
        </h3>
        {/* Button */}
        <div className="mt-4 sm:mt-6">
        <Link href="https://wa.me/8976104646">
          <button className="bg-[#885c7c] hover:bg-purple-700 text-white font-bold py-2 px-4 sm:p-[15px] sm:px-[2.2rem] shadow-md transition">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
