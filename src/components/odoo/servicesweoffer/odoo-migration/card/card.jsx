import React from "react";
import { CheckCircle2, Database, RefreshCw, Code, Server, Workflow } from "lucide-react";

const EcommerceBenefits = () => {
  const benefits1 = [
    {
      icon: <Database className="w-4 h-4" />,
      title: "Backup the legacy system",
      description: "to sustain the data on the server of Odoo ERP",
    },
    {
      icon: <Workflow className="w-4 h-4" />,
      title: "Deploy a test lab or pilot project",
      description: "to evaluate Odoo ERP",
    },
    {
      icon: <Code className="w-4 h-4" />,
      title: "Migrate the modules",
      description: "and re-create modules that no longer exist or that were custom-made",
    }
  ];

  const benefits2 = [
    {
      icon: <RefreshCw className="w-4 h-4" />,
      title: "Integration and enhancement",
      description: "of legacy systems with new Odoo ERP Internet-driven technologies and ERP version Odoo Migration Service",
    },
    {
      icon: <Server className="w-4 h-4" />,
      title: "Odoo Migration of systems",
      description: "to new architecture, languages, databases and web-based environments",
    },
    {
      icon: <CheckCircle2 className="w-4 h-4" />,
      title: "Migrating to new operating environment",
      description: "Re-enabling, re-hosting and re-engineering, Web Enablement, Application Upgradation",
    }
  ];

  const BenefitCard = ({ title, benefits, mainIcon }) => (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-shrink-0 w-16 h-16 bg-[#08153A] rounded-2xl flex items-center justify-center text-[#FF6600]">
          <img
            src={mainIcon}
            alt="Service Icon"
            className="w-10 h-10 object-contain"
          />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#08153A] leading-tight">
          {title}
        </h3>
      </div>

      {/* Benefits List */}
      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#08153A]/[0.02] border border-[#08153A]/10 hover:border-[#FF6600]/30 transition-all duration-200"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white mt-0.5">
              {benefit.icon}
            </div>
            <div>
              <p className="text-[#08153A] font-bold text-sm mb-0.5">
                {benefit.title}
              </p>
              <p className="text-[#08153A]/70 text-xs font-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Migration Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] mb-4">
            Our migration services are <span className="text-[#FF6600]">instrumental for</span>
          </h2>
          <p className="text-[#08153A]/70 text-base sm:text-lg max-w-3xl mx-auto font-medium">
            Comprehensive solutions to modernize and migrate your business applications seamlessly
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <BenefitCard
            title="Legacy System Migration"
            benefits={benefits1}
            mainIcon="/images/odoo-images/odoo-icons/odoo-migration-service-for-business-application-to-stategic-platforms.webp"
          />

          <BenefitCard
            title="System Transformation"
            benefits={benefits2}
            mainIcon="/images/odoo-images/odoo-icons/odoo-migration-service-icon.png"
          />
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-14">
          <div className="text-center bg-[#08153A] rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-black text-[#FF6600] mb-1">
              500+
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">Successful Migrations</p>
          </div>
          <div className="text-center bg-[#08153A] rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-black text-white mb-1">
              100%
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">Data Integrity</p>
          </div>
          <div className="text-center bg-[#08153A] rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-black text-[#FF6600] mb-1">
              24/7
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;