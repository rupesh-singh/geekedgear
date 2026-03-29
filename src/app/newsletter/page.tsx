import { NewsletterForm } from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — Weekly Gear Deals & Reviews",
  description:
    "Get the best fitness, gaming, and tech deals delivered to your inbox every week. No spam, ever.",
};

export default function NewsletterPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center mb-12">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Newsletter
        </span>
        <h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Gear Deals, Weekly
        </h1>
        <p className="mt-4 text-base text-[var(--text-secondary)] max-w-lg mx-auto">
          Every Friday, I send one email with the best deals I&apos;ve found,
          new reviews, and gear I&apos;m personally eyeing. No spam,
          unsubscribe anytime.
        </p>
      </div>

      <NewsletterForm />

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          {
            icon: "🏷️",
            title: "Best Deals",
            desc: "Curated price drops on gear I've reviewed and recommend.",
          },
          {
            icon: "📝",
            title: "New Reviews",
            desc: "Be the first to read in-depth reviews before they hit search results.",
          },
          {
            icon: "💡",
            title: "Gear Tips",
            desc: "Quick tips on setup, maintenance, and getting the most from your gear.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center"
          >
            <span className="mb-3 inline-block text-3xl">{item.icon}</span>
            <h3
              className="mb-1 text-sm font-semibold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {item.title}
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
