import Link from "next/link";

const FOOTER_LINKS = {
  Categories: [
    { label: "Fitness Gear", href: "/fitness" },
    { label: "Gaming Setups", href: "/gaming" },
    { label: "Tech & Gadgets", href: "/tech" },
    { label: "Today's Deals", href: "/deals" },
  ],
  Resources: [
    { label: "Buying Guides", href: "/guides" },
    { label: "Comparison Tools", href: "/compare" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "About GeekedGear", href: "/about" },
  ],
  Legal: [
    { label: "Affiliate Disclosure", href: "/disclosure" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]">
                <span className="text-base font-extrabold text-[var(--bg-primary)]">
                  G
                </span>
              </div>
              <span
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Geeked<span className="text-[var(--accent)]">Gear</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Honest, no-BS gear reviews from someone who actually uses this
              stuff. Fitness equipment, gaming setups, and tech — tested by a
              geek who lifts.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3
                className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} GeekedGear. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)] max-w-md text-center sm:text-right">
            <strong className="text-[var(--text-secondary)]">
              Affiliate Disclosure:
            </strong>{" "}
            Some links on this site are affiliate links. We may earn a
            commission if you make a purchase, at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
