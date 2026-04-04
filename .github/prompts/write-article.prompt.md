---
mode: agent
description: "Draft an SEO-optimized product review or comparison article as MDX"
tools:
  - create_file
  - read_file
  - fetch_webpage
  - grep_search
---

# Write Article — GeekedGear

Write a product review or comparison article for GeekedGear.

## Before Writing

1. Ask: "What product(s) should I write about? Provide product name, price, and any notes."
2. If the user hasn't done research yet, suggest running the `research-products` prompt first.
3. Fetch the Amazon product page to get accurate specs, features, and review highlights.

## Article Types

### Type A: Product Review (~1,500 words)
Save to: `content/reviews/[brand]-[product]-review.mdx`

### Type B: Comparison/Roundup (~2,200 words)
Save to: `content/blog/best-[category]-india-2026.mdx`

## MDX Frontmatter (Required)

```yaml
---
title: "Article Title (under 60 chars, include keyword)"
date: "YYYY-MM-DD"
category: "Gaming" | "Tech" | "Fitness"
excerpt: "Meta description under 160 chars with keyword + hook"
rating: 4.5
price: "₹XX,XXX"
badge: "Editor's Choice" | "Best Seller" | "Best Value" | "Top Deal"
affiliateUrl: "PLACEHOLDER_AFFILIATE_LINK"
image: "https://m.media-amazon.com/images/I/XXXX.jpg"
tags: ["tag1", "tag2", "tag3"]
---
```

## Writing Style

- **Tone:** Casual, opinionated, first-person. You're a software engineer who actually uses this stuff.
- **Audience:** Indian buyers — WFH professionals, gamers, developers, fitness enthusiasts
- **Prices:** Always ₹ INR. Mention MRP vs sale price when relevant.
- **Paragraphs:** 2-3 sentences max. Scannable.
- **Affiliate links:** Use `PLACEHOLDER_AFFILIATE_LINK` everywhere — user replaces later.
- **Honesty:** Real cons. If a product sucks at something, say it. This builds trust and SEO authority.
- **Comparisons:** Always mention 1-2 alternatives ("If you want X instead, look at Y").
- **India-specific:** Mention delivery experience, warranty support in India, plug types, voltage if relevant.

## Review Structure

```markdown
## The Quick Verdict
(50 words. Star rating. One-line recommendation.)

## Who This Is For
- Bullet 1
- Bullet 2
- Bullet 3

## Who Should Skip This
- Bullet 1
- Bullet 2

## Unboxing & First Impressions
(What's in the box, build quality feel, initial setup)

## Design & Build Quality
(Materials, aesthetics, dimensions, weight)

## Key Features Tested
### [Feature 1 — most important]
### [Feature 2]
### [Feature 3]

## After [X] Days of Use
(Long-term impressions, durability notes, any issues that surfaced)

## [Product] vs [Competitor 1] vs [Competitor 2]
(Quick comparison table + 2-3 sentences per competitor)

| Feature | This Product | Competitor 1 | Competitor 2 |
|---------|-------------|-------------|-------------|

## Pros & Cons

**What I liked:**
- ✅ Pro 1
- ✅ Pro 2
- ✅ Pro 3

**What could be better:**
- ❌ Con 1
- ❌ Con 2

## Is It Worth ₹[Price]?
(Final value assessment. Be direct.)

## Final Rating: X.X/5
(One-line summary)
```

## After Writing

1. Create the MDX file in the correct directory
2. Run SEO check: verify title length, excerpt length, keyword placement
3. List all `PLACEHOLDER_AFFILIATE_LINK` instances for the user to replace
4. Suggest 2 internal links to other articles on the site
