import Link from "next/link";

interface CategoryBadgeProps {
  name: string;
  href: string;
  icon: string;
  count: number;
}

export function CategoryBadge({ name, href, icon, count }: CategoryBadgeProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] px-6 py-5 transition-all hover:border-[var(--accent)]/30 hover:bg-[var(--bg-card-hover)] hover:shadow-[0_0_30px_var(--accent-glow)]"
    >
      <span className="text-3xl">{icon}</span>
      <div>
        <h3
          className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {name}
        </h3>
        <p className="text-xs text-[var(--text-muted)]">{count} reviews</p>
      </div>
      <svg
        className="ml-auto h-5 w-5 text-[var(--text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
