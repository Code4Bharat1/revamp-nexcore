"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Automateassessment = () => {
  return (
    <section className="bg-white text-black py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center px-6 md:px-12 lg:px-24"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Creating Quotes Take No Time
        </h1>
        <p className="text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
          With Odoo, create a professional quote in no time. Make an effective business approach with Odoo tools. Put your business in the right front with invoicing that works. Get your quote done instantly and send it to potential customers straight away.
        </p>
      </motion.div>
    </section>
  );
};

export default Automateassessment;


