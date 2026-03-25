"use client";

import { useState } from "react";
import { type Tour, getTotalPrice } from "@/data/tours";

function getNextAvailableDate(): string {
  const now = new Date();
  const next = new Date(now);
  next.setDate(next.getDate() + 2); // 24hr cutoff means at least day after tomorrow to be safe
  return next.toISOString().split("T")[0];
}

function getNextAvailableTime(tour: Tour): { date: string; time: string } {
  const now = new Date();
  const cutoff = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24hrs from now

  const isFlexible = tour.startTime === "Flexible";
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  ];
  const fixedTime = tour.startTime === "Flexible" ? "10:00" : tour.startTime.replace(" AM", "").replace(" PM", "");

  // Try tomorrow first, then day after
  for (let dayOffset = 1; dayOffset <= 3; dayOffset++) {
    const tryDate = new Date(now);
    tryDate.setDate(tryDate.getDate() + dayOffset);
    const dateStr = tryDate.toISOString().split("T")[0];

    if (isFlexible) {
      for (const slot of timeSlots) {
        const [h, m] = slot.split(":").map(Number);
        const slotDate = new Date(tryDate);
        slotDate.setHours(h, m, 0, 0);
        if (slotDate > cutoff) {
          return { date: dateStr, time: slot };
        }
      }
    } else {
      // Fixed time tours (e.g. "10:00 AM", "6:00 PM")
      const match = tour.startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (match) {
        let hours = parseInt(match[1]);
        const mins = parseInt(match[2]);
        if (match[3].toUpperCase() === "PM" && hours !== 12) hours += 12;
        if (match[3].toUpperCase() === "AM" && hours === 12) hours = 0;
        const slotDate = new Date(tryDate);
        slotDate.setHours(hours, mins, 0, 0);
        if (slotDate > cutoff) {
          return { date: dateStr, time: fixedTime };
        }
      }
    }
  }

  // Fallback: 2 days from now
  return { date: getNextAvailableDate(), time: isFlexible ? "10:00" : fixedTime };
}

const timeLabels: Record<string, string> = {
  "09:00": "9:00 AM",
  "09:30": "9:30 AM",
  "10:00": "10:00 AM",
  "10:30": "10:30 AM",
  "11:00": "11:00 AM",
  "11:30": "11:30 AM",
  "12:00": "12:00 PM",
  "12:30": "12:30 PM",
  "13:00": "1:00 PM",
  "13:30": "1:30 PM",
  "14:00": "2:00 PM",
  "14:30": "2:30 PM",
};

export default function BookingForm({ tour }: { tour: Tour }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);

  const isFlexibleTime = tour.startTime === "Flexible";

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const totalPrice = getTotalPrice(tour, guests);

  function fillNextAvailable() {
    const next = getNextAvailableTime(tour);
    setDate(next.date);
    if (isFlexibleTime) {
      setTime(next.time);
    }
  }

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
          time: isFlexibleTime ? time : tour.startTime,
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
      <div className="flex items-center justify-between">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-brown"
        >
          Select Date
        </label>
        <button
          type="button"
          onClick={fillNextAvailable}
          className="text-xs text-terracotta hover:text-terracotta-dark transition-colors underline underline-offset-2"
        >
          Next available
        </button>
      </div>
      <div className="-mt-4">
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

      {isFlexibleTime && (
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-brown mb-2"
          >
            Preferred Start Time
          </label>
          <select
            id="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
          >
            {Object.entries(timeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      )}

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
