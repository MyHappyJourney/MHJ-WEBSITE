'use client';

import React, { useState } from 'react';
import { Menu, X, Phone, Star } from 'lucide-react';
import { Logo } from './Logo';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_NUMBER } from '../data/tourData';

interface HeaderProps {
  currentPath: string;
  onNavigate?: (path: string) => void;
  onGetQuoteClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onGetQuoteClick,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavClick = (target: string, isRoute: boolean = false) => {
    setIsDrawerOpen(false);
    if (isRoute) {
      if (onNavigate) {
        onNavigate(target);
      }
      return;
    }

    // If currently on a sub-route and clicked on a home page section
    if (
      currentPath === '/packages' ||
      currentPath === '/reviews' ||
      currentPath === '/about-us' ||
      currentPath === '/contact-us' ||
      currentPath === '/kerala'
    ) {
      if (onNavigate) {
        onNavigate('/');
      }
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    // Scroll to section on home page
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuote = () => {
    if (onGetQuoteClick) {
      onGetQuoteClick();
    } else {
      if (currentPath !== '/') {
        if (onNavigate) onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById('plan-trip-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById('plan-trip-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            'Hi MyHappyJourney, I would like to get a free quote for custom tour packages.'
          )}`;
          window.open(whatsappUrl, '_blank');
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100/90 font-sans">
      {/* 1. Top Announcement Strip */}
      <div className="bg-[#071F3D] text-white text-xs py-2 px-4 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          
          {/* Left: Star rating & Key highlights */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-slate-300 font-medium">
            <span className="flex items-center gap-1 font-bold text-white">
              <Star className="w-3.5 h-3.5 fill-[#FF9900] text-[#FF9900]" />
              <span>4.9/5 Guest Rating</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>5,000+ Journeys Crafted</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline">10+ Years of Hospitality</span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:inline">Zero Cancellation Penalty</span>
          </div>

          {/* Right: Phone with Brand Gold highlight */}
          <div className="flex items-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 text-[#FF9900] hover:text-amber-300 font-bold tracking-tight transition-colors"
              id="top-bar-phone"
            >
              <Phone className="w-3.5 h-3.5 fill-[#FF9900] text-[#FF9900]" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo with Homepage Link */}
        <button
          onClick={() => handleNavClick('/', true)}
          className="flex items-center gap-2 text-left cursor-pointer focus:outline-none"
          aria-label="MyHappyJourney Home"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#1D1D1F] tracking-tight">
          <button
            onClick={() => handleNavClick('/', true)}
            className={`transition-colors cursor-pointer ${
              currentPath === '/'
                ? 'text-[#0B389D] font-bold border-b-2 border-[#0B389D] pb-0.5'
                : 'hover:text-[#0B389D]'
            }`}
          >
            Home
          </button>
          
          {/* About Us Page Link */}
          <button
            onClick={() => handleNavClick('/about-us', true)}
            className={`transition-colors cursor-pointer ${
              currentPath === '/about-us'
                ? 'text-[#0B389D] font-bold border-b-2 border-[#0B389D] pb-0.5'
                : 'hover:text-[#0B389D]'
            }`}
          >
            About Us
          </button>

          {/* Packages Page Link */}
          <button
            onClick={() => handleNavClick('/packages', true)}
            className={`transition-colors cursor-pointer ${
              currentPath === '/packages'
                ? 'text-[#0B389D] font-bold border-b-2 border-[#0B389D] pb-0.5'
                : 'hover:text-[#0B389D]'
            }`}
          >
            Tour Packages
          </button>

          {/* Reviews Page Link */}
          <button
            onClick={() => handleNavClick('/reviews', true)}
            className={`transition-colors cursor-pointer ${
              currentPath === '/reviews'
                ? 'text-[#0B389D] font-bold border-b-2 border-[#0B389D] pb-0.5'
                : 'hover:text-[#0B389D]'
            }`}
          >
            Guest Reviews
          </button>

          <button
            onClick={() => handleNavClick('why-us-section')}
            className="hover:text-[#0B389D] transition-colors cursor-pointer"
          >
            Why Choose Us
          </button>

          {/* Contact Us Page Link (Direct Route to /contact-us) */}
          <button
            onClick={() => handleNavClick('/contact-us', true)}
            className={`transition-colors cursor-pointer ${
              currentPath === '/contact-us'
                ? 'text-[#0B389D] font-bold border-b-2 border-[#0B389D] pb-0.5'
                : 'hover:text-[#0B389D]'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Right Action Controls: Direct Call + Brand CTA Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Phone call link */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden md:flex items-center gap-2 text-[#1D1D1F] hover:text-[#0B389D] font-bold text-sm tracking-tight transition-colors"
          >
            <Phone className="w-4 h-4 text-[#0B389D] shrink-0" />
            <span>{DISPLAY_PHONE}</span>
          </a>

          {/* "Get Free Quote" CTA Button in Brand Vermilion Red */}
          <button
            onClick={handleQuote}
            className="bg-[#FF3000] hover:bg-[#e02b00] active:scale-[0.98] text-white font-bold text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 rounded-2xl shadow-sm hover:shadow transition-all cursor-pointer tracking-tight"
            id="header-get-quote-btn"
          >
            Request Free Quote
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* 3. Mobile Slide-Down Menu */}
      {isDrawerOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 text-sm font-semibold">
            <button
              onClick={() => handleNavClick('/', true)}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                currentPath === '/' ? 'text-[#0B389D] bg-blue-50 font-bold' : 'text-gray-800 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/about-us', true)}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                currentPath === '/about-us' ? 'text-[#0B389D] bg-blue-50 font-bold' : 'text-gray-800 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('/packages', true)}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                currentPath === '/packages' ? 'text-[#0B389D] bg-blue-50 font-bold' : 'text-gray-800 hover:bg-slate-50'
              }`}
            >
              Tour Packages
            </button>

            <button
              onClick={() => handleNavClick('/reviews', true)}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                currentPath === '/reviews' ? 'text-[#0B389D] bg-blue-50 font-bold' : 'text-gray-800 hover:bg-slate-50'
              }`}
            >
              Guest Reviews
            </button>

            <button
              onClick={() => handleNavClick('why-us-section')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-gray-800 hover:bg-slate-50 cursor-pointer"
            >
              Why Choose Us
            </button>

            <button
              onClick={() => handleNavClick('/contact-us', true)}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                currentPath === '/contact-us' ? 'text-[#0B389D] bg-blue-50 font-bold' : 'text-gray-800 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs font-bold text-gray-900 flex items-center justify-center gap-2 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-[#0B389D]" />
              <span>Direct Call: {DISPLAY_PHONE}</span>
            </a>

            <button
              onClick={handleQuote}
              className="w-full py-3 bg-[#FF3000] text-white font-bold text-sm rounded-xl shadow-xs text-center"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
