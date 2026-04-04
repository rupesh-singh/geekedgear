---
mode: agent
description: "Full weekend content workflow — research, write, optimize, and prep for publish"
tools:
  - create_file
  - read_file
  - fetch_webpage
  - grep_search
  - file_search
  - run_in_terminal
---

# Weekend Content Sprint — GeekedGear

Run the full weekly content pipeline. This produces 2-3 publish-ready articles.

## Step 1: Research (10 mins)

Run the **research-products** prompt first to get this week's product picks.

Or, if you already know what to write about, skip to Step 2.

## Step 2: Write Articles (30 mins)

For each product/topic:

1. Run the **write-article** prompt
2. Provide: product name, price, category, any Amazon URL
3. Review the generated MDX file
4. Replace all `PLACEHOLDER_AFFILIATE_LINK` with your actual Amazon affiliate links

### Quick Amazon Affiliate Link Guide:
1. Go to https://affiliate-program.amazon.in/
2. Search for the product
3. Click "Get Link" → "Short Link"
4. Paste the `https://amzn.to/XXXX` link into the MDX file

## Step 3: Update Product Cards on Site

After writing reviews, update the product listings on the site pages:

1. Read the current page file (e.g., `src/app/gaming/page.tsx`)
2. Replace or add products in the `PRODUCTS` array:
   ```typescript
   {
     title: "Product Name",
     price: "₹XX,XXX",
     rating: 4.5,
     badge: "Editor's Choice",
     description: "One-line hook",
     affiliateUrl: "https://amzn.to/XXXX",
     image: "https://m.media-amazon.com/images/I/XXXX.jpg",
   }
   ```
3. Keep max 6 products per page (remove lowest performers)

## Step 4: SEO Checklist

For each article, verify:
- [ ] Title under 60 characters with primary keyword
- [ ] Meta description (excerpt) under 160 chars
- [ ] H2s contain secondary keywords
- [ ] At least one comparison table
- [ ] At least one internal link to another GeekedGear page
- [ ] Image has descriptive alt text
- [ ] Price mentioned in first 100 words

## Step 5: Deploy

```bash
cd geekedgear
git add -A
git commit -m "content: add [article names] - week of [date]"
git push origin master
npx vercel --prod
```

## Weekly Schedule Suggestion

| Day | Task | Time |
|-----|------|------|
| Saturday AM | Research trending products | 15 min |
| Saturday PM | Write 2-3 articles with Copilot | 45 min |
| Sunday AM | Add affiliate links + review | 20 min |
| Sunday PM | Deploy + share on socials | 10 min |

## Social Media Templates

### Twitter/X
```
🎮 New on GeekedGear: [Title]

[One-line hook from the article]

Worth ₹[price]? Here's what [X] days of testing revealed 👇

[link]
```

### Reddit (r/IndianGaming, r/IndiaInvestments, r/india)
```
Title: [Product] Review — [X] Days Later (Honest Take)

Body: Hey everyone, I've been [using/testing] the [product] for [X] days.
Quick summary: [2 sentences]. Full review with comparison table: [link]
```

## Content Calendar Ideas

### Gaming
- Best gaming chairs under ₹20K
- Monitor comparison: 1080p vs 4K for gaming
- Budget mechanical keyboards
- Desk setup under ₹50K

### Tech / WFH
- Standing desk comparison
- Best monitors for developers
- Webcam + mic setup for meetings
- Cable management solutions

### Fitness
- Home gym equipment under ₹10K
- Resistance bands vs dumbbells
- Best fitness trackers for programmers
- Post-workout nutrition for desk workers
