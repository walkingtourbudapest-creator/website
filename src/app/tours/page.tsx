import type { Metadata } from "next";
import TourFilter from "@/components/TourFilter";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Browse all our Budapest tours — walking tours, private tours, and day trips. Book your unforgettable experience today.",
};

export default function ToursPage() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-brown mb-4">
            Our Tours
          </h1>
          <p className="text-lg text-brown-light max-w-2xl mx-auto">
            From walking tours through the historic streets to private
            experiences and day trips — find the perfect way to discover
            Budapest.
          </p>
        </div>
        <TourFilter />
      </div>
    </section>
  );
}
