'use client';

import React from 'react';
import { Phone, Compass } from 'lucide-react';
import { PHONE_NUMBER } from '../data/tourData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { triggerWhatsAppModal } from '../utils/whatsappModal';

interface StickyMobileCTAProps {
  onExploreClick?: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onExploreClick }) => {
  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const elem = document.getElementById('destinations-section');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerWhatsAppModal({
      destination: 'Holiday Tours',
    });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl p-2 px-3 h-[66px] flex items-center justify-between gap-2 font-sans">
      
      {/* 1. CALL NOW Button in Brand Blue */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1 h-11 bg-[#0B389D] hover:bg-[#082a72] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs"
        id="sticky-call-btn"
      >
        <Phone className="w-3.5 h-3.5 fill-white" />
        <span className="text-[11px] font-bold">Call Us</span>
      </a>

      {/* 2. EXPLORE DESTINATIONS Button in Brand Red */}
      <button
        onClick={handleExplore}
        className="flex-[1.4] h-11 bg-[#FF3000] active:bg-[#e02b00] text-white font-black text-xs rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md cursor-pointer"
        id="sticky-explore-btn"
      >
        <Compass className="w-3.5 h-3.5 text-white" />
        <span className="text-[11px] font-black uppercase tracking-tight">Packages</span>
      </button>

      {/* 3. WHATSAPP Button */}
      <button
        onClick={handleWhatsApp}
        className="flex-1 h-11 bg-[#25D366] active:bg-[#1fbd58] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs cursor-pointer border-none"
        id="sticky-whatsapp-btn"
      >
        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
        <span className="text-[11px] font-bold">WhatsApp</span>
      </button>

    </div>
  );
};

