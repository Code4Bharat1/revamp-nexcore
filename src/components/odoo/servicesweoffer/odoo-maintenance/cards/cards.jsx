import React from "react";
import { Zap, TrendingUp, CheckCircle2, Settings, ArrowRight } from "lucide-react";

const EcommerceBenefits = () => {
  const card1Benefits = [
    { icon: <Zap className="w-4 h-4 text-[#FF6600]" />, text: "Real-time activity updates" },
    { icon: <TrendingUp className="w-4 h-4 text-[#FF6600]" />, text: "Reduced downtime" },
    { icon: <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />, text: "Improved manufacturing" }
  ];

  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-24 overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Settings className="w-3.5 h-3.5" />
            <span>Key Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose{" "}
            <span className="text-[#FF6600]">
              Odoo Maintenance
            </span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
            Comprehensive maintenance solutions that drive efficiency and optimize your equipment performance
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#08153A] rounded-xl p-8 border border-white/10 hover:border-[#FF6600]/50 transition-all duration-300 flex flex-col justify-between shadow-md">
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-maintenance-service-for-effective-equipment.png"
                    alt="Efficient Maintenance"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug pt-1">
                  Efficient Maintenance for Effective Equipment
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                Maintenance forms an integral part of the equipment operation. The manufacturing sector can trigger maintenance requests directly from the work center control panel. Odoo Maintenance enables real-time updating of maintenance team activities.
              </p>

              {/* Benefits Pills */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {card1Benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg"
                  >
                    {benefit.icon}
                    <span className="text-xs sm:text-sm font-medium text-white/90">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#08153A] rounded-xl p-8 border border-white/10 hover:border-[#FF6600]/50 transition-all duration-300 flex flex-col justify-between shadow-md">
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
                  <img
                    src="/images/odoo-images/odoo-icons/maintenance2.png"
                    alt="Optimize Performance"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug pt-1">
                  Optimize your Performance With Odoo Maintenance
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                Odoo Customization offers a wide range of services to enhance business growth. Odoo Customization serves the following purposes:
              </p>

              {/* Feature List */}
              <div className="space-y-2.5 mb-6">
                {[
                  "Streamline maintenance workflows and processes",
                  "Integrate with existing business operations",
                  "Customize maintenance schedules and alerts",
                  "Generate detailed maintenance reports"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#FF6600]/20 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-[#FF6600]" />
                    </div>
                    <p className="text-white/85 text-sm font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learn More Link */}
            <div>
              <a
                href="/servicesweoffer"
                className="inline-flex items-center gap-2 text-[#FF6600] font-bold text-sm hover:underline"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-[#08153A] border border-white/15 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Optimize Your Maintenance?
          </h3>
          <p className="text-white/75 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Get started with Odoo Maintenance today and experience the difference
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contactus"
              className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/servicesweoffer"
              className="inline-flex items-center gap-2 bg-transparent border border-white/25 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;