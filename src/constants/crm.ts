export interface CRMLeadPayload {
  name: string;
  email: string;
  phone: string;
  city: string;
  destination: string;
  from_date: string;
  duration: string;
  adults: number;
  children: number;
  budget: string;
}

/**
 * Standard durations matching the actual packages on the Kerala landing pages:
 * 4N/5D, 5N/6D, 6N/7D, 7N/8D
 */
export const KERALA_DURATION_OPTIONS = [
  '4 NIGHTS / 5 DAYS (4N / 5D)',
  '5 NIGHTS / 6 DAYS (5N / 6D)',
  '6 NIGHTS / 7 DAYS (6N / 7D)',
  '7 NIGHTS / 8 DAYS (7N / 8D)',
];

export const DURATION_OPTIONS = KERALA_DURATION_OPTIONS;

export const BUDGET_OPTIONS = [
  'Under ₹30,000',
  '₹30,000 - ₹50,000',
  '₹50,000 - ₹75,000',
  '₹75,000 - ₹1,00,000',
  '₹1,00,000 - ₹1,50,000',
  '₹1,50,000+',
  'Not decided',
];

export const DESTINATIONS = {
  KERALA: 'Kerala',
  HONEYMOON: 'Kerala Honeymoon',
  FAMILY: 'Kerala Family Tours',
  SENIOR: 'Kerala Senior Citizen Tours',
} as const;

export const DESTINATION_OPTIONS = [
  'Kerala',
  'Kerala Honeymoon',
  'Kerala Family Tours',
  'Kerala Senior Citizen Tours',
];

export const TOP_DEPARTURE_CITIES = [
  'Bangalore',
  'Chennai',
  'Hyderabad',
  'Mumbai',
  'Delhi',
  'Pune',
  'Kolkata',
  'Ahmedabad',
  'Coimbatore',
  'Kochi',
  'Trivandrum',
  'Calicut',
  'Madurai',
  'Trichy',
];
