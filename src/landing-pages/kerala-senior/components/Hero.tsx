'use client';

import React from 'react';
import {
  Zap,
  Clock,
  Car,
  Hotel,
  Utensils,
  Star,
  ShieldCheck,
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
          alt="Kerala Senior Citizen Tour Backwaters"
          className="w-full h-full object-cover object-center opacity-100"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-teal-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md border border-teal-400/30 rounded-full px-3.5 py-1.5 text-xs font-semibold text-teal-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300 animate-pulse" />
              <span>Specially Designed for Senior Citizens &amp; Elders</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Comfortable <span className="text-teal-300">Kerala Senior Citizen</span> Tours
              </h1>
              <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed max-w-xl">
                Ground-floor resort rooms with elevators, relaxed itineraries without tiring journeys, courteous drivers, and 24/7 care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-lg">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-700/80 flex items-center justify-center shrink-0">
                  <Hotel className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Accessible Stays</div>
                  <div className="text-[10px] text-gray-300">Elevator / Ground Floor</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF4B00]/80 flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Gentle AC Cabs</div>
                  <div className="text-[10px] text-gray-300">Smooth &amp; Patient Drivers</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/80 flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Mild &amp; Custom Food</div>
                  <div className="text-[10px] text-gray-300">Fresh Vegetarian/Non-Veg</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/80 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Leisurely Pace</div>
                  <div className="text-[10px] text-gray-300">Ample Rest Breaks</div>
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
                  980+ Seniors &amp; Families Satisfied
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="bg-white text-gray-900 rounded-3xl p-5 sm:p-7 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-700 text-white text-[10px] sm:text-xs font-black px-3.5 py-1 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Zap className="w-3 h-3 text-yellow-300 fill-yellow-300 animate-pulse" />
                <span>SENIOR CARE</span>
              </div>

              <CrmLeadForm
                destination="Kerala Senior Citizen Tours"
                durations={KERALA_DURATION_OPTIONS}
                selectedDuration={selectedDuration}
                formTitle="Get Your Senior Citizen Tour Quote"
                formSubtitle="Customized for maximum comfort, safety, and relaxed pace"
                submitButtonText="Get Senior Tour Quote"
                badgeText="Senior Citizen Package"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// synchronized export

export default Hero;
