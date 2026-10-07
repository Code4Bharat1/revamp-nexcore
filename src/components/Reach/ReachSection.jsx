"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { locations } from "@/data/reach";
import { countrySubLocations } from "@/data/countryLocations";
import { CountryOfficesView } from "./CountryOfficesView";

const InteractiveGlobe = dynamic(
  () => import("./InteractiveGlobe").then((m) => m.InteractiveGlobe),
  { ssr: false }
);

export const ReachSection = () => {
  const [activeLocId, setActiveLocId] = useState("ae");
  const [inView, setInView] = useState(false);
  const [detailedCountryCode, setDetailedCountryCode] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { rootMargin: "300px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const officeLocations = locations.filter(
    (l) => l.kind === "hq" || l.kind === "branch"
  );
  const servedLocations = locations.filter((l) => l.kind === "served");

  const handleCountryClick = (loc) => {
    if (activeLocId === loc.id) {
      if (countrySubLocations[loc.code]) {
        setDetailedCountryCode(loc.code);
      }
    } else {
      setActiveLocId(loc.id);
    }
  };

  const renderMainView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
      {/* Left: 3D Interactive Earth Globe */}
      <div className="lg:col-span-6 relative h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[480px] flex items-center justify-center">
        {inView ? (
          <InteractiveGlobe
            activeLocationId={activeLocId}
            onSelectLocation={(id) => {
              setActiveLocId(id);
              const loc = locations.find((l) => l.id === id);
              if (loc && countrySubLocations[loc.code]) {
                setDetailedCountryCode(loc.code);
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-44 h-44 rounded-full border border-blue-500/20 bg-blue-950/20 animate-pulse" />
          </div>
        )}
      </div>

      {/* Right: Office Tiles + Served Markets */}
      <div className="lg:col-span-6 space-y-3.5">
        {/* Global & Regional Offices Box */}
        <div className="bg-[#0b1c47]/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-blue-400/25 shadow-[0_20px_50px_rgba(4,10,26,0.6)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00f2ff]" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Global & Regional Offices (6)
            </h4>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {officeLocations.map((loc) => {
              const isSelected = activeLocId === loc.id;
              const isHQ = loc.kind === "hq";
              const hasDetails = !!countrySubLocations[loc.code];

              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => handleCountryClick(loc)}
                  className={`text-left p-3 rounded-xl border transition-all duration-300 cursor-pointer ${isSelected
                    ? "bg-[#00c8ff]/20 border-[#00f2ff] text-white shadow-[0_0_20px_rgba(0,242,255,0.3)] scale-[1.01]"
                    : "bg-[#0e2358]/80 border-blue-300/10 text-white/90 hover:bg-[#132f75] hover:border-blue-400/40"
                    }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white">
                      {loc.country}
                    </span>
                    {isHQ ? (
                      <span className="text-[9px] font-bold uppercase bg-[#00f2ff] text-[#08153a] px-2 py-0.5 rounded-full">
                        HQ
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase text-slate-300">
                        Office
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 mt-1.5">
                    <span className={isSelected ? "text-white font-medium" : ""}>
                      {loc.city}
                    </span>
                    <span
                      className={`text-[10.5px] px-2 py-0.5 rounded-md ${isSelected
                        ? "bg-[#00f2ff]/25 text-[#00f2ff] font-bold"
                        : "bg-white/10 text-slate-300"
                        }`}
                    >
                      {isSelected
                        ? hasDetails
                          ? "View Locations →"
                          : "● Focused"
                        : "Focus Pin"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Served Markets Box */}
        <div className="bg-[#0b1c47]/80 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-blue-400/20 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full border border-sky-400" />
              <h4 className="text-[11.5px] font-bold text-white uppercase tracking-wider">
                Served Markets (No Listed Office)
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {servedLocations.map((loc) => {
                const isSelected = activeLocId === loc.id;
                const hasDetails = !!countrySubLocations[loc.code];
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => handleCountryClick(loc)}
                    className={`text-xs px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${isSelected
                      ? "bg-[#00c8ff]/25 border-[#00f2ff] text-white shadow-[0_0_12px_rgba(0,242,255,0.35)] font-semibold"
                      : "bg-[#0e2358]/90 border-blue-300/15 text-slate-200 hover:bg-[#132f75] hover:border-sky-400/50"
                      }`}
                  >
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse" />
                    )}
                    <span>
                      {loc.country} ({loc.city})
                    </span>
                    {isSelected && hasDetails && (
                      <span className="ml-1 text-[#00f2ff] font-bold">
                        → View
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const selectedCountryDetails = detailedCountryCode
    ? locations.find((l) => l.code === detailedCountryCode)
    : null;

  return (
    <section
      ref={sectionRef}
      id="reach"
      className="relative w-full bg-[#08153a] text-white py-12 md:py-16 lg:py-20 overflow-hidden border-t border-blue-900/40 flex items-center justify-center"
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Header Title */}
        <div className="mb-6 lg:mb-8 text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3">
            {detailedCountryCode && selectedCountryDetails ? (
              `Offices in ${selectedCountryDetails.country}`
            ) : (
              <>
                Eight countries Six offices
                <br />
                One <span className="text-orange-600">Operating System</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            {detailedCountryCode && selectedCountryDetails
              ? `Explore our regional branches and locations across ${selectedCountryDetails.country}.`
              : "Headquartered in Mumbai, with unified branch teams across the GCC and global served markets."}
          </p>
        </div>

        {detailedCountryCode &&
          selectedCountryDetails &&
          countrySubLocations[detailedCountryCode] ? (
          <CountryOfficesView
            countryName={selectedCountryDetails.country}
            locations={countrySubLocations[detailedCountryCode]}
            onBack={() => setDetailedCountryCode(null)}
          />
        ) : (
          renderMainView()
        )}
      </div>
    </section>
  );
};

export default ReachSection;

