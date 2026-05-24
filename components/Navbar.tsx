"use client";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/#services", label: "Үйлчилгээ" },
  { href: "/#pricing", label: "Үнэ" },
  { href: "/about", label: "Бидний тухай" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50"
      style={{ background: "rgba(7,7,14,0.8)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem", height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.65rem" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" fill="white" opacity="0.9" />
              <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="white" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", letterSpacing: "-0.01em" }}>
            Mongol<span style={{ color: "#818cf8" }}>Agent</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className="nav-link px-4 py-2 rounded-lg text-sm font-medium">
              {l.label}
            </Link>
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
          style={{ color: "var(--text-mid)", background: "var(--surface)", border: "1px solid var(--border)" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="px-5 py-4 space-y-1">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="nav-link block px-3 py-2.5 rounded-lg text-sm font-medium">
              {l.label}
            </Link>
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
