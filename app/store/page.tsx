import Link from "next/link";
import type { ReactNode } from "react";

const DEMO_URL = "https://zagvar1.mongolagent.mn";

/* ─── Icons ─── */
const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

/* ─── Premium dark cards (ways to sell) ─── */
const CARD_BG = "linear-gradient(150deg, #16314F 0%, #0E2540 55%, #0A1B2E 100%)";

const FbG = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.4 18.6 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.5 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.6 23.04 24 18.07 24 12.07z"/></svg>);
const IgG = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="#E1306C"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>);
const MsgG = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="#0084FF"><path d="M12 0C5.37 0 0 4.97 0 11.11c0 3.5 1.74 6.62 4.47 8.66V24l4.09-2.25c1.09.3 2.25.47 3.44.47 6.63 0 12-4.97 12-11.11C24 4.97 18.63 0 12 0zm1.19 14.96l-3.06-3.26-5.97 3.26 6.56-6.97 3.13 3.26 5.9-3.26-6.59 6.97z"/></svg>);
const TtG = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="#111"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>);
const GlobeG = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#143A6B" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>);
const QpayG = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>);
const BagWhite = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>);

function LogoCircle({ children }: { children: ReactNode }) {
  return <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.35)" }}>{children}</div>;
}
const TRUNK = "rgba(255,255,255,0.18)";

function SellCard({ visual, title, desc }: { visual: ReactNode; title: string; desc: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", borderRadius: "1.5rem", overflow: "hidden", background: CARD_BG, border: "1px solid rgba(255,255,255,0.08)", minHeight: "470px" }}>
      <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "2.25rem 1.5rem 0.5rem", overflow: "hidden" }}>{visual}</div>
      <div style={{ padding: "1.25rem 1.75rem 2rem" }}>
        <h3 style={{ fontSize: "1.12rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>{title}</h3>
        <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "rgba(255,255,255,0.6)" }}>{desc}</p>
      </div>
    </div>
  );
}

