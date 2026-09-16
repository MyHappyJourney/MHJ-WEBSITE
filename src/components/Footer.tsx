'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';
import { Logo } from './Logo';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../data/tourData';
import { DOMESTIC_DESTINATIONS, INTERNATIONAL_DESTINATIONS } from '../data/destinations';

interface FooterProps {
  onSelectDestination?: (destName: string) => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectDestination, onNavigate }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleDestinationClick = (name: string) => {
    if (name.toLowerCase().includes('kerala') && onNavigate) {
      onNavigate('/kerala');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onSelectDestination) {
      onSelectDestination(name);
    }
    const elem = document.getElementById('packages-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (pathOrId: string, isRoute: boolean = false) => {
    if (isRoute && onNavigate) {
      onNavigate(pathOrId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(pathOrId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-[#071321] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800/80 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
            
            {/* Column 1: Company Profile (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-block bg-white px-3.5 py-1.5 rounded-2xl shadow-xs border border-white/20">
                <Logo size="sm" />
              </div>

              <p className="text-xs sm:text-[13px] text-slate-300/85 leading-relaxed max-w-md font-normal">
                Bespoke tour operator crafting transformative holidays across Incredible India and Southeast Asia since 2007. Over 150+ ground specialists and 5,000+ happy guests.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 text-xs sm:text-[13px]">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#FF9900] group-hover:scale-110 transition-transform shrink-0 stroke-[2]" />
                  <span className="font-medium tracking-wide">+91-8197417772</span>
                </a>

                <a
                  href="mailto:info@myhappyjourney.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#FF9900] group-hover:scale-110 transition-transform shrink-0 stroke-[2]" />
                  <span className="font-medium">info@myhappyjourney.com</span>
                </a>

                <div className="flex items-start gap-3 text-slate-300/90">
                  <MapPin className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5 stroke-[2]" />
                  <span className="leading-relaxed">
                    3rd floor, 18th Main Rd, Kumaraswamy Layout 2nd Stage, Bengaluru, Karnataka 560078
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links (3.5 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Company &amp; Services
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px]">
                <li>
                  <button
                    onClick={() => handleLinkClick('/', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/about-us', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/packages', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Tour Packages &amp; Itineraries
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/reviews', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Guest Reviews &amp; Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('why-us-section')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Why Choose MyHappyJourney
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/contact-us', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact Us &amp; Office
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('plan-trip-section')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Custom Itinerary Request
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalModal('privacy')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalModal('terms')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Terms &amp; Booking Conditions
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Featured Getaways (3.5 Cols) */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Popular Tour Destinations
              </h4>
              <div className="flex flex-wrap gap-2">
                {DOMESTIC_DESTINATIONS.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleDestinationClick(d.name)}
                    className="text-xs bg-slate-800/80 hover:bg-[#0B389D] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-slate-700/60"
                  >
                    {d.name} Tour Packages
                  </button>
                ))}
                {INTERNATIONAL_DESTINATIONS.slice(0, 4).map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleDestinationClick(d.name)}
                    className="text-xs bg-slate-800/80 hover:bg-[#0B389D] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-slate-700/60"
                  >
                    {d.name} Holidays
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-[#FF9900] mb-1">
                  100% Tailor-Made Guarantee
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Every tour can be modified with personalized hotel upgrades, private cab types, and tailored sightseeing durations.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Divider */}
          <div className="border-t border-slate-800/80 pt-8 pb-4 text-center space-y-1.5">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} MyHappyJourney Private Limited. All rights reserved. Registered Indian Tour Operator Since 2007.
            </p>
            <p className="text-[11px] text-slate-500">
              Crafted for exceptional travel experiences across India and abroad.
            </p>
          </div>

        </div>
      </footer>

      {/* Modal for Privacy Policy / Terms & Conditions */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white text-slate-800 max-w-lg w-full rounded-2xl p-6 shadow-2xl relative border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-slate-900 mb-4">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed max-h-96 overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    At MyHappyJourney, we are committed to safeguarding your personal data. We collect guest information solely to book accommodations, arrange transportation, and provide 24/7 on-tour customer support.
                  </p>
                  <p>
                    We do not sell, rent, or lease customer data to third-party marketing services. All payment processes are encrypted and secured adhering to industry standards.
                  </p>
                  <p>
                    For any questions regarding your data or to request account deletion, please contact us at info@myhappyjourney.com.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Booking Confirmation:</strong> Bookings are confirmed upon receipt of the mutually agreed advance payment. A customized day-wise voucher and emergency contact sheet will be issued.
                  </p>
                  <p>
                    <strong>Transparent Pricing:</strong> All included services such as private transport, sightseeing, breakfast plans, and hotel taxes are stated transparently in writing before deposit.
                  </p>
                  <p>
                    <strong>Flexible Cancellations:</strong> Full refunds (less nominal banking/partner charges) are processed for cancellations initiated up to 15 days before the scheduled trip start date.
                  </p>
                  <p>
                    For assistance with booking amendments, please contact your assigned tour coordinator directly.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
