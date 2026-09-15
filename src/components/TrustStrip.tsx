import React from 'react';
import { Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustStats = [
    {
      icon: <Users className="w-5 h-5 text-[#FF9900] shrink-0" />,
      value: '5,000+',
      label: 'Delighted Travelers',
    },
    {
      icon: <Award className="w-5 h-5 text-[#FF9900] shrink-0" />,
      value: '10+ Years',
      label: 'Hospitality Heritage',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FF9900] shrink-0" />,
      value: '150+',
      label: 'Local Tour Captains',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#FF9900] shrink-0" />,
      value: '100%',
      label: 'Customized Journeys',
    },
  ];

  return (
    <section className="bg-[#0B389D] border-y border-blue-900/60 py-4 sm:py-5 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-between">
          {trustStats.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2.5 sm:gap-3 text-center sm:text-left"
            >
              <div className="flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex items-baseline sm:items-center gap-1.5 flex-wrap justify-center sm:justify-start">
                <span className="text-[#FF9900] font-black text-base sm:text-lg lg:text-xl tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-slate-100 text-xs sm:text-sm font-medium leading-none tracking-tight">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
