import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zorica Katić — komunikacija koja menja odnose",
  description: "Koučing i alati za jasniju komunikaciju, bolje odnose i više razumevanja.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sr"><body><div className="site-shell"><SiteHeader />{children}<footer className="site-footer"><Link className="footer-brand" href="/">Zorica Katić</Link><span>Razgovor je početak svake promene.</span><span>© {new Date().getFullYear()} Zorica Katić</span></footer></div></body></html>;
}
