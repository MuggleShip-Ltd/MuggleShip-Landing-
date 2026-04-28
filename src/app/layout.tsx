import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MuggleShip — UK Fulfillment for Amazon, Shopify & Cross-Border",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)] bg-white text-neutral-900">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
