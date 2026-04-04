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
    title: "Casa Copenhagen Fabric Ergonomic Gaming Chair",
    slug: "casa-copenhagen-fabric-gaming-chair-review",
    category: "Ergonomics",
    excerpt: "Electric back massager, memory foam seating, multi-function armrest. Perfect for post-workout recovery sessions. 79% OFF.",
    rating: 4.3,
    price: "₹8,499",
    badge: "Hot Deal",
    image: "https://m.media-amazon.com/images/I/814QY0ZJZbL._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4dpAYH3",
  },
  {
    rank: 2,
    title: "FLEXISPOT EN1 Standing Desk",
    slug: "flexispot-en1-standing-desk-review",
    category: "Active Workspace",
    excerpt: "Alternate between sitting and standing during WFH. Electric height adjustable, anti-collision, 80 KG capacity.",
    rating: 4.5,
    price: "₹17,999",
    badge: "Top Deal",
    image: "https://m.media-amazon.com/images/I/51OIEZueOiL._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4lZeRJM",
  },
  {
    rank: 3,
    title: "Green Soul Monster Ultimate Gaming Chair",
    slug: "green-soul-monster-ultimate-review",
    category: "Ergonomics",
    excerpt: "4D armrests, 180° recline, memory foam lumbar support. Keeps your posture in check during long gaming & desk sessions.",
    rating: 4.5,
    price: "₹19,690",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/61HyPFzZG7L._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4bY63iB",
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
