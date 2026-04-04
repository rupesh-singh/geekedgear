import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryBadge } from "@/components/CategoryBadge";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ComparisonTable } from "@/components/ComparisonTable";

const FEATURED_PRODUCTS = [
  {
    rank: 1,
    title: "ASUS TUF Gaming VG247Q1A 24\" 165Hz Monitor",
    slug: "asus-tuf-vg247q1a-gaming-monitor-review",
    category: "Gaming",
    excerpt:
      "24\" FHD 165Hz, ELMB 1ms, FreeSync Premium, Shadow Boost, built-in speakers. Amazon's Choice — 41% OFF from ₹22,999.",
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
    category: "Gaming",
    excerpt:
      "Hall Effect switches, 8K polling rate, rapid trigger, per-key RGB, volume knob. Best budget esports keyboard — 43% OFF.",
    rating: 4.5,
    price: "₹3,999",
    badge: "Amazon's Choice",
    image: "https://m.media-amazon.com/images/I/61dPj3YrYRL._SY450_.jpg",
    affiliateUrl: "https://amzn.to/4dtSjPc",
  },
  {
    rank: 3,
    title: "Casa Copenhagen Leather Gaming Chair",
    slug: "casa-copenhagen-leather-gaming-chair-review",
    category: "Gaming",
    excerpt:
      "Italian leather with electric back massager, memory foam seating, multi-function armrest. Insane 80% OFF at ₹7,999.",
    rating: 4.3,
    price: "₹7,999",
    badge: "Hot Deal",
    image: "https://m.media-amazon.com/images/I/81UiZ5GiF-L._SX425_.jpg",
    affiliateUrl: "https://amzn.to/4tnazy5",
  },
];

const LATEST_ARTICLES = [
  {
    title: "Kreo Hive 75 HE Review: Best Budget Hall Effect Keyboard?",
    slug: "kreo-hive-75-he-keyboard-review",
    category: "Gaming",
    excerpt:
      "Hall effect switches, 8K polling rate, and rapid trigger — all for under ₹4,000. Is it too good to be true?",
    date: "Apr 4, 2026",
    readTime: "7 min read",
  },
  {
    title: "ASUS TUF VG247Q1A Review: Best Budget 165Hz Monitor",
    slug: "asus-tuf-vg247q1a-gaming-monitor-review",
    category: "Tech",
    excerpt:
      "24-inch, 165Hz, 1ms response, FreeSync Premium, and speakers for ₹13,499. We tested it for gaming and productivity.",
    date: "Apr 4, 2026",
    readTime: "8 min read",
  },
  {
    title: "Best Standing Desk for Developers & Gamers (2026)",
    slug: "best-standing-desk-devs-gamers",
    category: "Tech",
    excerpt:
      "After testing 7 standing desks over 6 months, here are the ones that survived dual-monitor weight and daily adjustments.",
    date: "Mar 22, 2026",
    readTime: "10 min read",
  },
  {
    title: "How to Build a Home Gym on a Budget (Under $500)",
    slug: "home-gym-budget-guide",
    category: "Fitness",
    excerpt:
      "You don't need to spend thousands. Here's exactly what I bought to build a solid home gym for under $500.",
    date: "Mar 28, 2026",
    readTime: "8 min read",
  },
];

const CATEGORIES = [
  { name: "Fitness Gear", href: "/fitness", icon: "🏋️", count: 24 },
  { name: "Gaming Setups", href: "/gaming", icon: "🎮", count: 18 },
  { name: "Tech & Gadgets", href: "/tech", icon: "⚡", count: 12 },
  { name: "Supplements", href: "/fitness?tag=supplements", icon: "💊", count: 15 },
];

