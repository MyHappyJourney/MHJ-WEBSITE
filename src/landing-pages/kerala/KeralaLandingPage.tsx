'use client';

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { PackageSection } from './components/PackageSection';
import ScrollExpand from './components/ScrollExpand';
import { PackageModal } from './components/PackageModal';
import { QuoteModal } from './components/QuoteModal';
import { Itinerary } from './components/Itinerary';
import { InclusionsExclusions } from './components/InclusionsExclusions';
import { WhyBook } from './components/WhyBook';
import { ReadyToExploreBanner } from './components/ReadyToExploreBanner';
import { Reviews } from './components/Reviews';
import { ExperienceCarousel } from './components/ExperienceCarousel';
import { GroupDiscountBanner } from './components/GroupDiscountBanner';
import { FAQ } from './components/FAQ';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Footer } from './components/Footer';
import { PackageItem } from './types';
import { Loader } from './components/Loader';

interface KeralaLandingPageProps {
  onBackToHome?: () => void;
}

export const KeralaLandingPage: React.FC<KeralaLandingPageProps> = ({ onBackToHome }) => {
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<PackageItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quotePackageId, setQuotePackageId] = useState<string>('pkg-6n7d');
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);

  // Initial page load smooth transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const openQuoteModal = (pkgId?: string) => {
    if (pkgId) {
      setQuotePackageId(pkgId);
    }
    setSelectedPackageForModal(null);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#EBF2FF] selection:text-[#0B3996] pb-[72px] md:pb-0 relative">
      
      {/* Preloader */}
      {isInitialLoading && (
        <div className="fixed inset-0 z-[100] bg-[#071739] flex flex-col items-center justify-center transition-opacity duration-500">
          <Loader
            title="Loading Kerala Tour Packages..."
            subtitle="MyHappyJourney • Since 2007"
          />
        </div>
      )}

      {/* Kerala Landing Page Header */}
      <Header
        onQuoteClick={() => openQuoteModal()}
        onPackageSelect={(pkgId) => openQuoteModal(pkgId)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero with Integrated Fast Enquiry Form */}
        <Hero
          onQuoteClick={() => openQuoteModal()}
          preselectedPackageId={quotePackageId}
        />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. ScrollExpand Interactive Experience */}
        <section className="relative w-full bg-[#05070f] border-y border-white/10">
          <ScrollExpand
            src="/hero.jpg"
            alt="Experience Kerala"
            title="Experience Kerala"
            scrollHint="Scroll down to expand"
            mediaZoom={1.35}
            startWidth={42}
            startHeight={58}
            startRadius={24}
            endRadius={0}
            scrollDistance={1.2}
            holdDistance={0.35}
            smoothing={0.1}
            overlayScrim={0.45}
            useWindowScroll={true}
            enabled={true}
          >
            <h2>Experience Kerala, exactly your way</h2>
            <p>Select your dates to build a custom itinerary and book trusted local stays instantly.</p>
          </ScrollExpand>
        </section>

        {/* 4. Choose Your Kerala Tour (Cards & Carousel) */}
        <PackageSection
          onViewDetails={(pkg) => setSelectedPackageForModal(pkg)}
          onGetQuote={(pkg) => openQuoteModal(pkg.id)}
        />

        {/* 5. 6N / 7D Tour Detailed Day-by-Day Itinerary */}
        <Itinerary />

        {/* 6. Reviews */}
        <Reviews />

        {/* 7. Package Inclusions & Exclusions */}
        <InclusionsExclusions />

        {/* 8. Why Book With MyHappyJourney */}
        <WhyBook />

        {/* 9. Flash Sale Parallax Banner */}
        <ReadyToExploreBanner onQuoteClick={() => openQuoteModal()} />

        {/* 10. Real Travel Experiences Carousel */}
        <ExperienceCarousel onQuoteClick={() => openQuoteModal()} />

        {/* 11. FAQs */}
        <FAQ />

        {/* 12. Bigger Group Parallax Discount Banner */}
        <GroupDiscountBanner />
      </main>

      {/* Kerala Footer */}
      <Footer onQuoteClick={() => openQuoteModal()} />

      {/* Fixed Bottom Mobile CTA Bar */}
      <StickyMobileCTA onQuoteClick={() => openQuoteModal()} />

      {/* Package Details Modal */}
      <PackageModal
        pkg={selectedPackageForModal}
        onClose={() => setSelectedPackageForModal(null)}
        onGetQuote={(pkg) => openQuoteModal(pkg.id)}
      />

      {/* Quote Request Modal Pop-up */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedPackageId={quotePackageId}
      />

    </div>
  );
};

export default KeralaLandingPage;

// synchronized export
