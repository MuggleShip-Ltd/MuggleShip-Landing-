import type { ServiceContent } from "@/lib/services";
import fbaPrep from "./fba-prep-uk";
import ecommerceFulfillment from "./ecommerce-fulfillment-uk";
import crossBorder from "./cross-border-shipping";
import returns from "./returns-management";
import priceAutomation from "./amazon-price-automation";
import listingOptimization from "./amazon-listing-optimization";

// Order here is the order on /services/ and in the sitemap.
export const SERVICE_PAGES: ServiceContent[] = [
  fbaPrep,
  ecommerceFulfillment,
  crossBorder,
  returns,
  priceAutomation,
  listingOptimization,
];

export function getService(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
