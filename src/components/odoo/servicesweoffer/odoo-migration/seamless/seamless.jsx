import React from "react";
import { ArrowRight, Zap, Shield, RefreshCw, CheckCircle2 } from "lucide-react";

const EcommerceSections = () => {
  const benefits = [
    { icon: <Zap className="w-4 h-4" />, text: "Regular Updates" },
    { icon: <Shield className="w-4 h-4" />, text: "Zero Downtime" },
    { icon: <RefreshCw className="w-4 h-4" />, text: "Seamless Process" },
    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Expert Support" }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-[#08153A]/10 w-full max-w-lg group">
              <img
                src="/images/odoo-images/odoo-migration-service-for-business.jpg"
                alt="Odoo Migration Services"
                className="rounded-2xl w-full h-auto object-cover"
              />

              {/* Floating stats badge */}
              <div className="absolute -bottom-3.5 -right-3.5 bg-[#08153A] text-white px-5 py-3 rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6600] rounded-xl flex items-center justify-center text-white">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Migrations Done</p>
                    <p className="text-xl font-black text-white">500+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5" />
              <span>Seamless & Hassle Free Migration</span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] leading-tight">
              Modernise your Business App to Strategic Platforms with{" "}
              <span className="text-[#FF6600]">
                Odoo Migration
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#08153A]/80 leading-relaxed text-base font-medium">
              Odoo is an open source and constantly evolving ERP system. Odoo tools are updated regularly to match the global race and acquire customers and increased revenue. Odoo delivers modernized and efficient IT systems with the right mix of existing and new Odoo ERP Internet-driven technologies. Reuse and modernize your time-tested business applications to strategic platforms with Odoo Implementers' Odoo Migration Services.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-3 py-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-[#08153A] rounded-lg flex items-center justify-center text-[#FF6600] flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#08153A]">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Subheading */}
            <h3 className="text-xl sm:text-2xl font-black text-[#08153A] pt-2">
              Odoo Migration Services
            </h3>

            {/* Additional description */}
            <p className="text-[#08153A]/80 leading-relaxed text-base font-medium">
              Experts at Odoo Implementers deliver seamless Odoo Migration and execute any level of Odoo migration query. We deploy successful Odoo migrations with a process flow and support. We analyze the existing system and updating with the new Odoo versions. Odoo upgrades its versions frequently in a year and implements new features and processes. OI ensures to keep your system to be up to date all the time for smooth business operations.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a href="/servicesweoffer">
                <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                  <span>All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSections;