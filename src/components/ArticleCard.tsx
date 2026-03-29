import Link from "next/link";

interface ArticleCardProps {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export function ArticleCard({
  title,
  slug,
  category,
  excerpt,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <article className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]">
      {/* Category pill */}
      <span className="mb-3 inline-block rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
        {category}
      </span>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold leading-snug text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
        <Link href={`/blog/${slug}`} className="after:absolute after:inset-0">
          {title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="mb-4 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
        {excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
        <time>{date}</time>
        <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
        <span>{readTime}</span>
      </div>
    </article>
  );
}
