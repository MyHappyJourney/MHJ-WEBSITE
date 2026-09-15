import { PackageItem, ItineraryDay, Review, FAQItem, TrustItem } from '../types';

export const PHONE_NUMBER = "+918197417772";
export const DISPLAY_PHONE = "+91 81974 17772";
export const WHATSAPP_NUMBER = "918197417772";
export const ENQUIRY_EMAIL = "mhjenquiry@gmail.com";
export const WHATSAPP_DEFAULT_MSG = encodeURIComponent("Hi MyHappyJourney, I am interested in your Kerala Tour Packages. Please share more details and a quote.");
export const WHATSAPP_GROUP_MSG = encodeURIComponent("Hi MyHappyJourney, I am planning a Kerala tour for a group of more than 9 people. Please share special group discounts, custom itinerary, and quote details.");

export const PACKAGES: PackageItem[] = [
  {
    id: "pkg-4n5d",
    title: "4N / 5D Kerala Delight",
    durationBadge: "4 NIGHTS / 5 DAYS",
    nights: 4,
    days: 5,
    tag: "BEST VALUE",
    rating: 4.9,
    reviewsCount: 840,
    route: "2N Munnar • 1N Thekkady • 1N Alleppey",
    nightSplit: [
      { name: "Munnar", nights: 2 },
      { name: "Thekkady", nights: 1 },
      { name: "Alleppey", nights: 1 }
    ],
    locations: ["Munnar (2N)", "Thekkady (1N)", "Alleppey (1N)"],
    price: 15999,
    originalPrice: 19999,
    image: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/gaurav-kumar-vAFqjkz0oPQ-unsplash.jpg",
    highlights: [
      "2 Nights in scenic Munnar Hill Station",
      "Periyar Wildlife Sanctuary in Thekkady",
      "Overnight Houseboat Cruise in Alleppey with all meals"
    ],
    inclusions: [
      { icon: "Hotel", label: "3★ / 4★ Hotels" },
      { icon: "Car", label: "Private AC Cab" },
      { icon: "Ship", label: "Deluxe Houseboat" },
      { icon: "Utensils", label: "Meals Included" }
    ]
  },
  {
    id: "pkg-5n6d",
    title: "5N / 6D Kerala Explorer",
    durationBadge: "5 NIGHTS / 6 DAYS",
    nights: 5,
    days: 6,
    tag: "HONEYMOON PICK",
    rating: 4.9,
    reviewsCount: 1120,
    route: "2N Munnar • 1N Alleppey Houseboat • 2N Kovalam",
    nightSplit: [
      { name: "Munnar", nights: 2 },
      { name: "Alleppey Houseboat", nights: 1 },
      { name: "Kovalam", nights: 2 }
    ],
    locations: ["Munnar (2N)", "Alleppey Houseboat (1N)", "Kovalam (2N)"],
    price: 20999,
    originalPrice: 26999,
    image: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/kunal-kalra-0vS3dp4mo9U-unsplash.jpg",
    highlights: [
      "2 Nights in lush Munnar Tea Gardens & Waterfalls",
      "1 Night Traditional Alleppey Deluxe Houseboat Stay with meals",
      "2 Nights Beachside relaxation at Kovalam & Poovar Island"
    ],
    inclusions: [
      { icon: "Hotel", label: "3★ / 4★ Hotels" },
      { icon: "Car", label: "Private AC Cab" },
      { icon: "Ship", label: "Houseboat Stay" },
      { icon: "Utensils", label: "Breakfast & Meals" }
    ]
  },
  {
    id: "pkg-6n7d",
    title: "6N / 7D Complete Kerala Package",
    durationBadge: "6 NIGHTS / 7 DAYS",
    nights: 6,
    days: 7,
    tag: "MOST POPULAR",
    rating: 5.0,
    reviewsCount: 2350,
    route: "2N Munnar • 1N Thekkady • 1N Alleppey • 2N Kovalam",
    nightSplit: [
      { name: "Munnar", nights: 2 },
      { name: "Thekkady", nights: 1 },
      { name: "Alleppey", nights: 1 },
      { name: "Kovalam", nights: 2 }
    ],
    locations: ["Munnar (2N)", "Thekkady (1N)", "Alleppey (1N)", "Kovalam (2N)"],
    price: 22999,
    originalPrice: 28999,
    isPopular: true,
    image: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/abhishek-singh-t0MLNrCLsL4-unsplash.jpg",
    highlights: [
      "Comprehensive God's Own Country tour",
      "2 Nights Munnar Hill station & Tea Museum",
      "1 Night Thekkady Spice Garden & Lake Cruise"
    ],
    inclusions: [
      { icon: "Hotel", label: "Premium 3★/4★ Stays" },
      { icon: "Car", label: "Private AC Cab" },
      { icon: "Ship", label: "Deluxe Houseboat" },
      { icon: "Utensils", label: "All Meals Onboard" }
    ]
  },
  {
    id: "pkg-7n8d",
    title: "7N / 8D Grand Kerala Odyssey",
    durationBadge: "7 NIGHTS / 8 DAYS",
    nights: 7,
    days: 8,
    tag: "GRAND LUXURY",
    rating: 4.9,
    reviewsCount: 970,
    route: "1N Cochin • 2N Munnar • 1N Thekkady • 1N Alleppey Houseboat • 2N Kovalam",
    nightSplit: [
      { name: "Cochin", nights: 1 },
      { name: "Munnar", nights: 2 },
      { name: "Thekkady", nights: 1 },
      { name: "Alleppey Houseboat", nights: 1 },
      { name: "Kovalam", nights: 2 }
    ],
    locations: ["Cochin (1N)", "Munnar (2N)", "Thekkady (1N)", "Alleppey Houseboat (1N)", "Kovalam (2N)"],
    price: 24499,
    originalPrice: 30999,
    image: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/ravi-chembula-RCRxQOyPzaM-unsplash%20%281%29.jpg",
    highlights: [
      "1 Night Cochin Heritage & Marine Drive",
      "2 Nights Munnar Tea Gardens & Waterfalls",
      "1 Night Thekkady Wildlife Sanctuary & Spices",
      "1 Night Alleppey Houseboat & 2 Nights Kovalam Beach"
    ],
    inclusions: [
      { icon: "Hotel", label: "Luxury 4★ Stays" },
      { icon: "Car", label: "Private AC Sedan/SUV" },
      { icon: "Ship", label: "Deluxe Houseboat" },
      { icon: "Utensils", label: "Breakfast & Meals" }
    ]
  }
];

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    dayNumber: 1,
    title: "Cochin → Munnar",
    route: "Arrival & Transfer to Hill Station",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Munnar",
    highlights: [
      "Cheeyappara & Valara Waterfalls",
      "Lush Green Tea Gardens",
      "Aromatic Spice Plantation Tour"
    ],
    description: "Arrive at Cochin Airport/Railway station where our private AC driver greets you. Drive through breathtaking misty mountain winding roads towards Munnar. En route visit Cheeyappara and Valara waterfalls and organic spice plantations."
  },
  {
    dayNumber: 2,
    title: "Munnar Sightseeing",
    route: "Full Day Tea Country Exploration",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Munnar",
    highlights: [
      "Eravikulam National Park (Nilgiri Tahr)",
      "Mattupetty Dam & Lake Boating",
      "Echo Point Scenic View",
      "Tata Tea Museum & Tasting"
    ],
    description: "After a delicious breakfast, set off to explore Eravikulam National Park, home to the endangered Nilgiri Tahr. Visit Mattupetty Dam, Echo Point, Kundala Lake and learn about tea processing at the Tata Tea Museum."
  },
  {
    dayNumber: 3,
    title: "Munnar → Thekkady",
    route: "Wildlife Sanctuary & Spice Valley",
    image: "https://images.unsplash.com/photo-1581852017103-68accd5509b6?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Thekkady",
    highlights: [
      "Periyar Wildlife Sanctuary Lake Cruise",
      "Elephant Safari & Interaction",
      "Cardamom & Pepper Spice Walk",
      "Traditional Kathakali Cultural Show"
    ],
    description: "Drive through scenic cardamon hills to Thekkady (Periyar). Take a boating trip on Periyar Lake inside the wildlife reserve to spot wild elephants, gaur, and exotic birds. In the evening enjoy Kathakali dance and Kalaripayattu martial arts performance."
  },
  {
    dayNumber: 4,
    title: "Thekkady → Alleppey",
    route: "Overnight Houseboat Experience",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Alleppey Houseboat",
    highlights: [
      "Private Deluxe Houseboat Cruise",
      "Freshly Cooked Traditional Kerala Lunch",
      "Sunset over Palm-Fringed Canals",
      "Candlelight Dinner & Breakfast Onboard"
    ],
    description: "Board your private traditional Kerala Kettuvallam (Houseboat) at noon. Cruise gently along serene palm-fringed backwater canals, village shorelines and paddy fields. Enjoy authentic Kerala lunch, tea snacks, dinner and breakfast prepared by your onboard chef."
  },
  {
    dayNumber: 5,
    title: "Alleppey → Kovalam",
    route: "Backwaters to Golden Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Kovalam",
    highlights: [
      "Lighthouse Beach Walk",
      "Hawa Beach & Crescent Bay",
      "Panoramic Sunset View at Kovalam Pier"
    ],
    description: "Disembark from the houseboat after breakfast and drive to Kovalam beach town. Check into your beach resort. Spend the afternoon relaxing on the golden sands of Lighthouse Beach, Hawa Beach, and watching the magnificent Arabian Sea sunset."
  },
  {
    dayNumber: 6,
    title: "Kovalam & Poovar Island",
    route: "Coastal Paradise & Mangrove Boating",
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Kovalam",
    highlights: [
      "Poovar Island Mangrove Forest Boating (Optional)",
      "Golden Sand Beach Estuary",
      "Sree Padmanabhaswamy Temple Visit"
    ],
    description: "Visit the magical Poovar Island where river, lake, sea, and beach meet. Enjoy backwater motorboating through dense mangrove forests. Return to Trivandrum to seek blessings at the world-famous Padmanabhaswamy Temple."
  },
  {
    dayNumber: 7,
    title: "Trivandrum Departure",
    route: "Sree Padmanabhaswamy Temple & Drop",
    image: "https://images.unsplash.com/photo-1600100397608-f020f7e43950?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Homebound",
    highlights: [
      "Sree Padmanabhaswamy Temple Heritage Visit",
      "Trivandrum Handicrafts & Spice Shopping",
      "Transfer to Trivandrum Airport / Railway Station"
    ],
    description: "Enjoy breakfast at your resort. Visit the sacred Sree Padmanabhaswamy Temple in Trivandrum. Time permitting, indulge in souvenir shopping for spices, banana chips, and handicrafts. Our driver drops you at Trivandrum Airport/Railway Station with wonderful memories."
  }
];

