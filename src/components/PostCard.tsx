import Link from "next/link";
import type { WpEntry } from "@/lib/content";
import { formatDate } from "@/lib/content";

export function PostCard({ post, index = 0 }: { post: WpEntry; index?: number }) {
  return (
    <article className={`post-card post-card-${index % 3}`}>
      <div className="card-art" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
      <div className="card-copy">
        <p className="eyebrow">{formatDate(post.date)}</p>
        <h3><Link href={`/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <Link className="text-link" href={`/${post.slug}`}>Pročitaj tekst <span>↗</span></Link>
      </div>
    </article>
  );
}
