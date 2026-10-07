"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Godigital = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            className="text-purple-700 text-sm sm:text-[17px] font-semibold uppercase tracking-wider mb-2"
          >
            Transform into a paperless company with Odoo Documents
          </motion.p>
          <h1 className="text-2xl sm:text-[20px] font-extrabold text-gray-800 mb-6 leading-snug">
            Go Digital- First with Odoo Documents Management Software
          </h1>
          <h2 className="text-base sm:text-[24px] font-[1000] text-gray-900 mb-4">
            Paperless Workflow Management with Odoo Documents Implementation
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
            Hassle-free management of documentation leads to increased business productivity. Odoo Document Management will be an effective tool for any organization, that deals with an extensive range of documents. At odoo Implementers, we enable our clients to create new documents, store key files, manage recorded data, retrieve and protect documents conveniently with Odoo Documents Software. Our clean structured Odoo Documents implementation will allow your company to go paperless in no time.
          </p>
        </motion.div>

        {/* Right Section - Image/Video */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            src="/images/bg-image/odoo-document-management-systems.webp"
            alt="Odoo CRM Software"
            className="shadow-2xl p-[10px] border-white shadow-[#895d7d]/100 sm:w-full md:w-auto transition-transform rounded-xl"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayVideo}
              className="bg-purple-700 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:bg-black transition animate-bounce"
            >
              ▶
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-red-600 transition"
            >
              ✕
            </button>
            {/* Video */}
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/Ayab6wZ_U1A?si=5hYiR4X9xvMCadDL"
              title="Odoo Development Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Godigital;

