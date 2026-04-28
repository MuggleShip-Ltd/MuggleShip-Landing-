import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import FloatingBg from "@/components/FloatingBg";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">
        <LanguageProvider>
          <FloatingBg />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
