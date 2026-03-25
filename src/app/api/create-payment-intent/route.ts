import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { tourSlug, tourName, totalPrice, date, time, guests } =
      await req.json();

    if (!tourName || !totalPrice || !date || !guests) {
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

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalPrice * 100), // cents
      currency: "eur",
      payment_method_types: ["card"],
      description: `${tourName} — ${date} at ${time} — ${guests} guest(s)`,
      metadata: {
        tourSlug,
        tourName,
        date,
        time,
        guests: String(guests),
        totalPrice: String(totalPrice),
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("PaymentIntent error:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
