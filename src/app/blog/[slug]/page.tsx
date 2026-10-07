import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/content";
import { BlogArticle } from "@/components/BlogArticle";

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const post = await getPost(slug);
  return { title: post ? `${post.title} — Zorica Katić` : "Objava nije pronađena" };
}
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = await getPost(slug); if (!post) notFound();
  return <BlogArticle post={post} />;
}
