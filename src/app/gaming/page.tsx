import { ProductCard } from "@/components/ProductCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Gaming Gear & Setup Reviews (2026)",
  description:
    "Chairs, desks, peripherals, and ergonomics for gamers and developers. Tested during real 12-hour sessions.",
};

const GAMING_PRODUCTS = [
  {
    rank: 1,
    title: "ASUS TUF Gaming VG247Q1A 24\" 165Hz Monitor",
    slug: "asus-tuf-vg247q1a-gaming-monitor-review",
    category: "Monitors",
    excerpt: "24\" FHD 165Hz VA panel with ELMB 1ms, FreeSync Premium, Shadow Boost, built-in speakers. Amazon's Choice — 41% OFF.",
    rating: 4.6,
    price: "₹13,499",
    badge: "Amazon's Choice",
    image: "https://m.media-amazon.com/images/I/61irNQIlNhL._SY450_.jpg",
    affiliateUrl: "https://amzn.to/4dZHg07",
  },
  {
    rank: 2,
    title: "Kreo Hive 75 HE Hall Effect Keyboard",
    slug: "kreo-hive-75-he-keyboard-review",
    category: "Keyboards",
    excerpt: "Hall Effect switches, 8K polling rate, rapid trigger, RGB, volume knob. Best budget competitive keyboard — 43% OFF.",
    rating: 4.5,
    price: "₹3,999",
    badge: "Amazon's Choice",
    image: "https://m.media-amazon.com/images/I/61dPj3YrYRL._SY450_.jpg",
    affiliateUrl: "https://amzn.to/4dtSjPc",
  },
  {
    rank: 3,
    title: "Green Soul Monster Ultimate Gaming Chair",
    slug: "green-soul-monster-ultimate-review",
    category: "Chairs",
    excerpt: "Premium spandex & PU leather, 4D adjustable armrests, 180° recline, memory foam neck & lumbar pillows. 8,700+ reviews.",
    rating: 4.5,
    price: "₹19,690",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/61HyPFzZG7L._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4bY63iB",
  },
  {
    rank: 4,
    title: "Casa Copenhagen Leather Gaming Chair",
    slug: "casa-copenhagen-leather-gaming-chair-review",
    category: "Chairs",
    excerpt: "Italian leather, electric back massager, memory foam seating, multi-function armrest. 80% OFF at ₹7,999.",
    rating: 4.3,
    price: "₹7,999",
    badge: "Hot Deal",
    image: "https://m.media-amazon.com/images/I/81UiZ5GiF-L._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4tnazy5",
  },
];

export default function GamingPage() {
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
            Gaming Setups & Gear
          </h1>
          <p className="mt-3 max-w-xl text-base text-[var(--text-secondary)]">
            Chairs, desks, peripherals, and monitors — tested during real
            gaming and coding sessions, not 15-minute unboxings.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GAMING_PRODUCTS.map((product) => (
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
