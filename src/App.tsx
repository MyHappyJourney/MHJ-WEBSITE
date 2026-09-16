'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { DestinationsSection } from './components/DestinationsSection';
import { HolidayCategoriesSection } from './components/HolidayCategoriesSection';
import { InternationalHolidaysSection } from './components/InternationalHolidaysSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import ClickSpark from './components/ClickSpark';
import { Reviews } from './components/Reviews';
import { PlanTripFormSection } from './components/PlanTripFormSection';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PackagesPage } from './components/PackagesPage';
import { ReviewsPage } from './components/ReviewsPage';
import { AboutUsPage } from './components/AboutUsPage';
import { ContactUsPage } from './components/ContactUsPage';
import { KeralaLandingPage } from './landing-pages/kerala/KeralaLandingPage';
import { KeralaHoneymoonLandingPage } from './landing-pages/kerala-honeymoon/KeralaHoneymoonLandingPage';
import { KeralaFamilyLandingPage } from './landing-pages/kerala-family/KeralaFamilyLandingPage';
import { KeralaSeniorLandingPage } from './landing-pages/kerala-senior/KeralaSeniorLandingPage';
import { WhatsAppModal } from './components/WhatsAppModal';

interface RouteMetadata {
  title: string;
  description: string;
}

const ROUTE_METADATA: Record<string, RouteMetadata> = {
  '/': {
    title: 'MyHappyJourney — Handcrafted Kerala Tour Packages & Luxury Holidays',
    description:
      'Explore handcrafted Kerala tour packages, deluxe houseboats, and custom itineraries by MyHappyJourney. 5,000+ happy travelers, 150+ ground team, best price guarantee.',
  },
  '/kerala': {
    title: 'Kerala Tour Packages 2026 | Munnar, Alleppey Houseboat & Wayanad | MyHappyJourney',
    description:
      'Book customized Kerala tour packages with private AC cab, dedicated driver, deluxe houseboat cruise, and handpicked 3/4/5-star hotels. Instant free quote.',
  },
  '/kerala-honeymoon': {
    title: 'Kerala Honeymoon Packages 2026 | Romantic Getaways & Houseboat | MyHappyJourney',
    description:
      'Book handcrafted Kerala honeymoon packages with private deluxe houseboat, candlelit dinner, flower bed decoration, romantic Munnar resorts, and private AC cab.',
  },
  '/kerala-family-tours': {
    title: 'Kerala Family Tour Packages 2026 | Munnar, Thekkady & Alleppey Houseboat | MyHappyJourney',
    description:
      'Book handcrafted Kerala family holiday tour packages with private AC cab, kid-friendly deluxe resorts, private houseboat cruise, and dedicated tour coordinator.',
  },
  '/kerala-senior-citizen-tours': {
    title: 'Kerala Senior Citizen Tour Packages 2026 | Relaxed Pace & Caring Support | MyHappyJourney',
    description:
      'Book handcrafted Kerala senior citizen tour packages with leisurely paced itineraries, ground-floor deluxe rooms, wheelchair assistance, private AC cab, and dedicated tour coordinator.',
  },
  '/packages': {
    title: 'Tour Packages & Itineraries | MyHappyJourney',
    description:
      'Browse all customized Kerala holiday packages, Munnar hill station getaways, Alleppey backwater houseboats, and beach escapes with private AC cab and dedicated driver.',
  },
  '/reviews': {
    title: 'Traveler Reviews & Testimonials (4.9/5) | MyHappyJourney',
    description:
      'Read authentic reviews from 5,000+ verified travelers across India. Highly rated on Google, TripAdvisor, and Facebook for seamless family and honeymoon vacations.',
  },
  '/about-us': {
    title: 'About Us — Crafting Unforgettable Journeys Across India | MyHappyJourney',
    description:
      'Learn about MyHappyJourney: over 10 years of experience, 150+ on-ground team members, sustainable travel values, and our commitment to transformative journeys.',
  },
  '/contact-us': {
    title: 'Contact Us — Get In Touch With Our Travel Specialists | MyHappyJourney',
    description:
      'Contact MyHappyJourney for customized tour packages, customized itineraries, and travel support. Visit our Bengaluru office or reach us via phone, WhatsApp, or email.',
  },
};

