// components/SEOHead.jsx
import React from "react";
import Head from "next/head";
import Script from "next/script";

const SEOHead = ({
  title,
  description,
  keywords = "",
  url = "https://www.nexcorealliance.com",
  image = "/og-image.png",
  schema = null,
}) => {
  return (
    <>
      <Head>
        {/* Title & Meta */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={url} />

        {/* Generator (informational) */}
        <meta name="generator" content="Custom Next.js website by NEXCORE ALLIANCE LLP" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      {/* JSON-LD Schema */}
      {schema && (
        <Script id="jsonld-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(schema)}
        </Script>
      )}
    </>
  );
};

export default SEOHead;
