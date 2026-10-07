"use client";

import React, { useState } from "react";

export const CountryOfficesView = ({ countryName, locations, onBack }) => {
  const [selectedLoc, setSelectedLoc] = useState(null);

  return (
    <div className="w-full h-[540px] sm:h-[600px] bg-[#0b1c47]/95 backdrop-blur-xl rounded-2xl border border-blue-400/25 shadow-[0_20px_50px_rgba(4,10,26,0.6)] flex overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-1/3 min-w-[260px] flex flex-col border-r border-blue-400/20 bg-[#08153a]/80">
        <div className="p-5 sm:p-6 border-b border-blue-400/20">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white hover:text-[#00f2ff] transition-colors"
          >
            <span>&lt;</span> {countryName}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {locations.map((loc) => {
            const isSelected = selectedLoc?.id === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLoc(loc)}
                className={`w-full text-left p-5 sm:p-6 border-b border-blue-400/10 transition-colors duration-300 ${
                  isSelected
                    ? "bg-[#00c8ff]/15 text-[#00f2ff] font-bold border-l-4 border-l-[#00f2ff]"
                    : "text-slate-300 hover:bg-white/5 border-l-4 border-l-transparent"
                }`}
              >
                {loc.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Content Area (Map Visualization & Address Details) */}
      <div className="flex-1 relative bg-[#08153a] overflow-hidden">
        {/* Real OpenStreetMap Background */}
        <div className="absolute inset-0">
          {(() => {
            const centerLoc = selectedLoc || locations[0];
            if (!centerLoc) return null;

            const lat = centerLoc.lat;
            const lng = centerLoc.lng;
            // Bounding box for zoom level
            const offset = 0.05;
            const bbox = `${lng - offset},${lat - offset},${lng + offset},${
              lat + offset
            }`;
            const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

            return (
              <iframe
                title="Office Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={mapUrl}
                style={{
                  filter: "hue-rotate(180deg) invert(90%) opacity(0.8)",
                }}
              />
            );
          })()}
        </div>

        {/* Selected Location Address Popup */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-start justify-start pointer-events-none">
          {selectedLoc ? (
            <div className="mt-6 ml-6 sm:mt-8 sm:ml-8 max-w-md bg-[#08153a]/95 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-blue-400/30 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {selectedLoc.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {selectedLoc.address}
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    selectedLoc.address || selectedLoc.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#00f2ff] text-[#08153a] text-xs font-bold rounded-lg hover:bg-white transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="bg-[#08153a]/90 backdrop-blur-md px-6 py-3.5 rounded-xl border border-blue-400/20 text-slate-300 italic shadow-xl pointer-events-auto text-sm">
                Select a location from the list to view details
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryOfficesView;
