import type { Metadata } from 'next';
import App from '../App';

export const metadata: Metadata = {
  title: 'MyHappyJourney — Handcrafted Kerala Tour Packages & Luxury Holidays',
  description:
    'Explore handcrafted Kerala tour packages, deluxe houseboats, and custom itineraries by MyHappyJourney. 5,000+ happy travelers, 150+ ground team, best price guarantee.',
};

export default function HomePage() {
  return <App />;
}
