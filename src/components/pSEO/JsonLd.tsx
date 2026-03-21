import React from 'react';

interface JsonLdProps {
  serviceName: string;
  locationName: string;
  url: string;
  description: string;
}

const JsonLd: React.FC<JsonLdProps> = ({ serviceName, locationName, url, description }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LaundryService",
    "name": `${serviceName} in ${locationName} | The Orchid Laundry`,
    "description": description,
    "url": url,
    "telephone": "7080803074",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationName,
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "serviceArea": {
      "@type": "City",
      "name": locationName
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "The Orchid Laundry",
      "image": "https://theorchidlaundry.com/logo.png",
      "priceRange": "₹₹"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laundry and Dry Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
