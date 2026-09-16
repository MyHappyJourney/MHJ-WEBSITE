'use client';

import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { DOMESTIC_DESTINATIONS } from '../data/destinations';

interface DestinationsSectionProps {
  onSelectDestination?: (destName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onSelectDestination }) => {
  const handleDestinationClick = (name: string) => {
    if (onSelectDestination) {
      onSelectDestination(name);
      return;
    }
    const elem = document.getElementById('packages-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations-section" className="py-16 sm:py-24 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B389D] uppercase tracking-widest mb-2">
            <Compass className="w-4 h-4 text-[#0B389D]" />
            <span>CURATED INDIAN EXPEDITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] leading-tight mb-3">
            Top Domestic Destinations
          </h2>
          <p className="text-sm sm:text-base text-[#515154] font-normal leading-relaxed max-w-2xl mx-auto">
            From the serene palm-fringed canals of Kerala to misty tea highlands — each itinerary is tailored from scratch to your travel style.
          </p>

          {/* Brand Red Accent Bar */}
          <div className="w-12 h-1 bg-[#FF3000] rounded-full mx-auto mt-4" />
        </div>

        {/* Destination Cards Container */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-7 max-w-5xl mx-auto">
          {DOMESTIC_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleDestinationClick(dest.name)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 w-full sm:w-[320px] md:w-[340px] aspect-[3/4] cursor-pointer bg-slate-900 border border-gray-100 select-none"
            >
              {/* Background Photo */}
              <img
                src={dest.image}
                alt={dest.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent transition-opacity duration-300 group-hover:from-slate-950/95" />

              {/* Top Tag Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block bg-[#FF3000] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {dest.tag}
                </span>
              </div>

              {/* Bottom Content Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white flex flex-col justify-end">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 text-white group-hover:text-[#FF9900] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-4 font-normal leading-snug">
                  {dest.subtitle}
                </p>

                {/* Duration & Explore button */}
                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <span className="text-xs font-semibold text-slate-300">
                    {dest.duration || 'Custom Nights'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF9900] group-hover:text-white transition-colors">
                    <span>View Itineraries</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
