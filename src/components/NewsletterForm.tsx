"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to ConvertKit/Buttondown API
    if (email.includes("@")) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
      {/* Accent glow */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[var(--accent)] opacity-[0.07] blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[var(--accent)] opacity-[0.05] blur-3xl" />

      <div className="relative px-8 py-12 text-center">
        <h2
          className="mb-2 text-2xl font-bold text-[var(--text-primary)]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Don&apos;t miss a deal
        </h2>
        <p className="mb-6 text-sm text-[var(--text-secondary)] max-w-md mx-auto">
          Weekly roundup of the best gear deals, new reviews, and exclusive
          discounts. No spam, unsubscribe anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder="your@email.com"
            required
            className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
          <button
            type="submit"
            className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--bg-primary)] transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="mt-3 text-sm text-[var(--success)]">
            You&apos;re in! Check your inbox. 🎉
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-[var(--danger)]">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  );
}
