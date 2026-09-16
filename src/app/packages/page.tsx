import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Tour Packages & Itineraries | MyHappyJourney',
  description:
    'Browse all customized Kerala holiday packages, Munnar hill station getaways, Alleppey backwater houseboats, and beach escapes with private AC cab and dedicated driver.',
};

export default function PackagesPageRoute() {
  return <App />;
}
