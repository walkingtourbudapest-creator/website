import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { tourSlug, tourName, price, date, participants } = await req.json();

    if (!tourName || !price || !date || !participants) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 503 }
      );
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: tourName,
              description: `Date: ${date} | Participants: ${participants}`,
            },
            unit_amount: price * 100, // Stripe uses cents
          },
          quantity: participants,
        },
      ],
      mode: "payment",
      success_url: `${origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/tours/${tourSlug}`,
      metadata: {
        tourSlug,
        tourName,
        date,
        participants: String(participants),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
