// Shape of a service landing page (/services/<slug>/). Each page's copy
// lives in src/content/services/<slug>.ts and is rendered by
// src/components/ServicePage.tsx.

// Icon keys map to lucide-react icons in ServicePage.tsx.
export type ServiceIcon =
  | "tag"
  | "package-check"
  | "boxes"
  | "truck"
  | "globe"
  | "shield"
  | "returns"
  | "chart"
  | "search"
  | "image"
  | "layers"
  | "clock"
  | "message"
  | "file"
  | "sliders"
  | "plug"
  | "clipboard"
  | "warehouse"
  | "barcode"
  | "recycle"
  | "languages"
  | "trending"
  | "sparkles"
  | "badge"
  | "scale"
  | "receipt"
  | "plane"
  | "store"
  | "list"
  | "gauge"
  | "camera";

export interface ServiceContent {
  /** URL segment: /services/<slug>/ */
  slug: string;
  /** Short service name used in nav, breadcrumbs and cards. */
  name: string;
  /** <title> without the " | MuggleShip" suffix the layout adds. ≤ 50 chars. */
  metaTitle: string;
  /** Meta description, 140–160 characters. */
  metaDescription: string;
  /** Small uppercase label above the H1. */
  kicker: string;
  /** The page's only H1 — carries the primary keyword. */
  h1: string;
  /** Lead paragraph under the H1, 40–70 words. */
  intro: string;
  /** Three short proof points shown in the hero (≤ 6 words each). */
  highlights: [string, string, string];
  /** "What's included" cards — exactly 6. */
  included: { icon: ServiceIcon; title: string; desc: string }[];
  /** Long-form body: 3–4 H2 sections, 2–3 paragraphs each. */
  sections: { heading: string; paragraphs: string[] }[];
  /** "How it works" — exactly 4 steps. */
  process: { title: string; desc: string }[];
  /** "Who it's for" bullets — 4 to 6. */
  idealFor: string[];
  /** FAQ — 5 to 7 questions; also emitted as FAQPage structured data. */
  faqs: { q: string; a: string }[];
  /** Slugs of 3 related service pages. */
  related: string[];
  /** Availability line, e.g. "Available to MuggleShip fulfillment clients." */
  availability?: string;
  /** Compliance disclosure rendered verbatim (Amazon SP-API services). */
  disclosure?: string;
  /** Existing-client portal shown in the hero, e.g. the returns app. */
  portal?: { label: string; href: string; note: string; appHref?: string };
  /** Primary CTA label; defaults to "Get a free quote". */
  ctaLabel?: string;
}
