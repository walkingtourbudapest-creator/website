import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description: "Your tour booking has been confirmed. Thank you!",
};

export default function BookingSuccessPage() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-2xl text-center">
        {/* Success icon */}
        <div className="w-20 h-20 bg-sage-light/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-sage"
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
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-brown mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-lg text-brown-light mb-4 leading-relaxed">
          Thank you for booking with WalkingTour Budapest! We&apos;re excited to
          show you the best of our city.
        </p>
        <p className="text-brown-light mb-8">
          You will receive a confirmation email shortly with all the details
          about your tour. Your guide may also contact you before the tour.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tours"
            className="rounded-full bg-terracotta px-8 py-3 font-semibold text-white transition-all hover:bg-terracotta-dark"
          >
            Browse More Tours
          </Link>
          <Link
            href="/"
            className="rounded-full border-2 border-terracotta px-8 py-3 font-semibold text-terracotta transition-all hover:bg-terracotta hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
