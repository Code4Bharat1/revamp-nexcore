import React from "react";
import { Wrench, TrendingDown, Clock, BarChart3, CheckCircle2, Zap } from "lucide-react";

const OdooModuleConfiguration = () => {
  const features = [
    {
      icon: <Clock className="w-5 h-5 text-[#FF6600]" />,
      title: "MTBF Tracking",
      description: "Mean Time Between Failure analysis"
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#FF6600]" />,
      title: "MTTR Monitoring",
      description: "Mean Time To Repair optimization"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#FF6600]" />,
      title: "Predictive Analytics",
      description: "Expected next failure predictions"
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden border-b border-[#08153A]/10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-6 sm:px-12 lg:px-24 items-center">
        {/* Left Section - Image */}
        <div className="order-2 lg:order-1 relative">
          <div className="relative bg-white p-3 rounded-2xl border border-[#08153A]/10 shadow-lg">
            <img
              src="/images/odoo-images/business-with-odoo-maintenance-management.jpg"
              alt="Odoo Maintenance Management"
              className="rounded-xl w-full h-auto object-cover"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#08153A] text-white px-6 py-4 rounded-xl border border-white/15 shadow-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6600]/20 border border-[#FF6600]/30 flex items-center justify-center text-[#FF6600]">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium">Downtime Reduced</p>
                  <p className="text-xl font-bold text-[#FF6600]">-85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="flex flex-col justify-center order-1 lg:order-2 space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-start">
            <Wrench className="w-3.5 h-3.5" />
            <span>Maintenance Services</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] leading-tight">
            Reduce Downturn for your Business with{" "}
            <span className="text-[#FF6600]">
              Odoo Maintenance
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#08153A]/75 text-base sm:text-lg leading-relaxed">
            Odoo provides the feasibility of planning preventive maintenance, including Mean Time Between Failure (MTBF), Mean Time To Repair (MTTR) and expected next failure data. Odoo Maintenance automates metrology and preventive maintenance scheduling.
          </p>

          {/* Smart solution badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#08153A] text-white px-5 py-3 rounded-lg text-sm font-semibold border border-[#08153A] self-start">
            <Zap className="w-4 h-4 text-[#FF6600]" />
            <span>A smart solution for smart manufacturers</span>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300 shadow-sm hover:shadow-md"
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

          {/* Benefits list */}
          <div className="space-y-2.5 pt-2">
            {[
              "Automated preventive maintenance scheduling",
              "Real-time equipment monitoring and alerts",
              "Comprehensive maintenance history tracking"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF6600]/15 flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6600]" />
                </div>
                <p className="text-[#08153A]/85 text-sm font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="/contactus"
              className="inline-flex items-center gap-3 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-3.5 px-8 rounded-lg shadow-md transition-all duration-300"
            >
              <span>Learn More</span>
              <Wrench className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OdooModuleConfiguration;