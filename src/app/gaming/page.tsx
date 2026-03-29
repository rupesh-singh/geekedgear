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
    rank: 2,
    title: "BenQ EW2790U 27\" 4K Monitor",
    slug: "benq-ew2790u-4k-review",
    category: "Monitors",
    excerpt: "4K UHD IPS, 95% P3, AI Contrast, treVolo 5Wx2 speakers, USB-C 65W PD, 3x HDMI. Great for gaming & content.",
    rating: 4.5,
    price: "₹29,498",
    badge: "Editor's Choice",
    image: "https://m.media-amazon.com/images/I/71xmtUEoDcL._SY450_.jpg",
    affiliateUrl: "https://amzn.to/4tfV3Eq",
  },
  {
    rank: 3,
    title: "FLEXISPOT EN1 Standing Desk",
    slug: "flexispot-en1-standing-desk-review",
    category: "Desks",
    excerpt: "Electric height adjustable, anti-collision detection, 80 KG capacity, 4 memory presets. 5-year warranty.",
    rating: 4.5,
    price: "₹17,999",
    badge: "Top Deal",
    image: "https://m.media-amazon.com/images/I/51OIEZueOiL._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4lZeRJM",
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
        <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
