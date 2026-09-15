import React from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  CalendarCheck,
  Headphones,
  Compass,
  ArrowRight
} from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_NUMBER, ENQUIRY_EMAIL } from '../data/tourData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi MyHappyJourney, I am visiting your website and would like to speak with a Kerala travel specialist regarding tour packages and custom itineraries.'
  )}`;

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FF] border border-[#BFDBFE] text-[#0B3996] text-xs font-bold uppercase tracking-wider mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-[#FF4B00]" />
            <span>KERALA TRAVEL DESK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Connect With Our Destination Specialists
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Planning your Kerala holiday should be transparent, personalized, and seamless. Call our helpline or message our Cochin travel desk for genuine local guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">24×7 Central Reservations</span>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="block text-xl sm:text-2xl font-black text-gray-900 hover:text-[#0B3996] transition-colors mt-0.5"
                >
                  {DISPLAY_PHONE}
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  Speak directly with an experienced tour manager (English, Hindi &amp; Malayalam).
                </p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Instant WhatsApp Desk</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl sm:text-2xl font-black text-[#25D366] hover:text-[#20bd5a] transition-colors mt-0.5"
                >
                  Start Live Chat
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  Average response time: 5 minutes • Quick itinerary sharing &amp; PDF brochures.
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF4B00] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Official Inquiries</span>
                <a
                  href={`mailto:${ENQUIRY_EMAIL}`}
                  className="block text-lg sm:text-xl font-black text-gray-900 hover:text-[#0B3996] transition-colors mt-0.5 break-all"
                >
                  {ENQUIRY_EMAIL}
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  Ideal for corporate packages, large family groups, and flight coordination.
                </p>
              </div>
            </div>

            {/* Regional Hubs Card */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B3996] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#FF4B00]" />
                <span>Kerala Operational Hubs</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="p-3 bg-white rounded-xl border border-gray-200/80">
                  <p className="font-bold text-gray-900">Cochin Central Desk</p>
                  <p className="text-gray-500 mt-0.5">Near Cochin Airport (COK), Nedumbassery, Kochi, Kerala 683572</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-gray-200/80">
                  <p className="font-bold text-gray-900">Trivandrum Desk</p>
                  <p className="text-gray-500 mt-0.5">MG Road, Secretariat Area, Thiruvananthapuram, Kerala 695001</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Information & Travel Planning Guide (7 cols) - NO FORMS */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-7">
            
            <div>
              <span className="text-xs font-bold text-[#0B3996] uppercase tracking-wider block mb-1">
                TRANSPARENT &amp; RELIABLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                How Booking Works with MyHappyJourney
              </h3>
              <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                We believe in straightforward, stress-free travel planning with zero hidden charges or pushy sales calls.
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0B3996] text-white font-black text-xs flex items-center justify-center">
                  01
                </div>
                <h4 className="font-bold text-sm text-gray-900">Choose Your Package</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Browse our curated 4N/5D, 5N/6D, 6N/7D, or 7N/8D itineraries covering Munnar, Thekkady, and Alleppey.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0B3996] text-white font-black text-xs flex items-center justify-center">
                  02
                </div>
                <h4 className="font-bold text-sm text-gray-900">Customize Route &amp; Stays</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Adjust hotel categories (3★/4★/5★), vehicle type (Sedan or Innova), or add extra nights at your preferred destinations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0B3996] text-white font-black text-xs flex items-center justify-center">
                  03
                </div>
                <h4 className="font-bold text-sm text-gray-900">Get Transparent Tariff</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Receive a clear, all-inclusive voucher with complete inclusions, hotel names, meal plans, and driver details.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0B3996] text-white font-black text-xs flex items-center justify-center">
                  04
                </div>
                <h4 className="font-bold text-sm text-gray-900">Seamless Kerala Arrival</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Your courteous personal chauffeur receives you right at Cochin or Trivandrum Airport with a name signboard.
                </p>
              </div>

            </div>

            {/* Why Travelers Trust Us */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                Our Travel Commitment
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700">
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Private AC Vehicle &amp; Chauffeur</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Clean 3★ / 4★ Hotel Partners</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Deluxe Private Alleppey Houseboat with Chef</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Hidden Driver Batta or Toll Charges</span>
                </div>
              </div>
            </div>

            {/* Direct Action Bar */}
            <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Chat with Kerala Specialist</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:flex-1 h-12 bg-[#0B3996] hover:bg-[#082a70] text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>Call Travel Desk</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
