"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaClock,
  FaPlus,
  FaMinus,
  FaQuoteLeft,
  FaStar,
  FaCheck,
} from "react-icons/fa";

// Import local data
import { serviceCategories, testimonials, industries, faqs } from "./ServiceSecData";

// Lazy load heavy Modal
const ServiceDetailModal = dynamic(() => import("../../home/ServicesHome/ServiceDetailModal"), {
  ssr: false,
});

const AccordionItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      className="w-full py-5 flex items-center justify-between text-left group cursor-pointer"
      onClick={onClick}
    >
      <span className="text-lg font-bold text-[#08153A] group-hover:text-[#FF6600] transition-colors">{faq.question}</span>
      {isOpen ? <FaMinus className="text-[#FF6600]" /> : <FaPlus className="text-slate-400" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
      <p className="text-slate-600 leading-relaxed font-medium">{faq.answer}</p>
    </div>
  </div>
);

const ServiceSec = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="w-full bg-[#f8fafc] py-20 md:py-32 relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Extended Solutions Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-black text-[#08153A] mb-4 tracking-tight">
            Extended <span className="text-[#FF6600]">Solutions</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Deep dive into our specialized engineering and product development domains.
          </p>
        </motion.div>

        {/* Categories Grid */}
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="mb-20">
            <motion.h4
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="cat-header text-xl font-bold text-[#08153A] mb-8 border-l-4 border-[#FF6600] pl-4"
            >
              {cat.category}
            </motion.h4>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${cat.services.length === 2 ? 'lg:grid-cols-2 max-w-4xl' : 'lg:grid-cols-3'} gap-6 sm:gap-8`}>
              {cat.services.map((service, sIdx) => {
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 35, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{
                      duration: 0.45,
                      delay: (sIdx % 3) * 0.08,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="service-card-wrapper w-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#FF6600]/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Row: Icon + Delivery Time Badge */}
                      <div className="flex justify-between items-start mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#08153A] group-hover:bg-[#FF6600] text-white flex items-center justify-center shadow-md transition-colors duration-300">
                          <service.Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#08153A]/5 text-[#08153A] border border-[#08153A]/10 px-3 py-1 rounded-full">
                          <FaClock className="w-3 h-3 text-[#FF6600]" />
                          <span>{service.deliveryTime}</span>
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h5 className="font-bold text-[#08153A] mb-2.5 text-lg sm:text-xl group-hover:text-[#FF6600] transition-colors duration-200">
                        {service.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features / Capabilities */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Key Capabilities
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.features.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg text-slate-700"
                            >
                              <FaCheck className="w-2.5 h-2.5 text-[#FF6600]" />
                              <span>{feat}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#08153A] hover:bg-[#FF6600] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer active:scale-95"
                    >
                      <span>Explore Full Solution</span>
                      <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Industry Tracks */}
        <div className="mt-32 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h4 className="text-2xl font-bold text-[#08153A]">Industry <span className="text-[#FF6600]">Expertise</span></h4>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 text-center shadow-xs hover:shadow-md transition-shadow border border-slate-100 group"
              >
                <ind.Icon className="w-8 h-8 mx-auto mb-3 text-[#08153A] group-hover:text-[#FF6600] transition-colors" />
                <span className="text-xs font-bold text-[#08153A]">{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQs & Testimonials */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Common Questions</div>
            <h4 className="text-3xl font-black text-[#08153A] mb-8">Everything you <span className="text-[#FF6600]">need to know</span></h4>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  faq={faq} 
                  isOpen={openFaq === idx} 
                  onClick={() => setOpenFaq(idx)} 
                />
              ))}
            </div>
          </motion.div>

          <div>
            {/* Testimonials */}
            <div className="space-y-6">
              {testimonials.map((test, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-2xl p-8 shadow-md border border-slate-50 relative group hover:shadow-xl transition-all"
                >
                   <FaQuoteLeft className="text-[#08153A] opacity-10 absolute top-4 right-4 w-12 h-12" />
                   <div className="flex gap-1 mb-4">
                     {[...Array(test.rating)].map((_, i) => <FaStar key={i} className="text-[#FF6600] w-3 h-3" />)}
                   </div>
                   <p className="text-slate-700 italic font-medium mb-6">"{test.text}"</p>
                   <div>
                     <div className="font-bold text-[#08153A] text-sm">{test.author}</div>
                     <div className="text-xs text-slate-500">{test.position}</div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceDetailModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

    </section>
  );
};

export default ServiceSec;