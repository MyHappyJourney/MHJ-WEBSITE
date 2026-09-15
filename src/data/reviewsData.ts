export interface TravelerReview {
  id: string;
  name: string;
  location: string;
  date: string;
  tourName: string;
  comment: string;
  rating: number;
  avatar?: string;
  initials?: string;
  initialsBg?: string;
  verified: boolean;
}

export const ALL_REVIEWS: TravelerReview[] = [
  {
    id: 'rev-1',
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    date: 'March 2026',
    tourName: 'Assam Family Tour — 5N/6D',
    comment:
      '“Absolutely incredible experience! MyHappyJourney arranged everything flawlessly — the Kaziranga elephant safari at dawn was the highlight of our trip. The ground team was professional, friendly, and always on time. Our family of 5 had a trip we will talk about for years. Highly recommended!”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Priya Verma',
    location: 'Delhi',
    date: 'February 2026',
    tourName: 'Meghalaya Honeymoon Package — 4N/5D',
    comment:
      '“Our honeymoon was absolutely magical, thanks to MyHappyJourney. From the private Brahmaputra sunset cruise to the candlelight dinner in the jungle — every detail was perfect. The luxury resort was stunning. We felt completely taken care of. Cannot thank the team enough!”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Punith Reddy',
    location: 'Bangalore',
    date: 'January 2026',
    tourName: 'Assam Wildlife Tour — 6N/7D',
    comment:
      '“MyHappyJourney is the best tour operator I have ever traveled with. I booked the wildlife tour as a solo traveler and was matched with a wonderful small group. Saw a one-horned rhino up close at Kaziranga. The expert naturalist guide was exceptional. Will book again for Rajasthan next!”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Ashutosh Patel',
    location: 'Ahmedabad',
    date: 'March 2026',
    tourName: 'Meghalaya Tea Garden Tour — 5N/6D',
    comment:
      '“What a unique experience! The heritage planter bungalow stay was straight out of a period film. Tea plucking at dawn, factory visit, sunset tea tasting — all beautifully organized. MyHappyJourney has a real eye for detail. The pricing was very transparent with zero hidden costs.”',
    rating: 5,
    initials: 'A',
    initialsBg: 'bg-[#7c3aed]',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Chaitra Krishnamurthy',
    location: 'Chennai',
    date: 'December 2025',
    tourName: 'Meghalaya Luxury Tour — 6N/7D',
    comment:
      '“We splurged on the luxury package for our 25th anniversary and it was worth every rupee. 5-star resort, private wildlife safari, exclusive cultural show — the personal concierge made us feel like royalty. MyHappyJourney truly understands what luxury travel means. Exceptional from start to finish.”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Sneha Bhatt',
    location: 'Pune',
    date: 'February 2026',
    tourName: 'Meghalaya Group Tour — 6N/7D',
    comment:
      '“Organized a trip with 12 friends for my birthday and MyHappyJourney pulled it off perfectly! The Bihu dance show was a blast, Majuli Island exploration was surreal, and the group discounts were amazing. The entire team was responsive on WhatsApp whenever we had a query. Loved every moment!”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
  },
  {
    id: 'rev-7',
    name: 'Suresh Rajan',
    location: 'Hyderabad',
    date: 'January 2026',
    tourName: 'Assam Family Tour — 5N/6D',
    comment:
      '“Traveled with my wife and two kids aged 8 and 12. MyHappyJourney curated a perfectly family-friendly itinerary. The kids loved the jeep safari and river cruise. Accommodation was clean and comfortable. The team anticipated every family need. Will definitely book our next trip with them!”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
  },
  {
    id: 'rev-8',
    name: 'Rudrakshi Sharma',
    location: 'Jaipur',
    date: 'March 2026',
    tourName: 'Meghalaya Honeymoon Package — 4N/5D',
    comment:
      '“I had read so many good reviews before booking and MyHappyJourney exceeded my expectations! The Meghalaya tour was breathtaking — living root bridges, crystal-clear Dawki river, Shillong nightlife. Our guide was knowledgeable and passionate. The itinerary was perfectly paced. 10/10!”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
  },
  {
    id: 'rev-9',
    name: 'Sankya Nair',
    location: 'Kolkata',
    date: 'February 2026',
    tourName: 'Assam Wildlife Tour — 6N/7D',
    comment:
      '“As a wildlife photographer, I have been on many safaris but the Kaziranga experience organized by MyHappyJourney was exceptional. They arranged early morning jeep access, expert wildlife spotters, and even a birdwatching walk I had not expected. Photographed 3 rhinos and a tiger! Absolutely brilliant.”',
    rating: 5,
    initials: 'S',
    initialsBg: 'bg-[#dc2626]',
    verified: true,
  },
  {
    id: 'rev-10',
    name: 'Jaishree Pillai',
    location: 'Kochi',
    date: 'January 2026',
    tourName: 'Meghalaya Tea Garden Tour — 5N/6D',
    comment:
      '“As someone who drinks tea every morning, this tour was a dream come true. MyHappyJourney arranged access to private tea estates, a factory tour, and we even had tea with the estate manager over breakfast. The planter bungalow was cozy and atmospheric. Highly recommended for tea lovers!”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
  },
];
