"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCogs,
  FaThLarge,
  FaIndustry,
  FaCompass,
  FaChevronRight,
} from "react-icons/fa";

const FooterLinks = () => {
  const linksSectionRef = useRef(null);
  const cardsGridRef = useRef(null);

  const servicesLinks = [
    { name: "Odoo Consulting", path: "/servicesweoffer/odoo-consulting" },
    { name: "Odoo Configuration", path: "/servicesweoffer/odoo-configuration" },
    { name: "Odoo Customization", path: "/servicesweoffer/odoo-customization" },
    { name: "Odoo Development", path: "/servicesweoffer/odoo-development-services" },
    { name: "Odoo Implementation", path: "/servicesweoffer/odoo-implementation" },
    { name: "Odoo Migration", path: "/servicesweoffer/odoo-migration" },
  ];

  const appsLinks = [
    { name: "Odoo CRM", path: "/apps/odoo-crm" },
    { name: "Odoo Invoicing", path: "/apps/odoo-invoicing" },
    { name: "Odoo Sales", path: "/apps/odoo-sales" },
    { name: "Odoo E-Commerce", path: "/apps/odoo-e-commerce" },
    { name: "Odoo Point Of Sale", path: "/apps/odoo-point-of-sale" },
    { name: "Odoo Inventory", path: "/apps/odoo-inventory" },
  ];

  const industries = [
    "Capital Machinery",
    "Component Manufacturing",
    "Garment Trading",
    "Service Industry",
    "Electrical Manufacturing",
    "Logistics & Supply Chain",
  ];

  const menuItems = [
    { name: "Case Studies", path: "/casestudy" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Enterprise IT Services", path: "/services" },
    { name: "Enterprise Apps Suite", path: "/apps" },
    { name: "Client Portfolio", path: "/clients" },
  ];

  const sections = [
    {
      title: "ODOO SERVICES",
      Icon: FaCogs,
      badgeBg: "bg-[#FF6600]/20 text-[#FF6600]",
      items: servicesLinks,
      hasLinks: true,
    },
    {
      title: "ENTERPRISE APPS",
      Icon: FaThLarge,
      badgeBg: "bg-[#38bdf8]/20 text-[#38bdf8]",
      items: appsLinks,
      hasLinks: true,
    },
    {
      title: "INDUSTRIES WE CATER",
      Icon: FaIndustry,
      badgeBg: "bg-amber-500/20 text-amber-400",
      items: industries.map((name) => ({ name })),
      hasLinks: false,
    },
    {
      title: "EXPLORE NEXCORE",
      Icon: FaCompass,
      badgeBg: "bg-emerald-500/20 text-emerald-400",
      items: menuItems,
      hasLinks: true,
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || !linksSectionRef.current || !cardsGridRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardsGridRef.current,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          const cards = cardsGridRef.current ? cardsGridRef.current.querySelectorAll(".useful-link-card") : [];
          if (!cards.length) return;
          gsap.fromTo(
            cards,
            { opacity: 0, y: 35, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.1,
              ease: "power2.out",
              overwrite: "auto",
            }
          );
        },
      });
    }, linksSectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={linksSectionRef}
      className="relative bg-white py-20 sm:py-24 text-slate-900 overflow-hidden select-none border-t border-slate-200/80"
    >
      {/* ── Background Subtle Light Accents ── */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[130px] pointer-events-none" />

      {/* ── Subtle Geometric Grid Overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 21, 58, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(8, 21, 58, 0.2) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* ── Header Section ── */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08153A]/5 border border-[#08153A]/10 text-xs font-semibold tracking-wider text-[#FF6600] uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
            QUICK NAVIGATION
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] tracking-tight leading-tight mb-4">
            Useful <span className="text-[#FF6600]">Links</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Navigate through our core ERP services, enterprise modules, catered verticals, and corporate solutions.
          </p>
        </div>

        {/* ── Links Grid (Cards in Deep Navy #08153A) ── */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {sections.map((section, sectionIdx) => (
            <div
              key={sectionIdx}
              className="useful-link-card group rounded-2xl bg-[#08153A] text-white p-6 sm:p-7 border border-[#08153A] hover:border-[#FF6600]/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Section Card Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${section.badgeBg} group-hover:scale-110 transition-transform duration-200`}
                  >
                    <section.Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white tracking-wider uppercase">
                      {section.title}
                    </h3>
                  </div>
                </div>

                {/* Links List */}
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="group/item">
                      {section.hasLinks && item.path ? (
                        <Link href={item.path}>
                          <div className="flex items-center justify-between gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer text-sm font-medium py-0.5">
                            <span className="group-hover/item:text-[#FF6600] transition-colors">
                              {item.name}
                            </span>
                            <FaChevronRight className="w-2.5 h-2.5 text-slate-500 opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#FF6600] group-hover/item:translate-x-1 transition-all flex-shrink-0" />
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-center justify-between gap-2 text-slate-300 text-sm font-medium py-0.5">
                          <span className="group-hover/item:text-slate-100 transition-colors">
                            {item.name}
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>Nexcore Enterprise</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]/70" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FooterLinks;