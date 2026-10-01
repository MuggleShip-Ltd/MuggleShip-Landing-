import {
  ADDRESSES,
  CONTACT,
  OG_IMAGE,
  SERVICES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
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
          width: 4231,
          height: 886,
        },
        image: `${SITE_URL}${OG_IMAGE.url}`,
        description: SITE_DESCRIPTION,
        email: CONTACT.email,
        telephone: CONTACT.phoneE164,
        address: { "@type": "PostalAddress", ...ADDRESSES.london },
        areaServed: "Worldwide",
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
              "@id": `${SITE_URL}/#${s.id}`,
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
        parentOrganization: { "@id": orgId },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
