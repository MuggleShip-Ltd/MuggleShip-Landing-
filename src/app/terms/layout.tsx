import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME } from "@/lib/site";

const title = "Terms of Service";
const description =
  "Terms of Service governing MuggleShip Ltd's fulfillment, FBA prep, shipping and Amazon seller tooling services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    url: "/terms/",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [OG_IMAGE],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
