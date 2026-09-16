'use client';

import React from 'react';
import {
  Zap,
  Clock,
  Car,
  Hotel,
  Utensils,
  Star,
} from 'lucide-react';
import { PACKAGES } from '../../../data/tourData';
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
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hczb7fxersozfdoh.public.blob.vercel-storage.com/ravi-sangar-dfB4L6PfS4w-unsplash.jpg"
          alt="Kerala Houseboat Backwaters Alleppey"
          className="w-full h-full object-cover object-center opacity-100"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=80';
          }}
        />
        {/* Cinematic Dual Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Value Proposition */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Kerala Government Registered Tour Operator</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Authentic <span className="text-[#FF4B00]">Kerala Tour</span> Packages
              </h1>
              <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed max-w-xl">
                Experience God&apos;s Own Country with premium houseboats, tea-hill resorts, and private AC cab transfers. Fully customizable itineraries tailored for you.
              </p>
            </div>

            {/* Quick Value Points */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-lg">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0B3996]/80 flex items-center justify-center shrink-0">
                  <Hotel className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Handpicked 3★/4★</div>
                  <div className="text-[10px] text-gray-300">Verified Luxury Resorts</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF4B00]/80 flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Private AC Cabs</div>
                  <div className="text-[10px] text-gray-300">Dedicated Chauffeur</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/80 flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Daily Breakfast</div>
                  <div className="text-[10px] text-gray-300">+ All Houseboat Meals</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/80 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">24/7 On-Trip Support</div>
                  <div className="text-[10px] text-gray-300">Dedicated Trip Manager</div>
                </div>
              </div>
            </div>

            {/* Social Proof Rating */}
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
                  2,100+ Happy Travelers
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Authoritative CRM Lead Form */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white text-gray-900 rounded-3xl p-5 sm:p-7 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-0 bg-[#0B3996] text-white text-[10px] sm:text-xs font-black px-3.5 py-1 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Zap className="w-3 h-3 text-yellow-300 fill-yellow-300 animate-pulse" />
                <span>10-MIN QUOTE</span>
              </div>

              <CrmLeadForm
                destination="Kerala"
                durations={KERALA_DURATION_OPTIONS}
                selectedDuration={selectedDuration}
                formTitle="Get Your Free Kerala Quote"
                formSubtitle="Customized Itinerary • Verified Hotels • Prompt Callback"
                submitButtonText="Get My Free Kerala Quote"
                badgeText="Instant Kerala Quote"
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