// 1) Олон суваг — channel tree
const channelVisual = (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div style={{ width: 56, height: 56, borderRadius: 12, overflow: "hidden", background: "#16382E", boxShadow: "0 8px 22px rgba(0,0,0,0.45)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=120&q=80&auto=format&fit=crop" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
    <div style={{ width: 1, height: 20, background: TRUNK }} />
    <div style={{ width: 50, height: 50, borderRadius: 14, background: "linear-gradient(135deg,#2B5A8F,#143A6B)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 26px rgba(20,58,107,0.55)" }}><BagWhite /></div>
    <div style={{ width: 1, height: 16, background: TRUNK }} />
    <div style={{ position: "relative", width: "100%", maxWidth: 270, paddingTop: 13 }}>
      <div style={{ position: "absolute", top: 0, left: "14%", right: "14%", height: 1, background: TRUNK }} />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.7rem 0.85rem" }}>
        {[<FbG key="f" />, <IgG key="i" />, <MsgG key="m" />, <TtG key="t" />, <GlobeG key="g" />, <QpayG key="q" />].map((l, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 1, height: 13, background: TRUNK }} />
            <LogoCircle>{l}</LogoCircle>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 2) Гар утас — phone mockup
const phoneVisual = (
  <div style={{ width: 168, borderRadius: 24, border: "6px solid #0A1B2E", background: "#fff", overflow: "hidden", boxShadow: "0 20px 48px rgba(0,0,0,0.55)" }}>
    <div style={{ height: 28, background: "#143A6B", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 9.5, fontWeight: 800, letterSpacing: "0.05em" }}>МИНИЙ ДЭЛГҮҮР</div>
    <div style={{ padding: 8, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
      {[
        { img: "1576566588028-4147f3842f27", p: "189,000₮" },
        { img: "1521572163474-6864f9cf17ab", p: "129,000₮" },
        { img: "1542272604-787c3835535d", p: "99,000₮" },
        { img: "1620799140408-edc6dcb6d633", p: "159,000₮" },
      ].map((t, i) => (
        <div key={i} style={{ borderRadius: 7, overflow: "hidden", border: "1px solid #E4E8ED" }}>
          <div style={{ aspectRatio: "1/1", overflow: "hidden", background: "#EAF0F8" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://images.unsplash.com/photo-${t.img}?w=160&q=80&auto=format&fit=crop`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ padding: "3px 5px", fontSize: 8.5, fontWeight: 800, color: "#143A6B" }}>{t.p}</div>
        </div>
      ))}
    </div>
  </div>
);

// 3) QPay checkout card
const checkoutVisual = (
  <div style={{ width: "100%", maxWidth: 252, background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 48px rgba(0,0,0,0.55)" }}>
    <div style={{ padding: "0.7rem 0.9rem", borderBottom: "1px solid #E4E8ED", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontWeight: 800, color: "#143A6B", fontSize: 13 }}>Миний дэлгүүр</span>
      <span style={{ fontSize: 11, color: "#8A98A8" }}>🛍️</span>
    </div>
    <div style={{ padding: "0.85rem 0.9rem", fontSize: 11, color: "#1C2B3A", lineHeight: 1.5 }}>
      {[
        { k: "Хүлээн авагч", v: "Болд · 9911-2233" },
        { k: "Хаяг", v: "ХУД, 11-р хороо, УБ" },
        { k: "Хүргэлт", v: "Үнэгүй · 24 цагт" },
        { k: "Төлбөр", v: "QPay" },
      ].map((r) => (
        <div key={r.k} style={{ display: "flex", justifyContent: "space-between", gap: 8, padding: "3px 0" }}>
          <span style={{ color: "#8A98A8" }}>{r.k}</span>
          <span style={{ fontWeight: 600, textAlign: "right" }}>{r.v}</span>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #E4E8ED", marginTop: 6, paddingTop: 7, fontSize: 13, fontWeight: 800 }}>
        <span>Нийт</span><span style={{ color: "#143A6B" }}>125,000₮</span>
      </div>
      <div style={{ marginTop: 9, textAlign: "center", background: "#16a34a", color: "#fff", borderRadius: 8, padding: "7px 0", fontSize: 11.5, fontWeight: 700 }}>QPay-аар төлөх</div>
    </div>
  </div>
);

const FEATURES = [
  { icon: "🎨", title: "Drag-and-drop бүтээгч", desc: "Кодгүйгээр блок чирж буулган хуудсаа угсар. Hero, бараа, сэтгэгдэл, FAQ — бүгд бэлэн." },
  { icon: "💳", title: "QPay төлбөр", desc: "Хэрэглэгч дэлгүүр дотроос QPay-аар төлж, орлого шууд таны дансанд орно." },
  { icon: "🚚", title: "Хүргэлт & бүсчлэл", desc: "Хотын дотор, орон нутаг, очиж авах — хүргэлтийн төрөл, төлбөр, үнэгүй босгыг тохируул." },
  { icon: "🌐", title: "Өөрийн домэйн", desc: "slug.mongolagent.mn үнэгүй, эсвэл өөрийн .mn / .com домэйноо хэдхэн товшилтоор холбо." },
  { icon: "📦", title: "Бараа & захиалга", desc: "Бараа, хувилбар, нөөц, хямдрал, купон — захиалга, хэрэглэгчээ нэг dashboard-аас удирд." },
  { icon: "📊", title: "Аналитик & сэтгэгдэл", desc: "Орлого, шилдэг бараа, захиалгын төлөв, барааны үнэлгээ — бизнесээ тоогоор хар." },
];

const STEPS = [
  { num: "01", title: "Загвар сонго", desc: "Бэлэн дизайны загвараас сонгож, өнгө, лого, фонтоо брэндэдээ тааруул." },
  { num: "02", title: "Бараагаа оруул", desc: "Бараа, үнэ, зураг, ангиллаа нэм. Excel/CSV-ээр олон бараа нэг дор оруулж болно." },
  { num: "03", title: "Нийтэлж, зар", desc: "Домэйноо холбож дэлгүүрээ нийтэл. AI Agent-аар захиалга авч эхэл." },
];

const FAQS = [
  { q: "Программчлал мэдэх шаардлагатай юу?", a: "Үгүй. Бүх зүйл drag-and-drop. Хүссэн хэсгээ чирж байрлуулаад, текст, зургаа сольоход л болно." },
  { q: "Төлбөр хэрхэн авах вэ?", a: "QPay merchant мэдээллээ оруулснаар хэрэглэгчийн төлбөр шууд таны дансанд орно. Mongol Agent-аар дамжихгүй." },
  { q: "Өөрийн домэйн холбож болох уу?", a: "Тийм. Үнэгүй slug.mongolagent.mn хаягтай, эсвэл өөрийн .mn/.com домэйноо dashboard-аас худалдаж аван шууд холбоно." },
  { q: "AI чатботтой холбогддог уу?", a: "Тийм. Онлайн дэлгүүр + AI Agent хослоход хэрэглэгч чатаар захиалга өгөхөд дэлгүүрийн бараа, төлбөртэй бүрэн уялдана." },
];

const wrap = { maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap3 = { maxWidth: "48rem", margin: "0 auto", padding: "0 1.25rem" } as const;

export default function StorePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "5.5rem 0 6.5rem", background: "var(--hero-gradient)" }}>
        <div style={{ ...wrap, position: "relative" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "2.5rem", alignItems: "center" }}>
            <div>
              <div className="section-tag" style={{ marginBottom: "1.75rem", display: "inline-flex" }}>Цахим худалдаа</div>
              <h1 style={{ fontSize: "clamp(2.1rem, 4.3vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.035em", marginBottom: "1.5rem" }}>
                Онлайн дэлгүүрээ<br /><span className="gradient-text">хормын дотор нээ.</span>
              </h1>
              <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.8, maxWidth: "460px", marginBottom: "2.5rem" }}>
                Shopify шиг — кодгүйгээр өөрийн дэлгүүрээ угсар. Бараа, QPay төлбөр, хүргэлт, домэйн, аналитик бүгд нэг дор.
              </p>
              <div className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Дэлгүүрээ нээх
                </Link>
                <a href={DEMO_URL} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Жишээ дэлгүүр үзэх ↗
                </a>
              </div>
            </div>

            {/* Live demo — browser mockup with iframe */}
            <div className="hero-mascot" style={{ position: "relative" }}>
              <div style={{ borderRadius: "0.9rem", overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-white)", boxShadow: "0 20px 50px rgba(20,58,107,0.16)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 0.85rem", borderBottom: "1px solid var(--border)", background: "var(--bg-section)" }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4E8ED" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4E8ED" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4E8ED" }} />
                  <span style={{ marginLeft: "0.6rem", fontSize: "0.68rem", color: "var(--text-light)", background: "var(--bg-white)", border: "1px solid var(--border)", borderRadius: "6px", padding: "0.15rem 0.6rem" }}>zagvar1.mongolagent.mn</span>
                </div>
                <div style={{ height: "440px", overflow: "hidden", position: "relative" }}>
                  <iframe src={DEMO_URL} title="Жишээ дэлгүүр" loading="lazy"
                    style={{ width: "143%", height: "143%", border: "none", transform: "scale(0.7)", transformOrigin: "top left" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAYS TO SELL (premium dark cards) ────────────── */}
      <section data-animate style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Хаана ч зар</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Хэрэглэгч байгаа газар <span className="gradient-text">бүрт зар</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "460px", margin: "0 auto", fontSize: "0.92rem", lineHeight: 1.7 }}>
              Дэлгүүр, сошиал, чат, гар утас — нэг бараагаа хаана ч тавьж, QPay-аар хормын дотор төлүүл.
            </p>
          </div>

          <div className="sell-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
            <SellCard
              visual={channelVisual}
              title="Олон суваг дээр зар"
              desc={<>Бараагаа Facebook, Instagram, чат, өөрийн домэйн — хэрэглэгчийн хайж, гүйлгэж буй газар бүрт нэг дороос тавь.</>}
            />
            <SellCard
              visual={phoneVisual}
              title="Гар утсанд төгс"
              desc={<>Дэлгүүр чинь утсан дээр автоматаар төгс харагдана. Хэрэглэгч хаанаас ч хармагц шууд захиална.</>}
            />
            <SellCard
              visual={checkoutVisual}
              title="QPay-аар хормын дотор төл"
              desc={<>Хаяг, хүргэлт, төлбөр — бүгд нэг дэлгэцэнд. Хэрэглэгч QPay-аар төлж, орлого шууд таны дансанд орно.</>}
            />
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Бүх хэрэгсэл нэг дор</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Дэлгүүр эрхлэхэд <span className="gradient-text">хэрэгтэй бүхэн</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "460px", margin: "0 auto", fontSize: "0.92rem", lineHeight: 1.7 }}>
              Олон апп, нэмэлт хэрэгслийн оронд — нэг платформоос дэлгүүрээ бүрэн удирд.
            </p>
          </div>

          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
            {FEATURES.map(f => (
              <div key={f.title} className="card card-glow" style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "var(--bg-tint)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>{f.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", color: "var(--text)" }}>{f.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Хэрхэн эхлэх вэ?</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>3 алхамд дэлгүүр бэлэн</h2>
          </div>
          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
            {STEPS.map(s => (
              <div key={s.num} style={{ background: "var(--bg-white)", border: "1px solid var(--border)", borderRadius: "1.5rem", padding: "2rem 1.75rem" }}>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--navy)", background: "var(--bg-tint)", width: "40px", height: "40px", borderRadius: "11px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>{s.num}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.6rem", color: "var(--text)" }}>{s.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2.2rem" }}>
              Үнэгүй эхлэх <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap3}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Түгээмэл асуултууд</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderRadius: "1rem", padding: "1.5rem", background: "var(--bg-white)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "0.4rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", background: "var(--bg-tint)", color: "var(--navy)", fontSize: "0.65rem", fontWeight: 700 }}>Q</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.92rem", marginBottom: "0.4rem" }}>{f.q}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{f.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section data-animate style={{ padding: "5rem 0 6rem" }}>
        <div style={wrap3}>
          <div style={{ borderRadius: "1.5rem", overflow: "hidden", padding: "4rem 3rem", textAlign: "center", background: "var(--navy)", color: "white" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1.5rem", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}>Өнөөдөр эхэл</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem", color: "white" }}>
              Онлайн дэлгүүрээ<br />өнөөдөр нээ
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.97rem", lineHeight: 1.65, maxWidth: "440px", margin: "0 auto 2.5rem" }}>
              Кодгүй, хэдхэн минутад. Эхлэхэд төлбөргүй — бэлэн болоход л нийтэл.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="https://app.mongolagent.mn/register" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.95rem 2rem", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", borderRadius: "0.75rem", background: "white", color: "var(--navy)" }}>
                Дэлгүүрээ нээх →
              </Link>
              <Link href="tel:80952821" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.95rem 2rem", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", borderRadius: "0.75rem", background: "transparent", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)" }}>
                <IconPhone /> 80952821
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
