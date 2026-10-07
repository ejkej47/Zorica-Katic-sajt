import Link from "next/link";
import { cleanWordPressHtml, formatDate, type WpEntry } from "@/lib/content";

export function BlogArticle({ post }: { post: WpEntry }) {
  return <main className="article-page"><Link href="/blog" className="back-link">← Sve objave</Link><article><header className="article-header"><p className="eyebrow">{formatDate(post.date)}{post.categories[0] ? ` · ${post.categories[0]}` : ""}</p><h1>{post.title}</h1><p>{post.excerpt}</p></header><div className="article-content" dangerouslySetInnerHTML={{ __html: cleanWordPressHtml(post.content) }} /><footer className="article-footer"><p>Hvala ti što čitaš.</p><Link href="/blog" className="text-link">Još tekstova <span>↗</span></Link></footer></article></main>;
}
