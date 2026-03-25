import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-cream" style={{ backgroundColor: '#4A3F3A' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-2">
              WalkingTour Budapest
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Unforgettable tours in Budapest. Small groups, local guides,
              authentic experiences since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-2">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {[
                { href: "/tours", label: "All Tours" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-2">
              Get in Touch
            </h4>
            <ul className="space-y-1 text-sm text-cream/80">
              <li>
                <a
                  href="mailto:info@walkingtourbudapest.com"
                  className="hover:text-white transition-colors"
                >
                  info@walkingtourbudapest.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+36304070670"
                  className="hover:text-white transition-colors"
                >
                  +36 30 407 0670
                </a>
              </li>
              <li>Budapest, Hungary</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-cream/20 text-center text-sm text-cream/60">
          <p>
            &copy; 2016 WalkingTour Budapest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
