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
    title: "FLEXISPOT EN1 Standing Desk",
    slug: "flexispot-en1-standing-desk-review",
    category: "Standing Desk",
    excerpt: "Electric height adjustable with anti-collision detection, 80 KG capacity, 4 memory presets. Walnut finish, 120x75CM.",
    rating: 4.5,
    price: "₹17,999",
    badge: "Top Deal",
    image: "https://m.media-amazon.com/images/I/51OIEZueOiL._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4lZeRJM",
  },
  {
    rank: 2,
    title: "BenQ EW2790U 27\" 4K Monitor",
    slug: "benq-ew2790u-4k-review",
    category: "Monitors",
    excerpt: "27\" 4K UHD IPS, 95% P3 color gamut, AI Contrast, built-in 5Wx2 speakers, USB-C 65W PD. Eye-care certified.",
    rating: 4.5,
    price: "₹29,498",
    badge: "Editor's Choice",
    image: "https://m.media-amazon.com/images/I/71xmtUEoDcL._SY450_.jpg",
    affiliateUrl: "https://amzn.to/4tfV3Eq",
  },
  {
    rank: 3,
    title: "Green Soul Monster Ultimate Gaming Chair",
    slug: "green-soul-monster-ultimate-review",
    category: "Ergonomics",
    excerpt: "Multi-functional ergonomic chair with 4D armrests, 180° recline, adjustable lumbar. Works as a dev chair too.",
    rating: 4.5,
    price: "₹19,690",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/61HyPFzZG7L._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4bY63iB",
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
