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
    name: "Margaret M.",
    text: "The walking tour with Karol was fantastic! He tailored the information to our preferences. The beauty and splendor of the architecture alone is breathtaking. Walking the streets of Buda is like stepping back in time.",
    location: "London, Canada",
  },
  {
    name: "Anthony James S.",
    text: "Our tour guide, Daniel was very knowledgeable and a great partner to walk around with. He suited the tour for our needs. The tour included a stop at a local Cafe where we tried a Hungarian cake and a coffee. This was definitely what we were looking for.",
    location: "Michigan, USA",
  },
  {
    name: "Debbie T.",
    text: "Bianka was amazing!!! The tour was only my husband and I, and she made it so much fun! Would highly recommend this to anyone traveling to Budapest.",
    location: "Tripadvisor",
  },
  {
    name: "suezq916",
    text: "Sandor was an amazing guide — extremely knowledgeable and informative! He shared so many aspects of the history of Budapest and related them to the present time.",
    location: "San Mateo, California",
  },
  {
    name: "Dmkopera1",
    text: "Zoltan provided a great tour of 3 ruin bars. He shared the history and uniqueness of each one. We had drinks and delicious langos, he kept us entertained with stories!",
    location: "Tripadvisor",
  },
  {
    name: "Cynthia E.",
    text: "Our tour guide, Judith, met us at our hotel and showed us how to use the public transportation system. The tour was a wonderful overview of the important sights to be seen in Budapest.",
    location: "Tripadvisor",
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
              <a
                key={t.name}
                href="https://www.tripadvisor.com/Attraction_Review-g274887-d10766490-Reviews-WalkingTour_Budapest-Budapest_Central_Hungary.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
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
              </a>
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
