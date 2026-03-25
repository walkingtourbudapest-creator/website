"use client";

import { useState } from "react";
import { type Tour, getTotalPrice } from "@/data/tours";

export default function BookingForm({ tour }: { tour: Tour }) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const totalPrice = getTotalPrice(tour, guests);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourSlug: tour.slug,
          tourName: tour.name,
          totalPrice,
          date,
          guests,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-brown mb-2"
        >
          Select Date
        </label>
        <input
          type="date"
          id="date"
          required
          min={minDate}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-brown mb-2">
          Number of Guests
        </label>
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            disabled={guests <= 1}
            className="w-12 h-12 rounded-full border-2 border-cream-dark bg-white flex items-center justify-center text-2xl font-medium text-brown-light hover:border-terracotta hover:text-terracotta transition-all disabled:opacity-30 disabled:hover:border-cream-dark disabled:hover:text-brown-light"
          >
            &minus;
          </button>
          <span className="text-3xl font-bold text-brown w-12 text-center">
            {guests}
          </span>
          <button
            type="button"
            onClick={() => setGuests((g) => Math.min(10, g + 1))}
            disabled={guests >= 10}
            className="w-12 h-12 rounded-full border-2 border-cream-dark bg-white flex items-center justify-center text-2xl font-medium text-brown-light hover:border-terracotta hover:text-terracotta transition-all disabled:opacity-30 disabled:hover:border-cream-dark disabled:hover:text-brown-light"
          >
            +
          </button>
        </div>
        <p className="text-xs text-brown-light/60 text-center mt-2">
          {guests === 1 ? "1 guest" : `${guests} guests`} &middot; max 10
        </p>
      </div>

      <div className="bg-cream-dark/50 rounded-xl p-4">
        <div className="flex justify-between items-center text-lg font-bold text-brown">
          <span>Total</span>
          <span className="text-terracotta">€{totalPrice.toFixed(2)}</span>
        </div>
        {guests > 1 && (
          <p className="text-sm text-brown-light/60 text-right mt-1">
            €{(totalPrice / guests).toFixed(2)} per person
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading || !date}
        className="w-full rounded-full bg-terracotta py-4 text-white font-semibold text-lg transition-all hover:bg-terracotta-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Redirecting to payment..." : "Book Now"}
      </button>

      <p className="text-xs text-brown-light/60 text-center">
        You will be redirected to Stripe for secure payment
      </p>
    </form>
  );
}
