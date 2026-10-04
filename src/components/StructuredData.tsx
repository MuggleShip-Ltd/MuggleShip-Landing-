import JsonLd from "@/components/JsonLd";
import {
  ADDRESSES,
  CONTACT,
  GOOGLE_MAPS,
  OG_IMAGE,
  SERVICES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
  TRUSTPILOT_URL,
} from "@/lib/site";

// schema.org graph for the whole site: the company, its two UK
// locations, the website, and the services it offers. Rendered once in
// the root layout. Deliberately no Review / AggregateRating markup —
// Google ignores self-served ratings and can issue a manual action.
export default function StructuredData() {
  const orgId = `${SITE_URL}/#organization`;
  const warehouseId = `${SITE_URL}/#bedford-warehouse`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        legalName: "MuggleShip Ltd",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
          width: 960,
          height: 201,
        },
        image: `${SITE_URL}${OG_IMAGE.url}`,
        description: SITE_DESCRIPTION,
        email: CONTACT.email,
        telephone: CONTACT.phoneE164,
        address: { "@type": "PostalAddress", ...ADDRESSES.london },
        areaServed: "Worldwide",
        sameAs: [TRUSTPILOT_URL, ...Object.values(SOCIAL).filter(Boolean)],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT.email,
          telephone: CONTACT.phoneE164,
          availableLanguage: ["English"],
        },
        location: { "@id": warehouseId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Fulfillment and Amazon seller services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              // Same @id as the Service node on the landing page, so the
              // two descriptions merge into one entity.
              "@id": s.slug
                ? `${SITE_URL}/services/${s.slug}/#service`
                : `${SITE_URL}/#${s.id}`,
              ...(s.slug && { url: `${SITE_URL}/services/${s.slug}/` }),
              name: s.name,
              description: s.description,
              provider: { "@id": orgId },
              areaServed: "Worldwide",
            },
          })),
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": warehouseId,
        name: "MuggleShip Fulfillment Centre — Bedford",
        url: `${SITE_URL}/`,
        image: `${SITE_URL}${OG_IMAGE.url}`,
        email: CONTACT.email,
        telephone: CONTACT.phoneE164,
        address: { "@type": "PostalAddress", ...ADDRESSES.bedford },
        geo: { "@type": "GeoCoordinates", ...GOOGLE_MAPS.geo },
        hasMap: GOOGLE_MAPS.url,
        parentOrganization: { "@id": orgId },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-GB",
        publisher: { "@id": orgId },
      },
    ],
  };

  return <JsonLd data={graph} />;
}
