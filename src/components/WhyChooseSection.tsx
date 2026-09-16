'use client';

import React from 'react';
import { IndianRupee, Award, Clock, Compass, ShieldCheck, UserCheck } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const WhyChooseSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <IndianRupee className="w-5 h-5 text-[#0B389D] stroke-[2.2]" />,
      title: 'Transparent Pricing Guarantee',
      description:
        'All-inclusive, transparent quotes with zero hidden taxes or surprise charges at checkout. Unmatched value for every rupee spent.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#0B3996] stroke-[2.2]" />,
      title: 'Heritage Of Excellence Since 2007',
      description:
        'Over a decade and a half of crafting flawless itineraries with an unwavering focus on personalized hospitality and guest delight.',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#0B389D] stroke-[2.2]" />,
      title: 'Dedicated On-Tour Concierge',
      description:
        'Direct access to a personal holiday coordinator throughout your journey — from airport welcome to seamless hotel check-ins.',
    },
    {
      icon: <Compass className="w-5 h-5 text-[#0B389D] stroke-[2.2]" />,
      title: 'Tailor-Made Flexible Itineraries',
      description:
        'Every holiday is custom-sculpted. Pick your pace, preferred hotel categories, meal plans, and private chauffeur-driven vehicles.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0B389D] stroke-[2.2]" />,
      title: 'Stress-Free Booking & Protection',
      description:
        'Easy date adjustments and traveler-friendly cancellation policies, giving you total peace of mind when reserving ahead.',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#0B389D] stroke-[2.2]" />,
      title: '150+ Vetted On-Ground Specialists',
      description:
        'Our licensed regional chauffeurs, naturalists, and local coordinators ensure your vacation is safe, authentic, and memorable.',
    },
  ];

  return (
    <section id="why-us-section" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/70 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold text-[#0B389D] uppercase tracking-widest mb-2">
            THE MYHAPPYJOURNEY PROMISE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] leading-tight">
            Why Discerning Travelers Choose Us
          </h2>
          {/* Brand Red Accent Bar */}
          <div className="w-12 h-1 bg-[#FF3000] rounded-full mx-auto mt-4" />
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 border border-slate-100 flex items-start gap-4 sm:gap-5 text-left group"
            >
              {/* Left Icon Container in Light Brand Blue */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#EBF2FF] border border-[#0B389D]/15 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#dbe7ff] transition-all">
                {item.icon}
              </div>

              {/* Right Content */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] mb-1.5 group-hover:text-[#0B389D] transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#515154] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
