"use client";

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const testimonials = [
  { name: "James W.", role: "Amazon Seller", text: "MuggleShip transformed our FBA prep process. Their accuracy rate is incredible, and shipping times have improved dramatically." },
  { name: "Sarah M.", role: "Shopify Store Owner", text: "The integration was seamless. We connected our Shopify store in minutes and orders started flowing through automatically." },
  { name: "Michael T.", role: "E-Commerce Entrepreneur", text: "Their cross-border fulfillment has allowed us to expand into 5 new markets. The customs clearance rate is outstanding." },
  { name: "Emily R.", role: "Amazon FBA Seller", text: "We switched from our old prep center and immediately saw cost savings. Their pricing is transparent with no hidden fees." },
  { name: "David L.", role: "Multi-Channel Seller", text: "MuggleShip handles our eBay, Amazon, and Shopify fulfillment flawlessly. One partner for everything — that's the dream." },
  { name: "Alexandra K.", role: "DTC Brand Owner", text: "Returns were our biggest headache until we found MuggleShip. Their returns management is incredibly efficient." },
  { name: "Robert C.", role: "Wholesale Distributor", text: "The warehouse team is fantastic. Quality inspections catch issues before they reach customers. Highly recommended!" },
  { name: "Hannah P.", role: "Etsy Seller", text: "As a small seller, I felt valued from day one. Their support team responds within minutes and always has solutions." },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-amber-50/30 via-white/50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-700 text-sm font-medium mb-4">
            <Star size={14} className="fill-yellow-500 text-yellow-500" />
            {t.testimonials.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.testimonials.title1}{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              {t.testimonials.title2}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review, idx) => (
            <div key={idx} className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100/50 shadow-sm hover:shadow-xl hover:shadow-orange-100/40 hover:-translate-y-1 transition-all duration-300 relative">
              <Quote size={32} className="text-orange-100 absolute top-4 right-4" />
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 bg-green-50 border border-green-100 rounded text-xs text-green-700 font-medium">
                {t.testimonials.verified}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
