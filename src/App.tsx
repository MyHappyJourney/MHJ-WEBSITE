import React, { useState, useEffect } from 'react';
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
import { KeralaLandingPage } from './pages/kerala/KeralaLandingPage';
import { KeralaHoneymoonLandingPage } from './pages/kerala-honeymoon/KeralaHoneymoonLandingPage';
import { KeralaFamilyLandingPage } from './pages/kerala-family/KeralaFamilyLandingPage';

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
  // Sync router path with window.location.pathname (/ | /kerala | /kerala-honeymoon | /kerala-family-tours | /packages | /reviews | /about-us | /contact-us)
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/kerala-family-tours' || path.startsWith('/kerala-family-tours')) {
        return '/kerala-family-tours';
      }
      if (path === '/kerala-honeymoon' || path.startsWith('/kerala-honeymoon')) {
        return '/kerala-honeymoon';
      }
      if (path === '/kerala' || path.startsWith('/kerala/')) {
        return '/kerala';
      }
      if (path === '/contact-us' || path.startsWith('/contact-us/')) {
        return '/contact-us';
      }
      if (path === '/about-us' || path.startsWith('/about-us/')) {
        return '/about-us';
      }
      if (path === '/reviews' || path.startsWith('/reviews/')) {
        return '/reviews';
      }
      if (path === '/packages' || path.startsWith('/packages/')) {
        return '/packages';
      }
    }
    return '/';
  });

  // Dynamically update document.title, meta description, and og:tags whenever currentPath changes
  useEffect(() => {
    const meta = ROUTE_METADATA[currentPath] || ROUTE_METADATA['/'];

    // Update document title
    document.title = meta.title;

    // Update or create meta name="description"
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', meta.description);

    // Update or create Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', meta.title);

    // Update or create Open Graph description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', meta.description);
  }, [currentPath]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/kerala-family-tours' || path.startsWith('/kerala-family-tours')) {
        setCurrentPath('/kerala-family-tours');
      } else if (path === '/kerala-honeymoon' || path.startsWith('/kerala-honeymoon')) {
        setCurrentPath('/kerala-honeymoon');
      } else if (path === '/kerala' || path.startsWith('/kerala/')) {
        setCurrentPath('/kerala');
      } else if (path === '/contact-us' || path.startsWith('/contact-us/')) {
        setCurrentPath('/contact-us');
      } else if (path === '/about-us' || path.startsWith('/about-us/')) {
        setCurrentPath('/about-us');
      } else if (path === '/reviews' || path.startsWith('/reviews/')) {
        setCurrentPath('/reviews');
      } else if (path === '/packages' || path.startsWith('/packages/')) {
        setCurrentPath('/packages');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Programmatic client navigation that pushes state to browser history
  const navigateTo = (path: string) => {
    let cleanPath = '/';
    if (path === '/kerala-family-tours' || path.startsWith('/kerala-family-tours')) {
      cleanPath = '/kerala-family-tours';
    } else if (path === '/kerala-honeymoon' || path.startsWith('/kerala-honeymoon')) {
      cleanPath = '/kerala-honeymoon';
    } else if (path === '/kerala' || path.startsWith('/kerala')) {
      cleanPath = '/kerala';
    } else if (path === '/contact-us' || path.startsWith('/contact-us')) {
      cleanPath = '/contact-us';
    } else if (path === '/about-us' || path.startsWith('/about-us')) {
      cleanPath = '/about-us';
    } else if (path === '/reviews' || path.startsWith('/reviews')) {
      cleanPath = '/reviews';
    } else if (path === '/packages' || path.startsWith('/packages')) {
      cleanPath = '/packages';
    }

    if (cleanPath !== currentPath) {
      window.history.pushState({}, '', cleanPath);
      setCurrentPath(cleanPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDestinationSelect = (destName: string, categoryId?: string) => {
    if (destName.toLowerCase().includes('kerala')) {
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
    currentPath === '/kerala-family-tours';

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
        {currentPath === '/kerala-family-tours' ? (
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

      </div>
    </ClickSpark>
  );
}
