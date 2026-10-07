import React from "react";
import { ArrowRight, Puzzle, Zap, Shield, CheckCircle2, Target } from "lucide-react";

const EcommerceSection = () => {
  const benefits = [
    { icon: <Puzzle className="w-4 h-4" />, text: "Multi-dimensional solution" },
    { icon: <Zap className="w-4 h-4" />, text: "Single dashboard management" },
    { icon: <Shield className="w-4 h-4" />, text: "Flexible & responsive" },
    { icon: <Target className="w-4 h-4" />, text: "Tailored to your needs" }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group max-w-lg w-full">
              {/* Image container */}
              <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-[#08153A]/10">
                <img
                  src="/images/odoo-images/odoo-integration-services-oodu-implementers.jpg"
                  alt="Odoo Integration Services"
                  className="rounded-2xl w-full h-auto object-cover"
                />

                {/* Floating badge - Top */}
                <div className="absolute -top-3.5 -right-3.5 bg-[#08153A] text-white px-4 py-2.5 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-[#FF6600] rounded-xl flex items-center justify-center text-white">
                      <Puzzle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Integration</p>
                      <p className="text-xs font-black text-white">Seamless</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge - Bottom */}
                <div className="absolute -bottom-3.5 -left-3.5 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-[#08153A]/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 bg-[#FF6600] rounded-full"></div>
                    <div>
                      <p className="text-[10px] text-[#08153A]/70 font-semibold uppercase tracking-wider">Business Apps</p>
                      <p className="text-sm font-black text-[#08153A]">50+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest">
              <Puzzle className="w-3.5 h-3.5" />
              <span>End-to-End Integration</span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] leading-tight">
              Business Information on your Fingertips with{" "}
              <span className="text-[#FF6600]">Odoo Integration</span>
            </h2>

            {/* Description */}
            <p className="text-[#08153A]/80 leading-relaxed text-base font-medium">
              Odoo offers a multi-dimensional solution for better organization of business functionalities through integration services. Odoo is an open-source functionality that enables integrating Odoo with various other modules or third-party software. Odoo Integration brings the full software system to manage every business aspect from a single dashboard without limitations.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-3 py-1">
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
              Wide Range of Odoo Integration Services
            </h3>

            {/* Additional description */}
            <p className="text-[#08153A]/80 leading-relaxed text-base font-medium">
              Odoo Implementers' Odoo Integration service approach ensures that multi-enterprise applications are integrated and developed to remain flexible and responsive to changes in the business strategy. OI offers a wide range of integration services in Odoo Integrations by analyzing your unique business requirements and delivering the required Odoo services.
            </p>

            {/* Key points */}
            <div className="space-y-2.5">
              {[
                "Analyze unique business requirements",
                "Flexible and responsive integration",
                "Multi-enterprise application support"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-full flex items-center justify-center text-[#FF6600]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[#08153A] text-sm font-bold">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="/servicesweoffer"
                className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                <span>All Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#08153A]/10">
              <div className="text-center">
                <div className="text-2xl font-black text-[#FF6600] mb-0.5">
                  50+
                </div>
                <p className="text-xs text-[#08153A]/70 font-semibold uppercase tracking-wider">Integrations</p>
              </div>
              <div className="text-center border-x border-[#08153A]/10">
                <div className="text-2xl font-black text-[#08153A] mb-0.5">
                  100%
                </div>
                <p className="text-xs text-[#08153A]/70 font-semibold uppercase tracking-wider">Customizable</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-[#FF6600] mb-0.5">
                  24/7
                </div>
                <p className="text-xs text-[#08153A]/70 font-semibold uppercase tracking-wider">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;