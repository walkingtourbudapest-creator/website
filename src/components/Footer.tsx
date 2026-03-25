import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-gold-light mb-4">
              WalkingTour Budapest
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Unforgettable tours in Budapest. Small groups, local guides,
              authentic experiences since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold-light mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/tours", label: "All Tours" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold-light mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a
                  href="mailto:info@walkingtourbudapest.com"
                  className="hover:text-gold-light transition-colors"
                >
                  info@walkingtourbudapest.com
                </a>
              </li>
              <li>Budapest, Hungary</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/20 text-center text-sm text-cream/60">
          <p>
            &copy; {new Date().getFullYear()} WalkingTour Budapest. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
