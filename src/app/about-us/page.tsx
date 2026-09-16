import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'About Us — Crafting Unforgettable Journeys Across India | MyHappyJourney',
  description:
    'Learn about MyHappyJourney: over 10 years of experience, 150+ on-ground team members, sustainable travel values, and our commitment to transformative journeys.',
};

export default function AboutUsPageRoute() {
  return <App />;
}
