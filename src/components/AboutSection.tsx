'use client';

import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE } from '../data/tourData';

interface AboutSectionProps {
  onLearnMoreClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  const handleLearnMore = () => {
    if (onLearnMoreClick) {
      onLearnMoreClick();
    } else {
      window.history.pushState({}, '', '/about-us');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section id="about-section" className="py-16 sm:py-24 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Key Proof Points */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-bold text-[#0B389D] uppercase tracking-widest mb-3">
              ABOUT MYHAPPYJOURNEY
            </p>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1D1D1F] tracking-[-0.03em] leading-[1.15] mb-6">
              Curating Meaningful Journeys Across India Since 2007
            </h2>

            {/* Narrative Paragraph 1 */}
            <p className="text-sm sm:text-base text-[#515154] leading-relaxed mb-4 font-normal">
              Headquartered with active operational hubs across <strong className="text-[#1D1D1F] font-bold">Bangalore &amp; Cochin</strong>, MyHappyJourney was founded on a core principle: travel is about deep cultural connection, rest, and shared joy — not cookie-cutter sightseeing buses.
            </p>

            {/* Narrative Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#515154] leading-relaxed mb-8 font-normal">
              With our <strong className="text-[#1D1D1F] font-bold">150+ regional tour captains and hospitality partners</strong>, we craft private, customized vacations for couples, multi-generation families, and private groups looking for memorable stays and authentic hospitality.
            </p>

            {/* 2x2 Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-9">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0B389D] shrink-0 stroke-[2.2]" />
                <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                  10+ Years of Tour Excellence
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0B389D] shrink-0 stroke-[2.2]" />
                <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                  150+ Vetted Ground Coordinators
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0B389D] shrink-0 stroke-[2.2]" />
                <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                  Custom Day-Wise Itineraries
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0B389D] shrink-0 stroke-[2.2]" />
                <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                  Transparent Best Price Promise
                </span>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 bg-[#0B389D] hover:bg-[#082a72] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-sm hover:shadow transition-all cursor-pointer tracking-tight"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 text-[#0B389D] hover:text-[#082a72] font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-[#0B389D]/20 hover:bg-blue-50/40 transition-colors"
              >
                <span>Call {DISPLAY_PHONE}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Imagery with Floating Trust Badges */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-900 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
                alt="Panoramic mountain highway and winding landscapes of India"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-white/60 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#FF3000]" />
                <span className="text-xs sm:text-sm font-bold text-[#1D1D1F]">
                  Govt. Registered Tour Operator
                </span>
              </div>

              {/* Bottom Floating Rating Card */}
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B389D] flex items-center justify-center text-white font-extrabold text-sm">
                  4.9★
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#1D1D1F]">Guest Satisfaction</div>
                  <div className="text-[11px] text-gray-500">Based on 5,000+ Journeys</div>
                </div>
              </div>
            </div>

            {/* Hub Badge */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#FF3000]" />
              <span>Dedicated Guest Hospitality Hubs in Bengaluru &amp; Kochi</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
