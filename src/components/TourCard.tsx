import Link from "next/link";
import Image from "next/image";
import type { Tour } from "@/data/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-brown text-xs font-medium px-3 py-1 rounded-full">
            {tour.category === "walking"
              ? "Walking Tour"
              : tour.category === "private"
              ? "Private Tour"
              : "Day Trip"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-semibold text-brown mb-1">
          {tour.name}
        </h3>
        <p className="text-brown-light/80 text-sm mb-4">{tour.subtitle}</p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-cream-dark">
          <div className="flex items-center gap-4 text-sm text-brown-light">
            {/* Duration */}
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
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
              {tour.duration}
            </span>
          </div>
          <span className="text-terracotta font-semibold">
            From €{tour.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
