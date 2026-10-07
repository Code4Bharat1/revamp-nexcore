"use client";
import React from "react";
import { FaTimes, FaCheckCircle, FaAward, FaLightbulb, FaArrowRight } from "react-icons/fa";

const ClientDetailModal = ({ client, onClose }) => {
  if (!client) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          className="p-8 relative"
          style={{ backgroundColor: client.color }}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:rotate-90 active:scale-95"
            onClick={onClose}
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-inner">
              <client.Icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-1">
                {client.industry}
              </div>
              <h3 className="text-3xl font-bold text-white leading-tight">
                {client.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 space-y-8">
          {/* Main Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#1f2937] mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" />
                  The Challenge
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {client.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1f2937] mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Our Solution
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {client.solution}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 space-y-4 h-fit border border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 uppercase">Project Metrics</h4>
              <div className="space-y-4">
                {client.impact.map((item, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-black" style={{ color: client.color }}>
                      {item.metric}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 relative">
            <div className="absolute top-4 right-4 opacity-10">
              <FaAward className="w-12 h-12 text-[#1e40af]" />
            </div>
            <p className="text-lg italic text-[#1e3a8a] font-medium leading-relaxed mb-4">
              "{client.testimonial}"
            </p>
            <div className="font-bold text-[#1f2937]">
              {client.testimonialAuthor}
            </div>
          </div>

          {/* Details & Tech */}
          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Core Deliverables</h4>
              <ul className="space-y-2">
                {client.details.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: client.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Technologies Used</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {client.details.technologiesUsed}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button
            className="w-full sm:w-auto px-10 py-4 text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            style={{ backgroundColor: client.color }}
            onClick={onClose}
          >
            Close Case Study
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ClientDetailModal;
