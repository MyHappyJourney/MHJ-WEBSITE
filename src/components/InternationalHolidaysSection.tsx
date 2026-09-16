'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { INTERNATIONAL_DESTINATIONS, InternationalDestinationItem } from '../data/destinations';

interface InternationalHolidaysSectionProps {
  onCardClick?: (destination: InternationalDestinationItem) => void;
}

export const InternationalHolidaysSection: React.FC<InternationalHolidaysSectionProps> = ({
  onCardClick,
}) => {
  const handleCardClick = (dest: InternationalDestinationItem) => {
    if (onCardClick) {
      onCardClick(dest);
    }
  };

  return (
    <section
      id="international-holidays-section"
      className="py-16 sm:py-20 lg:py-24 bg-[#F2F6FB] border-b border-gray-100 select-none font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B389D] uppercase tracking-widest mb-2">
            <Globe className="w-4 h-4 text-[#0B389D]" />
            <span>GLOBAL GETAWAYS &amp; ESCAPES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] leading-tight mb-3">
            Curated International Vacations
          </h2>

          <p className="text-sm sm:text-base text-[#515154] font-normal leading-relaxed max-w-2xl mx-auto">
            Venture across Southeast Asia and exotic island paradises with end-to-end visa guidance, luxury resort stays, and private sightseeing.
          </p>

          {/* Brand Red Accent Indicator Line */}
          <div className="w-12 h-1 bg-[#FF3000] rounded-full mx-auto mt-4" />
        </div>

        {/* 5 Cards Row: Singapore, Malaysia, Thailand, Vietnam, Bali */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-7xl mx-auto">
          {INTERNATIONAL_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleCardClick(dest)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[3/4] cursor-pointer bg-slate-900 border border-gray-100 flex flex-col justify-end"
            >
              <img
                src={dest.image}
                alt={dest.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:from-slate-950/95" />

              <div className="relative z-10 p-5 text-left text-white">
                <h3 className="text-xl font-extrabold text-white group-hover:text-[#FF9900] transition-colors tracking-tight">
                  {dest.name}
                </h3>
                <p className="text-xs text-slate-300 font-normal mt-1 line-clamp-2">
                  {dest.subtitle}
                </p>
                <div className="mt-3 inline-flex items-center text-[11px] font-bold text-[#FF9900] group-hover:text-white transition-colors">
                  <span>Custom Packages →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
