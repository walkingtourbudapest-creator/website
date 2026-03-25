"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-sage-light/20 border border-sage rounded-2xl p-8 text-center">
        <h3 className="font-heading text-2xl font-semibold text-brown mb-2">
          Message Sent!
        </h3>
        <p className="text-brown-light">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-brown mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brown mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brown mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-brown focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
          placeholder="Tell us about your plans in Budapest..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-terracotta py-4 text-white font-semibold text-lg transition-all hover:bg-terracotta-dark disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
