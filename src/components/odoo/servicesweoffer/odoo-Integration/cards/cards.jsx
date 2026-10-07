import React from "react";
import { CheckCircle2, Zap, Puzzle, TrendingUp, Smile, ShoppingCart, DollarSign, Truck, Wrench, Package, CreditCard } from "lucide-react";

const EcommerceBenefits = () => {
  const perks = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Highly Customizable",
      description: "Tailored to your needs",
    },
    {
      icon: <Puzzle className="w-5 h-5" />,
      title: "Completely Modular",
      description: "Flexible architecture",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Advanced Technology",
      description: "Latest updates",
    },
    {
      icon: <Smile className="w-5 h-5" />,
      title: "User Friendly",
      description: "Intuitive interface",
    }
  ];

  const services = [
    {
      icon: <ShoppingCart className="w-4 h-4" />,
      title: "E-Commerce Integration",
    },
    {
      icon: <DollarSign className="w-4 h-4" />,
      title: "Accounting Integration",
    },
    {
      icon: <Truck className="w-4 h-4" />,
      title: "Logistics Integration",
    },
    {
      icon: <Wrench className="w-4 h-4" />,
      title: "Utility Integration",
    },
    {
      icon: <Package className="w-4 h-4" />,
      title: "Shipping Integration",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Payment Gateway Integration",
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-4">
            <Puzzle className="w-3.5 h-3.5" />
            <span>Integration Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] mb-4">
            Powerful <span className="text-[#FF6600]">Odoo Integration</span> Solutions
          </h2>
          <p className="text-[#08153A]/70 text-base sm:text-lg max-w-3xl mx-auto font-medium">
            Seamlessly connect your business operations with our comprehensive integration services
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Perks */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#08153A] rounded-2xl flex items-center justify-center text-[#FF6600]">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-integration-services-icon.png"
                  alt="Integration Services"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#08153A] leading-tight">
                Perks of Odoo Integration Services
              </h3>
            </div>

            {/* Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#08153A]/[0.02] border border-[#08153A]/10 hover:border-[#FF6600]/30 transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-9 h-9 bg-[#08153A] rounded-lg flex items-center justify-center text-[#FF6600]">
                    {perk.icon}
                  </div>
                  <div>
                    <p className="text-[#08153A] font-bold text-sm mb-0.5">
                      {perk.title}
                    </p>
                    <p className="text-[#08153A]/70 text-xs font-medium">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 - Services */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#08153A] rounded-2xl flex items-center justify-center text-[#FF6600]">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-integration-api-for-business-icon.png"
                  alt="Integration API"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#08153A] leading-tight">
                Various Integration Services We Offer
              </h3>
            </div>

            {/* Services List */}
            <div className="space-y-2.5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#08153A]/[0.02] border border-[#08153A]/10 hover:border-[#FF6600]/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <p className="text-[#08153A] font-bold text-sm">
                      Odoo {service.title}
                    </p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-14 text-center bg-[#08153A] rounded-3xl p-8 sm:p-12 border border-white/10 max-w-4xl mx-auto text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#FF6600] rounded-xl flex items-center justify-center text-white">
              <Puzzle className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to Integrate Your Business?
            </h3>
          </div>
          <p className="text-white/70 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
            Let's connect your systems and streamline your operations with seamless Odoo integrations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <button className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                <span>Start Integration</span>
                <Zap className="w-4 h-4" />
              </button>
            </a>
            <a href="/servicesweoffer">
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-[#08153A] border border-white/20 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base">
                <span>View All Services</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;