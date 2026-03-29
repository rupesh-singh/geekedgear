/**
 * Generate JSON-LD structured data for SEO.
 */

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GeekedGear",
    url: "https://geekedgear.vercel.app",
    description:
      "Honest gear reviews for fitness, gaming, and tech — tested by a geek who lifts.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://geekedgear.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@type": "Person",
      name: "GeekedGear",
      url: "https://geekedgear.vercel.app/about",
    },
    publisher: {
      "@type": "Organization",
      name: "GeekedGear",
      url: "https://geekedgear.vercel.app",
    },
  };
}

export function productReviewJsonLd(product: {
  name: string;
  description: string;
  url: string;
  rating: number;
  price: string;
  currency?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: product.url,
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: product.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: "GeekedGear",
      },
    },
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^0-9.]/g, ""),
      priceCurrency: product.currency ?? "USD",
      availability: "https://schema.org/InStock",
    },
  };
}
