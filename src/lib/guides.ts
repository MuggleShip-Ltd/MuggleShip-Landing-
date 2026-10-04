// Shape of a guide (/guides/<slug>/). Each guide's copy lives in
// src/content/guides/<slug>.ts and is rendered by
// src/components/GuidePage.tsx.

export interface GuideBlock {
  /** H2 heading for the section. */
  heading: string;
  /** Body paragraphs, rendered in order before any list. */
  paragraphs: string[];
  /** Optional list after the paragraphs (steps, checklist items, …). */
  list?: { ordered?: boolean; items: string[] };
  /** Optional closing paragraphs rendered after the list. */
  after?: string[];
}

export interface GuideContent {
  /** URL segment: /guides/<slug>/ */
  slug: string;
  /** <title> without the " | MuggleShip" suffix the layout adds. ≤ 55 chars. */
  metaTitle: string;
  /** Meta description, 140–160 characters. */
  metaDescription: string;
  /** Small uppercase label above the H1. */
  kicker: string;
  /** The page's only H1. */
  h1: string;
  /** Lead paragraph under the H1, 40–80 words. */
  intro: string;
  /** ISO date the guide was first published. */
  published: string;
  /** ISO date the guide was last materially updated. */
  updated: string;
  /** 3–5 one-sentence takeaways shown in a summary box. */
  keyTakeaways: string[];
  /** Body sections. */
  sections: GuideBlock[];
  /** FAQ — 4 to 6 questions; also emitted as FAQPage structured data. */
  faqs: { q: string; a: string }[];
  /** Slugs of related service pages (/services/<slug>/). */
  relatedServices: string[];
  /** Slugs of related guides. */
  relatedGuides: string[];
}

/** Rough reading time at 220 words per minute. */
export function readingMinutes(g: GuideContent) {
  const text = [
    g.intro,
    ...g.keyTakeaways,
    ...g.sections.flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      ...(s.list?.items ?? []),
      ...(s.after ?? []),
    ]),
    ...g.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}
