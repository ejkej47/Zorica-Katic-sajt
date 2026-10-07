import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getPublishedPosts } from "@/lib/content";

export default async function Home() {
  const posts = await getPublishedPosts();
  const offers = [
    { category: "PROGRAM 1:1", title: "Personalizovani program", description: "Individualni rad na izazovima u komunikaciji i odnosima.", href: "/personalizovani-program", icon: "↗" },
    { category: "HUMAN DESIGN", title: "Tumačenje Human Design mape", description: "Upoznaj bolje svoju mapu i energetski potencijal.", href: "/tumacenje-human-design-mape", icon: "✧" },
    { category: "KONSULTACIJA", title: "Ponuda dve kafe", description: "Dva razgovora za konkretnu situaciju koja ti je važna.", href: "/ponuda-dve-kafe", icon: "↗" },
    { category: "BESPLATNO", title: "Besplatni trening", description: "Snimljeni video trening o elementima komunikacije.", href: "/besplatni-video-trening-o-komunikaciji-u-odnosima", icon: "↘" },
    { category: "U PRIPREMI", title: "Komunikacija po dizajnu", description: "Nova ponuda je u pripremi.", href: "/uskoro-2", icon: "✧" },
    { category: "U PRIPREMI", title: "BAZA.KOM", description: "Nova ponuda je u pripremi.", href: "/uskoro-2", icon: "↗" },
  ];
  return <main>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> KOMUNIKACIJA · ODNOSI · LIČNI RAST</p>
        <h1>Razumevanje menja <em>sve.</em></h1>
        <p className="hero-lede">Kada naučiš da čuješ sebe i druge, otvara se prostor za odnose kakve želiš da gradiš.</p>
        <div className="hero-actions"><Link className="button button-dark" href="/radi-sa-mnom">Upoznaj moj rad <span>↗</span></Link><Link className="button button-light" href="/o-meni">Ko sam ja</Link></div>
        <div className="hero-note"><span className="note-line" /> Personalizovan pristup, baš za tebe</div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo"><img src="https://zoricakatic.com/wp-content/uploads/2024/03/profilna-crimson-bojom.png" alt="Zorica Katić" /></div>
        <div className="hero-stamp"><span>sa više</span><strong>razumevanja</strong><span>do promene</span></div>
        <span className="hero-flower flower-one">✳</span><span className="hero-flower flower-two">✳</span>
        <div className="hero-caption">Zorica Katić <span>kouč i edukatorka</span></div>
      </div>
    </section>

    <section className="intro-band"><p>Ne moraš sve da znaš odmah.</p><p><span className="intro-star">✳</span> Dovoljno je da poželiš da razumeš <em>malo više.</em></p></section>

    <section className="offer-section section-wrap">
      <div className="section-heading"><div><p className="eyebrow">KAKO MOGU DA TI POMOGNEM</p><h2>Promena počinje <em>razgovorom.</em></h2></div></div>
      <div className="offer-grid">
        {offers.map((offer, index) => <Link key={offer.title} href={offer.href} className={`offer-card offer-card-${index % 3}`}><span className="offer-index">{offer.category}</span><span className="offer-icon">{offer.icon}</span><h3>{offer.title}</h3><p>{offer.description}</p><span className="offer-link">Saznaj više <b>↗</b></span></Link>)}
      </div>
    </section>

    <section className="quote-band"><span className="quote-mark">“</span><blockquote>Čovek nije tvorevina okolnosti, već su okolnosti tvorevina čoveka.</blockquote><span className="quote-by">— Bendžamin Dizraeli</span><span className="quote-flower">✳</span></section>

    <section className="about-strip section-wrap"><div className="about-image"><img src="https://zoricakatic.com/wp-content/uploads/2024/01/2-682x1024.jpg" alt="Zorica Katić" /></div><div className="about-copy"><p className="eyebrow">DRAGO MI JE ŠTO SI OVDE</p><h2>Ja sam Zorica.<br /><em>Hajde da razgovaramo.</em></h2><p>Verujem da komunikacija može da se nauči i da bolji odnosi počinju od načina na koji slušamo — sebe i druge. U radu povezujem koučing, NLP i iskustvo iz stvarnih životnih situacija.</p><Link className="text-link" href="/o-meni">Upoznaj me bolje <span>↗</span></Link></div></section>

    <section className="journal-section section-wrap"><div className="section-heading"><div><p className="eyebrow">BELEŠKE I INSPIRACIJA</p><h2>Iz mog <em>blog dnevnika.</em></h2></div><Link className="text-link" href="/blog">Sve objave <span>↗</span></Link></div><div className="post-grid">{posts.slice(0, 3).map((post, index) => <PostCard key={post.slug} post={post} index={index} />)}</div></section>

    <section className="closing-cta"><p className="eyebrow">MALI KORAK JE I DALJE KORAK</p><h2>Spremna da čuješ<br /><em>šta ti je važno?</em></h2><Link href="/besplatni-video-trening-o-komunikaciji-u-odnosima" className="button button-dark">Započni besplatno <span>↗</span></Link><span className="closing-star">✳</span></section>
  </main>;
}
