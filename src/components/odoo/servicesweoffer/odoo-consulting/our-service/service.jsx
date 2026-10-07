"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCog, FaChartLine, FaCode } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Odoo Consulting Services",
      icon: "/images/odoo-images/odoo-icons/odoo-consulting-service-technical-and-functional.png",
      Icon: FaCog,
      description:
        "Odoo Implementers provides consulting services to assist with customization, implementation, migration and training. We help businesses globally with tailored ERP solutions after evaluating complete operational processes.",
    },
    {
      id: 2,
      title: "Odoo Functional Consulting",
      icon: "/images/odoo-images/odoo-icons/odoo-service-functional-consulting.png",
      Icon: FaChartLine,
      description:
        "Our Odoo functional experts assess your business goals, timelines and workflows to deliver process-oriented ERP implementation aligned with your company's operational structure.",
    },
    {
      id: 3,
      title: "Odoo Technical Consulting",
      icon: "/images/odoo-images/odoo-icons/odoo-service-technical-consulting.png",
      Icon: FaCode,
      description:
        "Our technical team ensures Odoo customization and development follows structured engineering flow resulting in scalable, secure and high-performance ERP solutions.",
    },
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-20 md:py-24 overflow-hidden text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-[#FF6600]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              Our Services
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Odoo Functional &{" "}
              <span className="text-[#FF6600]">
                Technical Consulting
              </span>
            </h2>
          </div>

          <Link href="/servicesweoffer">
            <button className="px-6 py-3 bg-[#FF6600] hover:opacity-90 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer">
              <span>All Services</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/5 rounded-xl p-6 sm:p-8 border border-white/15 hover:border-[#FF6600]/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon area */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center shadow-md">
                    <service.Icon className="w-6 h-6 text-white" />
                  </div>
                  {service.icon && (
                    <img
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 opacity-60 object-contain filter brightness-0 invert"
                    />
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#FF6600] transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/70 leading-relaxed text-xs sm:text-sm">{service.description}</p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/10">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF6600] group-hover:text-white transition-colors"
                >
                  <span>Request Consultation</span>
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl p-8 sm:p-10 text-[#08153A] shadow-xl border border-[#08153A]/10">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#08153A]">Need Custom Odoo Solutions?</h3>
              <p className="text-[#08153A]/70 text-xs sm:text-sm max-w-xl font-normal">
                Our expert consultants are ready to help you implement the perfect Odoo solution.
              </p>
            </div>
            <Link href="/contactus" className="shrink-0">
              <button className="px-7 py-3.5 bg-[#08153A] hover:bg-[#FF6600] text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer">
                Get Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
