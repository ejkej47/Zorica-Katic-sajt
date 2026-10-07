import { PostCard } from "@/components/PostCard";
import { getPublishedPosts } from "@/lib/content";

export const metadata = { title: "Blog — Zorica Katić" };

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return <main className="content-page"><section className="page-hero"><p className="eyebrow">BELEŠKE O KOMUNIKACIJI I ODNOSIMA</p><h1>Misli za <em>putem.</em></h1><p>Priče, alati i pitanja koja mogu da otvore drugačiji pogled na odnose i svakodnevnu komunikaciju.</p></section><section className="section-wrap blog-list"><div className="post-grid">{posts.map((post, index) => <PostCard key={post.slug} post={post} index={index} />)}</div></section></main>;
}
