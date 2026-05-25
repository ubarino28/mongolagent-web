import Link from "next/link";

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "3.5rem 1.25rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" fill="white" opacity="0.9" />
                  <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="white" />
                </svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)" }}>
                Mongol<span style={{ color: "#818cf8" }}>Agent</span>
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-light)", lineHeight: 1.7, maxWidth: 200 }}>
              Монголын бизнесийг AI-аар хүчирхэгжүүл. Premium, найдвартай, хурдан.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-mid)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Үйлчилгээ
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "AI Chatbot", href: "/#services" },
                { label: "AI Sales Agent", href: "/#services" },
                { label: "AI Lead Machine", href: "/#services" },
                { label: "AI Automation", href: "/#services" },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-mid)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Компани
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Бидний тухай", href: "/about" },
                { label: "Case Studies", href: "/#case-study" },
                { label: "Үнэ", href: "/#pricing" },
                { label: "FAQ", href: "/#faq" },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-mid)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Холбоо барих
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="tel:80952821" className="footer-link" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <PhoneIcon /> 80952821
                </Link>
              </li>
              <li>
                <Link href="mailto:info@mongolagent.mn" className="footer-link" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <MailIcon /> info@mongolagent.mn
                </Link>
              </li>
              <li style={{ fontSize: "0.83rem", color: "var(--text-light)", display: "flex", alignItems: "flex-start", gap: "0.4rem" }}>
                <MapPinIcon />
                <span>БЗД 3р хороо,<br />Энэрэлцогцолбор 24а,<br />Улаанбаатар</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text-light)" }}>
            © {new Date().getFullYear()} Mongol Agent. Бүх эрх хуулиар хамгаалагдсан.
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#10b981" }} />
            <span style={{ fontSize: "0.78rem", color: "var(--text-light)" }}>Бүх систем ажиллаж байна</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
