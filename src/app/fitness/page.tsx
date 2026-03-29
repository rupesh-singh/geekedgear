import { ProductCard } from "@/components/ProductCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Fitness Gear & Equipment Reviews (2026)",
  description:
    "In-depth, hands-on reviews of home gym equipment, supplements, and fitness accessories. Tested by a lifter, ranked by quality.",
};

const FITNESS_PRODUCTS = [
  {
    rank: 1,
    title: "REP Fitness PR-4000 Power Rack",
    slug: "rep-fitness-pr-4000-review",
    category: "Home Gym",
    excerpt: "Commercial-grade rack at home gym prices. 1,000 lb capacity with insane customization options.",
    rating: 4.9,
    price: "$699",
    badge: "Top Rated",
    affiliateUrl: "#",
  },
  {
    rank: 2,
    title: "Bowflex SelectTech 552 Adjustable Dumbbells",
    slug: "bowflex-selecttech-552-review",
    category: "Home Gym",
    excerpt: "15 weight settings from 5 to 52.5 lbs. The gold standard for adjustable dumbbells.",
    rating: 4.7,
    price: "$349",
    badge: "Editor's Choice",
    affiliateUrl: "#",
  },
  {
    rank: 3,
    title: "Optimum Nutrition Gold Standard Whey",
    slug: "on-gold-standard-whey-review",
    category: "Supplements",
    excerpt: "24g protein, 5.5g BCAAs, and it actually tastes good. The benchmark protein powder.",
    rating: 4.8,
    price: "$32",
    badge: "Best Seller",
    affiliateUrl: "#",
  },
  {
    rank: 4,
    title: "Rogue Echo Bike",
    slug: "rogue-echo-bike-review",
    category: "Cardio",
    excerpt: "Belt-driven fan bike built like a tank. The best conditioning tool for home gyms.",
    rating: 4.7,
    price: "$795",
    affiliateUrl: "#",
  },
  {
    rank: 5,
    title: "Thorne Creatine Monohydrate",
    slug: "thorne-creatine-review",
    category: "Supplements",
    excerpt: "NSF Certified, zero fillers, third-party tested. The cleanest creatine available.",
    rating: 4.8,
    price: "$32",
    affiliateUrl: "#",
  },
  {
    rank: 6,
    title: "Rogue Ohio Cerakote Barbell",
    slug: "rogue-ohio-cerakote-barbell-review",
    category: "Home Gym",
    excerpt: "190K PSI tensile strength, lifetime warranty, gorgeous Cerakote finish. The forever barbell.",
    rating: 4.9,
    price: "$395",
    badge: "Premium Pick",
    affiliateUrl: "#",
  },
];

export default function FitnessPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Category
          </span>
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Fitness Gear & Equipment
          </h1>
          <p className="mt-3 max-w-xl text-base text-[var(--text-secondary)]">
            Home gym equipment, supplements, and accessories — tested with
            real workouts, not spec-sheet comparisons.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FITNESS_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <NewsletterForm />
      </section>
    </>
  );
}
