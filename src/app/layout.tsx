import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WalkingTour Budapest | Unforgettable Tours in Budapest",
    template: "%s | WalkingTour Budapest",
  },
  description:
    "Discover Budapest with our walking tours, private tours, and day trips. Small groups, local guides, unforgettable experiences.",
  keywords: [
    "Budapest tours",
    "walking tour Budapest",
    "private tour Budapest",
    "Budapest sightseeing",
    "Buda Castle tour",
    "ruin bars tour",
  ],
  openGraph: {
    title: "WalkingTour Budapest | Unforgettable Tours in Budapest",
    description:
      "Discover Budapest with our walking tours, private tours, and day trips.",
    url: "https://walkingtourbudapest.com",
    siteName: "WalkingTour Budapest",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
