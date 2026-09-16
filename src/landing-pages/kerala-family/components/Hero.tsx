'use client';

import React from 'react';
import {
  Zap,
  Clock,
  Car,
  Hotel,
  Utensils,
  Star,
  Users,
} from 'lucide-react';
import { PACKAGES } from '../data/tourData';
import { KERALA_DURATION_OPTIONS } from '../../../constants/crm';
import { CrmLeadForm } from '../../../components/CrmLeadForm';

interface HeroProps {
  onQuoteClick?: () => void;
  preselectedPackageId?: string;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, preselectedPackageId }) => {
  const selectedPkg = PACKAGES.find((p) => p.id === preselectedPackageId);
  const selectedDuration = selectedPkg
    ? KERALA_DURATION_OPTIONS.find((d) => d.includes(`${selectedPkg.nights}N`)) ||
      KERALA_DURATION_OPTIONS[2]
    : KERALA_DURATION_OPTIONS[2];

  return (
    <section id="hero-section" className="relative bg-slate-900 text-white overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hczb7fxersozfdoh.public.blob.vercel-storage.com/ravi-sangar-dfB4L6PfS4w-unsplash.jpg"
          alt="Kerala Family Tour Backwaters Alleppey"
          className="w-full h-full object-cover object-center opacity-100"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-indigo-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 rounded-full px-3.5 py-1.5 text-xs font-semibold text-indigo-200 shadow-xs">
              <Users className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Kid-Friendly &amp; Senior-Friendly Family Holidays</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Memorable <span className="text-amber-400">Kerala Family</span> Tour Packages
              </h1>
              <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed max-w-xl">
                Relaxed travel pace, private Innova/Ertiga cabs, kid-friendly resorts with pools, and exclusive family houseboat cruises.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-lg">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/80 flex items-center justify-center shrink-0">
                  <Hotel className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Family Rooms &amp; Suites</div>
                  <div className="text-[10px] text-gray-300">Spacious &amp; Safe</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF4B00]/80 flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Spacious AC Vehicles</div>
                  <div className="text-[10px] text-gray-300">Innova / Ertiga / Tempo</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/80 flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Kid-Friendly Food</div>
                  <div className="text-[10px] text-gray-300">Fresh &amp; Hygienic Meals</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/80 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Stress-Free Pace</div>
                  <div className="text-[10px] text-gray-300">No Rushed Sightseeing</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-white font-black text-sm">4.9</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-300 font-medium border-l border-white/20 pl-2">
                  1,420+ Happy Families
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="bg-white text-gray-900 rounded-3xl p-5 sm:p-7 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-700 text-white text-[10px] sm:text-xs font-black px-3.5 py-1 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Zap className="w-3 h-3 text-yellow-300 fill-yellow-300 animate-pulse" />
                <span>FAMILY SPECIAL</span>
              </div>

              <CrmLeadForm
                destination="Kerala Family Tours"
                durations={KERALA_DURATION_OPTIONS}
                selectedDuration={selectedDuration}
                formTitle="Get Your Kerala Family Tour Quote"
                formSubtitle="Customized for parents, children, and seniors • Private AC vehicle"
                submitButtonText="Get Family Tour Quote"
                badgeText="Kerala Family Package"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// synchronized export