export const INCLUSIONS = [
  "Accommodation in Handpicked 3-Star / 4-Star Hotels",
  "Daily Breakfast at all Hotels & Resorts",
  "Houseboat Stay with All Meals (Lunch, Evening Tea, Dinner, Breakfast)",
  "Private AC Vehicle (Sedan / SUV) for All Transfers & Sightseeing",
  "Toll, Parking, Fuel, Driver Allowance & Interstate Taxes",
  "Pickup from Cochin / Trivandrum Airport or Railway Station",
  "Drop at Trivandrum / Cochin Airport or Railway Station",
  "Sightseeing as per the customized itinerary",
  "24×7 Travel Assistance & Dedicated Relationship Manager"
];

export const EXCLUSIONS = [
  "Airfare or Train Tickets to/from Kerala",
  "Lunch & Dinner (except during Houseboat stay)",
  "Entry tickets for Monuments, Parks, Shows & Boating fees",
  "Personal expenses like laundry, phone calls, room service, tips",
  "GST / Taxes if applicable as per government norms",
  "Anything not specifically mentioned in the inclusions list"
];

export const WHY_BOOK_ITEMS = [
  {
    title: "Kerala Specialists",
    subtitle: "18+ Years Experience crafting handpicked itineraries",
    icon: "Award"
  },
  {
    title: "Private & Comfortable",
    subtitle: "No Sharing, Private AC Cab dedicated just for your family",
    icon: "Car"
  },
  {
    title: "Best Price Guarantee",
    subtitle: "Direct local rates with zero hidden charges or extra fees",
    icon: "ShieldCheck"
  },
  {
    title: "24×7 Local Support",
    subtitle: "Our ground operations team in Kerala is always with you",
    icon: "Headphones"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Dr. Rajesh & Sunita Sharma",
    location: "Delhi NCR (Family of 4 with 2 kids)",
    rating: 5,
    comment: "Travelled with our 7-year-old and 11-year-old. The private Innova cab, courteous driver Anand, and family-friendly resorts made it completely stress-free. The Alleppey private houseboat was the biggest highlight — kids loved the deck view and fresh food!",
    date: "1 week ago"
  },
  {
    id: "rev-2",
    name: "Meenakshi Sundaram & Family",
    location: "Chennai (3 Generations - 6 Members)",
    rating: 5,
    comment: "We travelled with our 72-year-old parents and two teenage kids. The pace was gentle and never rushed. Hotels had ground-floor rooms with elevator access for my parents, and the team accommodated pure vegetarian food at every stop.",
    date: "3 weeks ago"
  },
  {
    id: "rev-3",
    name: "Amit & Priya Deshmukh",
    location: "Pune (Parents with 4-year-old Toddler)",
    rating: 5,
    comment: "Traveling with a toddler is daunting, but MyHappyJourney made it effortless. The driver drove very smoothly in Munnar ghats to prevent motion sickness, and hotel staff promptly arranged warm milk and mild food for our child.",
    date: "1 month ago"
  },
  {
    id: "rev-4",
    name: "Venkatesh Rao & Family",
    location: "Bangalore (Family of 5)",
    rating: 5,
    comment: "This was our second family tour with them. From Cochin airport pickup to Trivandrum drop, everything ran like clockwork. The spice plantation walk and elephant interaction in Thekkady were huge hits with our children!",
    date: "1 month ago"
  },
  {
    id: "rev-5",
    name: "Deepak & Neha Agarwal",
    location: "Mumbai (Family Vacation + Anniversary)",
    rating: 5,
    comment: "Booked the 6N/7D package for our family annual vacation. Excellent 4-star properties, spotless private cab, and a surprise anniversary cake arranged by their WhatsApp support team on the backwater cruise. Wonderful memories!",
    date: "2 months ago"
  },
  {
    id: "rev-6",
    name: "Sanjay & Ritu Verma",
    location: "Hyderabad (Family Group of 8)",
    rating: 5,
    comment: "We took an 8-person family group tour with grandparents and cousins. The spacious AC Tempo Traveller was pristine and our chauffeur Ramesh was like a caring family member and local guide. Highly recommend for any family visiting Kerala.",
    date: "2 months ago"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is Kerala tour package suitable for families with young kids and senior citizens?",
    answer: "Yes, absolutely! All our family itineraries are custom-designed with relaxed pacing, minimal long road journeys, and comfortable rest stops. We arrange hotels with lifts/ground-floor access for senior citizens, and safe, engaging activities like tea garden walks, gentle boating, and elephant interactions for kids."
  },
  {
    id: "faq-2",
    question: "Will the cab be exclusively private for our family?",
    answer: "Yes, 100% private. You get a dedicated, sanitized AC vehicle (Sedan, Innova Crysta, or Tempo Traveller depending on your family size) along with a verified, experienced chauffeur who stays with your family for all transfers, sightseeing, and shopping from arrival to departure."
  },
  {
    id: "faq-3",
    question: "Can we request child-friendly, non-spicy, or Pure Veg / Jain meals?",
    answer: "Certainly! Daily breakfast is included at all family-friendly resorts with wide buffet selections (South Indian, North Indian, continental). On your private Alleppey houseboat, our onboard chef custom-cooks fresh meals tailored to your family's exact taste — including non-spicy kid meals, pure vegetarian, and Jain preparations."
  },
  {
    id: "faq-4",
    question: "Is the Alleppey houseboat safe and private for families?",
    answer: "Yes. We only book 100% private deluxe/luxury houseboats (no strangers sharing). Each houseboat features air-conditioned bedrooms with attached modern bathrooms, safety railings, life jackets, and a licensed, family-friendly 3-member crew (captain, chef, engine driver)."
  },
  {
    id: "faq-5",
    question: "Can we book interconnected rooms or extra beds for our children?",
    answer: "Yes! When planning your itinerary, our family travel expert can arrange interconnected rooms, adjoining family suites, or rollaway extra mattresses/cots depending on your children's ages and preferences."
  },
  {
    id: "faq-6",
    question: "What support do you provide during our family trip?",
    answer: "You receive a dedicated 24×7 Kerala Relationship Manager available via direct call and WhatsApp throughout your trip, in addition to your local chauffeur. We continuously coordinate hotel check-ins, boat boarding, and any on-the-spot adjustments you need."
  },
  {
    id: "faq-7",
    question: "Can we customize sightseeing or add more leisure time for kids to relax?",
    answer: "Yes, our packages are 100% flexible. Because your cab and driver are private, you set the daily pace. If your children or parents wish to sleep in, relax by the resort swimming pool, or skip a sightseeing spot, you can modify the daily schedule on the go."
  },
  {
    id: "faq-8",
    question: "How do airport pickups and drops work for families?",
    answer: "Your chauffeur will be waiting inside the arrival gate of Cochin (COK) or Trivandrum (TRV) airport holding a name placard for your family. He assists with all your luggage and welcomes you with chilled mineral water to start your stress-free holiday."
  }
];

