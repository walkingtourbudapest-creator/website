import Link from "next/link";
import Image from "next/image";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

const featuredSlugs = [
  "budapest-101",
  "buda-castle-walk",
  "budapest-ruin-bars",
  "the-grand-budapest",
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Absolutely the best tour we've ever taken! Our guide was knowledgeable, funny, and made Budapest come alive. The chimney cake was a bonus!",
    location: "United States",
  },
  {
    name: "James & Emily W.",
    text: "The Buda Castle Walk was magical. Small group, personal attention, and the views were breathtaking. Highly recommend!",
    location: "United Kingdom",
  },
  {
    name: "Marco R.",
    text: "The ruin bars tour was an unforgettable evening. Our guide knew all the hidden spots and the drinks were fantastic.",
    location: "Italy",
  },
];

export default function Home() {
  const featured = tours.filter((t) => featuredSlugs.includes(t.slug));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/tours/hero.jpg"
          alt="Tour group at Heroes' Square, Budapest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/40 via-brown/30 to-brown/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Unforgettable Tours
            <br />
            in Budapest
          </h1>
          <p className="text-xl sm:text-2xl text-cream/90 mb-10 max-w-2xl mx-auto">
            Discover the beauty of Budapest with passionate local guides. Small
            groups, authentic experiences, lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="rounded-full bg-terracotta px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-terracotta-dark hover:scale-105"
            >
              Explore Our Tours
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white/20 backdrop-blur-sm border border-white/40 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/30"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown mb-6">
            Your Adventure Starts Here
          </h2>
          <p className="text-lg text-brown-light leading-relaxed">
            We are a small group of passionate local tour guides who love
            sharing the beauty, history, and hidden gems of Budapest. Whether
            you prefer a walking tour, a private experience, or a day trip
            outside the city, we&apos;ve got the perfect adventure for you.
          </p>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="pb-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown mb-4">
              Popular Tours
            </h2>
            <p className="text-brown-light text-lg">
              Our most loved experiences, handpicked for you
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full border-2 border-terracotta px-8 py-3 font-semibold text-terracotta transition-all hover:bg-terracotta hover:text-white"
            >
              View All Tours
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown mb-4">
              What Our Guests Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream rounded-2xl p-8 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brown-light mb-4 italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-brown">{t.name}</p>
                  <p className="text-sm text-brown-light/60">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl text-center bg-terracotta rounded-3xl py-16 px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Explore Budapest?
          </h2>
          <p className="text-cream/90 text-lg mb-8 max-w-xl mx-auto">
            Book your tour today and create memories that last a lifetime.
            Small groups, big experiences.
          </p>
          <Link
            href="/tours"
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-terracotta transition-all hover:bg-cream hover:scale-105"
          >
            Browse Tours
          </Link>
        </div>
      </section>
    </>
  );
}
