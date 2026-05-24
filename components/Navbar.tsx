"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Нүүр" },
  { href: "/services", label: "Үйлчилгээ" },
  { href: "/pricing", label: "Үнэ" },
  { href: "/about", label: "Бидний тухай" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="gradient-text">Mongol</span>
          <span style={{ color: "var(--text-mid)" }}>Agent</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "text-white" : "hover:text-white"
              }`}
              style={{ color: pathname === l.href ? "var(--text)" : "var(--text-light)" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="https://app.mongolagent.mn/login" className="btn-outline text-sm py-2 px-4">
            Нэвтрэх
          </Link>
          <Link href="https://app.mongolagent.mn/register" className="btn-primary text-sm py-2 px-5">
            Эхлэх →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg" style={{ color: "var(--text-mid)" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden border-t overflow-hidden transition-all duration-200 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="px-5 py-4 space-y-1">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-white"
              style={{ color: pathname === l.href ? "var(--text)" : "var(--text-mid)" }}>
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/pricing" className="btn-primary text-sm w-full justify-center" onClick={() => setOpen(false)}>
              Consultation авах
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
