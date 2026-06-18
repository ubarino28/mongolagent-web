"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/#pricing", hash: "#pricing", label: "Үнэ" },
  { href: "/#faq",     hash: "#faq",     label: "FAQ" },
  { href: "/about",    hash: null,        label: "Бидний тухай" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function NavLink({ href, hash, label, onClick, className, style }: {
    href: string; hash: string | null; label: string;
    onClick?: () => void; className?: string; style?: React.CSSProperties;
  }) {
    if (isHome && hash) {
      return (
        <a href={hash} onClick={onClick} className={className} style={style}>
          {label}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={className} style={style}>
        {label}
      </Link>
    );
  }

  return (
    <header className="sticky top-0 z-50"
      style={{ background: "rgba(255,255,255,0.94)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem", height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--accent)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" fill="white" opacity="0.7" />
              <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="white" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", letterSpacing: "-0.01em" }}>
            MongolAgent
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(l => (
            <NavLink key={l.href} {...l}
              className="nav-link px-4 py-2 rounded-lg text-sm font-medium" />
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://app.mongolagent.mn/login" className="nav-link"
            style={{ fontSize: "0.875rem", fontWeight: 500, padding: "0.45rem 1rem" }}>
            Нэвтрэх
          </Link>
          <Link href="https://app.mongolagent.mn/register" className="btn-primary"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
            Эхлэх →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--text-mid)", background: "var(--surface2)", border: "1px solid var(--border)" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
        <div className="px-5 py-4 space-y-1">
          {LINKS.map(l => (
            <NavLink key={l.href} {...l}
              onClick={() => setOpen(false)}
              className="nav-link block px-3 py-2.5 rounded-lg text-sm font-medium" />
          ))}
          <div className="pt-3 space-y-2">
            <Link href="https://app.mongolagent.mn/login" onClick={() => setOpen(false)}
              className="block text-center py-2.5 rounded-xl text-sm nav-link"
              style={{ border: "1px solid var(--border)" }}>
              Нэвтрэх
            </Link>
            <Link href="https://app.mongolagent.mn/register" className="btn-primary justify-center"
              onClick={() => setOpen(false)}
              style={{ display: "flex", width: "100%", fontSize: "0.9rem" }}>
              Үнэгүй demo авах →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
