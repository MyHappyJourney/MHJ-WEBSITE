'use client';

import React from 'react';
import { Users, Shield, Handshake, Award, ArrowRight, Check, Star } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/tourData';

interface AboutUsPageProps {
  onBackToHome?: () => void;
  onExplorePackages?: () => void;
  onContactClick?: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onBackToHome,
  onExplorePackages,
  onContactClick,
}) => {
  const handleGetQuote = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const whatsappMsg = encodeURIComponent(
        'Hi MyHappyJourney, I would like to get a free customized tour quote.'
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`, '_blank');
    }
  };

  const handlePackages = () => {
    if (onExplorePackages) {
      onExplorePackages();
    } else {
      window.history.pushState({}, '', '/packages');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans antialiased selection:bg-[#EBF2FF] selection:text-[#0B389D]">
      
      {/* 1. Refined Brand Blue Hero Banner with Apple-grade Typography */}
      <section className="relative bg-[#071F3D] text-white pt-16 pb-24 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_70%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-4">
          
          {/* Pill Badge: "Our Story" */}
          <div className="inline-block">
            <span className="inline-flex items-center text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-slate-100 border border-white/15 tracking-wide">
              Our Hospitality Heritage
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Crafting Unforgettable Journeys <br />
            <span className="text-[#FF9900]">Across Incredible India Since 2007</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed pt-1">
            Founded with a passion for soulful exploration, MyHappyJourney connects travelers to India&apos;s most breathtaking landscapes with personalized care and transparent hospitality.
          </p>

          {/* Breadcrumb back */}
          {onBackToHome && (
            <div className="pt-3">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 px-4 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer border border-white/10"
              >
                <span>← Back to Home</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 2. Floating Stats Bar (Frosted Glass Elevation) */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 sm:-mt-14 relative z-10 mb-16 sm:mb-20">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] border border-gray-100/90 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center pt-3 sm:pt-0">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF8EE] flex items-center justify-center text-[#FF9900] mb-2.5">
                <Users className="w-5 h-5 stroke-[2]" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                5,000+
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                Delighted Travelers
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center pt-3 sm:pt-0">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF8EE] flex items-center justify-center text-[#FF9900] mb-2.5">
                <Shield className="w-5 h-5 stroke-[2]" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                150+
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                On-Ground Captains
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center pt-3 sm:pt-0">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF8EE] flex items-center justify-center text-[#FF9900] mb-2.5">
                <Handshake className="w-5 h-5 stroke-[2]" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                500+
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                Verified Hotel Partners
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center pt-3 sm:pt-0">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF8EE] flex items-center justify-center text-[#FF9900] mb-2.5">
                <Award className="w-5 h-5 stroke-[2]" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                10+ Years
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                Excellence Since 2007
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 3. "Born from a Love of Travel" Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Story Copy */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <p className="text-xs font-bold text-[#0B389D] uppercase tracking-wider">
              OUR MISSION &amp; HERITAGE
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] leading-tight">
              Rooted In Hospitality, Guided By Passion
            </h2>

            <div className="space-y-3.5 text-base text-[#424245] leading-relaxed font-normal pt-2">
              <p>
                MyHappyJourney began with a straightforward conviction: true vacationing should inspire peace of mind, create lifelong bonds, and immerse travelers in authentic regional hospitality.
              </p>
              <p>
                Today, our operations span premier holiday circuits across South India, the Himalayas, Rajasthan, and Southeast Asia. With dedicated regional teams in Bengaluru, Kochi, and Guwahati, our guests receive attentive on-tour support at every leg.
              </p>
              <p>
                Every itinerary is personally verified by our travel designers — from road conditions and scenic viewpoints to hygienic dining and vetted boutique properties.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handlePackages}
                className="inline-flex items-center gap-2 bg-[#0B389D] hover:bg-[#082a72] active:scale-[0.98] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-sm hover:shadow transition-all cursor-pointer tracking-tight"
              >
                <span>Explore Tour Itineraries</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Mountain Visual with 4.9/5.0 Floating Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] aspect-[4/3] bg-slate-900 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
                alt="Snow-capped mountain road and landscape"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating Bottom-Left 4.9/5.0 Badge */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-3.5 flex items-center gap-3 border border-white/60">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0B389D] flex items-center justify-center text-white shrink-0">
                  <Star className="w-5 h-5 fill-[#FF9900] text-[#FF9900]" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-extrabold text-[#1D1D1F] leading-tight">
                    4.9 / 5.0
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 font-medium">
                    5,000+ Delighted Guests
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. "Our Mission & Values" Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-100/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-12 sm:mb-14">
            <p className="text-xs font-bold text-[#0B389D] uppercase tracking-wider mb-2">
              CORE PRINCIPLES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] leading-tight">
              Our Guiding Values
            </h2>
            <div className="w-10 h-1 bg-[#FF3000] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: Conscious Travel */}
            <div className="bg-[#F5F5F7] rounded-3xl p-7 sm:p-8 border border-gray-200/50 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-[#0B389D] text-white flex items-center justify-center mb-5 shadow-xs">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">
                Conscious &amp; Ethical Travel
              </h3>
              <p className="text-sm text-[#515154] leading-relaxed font-normal">
                We advocate for eco-conscious tourism that honors native cultures, conserves pristine natural ecosystems, and directs fair earnings to local drivers and families.
              </p>
            </div>

            {/* Card 2: Guest-Centric Service */}
            <div className="bg-[#F5F5F7] rounded-3xl p-7 sm:p-8 border border-gray-200/50 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3000] text-white flex items-center justify-center mb-5 shadow-xs">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">
                Guest-First Philosophy
              </h3>
              <p className="text-sm text-[#515154] leading-relaxed font-normal">
                Your comfort, security, and happiness guide every itinerary we assemble. From transparent pricing to flexible changes, we put your experience above all else.
              </p>
            </div>

            {/* Card 3: Immersive Experiences */}
            <div className="bg-[#F5F5F7] rounded-3xl p-7 sm:p-8 border border-gray-200/50 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-[#FF9900] text-white flex items-center justify-center mb-5 shadow-xs">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">
                Authentic Immersion
              </h3>
              <p className="text-sm text-[#515154] leading-relaxed font-normal">
                Beyond rushed tourist checklists, we arrange genuine local moments — traditional houseboat lunches, private tea tastings, and tranquil spice plantation tours.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. "Why 5,000+ Travelers Choose Us" Section */}
      <section className="py-16 sm:py-20 bg-[#FBFBFD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-[-0.03em]">
              Why Discerning Travelers Choose MyHappyJourney
            </h2>
            <div className="w-10 h-1 bg-[#FF3000] rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-left">
            
            <div className="bg-[#F0F5FF] rounded-2xl p-4 sm:p-5 flex items-start gap-3 border border-blue-100/70">
              <Check className="w-5 h-5 text-[#0B389D] stroke-[2.5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1D1D1F] font-normal leading-relaxed">
                <strong className="font-bold">Transparent Best Price Guarantee</strong> — unmatched value with no concealed taxes or fees
              </p>
            </div>

            <div className="bg-[#F0F5FF] rounded-2xl p-4 sm:p-5 flex items-start gap-3 border border-blue-100/70">
              <Check className="w-5 h-5 text-[#0B389D] stroke-[2.5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1D1D1F] font-normal leading-relaxed">
                <strong className="font-bold">Heritage Since 2007</strong> — over a decade of tour design and hospitality expertise
              </p>
            </div>

            <div className="bg-[#F0F5FF] rounded-2xl p-4 sm:p-5 flex items-start gap-3 border border-blue-100/70">
              <Check className="w-5 h-5 text-[#0B389D] stroke-[2.5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1D1D1F] font-normal leading-relaxed">
                <strong className="font-bold">150+ Vetted On-Ground Captains</strong> for continuous personalized guest coordination
              </p>
            </div>

            <div className="bg-[#F0F5FF] rounded-2xl p-4 sm:p-5 flex items-start gap-3 border border-blue-100/70">
              <Check className="w-5 h-5 text-[#0B389D] stroke-[2.5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1D1D1F] font-normal leading-relaxed">
                <strong className="font-bold">Dedicated 24/7 Guest Concierge</strong> throughout your vacation stay
              </p>
            </div>

            <div className="bg-[#F0F5FF] rounded-2xl p-4 sm:p-5 flex items-start gap-3 border border-blue-100/70">
              <Check className="w-5 h-5 text-[#0B389D] stroke-[2.5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1D1D1F] font-normal leading-relaxed">
                <strong className="font-bold">End-to-End Coordination:</strong> private AC transport, curated hotels, meals &amp; permits
              </p>
            </div>

            <div className="bg-[#F0F5FF] rounded-2xl p-4 sm:p-5 flex items-start gap-3 border border-blue-100/70">
              <Check className="w-5 h-5 text-[#0B389D] stroke-[2.5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1D1D1F] font-normal leading-relaxed">
                <strong className="font-bold">Stress-Free Booking:</strong> full refund policy for cancellations 15 days prior to travel
              </p>
            </div>

            <div className="bg-[#F0F5FF] rounded-2xl p-4 sm:p-5 flex items-start gap-3 border border-blue-100/70">
              <Check className="w-5 h-5 text-[#0B389D] stroke-[2.5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1D1D1F] font-normal leading-relaxed">
                <strong className="font-bold">100% Tailored Flexibility</strong> to adapt destinations, pace, and accommodation categories
              </p>
            </div>

            <div className="bg-[#F0F5FF] rounded-2xl p-4 sm:p-5 flex items-start gap-3 border border-blue-100/70">
              <Check className="w-5 h-5 text-[#0B389D] stroke-[2.5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1D1D1F] font-normal leading-relaxed">
                <strong className="font-bold">Trusted by 5,000+ Guests:</strong> families, honeymoon couples, and private traveler groups
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. "Ready to Travel with Us?" Bottom CTA Strip */}
      <section className="bg-[#071F3D] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.06),_transparent_70%)] pointer-events-none" />
        
        <div className="relative max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em]">
            Ready to Begin Your Incredible Indian Journey?
          </h3>
          <p className="text-sm sm:text-base text-slate-200/90 max-w-xl mx-auto font-normal">
            Request a personalized itinerary quote from our vacation architects. Zero obligation, fully tailored.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={handleGetQuote}
              className="inline-flex items-center justify-center gap-2 bg-[#FF3000] hover:bg-[#e02b00] active:scale-[0.98] text-white font-semibold text-sm px-7 py-3.5 rounded-2xl shadow-md transition-all cursor-pointer tracking-tight"
            >
              <span>Get Free Tailored Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleGetQuote}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white font-semibold text-sm px-7 py-3.5 rounded-2xl border border-white/20 transition-all cursor-pointer backdrop-blur-sm tracking-tight"
            >
              <span>Contact Tour Specialists</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
