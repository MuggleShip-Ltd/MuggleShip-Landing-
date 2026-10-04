import type { GuideContent } from "@/lib/guides";
import fbaPrepHowTo from "./how-to-prep-products-for-amazon-fba-uk";
import fbaPrepChecklist from "./fba-prep-checklist";
import ddpVsDap from "./ddp-vs-dap-shipping-to-eu-from-uk";

// Order here is the order on /guides/ and in the sitemap.
export const GUIDES: GuideContent[] = [fbaPrepHowTo, fbaPrepChecklist, ddpVsDap];

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

/** Guides that list a service page among their related services. */
export function guidesForService(serviceSlug: string) {
  return GUIDES.filter((g) => g.relatedServices.includes(serviceSlug));
}
