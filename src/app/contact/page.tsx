import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WalkingTour Budapest. Ask questions about our tours or book a custom experience.",
};

export default function ContactPage() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-brown mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-brown-light max-w-xl mx-auto">
            Have a question about our tours? Want to arrange a custom
            experience? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-brown mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-terracotta shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-brown">Email</p>
                    <a
                      href="mailto:info@walkingtourbudapest.com"
                      className="text-terracotta hover:text-terracotta-dark transition-colors"
                    >
                      info@walkingtourbudapest.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-terracotta shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-brown">Meeting Point</p>
                    <p className="text-brown-light text-sm">
                      Hungarian State Opera House
                      <br />
                      Andrássy út 22, 1061 Budapest
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.4!2d19.0582!3d47.5025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc403a4a3b2d%3A0xf0be6f37ae79de71!2sHungarian%20State%20Opera%20House!5e0!3m2!1sen!2shu!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Meeting point map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
