import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryBadge } from "@/components/CategoryBadge";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ComparisonTable } from "@/components/ComparisonTable";

// Sample data — replace with real content from MDX files
const FEATURED_PRODUCTS = [
  {
    rank: 1,
    title: "Bowflex SelectTech 552 Adjustable Dumbbells",
    slug: "bowflex-selecttech-552-review",
    category: "Home Gym",
    excerpt:
      "The gold standard for adjustable dumbbells. 15 weight settings from 5 to 52.5 lbs in one compact set.",
    rating: 4.7,
    price: "$349",
    badge: "Editor's Choice",
    affiliateUrl: "#",
  },
  {
    rank: 2,
    title: "Optimum Nutrition Gold Standard Whey",
    slug: "on-gold-standard-whey-review",
    category: "Supplements",
    excerpt:
      "24g protein, 5.5g BCAAs, and it actually tastes good. The benchmark every other protein gets compared to.",
    rating: 4.8,
    price: "$32",
    badge: "Best Seller",
    affiliateUrl: "#",
  },
  {
    rank: 3,
    title: "Secretlab Titan Evo 2026",
    slug: "secretlab-titan-evo-2026-review",
    category: "Gaming",
    excerpt:
      "Premium ergonomic chair that works for 12-hour coding sessions AND gaming marathons. Your back will thank you.",
    rating: 4.6,
    price: "$519",
    affiliateUrl: "#",
  },
  {
    rank: 4,
    title: "REP Fitness PR-4000 Power Rack",
    slug: "rep-fitness-pr-4000-review",
    category: "Home Gym",
    excerpt:
      "Commercial-grade rack at home gym prices. 1,000 lb capacity, Westside hole spacing, and insane customization options.",
    rating: 4.9,
    price: "$699",
    badge: "Top Rated",
    affiliateUrl: "#",
  },
  {
    rank: 5,
    title: "Creatine Monohydrate (Thorne)",
    slug: "thorne-creatine-review",
    category: "Supplements",
    excerpt:
      "NSF Certified, zero fillers, actually third-party tested. The only creatine supplement you need.",
    rating: 4.8,
    price: "$32",
    affiliateUrl: "#",
  },
  {
    rank: 6,
    title: "FlexiSpot E7 Standing Desk",
    slug: "flexispot-e7-standing-desk-review",
    category: "Tech",
    excerpt:
      "Dual motor, programmable heights, holds 355 lbs. Perfect for a monitor-heavy dev/gaming setup.",
    rating: 4.5,
    price: "$479",
    affiliateUrl: "#",
  },
];

const LATEST_ARTICLES = [
  {
    title: "How to Build a Home Gym on a Budget (Under $500)",
    slug: "home-gym-budget-guide",
    category: "Fitness",
    excerpt:
      "You don't need to spend thousands. Here's exactly what I bought to build a solid home gym for under $500.",
    date: "Mar 28, 2026",
    readTime: "8 min read",
  },
  {
    title: "Creatine vs Pre-Workout: Which Should You Take?",
    slug: "creatine-vs-preworkout",
    category: "Supplements",
    excerpt:
      "Two of the most popular supplements, but they do very different things. Here's what the science says.",
    date: "Mar 25, 2026",
    readTime: "6 min read",
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
    title: "My Home Gym Setup Tour — What I'd Change",
    slug: "home-gym-tour",
    category: "Fitness",
    excerpt:
      "A full walkthrough of my garage gym build: what I got right, what was a waste of money, and what I'd buy differently.",
    date: "Mar 18, 2026",
    readTime: "7 min read",
  },
];

const CATEGORIES = [
  { name: "Fitness Gear", href: "/fitness", icon: "🏋️", count: 24 },
  { name: "Gaming Setups", href: "/gaming", icon: "🎮", count: 18 },
  { name: "Tech & Gadgets", href: "/tech", icon: "⚡", count: 12 },
  { name: "Supplements", href: "/fitness?tag=supplements", icon: "💊", count: 15 },
];

const COMPARISON_DATA = {
  products: ["Bowflex 552", "PowerBlock Elite", "NordicTrack Select"],
  prices: ["$349", "$339", "$429"],
  rows: [
    { feature: "Weight Range", values: ["5–52.5 lbs", "5–50 lbs", "10–55 lbs"], highlight: 0 },
    { feature: "Adjustment", values: ["Dial", "Pin", "Dial"], highlight: 1 },
    { feature: "Build Quality", values: ["Plastic/Metal", "All Steel", "Plastic/Metal"], highlight: 1 },
    { feature: "Footprint", values: ['15.75"', '12"', '14.5"'], highlight: 1 },
    { feature: "Warranty", values: ["2 years", "10 years", "2 years"], highlight: 1 },
    { feature: "Overall Rating", values: ["4.7 ★", "4.6 ★", "4.3 ★"], highlight: 0 },
  ],
  affiliateUrls: ["#", "#", "#"],
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
            Adjustable Dumbbells Compared
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)] max-w-lg">
            The three most popular adjustable dumbbells on the market,
            compared on what actually matters.
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

