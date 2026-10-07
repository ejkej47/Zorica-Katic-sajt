import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cleanWordPressHtml, getPage, getPost, pages, posts } from "@/lib/content";
import { BlogArticle } from "@/components/BlogArticle";

export function generateStaticParams() { return [...pages, ...posts].map((entry) => ({ slug: entry.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const entry = getPage(slug) ?? await getPost(slug);
  return { title: entry ? `${entry.title} — Zorica Katić` : "Stranica nije pronađena" };
}
export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = await getPost(slug); if (post) return <BlogArticle post={post} />;
  const page = getPage(slug); if (!page || ["sample-page", "radi-sa-mnom-podaci", "bvt-podaci", "podaci-za-info-vece", "podaci-za-kk"].includes(slug)) notFound();
  const html = cleanWordPressHtml(page.content);
  return <main className="content-page"><section className="page-hero"><p className="eyebrow">ZORICA KATIĆ · KOMUNIKACIJA I KOUČING</p><h1>{page.title}<em>.</em></h1></section><article className="imported-content" dangerouslySetInnerHTML={{ __html: html }} />{slug.includes("trening") && <div className="signup-card"><p className="eyebrow">BESPLATAN VIDEO TRENING</p><h2>Počni od jednog malog uvida.</h2><p>Forma za prijavu biće povezana u narednom koraku.</p><Link className="button button-dark" href="mailto:info@zoricakatic.com">Zatraži trening <span>↗</span></Link></div>}</main>;
}
