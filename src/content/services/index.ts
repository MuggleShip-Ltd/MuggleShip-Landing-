import type { ServiceContent } from "@/lib/services";
import fbaPrep from "./fba-prep-uk";
import ecommerceFulfillment from "./ecommerce-fulfillment-uk";
import crossBorder from "./cross-border-shipping";
import returns from "./returns-management";
import priceAutomation from "./amazon-price-automation";
import listingOptimization from "./amazon-listing-optimization";
import analyticsReporting from "./amazon-analytics-reporting";
import buyerMessaging from "./amazon-buyer-messaging";

// Order here is the order on /services/ and in the sitemap.
export const SERVICE_PAGES: ServiceContent[] = [
  fbaPrep,
  ecommerceFulfillment,
  crossBorder,
  returns,
  priceAutomation,
  analyticsReporting,
  listingOptimization,
  buyerMessaging,
];

export function getService(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