const COMPARISON_DATA = {
  products: ["ASUS TUF VG247Q1A", "Kreo Hive 75 HE", "Casa Copenhagen Chair"],
  prices: ["₹13,499", "₹3,999", "₹7,999"],
  rows: [
    { feature: "Category", values: ["Gaming Monitor", "Hall Effect Keyboard", "Gaming Chair"], highlight: -1 },
    { feature: "Rating", values: ["4.6 ★ (634)", "4.5 ★ (308)", "New Launch"], highlight: 0 },
    { feature: "Key Feature", values: ["165Hz ELMB", "8K Polling + Rapid Trigger", "Electric Massager"], highlight: 1 },
    { feature: "Warranty", values: ["3 Years", "1 Year", "1 Year"], highlight: 0 },
    { feature: "Discount", values: ["41% OFF", "43% OFF", "80% OFF"], highlight: 2 },
    { feature: "Best For", values: ["FPS Gaming", "Competitive Esports", "Long Sessions"], highlight: -1 },
  ],
  affiliateUrls: ["https://amzn.to/4dZHg07", "https://amzn.to/4dtSjPc", "https://amzn.to/4tnazy5"],
};

export default function Home() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        {/* Background dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(var(--accent) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Accent glow blobs */}
        <div className="absolute top-1/3 -left-32 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="fade-up mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Honest Gear Reviews
              </span>
            </div>

            {/* Headline */}
            <h1
              className="fade-up text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-syne)",
                animationDelay: "0.1s",
              }}
            >
              Gear Tested by a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Geek Who Lifts</span>
                <span className="absolute bottom-1 left-0 h-3 w-full bg-[var(--accent)]/20 -skew-x-3" />
              </span>
            </h1>

            {/* Subhead */}
            <p
              className="fade-up mt-6 max-w-xl text-lg text-[var(--text-secondary)] leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              No fluff, no fake ratings. Real reviews on fitness equipment,
              gaming setups, and tech gadgets — from someone who actually
              uses this stuff daily.
            </p>

            {/* CTAs */}
            <div
              className="fade-up mt-8 flex flex-wrap gap-4"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/fitness"
                className="rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--bg-primary)] transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
              >
                Browse Reviews
              </Link>
              <Link
                href="/deals"
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--accent)]/30 hover:bg-[var(--bg-card-hover)]"
              >
                Today&apos;s Deals
              </Link>
            </div>

            {/* Trust signals */}
            <div
              className="fade-up mt-12 flex flex-wrap items-center gap-8 text-xs text-[var(--text-muted)]"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] text-base">✓</span>
                Hands-on tested
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] text-base">✓</span>
                No sponsored rankings
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] text-base">✓</span>
                Updated monthly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CATEGORIES ───────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Browse by Category
            </h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Find exactly what you&apos;re looking for
            </p>
          </div>
        </div>
        <div className="stagger grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <CategoryBadge key={cat.name} {...cat} />
          ))}
        </div>
      </section>

      {/* ───────── FEATURED PRODUCTS ───────── */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Top Rated
              </span>
              <h2
                className="text-2xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Featured Gear
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── COMPARISON TABLE ───────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Head-to-Head
          </span>
          <h2
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Our Top Picks Compared
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)] max-w-lg">
            Three geeked-out essentials for your setup — gaming chair,
            4K monitor, and standing desk, compared side by side.
          </p>
        </div>
        <ComparisonTable {...COMPARISON_DATA} />
      </section>

      {/* ───────── LATEST ARTICLES ───────── */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Blog
              </span>
              <h2
                className="text-2xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Latest Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              All articles →
            </Link>
          </div>
          <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2">
            {LATEST_ARTICLES.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── NEWSLETTER ───────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <NewsletterForm />
      </section>

      {/* ───────── DISCLOSURE BANNER ───────── */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center">
          <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
            <strong className="text-[var(--text-secondary)]">
              FTC Disclosure:
            </strong>{" "}
            GeekedGear earns commissions through affiliate links on this
            site. This doesn&apos;t affect our reviews or rankings — we
            recommend products based on hands-on testing and honest
            evaluation. We only recommend gear we&apos;d actually buy
            ourselves.
          </p>
        </div>
      </section>
    </>
  );
}

