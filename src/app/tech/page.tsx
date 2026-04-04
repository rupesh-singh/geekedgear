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
    title: "AULA F75 Pro Wireless Mechanical Keyboard",
    slug: "aula-f75-pro-wireless-keyboard-review",
    category: "Keyboards",
    excerpt: "75% hot-swappable, gasket mount, Bluetooth/2.4G/USB-C tri-mode. PBT keycaps, pre-lubed switches, RGB. 4.8★ rated.",
    rating: 4.8,
    price: "₹15,125",
    badge: "Top Rated",
    image: "https://m.media-amazon.com/images/I/71DMKGhYLWL._SY355_.jpg",
    affiliateUrl: "https://amzn.to/4829ML5",
  },
  {
    rank: 2,
    title: "LG Ultragear 24GN65R 24\" 144Hz IPS Monitor",
    slug: "lg-ultragear-24gn65r-review",
    category: "Monitors",
    excerpt: "24\" FHD IPS, 1ms GtG, 144Hz, sRGB 99%, HDR 10, height/tilt/pivot adjustable stand. 972 reviews, 4.5★.",
    rating: 4.5,
    price: "₹15,990",
    badge: "Editor's Choice",
    image: "https://m.media-amazon.com/images/I/715tAlRV1oL._SY450_.jpg",
    affiliateUrl: "https://amzn.to/41aoxYi",
  },
  {
    rank: 3,
    title: "FLEXISPOT EN1 Standing Desk",
    slug: "flexispot-en1-standing-desk-review",
    category: "Standing Desk",
    excerpt: "Electric height adjustable with anti-collision detection, 80 KG capacity, 4 memory presets. 5-year warranty.",
    rating: 4.5,
    price: "₹17,999",
    badge: "Top Deal",
    image: "https://m.media-amazon.com/images/I/51OIEZueOiL._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4lZeRJM",
  },
  {
    rank: 4,
    title: "BenQ EW2790U 27\" 4K Monitor",
    slug: "benq-ew2790u-4k-review",
    category: "Monitors",
    excerpt: "27\" 4K UHD IPS, 95% P3 color gamut, AI Contrast, built-in 5Wx2 speakers, USB-C 65W PD. Eye-care certified.",
    rating: 4.5,
    price: "₹29,498",
    badge: "Premium Pick",
    image: "https://m.media-amazon.com/images/I/71xmtUEoDcL._SY450_.jpg",
    affiliateUrl: "https://amzn.to/4tfV3Eq",
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
        <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
