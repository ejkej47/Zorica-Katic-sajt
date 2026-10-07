import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { OfferCard } from "@/components/OfferCard";
import { getPublishedPosts } from "@/lib/content";

export default async function Home() {
  const posts = await getPublishedPosts();
  const offers = [
    { category: "PROGRAM 1:1", title: "Personalizovani program", description: "Paket koučing sesija za izazove u odnosima i razvoj komunikacionih veština, prilagođen tvojoj situaciji.", href: "/personalizovani-program", image: "/images/personalized-program.jpg" },
    { category: "HUMAN DESIGN", title: "Tumačenje Human Design mape", description: "Upoznaj svoju mapu i istraži kako tvoje prirodne sklonosti oblikuju komunikaciju i odnose.", href: "/tumacenje-human-design-mape", image: "/images/human-design-certificate.jpg" },
    { category: "KONSULTACIJA", title: "Ponuda dve kafe", description: "Dva razgovora posvećena jednoj konkretnoj situaciji koja ti je trenutno važna.", href: "/ponuda-dve-kafe", image: "/images/two-coffees-card.jpg" },
    { category: "BESPLATNO", title: "Besplatni trening", description: "Video trening koji objašnjava elemente komunikacije i šta možeš da promeniš u svom pristupu.", href: "/besplatni-video-trening-o-komunikaciji-u-odnosima" },
    { category: "U PRIPREMI", title: "Komunikacija po dizajnu", description: "Nova ponuda koja povezuje Human Design i svakodnevnu komunikaciju.", href: "/komunikacija-po-dizajnu" },
    { category: "U PRIPREMI", title: "BAZA.KOM", description: "Nova baza znanja i inspiracije trenutno je u pripremi.", href: "/baza-kom" },
  ];
  return <main>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> KOMUNIKACIJA · ODNOSI · LIČNI RAST</p>
        <h1><em>Razumevanje</em> menja sve.</h1>
        <p className="hero-lede">Kada naučiš da čuješ sebe i druge, otvara se prostor za odnose kakve želiš da gradiš.</p>
        <div className="hero-actions"><Link className="button button-dark" href="/radi-sa-mnom">Upoznaj moj rad <span>↗</span></Link><Link className="button button-light" href="/o-meni">Ko sam ja</Link></div>
        <div className="hero-note"><span className="note-line" /> Personalizovan pristup, baš za tebe</div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo"><img src="https://zoricakatic.com/wp-content/uploads/2024/03/profilna-crimson-bojom.png" alt="Zorica Katić" /></div>
        <div className="hero-stamp"><span>sa više</span><strong>razumevanja</strong><span>do promene</span></div>
        <div className="hero-caption">Zorica Katić <span>kouč i edukatorka</span></div>
      </div>
    </section>

    <section className="intro-band"><p>Ne moraš sve da znaš odmah.</p><p>Dovoljno je da poželiš da razumeš <em>malo više.</em></p></section>

    <section className="offer-section section-wrap">
      <div className="section-heading"><div><p className="eyebrow">KAKO MOGU DA TI POMOGNEM</p><h2>Promena počinje razgovorom.</h2></div></div>
      <div className="offer-grid">
        {offers.map((offer, index) => <OfferCard key={offer.title} {...offer} index={index} />)}
      </div>
    </section>

    <section className="quote-band"><span className="quote-mark">“</span><blockquote>Čovek nije tvorevina okolnosti, već su okolnosti tvorevina čoveka.</blockquote><span className="quote-by">— Bendžamin Dizraeli</span></section>

    <section className="about-strip section-wrap"><div className="about-image"><img src="https://zoricakatic.com/wp-content/uploads/2024/01/2-682x1024.jpg" alt="Zorica Katić" /></div><div className="about-copy"><p className="eyebrow">DRAGO MI JE ŠTO SI OVDE</p><h2><em>Ja sam Zorica.</em><br />Hajde da razgovaramo.</h2><p>Verujem da komunikacija može da se nauči i da bolji odnosi počinju od načina na koji slušamo — sebe i druge. U radu povezujem koučing, NLP i iskustvo iz stvarnih životnih situacija.</p><Link className="text-link" href="/o-meni">Upoznaj me bolje <span>↗</span></Link></div></section>

    <section className="journal-section section-wrap"><div className="section-heading"><div><p className="eyebrow">BELEŠKE I INSPIRACIJA</p><h2><em>Iz mog</em> blog dnevnika.</h2></div><Link className="text-link" href="/blog">Sve objave <span>↗</span></Link></div><div className="post-grid">{posts.slice(0, 3).map((post, index) => <PostCard key={post.slug} post={post} index={index} />)}</div></section>

    <section className="closing-cta"><p className="eyebrow">MALI KORAK JE I DALJE KORAK</p><h2>Spremna da čuješ<br />šta ti je važno?</h2><Link href="/besplatni-video-trening-o-komunikaciji-u-odnosima" className="button button-dark">Započni besplatno <span>↗</span></Link></section>
  </main>;
}
