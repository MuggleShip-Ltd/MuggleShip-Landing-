import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { SERVICE_PAGES, getService } from "@/content/services";
import { OG_IMAGE, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  const path = `/services/${service.slug}/`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      url: path,
      title: `${service.metaTitle} | ${SITE_NAME}`,
      description: service.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export default async function Page({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
