import React from 'react';
import { FaProjectDiagram, FaCog, FaUserShield, FaClock, FaHeadset, FaDatabase, FaComments, FaCode, FaFileAlt, FaLightbulb, FaCloudUploadAlt, FaWrench, FaLifeRing, FaGlobe, FaBolt, FaChartLine, FaRocket, FaMap } from 'react-icons/fa';

const EcommerceBenefits = () => {
  const highlights = [
    { icon: FaProjectDiagram, text: "Project Management" },
    { icon: FaCog, text: "Configuration Support" },
    { icon: FaUserShield, text: "Full Account Management" },
    { icon: FaClock, text: "Time & Materials Management" },
    { icon: FaHeadset, text: "24/7 Helpdesk Support" },
    { icon: FaDatabase, text: "Data Import Assistance" },
    { icon: FaComments, text: "Consulting Services" },
    { icon: FaCode, text: "Code Development" },
    { icon: FaFileAlt, text: "Reports & Workflows" },
    { icon: FaLightbulb, text: "Technical Guidance" }
  ];

  const services = [
    { icon: FaCloudUploadAlt, text: "Installation & Upgrade Support" },
    { icon: FaWrench, text: "Configuration Support" },
    { icon: FaLifeRing, text: "Operational Support" },
    { icon: FaGlobe, text: "Global Tax & Legal Updates" },
    { icon: FaBolt, text: "Immediate Critical Response" },
    { icon: FaChartLine, text: "Maximize ROI on Odoo ERP" },
    { icon: FaRocket, text: "Proactive Support Services" },
    { icon: FaMap, text: "Strategic Roadmap Services" }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-4">
            <FaHeadset className="text-sm" />
            <span>Support Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] mb-4">
            Comprehensive <span className="text-[#FF6600]">Odoo Support</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Highlights */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#08153A] rounded-2xl flex items-center justify-center text-[#FF6600]">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-technical-support-specialist-icon.png"
                  alt="Support Highlights"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#08153A] leading-tight">
                Highlights of Odoo Support
              </h3>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#08153A]/[0.02] border border-[#08153A]/10 hover:border-[#FF6600]/30 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white">
                      <Icon className="text-sm" />
                    </div>
                    <p className="text-[#08153A] text-xs sm:text-sm font-bold">{highlight.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2 - Services */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#08153A] rounded-2xl flex items-center justify-center text-[#FF6600]">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-technical-support-specialist-icon.png"
                  alt="Support Services"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#08153A] leading-tight">
                Odoo Support Services
              </h3>
            </div>

            {/* Description */}
            <div className="mb-4 p-4 bg-[#08153A]/[0.02] rounded-xl border border-[#08153A]/10 border-l-4 border-l-[#FF6600]">
              <p className="text-[#08153A]/80 text-xs sm:text-sm leading-relaxed font-medium">
                <strong className="text-[#08153A]">Odoo Implementers</strong> work closely with clients to ensure seamless and uninterrupted business flow. Our eminent support system takes business to great heights.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#08153A]/[0.02] border border-[#08153A]/10 hover:border-[#FF6600]/30 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#08153A] flex items-center justify-center text-[#FF6600]">
                      <Icon className="text-sm" />
                    </div>
                    <p className="text-[#08153A] text-xs sm:text-sm font-bold">{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;