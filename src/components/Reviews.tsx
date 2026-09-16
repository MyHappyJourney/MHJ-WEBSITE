'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { ALL_REVIEWS } from '../data/reviewsData';

interface ReviewsProps {
  onViewAllReviews?: () => void;
}

export const Reviews: React.FC<ReviewsProps> = ({ onViewAllReviews }) => {
  // Show top 3 reviews in the homepage teaser section
  const topReviews = ALL_REVIEWS.slice(0, 3);

  return (
    <section id="reviews-section" className="py-16 sm:py-24 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold text-[#0B389D] uppercase tracking-widest mb-2">
            AUTHENTIC TRAVEL MEMORIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] leading-tight mb-3">
            Loved By Over 5,000+ Travelers
          </h2>
          <p className="text-sm sm:text-base text-[#515154] font-normal leading-relaxed max-w-2xl mx-auto">
            Read heartfelt testimonials from honeymooners, families, and nature enthusiasts who explored Incredible India with MyHappyJourney.
          </p>

          {/* Signature Brand Red Accent Line */}
          <div className="w-12 h-1 bg-[#FF3000] rounded-full mx-auto mt-4" />
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {topReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 border border-gray-100 flex flex-col justify-between text-left"
            >
              <div>
                {/* 5 Brand Gold Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#FF9900]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FF9900] text-[#FF9900]"
                    />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-[#424245] italic leading-relaxed mb-6 font-normal">
                  {rev.comment}
                </p>
              </div>

              <div>
                {/* Tour Badge */}
                <div className="mb-3.5">
                  <span className="inline-block bg-[#EBF2FF] text-[#0B389D] text-[11px] font-bold px-3 py-1 rounded-full border border-blue-100">
                    {rev.tourName}
                  </span>
                </div>

                {/* Reviewer Details */}
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

        {/* Bottom CTA to view all reviews */}
        {onViewAllReviews && (
          <div className="mt-12 text-center">
            <button
              onClick={onViewAllReviews}
              className="inline-flex items-center gap-2 bg-[#0B389D] hover:bg-[#082a72] active:scale-[0.98] text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-sm hover:shadow transition-all cursor-pointer tracking-tight"
            >
              <span>Explore All Verified Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
