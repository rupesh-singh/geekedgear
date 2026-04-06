import { getAllReviews } from "@/lib/content";
import { ProductCard } from "@/components/ProductCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In-Depth Product Reviews — GeekedGear",
  description:
    "Honest, hands-on reviews of gaming gear, fitness equipment, and tech products. Tested in real-world conditions, not 15-minute unboxings.",
};

export default function ReviewsPage() {
  const reviews = getAllReviews().filter((r) => !r.slug.startsWith("_"));

  return (
    <>
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Reviews
          </span>
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            In-Depth Product Reviews
          </h1>
          <p className="mt-3 max-w-xl text-base text-[var(--text-secondary)]">
            Every product tested hands-on for days, not minutes. Real ratings,
            real comparisons, zero fluff.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <ProductCard
              key={review.slug}
              rank={i + 1}
              title={review.title}
              slug={review.slug}
              category={review.category}
              excerpt={review.excerpt}
              rating={review.rating}
              price={review.price}
              badge={review.badge}
              affiliateUrl={review.affiliateUrl}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <NewsletterForm />
      </section>
    </>
  );
}
