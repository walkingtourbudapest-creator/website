"use client";

import { useState } from "react";
import type { Tour } from "@/data/tours";

export default function BookingForm({ tour }: { tour: Tour }) {
  const [date, setDate] = useState("");
  const [participants, setParticipants] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get tomorrow's date as minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

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
          price: tour.price,
          date,
          participants,
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
        <label
          htmlFor="participants"
          className="block text-sm font-medium text-brown mb-2"
        >
          Number of Participants
        </label>
        <select
          id="participants"
          value={participants}
          onChange={(e) => setParticipants(Number(e.target.value))}
          className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "person" : "people"}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-cream-dark/50 rounded-xl p-4">
        <div className="flex justify-between items-center text-sm text-brown-light mb-2">
          <span>
            €{tour.price} x {participants}{" "}
            {participants === 1 ? "person" : "people"}
          </span>
          <span className="font-semibold text-brown">
            €{tour.price * participants}
          </span>
        </div>
        <div className="flex justify-between items-center text-lg font-bold text-brown pt-2 border-t border-cream-dark">
          <span>Total</span>
          <span className="text-terracotta">
            €{tour.price * participants}
          </span>
        </div>
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
