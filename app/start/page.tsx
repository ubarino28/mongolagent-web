import Link from "next/link";

/* Үйлчилгээ сонгох дэлгэц — Эхлэх / Нэвтрэх дарахад гарч,
   AI Agent (app.mongolagent.mn) эсвэл Онлайн дэлгүүр (website.mongolagent.mn) руу чиглүүлнэ. */

const ChatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
const StoreIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default async function StartPage({ searchParams }: { searchParams: Promise<{ mode?: string }> }) {
  const sp = await searchParams;
  const login = sp?.mode === "login";
  const suffix = login ? "/login" : "/register";
  const verb = login ? "Нэвтрэх" : "Эхлэх";

  const cards = [
    {
      href: `https://app.mongolagent.mn${suffix}`,
      icon: <ChatIcon />,
      tag: "Чатбот · Facebook · Instagram",
      title: "AI Agent",
      desc: "AI ажилтан Facebook, Instagram чатаар хэрэглэгчтэй харилцаж, бараа санал болгож, захиалга авна.",
    },
    {
      href: `https://website.mongolagent.mn${suffix}`,
      icon: <StoreIcon />,
      tag: "Цахим худалдаа · QPay",
      title: "Онлайн дэлгүүр",
      desc: "Кодгүйгээр өөрийн цахим дэлгүүрээ нээж, бараагаа байршуулан QPay-аар төлбөр аван зарна.",
    },
  ];

  return (
    <main style={{ minHeight: "calc(100vh - 4rem)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 1.5rem", textAlign: "center" }}>
      <div style={{ width: "100%", maxWidth: "56rem" }}>
        <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--navy)", marginBottom: "0.9rem" }}>
          {login ? "Нэвтрэх" : "Эхлэх"}
        </div>
        <h1 style={{ fontSize: "clamp(1.9rem, 4vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: "0.85rem", color: "var(--navy-dark)" }}>
          Та аль үйлчилгээгээр {login ? "нэвтрэх" : "эхлэх"} вэ?
        </h1>
        <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.6, maxWidth: "30rem", margin: "0 auto 2.75rem" }}>
          Хоёр үйлчилгээний аль нэгийг сонгоно уу. Дараа нь нөгөөг нь мөн нэмж болно.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.25rem" }} className="start-cards">
          {cards.map((c) => (
            <a key={c.title} href={c.href} className="start-card" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", background: "var(--bg-white)", border: "1px solid var(--border)", borderRadius: "1.5rem", padding: "2rem 2rem 1.75rem", textDecoration: "none", boxShadow: "0 6px 24px rgba(20,58,107,0.06)", transition: "transform .18s, box-shadow .18s, border-color .18s" }}>
              <span style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(150deg, #2d2733, #1b1720)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>{c.icon}</span>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "0.5rem" }}>{c.tag}</div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--navy-dark)", marginBottom: "0.55rem" }}>{c.title}</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", lineHeight: 1.65, marginBottom: "1.5rem" }}>{c.desc}</p>
              <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "0.45rem", background: "var(--navy)", color: "#fff", fontSize: "0.92rem", fontWeight: 700, padding: "0.8rem 1.6rem", borderRadius: "980px" }}>{verb} →</span>
            </a>
          ))}
        </div>

        <Link href="/" style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-mid)", textDecoration: "none" }}>← Нүүр хуудас руу буцах</Link>
      </div>
    </main>
  );
}
