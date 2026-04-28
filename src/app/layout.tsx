import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MuggleShip — Fulfillment, Perfected.",
  description:
    "MuggleShip is your trusted UK fulfillment partner. FBA Prep, eCommerce fulfillment, cross-border shipping, automated pricing, analytics, and listing optimization for Amazon sellers worldwide.",
  icons: {
    icon: "/favicon.png",
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
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