export default function App() {
  const router = useRouter();
  const pathname = usePathname();

  const getCleanPath = (path: string): string => {
    if (path === '/kerala-senior-citizen-tours' || path.startsWith('/kerala-senior-citizen-tours')) {
      return '/kerala-senior-citizen-tours';
    }
    if (path === '/kerala-family-tours' || path.startsWith('/kerala-family-tours')) {
      return '/kerala-family-tours';
    }
    if (path === '/kerala-honeymoon' || path.startsWith('/kerala-honeymoon')) {
      return '/kerala-honeymoon';
    }
    if (path === '/kerala' || path.startsWith('/kerala')) {
      return '/kerala';
    }
    if (path === '/contact-us' || path.startsWith('/contact-us')) {
      return '/contact-us';
    }
    if (path === '/about-us' || path.startsWith('/about-us')) {
      return '/about-us';
    }
    if (path === '/reviews' || path.startsWith('/reviews')) {
      return '/reviews';
    }
    if (path === '/packages' || path.startsWith('/packages')) {
      return '/packages';
    }
    return '/';
  };

  const currentPath = getCleanPath(pathname || '/');

  // Global WhatsApp Chat Modal state
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [whatsAppDestination, setWhatsAppDestination] = useState<string>('Holiday Tours');
  const [whatsAppDefaultMsg, setWhatsAppDefaultMsg] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleOpenWhatsApp = (e: any) => {
      const detail = e.detail || {};
      setWhatsAppDestination(detail.destination || 'Holiday Tours');
      setWhatsAppDefaultMsg(detail.defaultMessage);
      setIsWhatsAppModalOpen(true);
    };

    window.addEventListener('open-whatsapp-modal', handleOpenWhatsApp);
    return () => window.removeEventListener('open-whatsapp-modal', handleOpenWhatsApp);
  }, []);

  // Dynamically update document.title, meta description, and og:tags whenever currentPath changes
  useEffect(() => {
    const meta = ROUTE_METADATA[currentPath] || ROUTE_METADATA['/'];

    document.title = meta.title;

    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', meta.description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', meta.description);
  }, [currentPath]);

  // Programmatic client navigation using Next.js router
  const navigateTo = (path: string) => {
    const targetPath = getCleanPath(path);
    router.push(targetPath);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDestinationSelect = (destName: string, categoryId?: string) => {
    if (destName.toLowerCase().includes('kerala')) {
      if (categoryId === 'senior' || categoryId === 'senior-citizen' || categoryId === 'luxury') {
        navigateTo('/kerala-senior-citizen-tours');
        return;
      }
      if (categoryId === 'honeymoon' || categoryId === 'romantic') {
        navigateTo('/kerala-honeymoon');
        return;
      }
      if (categoryId === 'family' || categoryId === 'family-holidays') {
        navigateTo('/kerala-family-tours');
        return;
      }
      navigateTo('/kerala');
      return;
    }
    navigateTo('/packages');
  };

  const handleGetQuoteFromAnywhere = () => {
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById('plan-trip-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('plan-trip-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDedicatedLandingPage =
    currentPath === '/kerala' ||
    currentPath === '/kerala-honeymoon' ||
    currentPath === '/kerala-family-tours' ||
    currentPath === '/kerala-senior-citizen-tours';

  return (
    <ClickSpark
      sparkColor="#FF4B00"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#EBF2FF] selection:text-[#0B3996] pb-[70px] md:pb-0 tracking-tight">
        
        {/* 1. Website Header Navigation (Dedicated landing pages have their own specialized header) */}
        {!isDedicatedLandingPage && (
          <Header
            currentPath={currentPath}
            onNavigate={navigateTo}
            onGetQuoteClick={handleGetQuoteFromAnywhere}
          />
        )}

        {/* 2. Route Switching */}
        {currentPath === '/kerala-senior-citizen-tours' ? (
          <main>
            <KeralaSeniorLandingPage
              onBackToHome={() => navigateTo('/')}
            />
          </main>
        ) : currentPath === '/kerala-family-tours' ? (
          <main>
            <KeralaFamilyLandingPage
              onBackToHome={() => navigateTo('/')}
            />
          </main>
        ) : currentPath === '/kerala-honeymoon' ? (
          <main>
            <KeralaHoneymoonLandingPage
              onBackToHome={() => navigateTo('/')}
            />
          </main>
        ) : currentPath === '/kerala' ? (
          <main>
            <KeralaLandingPage
              onBackToHome={() => navigateTo('/')}
            />
          </main>
        ) : currentPath === '/contact-us' ? (
          <main>
            <ContactUsPage
              onBackToHome={() => navigateTo('/')}
            />
          </main>
        ) : currentPath === '/about-us' ? (
          <main>
            <AboutUsPage
              onBackToHome={() => navigateTo('/')}
              onExplorePackages={() => navigateTo('/packages')}
              onContactClick={handleGetQuoteFromAnywhere}
            />
          </main>
        ) : currentPath === '/reviews' ? (
          <main>
            <ReviewsPage
              onBackToHome={() => navigateTo('/')}
              onRequestQuote={handleGetQuoteFromAnywhere}
            />
          </main>
        ) : currentPath === '/packages' ? (
          <main>
            <PackagesPage
              onBackToHome={() => navigateTo('/')}
              onSelectDestination={(dest) => handleDestinationSelect(dest)}
              onGetQuoteClick={handleGetQuoteFromAnywhere}
            />
          </main>
        ) : (
          <main>
            {/* Hero Section */}
            <Hero
              onExploreClick={() => {
                navigateTo('/packages');
              }}
            />

            {/* Trust Section */}
            <TrustStrip />

            {/* Curated Destinations Section */}
            <DestinationsSection
              onSelectDestination={(dest) => {
                handleDestinationSelect(dest);
              }}
            />

            {/* Holidays for Every Traveler */}
            <HolidayCategoriesSection
              onSelectDestination={(dest, categoryId) => {
                handleDestinationSelect(dest, categoryId);
              }}
            />

            {/* International Holidays Section */}
            <InternationalHolidaysSection />

            {/* About Us (Teaser linking to /about-us) */}
            <AboutSection
              onLearnMoreClick={() => {
                navigateTo('/about-us');
              }}
            />

            {/* Why Choose MyHappyJourney */}
            <WhyChooseSection />

            {/* What Our Travelers Say (links to /reviews) */}
            <Reviews onViewAllReviews={() => navigateTo('/reviews')} />

            {/* Plan Your Dream Trip Today (CRM Integrated Form) */}
            <PlanTripFormSection />
          </main>
        )}

        {/* Website Footer (Dedicated landing pages have their own specialized footer) */}
        {!isDedicatedLandingPage && (
          <Footer onNavigate={navigateTo} />
        )}

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Sticky Mobile Bottom Quick Action Bar */}
        {!isDedicatedLandingPage && (
          <StickyMobileCTA
            onExploreClick={() => {
              navigateTo('/packages');
            }}
          />
        )}

        {/* Global WhatsApp Chat Modal */}
        <WhatsAppModal
          isOpen={isWhatsAppModalOpen}
          onClose={() => setIsWhatsAppModalOpen(false)}
          destinationTitle={whatsAppDestination}
          defaultMessage={whatsAppDefaultMsg}
        />

      </div>
    </ClickSpark>
  );
}
