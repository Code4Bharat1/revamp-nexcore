import React from "react";
import Image from "next/image";
import { Award, Users, Shield, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Long Experience",
      description: "Years of expertise in Odoo Migration",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Zero Data Loss",
      description: "Secure migration without impacting data",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Team",
      description: "Consultants, developers & testers",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Smooth Process",
      description: "Rigorous business approach",
    }
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-24 overflow-hidden border-t border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>Trusted Experts</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Odoo Implementers for{" "}
              <span className="text-[#FF6600]">
                Odoo Migration
              </span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-medium">
              Odoo Implementers has long years of experience in Odoo Migration. We specialize in migrating Odoo ERP solutions to a higher version of the same. We provide service and ensure successful migration of existing ERP apps to open source without impacting data entity, functionality, or business process.
            </p>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed font-medium">
              Our team of Odoo consultants and developers, together with experienced testers and validation specialists, provide smooth data migration with their rigorous business approach.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-4 rounded-2xl border border-white/15 hover:border-[#FF6600]/40 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF6600] mb-3 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-white/70 font-medium">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group max-w-lg w-full">
              {/* Image container */}
              <div className="relative bg-white/5 p-3 rounded-3xl border border-white/15">
                <Image
                  src="/images/odoo-images/oodu-implementers-for-odoo-migration.webp"
                  alt="Odoo Migration Services"
                  width={570}
                  height={380}
                  className="rounded-2xl w-full h-auto object-cover"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-3.5 -left-3.5 bg-[#08153A] px-5 py-3 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-[#FF6600] rounded-full"></div>
                    <div>
                      <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Success Rate</p>
                      <p className="text-base font-black text-white">100%</p>
                    </div>
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