"use client";

import { useLanguage } from "@/lib/LanguageContext";

const partners = [
  { name: "FedEx", logo: "/carriers/fedex.svg" },
  { name: "UPS", logo: "/carriers/ups.png" },
  { name: "Evri", logo: "/carriers/evri.png" },
  { name: "DPD", logo: "/carriers/dpd.png" },
  { name: "Royal Mail", logo: "/carriers/royalmail.png" },
  { name: "DHL", logo: "/carriers/dhl.avif" },
];

export default function ShippingPartners() {
  const { t } = useLanguage();

  return (
    <div className="relative mt-14">
      {/* Gradient fade from transparent to white */}
      <div className="h-16 bg-gradient-to-b from-transparent to-white" />

      {/* White area with logos */}
      <div className="bg-white pb-6 pt-4">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-5">
          {t.partners.title}
        </p>

        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-24 h-12 hover:scale-110 transition-transform duration-300 cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[80%] max-h-[80%] object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
