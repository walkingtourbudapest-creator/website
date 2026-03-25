export type TourCategory = "walking" | "private" | "around-budapest";

// Pricing is total group price indexed by guest count (1-10)
export type PricingTier = [number, number, number, number, number, number, number, number, number, number];

export interface Tour {
  slug: string;
  name: string;
  subtitle: string;
  category: TourCategory;
  duration: string;
  pricing: PricingTier;
  currency: string;
  meetingPoint: string;
  meetingAddress: string;
  startTime: string;
  description: string;
  highlights: string[];
  includes: string[];
  image: string;
  cancellationPolicy: string;
  stripeProductId: string;
  available: boolean;
}

export function getTotalPrice(tour: Tour, guests: number): number {
  const idx = Math.min(Math.max(guests, 1), 10) - 1;
  return tour.pricing[idx];
}

export function getStartingPrice(tour: Tour): number {
  return tour.pricing[0];
}

const cancellationPolicy =
  "Free cancellation up to 24 hours before the start time of your tour for a full refund. Cancellations made less than 24 hours before the tour start time are non-refundable.";

export const tours: Tour[] = [
  {
    slug: "budapest-101",
    name: "Budapest 101",
    subtitle: "Walking Tour with Chimney Cake and Metro Pass",
    category: "walking",
    duration: "3 hr 30 min",
    pricing: [113.9, 124.9, 136.9, 148.9, 161.9, 173.9, 186.9, 198.9, 212.9, 226.9],
    currency: "EUR",
    meetingPoint: "In front of Hungarian State Opera",
    meetingAddress: "1061 Budapest, Andrássy út 22.",
    startTime: "10:00 AM",
    description:
      "The well beaten path of the first timer in Budapest. With this tour you will visit the must-see in Budapest. Discover urban legends, Hungarian history and the downtown of Budapest after a quick stop for a traditional street food, the Chimney cake.",
    highlights: [
      "Hungarian State Opera",
      "Heroes' Square",
      "Millennium Metro (tickets included)",
      "St. Stephen's Basilica",
      "Chimney Cake tasting",
      "Parliament",
    ],
    includes: ["Licensed local guide", "Metro pass", "Chimney Cake"],
    image: "/images/tours/budapest-101.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "buda-castle-walk",
    name: "Buda Castle Walk",
    subtitle: "With entry to Matthias Church, Cake & Coffee",
    category: "walking",
    duration: "3 hr 30 min",
    pricing: [122.9, 142.9, 163.9, 184.9, 206.9, 228.9, 251.9, 274.9, 298.9, 322.9],
    currency: "EUR",
    meetingPoint: "Buda Castle District",
    meetingAddress: "Budapest, Buda Castle District",
    startTime: "10:00 AM",
    description:
      "Explore the historic Buda Castle District with a knowledgeable local guide. Visit the stunning Matthias Church, enjoy panoramic views of the city, and finish with a traditional Hungarian cake and coffee at a local café.",
    highlights: [
      "Buda Castle",
      "Matthias Church (entry included)",
      "Fisherman's Bastion",
      "Panoramic city views",
      "Hungarian cake & coffee",
      "Royal Palace grounds",
    ],
    includes: [
      "Licensed local guide",
      "Matthias Church entry",
      "Cake & coffee",
    ],
    image: "/images/tours/buda-castle.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "budapest-ruin-bars",
    name: "Budapest Ruin Bars",
    subtitle: "Evening Walking Tour with Drinks & Snacks",
    category: "walking",
    duration: "3 hr 30 min",
    pricing: [168.9, 208.9, 249.9, 290.9, 332.9, 376.9, 419.9, 464.9, 510.9, 556.9],
    currency: "EUR",
    meetingPoint: "Jewish Quarter",
    meetingAddress: "Budapest, Jewish Quarter",
    startTime: "6:00 PM",
    description:
      "Discover Budapest's legendary ruin bar scene on this evening walking tour. Explore the quirky, artistic bars built in abandoned buildings of the Jewish Quarter. Enjoy drinks and snacks as you experience the vibrant nightlife culture that makes Budapest unique.",
    highlights: [
      "Famous ruin bars",
      "Jewish Quarter history",
      "Local drinks included",
      "Snacks at each stop",
      "Street art & culture",
      "Evening atmosphere",
    ],
    includes: ["Licensed local guide", "Drinks", "Snacks"],
    image: "/images/tours/ruin-bars.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "budapest-bites",
    name: "Budapest Bites",
    subtitle: "Food Walking Tour with Tastings",
    category: "walking",
    duration: "3 hr 30 min",
    pricing: [156.9, 188.9, 222.9, 256.9, 291.9, 326.9, 362.9, 399.9, 437.9, 474.9],
    currency: "EUR",
    meetingPoint: "City center",
    meetingAddress: "Budapest, city center",
    startTime: "11:00 AM",
    description:
      "Taste your way through Budapest on this delicious food tour. Sample traditional Hungarian dishes, visit local markets, and discover the flavors that make Hungarian cuisine so special. From street food to hidden gems, this tour is a feast for all senses.",
    highlights: [
      "Traditional Hungarian food tastings",
      "Local markets",
      "Street food stops",
      "Hidden culinary gems",
      "Cultural food history",
      "Local drinks",
    ],
    includes: ["Licensed local guide", "Food tastings", "Drinks"],
    image: "/images/tours/budapest-bites.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "all-about-budapest",
    name: "All About Budapest",
    subtitle: "Full Day Walking Tour with Lunch & Public Transport Pass",
    category: "walking",
    duration: "6 hr",
    pricing: [268.9, 326.9, 384.9, 444.9, 506.9, 568.9, 632.9, 697.9, 763.9, 831.9],
    currency: "EUR",
    meetingPoint: "In front of Hungarian State Opera",
    meetingAddress: "1061 Budapest, Andrássy út 22.",
    startTime: "10:00 AM",
    description:
      "The ultimate Budapest experience in one day. This comprehensive full-day tour covers both Buda and Pest sides of the city. Enjoy a traditional Hungarian lunch, ride the historic tram and metro, and discover everything from grand boulevards to hidden courtyards.",
    highlights: [
      "Both Buda and Pest sides",
      "Hungarian lunch included",
      "Public transport pass",
      "Parliament area",
      "Buda Castle District",
      "St. Stephen's Basilica",
      "Central Market Hall",
      "Danube promenade",
    ],
    includes: [
      "Licensed local guide",
      "Lunch",
      "Public transport pass",
    ],
    image: "/images/tours/all-about-budapest.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "private-buda-castle",
    name: "Private Buda Castle Walking Tour",
    subtitle: "Hotel Pickup, Entry to Matthias Church and Hungarian Cake & Coffee",
    category: "private",
    duration: "3 hr 30 min",
    pricing: [173.9, 197.9, 222.9, 247.9, 272.9, 298.9, 324.9, 352.9, 379.9, 407.9],
    currency: "EUR",
    meetingPoint: "Hotel pickup",
    meetingAddress: "Your hotel in Budapest",
    startTime: "Flexible",
    description:
      "A private version of our popular Buda Castle Walk. Your personal guide picks you up from your hotel and takes you on an exclusive tour of the Buda Castle District. Enjoy personalized attention and the freedom to explore at your own pace.",
    highlights: [
      "Hotel pickup & drop-off",
      "Buda Castle",
      "Matthias Church (entry included)",
      "Fisherman's Bastion",
      "Hungarian cake & coffee",
      "Personalized experience",
    ],
    includes: [
      "Licensed local guide",
      "Hotel pickup",
      "Matthias Church entry",
      "Cake & coffee",
    ],
    image: "/images/tours/private-buda-castle.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "the-grand-budapest",
    name: "The Grand Budapest",
    subtitle: "Private Half Day Guided Tour by Car from Your Hotel",
    category: "private",
    duration: "3 hr 30 min",
    pricing: [252.9, 254.9, 257.9, 259.9, 263.9, 266.9, 268.9, 271.9, 274.9, 277.9],
    currency: "EUR",
    meetingPoint: "Hotel pickup",
    meetingAddress: "Your hotel in Budapest",
    startTime: "Flexible",
    description:
      "Experience Budapest in style with this private half-day tour by car. Your guide picks you up from your hotel and shows you the city's grandest sights, covering more ground than any walking tour could. Perfect for those who prefer comfort without missing the highlights.",
    highlights: [
      "Private car & guide",
      "Hotel pickup & drop-off",
      "Buda Castle District",
      "Heroes' Square",
      "Parliament",
      "Danube panorama",
      "City Park",
    ],
    includes: [
      "Licensed local guide",
      "Private car",
      "Hotel pickup & drop-off",
    ],
    image: "/images/tours/grand-budapest.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "private-budapest-101",
    name: "Private Budapest 101",
    subtitle: "With Chimney Cake and Public Transport Tickets",
    category: "private",
    duration: "3 hr 30 min",
    pricing: [162.9, 176.9, 189.9, 204.9, 218.9, 233.9, 248.9, 263.9, 278.9, 294.9],
    currency: "EUR",
    meetingPoint: "Hotel pickup or arranged meeting point",
    meetingAddress: "Your hotel in Budapest",
    startTime: "Flexible",
    description:
      "A private version of our best-selling Budapest 101 tour. Enjoy the same unforgettable route with a dedicated guide, flexible timing, and personal attention. Visit the top sights of Budapest at your own pace with a local expert.",
    highlights: [
      "Hungarian State Opera",
      "Heroes' Square",
      "Millennium Metro",
      "St. Stephen's Basilica",
      "Chimney Cake tasting",
      "Parliament",
    ],
    includes: [
      "Licensed local guide",
      "Public transport tickets",
      "Chimney Cake",
    ],
    image: "/images/tours/private-budapest-101.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "private-ruin-bars",
    name: "Private Budapest Ruin Bars Tour",
    subtitle: "With Drinks and Snack",
    category: "private",
    duration: "3 hr 30 min",
    pricing: [188.9, 229.9, 271.9, 313.9, 356.9, 399.9, 444.9, 491.9, 537.9, 584.9],
    currency: "EUR",
    meetingPoint: "Hotel pickup or arranged meeting point",
    meetingAddress: "Your hotel in Budapest",
    startTime: "Flexible",
    description:
      "Explore Budapest's iconic ruin bars with your own private guide. Skip the crowds and get insider access to the best spots in the Jewish Quarter. Enjoy drinks and snacks while learning about the unique culture behind these legendary venues.",
    highlights: [
      "Private guide",
      "Famous ruin bars",
      "Jewish Quarter",
      "Drinks included",
      "Snacks included",
      "Insider tips",
    ],
    includes: [
      "Licensed local guide",
      "Drinks",
      "Snack",
    ],
    image: "/images/tours/private-ruin-bars.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "danube-bend",
    name: "Danube Bend Tour",
    subtitle: "Full Day Trip to Szentendre, Visegrád & Esztergom",
    category: "around-budapest",
    duration: "8 hr",
    pricing: [469.9, 487.9, 504.9, 522.9, 539.9, 557.9, 576.9, 594.9, 613.9, 632.9],
    currency: "EUR",
    meetingPoint: "Hotel pickup",
    meetingAddress: "Your hotel in Budapest",
    startTime: "9:00 AM",
    description:
      "Escape the city and discover the stunning Danube Bend region. Visit the charming artist town of Szentendre, the medieval fortress of Visegrád, and the impressive basilica of Esztergom. A perfect day trip combining history, nature, and Hungarian culture.",
    highlights: [
      "Szentendre artist town",
      "Visegrád fortress",
      "Esztergom Basilica",
      "Danube panoramas",
      "Traditional lunch",
      "Hotel pickup & drop-off",
    ],
    includes: [
      "Licensed local guide & transport",
      "Hotel pickup & drop-off",
      "Entry fees",
    ],
    image: "/images/tours/danube-bend.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "sisi-royal-palace",
    name: "Sisi's Royal Palace Tour",
    subtitle: "Visit the Royal Palace of Gödöllő",
    category: "around-budapest",
    duration: "4 hr",
    pricing: [243.9, 281.9, 319.9, 359.9, 401.9, 442.9, 483.9, 527.9, 571.9, 614.9],
    currency: "EUR",
    meetingPoint: "Hotel pickup",
    meetingAddress: "Your hotel in Budapest",
    startTime: "10:00 AM",
    description:
      "Step into the world of Empress Elisabeth (Sisi) at the Royal Palace of Gödöllő, the second largest baroque palace in Europe. Learn about the fascinating life of the beloved empress and explore the beautifully restored rooms and gardens.",
    highlights: [
      "Royal Palace of Gödöllő",
      "Empress Sisi exhibition",
      "Baroque architecture",
      "Palace gardens",
      "Hotel pickup & drop-off",
    ],
    includes: [
      "Licensed local guide & transport",
      "Hotel pickup & drop-off",
      "Palace entry fee",
    ],
    image: "/images/tours/sisi-palace.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: true,
  },
  {
    slug: "vienna",
    name: "Vienna Day Trip",
    subtitle: "Full Day Private Tour to Vienna by Car",
    category: "around-budapest",
    duration: "10 hr",
    pricing: [1026.9, 1037.9, 1048.9, 1059.9, 1071.9, 1082.9, 1093.9, 1104.9, 1117.9, 1128.9],
    currency: "EUR",
    meetingPoint: "Hotel pickup",
    meetingAddress: "Your hotel in Budapest",
    startTime: "8:00 AM",
    description:
      "Discover the imperial beauty of Vienna on this full-day private tour from Budapest. Travel in comfort by car and explore the highlights of Austria's capital with your personal guide. From the Hofburg Palace to St. Stephen's Cathedral, experience the grandeur of Vienna.",
    highlights: [
      "Private car & guide",
      "Hofburg Palace",
      "St. Stephen's Cathedral",
      "Vienna city center",
      "Schönbrunn Palace area",
      "Hotel pickup & drop-off",
    ],
    includes: [
      "Licensed local guide & transport",
      "Hotel pickup & drop-off",
    ],
    image: "/images/tours/vienna.jpg",
    cancellationPolicy: cancellationPolicy,
    stripeProductId: "",
    available: false,
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getToursByCategory(category: TourCategory): Tour[] {
  return tours.filter((t) => t.category === category);
}

export const categoryLabels: Record<TourCategory | "all", string> = {
  all: "All Tours",
  walking: "Walking Tours",
  private: "Private Tours",
  "around-budapest": "Around Budapest",
};
