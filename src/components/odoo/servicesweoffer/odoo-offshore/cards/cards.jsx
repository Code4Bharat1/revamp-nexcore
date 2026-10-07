import React from "react";
import { CheckCircle2, Zap, Target, Users, Cloud, Shield, Lightbulb, Globe, ArrowRight } from "lucide-react";

const EcommerceBenefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-4 h-4 text-[#FF6600]" />,
      title: "Optimized Workloads"
    },
    {
      icon: <Shield className="w-4 h-4 text-[#FF6600]" />,
      title: "Minimal Risks"
    },
    {
      icon: <Target className="w-4 h-4 text-[#FF6600]" />,
      title: "Faster Launch Times"
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />,
      title: "High-Quality Products"
    },
    {
      icon: <Users className="w-4 h-4 text-[#FF6600]" />,
      title: "Access to Top Tech Talent"
    },
    {
      icon: <Globe className="w-4 h-4 text-[#FF6600]" />,
      title: "Industry Expertise"
    }
  ];

  const trends = [
    {
      icon: <Users className="w-4 h-4 text-[#FF6600]" />,
      title: "Significant use of collaborative tools"
    },
    {
      icon: <Cloud className="w-4 h-4 text-[#FF6600]" />,
      title: "Increased use of cloud services"
    },
    {
      icon: <Shield className="w-4 h-4 text-[#FF6600]" />,
      title: "Improved data security"
    },
    {
      icon: <Lightbulb className="w-4 h-4 text-[#FF6600]" />,
      title: "Demand for innovative skills"
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden border-b border-[#08153A]/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Offshore Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] mb-4">
            Why Choose{" "}
            <span className="text-[#FF6600]">
              Offshore Development
            </span>
          </h2>
          <p className="text-[#08153A]/75 text-base sm:text-lg max-w-3xl mx-auto">
            Unlock endless possibilities with expert offshore developers and stay ahead of industry trends
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Benefits */}
          <div className="bg-white rounded-xl p-8 border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#08153A]/5 border border-[#08153A]/10 flex items-center justify-center p-2">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-offshore-development-service-benefits-icon.webp"
                    alt="Offshore Benefits"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#08153A] leading-snug pt-1">
                  Benefits of Odoo Offshore Development
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#08153A]/75 leading-relaxed text-sm sm:text-base mb-6">
                The benefits of Odoo offshore developments go far and wide. The possibilities are endless with the right Odoo offshore developers by your side.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#08153A]/5 border border-[#08153A]/10"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#FF6600]/15 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <p className="text-[#08153A] font-semibold text-xs sm:text-sm">
                      {benefit.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 - Trends */}
          <div className="bg-white rounded-xl p-8 border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#08153A]/5 border border-[#08153A]/10 flex items-center justify-center p-2">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-offshore-development-trends.webp"
                    alt="Offshore Trends"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#08153A] leading-snug pt-1">
                  Odoo Offshore Development Trends
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#08153A]/75 leading-relaxed text-sm sm:text-base mb-6">
                Stay updated with the latest advancements and operational paradigms in remote engineering teams.
              </p>

              {/* Trends List */}
              <div className="space-y-3">
                {trends.map((trend, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-lg bg-[#08153A]/5 border border-[#08153A]/10"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#08153A] flex items-center justify-center text-[#FF6600]">
                      {trend.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[#08153A] font-semibold text-xs sm:text-sm">
                        {trend.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-[#08153A] rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-[#08153A] text-white shadow-xl">
          <div className="inline-flex items-center justify-center gap-2 bg-[#FF6600]/20 border border-[#FF6600]/30 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Ready to Go Offshore?</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Accelerate Your Business with Nexcore
          </h3>
          <p className="text-white/75 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to access top-tier offshore development talent and scale your enterprise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contactus"
              className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-3.5 px-8 rounded-lg shadow-md transition-all duration-300"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/servicesweoffer"
              className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300"
            >
              <span>View Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;