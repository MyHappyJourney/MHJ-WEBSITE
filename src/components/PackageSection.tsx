import React, { useState, useRef, useEffect } from 'react';
import { PACKAGES } from '../data/tourData';
import { PackageCard } from './PackageCard';
import { PackageItem } from '../types';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';

interface PackageSectionProps {
  onViewDetails: (pkg: PackageItem) => void;
  selectedDurationFilter?: string;
}

export const PackageSection: React.FC<PackageSectionProps> = ({ onViewDetails, selectedDurationFilter }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'right' | 'left'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  const displayedPackages = selectedDurationFilter && selectedDurationFilter !== 'all'
    ? PACKAGES.filter(p => p.id === selectedDurationFilter)
    : PACKAGES;

  // Auto-scroll effect every 3.5 seconds
  useEffect(() => {
    if (isPaused || displayedPackages.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (scrollDirection === 'right') {
          if (prevIndex >= displayedPackages.length - 1) {
            setScrollDirection('left');
            return prevIndex - 1 >= 0 ? prevIndex - 1 : 0;
          }
          return prevIndex + 1;
        } else {
          if (prevIndex <= 0) {
            setScrollDirection('right');
            return prevIndex + 1 < displayedPackages.length ? prevIndex + 1 : 0;
          }
          return prevIndex - 1;
        }
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, scrollDirection, displayedPackages.length]);

  // Scroll container when activeIndex changes
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = Array.from(container.children) as HTMLElement[];
      const targetCard = children[activeIndex];

      if (targetCard) {
        isProgrammaticScroll.current = true;
        const scrollLeftPos = targetCard.offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: scrollLeftPos,
          behavior: 'smooth'
        });

        const timeout = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 500);

        return () => clearTimeout(timeout);
      }
    }
  }, [activeIndex]);

  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;

    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const children = Array.from(container.children) as HTMLElement[];

      let closestIndex = 0;
      let minDiff = Infinity;

      children.forEach((child, index) => {
        const diff = Math.abs(child.offsetLeft - container.offsetLeft - scrollPosition);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  const scrollToCard = (index: number) => {
    setIsPaused(true);
    setActiveIndex(index);
    setTimeout(() => setIsPaused(false), 6000);
  };

  return (
    <section id="packages-section" className="py-12 sm:py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EBF2FF] px-3.5 py-1 rounded-full border border-[#0B3996]/20 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0B3996]" />
            <span className="text-[#0B3996] font-bold text-xs uppercase tracking-widest">
              CURATED TOUR PACKAGES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Handcrafted Kerala Holiday Packages
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Every itinerary includes a dedicated private AC cab & chauffeur, verified 3★/4★ hotels, authentic backwater houseboat cruise, and 24×7 customer assistance.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 4000);
          }}
        >
          {/* Scrollable Cards Wrapper */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {displayedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="w-[88vw] sm:w-[360px] lg:w-[380px] shrink-0 snap-center"
              >
                <PackageCard
                  pkg={pkg}
                  onViewDetails={onViewDetails}
                />
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          {displayedPackages.length > 1 && (
            <button
              onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="hidden sm:flex absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-xl text-gray-800 border border-gray-200 items-center justify-center hover:bg-[#0B3996] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              aria-label="Previous Package"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow Button */}
          {displayedPackages.length > 1 && (
            <button
              onClick={() => scrollToCard(Math.min(displayedPackages.length - 1, activeIndex + 1))}
              disabled={activeIndex === displayedPackages.length - 1}
              className="hidden sm:flex absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-xl text-gray-800 border border-gray-200 items-center justify-center hover:bg-[#0B3996] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              aria-label="Next Package"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Controls Bar: Mobile Arrows, Dots & Play/Pause State */}
          {displayedPackages.length > 1 && (
            <div className="flex items-center justify-between sm:justify-center gap-4 mt-6">
              <button
                onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className="sm:hidden p-2 rounded-full bg-white shadow-md text-gray-700 border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous Package"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-2xs">
                {displayedPackages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToCard(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx ? 'w-8 bg-[#0B3996]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to package ${idx + 1}`}
                  />
                ))}
                
                <div className="w-px h-4 bg-gray-200 mx-1" />
                
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="text-gray-500 hover:text-[#0B3996] transition-colors cursor-pointer"
                  title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 text-amber-600 fill-amber-600" /> : <Pause className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />}
                </button>
              </div>

              <button
                onClick={() => scrollToCard(Math.min(displayedPackages.length - 1, activeIndex + 1))}
                disabled={activeIndex === displayedPackages.length - 1}
                className="sm:hidden p-2 rounded-full bg-white shadow-md text-gray-700 border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next Package"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
