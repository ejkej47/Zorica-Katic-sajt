import Link from "next/link";
import type { WpEntry } from "@/lib/content";
import { formatDate, getPostImage, getPostImageDimensions } from "@/lib/content";

export function PostCard({ post, index = 0 }: { post: WpEntry; index?: number }) {
  const image = getPostImage(post);
  const imageDimensions = getPostImageDimensions(post);
  return (
    <Link className={`post-card post-card-link post-card-${index % 3}`} href={`/${post.slug}`} aria-label={post.title}>
      {image ? <div className="card-art card-art-photo"><img src={image} alt="" {...imageDimensions} loading="lazy" decoding="async" /></div> : <div className="card-art" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>}
      <div className="card-copy">
        <p className="eyebrow">{formatDate(post.date)}</p>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="text-link">Pročitaj tekst <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}