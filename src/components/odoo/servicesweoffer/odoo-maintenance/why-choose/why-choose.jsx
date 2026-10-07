import React from "react";
import { Award, Users, Clock, Zap, CheckCircle2, Star } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-5 h-5 text-[#FF6600]" />,
      title: "Gold Partner",
      description: "Certified Odoo partner"
    },
    {
      icon: <Users className="w-5 h-5 text-[#FF6600]" />,
      title: "Expert Team",
      description: "Proficient developers"
    },
    {
      icon: <Clock className="w-5 h-5 text-[#FF6600]" />,
      title: "24/7 Support",
      description: "Round the clock assistance"
    },
    {
      icon: <Zap className="w-5 h-5 text-[#FF6600]" />,
      title: "Smart Solution",
      description: "Hassle-free maintenance"
    }
  ];

  const benefits = [
    "Automated equipment performance elevation",
    "Robust technology implementation",
    "Smart manufacturing solutions",
    "Hassle-free maintenance service",
    "Round-the-clock process assistance",
    "Smooth functioning guarantee"
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden border-b border-[#08153A]/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5" />
              <span>Gold Partner Status</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] leading-tight">
              Why Choose{" "}
              <span className="text-[#FF6600]">
                Odoo Implementers
              </span>{" "}
              for Odoo Maintenance
            </h2>

            {/* Description */}
            <p className="text-[#08153A]/75 text-base sm:text-lg leading-relaxed">
              Odoo Maintenance automates and elevates your equipment performance with robust technology. Odoo Implementers, a reliable Gold partner of Odoo Maintenance, functions with a team of proficient code developers to cater to your business needs.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 py-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#08153A]/5 border border-[#08153A]/10 flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-[#08153A] text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#08153A]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits Checklist */}
            <div className="bg-[#08153A]/5 rounded-xl p-6 border border-[#08153A]/10">
              <h3 className="font-bold text-[#08153A] text-base mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                <span>What We Provide</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#FF6600]/15 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-[#FF6600]" />
                    </div>
                    <p className="text-[#08153A]/85 text-xs sm:text-sm font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="/contactus"
                className="inline-flex items-center gap-3 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-3.5 px-8 rounded-lg shadow-md transition-all duration-300"
              >
                <span>Partner With Us</span>
                <Award className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative bg-white p-3 rounded-2xl border border-[#08153A]/10 shadow-lg w-full max-w-lg">
              <img
                src="/images/odoo-images/odoo-maintenance-services.webp"
                alt="Odoo Maintenance Services"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Floating badge - Top */}
              <div className="absolute -top-4 -right-4 bg-[#08153A] text-white px-4 py-2.5 rounded-xl border border-white/15 shadow-xl hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF6600]"></div>
                  <div>
                    <p className="text-[10px] text-white/70 font-medium">Partner Status</p>
                    <p className="text-xs font-bold text-white">Gold Certified</p>
                  </div>
                </div>
              </div>

              {/* Floating badge - Bottom */}
              <div className="absolute -bottom-4 -left-4 bg-[#08153A] text-white px-4 py-2.5 rounded-xl border border-white/15 shadow-xl hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF6600]"></div>
                  <div>
                    <p className="text-[10px] text-white/70 font-medium">Client Satisfaction</p>
                    <p className="text-sm font-bold text-[#FF6600]">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;