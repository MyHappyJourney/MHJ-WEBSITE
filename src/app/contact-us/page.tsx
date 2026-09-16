import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Contact Us — Get In Touch With Our Travel Specialists | MyHappyJourney',
  description:
    'Contact MyHappyJourney for customized tour packages, customized itineraries, and travel support. Visit our Bengaluru office or reach us via phone, WhatsApp, or email.',
};

export default function ContactUsPageRoute() {
  return <App />;
}
