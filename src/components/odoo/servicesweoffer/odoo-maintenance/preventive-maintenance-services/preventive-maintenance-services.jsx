import React from "react";
import { ArrowRight, Wrench, AlertTriangle, Calendar, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: "/images/odoo-images/odoo-icons/odoo-preventive-maintenance-service.png",
      title: "Preventive Maintenance",
      description: "Trigger and schedule maintenance requests automatically based on KPIs",
      lucideIcon: <Wrench className="w-5 h-5 text-[#FF6600]" />
    },
    {
      icon: "/images/odoo-images/odoo-icons/odoo-corrective-maintenance-management.png",
      title: "Corrective Maintenance",
      description: "Plan corrective maintenance directly from the control center panel",
      lucideIcon: <AlertTriangle className="w-5 h-5 text-[#FF6600]" />
    },
    {
      icon: "/images/odoo-images/odoo-icons/odoo-maintenance-management-calendar.png",
      title: "Calendar",
      description: "Schedule maintenance operations with the factory calendar",
      lucideIcon: <Calendar className="w-5 h-5 text-[#FF6600]" />
    },
    {
      icon: "/images/odoo-images/odoo-icons/odoo-maintenance-service-statistics.png",
      title: "Statistics",
      description: "Compute the maintenance statistics - MTBF",
      lucideIcon: <BarChart3 className="w-5 h-5 text-[#FF6600]" />
    }
  ];

  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-24 overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>Our Services</span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Best Odoo{" "}
              <span className="text-[#FF6600]">
                Configuration Services
              </span>
            </h2>
          </div>

          {/* All Services Button */}
          <a
            href="/servicesweoffer"
            className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex-shrink-0"
          >
            <span>All Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#08153A] rounded-xl p-6 border border-white/10 hover:border-[#FF6600]/50 transition-all duration-300 flex flex-col items-center text-center shadow-md hover:shadow-xl group"
            >
              {/* Icon container */}
              <div className="mb-6 relative w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-3 group-hover:bg-white/10 transition-colors duration-300">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
                <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-md bg-[#08153A] border border-white/15 flex items-center justify-center">
                  {service.lucideIcon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2.5 flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#FF6600] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center border-t border-white/10 pt-10">
          <p className="text-white/80 text-lg mb-6">
            Need a custom solution?{" "}
            <span className="font-bold text-[#FF6600]">
              We're here to help!
            </span>
          </p>
          <div className="flex justify-center">
            <a
              href="/contactus"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;