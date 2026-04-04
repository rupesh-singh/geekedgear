---
mode: agent
description: "Quick research: find top 10 trending products in a niche from Amazon.in"
tools:
  - fetch_webpage
---

# Product Research — Amazon.in

Find the **top 10 products** in the niche the user specifies.

## Instructions

1. Ask: "What category? (e.g., gaming chairs, 4K monitors, standing desks, mechanical keyboards, webcams, ring lights, whey protein)"

2. Fetch the relevant Amazon.in page:
   - Bestsellers: `https://www.amazon.in/gp/bestsellers/[category-node]`
   - Or search: `https://www.amazon.in/s?k=[query]&sort=review-rank`

3. For each product extract:
   - **Name** (shortened, brand + model)
   - **Price** (₹ sale price)
   - **MRP** (₹ original price, if on sale)
   - **Discount %**
   - **Rating** (X.X out of 5)
   - **Review count**
   - **Key features** (3 bullets max)
   - **ASIN** (from URL: /dp/XXXXXXXXXX/)
   - **Image URL** (from `m.media-amazon.com`)

4. Present as a ranked table:

| # | Product | Price | MRP | Off | Rating | Reviews | ASIN |
|---|---------|-------|-----|-----|--------|---------|------|

5. Recommend:
   - **2 products** for standalone review articles (high demand + good commission)
   - **3 products** for a comparison/roundup article
   - Explain WHY each was selected (search volume signals, review count, discount appeal)

6. For each recommended product, also suggest:
   - Target keyword (e.g., "green soul monster review india")
   - Article angle (e.g., "Is it worth ₹19K? 6-month honest review")
   - Competitor products to compare against
