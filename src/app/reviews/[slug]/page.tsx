import { compileMDX } from "next-mdx-remote/rsc";
import { getAllReviews, getContentBySlug } from "@/lib/content";
import { NewsletterForm } from "@/components/NewsletterForm";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllReviews()
    .filter((r) => !r.slug.startsWith("_"))
    .map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getContentBySlug("reviews", slug);
  if (!data) return {};
  const meta = data.meta;
  return {
    title: `${meta.title} — GeekedGear`,
    description: (meta.excerpt as string) || "",
  };
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="inline-flex items-center gap-0.5 text-[var(--accent)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5"
          fill={i < full ? "currentColor" : i === full && half ? "url(#half)" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
      <span className="ml-1.5 text-sm font-semibold text-[var(--text-primary)]">
        {rating}/5
      </span>
    </span>
  );
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getContentBySlug("reviews", slug);
  if (!data) notFound();

  const meta = data.meta;
  const { content } = await compileMDX({ source: data.content });

  const rating = (meta.rating as number) ?? 0;
  const price = (meta.price as string) ?? "";
  const badge = meta.badge as string | undefined;
  const category = (meta.category as string) ?? "";
  const date = (meta.date as string) ?? "";
  const affiliateUrl = (meta.affiliateUrl as string) ?? "#";
  const readTime =
    (meta.readTime as string) ??
    `${Math.ceil(data.content.split(/\s+/).length / 200)} min read`;

  return (
    <>
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Link
              href="/reviews"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] hover:underline"
            >
              ← Reviews
            </Link>
            <span className="text-[var(--text-muted)]">·</span>
            <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
              {category}
            </span>
          </div>

          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {meta.title as string}
          </h1>

          <p className="mt-3 text-base text-[var(--text-secondary)]">
            {meta.excerpt as string}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <StarRating rating={rating} />
            {badge && (
              <span className="rounded-full bg-[var(--accent)] px-3 py-0.5 text-xs font-bold text-black">
                {badge}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
            <span>{date}</span>
            <span>·</span>
            <span>{readTime}</span>
            <span>·</span>
            <span className="text-xl font-bold text-[var(--text-primary)]">
              {price}
            </span>
          </div>

          {affiliateUrl && affiliateUrl !== "#" && (
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105"
            >
              Check Price on Amazon →
            </a>
          )}
        </div>
      </section>

      {/* Article Body */}
      <article className="mx-auto max-w-3xl px-6 py-14">
        <div className="prose-custom">{content}</div>
      </article>

      {/* Bottom CTA */}
      {affiliateUrl && affiliateUrl !== "#" && (
        <section className="mx-auto max-w-3xl px-6 pb-10">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 text-center">
            <p
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Ready to buy?
            </p>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              {meta.title as string} — {price}
            </p>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-bold text-black transition-transform hover:scale-105"
            >
              Check Price on Amazon →
            </a>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <NewsletterForm />
      </section>
    </>
  );
}
