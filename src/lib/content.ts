import source from "../../src/data/wordpress.json";
import blogMedia from "../data/blog-media-map.json";
import blogCovers from "../data/blog-cover-map.json";

export type WpEntry = {
  title: string;
  slug: string;
  type: "page" | "post";
  date: string;
  excerpt: string;
  content: string;
  categories: string[];
  image: string;
};

const entries = source as WpEntry[];
const blogMediaMap = blogMedia as Record<string, string>;
const blogCoverMap = blogCovers as Record<string, { src: string; width: number; height: number }>;
const unavailableBlogImages = new Set([
  "https://zoricakatic.com/wp-content/uploads/2021/02/Flex-prva-fotka-1024x576.jpg",
]);
const blogMediaByPath = new Map(
  Object.entries(blogMediaMap).map(([url, localPath]) => [new URL(url).pathname, localPath]),
);

function localizeImageUrl(url: string) {
  if (!url) return url;
  if (blogMediaMap[url]) return blogMediaMap[url];
  try {
    return blogMediaByPath.get(new URL(url, "https://zoricakatic.com").pathname) ?? url;
  } catch {
    return url;
  }
}

function localizeWordPressImages(html: string) {
  return html.replace(/<img\b[^>]*>/gi, (imageTag) => {
    const sourceUrl = imageTag.match(/\bsrc=(["'])([^"']+)\1/i)?.[2];
    if (sourceUrl && unavailableBlogImages.has(sourceUrl)) return "";
    return imageTag.replace(/\bsrc=(["'])([^"']+)\1/i, (_match, quote: string, url: string) =>
      `src=${quote}${localizeImageUrl(url)}${quote}`,
    );
  });
}

export const posts = entries
  .filter((entry) => entry.type === "post")
  .map((post) => ({
    ...post,
    image: localizeImageUrl(post.image),
    content: localizeWordPressImages(post.content),
  }))
  .sort((a, b) => b.date.localeCompare(a.date));
export const pages = entries.filter((entry) => entry.type === "page");

export function getPostImage(post: WpEntry) {
  const originalBlogCover = blogCoverMap[post.slug];
  if (originalBlogCover) return originalBlogCover.src;
  if (post.image.startsWith("/images/")) return post.image;
  const localContentImage = post.content.match(/<img\b[^>]*\bsrc=["'](\/images\/[^"']+)["']/i)?.[1];
  return localContentImage ?? post.image;
}

export function getPostImageDimensions(post: WpEntry) {
  const cover = blogCoverMap[post.slug];
  return cover ? { width: cover.width, height: cover.height } : undefined;
}

export function getPage(slug: string) {
  return pages.find((page) => page.slug === slug);
}

type WordPressPost = {
  slug: string;
  date: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  categories?: number[];
  _embedded?: {
    "wp:term"?: Array<Array<{ name?: string }>>;
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
  };
};

function stripTags(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function fromWordPress(post: WordPressPost): WpEntry {
  const content = post.content?.rendered ?? "";
  const excerpt = stripTags(post.excerpt?.rendered ?? "");
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
    ?? content.match(/<img[^>]+src=["']([^"']+)/i)?.[1]
    ?? "";
  const categories = (post._embedded?.["wp:term"] ?? []).flatMap((group) => group.map((term) => term.name ?? ""));
  return {
    type: "post",
    slug: post.slug,
    date: post.date,
    title: stripTags(post.title?.rendered ?? ""),
    excerpt,
    content: localizeWordPressImages(content),
    image: localizeImageUrl(image),
    categories,
  };
}

function wordpressUrl(path: string) {
  const base = (process.env.WORDPRESS_URL || "https://zoricakatic.com").replace(/\/$/, "");
  return `${base}/wp-json/wp/v2/${path}`;
}

export async function getPublishedPosts(): Promise<WpEntry[]> {
  try {
    const response = await fetch(wordpressUrl("posts?per_page=100&_embed=1"), { next: { revalidate: 60 } });
    if (!response.ok) throw new Error(`WordPress returned ${response.status}`);
    const data = await response.json() as WordPressPost[];
    return data.map(fromWordPress).sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return posts;
  }
}

export async function getPost(slug: string): Promise<WpEntry | undefined> {
  try {
    const response = await fetch(wordpressUrl(`posts?slug=${encodeURIComponent(slug)}&_embed=1`), { next: { revalidate: 60 } });
    if (!response.ok) throw new Error(`WordPress returned ${response.status}`);
    const data = await response.json() as WordPressPost[];
    if (data[0]) return fromWordPress(data[0]);
  } catch {
    // The exported WordPress data keeps the site usable when its API is offline.
  }
  return posts.find((post) => post.slug === slug);
}

export function cleanWordPressHtml(html: string) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<form\b[^>]*>[\s\S]*?<\/form>/gi, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/\s(?:width|height|srcset|sizes|class|style)="[^"]*"/gi, "");
}

export function formatDate(date: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat("sr-Latn-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
