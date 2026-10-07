"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaChartLine,
  FaCog,
  FaPaintBrush,
  FaCode,
  FaPlug,
  FaShoppingCart,
  FaHeadset,
  FaRocket,
  FaExchangeAlt,
  FaWrench,
  FaGlobe,
  FaSearch,
  FaTimes,
  FaCheckCircle,
  FaArrowRight,
  FaEye,
} from "react-icons/fa";

// Standalone Service Card Item adhering to clean enterprise design
const ServiceCardItem = ({ service, onPreview }) => {
  return (
    <div className="service-card-item group relative bg-white rounded-xl p-6 sm:p-7 border border-[#08153A]/10 hover:border-[#FF6600]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        
        {/* Top Icon Badge & Quick View Button */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-[#08153A] text-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#FF6600] transition-colors duration-300">
            <service.Icon className="w-5 h-5 text-white" />
          </div>

          <button
            onClick={() => onPreview(service)}
            className="px-3 py-1.5 rounded-lg border border-[#08153A]/15 text-xs font-semibold text-[#08153A]/80 hover:bg-[#08153A] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Quick View</span>
            <FaEye className="w-3 h-3 text-[#08153A]/50" />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#08153A] group-hover:text-[#FF6600] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[#08153A]/70 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
          {service.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-1.5 pt-3 border-t border-[#08153A]/10">
          {service.features.slice(0, 2).map((feat, fIdx) => (
            <div key={fIdx} className="flex items-center gap-2 text-xs text-[#08153A]/85">
              <FaCheckCircle className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0" />
              <span className="truncate font-medium">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-5 mt-4 border-t border-[#08153A]/10">
        <Link href={service.link} className="block w-full">
          <button className="w-full py-2.5 sm:py-3 bg-[#08153A] hover:bg-[#FF6600] text-white font-semibold rounded-lg shadow-sm transition-colors text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer">
            <span>Explore Service</span>
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: "consulting",
      title: "Odoo Consulting",
      category: "core",
      description:
        "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
      fullDetails:
        "Our Odoo consulting team analyzes your core business workflows, identifies operational bottlenecks, and formulates a strategic digital transformation roadmap to maximize your ROI.",
      features: [
        "Business Process Audit",
        "Gap Analysis & Architecture",
        "ROI Optimization Roadmap",
        "Best-Practice Recommendations",
      ],
      Icon: FaChartLine,
      link: "/servicesweoffer/odoo-consulting",
    },
    {
      id: "configuration",
      title: "Odoo Configuration",
      category: "core",
      description:
        "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
      fullDetails:
        "Configure Odoo modules, automated workflows, chart of accounts, access permissions, and company settings tailored precisely to your organization structure.",
      features: [
        "Workflow & Approval Rules",
        "Multi-Company & Multi-Currency",
        "Security & Role Management",
        "System Parameter Tuning",
      ],
      Icon: FaCog,
      link: "/servicesweoffer/odoo-configuration",
    },
    {
      id: "customization",
      title: "Odoo Customization",
      category: "dev",
      description:
        "Build the product you need on time with an experienced team that uses a clear and effective design process.",
      fullDetails:
        "Extend default Odoo features, create custom UI views, tailor reports, and add bespoke operational rules without breaking future upgrade paths.",
      features: [
        "Custom Module Development",
        "QWeb Report Design",
        "UI/UX & Portal Tweaks",
        "Automated Trigger Actions",
      ],
      Icon: FaPaintBrush,
      link: "/servicesweoffer/odoo-customization",
    },
    {
      id: "development",
      title: "Odoo Development",
      category: "dev",
      description:
        "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
      fullDetails:
        "Full-cycle python backend and OWL frontend development for enterprise Odoo implementations, ensuring high throughput and modular code structure.",
      features: [
        "Python / OWL Framework",
        "RESTful API Creation",
        "High Performance Queries",
        "Custom Web Addons",
      ],
      Icon: FaCode,
      link: "/servicesweoffer/odoo-development-services",
    },
    {
      id: "integration",
      title: "Odoo Integration",
      category: "dev",
      description:
        "Odoo offers a multi-dimensional solution for better organization of business functionalities through integration.",
      fullDetails:
        "Connect Odoo seamlessly with third-party payment gateways, CRM platforms, logistics carriers, e-commerce stores, and legacy ERPs via robust APIs.",
      features: [
        "Payment Gateway Connectors",
        "Shipping & Logistics APIs",
        "Biometric & IoT Sync",
        "Legacy System Bridges",
      ],
      Icon: FaPlug,
      link: "/servicesweoffer/odoo-integration",
    },
    {
      id: "ecommerce",
      title: "Odoo E-Commerce",
      category: "core",
      description:
        "The past decade witnessed a tremendous change in customers' shopping behavior and purchase patterns.",
      fullDetails:
        "Build high-converting, mobile-first B2B and B2C web stores fully synchronized in real-time with Odoo Inventory, Accounting, and CRM.",
      features: [
        "Omnichannel Storefront",
        "Real-time Stock Sync",
        "Automated Order Processing",
        "Customer Portal & Invoicing",
      ],
      Icon: FaShoppingCart,
      link: "/servicesweoffer/odoo-ecommerce",
    },
    {
      id: "support",
      title: "Odoo Support",
      category: "support",
      description:
        "Every deployment needs a support service to run business smoothly and efficiently.",
      fullDetails:
        "SLA-backed 24/7 technical and functional Odoo support to resolve bug reports, system errors, user queries, and critical production downtime immediately.",
      features: [
        "Dedicated SLA Support",
        "24/7 Monitoring & Fixes",
        "Functional Helpdesk",
        "System Performance Health Checks",
      ],
      Icon: FaHeadset,
      link: "/servicesweoffer/odoo-support",
    },
    {
      id: "implementation",
      title: "Odoo Implementation",
      category: "core",
      description:
        "Odoo Implementation is a crucial process that can leverage your business to new heights.",
      fullDetails:
        "End-to-end Odoo ERP rollout using structured agile methodology — covering data migration, user training, pilot testing, and go-live deployment.",
      features: [
        "Agile Implementation",
        "End-to-End Data Migration",
        "User Acceptance Testing",
        "Go-Live & Post-Launch Care",
      ],
      Icon: FaRocket,
      link: "/servicesweoffer/odoo-implementation",
    },
    {
      id: "migration",
      title: "Odoo Migration",
      category: "support",
      description:
        "Odoo is an open source and constantly evolving ERP system that requires seamless migration.",
      fullDetails:
        "Safely migrate your existing Odoo Community/Enterprise instance or legacy ERP database to the latest Odoo version with zero data loss.",
      features: [
        "Database Schema Upgrade",
        "Custom Code Migration",
        "Data Integrity Verification",
        "Downtime Minimization",
      ],
      Icon: FaExchangeAlt,
      link: "/servicesweoffer/odoo-migration",
    },
    {
      id: "maintenance",
      title: "Odoo Maintenance",
      category: "support",
      description:
        "Odoo provides the feasibility of planning preventive maintenance, including Mean Time Between Failure (MTBF).",
      fullDetails:
        "Proactive server maintenance, database optimization, periodic security patches, and automated backup management for uninterrupted enterprise stability.",
      features: [
        "Preventive Maintenance",
        "Server & DB Tuning",
        "Automated Daily Backups",
        "Security Patch Updates",
      ],
      Icon: FaWrench,
      link: "/servicesweoffer/odoo-maintenance",
    },
    {
      id: "offshore",
      title: "Odoo Offshore Development",
      category: "support",
      description:
        "Offshore development takes place when businesses outsource work to a partner in a different timezone region.",
      fullDetails:
        "Dedicated Odoo developer teams on demand. Scale your engineering capacity with certified Odoo developers working seamlessly with your timezone.",
      features: [
        "Dedicated Developer Staffing",
        "Timezone Alignment",
        "Transparent Sprint Tracking",
        "Cost Efficiency",
      ],
      Icon: FaGlobe,
      link: "/servicesweoffer/odoo-offshore",
    },
  ];

  // Filtered Services List
  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      activeCategory === "all" || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !gridRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gridRef.current ? gridRef.current.querySelectorAll(".service-card-item") : [];
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, [activeCategory, searchQuery]);

  return (
    <section
      ref={sectionRef}
      id="services-section"
      className="bg-white py-16 sm:py-20 md:py-24 relative overflow-hidden text-[#08153A] border-t border-[#08153A]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
            ENTERPRISE CAPABILITIES
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
            Comprehensive Odoo <span className="text-[#FF6600]">Services</span>
          </h2>

          <p className="text-sm sm:text-base text-[#08153A]/70 leading-relaxed font-normal">
            Specialized ERP consulting, implementation, custom module development, and 24/7 SLA maintenance.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 sm:mb-12 space-y-4 max-w-4xl mx-auto">
          
          {/* Search Input */}
          <div className="relative flex items-center w-full">
            <div className="absolute left-4 pointer-events-none flex items-center justify-center text-[#08153A]/50">
              <FaSearch className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search services (e.g. Consulting, Migration, E-Commerce)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-11 py-3 bg-white border border-[#08153A]/15 rounded-lg text-[#08153A] placeholder-[#08153A]/40 focus:outline-none focus:border-[#08153A] focus:ring-1 focus:ring-[#08153A] shadow-sm transition-all text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-[#08153A]/50 hover:text-[#08153A] p-1 cursor-pointer transition-colors"
                title="Clear Search"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Services", count: servicesData.length },
              {
                id: "core",
                label: "Core ERP",
                count: servicesData.filter((s) => s.category === "core").length,
              },
              {
                id: "dev",
                label: "Development & Customization",
                count: servicesData.filter((s) => s.category === "dev").length,
              },
              {
                id: "support",
                label: "Operations & Support",
                count: servicesData.filter((s) => s.category === "support").length,
              },
            ].map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                    isActive
                      ? "bg-[#08153A] text-white"
                      : "bg-white border border-[#08153A]/15 text-[#08153A]/80 hover:border-[#08153A]/40"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-[#08153A]/5 text-[#08153A]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredServices.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-[#08153A]/15 p-8 shadow-sm">
              <FaSearch className="w-8 h-8 text-[#08153A]/40 mx-auto mb-3" />
              <h3 className="text-base sm:text-lg font-bold text-[#08153A] mb-1">
                No matching Odoo services found
              </h3>
              <p className="text-[#08153A]/60 text-xs sm:text-sm mb-4">
                Try searching for a different keyword or reset category filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="px-5 py-2 bg-[#08153A] hover:bg-[#FF6600] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredServices.map((service) => (
              <ServiceCardItem
                key={service.id}
                service={service}
                onPreview={setSelectedService}
              />
            ))
          )}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#08153A] rounded-2xl p-8 sm:p-10 text-white shadow-xl border border-white/10">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ready to Implement or Upgrade Odoo?
              </h3>
              <p className="text-white/70 text-xs sm:text-sm max-w-xl font-normal">
                Discuss your business workflow requirements and receive an architectural roadmap from our solution architects.
              </p>
            </div>

            <Link href="/contactus" className="shrink-0">
              <button className="px-7 py-3.5 bg-[#FF6600] hover:opacity-90 text-white font-semibold text-sm rounded-lg shadow-md transition-all cursor-pointer">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-[#08153A]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-xl bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-[#08153A] space-y-5 max-h-[90vh] overflow-y-auto border border-[#08153A]/15"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-[#08153A]/10 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 bg-[#08153A] text-white rounded-lg flex items-center justify-center shadow-sm">
                    <selectedService.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#FF6600] uppercase tracking-wider">
                      Odoo Service Brief
                    </span>
                    <h3 className="text-xl font-bold text-[#08153A]">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-lg text-[#08153A]/50 hover:text-[#08153A] hover:bg-[#08153A]/5 transition-all cursor-pointer"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              {/* Full Details */}
              <div className="space-y-4">
                <p className="text-[#08153A]/70 text-sm leading-relaxed font-normal">
                  {selectedService.fullDetails}
                </p>

                {/* Core Features List */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#08153A] uppercase tracking-wider mb-2.5">
                    Key Deliverables & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-[#08153A]/5 border border-[#08153A]/10 text-xs text-[#08153A]/85 font-medium"
                      >
                        <FaCheckCircle className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-[#08153A]/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-lg bg-[#08153A]/5 text-[#08153A]/70 text-xs font-semibold hover:bg-[#08153A]/10 transition-all cursor-pointer"
                >
                  Close
                </button>
                <Link href={selectedService.link}>
                  <button className="px-5 py-2 rounded-lg bg-[#08153A] hover:bg-[#FF6600] text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer">
                    <span>Full Service Page</span>
                    <FaArrowRight className="w-3 h-3" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;