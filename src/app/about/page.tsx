import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind WalkingTour Budapest. We are passionate local guides who love sharing the beauty of Budapest.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-brown mb-6">
            About Us
          </h1>
          <p className="text-lg text-brown-light leading-relaxed max-w-2xl mx-auto">
            We are a small group of tour guides who felt the need for a service
            in Budapest that provides high quality, personalized, friendly, funny
            and informative walking and private tours.
          </p>
        </div>
      </section>

      {/* Team Photo */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/images/tours/team.jpg"
              alt="The WalkingTour Budapest team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 px-4">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brown mb-4">
              Our Story
            </h2>
            <p className="text-brown-light leading-relaxed text-lg">
              A few years and a few thousand guests later, we can happily say
              that we achieved what we dreamt of. Today we are happy to provide
              the best walking and private tours in Budapest.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brown mb-4">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Small Groups",
                  desc: "We keep our groups small so everyone gets a personal experience and can ask questions freely.",
                },
                {
                  title: "Local Experts",
                  desc: "Our guides are born and raised in Budapest. We share stories you won't find in any guidebook.",
                },
                {
                  title: "All-Inclusive",
                  desc: "From transport passes to chimney cake tastings — our tours include extras that make them special.",
                },
                {
                  title: "Flexible & Friendly",
                  desc: "We adapt to your pace and interests. Your comfort and enjoyment is our top priority.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-semibold text-terracotta mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brown-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
