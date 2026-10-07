import React from "react";
import { Award, Users, Shield, MessageSquare, Star, CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "10+ Years Experience",
      description: "Proven expertise",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "High Coding Standards",
      description: "Quality guaranteed",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Transparent Communication",
      description: "Clear & streamlined",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Team",
      description: "Technical mastery",
    }
  ];

  const keyPoints = [
    "Technical expertise in all Odoo modules",
    "High coding standard services",
    "Transparent process at every stage",
    "Streamlined communication workflow"
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-24 overflow-hidden border-t border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest">
              <Star className="w-3.5 h-3.5" />
              <span>10+ Years of Excellence</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Why Choose{" "}
              <span className="text-[#FF6600]">
                Odoo Implementers
              </span>{" "}
              for Odoo Integration
            </h2>

            {/* Description */}
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-medium">
              With a legacy of over 10 years, Odoo Implementers functions with technical expertise in all Odoo modules and delivers high coding standard services. We stand out from our competitors with our transparency and streamlined communication at every stage of the process.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 py-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-5 rounded-2xl border border-white/15 hover:border-[#FF6600]/40 transition-all duration-300"
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

            {/* Key Points Checklist */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/15">
              <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                <span>What Sets Us Apart</span>
              </h3>
              <div className="space-y-2.5">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-4 h-4 bg-[#FF6600]/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-[#FF6600]" />
                    </div>
                    <p className="text-white/90 text-sm font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a href="/contact">
                <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                  <span>Partner With Us</span>
                  <Award className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group max-w-lg w-full">
              {/* Image container */}
              <div className="relative bg-white/5 p-3 rounded-3xl border border-white/15">
                <img
                  src="/images/odoo-images/odoo-integration-modules-and-services.webp"
                  alt="Odoo Integration Modules and Services"
                  className="rounded-2xl w-full h-auto object-cover"
                />

                {/* Floating badge - Top */}
                <div className="absolute -top-3.5 -right-3.5 bg-[#08153A] px-4 py-2.5 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-[#FF6600] rounded-full"></div>
                    <div>
                      <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Experience</p>
                      <p className="text-xs font-black text-white">10+ Years</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge - Bottom */}
                <div className="absolute -bottom-3.5 -left-3.5 bg-[#08153A] px-4 py-2.5 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-[#FF6600] rounded-full"></div>
                    <div>
                      <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Success Rate</p>
                      <p className="text-sm font-black text-white">100%</p>
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