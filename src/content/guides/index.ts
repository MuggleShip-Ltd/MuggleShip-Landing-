import type { GuideContent } from "@/lib/guides";
import fbaPrepHowTo from "./how-to-prep-products-for-amazon-fba-uk";
import fbaPrepChecklist from "./fba-prep-checklist";
import ddpVsDap from "./ddp-vs-dap-shipping-to-eu-from-uk";
import chooseA3pl from "./how-to-choose-a-3pl-uk";
import volumetricWeight from "./volumetric-weight-explained";
import multichannel from "./multichannel-fulfillment-uk";
import returnsProcess from "./ecommerce-returns-process-uk";

// Order here is the order on /guides/ and in the sitemap.
export const GUIDES: GuideContent[] = [
  fbaPrepHowTo,
  fbaPrepChecklist,
  ddpVsDap,
  chooseA3pl,
  volumetricWeight,
  multichannel,
  returnsProcess,
];

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

/** Guides that list a service page among their related services. */
export function guidesForService(serviceSlug: string) {
  return GUIDES.filter((g) => g.relatedServices.includes(serviceSlug));
}
