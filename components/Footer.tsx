import Link from "next/link";

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const MapPinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const colHead: React.CSSProperties = { fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.1rem" };

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 style={colHead}>{title}</h4>
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem", listStyle: "none", padding: 0, margin: 0 }}>
        {links.map((l) => (
          <li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "#fff" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "3.75rem 1.5rem 2rem" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr 1.4fr", gap: "2.5rem", marginBottom: "2.75rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/m_logo_white.svg" alt="Mongol Agent" width={34} height={34} style={{ display: "block", flexShrink: 0 }} />
              <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "#fff" }}>MongolAgent</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 250 }}>
              Монголын бизнесийг AI-аар хүчирхэгжүүл. Онлайн дэлгүүр, AI ажилтан — нэг платформоос.
            </p>
          </div>

          {/* Бүтээгдэхүүн */}
          <FooterCol title="Бүтээгдэхүүн" links={[
            { label: "AI Agent", href: "/ai" },
            { label: "Онлайн дэлгүүр", href: "/store" },
          ]} />

          {/* Компани */}
          <FooterCol title="Компани" links={[
            { label: "Бидний тухай", href: "/about" },
            { label: "FAQ", href: "/#faq" },
            { label: "Нэвтрэх", href: "https://app.mongolagent.mn" },
          ]} />

          {/* Холбоо барих */}
          <div>
            <h4 style={colHead}>Холбоо барих</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="tel:80952821" className="footer-link" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><PhoneIcon /> 80952821</Link></li>
              <li><Link href="mailto:info@mongolagent.mn" className="footer-link" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><MailIcon /> info@mongolagent.mn</Link></li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
                <MapPinIcon /><span>БЗД, 3-р хороо,<br />Энэрэлцогцолбор 24а, Улаанбаатар</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", paddingTop: "1.75rem", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>© {new Date().getFullYear()} Mongol Agent. Бүх эрх хуулиар хамгаалагдсан.</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", flexShrink: 0 }} /> Бүх систем хэвийн ажиллаж байна
          </span>
        </div>
      </div>
    </footer>
  );
}
