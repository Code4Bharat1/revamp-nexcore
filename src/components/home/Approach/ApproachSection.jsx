"use client";
import React from "react";
import Image from "next/image";
import { 
  FaComments, 
  FaCode, 
  FaRocket, 
  FaChartLine 
} from "react-icons/fa";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Understanding Your Needs",
    description:
      "At NEXCORE ALLIANCE LLP, we begin every project with a consultation to align our solutions with your business objectives and technology needs.",
    icon: FaComments,
    color: "#1e40af", // Solid blue
  },
  {
    id: 2,
    title: "Customized Development",
    description:
      "Our client-centered development process is flexible, allowing us to customize our approach for projects ranging from simple websites to complex enterprise applications.",
    icon: FaCode,
    color: "#f97316", // Solid orange
  },
  {
    id: 3,
    title: "Agile Methodology",
    description:
      "We employ an agile development methodology to stay adaptable to changes in project scope, enabling incremental progress and allowing for your feedback throughout the process.",
    icon: FaRocket,
    color: "#3b82f6", // Solid bright blue
  },
  {
    id: 4,
    title: "Continuous Improvement",
    description:
      "We provide ongoing post-launch support, maintenance, and continuous improvement to keep your web platforms and IT infrastructure up-to-date and efficient as your business evolves.",
    icon: FaChartLine,
    color: "#1e3a8a", // Solid dark blue
  },
];

const ApproachSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#08153a] text-white py-10 sm:py-14 lg:py-16 relative overflow-hidden flex items-center justify-center">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-16 left-16 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-orange-300 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f97316]/20 border border-[#f97316]/30 mb-2.5">
                <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse" />
                <span className="text-xs text-orange-200 font-bold uppercase tracking-wider">
                  How it Works?
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black leading-tight tracking-tight">
                Our Process{" "}
                <span className="text-[#f97316]">
                  Workflow
                </span>
              </h2>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-3 sm:space-y-3.5">
              {steps.map((step, idx) => (
                <div
                  key={step.id}
                  className="group relative"
                >
                  {/* Connecting line (except for last item) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden sm:block absolute left-5 sm:left-6 top-12 w-0.5 h-6 bg-white/20" />
                  )}

                  <div className="flex gap-3.5 sm:gap-4 items-start">
                    {/* Icon Circle */}
                    <div
                      className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: step.color }}
                    >
                      <div 
                        className="absolute inset-0 opacity-40 blur-md rounded-xl"
                        style={{ backgroundColor: step.color }}
                      />
                      
                      <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white relative z-10" />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-white border border-[#f97316] rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#08153a] shadow-sm">
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-0.5 group-hover:text-[#f97316] transition-colors leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-blue-100/80 leading-relaxed text-xs sm:text-[13px] line-clamp-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <Link 
                href="/contactus"
                className="px-6 py-2.5 sm:px-7 sm:py-3 bg-[#f97316] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md hover:bg-[#ea580c] hover:shadow-lg transition-all duration-200 inline-flex justify-center items-center hover:-translate-y-0.5 active:scale-95"
              >
                Start Your Project →
              </Link>
            </div>
          </div>

          {/* Right Section - Image with floating stats */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[#3b82f6]/20 blur-2xl rounded-3xl scale-95 pointer-events-none" />

            {/* Main image container */}
            <div className="relative w-full max-w-sm sm:max-w-md bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src="/images/approach.png"
                  alt="Approach Workflow"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08153a]/40 to-transparent" />
              </div>
            </div>

            {/* Floating stat card - Top Right */}
            <div className="absolute -top-3 sm:-top-5 -right-2 sm:-right-4 bg-[#3b82f6] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 cursor-default">
              <div className="text-xl sm:text-2xl font-black text-white leading-none mb-0.5">329+</div>
              <div className="text-[10px] sm:text-[11px] text-blue-100 uppercase tracking-wider font-bold">Projects Done</div>
            </div>

            {/* Floating stat card - Bottom Left */}
            <div className="absolute -bottom-3 sm:-bottom-5 -left-2 sm:-left-4 bg-[#f97316] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 cursor-default">
              <div className="text-xl sm:text-2xl font-black text-white leading-none mb-0.5">94%</div>
              <div className="text-[10px] sm:text-[11px] text-orange-100 uppercase tracking-wider font-bold">Client Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;