export const TRUST_ITEMS: TrustItem[] = [
  {
    iconName: "Google",
    title: "Google 4.9 / 5 ⭐",
    subtitle: "2,500+ Reviews"
  },
  {
    iconName: "ShieldCheck",
    title: "ISO Certified",
    subtitle: "ISO 9001:2015 Quality"
  },
  {
    iconName: "Award",
    title: "Kerala Experts",
    subtitle: "18+ Years Experience"
  },
  {
    iconName: "Users",
    title: "5000+",
    subtitle: "Happy Families"
  },
  {
    iconName: "Tag",
    title: "Best Price",
    subtitle: "Guarantee"
  },
  {
    iconName: "Sliders",
    title: "Customisable",
    subtitle: "Tour Packages"
  },
  {
    iconName: "Headphones",
    title: "24×7",
    subtitle: "Customer Support"
  }
];

export interface TravelExperience {
  id: string;
  url: string;
  title: string;
  location: string;
  description?: string;
}

export const TRAVEL_EXPERIENCES: TravelExperience[] = [
  {
    id: "exp-1",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/Screenshot%202026-08-29%20at%204.51.11%E2%80%AFPM.png",
    title: "Dining Experience",
    location: "Kerala Hospitality"
  },
  {
    id: "exp-2",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/ThekkadyPeriyarRiver.jpg",
    title: "Periyar Boating & Wildlife",
    location: "Thekkady"
  },
  {
    id: "exp-3",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/kids-having-fun-in-the-beach-with-their-mother.jpg",
    title: "Beachside Fun & Sunshine",
    location: "Kovalam Beach"
  },
  {
    id: "exp-4",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/Screenshot%202026-08-29%20at%205.01.54%E2%80%AFPM.png",
    title: "Dedicated Private AC Cab",
    location: "Kerala Sightseeing"
  },
  {
    id: "exp-5",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/Screenshot%202026-08-29%20at%205.09.56%E2%80%AFPM.png",
    title: "Happy Travelers at Munnar Tea Gardens",
    location: "Munnar Hills"
  },
  {
    id: "exp-6",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/hb.jpg",
    title: "Traditional Deluxe Houseboat Cruise",
    location: "Alleppey Backwaters"
  },
  {
    id: "exp-7",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/padmanabhaswamy.webp",
    title: "Padmanabhaswamy Temple Heritage",
    location: "Trivandrum"
  },
  {
    id: "exp-8",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/landing%20page%202.webp",
    title: "Scenic Landscapes of Munnar",
    location: "Munnar"
  },
  {
    id: "exp-9",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/honeymoon.webp",
    title: "Romantic Honeymoon Getaways",
    location: "Kerala"
  },
  {
    id: "exp-10",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/group%20tour.webp",
    title: "Memorable Group Tours",
    location: "Kerala Holidays"
  },
  {
    id: "exp-11",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/group%203.webp",
    title: "Family & Group Celebrations",
    location: "Kerala Sightseeing"
  },
  {
    id: "exp-12",
    url: "https://hczb7fxersozfdoh.public.blob.vercel-storage.com/cab.webp",
    title: "Premium AC Cab Fleet & Chauffeurs",
    location: "Kerala Transfers"
  }
];

