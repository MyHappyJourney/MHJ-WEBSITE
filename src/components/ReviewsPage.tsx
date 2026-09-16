'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { ALL_REVIEWS } from '../data/reviewsData';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_NUMBER } from '../data/tourData';

interface ReviewsPageProps {
  onBackToHome?: () => void;
  onRequestQuote?: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  onBackToHome,
  onRequestQuote,
}) => {
  const handleGetQuote = () => {
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      const whatsappMsg = encodeURIComponent(
        'Hi MyHappyJourney, I am reading the reviews on your website and would like to get a free customized tour quote.'
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans select-none">
      
      {/* 1. Deep Brand Blue Hero Banner */}
      <section className="relative bg-[#071F3D] text-white pt-14 pb-24 sm:pt-16 sm:pb-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          
          {/* 5 Brand Gold Stars */}
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FF9900] text-[#FF9900]" />
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight">
            Loved By 5,000+ Happy Guests <br />
            Across Incredible India
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-normal pt-1">
            Real stories, authentic memories, and unbiased feedback from travelers who booked their private holidays with MyHappyJourney.
          </p>

          {/* Breadcrumb back */}
          {onBackToHome && (
            <div className="pt-4">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-colors cursor-pointer border border-white/10"
              >
                <span>← Back to Home</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 2. Floating Aggregate Rating Scorecard */}
      <div className="max-w-xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-10 mb-14 sm:mb-16">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 text-center">
          
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl sm:text-6xl font-black text-[#1D1D1F] tracking-tight">4.9</span>
            <span className="text-2xl sm:text-3xl font-bold text-gray-400">/5</span>
          </div>

          <div className="flex items-center justify-center gap-1 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF9900] text-[#FF9900]" />
            ))}
          </div>

          <p className="text-sm text-gray-600 font-medium">
            Based on 5,000+ verified customer reviews
          </p>

          <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center text-xs text-gray-600 font-medium">
            <div>
              <span className="block font-black text-[#1D1D1F] text-base">99.4%</span>
              <span>Satisfaction</span>
            </div>
            <div>
              <span className="block font-black text-[#1D1D1F] text-base">150+</span>
              <span>Ground Captains</span>
            </div>
            <div>
              <span className="block font-black text-[#1D1D1F] text-base">Zero</span>
              <span>Hidden Fees</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Review Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-gray-100 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 mb-3 text-[#FF9900]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF9900] text-[#FF9900]"
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#424245] italic leading-relaxed mb-6">
                  {rev.comment}
                </p>
              </div>

              <div>
                <div className="mb-3">
                  <span className="inline-block bg-[#EBF2FF] text-[#0B389D] text-[11px] font-bold px-3 py-1 rounded-full border border-blue-100">
                    {rev.tourName}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  {rev.avatar ? (
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#0B389D] text-white flex items-center justify-center font-bold text-xs">
                      {rev.initials || rev.name[0]}
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-bold text-[#1D1D1F] leading-tight">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {rev.location} · {rev.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="bg-[#071F3D] text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em]">
            Ready to Begin Your Own Journey?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 font-normal">
            Join thousands of delighted travelers. Get a 100% custom-tailored holiday itinerary within minutes.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleGetQuote}
              className="inline-flex items-center gap-2 bg-[#FF3000] hover:bg-[#e02b00] active:scale-[0.98] text-white font-bold text-sm px-8 py-3.5 rounded-2xl shadow-md transition-all cursor-pointer"
            >
              <span>Get Free Tailored Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-2xl border border-white/20 transition-colors"
            >
              <span>Call {DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
