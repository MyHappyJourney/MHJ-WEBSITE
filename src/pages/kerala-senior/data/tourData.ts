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
    title: "4N / 5D Senior Serenity Tour",
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
      "2 Nights gentle Munnar hill stay with elevator / ground-floor priority",
      "Relaxed Periyar lake view & soothing spice garden walk",
      "Overnight peaceful backwater cruise in Alleppey with all meals"
    ],
    inclusions: [
      { icon: "Hotel", label: "Lift-Access 3★/4★ Stays" },
      { icon: "Car", label: "Chauffeur Assisted Cab" },
      { icon: "Ship", label: "Deluxe Houseboat" },
      { icon: "Utensils", label: "Mild & Custom Meals" }
    ]
  },
  {
    id: "pkg-5n6d",
    title: "5N / 6D Senior Leisure & Beaches",
    durationBadge: "5 NIGHTS / 6 DAYS",
    nights: 5,
    days: 6,
    tag: "POPULAR PICK",
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
      "2 Nights in scenic Munnar Tea Country with leisurely sightseeing",
      "1 Night traditional private Alleppey deluxe houseboat with chef",
      "2 Nights peaceful coastal relaxation at Kovalam & Poovar backwaters"
    ],
    inclusions: [
      { icon: "Hotel", label: "Senior-Friendly Stays" },
      { icon: "Car", label: "Private Smooth AC Cab" },
      { icon: "Ship", label: "Easy-Board Houseboat" },
      { icon: "Utensils", label: "Fresh Breakfast & Meals" }
    ]
  },
  {
    id: "pkg-6n7d",
    title: "6N / 7D Complete Kerala for Senior Citizens",
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
      "Zero-rush comprehensive God's Own Country tour for seniors",
      "2 Nights Munnar hills with tea museum & scenic valley viewpoints",
      "1N Thekkady lake cruise, 1N Alleppey houseboat & 2N Kovalam beach/temple"
    ],
    inclusions: [
      { icon: "Hotel", label: "Accessible 3★/4★ Stays" },
      { icon: "Car", label: "Dedicated AC Cab & Driver" },
      { icon: "Ship", label: "Deluxe Houseboat Stay" },
      { icon: "Utensils", label: "Custom Diet Options" }
    ]
  },
  {
    id: "pkg-7n8d",
    title: "7N / 8D Grand Kerala Heritage & Pilgrimage",
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
      "1 Night Cochin Heritage walk & relaxing Marine Drive",
      "2 Nights Munnar misty hills with frequent rest breaks & tea tasting",
      "Thekkady wildlife, tranquil Alleppey houseboat & Padmanabhaswamy Temple darshan"
    ],
    inclusions: [
      { icon: "Hotel", label: "Premium 4★ Lift Stays" },
      { icon: "Car", label: "Spacious AC Innova/Cab" },
      { icon: "Ship", label: "Deluxe Houseboat" },
      { icon: "Utensils", label: "All Meals Onboard" }
    ]
  }
];

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    dayNumber: 1,
    title: "Cochin → Munnar",
    route: "Arrival, Warm Welcome & Scenic Mountain Drive",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Munnar",
    highlights: [
      "Airport/Station Welcome & Luggage Handling",
      "Gentle Viewpoints at Cheeyappara & Valara Waterfalls",
      "Aromatic Spice Plantation Walk at Your Own Pace"
    ],
    description: "Arrive at Cochin Airport or Railway Station where our courteous chauffeur receives you with luggage assistance. Enjoy a comfortable, gentle drive through misty tea hills with plenty of refreshment stops en route to your senior-friendly resort in Munnar."
  },
  {
    dayNumber: 2,
    title: "Munnar Leisure Sightseeing",
    route: "Relaxed Tea Country & Scenic Vistas",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Munnar",
    highlights: [
      "Mattupetty Dam & Serene Lake Promenade",
      "Scenic Echo Point & Kundala Lake Photo Stop",
      "Tata Tea Museum with Fresh Tea Tasting & Video Show"
    ],
    description: "Begin your morning at your own comfortable hour with a hearty breakfast. Visit the accessible spots of Munnar including Mattupetty Dam, Echo Point, and the Tea Museum with seating arrangements and fresh tea tasting."
  },
  {
    dayNumber: 3,
    title: "Munnar → Thekkady",
    route: "Cardamom Hills & Wildlife Lake Sanctuary",
    image: "https://images.unsplash.com/photo-1581852017103-68accd5509b6?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Thekkady",
    highlights: [
      "Periyar Lake Wildlife Cruise with Seated Views",
      "Relaxed Spice Plantation Guided Tour",
      "Evening Cultural Kathakali Performance (Optional)"
    ],
    description: "Enjoy a scenic drive through cardamom hills to Thekkady. Take a relaxing boat cruise on Periyar Lake inside the sanctuary where wild elephants and deer come to the water edge. In the evening, watch the classical Kathakali dance with comfortable auditorium seating."
  },
  {
    dayNumber: 4,
    title: "Thekkady → Alleppey",
    route: "Tranquil Backwater Houseboat Cruise",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Alleppey Houseboat",
    highlights: [
      "Private Deluxe Houseboat with Dedicated Staff",
      "Freshly Cooked Mild Traditional Kerala Lunch",
      "Quiet Backwater Village Cruise & Sunset over Canals",
      "Ground-Level Comfortable Bed & Attached Bathroom"
    ],
    description: "Board your private deluxe houseboat at noon with crew assistance. Glide smoothly along serene backwater canals, witnessing peaceful rural life. Enjoy warm, fresh, non-spicy meals prepared by your personal chef on board."
  },
  {
    dayNumber: 5,
    title: "Alleppey → Kovalam",
    route: "Serene Backwaters to Gentle Coastal Haven",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Kovalam",
    highlights: [
      "Smooth Disembarkation & Coastal Highway Drive",
      "Relaxed Resort Check-in with Sea Breeze",
      "Evening Stroll along Kovalam Lighthouse Beach Promenade"
    ],
    description: "Disembark from the houseboat after breakfast and drive along the scenic coastal road to Kovalam. Check in to your beach resort. Spend a serene afternoon unwinding by the calm sea or enjoying an authentic Ayurvedic foot massage."
  },
  {
    dayNumber: 6,
    title: "Kovalam, Poovar & Trivandrum",
    route: "Coastal Charms & Sacred Temple Blessings",
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Kovalam",
    highlights: [
      "Gentle Motorboating through Poovar Mangrove Estuary",
      "Visit to Sacred Sree Padmanabhaswamy Temple",
      "Relaxed Shopping for Authentic Spices & Handlooms"
    ],
    description: "Take a calming morning boat ride through Poovar mangrove estuary where the lake meets the sea. Later, visit Trivandrum to seek blessings at the historic Sree Padmanabhaswamy Temple with coordinated senior darshan guidance."
  },
  {
    dayNumber: 7,
    title: "Trivandrum Departure",
    route: "Souvenirs, Warm Farewell & Airport Drop",
    image: "https://images.unsplash.com/photo-1600100397608-f020f7e43950?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Homebound",
    highlights: [
      "Leisurely Breakfast at Resort",
      "Souvenir Shopping for Kerala Banana Chips & Spices",
      "Chauffeur Transfer to Trivandrum Airport / Railway Station"
    ],
    description: "Savor a relaxed breakfast. If time permits, visit the local artisan market for fresh spices, organic coconut oil, and banana chips. Your chauffeur assists with luggage and drops you at Trivandrum Airport or Railway Station with cherished memories."
  }
];

