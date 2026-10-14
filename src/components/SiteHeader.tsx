"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menus = [
  {
    label: "Besplatno",
    links: [
      { href: "/besplatni-video-trening-o-komunikaciji-u-odnosima", label: "Besplatni trening" },
      { href: "/besplatno-info-vece", label: "Besplatno info veče o HD" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    label: "Ponuda",
    links: [
      { href: "/personalizovani-program", label: "Personalizovani program" },
      { href: "/ponuda-dve-kafe", label: "Ponuda dve kafe" },
      { href: "/tumacenje-human-design-mape", label: "Tumačenje HD" },
      { href: "/uskoro-2", label: "Venerina sekvenca" },
      { href: "/kreiraj-komunikaciju", label: "Kreiraj svoju komunikaciju – u pripremi" },
      { href: "/baza-kom", label: "Mapiraj svoju komunikaciju – u pripremi" },
    ],
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Zorica Katić, početna">
        <img className="brand-logo" src="/logo-zorica.png" alt="Zorica Katić" />
      </Link>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span /><span /><span />
      </button>
      <nav id="main-navigation" className={menuOpen ? "is-open" : ""} aria-label="Glavna navigacija">
        <Link className="nav-top-link" href="/o-meni">O meni</Link>
        {menus.map((menu) => (
          <div
            className={`nav-dropdown${openDropdown === menu.label ? " is-open" : ""}`}
            key={menu.label}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setOpenDropdown(menu.label);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") setOpenDropdown(null);
            }}
            onFocus={(event) => {
              if (event.currentTarget.matches(":focus-visible")) setOpenDropdown(menu.label);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenDropdown(null);
            }}
          >
            <button
              className="nav-dropdown-trigger"
              type="button"
              aria-haspopup="true"
              aria-expanded={openDropdown === menu.label}
              onClick={() => {
                if (window.matchMedia("(max-width: 700px)").matches) {
                  setOpenDropdown((open) => open === menu.label ? null : menu.label);
                }
              }}
            >
              {menu.label}
            </button>
            <div className="nav-dropdown-menu" aria-hidden={openDropdown !== menu.label}>
              {menu.links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
}
