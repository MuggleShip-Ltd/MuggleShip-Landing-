import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePage from "@/components/GuidePage";
import { GUIDES, getGuide } from "@/content/guides";
import { OG_IMAGE, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  const path = `/guides/${guide.slug}/`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      locale: "en_GB",
      url: path,
      title: `${guide.metaTitle} | ${SITE_NAME}`,
      description: guide.metaDescription,
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      images: [OG_IMAGE],
    },
  };
}

export default async function Page({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  return <GuidePage guide={guide} />;
}
