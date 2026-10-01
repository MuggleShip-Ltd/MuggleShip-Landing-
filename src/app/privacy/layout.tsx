import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME } from "@/lib/site";

const title = "Privacy Policy";
const description =
  "How MuggleShip Ltd collects, uses and protects personal data and Amazon SP-API data under UK GDPR, including cookies and analytics.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    url: "/privacy/",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [OG_IMAGE],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
