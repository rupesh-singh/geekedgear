"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Fitness", href: "/fitness" },
  { label: "Gaming", href: "/gaming" },
  { label: "Tech", href: "/tech" },
  { label: "Deals", href: "/deals" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)] transition-transform group-hover:rotate-6">
            <span className="text-lg font-extrabold text-[var(--bg-primary)] font-[var(--font-syne)]">
              G
            </span>
          </div>
          <span
            className="text-xl font-bold tracking-tight text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Geeked<span className="text-[var(--accent)]">Gear</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)] rounded-lg hover:bg-[var(--bg-card)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search + Newsletter CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/newsletter"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--bg-primary)] transition-all hover:brightness-110 hover:scale-[1.02]"
          >
            Get Deals →
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-4">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-card)] hover:text-[var(--accent)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              className="mt-2 rounded-lg bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-[var(--bg-primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Get Deals →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
