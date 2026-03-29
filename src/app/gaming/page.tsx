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
    title: "Secretlab Titan Evo 2026",
    slug: "secretlab-titan-evo-2026-review",
    category: "Chairs",
    excerpt: "Premium ergonomic chair for coding and gaming. Cold-cure foam, magnetic accessories, 5-year warranty.",
    rating: 4.6,
    price: "$519",
    badge: "Editor's Choice",
    affiliateUrl: "#",
  },
  {
    rank: 2,
    title: "FlexiSpot E7 Standing Desk",
    slug: "flexispot-e7-standing-desk-review",
    category: "Desks",
    excerpt: "Dual motor, 355 lb capacity, programmable heights. Handles heavy multi-monitor setups with ease.",
    rating: 4.5,
    price: "$479",
    affiliateUrl: "#",
  },
  {
    rank: 3,
    title: "Logitech G Pro X Superlight 2",
    slug: "logitech-g-pro-x-superlight-2-review",
    category: "Peripherals",
    excerpt: "60g, HERO 2 sensor, 95-hour battery. The mouse competitive gamers actually use.",
    rating: 4.7,
    price: "$159",
    badge: "Best Seller",
    affiliateUrl: "#",
  },
  {
    rank: 4,
    title: "LG 27GP850-B 27\" Gaming Monitor",
    slug: "lg-27gp850-b-review",
    category: "Monitors",
    excerpt: "165Hz, 1ms, Nano IPS, HDR400. Stunning color accuracy at a reasonable price point.",
    rating: 4.5,
    price: "$349",
    affiliateUrl: "#",
  },
  {
    rank: 5,
    title: "Keychron Q1 Max Mechanical Keyboard",
    slug: "keychron-q1-max-review",
    category: "Peripherals",
    excerpt: "Wireless, hot-swappable, gasket mount, QMK/VIA. The endgame keyboard for devs who game.",
    rating: 4.6,
    price: "$219",
    affiliateUrl: "#",
  },
  {
    rank: 6,
    title: "HyperX Cloud III Wireless",
    slug: "hyperx-cloud-iii-wireless-review",
    category: "Audio",
    excerpt: "DTS Spatial Audio, 120-hour battery, memory foam pads. Comfort king for long sessions.",
    rating: 4.4,
    price: "$149",
    affiliateUrl: "#",
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
