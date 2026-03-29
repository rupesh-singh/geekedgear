import { ProductCard } from "@/components/ProductCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Tech & Gadget Reviews (2026)",
  description:
    "Standing desks, productivity gadgets, and developer tools reviewed by a software engineer who actually uses them.",
};

const TECH_PRODUCTS = [
  {
    rank: 1,
    title: "FlexiSpot E7 Standing Desk",
    slug: "flexispot-e7-standing-desk-review",
    category: "Standing Desk",
    excerpt: "Dual motor, 355 lb capacity, programmable presets. The best value standing desk for heavy setups.",
    rating: 4.5,
    price: "$479",
    badge: "Best Value",
    affiliateUrl: "#",
  },
  {
    rank: 2,
    title: "CalDigit TS4 Thunderbolt Hub",
    slug: "caldigit-ts4-review",
    category: "Docking",
    excerpt: "18 ports, 98W charging, 2.5GbE. One cable to rule your entire desk setup.",
    rating: 4.7,
    price: "$399",
    badge: "Editor's Choice",
    affiliateUrl: "#",
  },
  {
    rank: 3,
    title: "BenQ ScreenBar Halo",
    slug: "benq-screenbar-halo-review",
    category: "Lighting",
    excerpt: "Backlight + monitor light bar with wireless controller. Eliminates screen glare completely.",
    rating: 4.6,
    price: "$179",
    affiliateUrl: "#",
  },
  {
    rank: 4,
    title: "Sony WH-1000XM5 Headphones",
    slug: "sony-wh-1000xm5-review",
    category: "Audio",
    excerpt: "Best-in-class ANC, 30-hour battery, multipoint. The remote developer's best friend.",
    rating: 4.7,
    price: "$349",
    affiliateUrl: "#",
  },
  {
    rank: 5,
    title: "Elgato Stream Deck MK.2",
    slug: "elgato-stream-deck-mk2-review",
    category: "Productivity",
    excerpt: "15 LCD keys, custom macros, app integrations. Surprisingly useful even if you don't stream.",
    rating: 4.4,
    price: "$149",
    affiliateUrl: "#",
  },
  {
    rank: 6,
    title: "Anker 737 Power Bank (24,000mAh)",
    slug: "anker-737-power-bank-review",
    category: "Charging",
    excerpt: "140W output, charges a MacBook Pro. The power bank for people who actually need power.",
    rating: 4.5,
    price: "$109",
    affiliateUrl: "#",
  },
];

export default function TechPage() {
  return (
    <>
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Category
          </span>
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Tech & Gadgets
          </h1>
          <p className="mt-3 max-w-xl text-base text-[var(--text-secondary)]">
            Desk setups, productivity tools, and developer gadgets — reviewed
            by a software engineer, for software engineers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <NewsletterForm />
      </section>
    </>
  );
}
