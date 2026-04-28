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
    <div className="relative pt-16 pb-12">
      <p className="text-center scene-label mb-8">{t.partners.title}</p>

      <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center w-24 h-12 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-[80%] max-h-[80%] object-contain"
              style={{ filter: "grayscale(100%) brightness(2.2) contrast(0.6)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
