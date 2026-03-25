"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-cream-dark">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="font-heading text-2xl font-bold text-terracotta">
              WalkingTour
            </span>
            <span className="font-heading text-2xl text-brown">Budapest</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-terracotta ${
                  pathname === link.href
                    ? "text-terracotta"
                    : "text-brown-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tours"
              className="rounded-full bg-terracotta px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-terracotta-dark"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-brown"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-cream-dark">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-terracotta ${
                    pathname === link.href
                      ? "text-terracotta"
                      : "text-brown-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/tours"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-terracotta px-6 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-terracotta-dark"
              >
                Book a Tour
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
