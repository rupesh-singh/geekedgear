import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About GeekedGear",
  description:
    "Who's behind GeekedGear? A software engineer who lifts, games, and obsesses over gear reviews.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        About
      </span>
      <h1
        className="text-3xl font-extrabold tracking-tight sm:text-4xl"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        The Geek Behind the Gear
      </h1>

      <div className="prose-custom mt-10">
        <p>
          Hey — I&apos;m a software engineer by day, gym rat by habit, and
          gamer by night. I started GeekedGear because I was tired of reading
          affiliate sites that clearly never touched the products they
          recommended.
        </p>

        <h2>Why This Site Exists</h2>
        <p>
          Most &quot;best of&quot; lists are written by content farms rewriting
          Amazon descriptions. I actually buy, test, and use the gear I review.
          If I recommend adjustable dumbbells, it&apos;s because I&apos;ve been
          using them for months in my garage gym — not because the commission is
          higher.
        </p>

        <h2>How I Review</h2>
        <ul>
          <li>
            <strong>Hands-on only:</strong> I don&apos;t review products I
            haven&apos;t personally used for at least 2 weeks.
          </li>
          <li>
            <strong>No pay-for-play:</strong> Rankings are based on quality, not
            who pays me more. The comparison tables show the truth.
          </li>
          <li>
            <strong>Regular updates:</strong> Products change, prices shift. I
            update reviews monthly.
          </li>
          <li>
            <strong>Real photos:</strong> When you see a product shot, it&apos;s
            from my gym, my desk, or my setup — not a stock image.
          </li>
        </ul>

        <h2>What I Cover</h2>
        <p>
          Right now, the site focuses on three areas where I have genuine
          expertise:
        </p>
        <ul>
          <li>
            <strong>Fitness gear:</strong> Home gym equipment, supplements,
            accessories
          </li>
          <li>
            <strong>Gaming setups:</strong> Chairs, desks, peripherals,
            monitors
          </li>
          <li>
            <strong>Tech & gadgets:</strong> Developer tools, productivity
            hardware, desk accessories
          </li>
        </ul>

        <h2>Affiliate Disclosure</h2>
        <p>
          Some links on this site are affiliate links — meaning if you buy
          something through my link, I earn a small commission at no extra cost
          to you. This is how the site stays running. But it never influences
          my reviews or rankings. I&apos;d rather recommend a product that pays
          me nothing than steer you toward something that pays well but
          sucks.
        </p>

        <h2>Get in Touch</h2>
        <p>
          Have a question about a product? Want me to review something specific?
          Got feedback? Reach out — I read everything.
        </p>
      </div>
    </section>
  );
}
