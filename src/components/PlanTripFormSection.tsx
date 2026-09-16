'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { KERALA_DURATION_OPTIONS } from '../constants/crm';
import { CrmLeadForm } from './CrmLeadForm';

export const PlanTripFormSection: React.FC = () => {
  return (
    <section
      id="plan-trip-section"
      className="bg-[#0B2545] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden font-sans"
    >
      {/* Background Subtle Ambience Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0B389D]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF9900]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#FF9900] mb-3.5 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>Complimentary Tailored Itinerary &amp; Cost Estimation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white mb-3">
            Plan Your Bespoke Vacation Today
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Share your travel preferences and our regional vacation architect will connect with personalized hotel choices and transparent costs.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white text-[#1D1D1F] p-6 sm:p-10">
          <CrmLeadForm
            destination="Kerala"
            durations={KERALA_DURATION_OPTIONS}
            formTitle="Request Your Custom Quote"
            formSubtitle="100% Tailor-Made · Transparent Rates · Zero Obligation"
            submitButtonText="Get My Free Quote"
            badgeText="Fast Callback"
          />
        </div>
      </div>
    </section>
  );
};
