"use client";

export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nexcore Alliance LLP",
    url: "https://www.nexcorealliance.com",
    logo: "https://www.nexcorealliance.com/nex.png",
    image: "https://www.nexcorealliance.com/nex.png",
    telephone: "+91-8976104646",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Building No. 3, White House, Office No. 1A & 2, Lower Ground Floor New, Buddha Colony, Kurla West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400070",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.07283",
      longitude: "72.88261",
    },
    sameAs: [
      "https://twitter.com/nexcore",
      "https://www.linkedin.com/company/105730702/",
      "https://github.com/dev-nexcore",
    ],
    openingHours: "Mo-Fr 10:00-19:00",
    priceRange: "$$",
  };

  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
