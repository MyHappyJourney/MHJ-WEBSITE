export interface DestinationCardItem {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  image: string;
  region?: 'north' | 'south' | 'west' | 'northeast' | 'central' | 'islands';
  duration?: string;
  price?: number;
}

/**
 * SINGLE SOURCE OF TRUTH: Top Domestic Destinations.
 * All descriptions and subtitles crafted uniquely for SEO and copyright protection.
 */
export const DOMESTIC_DESTINATIONS: DestinationCardItem[] = [
  {
    id: 'kerala',
    name: 'Kerala',
    subtitle: 'Emerald Backwaters, Munnar Cloud Hills & Kovalam Coast',
    tag: 'Bestseller',
    region: 'south',
    duration: '4N - 7N',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    subtitle: 'Coorg Coffee Hills, Mysuru Palaces & Hampi Heritage',
    tag: 'Popular',
    region: 'south',
    duration: '4N - 7N',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1200&q=90',
  },
];

export interface InternationalDestinationItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

/**
 * Curated International Holidays: Curated international destinations with unique descriptions.
 */
export const INTERNATIONAL_DESTINATIONS: InternationalDestinationItem[] = [
  {
    id: 'singapore',
    name: 'Singapore',
    subtitle: 'Futuristic Gardens, Marina Skyline & Sentosa Island',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    subtitle: 'Petronas Towers, Genting Highlands & Langkawi Sands',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    subtitle: 'Turquoise Andaman Bays, Floating Markets & Bangkok Culture',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    subtitle: 'Emerald Waters of Halong Bay & Lantern-Lit Hoi An',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'bali',
    name: 'Bali',
    subtitle: 'Ubud Terraced Valleys, Cliffside Temples & Beach Sunsets',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85',
  },
];
