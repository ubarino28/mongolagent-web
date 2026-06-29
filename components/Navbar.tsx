"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const LINKS = [
  { href: "/ai", hash: null as string | null, label: "AI Agent" },
  { href: "/store", hash: null as string | null, label: "Онлайн дэлгүүр" },
  { href: "/#faq", hash: "#faq" as string | null, label: "FAQ" },
  { href: "/about", hash: null as string | null, label: "Бидний тухай" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Нүүрний бараан hero дээр (дээд талд) header тунгалаг; гүйлгэхэд цагаан болно
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const transparent = isHome && !scrolled && !open;

  const linkStyle: React.CSSProperties = { padding: "0.5rem 0.95rem", borderRadius: 8, fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" };

  function NavItem({ href, hash, label, style }: { href: string; hash: string | null; label: string; style?: React.CSSProperties }) {
    const s = { ...linkStyle, ...style };
    if (isHome && hash) return <a href={hash} className="nav-link" style={s} onClick={() => setOpen(false)}>{label}</a>;
    return <Link href={href} className="nav-link" style={s} onClick={() => setOpen(false)}>{label}</Link>;
  }

  return (
    <header className={transparent ? "site-nav nav-transparent" : "site-nav"} style={{ position: "sticky", top: 0, zIndex: 50, transition: "background .25s ease, border-color .25s ease", background: transparent ? "transparent" : "rgba(255,255,255,0.9)", backdropFilter: transparent ? "none" : "blur(14px)", WebkitBackdropFilter: transparent ? "none" : "blur(14px)", borderBottom: transparent ? "1px solid transparent" : "1px solid var(--border)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.55rem", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/m_logo.svg" alt="Mongol Agent" width={32} height={32} style={{ display: "block", flexShrink: 0 }} />
          <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--navy-dark)", letterSpacing: "-0.01em" }}>MongolAgent</span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ alignItems: "center", gap: "0.25rem" }}>
          {LINKS.map((l) => <NavItem key={l.href} {...l} />)}
        </nav>

        {/* Desktop actions */}
        <div className="nav-desktop" style={{ alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
          <Link href="/start?mode=login" className="nav-link" style={linkStyle}>Нэвтрэх</Link>
          <Link href="/start" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 1.25rem", borderRadius: "0.65rem", background: "var(--navy)", color: "#fff", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", whiteSpace: "nowrap" }}>Эхлэх →</Link>
        </div>

        {/* Mobile toggle */}
        <button className="nav-mobile-btn" onClick={() => setOpen((v) => !v)} aria-label="Цэс"
          style={{ alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-tint)", color: "var(--navy-dark)", cursor: "pointer", fontSize: "1.05rem", flexShrink: 0 }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu" style={{ borderTop: "1px solid var(--border)", background: "#fff", padding: "0.75rem 1.25rem 1.25rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
            {LINKS.map((l) => <NavItem key={l.href} {...l} style={{ display: "block", padding: "0.7rem 0.75rem" }} />)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "0.9rem" }}>
            <Link href="/start?mode=login" onClick={() => setOpen(false)} style={{ textAlign: "center", padding: "0.7rem", borderRadius: "0.65rem", border: "1px solid var(--border)", color: "var(--navy-dark)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Нэвтрэх</Link>
            <Link href="/start" onClick={() => setOpen(false)} style={{ textAlign: "center", padding: "0.7rem", borderRadius: "0.65rem", background: "var(--navy)", color: "#fff", textDecoration: "none", fontSize: "0.9rem", fontWeight: 700 }}>Эхлэх →</Link>
          </div>
        </div>
      )}
    </header>
  );
}