export const INCLUSIONS = [
  "Handpicked 3-Star / 4-Star Hotels with Lift Access or Ground-Floor Priority",
  "Daily Fresh Buffet Breakfast with Custom Dietary / Less Spicy Options",
  "100% Private Deluxe Houseboat with Easy Boarding & All Fresh Meals Included",
  "Private Sanitized AC Vehicle (Sedan / Innova Crysta / Ertiga) for All Transfers & Sightseeing",
  "Senior-Care Trained Chauffeur Assisting with Luggage & Safe Ghat Driving",
  "Toll, Parking, Fuel, Driver Allowance, Interstate Permits & Road Taxes",
  "Doorstep Airport / Railway Station Welcome Assistance with Name Placard",
  "Relaxed Daily Sightseeing Schedule with Ample Rest & Refreshment Stops",
  "24×7 Dedicated Senior-Care Travel Manager for Daily Well-Being Checks"
];

export const EXCLUSIONS = [
  "Airfare or Train Tickets to/from Kerala (Booking guidance available upon request)",
  "Strenuous Treks, High-Altitude Trails & Extreme Water Sports (Not recommended for seniors)",
  "Lunch & Dinner (except during Houseboat stay where all fresh meals are included)",
  "Entry tickets for Monuments, Wildlife Safaris, Museums & Cultural Shows",
  "Personal Medical Expenses, Doctor Consultations or Special Medicines",
  "Personal expenses like laundry, room service, telephone calls, and tips",
  "GST / Taxes as applicable per Government of India norms"
];

