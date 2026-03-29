import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ArticleMeta {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

export interface ProductMeta {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  rating: number;
  price: string;
  badge?: string;
  affiliateUrl: string;
  tags: string[];
  readTime: string;
}

function getFilesFromDir(dir: string): string[] {
  const fullPath = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => path.join(fullPath, f));
}

export function getAllArticles(): ArticleMeta[] {
  const files = getFilesFromDir("blog");
  return files
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const slug = path.basename(filePath, ".mdx");
      return {
        title: data.title ?? slug,
        slug,
        date: data.date ?? "",
        category: data.category ?? "General",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        readTime: readingTime(content).text,
      } satisfies ArticleMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllReviews(): ProductMeta[] {
  const files = getFilesFromDir("reviews");
  return files
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const slug = path.basename(filePath, ".mdx");
      return {
        title: data.title ?? slug,
        slug,
        date: data.date ?? "",
        category: data.category ?? "General",
        excerpt: data.excerpt ?? "",
        rating: data.rating ?? 0,
        price: data.price ?? "",
        badge: data.badge,
        affiliateUrl: data.affiliateUrl ?? "#",
        tags: data.tags ?? [],
        readTime: readingTime(content).text,
      } satisfies ProductMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getContentBySlug(
  dir: string,
  slug: string
): { meta: Record<string, unknown>; content: string } | null {
  const filePath = path.join(CONTENT_DIR, dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: data, content };
}
