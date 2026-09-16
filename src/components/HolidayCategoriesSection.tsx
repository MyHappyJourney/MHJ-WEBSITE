'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Users, Briefcase, Crown, Mountain, Compass, ArrowRight, X } from 'lucide-react';
import { DOMESTIC_DESTINATIONS, DestinationCardItem } from '../data/destinations';

interface HolidayCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  image: string;
}

interface HolidayCategoriesSectionProps {
  onSelectDestination?: (destName: string, categoryId?: string) => void;
}

export const HolidayCategoriesSection: React.FC<HolidayCategoriesSectionProps> = ({
  onSelectDestination,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<HolidayCategory | null>(null);

  const categories: HolidayCategory[] = [
    {
      id: 'honeymoon',
      title: 'Romantic & Honeymoon',
      subtitle: 'Secluded retreats & candlelit cruises',
      icon: <Heart className="w-5 h-5 text-white fill-white" />,
      image: 'https://hczb7fxersozfdoh.public.blob.vercel-storage.com/picnu-N8HuJRTKUSA-unsplash.jpg',
    },
    {
      id: 'family',
      title: 'Family Holiday Escapes',
      subtitle: 'Spacious stays & multi-generational fun',
      icon: <Users className="w-5 h-5 text-white" />,
      image: 'https://hczb7fxersozfdoh.public.blob.vercel-storage.com/images%20%283%29.jpeg',
    },
    {
      id: 'group',
      title: 'Group Tours',
      subtitle: 'Seamless private coaches & group bonding',
      icon: <Briefcase className="w-5 h-5 text-white" />,
      image: 'https://hczb7fxersozfdoh.public.blob.vercel-storage.com/chatt.png',
    },
    {
      id: 'senior',
      title: 'Senior Citizen Tours',
      subtitle: 'Comfortable paced itineraries & caring support',
      icon: <Crown className="w-5 h-5 text-white" />,
      image: 'https://hczb7fxersozfdoh.public.blob.vercel-storage.com/chat.png',
    },
    {
      id: 'adventure',
      title: 'Trekking & Nature Adventures',
      subtitle: 'Wildlife trails, cascades & mountain passes',
      icon: <Mountain className="w-5 h-5 text-white" />,
      image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'educational',
      title: 'Experiential Cultural Tours',
      subtitle: 'Tea garden heritage, folklore & cuisine',
      icon: <Compass className="w-5 h-5 text-white" />,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCategory(null);
      }
    };
    if (selectedCategory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCategory]);

  const handleDestinationPick = (dest: DestinationCardItem) => {
    const catId = selectedCategory?.id;
    setSelectedCategory(null);
    if (onSelectDestination) {
      onSelectDestination(dest.name, catId);
      return;
    }
    const elem = document.getElementById('packages-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="holiday-categories-section" className="py-16 sm:py-24 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold text-[#0B389D] uppercase tracking-widest mb-2">
            DESIGNED FOR YOUR TRAVEL STYLE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] leading-tight mb-3">
            Holidays for Every Traveler
          </h2>
          <p className="text-sm sm:text-base text-[#515154] font-normal leading-relaxed max-w-2xl mx-auto">
            Whether you're planning a honeymoon, a family vacation, or a school excursion — we have the perfect itinerary.
          </p>

          {/* Brand Red Accent Bar */}
          <div className="w-12 h-1 bg-[#FF3000] rounded-full mx-auto mt-4" />
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[16/10] sm:aspect-[4/3] cursor-pointer bg-slate-900 border border-gray-100 flex flex-col justify-end"
            >
              <img
                src={cat.image}
                alt={cat.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:from-slate-950/95" />

              <div className="relative z-10 p-6 flex flex-col justify-end text-left">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/20 group-hover:bg-[#FF3000] transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#FF9900] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                  {cat.subtitle}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#FF9900] group-hover:text-white transition-colors">
                  <span>View Suitable Itineraries</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for selecting destinations in category */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-left mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B389D]">
                Recommended Destinations
              </span>
              <h3 className="text-2xl font-extrabold text-[#1D1D1F] mt-1">
                {selectedCategory.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Select a destination below to explore tailored tour itineraries and packages.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DOMESTIC_DESTINATIONS.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => handleDestinationPick(dest)}
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-gray-200 hover:border-[#0B389D] hover:bg-blue-50/50 transition-all cursor-pointer group"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="text-left flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 group-hover:text-[#0B389D] truncate">
                      {dest.name}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">{dest.subtitle}</p>
                    <span className="text-[11px] font-semibold text-[#FF3000] mt-0.5 inline-block">
                      {dest.duration || 'Flexible Nights'}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0B389D] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
