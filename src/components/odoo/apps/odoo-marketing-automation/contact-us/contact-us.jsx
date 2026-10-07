"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center min-h-[300px] sm:min-h-[400px] flex items-center justify-center mt-4 lg:-mt-[86px] overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/odoo-images/bg-contact-us.jpg')",
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-4 sm:px-0"
      >
        {/* Subheading */}
        <h3 className="text-white text-[16px] sm:text-[22px] leading-tight">
          For any queries on Odoo or new app implementation with Odoo
        </h3>
        {/* Heading */}
        <h3 className="text-white text-[20px] sm:text-[22px] mt-4 leading-snug">
          Consult Our Experts and Get Started
        </h3>
        {/* Button */}
        <div className="mt-4 sm:mt-6">
          <Link href="https://wa.me/8976104646">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#885c7c] hover:bg-purple-700 text-white font-bold py-2 px-4 sm:p-[15px] sm:px-[2.2rem] shadow-md transition rounded-lg"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

