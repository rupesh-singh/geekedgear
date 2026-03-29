import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Today's Best Deals on Fitness, Gaming & Tech Gear",
  description:
    "Curated deals on gear we've reviewed and recommend. Updated daily.",
};

const DEALS = [
  {
    title: "Green Soul Monster Ultimate — 45% OFF",
    slug: "green-soul-monster-ultimate-review",
    category: "Gaming",
    originalPrice: "₹35,533",
    salePrice: "₹19,690",
    discount: "45% OFF",
    affiliateUrl: "https://amzn.to/4bY63iB",
    endsIn: "Limited time",
  },
  {
    title: "FLEXISPOT EN1 Standing Desk — 64% OFF",
    slug: "flexispot-en1-standing-desk-review",
    category: "Tech",
    originalPrice: "₹49,999",
    salePrice: "₹17,999",
    discount: "64% OFF",
    affiliateUrl: "https://amzn.to/4lZeRJM",
    endsIn: "Limited time",
  },
  {
    title: "BenQ EW2790U 4K Monitor — 23% OFF",
    slug: "benq-ew2790u-4k-review",
    category: "Tech",
    originalPrice: "₹38,500",
    salePrice: "₹29,498",
    discount: "23% OFF",
    affiliateUrl: "https://amzn.to/4tfV3Eq",
    endsIn: "Limited time",
  },
];

export default function DealsPage() {
  return (
    <>
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Updated Daily
          </span>
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Today&apos;s Best Deals
          </h1>
          <p className="mt-3 max-w-xl text-base text-[var(--text-secondary)]">
            Only deals on gear we&apos;ve reviewed and actually recommend.
            No filler, no junk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="stagger grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DEALS.map((deal) => (
            <article
              key={deal.slug}
              className="group relative flex flex-col sm:flex-row items-start gap-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]"
            >
              {/* Discount badge */}
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                <span className="text-sm font-bold text-[var(--accent)]">
                  {deal.discount}
                </span>
              </div>

              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                    {deal.category}
                  </span>
                  <span className="text-xs text-[var(--warning)]">
                    Ends in {deal.endsIn}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  <Link href={`/reviews/${deal.slug}`}>
                    {deal.title}
                  </Link>
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-[var(--text-muted)] line-through">
                    {deal.originalPrice}
                  </span>
                  <span className="text-lg font-bold text-[var(--accent)]">
                    {deal.salePrice}
                  </span>
                </div>
              </div>

              <a
                href={deal.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-3 sm:mt-0 flex-shrink-0 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--bg-primary)] transition-all hover:brightness-110"
              >
                Get Deal →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
