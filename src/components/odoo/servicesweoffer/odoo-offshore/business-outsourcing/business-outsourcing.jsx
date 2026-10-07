import React from "react";
import { ArrowRight, Globe, Code, Users, Zap, CheckCircle2, Clock } from "lucide-react";

const OffshoreDevelopment = () => {
  const benefits = [
    { icon: <Code className="w-4 h-4 text-[#FF6600]" />, text: "Custom Development" },
    { icon: <Users className="w-4 h-4 text-[#FF6600]" />, text: "Expert Team" },
    { icon: <Zap className="w-4 h-4 text-[#FF6600]" />, text: "Fast Delivery" },
    { icon: <Clock className="w-4 h-4 text-[#FF6600]" />, text: "24/7 Support" }
  ];

  const capabilities = [
    "Building custom software solutions",
    "Implementation and integration",
    "Ongoing support and maintenance",
    "Comprehensive testing services"
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden border-b border-[#08153A]/10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 sm:px-12 lg:px-24 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative bg-white p-3 rounded-2xl border border-[#08153A]/10 shadow-lg">
            <img
              src="/images/odoo-images/best-odoo-offshore-development-services.jpg"
              alt="Offshore Development Services"
              className="rounded-xl w-full h-auto object-cover"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#08153A] text-white px-5 py-3.5 rounded-xl border border-white/15 shadow-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6600]/20 border border-[#FF6600]/30 flex items-center justify-center text-[#FF6600]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium">Global Reach</p>
                  <p className="text-xl font-bold text-[#FF6600]">24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-start">
            <Globe className="w-3.5 h-3.5" />
            <span>Business Outsourcing Services</span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] leading-tight">
            Boost up Company Growth with the{" "}
            <span className="text-[#FF6600]">
              Best Odoo Offshore Development Services
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#08153A]/75 leading-relaxed text-base">
            Offshore development takes place when businesses outsource work to a partner in a different timezone region. Hiring offshore development services is a great solution for projects that require expertise and high-quality deliverables. Odoo Implementers take up Odoo Offshore Development to deliver a variety of tasks that range from basic coding to the development of custom software with support and maintenance.
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 gap-3 py-1">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#08153A]/10 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#08153A]/5 border border-[#08153A]/10 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#08153A]">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Subheading */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#08153A] pt-2">
            Odoo Offshore Development Service
          </h3>

          {/* Additional description */}
          <p className="text-[#08153A]/75 leading-relaxed text-base">
            Offshore developers at Odoo Implementers bind technical and soft skills with in-depth experience to handle various components like building, implementation, support and testing. Our workers work from a remote location and bring a fresh perspective to the table with an innovative set of skills to approach your projects.
          </p>

          {/* Capabilities list */}
          <div className="space-y-2.5">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF6600]/15 flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6600]" />
                </div>
                <p className="text-[#08153A]/85 text-sm font-medium">
                  {capability}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="/servicesweoffer"
              className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-3.5 px-8 rounded-lg shadow-md transition-all duration-300"
            >
              <span>All Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#08153A]/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FF6600] mb-1">
                100+
              </div>
              <p className="text-xs text-[#08153A]/70 font-medium">Projects</p>
            </div>
            <div className="text-center border-x border-[#08153A]/10">
              <div className="text-2xl font-bold text-[#08153A] mb-1">
                50+
              </div>
              <p className="text-xs text-[#08153A]/70 font-medium">Developers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FF6600] mb-1">
                98%
              </div>
              <p className="text-xs text-[#08153A]/70 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffshoreDevelopment;