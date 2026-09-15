import React, { useState, useEffect } from 'react';
import { Crown, AlertTriangle, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../data/tourData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ReadyToExploreBannerProps {
  onExploreClick?: () => void;
}

export const ReadyToExploreBanner: React.FC<ReadyToExploreBannerProps> = ({ onExploreClick }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`;

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '15',
    minutes: '43',
    seconds: '21'
  });

  useEffect(() => {
    const now = new Date();
    const target = new Date(now.getTime() + (15 * 3600 + 43 * 60 + 21) * 1000);

    const interval = setInterval(() => {
      const current = new Date().getTime();
      const difference = target.getTime() - current;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0')
        });
      } else {
        setTimeLeft({
          days: '00',
          hours: '12',
          minutes: '30',
          seconds: '00'
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    const packagesElem = document.getElementById('packages-section');
    if (packagesElem) {
      packagesElem.scrollIntoView({ behavior: 'smooth' });
    } else if (onExploreClick) {
      onExploreClick();
    }
  };

  return (
    <section
      className="relative py-16 sm:py-24 lg:py-28 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url('https://hczb7fxersozfdoh.public.blob.vercel-storage.com/swastik-arora-6R_k1QF1LCw-unsplash.jpg')`
      }}
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Crown Icon Badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black/40 border border-white/25 text-amber-400 mb-6 shadow-lg">
          <Crown className="w-7 h-7 stroke-[2]" />
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
          Plan Your Kerala Dream Vacation
        </h2>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed mb-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          Lock in seasonal peak rates and get free upgrades on deluxe houseboats and private cab bookings!
        </p>

        {/* 4 Countdown Blocks */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-6">
          <div className="w-16 sm:w-20 py-2.5 sm:py-3 bg-[#FF9500] rounded-xl shadow-lg text-center flex flex-col items-center justify-center border border-amber-300/30">
            <span className="text-xl sm:text-2xl font-black text-white leading-none">
              {timeLeft.days}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-white/95 uppercase tracking-wider mt-1">
              DAYS
            </span>
          </div>

          <div className="w-16 sm:w-20 py-2.5 sm:py-3 bg-[#FF9500] rounded-xl shadow-lg text-center flex flex-col items-center justify-center border border-amber-300/30">
            <span className="text-xl sm:text-2xl font-black text-white leading-none">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-white/95 uppercase tracking-wider mt-1">
              HOURS
            </span>
          </div>

          <div className="w-16 sm:w-20 py-2.5 sm:py-3 bg-[#FF9500] rounded-xl shadow-lg text-center flex flex-col items-center justify-center border border-amber-300/30">
            <span className="text-xl sm:text-2xl font-black text-white leading-none">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-white/95 uppercase tracking-wider mt-1">
              MINUTES
            </span>
          </div>

          <div className="w-16 sm:w-20 py-2.5 sm:py-3 bg-[#FF9500] rounded-xl shadow-lg text-center flex flex-col items-center justify-center border border-amber-300/30">
            <span className="text-xl sm:text-2xl font-black text-white leading-none">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-white/95 uppercase tracking-wider mt-1">
              SECONDS
            </span>
          </div>
        </div>

        {/* Urgency info text */}
        <div className="inline-flex items-center justify-center gap-1.5 text-amber-300 font-bold text-xs sm:text-sm md:text-[15px] mb-8 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Seasonal bookings open for Munnar, Thekkady & Alleppey</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
          <button
            onClick={handleExplore}
            id="explore-packages-banner-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF4B00] hover:bg-[#e04200] active:scale-98 text-white font-bold text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer"
          >
            <span>Explore Tour Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="flash-sale-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white font-bold text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
