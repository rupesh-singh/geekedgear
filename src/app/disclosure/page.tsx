import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How GeekedGear earns money and our commitment to honest, unbiased reviews.",
};

export default function DisclosurePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1
        className="text-3xl font-extrabold tracking-tight sm:text-4xl"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Affiliate Disclosure
      </h1>

      <div className="prose-custom mt-10">
        <p>
          <strong>Last updated:</strong> March 2026
        </p>

        <p>
          GeekedGear is a participant in various affiliate advertising
          programs designed to provide a means for sites to earn advertising
          fees by advertising and linking to retailers. This includes, but is
          not limited to, the Amazon Services LLC Associates Program.
        </p>

        <h2>What This Means for You</h2>
        <p>
          When you click on a product link on GeekedGear and make a purchase,
          we may receive a small commission from the retailer. This comes at
          <strong> absolutely no extra cost to you</strong> — the price you
          pay is exactly the same whether you use our link or go directly.
        </p>

        <h2>How This Affects Our Reviews</h2>
        <p>
          <strong>It doesn&apos;t.</strong> Our reviews and rankings are based
          solely on hands-on testing, product quality, and value for money. We
          never let commission rates influence our recommendations. If a
          product sucks, we&apos;ll tell you — even if it pays well.
        </p>

        <h2>Our Affiliate Partners</h2>
        <p>
          We currently work with the following affiliate programs and networks:
        </p>
        <ul>
          <li>Amazon Associates</li>
          <li>ShareASale</li>
          <li>Impact Radius</li>
          <li>Various direct brand affiliate programs</li>
        </ul>

        <h2>Questions?</h2>
        <p>
          If you have any questions about our affiliate relationships, feel
          free to reach out. We believe in full transparency about how we
          earn money.
        </p>
      </div>
    </section>
  );
}
