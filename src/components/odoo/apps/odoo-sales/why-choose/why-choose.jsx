"use client";

import React from "react";
import Link from "next/link";
import { BarChart3, FileText, Zap, Users, Eye, DollarSign, CheckCircle2, ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";

const Whychoose = () => {
  const features = [
    { icon: <BarChart3 className="w-5 h-5 text-[#FF6600]" />, text: "Trackable Key Performance Indicators (KPIs)" },
    { icon: <FileText className="w-5 h-5 text-[#FF6600]" />, text: "Invoice managing from sales orders" },
    { icon: <Zap className="w-5 h-5 text-[#FF6600]" />, text: "Reduced data entry" },
    { icon: <Users className="w-5 h-5 text-[#FF6600]" />, text: "Customer portal with access to view quotes, sales orders and track delivery" },
    { icon: <Eye className="w-5 h-5 text-[#FF6600]" />, text: "Real-time monitoring and analysis of orders and invoices" },
    { icon: <DollarSign className="w-5 h-5 text-[#FF6600]" />, text: "Pricelists compute the exact product price" },
  ];

  return (
    <section className="relative bg-[#08153A] py-20 lg:py-24 overflow-hidden">
      {/* Background Subtle Gradient Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 relative z-10">
        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            <div className="rounded-2xl border border-white/10 bg-[#0c1e4f] p-3 shadow-2xl">
              <img
                src="/images/App images/odoo-sales-software-oodu-implementers.jpg"
                alt="Odoo Sales Software"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Levitating Feature Badge */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-[#08153A] border border-[#FF6600]/40 text-white px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2 font-semibold text-xs sm:text-sm whitespace-nowrap">
              <Award className="w-4 h-4 text-[#FF6600]" />
              <span>Proven Enterprise Track Record</span>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Why Choose Nexcore</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Why Choose <span className="text-[#FF6600]">Odoo Sales</span> For Your Business?
          </h2>

          <div className="w-16 h-1 bg-[#FF6600] rounded-full" />

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 bg-[#0c1e4f] border border-white/10 hover:border-[#FF6600]/30 p-3.5 rounded-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  {feature.icon}
                </div>

                <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Description Box */}
          <div className="bg-[#0c1e4f] border border-white/10 p-5 rounded-xl mt-4">
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Odoo Implementers have the best track record in the business, with our team dedicated to crafting the best strategy to implement the Odoo Sales tool. We primely focus on taking your business to the next level and securing a prominent place in the minds of people.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF6600] hover:bg-[#e65c00] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whychoose;