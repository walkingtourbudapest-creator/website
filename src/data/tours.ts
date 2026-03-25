export type TourCategory = "walking" | "private" | "around-budapest";

export interface Tour {
  slug: string;
  name: string;
  subtitle: string;
  category: TourCategory;
  duration: string;
  price: number;
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

export const tours: Tour[] = [
  {
    slug: "budapest-101",
    name: "Budapest 101",
    subtitle: "Walking Tour with Chimney Cake and Metro Pass",
    category: "walking",
    duration: "3 hr 30 min",
    price: 119,
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
    includes: ["Professional local guide", "Metro pass", "Chimney Cake"],
    image: "/images/tours/budapest-101.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour. In case of a non-private tour, your guide can only wait for a maximum of 10 minutes for late arrivals if previously notified.",
    stripeProductId: "",
    available: true,
  },
  {
    slug: "buda-castle-walk",
    name: "Buda Castle Walk",
    subtitle: "With entry to Matthias Church, Cake & Coffee",
    category: "walking",
    duration: "3 hr 30 min",
    price: 129,
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
      "Professional local guide",
      "Matthias Church entry",
      "Cake & coffee",
    ],
    image: "/images/tours/buda-castle.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour. In case of a non-private tour, your guide can only wait for a maximum of 10 minutes for late arrivals if previously notified.",
    stripeProductId: "",
    available: true,
  },
  {
    slug: "budapest-ruin-bars",
    name: "Budapest Ruin Bars",
    subtitle: "Evening Walking Tour with Drinks & Snacks",
    category: "walking",
    duration: "3 hr 30 min",
    price: 159,
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
    includes: ["Professional local guide", "Drinks", "Snacks"],
    image: "/images/tours/ruin-bars.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour. In case of a non-private tour, your guide can only wait for a maximum of 10 minutes for late arrivals if previously notified.",
    stripeProductId: "",
    available: true,
  },
  {
    slug: "all-about-budapest",
    name: "All About Budapest",
    subtitle: "Full Day Walking Tour with Lunch & Public Transport Pass",
    category: "walking",
    duration: "6 hr",
    price: 245,
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
      "Professional local guide",
      "Lunch",
      "Public transport pass",
    ],
    image: "/images/tours/all-about-budapest.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour. In case of a non-private tour, your guide can only wait for a maximum of 10 minutes for late arrivals if previously notified.",
    stripeProductId: "",
    available: true,
  },
  {
    slug: "private-buda-castle",
    name: "Private Buda Castle Walking Tour",
    subtitle: "Hotel Pickup, Entry to Matthias Church and Hungarian Cake & Coffee",
    category: "private",
    duration: "3 hr 30 min",
    price: 179,
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
      "Private local guide",
      "Hotel pickup",
      "Matthias Church entry",
      "Cake & coffee",
    ],
    image: "/images/tours/private-buda-castle.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour.",
    stripeProductId: "",
    available: true,
  },
  {
    slug: "the-grand-budapest",
    name: "The Grand Budapest",
    subtitle: "Private Half Day Guided Tour by Car from Your Hotel",
    category: "private",
    duration: "3 hr 30 min",
    price: 199,
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
      "Private local guide",
      "Private car",
      "Hotel pickup & drop-off",
    ],
    image: "/images/tours/grand-budapest.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour.",
    stripeProductId: "",
    available: true,
  },
  {
    slug: "private-budapest-101",
    name: "Private Budapest 101",
    subtitle: "With Chimney Cake and Public Transport Tickets",
    category: "private",
    duration: "3 hr 30 min",
    price: 169,
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
      "Private local guide",
      "Public transport tickets",
      "Chimney Cake",
    ],
    image: "/images/tours/private-budapest-101.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour.",
    stripeProductId: "",
    available: true,
  },
  {
    slug: "private-ruin-bars",
    name: "Private Budapest Ruin Bars Tour",
    subtitle: "With Drinks and Snack",
    category: "private",
    duration: "3 hr 30 min",
    price: 199,
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
      "Private local guide",
      "Drinks",
      "Snack",
    ],
    image: "/images/tours/private-ruin-bars.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour.",
    stripeProductId: "",
    available: true,
  },
  {
    slug: "danube-bend",
    name: "Danube Bend Tour",
    subtitle: "Full Day Trip to Szentendre, Visegrád & Esztergom",
    category: "around-budapest",
    duration: "8 hr",
    price: 299,
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
      "Private guide & transport",
      "Hotel pickup & drop-off",
      "Entry fees",
    ],
    image: "/images/tours/danube-bend.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour.",
    stripeProductId: "",
    available: true,
  },
  {
    slug: "sisi-royal-palace",
    name: "Sisi's Royal Palace Tour",
    subtitle: "Visit the Royal Palace of Gödöllő",
    category: "around-budapest",
    duration: "4 hr",
    price: 229,
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
      "Private guide & transport",
      "Hotel pickup & drop-off",
      "Palace entry fee",
    ],
    image: "/images/tours/sisi-palace.jpg",
    cancellationPolicy:
      "When booking, please provide your telephone number which will work at the time of the tour, so we can reach you if necessary. Your guide might contact you before your tour.",
    stripeProductId: "",
    available: true,
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