export const WHY_BOOK_ITEMS = [
  {
    title: "Senior-Care Specialists",
    subtitle: "18+ Years tailoring relaxed, safe Kerala tours for elderly travelers",
    icon: "Award"
  },
  {
    title: "Private & Comfortable",
    subtitle: "Sanitized AC Cabs with gentle driving and full luggage assistance",
    icon: "Car"
  },
  {
    title: "Accessible Stays",
    subtitle: "Handpicked hotels featuring elevators, ground-floor rooms & mild meals",
    icon: "ShieldCheck"
  },
  {
    title: "24×7 Care & Support",
    subtitle: "Dedicated relationship manager doing daily health & comfort check-ins",
    icon: "Headphones"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Justice (Retd.) K. Ramanathan & Usha Ramanathan",
    location: "Bengaluru (Senior Couple - 71 & 67 yrs)",
    rating: 5,
    comment: "We booked the 6N/7D package with some hesitation due to my knee arthritis. But MyHappyJourney made the tour extraordinarily easy. The chauffeur Praveen drove very smoothly on Munnar curves, all hotels had ground-floor rooms with lifts, and the Alleppey houseboat crew was polite and attentive. Highly recommend for seniors!",
    date: "1 week ago"
  },
  {
    id: "rev-2",
    name: "Col. Suresh & Rekha Bakshi",
    location: "Delhi NCR (Senior Couple - 69 & 66 yrs)",
    rating: 5,
    comment: "Our children booked this Kerala holiday for our 40th wedding anniversary. The relaxed itinerary allowed us to wake up without rush, enjoy calm mornings, and explore at our own pace. The team checked on our comfort every single evening via WhatsApp. Exceptional hospitality!",
    date: "2 weeks ago"
  },
  {
    id: "rev-3",
    name: "Dr. Ananya Iyer (Booked for Parents)",
    location: "Mumbai (Parents aged 74 & 70 yrs)",
    rating: 5,
    comment: "I booked this trip for my elderly parents traveling alone from Mumbai. The MyHappyJourney team treated them like their own family. Driver Anand was always ready to hold an umbrella, carry their bags, and wait patiently at temples. My parents returned rejuvenated with glowing smiles!",
    date: "3 weeks ago"
  },
  {
    id: "rev-4",
    name: "Mr. & Mrs. Harishankar Mittal",
    location: "Jaipur (Retired Couple - 68 & 64 yrs)",
    rating: 5,
    comment: "Being strict vegetarians and preferring mild food, we were worried about meals in South India. The hotels and the houseboat chef specially prepared satvik, non-spicy vegetarian dishes for us. The backwater cruise in Alleppey was the most tranquil experience of our lives.",
    date: "1 month ago"
  },
  {
    id: "rev-5",
    name: "Vaidyanathan & Jayashree",
    location: "Chennai (Senior Citizens - 72 & 68 yrs)",
    rating: 5,
    comment: "The Padmanabhaswamy Temple darshan in Trivandrum and the scenic tea estate drive in Munnar were beautifully organized. No steep walking, spotless AC Innova, and excellent local assistance throughout. Thank you for making our golden age travel so dignified and effortless.",
    date: "1 month ago"
  },
  {
    id: "rev-6",
    name: "Rameshwar & Savitri Pandey",
    location: "Pune (Senior Citizen Group of 6)",
    rating: 5,
    comment: "A group of 6 retired friends traveled together. The spacious vehicle, clean washroom stops, gentle tea estate strolls, and 24/7 coordinator support made this trip stress-free. If you are looking for a reliable tour company for senior citizens, look no further!",
    date: "2 months ago"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is this Kerala tour package suitable for senior citizens with mobility concerns or knee pain?",
    answer: "Yes, 100%! We design our senior citizen tours with relaxed pacing, minimal walking, and step-free convenience. All hotels are vetted for lift (elevator) access or priority ground-floor rooms with western attached bathrooms. Sightseeing spots are chosen where cabs can drop you close to viewpoints, and wheelchair assistance can be arranged on request at major attractions."
  },
  {
    id: "faq-2",
    question: "How do you ensure comfortable and safe travel on Kerala's hill roads (e.g. Munnar)?",
    answer: "Our drivers are specially trained for senior citizens. They drive at a gentle, smooth pace without sharp turns or abrupt braking to prevent motion sickness. We provide spacious, comfortable AC vehicles (like Innova Crysta or comfortable sedans) and schedule frequent rest, tea, and hygienic restroom breaks every 1.5 to 2 hours."
  },
  {
    id: "faq-3",
    question: "Can we request mild, diabetic-friendly, or Pure Vegetarian / Jain food?",
    answer: "Absolutely. We understand that senior travelers often require light, non-spicy, low-oil, or specific dietary preparations. Daily buffet breakfasts at all partner resorts offer hot South & North Indian options. On your private Alleppey houseboat, the onboard chef will customize each meal according to your exact preferences — including Jain, no onion/garlic, diabetic-friendly, or mild homestyle food."
  },
  {
    id: "faq-4",
    question: "How flexible is the daily itinerary? Can we take afternoon rest and start late?",
    answer: "Because you have a 100% private cab and chauffeur dedicated exclusively to you, the daily schedule runs entirely at your comfort. There is zero rush. You can wake up late, start after a relaxed breakfast, take an afternoon nap at the resort, or skip any spot whenever you feel tired."
  },
  {
    id: "faq-5",
    question: "What medical assistance and emergency support do you provide during the tour?",
    answer: "Your safety and well-being are our highest priority. Every vehicle is equipped with a basic first-aid kit. Furthermore, our dedicated 24×7 Senior-Care Travel Manager and local chauffeurs are familiar with leading hospitals, clinics, and pharmacies in Cochin, Munnar, Thekkady, Alleppey, and Trivandrum to assist immediately if any medical need arises."
  },
  {
    id: "faq-6",
    question: "Can sons/daughters book this Kerala tour for their elderly parents living in India?",
    answer: "Yes! Over 60% of our senior tours are booked by loving children (including NRIs across USA, UK, UAE, and Singapore) for their parents. We provide complete doorstep-to-doorstep care: our driver receives your parents at the airport with a name placard, carries their luggage, assists with check-ins, and our support team sends regular WhatsApp updates and photos to you throughout their trip."
  },
  {
    id: "faq-7",
    question: "How accessible and comfortable is the private Alleppey houseboat for seniors?",
    answer: "We select premium, stable houseboats with safe, wide boarding planks and crew assistance. All bedrooms are situated on the lower deck with ground-level access, air-conditioning, and modern attached western toilets. The gentle, silent cruise through calm waters is exceptionally soothing and relaxing for elderly guests."
  },
  {
    id: "faq-8",
    question: "Can we include sacred temple visits like Sree Padmanabhaswamy Temple or Guruvayur?",
    answer: "Yes! Pilgrimage and spiritual darshans are a favorite among senior travelers. We coordinate temple visits according to convenient auspicious timings, advise on dress codes, and guide on senior-citizen queue facilities or battery-car/wheelchair availability to ensure a peaceful, blessed darshan."
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

