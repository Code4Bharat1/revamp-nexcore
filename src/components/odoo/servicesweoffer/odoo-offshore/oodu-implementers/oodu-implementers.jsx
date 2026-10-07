import React from "react";
import { Award, Zap, Target, Star, CheckCircle2, Clock, Globe } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-5 h-5 text-[#FF6600]" />,
      title: "Gold Partner",
      description: "Certified Odoo expert"
    },
    {
      icon: <Zap className="w-5 h-5 text-[#FF6600]" />,
      title: "Innovative Tech",
      description: "Latest technologies"
    },
    {
      icon: <Target className="w-5 h-5 text-[#FF6600]" />,
      title: "Result-Driven",
      description: "Quality obsessed"
    },
    {
      icon: <Clock className="w-5 h-5 text-[#FF6600]" />,
      title: "Fast Delivery",
      description: "Quick time-to-market"
    }
  ];

  const benefits = [
    "Innovative technologies for growth",
    "Expedited time-to-market delivery",
    "Customer-focused offshore development",
    "Any skillset, complexity, and scale",
    "Quality-obsessed development team",
    "Proven client satisfaction record"
  ];

  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-24 overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5" />
              <span>Gold Partner Status</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              <span className="text-[#FF6600]">
                Odoo Implementers
              </span>{" "}
              for Odoo Offshore Development
            </h2>

            {/* Description */}
            <p className="text-white/75 text-base sm:text-lg leading-relaxed">
              Odoo Implementers, a leading Gold partner of Odoo, use innovative technologies to amplify our clients' growth ambitions and expedite time-to-market. We are a team of result-driven and quality-obsessed Odoo offshore developers determined to deliver a customer-outsourced Odoo software development to meet any skillset, complexity and scale.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 py-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 hover:border-[#FF6600]/40 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits Checklist */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                <span>Why Choose Us</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#FF6600]/20 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-[#FF6600]" />
                    </div>
                    <p className="text-white/85 text-xs sm:text-sm font-medium leading-relaxed">
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
                <span>Start Your Project</span>
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative bg-white/5 p-3 rounded-2xl border border-white/10 shadow-xl w-full max-w-lg">
              <img
                src="/images/odoo-images/oodu-implementers-for-odoo-offshore-development.jpg"
                alt="Odoo Offshore Development"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Floating badge - Top */}
              <div className="absolute -top-4 -right-4 bg-[#08153A] text-white px-4 py-2.5 rounded-xl border border-white/15 shadow-xl hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6600]/20 flex items-center justify-center text-[#FF6600]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/70 font-medium">Development</p>
                    <p className="text-xs font-bold text-white">Offshore</p>
                  </div>
                </div>
              </div>

              {/* Floating badge - Bottom */}
              <div className="absolute -bottom-4 -left-4 bg-[#08153A] text-white px-4 py-2.5 rounded-xl border border-white/15 shadow-xl hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF6600]"></div>
                  <div>
                    <p className="text-[10px] text-white/70 font-medium">Satisfaction Rate</p>
                    <p className="text-sm font-bold text-[#FF6600]">100%</p>
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