import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  rank?: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  rating: number;
  price: string;
  image?: string;
  badge?: string;
  affiliateUrl?: string;
}

export function ProductCard({
  rank,
  title,
  slug,
  category,
  excerpt,
  rating,
  price,
  image,
  badge,
  affiliateUrl,
}: ProductCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

  return (
    <article className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] hover:shadow-[0_0_40px_var(--accent-glow)]">
      {/* Rank badge */}
      {rank && (
        <div
          className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--bg-primary)]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          #{rank}
        </div>
      )}

      {/* Category + Badge */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          {category}
        </span>
        {badge && (
          <span className="rounded-full bg-[var(--accent)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--accent)]">
            {badge}
          </span>
        )}
      </div>

      {/* Product image */}
      <div className="mb-4 aspect-[4/3] w-full rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <div className="text-[var(--text-muted)] text-sm">Product Image</div>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold leading-snug text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
        <Link href={`/reviews/${slug}`} className="after:absolute after:inset-0">
          {title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="mb-4 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
        {excerpt}
      </p>

      {/* Rating + Price */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {stars.map((filled, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${filled ? "star-filled" : "star-empty"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-[var(--text-muted)]">
            {rating.toFixed(1)}
          </span>
        </div>
        <span className="text-base font-bold text-[var(--accent)]">{price}</span>
      </div>

      {/* CTA */}
      {affiliateUrl && (
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-4 flex w-full items-center justify-center rounded-xl bg-[var(--accent)] py-2.5 text-sm font-semibold text-[var(--bg-primary)] transition-all hover:brightness-110 relative z-10"
        >
          Check Price →
        </a>
      )}
    </article>
  );
}
