import Link from "next/link";

const links = [
  { href: "/o-meni", label: "O meni" },
  { href: "/radi-sa-mnom", label: "Rad sa mnom" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Zorica Katić, početna">
        <span className="brand-mark">zk</span>
        <span className="brand-name">Zorica Katić<span>komunikacija · koučing</span></span>
      </Link>
      <nav aria-label="Glavna navigacija">
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        <Link className="nav-cta" href="/besplatni-video-trening-o-komunikaciji-u-odnosima">Besplatan trening <span>↗</span></Link>
      </nav>
    </header>
  );
}
