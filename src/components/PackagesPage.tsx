'use client';

import React, { useState, useMemo } from 'react';
import { ArrowRight, MapPin, Sparkles, Phone } from 'lucide-react';
import { DOMESTIC_DESTINATIONS, DestinationCardItem } from '../data/destinations';
import { InternationalHolidaysSection } from './InternationalHolidaysSection';
import { PHONE_NUMBER, DISPLAY_PHONE } from '../data/tourData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { triggerWhatsAppModal } from '../utils/whatsappModal';

interface PackagesPageProps {
  onBackToHome: () => void;
  onSelectDestination?: (destName: string) => void;
  onGetQuoteClick?: () => void;
}

type RegionFilter = 'all' | 'north' | 'west' | 'south' | 'northeast';

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onBackToHome,
  onSelectDestination,
  onGetQuoteClick,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<RegionFilter>('all');
  const [selectedCard, setSelectedCard] = useState<DestinationCardItem | null>(null);

  const availableRegions = useMemo(() => {
    const regions = new Set<string>();
    DOMESTIC_DESTINATIONS.forEach((d) => {
      if (d.region) regions.add(d.region);
    });
    return regions;
  }, []);

  const allPossibleTabs: { id: RegionFilter; label: string }[] = [
    { id: 'all', label: 'All Regions' },
    { id: 'south', label: 'South India' },
    { id: 'north', label: 'North India' },
    { id: 'west', label: 'West India' },
    { id: 'northeast', label: 'Northeast' },
  ];

  const filterTabs = useMemo(() => {
    return allPossibleTabs.filter(
      (tab) => tab.id === 'all' || availableRegions.has(tab.id)
    );
  }, [availableRegions]);

  const filteredCards = useMemo(() => {
    if (selectedFilter === 'all') return DOMESTIC_DESTINATIONS;
    return DOMESTIC_DESTINATIONS.filter((item) => item.region === selectedFilter);
  }, [selectedFilter]);

  const handleCardClick = (card: DestinationCardItem) => {
    if (card.name.toLowerCase().includes('kerala') && onSelectDestination) {
      onSelectDestination(card.name);
      return;
    }
    setSelectedCard(card);
  };

  const handleBookOrQuote = (destName: string) => {
    triggerWhatsAppModal({
      destination: `${destName} Tours`,
      defaultMessage: `Hello MyHappyJourney, I am interested in custom holiday packages and pricing for ${destName}. Please share detailed day-wise plans and hotel options.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans select-none pb-24 md:pb-16">
      
      {/* 1. Brand Blue Top Hero Banner */}
      <section className="relative bg-[#071F3D] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85"
            alt="Scenic backwaters of Kerala with luxury boat"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071F3D]/90 via-[#0B2545]/80 to-[#071F3D]/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col items-center text-center">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white text-xs sm:text-[13px] font-semibold tracking-wide border border-white/20 shadow-lg mb-5 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>AUTHENTIC EXPERIENCES &amp; CUSTOM ITINERARIES</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-2 sm:mb-3">
            Handcrafted Holiday Packages <br />
            <span className="text-[#FF9900]">By MyHappyJourney</span>
          </h1>

          {/* Subheading Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mt-2">
            Each tour is curated and operated by our ground teams. Enjoy private transfers, verified hotel partners, and responsive 24/7 on-tour support.
          </p>

          {/* Navigation link back to home */}
          <div className="mt-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              <span>← Back to Home</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Domestic Holiday Packages Section */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B389D] uppercase tracking-widest mb-2">
            <MapPin className="w-4 h-4 text-[#0B389D]" />
            <span>FEATURED INDIAN VACATIONS</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] leading-tight">
            Curated Holiday Packages
          </h2>
          
          <p className="text-sm sm:text-base text-[#515154] font-normal mt-2.5 leading-relaxed">
            Choose from bespoke itineraries with deluxe stays, private chauffeured vehicles, and local experiences.
          </p>

          {/* Brand Red Accent Line */}
          <div className="w-14 h-1 bg-[#FF3000] rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        {filterTabs.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0B389D] text-white shadow-xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Dynamic Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-7 max-w-5xl mx-auto">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 w-full sm:w-[320px] md:w-[340px] aspect-[3/4] cursor-pointer bg-slate-900 border border-gray-100 flex flex-col justify-end"
            >
              <img
                src={card.image}
                alt={card.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent transition-opacity duration-300 group-hover:from-slate-950/95" />

              {/* Tag Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block bg-[#FF3000] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {card.tag}
                </span>
              </div>

              {/* Bottom Content Card */}
              <div className="relative z-10 p-6 text-left text-white">
                <h3 className="text-2xl font-extrabold tracking-tight mb-1 text-white group-hover:text-[#FF9900] transition-colors">
                  {card.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-4 font-normal leading-snug">
                  {card.subtitle}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <span className="text-xs font-semibold text-slate-300">
                    {card.duration || 'Custom Nights'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF9900] group-hover:text-white transition-colors">
                    <span>Explore Itineraries</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. International Holidays Section */}
      <InternationalHolidaysSection />

      {/* 4. Bottom Support CTA Strip */}
      <section className="mt-16 bg-[#071F3D] text-white py-14 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-5xl mx-auto text-center shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
          Need a Custom Multi-City Tour?
        </h3>
        <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto mb-6">
          Our vacation designers can craft bespoke combinations across South India, golden triangles, and international stops.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onGetQuoteClick ? onGetQuoteClick() : handleBookOrQuote('Multi-City Custom Tour')}
            className="inline-flex items-center gap-2 bg-[#FF3000] hover:bg-[#e02b00] active:scale-[0.98] text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-md transition-all cursor-pointer"
          >
            <span>Request Custom Itinerary</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-2xl border border-white/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FF9900]" />
            <span>Call {DISPLAY_PHONE}</span>
          </a>
        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 text-left">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#0B389D]">
              Package Overview
            </span>
            <h3 className="text-2xl font-extrabold text-[#1D1D1F] mt-1 mb-2">
              {selectedCard.name} Tour Package
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              {selectedCard.subtitle}
            </p>

            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-gray-700 mb-6">
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="font-semibold text-gray-500">Duration</span>
                <span className="font-bold text-gray-900">{selectedCard.duration || 'Flexible 4N - 7N'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="font-semibold text-gray-500">Accommodation</span>
                <span className="font-bold text-gray-900">Deluxe 3★ / 4★ / 5★ Options</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="font-semibold text-gray-500">Transportation</span>
                <span className="font-bold text-gray-900">Private AC Chauffeur Vehicle</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-gray-500">Customization</span>
                <span className="font-bold text-emerald-600">100% Tailored to You</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  setSelectedCard(null);
                  handleBookOrQuote(selectedCard.name);
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF3000] hover:bg-[#e02b00] active:scale-[0.98] text-white font-bold text-sm py-3.5 rounded-2xl shadow-md transition-all cursor-pointer"
              >
                <span>Get Itinerary &amp; Rates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const destName = selectedCard.name;
                  setSelectedCard(null);
                  triggerWhatsAppModal({
                    destination: `${destName} Tours`,
                    defaultMessage: `Hi MyHappyJourney, please share PDF itinerary and best quotes for ${destName}.`,
                  });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-3.5 rounded-2xl shadow-xs cursor-pointer border-none"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
