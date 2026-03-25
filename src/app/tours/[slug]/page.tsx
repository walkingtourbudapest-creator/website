import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { tours, getTourBySlug, getStartingPrice } from "@/data/tours";
import BookingForm from "@/components/BookingForm";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };

  return {
    title: tour.name,
    description: `${tour.subtitle}. ${tour.duration} — From €${getStartingPrice(tour)}. ${tour.description.slice(0, 120)}...`,
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) notFound();

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-white text-sm mb-4 transition-colors"
            >
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
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to Tours
            </Link>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2">
              {tour.name}
            </h1>
            <p className="text-xl text-cream/90">{tour.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Tour details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quick info bar */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 shadow-sm">
                  <svg
                    className="w-5 h-5 text-terracotta"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium text-brown">
                    {tour.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 shadow-sm">
                  <svg
                    className="w-5 h-5 text-terracotta"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                  <span className="font-medium text-brown">
                    From €{getStartingPrice(tour)}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 shadow-sm">
                  <svg
                    className="w-5 h-5 text-terracotta"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="font-medium text-brown">
                    {tour.meetingPoint}
                  </span>
                </div>
                {tour.startTime !== "Flexible" && (
                  <div className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 shadow-sm">
                    <svg
                      className="w-5 h-5 text-terracotta"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                    <span className="font-medium text-brown">
                      Daily at {tour.startTime}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-brown mb-4">
                  About This Tour
                </h2>
                <p className="text-brown-light leading-relaxed text-lg">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-brown mb-4">
                  Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
                      <span className="text-brown-light">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-brown mb-4">
                  What&apos;s Included
                </h2>
                <div className="flex flex-wrap gap-3">
                  {tour.includes.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 bg-sage-light/20 text-brown px-4 py-2 rounded-full text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-sage"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meeting Point */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-brown mb-4">
                  Meeting Point
                </h2>
                <p className="text-brown-light mb-2">{tour.meetingPoint}</p>
                <p className="text-brown-light/80 text-sm">
                  {tour.meetingAddress}
                </p>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-brown mb-2">
                  Cancellation Policy
                </h3>
                <p className="text-brown-light text-sm leading-relaxed">
                  {tour.cancellationPolicy}
                </p>
              </div>
            </div>

            {/* Right: Booking form */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-28 bg-white rounded-2xl p-8 shadow-lg"
                id="booking"
              >
                <h2 className="font-heading text-2xl font-bold text-brown mb-6">
                  Book This Tour
                </h2>
                <BookingForm tour={tour} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
