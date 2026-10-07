"use client";
import React from "react";
import Image from "next/image";
import { FaTimes, FaCheckCircle, FaArrowRight, FaClock } from "react-icons/fa";

const ApproachDetailModal = ({ step, onClose }) => {
  if (!step) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#0b1739] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden animate-scale-up text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="p-6 sm:p-8 relative border-b border-white/10"
          style={{
            background: `linear-gradient(135deg, ${step.color}33, #0b1739 80%)`,
          }}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:rotate-90 active:scale-95"
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-5 sm:gap-6">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${step.color}, ${step.accentColor})`,
                boxShadow: `0 10px 30px -5px ${step.glowColor}`,
              }}
            >
              <step.Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-md" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-mono font-bold tracking-wider mb-2">
                <span style={{ color: step.accentColor }}>[{step.stepNumber}]</span>
                <span className="text-white/40">•</span>
                <span className="text-slate-200 flex items-center gap-1.5">
                  <FaClock className="w-3 h-3" style={{ color: step.accentColor }} />
                  {step.duration}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {step.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h4
                  className="text-xs font-mono font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
                  style={{ color: step.accentColor }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: step.accentColor }} />
                  Overview
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  {step.details}
                </p>
              </div>

              <div>
                <h4
                  className="text-xs font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                  style={{ color: step.accentColor }}
                >
                  <FaCheckCircle className="text-emerald-400" />
                  Key Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {step.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10 font-medium"
                    >
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: step.accentColor }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {step.imgSrc && (
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/40">
                <Image
                  src={step.imgSrc}
                  alt={step.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1739] via-transparent to-transparent opacity-80" />
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-[#070f27] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
            NEXCORE ALLIANCE PROCESS LIFECYCLE
          </span>

          <button
            className="w-full sm:w-auto px-8 py-3.5 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 hover:brightness-110"
            style={{
              background: `linear-gradient(135deg, ${step.color}, ${step.accentColor})`,
              boxShadow: `0 8px 25px -5px ${step.glowColor}`,
            }}
            onClick={onClose}
          >
            <span>Continue Workflow</span>
            <FaArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-scale-up {
          animation: scaleUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ApproachDetailModal;
