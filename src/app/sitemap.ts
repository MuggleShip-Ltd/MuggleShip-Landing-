import type { MetadataRoute } from "next";
import { SERVICE_PAGES } from "@/content/services";
import { PAGES, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// Bump when service page copy changes.
const SERVICES_LAST_MODIFIED = "2026-10-04";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...SERVICE_PAGES.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}/`,
      lastModified: SERVICES_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
