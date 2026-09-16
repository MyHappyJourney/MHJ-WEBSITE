'use client';

import React from 'react';
import { ArrowRight, Phone, Sparkles, Star } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE } from '../data/tourData';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('destinations-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero-section" className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex items-center justify-center overflow-hidden text-center select-none font-sans">
      
      {/* Background Tropical Landscape with Atmospheric Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hczb7fxersozfdoh.public.blob.vercel-storage.com/ravi-sangar-dfB4L6PfS4w-unsplash.jpg"
          alt="Lush tropical coastline and tranquil beach destination"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Soft cinematic Navy blue gradient overlay matching #0B2545 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071F3D]/80 via-[#0B2545]/65 to-[#071F3D]/90 pointer-events-none" />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:py-24 flex flex-col items-center justify-center">
        
        {/* 1. Pill Badge: VERIFIED TRAVEL SPECIALIST SINCE 2007 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white text-xs sm:text-[13px] font-semibold tracking-wide border border-white/20 shadow-lg mb-6 sm:mb-8 transition-all">
          <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
          <span>BESPOKE HOLIDAYS SINCE 2007 · 4.9★ RATED</span>
        </div>

        {/* 2. Main SEO-Rich Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-4 sm:mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
          Discover The Soul Of India <br />
          <span className="text-[#FF9900] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            Tailored Just For You
          </span>
        </h1>

        {/* 3. Subtitle with strong SEO keywords */}
        <p className="text-base sm:text-lg md:text-xl text-slate-100 font-normal max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Immersive Kerala backwaters, Munnar tea hills, and custom luxury holidays designed by dedicated destination architects.
        </p>

        {/* 4. Action Buttons (Centered Row) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-12">
          
          {/* Explore Packages Button (Brand Vermilion Red #FF3000) */}
          <button
            onClick={handleExplore}
            id="hero-explore-packages-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF3000] hover:bg-[#e02b00] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer tracking-tight"
          >
            <span>Explore Tour Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Phone Button (Translucent glass) */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            id="hero-phone-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md active:scale-[0.98] text-white font-bold text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all tracking-tight"
          >
            <Phone className="w-4 h-4 text-[#FF9900] fill-[#FF9900]" />
            <span>Speak with a Travel Expert</span>
          </a>

        </div>

        {/* 5. Social Proof Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-200">
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Traveler avatar"
              className="w-7 h-7 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Traveler avatar"
              className="w-7 h-7 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Traveler avatar"
              className="w-7 h-7 rounded-full border-2 border-white object-cover"
            />
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <span className="font-bold text-white">5,000+ Journeys</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#FF9900] font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              4.9/5 Rating
            </span>
            <span>·</span>
            <span className="text-slate-300">100% Tailored Itineraries</span>
          </div>
        </div>

      </div>

    </section>
  );
};
