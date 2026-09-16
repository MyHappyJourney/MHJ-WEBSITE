import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Traveler Reviews & Testimonials (4.9/5) | MyHappyJourney',
  description:
    'Read authentic reviews from 5,000+ verified travelers across India. Highly rated on Google, TripAdvisor, and Facebook for seamless family and honeymoon vacations.',
};

export default function ReviewsPageRoute() {
  return <App />;
}
