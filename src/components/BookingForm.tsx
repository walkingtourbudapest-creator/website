"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { type Tour, getTotalPrice } from "@/data/tours";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function getNextAvailableTime(tour: Tour): { date: string; time: string } {
  const now = new Date();
  const cutoff = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  const isFlexible = tour.startTime === "Flexible";
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  ];

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
      const match = tour.startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (match) {
        let hours = parseInt(match[1]);
        const mins = parseInt(match[2]);
        if (match[3].toUpperCase() === "PM" && hours !== 12) hours += 12;
        if (match[3].toUpperCase() === "AM" && hours === 12) hours = 0;
        const slotDate = new Date(tryDate);
        slotDate.setHours(hours, mins, 0, 0);
        if (slotDate > cutoff) {
          return { date: dateStr, time: `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}` };
        }
      }
    }
  }

  const fallback = new Date(now);
  fallback.setDate(fallback.getDate() + 2);
  return { date: fallback.toISOString().split("T")[0], time: isFlexible ? "10:00" : "10:00" };
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
  const next = getNextAvailableTime(tour);
  const [date, setDate] = useState(next.date);
  const [time, setTime] = useState(next.time);
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"booking" | "contact" | "payment">("booking");

  const isFlexibleTime = tour.startTime === "Flexible";

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const totalPrice = getTotalPrice(tour, guests);

  function isTimeSlotAvailable(slot: string, selectedDate: string): boolean {
    if (!selectedDate) return true;
    const [h, m] = slot.split(":").map(Number);
    const slotDate = new Date(selectedDate + "T00:00:00");
    slotDate.setHours(h, m, 0, 0);
    const cutoff = new Date(Date.now() + 24 * 60 * 60 * 1000);
    return slotDate > cutoff;
  }

  function handleDateChange(newDate: string) {
    setDate(newDate);
    // If current time is no longer available for the new date, reset to first available
    if (isFlexibleTime && !isTimeSlotAvailable(time, newDate)) {
      const firstAvailable = Object.keys(timeLabels).find((slot) =>
        isTimeSlotAvailable(slot, newDate)
      );
      if (firstAvailable) setTime(firstAvailable);
    }
  }

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    setStep("contact");
  }

  async function handleProceedToPayment(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourSlug: tour.slug,
          tourName: tour.name,
          totalPrice,
          date,
          time: isFlexibleTime ? time : tour.startTime,
          guests,
          customerName: name,
          customerEmail: email,
          customerPhone: phone,
          pickupLocation: isFlexibleTime ? pickup : "",
        }),
      });

      const data = await res.json();

      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setStep("payment");
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Step 3: Payment
  if (step === "payment" && clientSecret) {
    return (
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret,
          appearance: {
            theme: "stripe",
            variables: {
              colorPrimary: "#C0603A",
              colorBackground: "#ffffff",
              colorText: "#3D2B1F",
              borderRadius: "12px",
              fontFamily: "Inter, system-ui, sans-serif",
            },
          },
        }}
      >
        <PaymentForm
          totalPrice={totalPrice}
          onBack={() => setStep("contact")}
        />
      </Elements>
    );
  }

  // Step 2: Contact details
  if (step === "contact") {
    return (
      <form onSubmit={handleProceedToPayment} className="space-y-6">
        <div className="flex items-center justify-between mb-2">
          <button
            type="button"
            onClick={() => setStep("booking")}
            className="text-sm text-brown-light hover:text-terracotta transition-colors flex items-center gap-1"
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
            Back
          </button>
          <span className="text-lg font-bold text-terracotta">
            €{totalPrice.toFixed(2)}
          </span>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brown mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
          />
          <p className="text-xs text-brown-light/60 mt-1">
            So we know who booked the tour
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brown mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
          />
          <p className="text-xs text-brown-light/60 mt-1">
            We&apos;ll send your booking confirmation here
          </p>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brown mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+36 20 123 4567"
            className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
          />
          <p className="text-xs text-brown-light/60 mt-1">
            Your guide may contact you before the tour
          </p>
        </div>

        {isFlexibleTime && (
          <div>
            <label htmlFor="pickup" className="block text-sm font-medium text-brown mb-2">
              Pickup Location
            </label>
            <input
              type="text"
              id="pickup"
              required
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Hotel name and address"
              className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
            />
            <p className="text-xs text-brown-light/60 mt-1">
              Your guide will pick you up from this location
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-terracotta py-4 text-white font-semibold text-lg transition-all hover:bg-terracotta-dark disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Loading payment..." : "Proceed to Payment"}
        </button>
      </form>
    );
  }

  // Step 1: Booking details
  return (
    <form onSubmit={handleContinue} className="space-y-6">
      <label
        htmlFor="date"
        className="block text-sm font-medium text-brown"
      >
        Select Date
      </label>
      <div className="-mt-4">
        <input
          type="date"
          id="date"
          required
          min={minDate}
          value={date}
          onChange={(e) => handleDateChange(e.target.value)}
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
            {Object.entries(timeLabels)
              .filter(([value]) => isTimeSlotAvailable(value, date))
              .map(([value, label]) => (
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
        disabled={!date}
        className="w-full rounded-full bg-terracotta py-4 text-white font-semibold text-lg transition-all hover:bg-terracotta-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>

      <p className="text-xs text-brown-light/40 text-center">
        Free cancellation up to 24 hours before the tour.{" "}
        <a href="#cancellation" className="underline hover:text-brown-light/60">
          Policy
        </a>
      </p>
    </form>
  );
}
