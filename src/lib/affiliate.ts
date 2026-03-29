/**
 * Affiliate link tracking utility.
 * Wraps outbound affiliate links with tracking parameters
 * and logs click events for analytics.
 */

export interface AffiliateLink {
  /** Internal identifier for the product */
  productSlug: string;
  /** The raw affiliate URL */
  url: string;
  /** Which network (amazon, shareasale, direct, etc.) */
  network: string;
  /** Optional sub-tag for A/B testing */
  tag?: string;
}

/**
 * Build a tracked affiliate URL.
 * Appends UTM params so you can trace which page/component drove the click.
 */
export function buildAffiliateUrl(
  link: AffiliateLink,
  source: string
): string {
  const url = new URL(link.url);

  // Amazon tag
  if (link.network === "amazon" && link.tag) {
    url.searchParams.set("tag", link.tag);
  }

  // UTM tracking (for your analytics)
  url.searchParams.set("utm_source", "geekedgear");
  url.searchParams.set("utm_medium", "affiliate");
  url.searchParams.set("utm_campaign", link.productSlug);
  url.searchParams.set("utm_content", source);

  return url.toString();
}

/**
 * Log an affiliate click event.
 * Sends to your analytics provider (Google Analytics, Plausible, etc.)
 */
export function trackAffiliateClick(
  productSlug: string,
  network: string,
  source: string
) {
  if (typeof window === "undefined") return;

  // Google Analytics 4 event
  const w = window as unknown as Record<string, (...args: unknown[]) => void>;
  if (typeof w.gtag === "function") {
    w.gtag("event", "affiliate_click", {
      product: productSlug,
      network,
      source,
    });
  }

  // Plausible custom event
  if (typeof w.plausible === "function") {
    w.plausible("Affiliate Click", {
      props: { product: productSlug, network, source },
    });
  }
}
