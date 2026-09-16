'use client';

import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { triggerWhatsAppModal } from '../utils/whatsappModal';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerWhatsAppModal({
      destination: 'Holiday Tours',
    });
  };

  return (
    <aside
      aria-label="Contact via WhatsApp"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 flex items-center group select-none"
    >
      {/* Tooltip on hover (desktop) */}
      <span className="hidden md:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with our Vacation Specialist
      </span>

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp with MyHappyJourney"
        className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border-none"
      >
        {/* Soft pulse animation ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none opacity-75" />
        
        {/* WhatsApp Vector Icon */}
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" />
      </button>
    </aside>
  );
};

