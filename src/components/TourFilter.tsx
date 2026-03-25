"use client";

import { useState } from "react";
import type { TourCategory } from "@/data/tours";
import { tours, categoryLabels } from "@/data/tours";
import TourCard from "./TourCard";

const categories: (TourCategory | "all")[] = [
  "all",
  "walking",
  "private",
  "around-budapest",
];

export default function TourFilter() {
  const [active, setActive] = useState<TourCategory | "all">("all");

  const filtered =
    active === "all" ? tours : tours.filter((t) => t.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? "bg-terracotta text-white shadow-md"
                : "bg-white text-brown-light hover:bg-cream-dark"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Tour grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </div>
  );
}
