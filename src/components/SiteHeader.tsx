"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/o-meni", label: "O meni" },
  { href: "/radi-sa-mnom", label: "Rad sa mnom" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Zorica Katić, početna">
        <img className="brand-logo" src="/logo-zorica.png" alt="Zorica Katić" />
      </Link>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span /><span /><span />
      </button>
      <nav id="main-navigation" className={menuOpen ? "is-open" : ""} aria-label="Glavna navigacija">
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        <Link className="nav-cta" href="/besplatni-video-trening-o-komunikaciji-u-odnosima">Besplatan trening <span>↗</span></Link>
      </nav>
    </header>
  );
}
