import Link from "next/link";
import type { ReactNode } from "react";
import StoreAutomate from "../../components/StoreAutomate";

const DEMO_URL = "https://zagvar1.mongolagent.mn";

/* ─── Icons ─── */
const IconCheck = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconBag = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

/* ─── Premium dark cards (ways to sell) ─── */
const CARD_BG = "linear-gradient(150deg, #2d2733 0%, #241f2a 55%, #1b1720 100%)";

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
  <div style={{ width: 168, borderRadius: 24, border: "6px solid #1b1720", background: "#fff", overflow: "hidden", boxShadow: "0 20px 48px rgba(0,0,0,0.55)" }}>
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
  { img: "1547658719-da2b51169166", title: "Drag-and-drop бүтээгч", desc: "Кодгүйгээр блок чирж буулган хуудсаа угсар. Hero, бараа, сэтгэгдэл, FAQ — бүгд бэлэн." },
  { img: "1556742111-a301076d9d18", title: "QPay төлбөр", desc: "Хэрэглэгч дэлгүүр дотроос QPay-аар төлж, орлого шууд таны дансанд орно." },
  { img: "1601584115197-04ecc0da31d7", title: "Хүргэлт & бүсчлэл", desc: "Хотын дотор, орон нутаг, очиж авах — хүргэлтийн төрөл, төлбөр, үнэгүй босгыг тохируул." },
  { img: "1558494949-ef010cbdcc31", title: "Өөрийн домэйн", desc: "slug.mongolagent.mn үнэгүй, эсвэл өөрийн .mn / .com домэйноо хэдхэн товшилтоор холбо." },
  { img: "1441986300917-64674bd600d8", title: "Бараа & захиалга", desc: "Бараа, хувилбар, нөөц, хямдрал, купон — захиалга, хэрэглэгчээ нэг dashboard-аас удирд." },
  { img: "1551288049-bebda4e38f71", title: "Аналитик & сэтгэгдэл", desc: "Орлого, шилдэг бараа, захиалгын төлөв, барааны үнэлгээ — бизнесээ тоогоор хар." },
];

const FAQS = [
  { q: "Программчлал мэдэх шаардлагатай юу?", a: "Үгүй. Бүх зүйл drag-and-drop. Хүссэн хэсгээ чирж байрлуулаад, текст, зургаа сольоход л болно." },
  { q: "Төлбөр хэрхэн авах вэ?", a: "QPay merchant мэдээллээ оруулснаар хэрэглэгчийн төлбөр шууд таны дансанд орно. Mongol Agent-аар дамжихгүй." },
  { q: "Өөрийн домэйн холбож болох уу?", a: "Тийм. Үнэгүй slug.mongolagent.mn хаягтай, эсвэл өөрийн .mn/.com домэйноо dashboard-аас худалдаж аван шууд холбоно." },
  { q: "AI чатботтой холбогддог уу?", a: "Тийм. Онлайн дэлгүүр + AI Agent хослоход хэрэглэгч чатаар захиалга өгөхөд дэлгүүрийн бараа, төлбөртэй бүрэн уялдана." },
];

const av = (d: ReactNode) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;
const ADVANTAGES = [
  { ic: av(<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />), title: "Хурдан нээ", desc: <>Кодгүйгээр <b style={{ color: "#fff" }}>хэдхэн минутад</b> дэлгүүрээ нээж, тэр даруй зарж эхэл.</> },
  { ic: av(<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>), title: "Орлогоо өсгө", desc: <>Хамгийн хялбар QPay checkout — цөөн алхам, илүү олон төлсөн захиалга.</> },
  { ic: av(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>), title: "Найдвартай ажиллагаа", desc: <>Хурдан ачаалал, тогтвортой хостинг — дэлгүүр чинь <b style={{ color: "#fff" }}>24/7</b> онлайн.</> },
  { ic: av(<><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></>), title: "Уян хатан бүтэц", desc: <>Drag-and-drop-аар хүссэнээрээ угсар. Загвар, өнгө, блок бүрийг өөрчил.</> },
  { ic: av(<><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>), title: "Бага зардал", desc: <>Хямд сарын төлбөр, <b style={{ color: "#fff" }}>нуугдмал зардалгүй</b>. Нэмэлт апп, хураамж шаардахгүй.</> },
  { ic: av(<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>), title: "Бүх сувгаар зар", desc: <>Сошиал, AI чат, өөрийн домэйн — нэг бараагаа хаана ч тавь.</> },
];
const STATS = [
  { num: "10 мин", label: "Дэлгүүр нээх хугацаа", desc: "Загвар сонгож, бараагаа оруулаад л бэлэн." },
  { num: "0₮", label: "Эхлэхэд төлбөргүй", desc: "Бэлэн болоход л нийтэл — эхлэхэд зардалгүй." },
  { num: "24/7", label: "Тасралтгүй онлайн", desc: "Дэлгүүр чинь шөнө ч худалдаа хийнэ." },
];

const wrap = { maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap3 = { maxWidth: "48rem", margin: "0 auto", padding: "0 1.25rem" } as const;

export default function StorePage() {
  return (
    <>
      {/* ─── HERO (Shopify-style: copy зүүн, төхөөрөмж баруун) ─ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "5.5rem 0 6.5rem", background: "var(--hero-gradient)" }}>
        <div style={{ ...wrap, maxWidth: "90rem", position: "relative" }}>
          <div style={{ position: "absolute", top: "-30%", right: "-12%", width: "62%", height: "125%", background: "radial-gradient(circle, rgba(196,142,128,0.16), transparent 62%)", pointerEvents: "none" }} />

          <div className="hero-store-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "4rem", alignItems: "center" }}>
            {/* LEFT — copy */}
            <div className="hero-store-copy">
              <h1 style={{ fontSize: "clamp(2.6rem, 5.4vw, 4.2rem)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.045em", marginBottom: "1.5rem" }}>
                <span style={{ display: "block", color: "var(--navy-dark)" }}>Онлайн дэлгүүрээ</span>
                <span style={{ display: "block", color: "var(--text-secondary)" }}>кодгүйгээр бүтээгээрэй.</span>
              </h1>
              <p style={{ fontSize: "1.1rem", color: "var(--text-mid)", lineHeight: 1.75, maxWidth: "440px", marginBottom: "2.25rem" }}>
                Хэдхэн минутад өөрийн дэлгүүрээ угсар. Бараа, QPay төлбөр, хүргэлт, домэйн, аналитик — бүгд нэг дор.
              </p>
              <div className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ fontSize: "0.97rem", padding: "0.95rem 2.3rem" }}>
                  Дэлгүүрээ нээх →
                </Link>
                <a href={DEMO_URL} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: "0.97rem", padding: "0.95rem 2.3rem" }}>
                  Жишээ дэлгүүр үзэх ↗
                </a>
              </div>
              <div className="hero-trust" style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem 1.75rem", marginTop: "2rem" }}>
                {["Кодгүй угсардаг", "QPay төлбөр", "Өөрийн домэйн"].map((t) => (
                  <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", fontSize: "0.86rem", color: "var(--text-mid)", fontWeight: 500 }}>
                    <IconCheck /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — device cluster (бодит MacBook + iPhone, зэрэгцээ) */}
            <div className="hero-cluster" style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", gap: "1.5rem" }}>

              {/* ── MacBook ── */}
              <div className="hero-laptop" style={{ position: "relative", flex: "1 1 0", minWidth: 0 }}>
                {/* SCREEN: хөнгөн цагаан хүрээ + дэлгэц + notch */}
                <div style={{ position: "relative", background: "linear-gradient(#23242a, #16171b)", borderRadius: "16px 16px 7px 7px", padding: "10px 10px 12px", boxShadow: "0 36px 70px rgba(10,27,46,0.26)" }}>
                  {/* camera notch */}
                  <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 88, height: 15, background: "#16171b", borderRadius: "0 0 9px 9px", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#2c2d33" }} />
                  </div>
                  {/* screen surface — 16:9, editorial storefront */}
                  <div style={{ position: "relative", borderRadius: "7px", overflow: "hidden", background: "#fff", aspectRatio: "16 / 9", display: "flex", flexDirection: "column" }}>
                    {/* browser chrome */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", padding: "0.5rem 0.9rem", borderBottom: "1px solid var(--border)", background: "var(--bg-section)" }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E4E8ED" }} />
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E4E8ED" }} />
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E4E8ED" }} />
                      <span style={{ margin: "0 auto", fontSize: "0.62rem", color: "var(--text-light)", background: "#fff", border: "1px solid var(--border)", borderRadius: "6px", padding: "0.13rem 0.85rem" }}>миний-дэлгүүр.mn</span>
                    </div>

                    {/* website */}
                    <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", background: "#fff" }}>
                      {/* store nav */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.55rem 1.1rem", borderBottom: "1px solid var(--border)" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                          <span style={{ width: 18, height: 18, borderRadius: 5, background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, flexShrink: 0 }}>М</span>
                          <span style={{ fontWeight: 800, letterSpacing: "0.06em", fontSize: "0.72rem", color: "var(--navy-dark)", whiteSpace: "nowrap" }}>МИНИЙ ДЭЛГҮҮР</span>
                        </span>
                        <span className="laptop-nav-links" style={{ display: "flex", gap: "0.95rem", fontSize: "0.6rem", color: "var(--text-mid)", fontWeight: 600 }}>
                          <span>Нүүр</span><span>Бараа</span><span>Шинэ</span><span>Тухай</span>
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
                          <span style={{ fontSize: "0.6rem", color: "var(--navy-dark)", fontWeight: 600 }}>Нэвтрэх</span>
                          <span style={{ color: "var(--navy-dark)", display: "inline-flex" }}><IconBag /></span>
                        </span>
                      </div>

                      {/* hero split */}
                      <div style={{ flex: 1, minHeight: 0, display: "flex" }}>
                        {/* left copy */}
                        <div style={{ flex: "0 0 52%", padding: "0 1.4rem", display: "flex", flexDirection: "column", justifyContent: "center", background: "linear-gradient(180deg, #FFFFFF, #F6F8FB)" }}>
                          <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--navy)", fontWeight: 700, marginBottom: "0.5rem" }}>ШИНЭ ЦУГЛУУЛГА · 2026</div>
                          <div style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--navy-dark)", lineHeight: 1.08, marginBottom: "0.55rem" }}>Намрын<br />шинэ загвар</div>
                          <div style={{ fontSize: "0.64rem", color: "var(--text-mid)", lineHeight: 1.6, marginBottom: "0.9rem", maxWidth: "92%" }}>Чанартай даавуу, орчин үеийн дизайн. Хязгаарлагдмал тоо.</div>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, alignSelf: "flex-start", background: "var(--navy)", color: "#fff", fontSize: "0.63rem", fontWeight: 700, padding: "0.42rem 1rem", borderRadius: "0.5rem" }}>Худалдан авах →</span>
                        </div>
                        {/* right photo */}
                        <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "var(--bg-tint)" }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=520&q=80&auto=format&fit=crop" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                          {/* price tag overlay */}
                          <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(255,255,255,0.95)", borderRadius: 8, padding: "5px 9px", boxShadow: "0 8px 20px rgba(10,27,46,0.18)" }}>
                            <div style={{ fontSize: "0.56rem", color: "var(--text-light)", fontWeight: 600 }}>Пальто</div>
                            <div style={{ fontSize: "0.68rem", color: "var(--navy)", fontWeight: 800 }}>249,000₮</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* hinge neck (дэлгэцийн доод ирмэг) */}
                <div style={{ height: 7, margin: "0 3.5%", background: "linear-gradient(#1c1d22, #0c0d10)" }} />
                {/* base deck — дэлгэцээс өргөн, урдаас харагдах хөнгөн цагаан суурь */}
                <div style={{ position: "relative", height: 16, margin: "0 -8%", background: "linear-gradient(180deg, #56575f 0%, #43444c 15%, #2c2d33 52%, #161719 100%)", borderRadius: "0 0 13px 13px", boxShadow: "0 26px 40px rgba(0,0,0,0.3)" }}>
                  {/* металл гэрэлтэх дээд ирмэг */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1.5, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22) 14%, rgba(255,255,255,0.22) 86%, transparent)" }} />
                  {/* нээх grip хонхор */}
                  <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 98, height: 7, background: "linear-gradient(#15161a, #25262c)", borderRadius: "0 0 10px 10px" }} />
                </div>
              </div>

              {/* ── iPhone (бодит lock screen) ── */}
              <div className="cluster-phone" style={{ order: -1, flex: "0 0 auto", width: 198, marginBottom: 14 }}>
                {/* титан хүрээ */}
                <div style={{ position: "relative", borderRadius: 34, background: "linear-gradient(150deg, #2a2b30, #0c0d10)", padding: 5, boxShadow: "0 34px 70px rgba(10,27,46,0.5)" }}>
                  {/* side buttons */}
                  <div style={{ position: "absolute", left: -2, top: 78, width: 2.5, height: 22, background: "#3a3b40", borderRadius: 2 }} />
                  <div style={{ position: "absolute", left: -2, top: 108, width: 2.5, height: 22, background: "#3a3b40", borderRadius: 2 }} />
                  <div style={{ position: "absolute", right: -2, top: 96, width: 2.5, height: 34, background: "#3a3b40", borderRadius: 2 }} />
                  {/* дэлгэц */}
                  <div style={{ position: "relative", borderRadius: 29, overflow: "hidden", background: "linear-gradient(165deg, #2d2733 0%, #241f2a 40%, #1b1720 100%)", aspectRatio: "192/406" }}>
                    {/* warm wallpaper — дээд талын зөөлөн гэрэл */}
                    <div style={{ position: "absolute", top: "-12%", left: "50%", transform: "translateX(-50%)", width: "130%", height: "52%", background: "radial-gradient(circle, rgba(196,142,128,0.26), transparent 64%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", bottom: "-10%", right: "-20%", width: "70%", height: "45%", background: "radial-gradient(circle, rgba(70,55,75,0.4), transparent 68%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(7,17,32,0.4) 100%)", pointerEvents: "none" }} />

                    {/* content layer */}
                    <div style={{ position: "relative", height: "100%", padding: "9px 11px 12px", display: "flex", flexDirection: "column" }}>
                      {/* status bar */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff", fontSize: 9.5, fontWeight: 600, padding: "0 4px" }}>
                        <span>10:09</span>
                        <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                          <svg width="14" height="9" viewBox="0 0 18 12" fill="#fff"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
                          <svg width="13" height="9" viewBox="0 0 16 12" fill="#fff"><path d="M8 11.4l1.9-2.5a3 3 0 0 0-3.8 0L8 11.4zM8 5.1a7 7 0 0 1 4.9 2l1.3-1.6A9.4 9.4 0 0 0 8 2.7 9.4 9.4 0 0 0 1.8 5.5L3.1 7.1A7 7 0 0 1 8 5.1z" /></svg>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 1.5 }}>
                            <span style={{ width: 16, height: 8.5, border: "1px solid rgba(255,255,255,0.75)", borderRadius: 2.5, padding: 1.3, display: "inline-flex" }}><span style={{ flex: 1, background: "#fff", borderRadius: 1 }} /></span>
                            <span style={{ width: 1.5, height: 3.5, background: "rgba(255,255,255,0.75)", borderRadius: 1 }} />
                          </span>
                        </span>
                      </div>
                      {/* Dynamic Island */}
                      <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 62, height: 18, background: "#000", borderRadius: 11 }} />

                      {/* clock */}
                      <div style={{ textAlign: "center", color: "#fff", marginTop: 16 }}>
                        <div style={{ fontSize: 10, opacity: 0.88, fontWeight: 500 }}>Даваа, 6-р сарын 15</div>
                        <div style={{ fontSize: 46, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.04, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>10:10</div>
                      </div>

                      {/* notifications — бүгд ижил харагдацтай */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 15 }}>
                        {[
                          { n: "#34", p: "+469,650₮", hot: true },
                          { n: "#33", p: "+144,320₮" },
                          { n: "#32", p: "+745,930₮" },
                        ].map((o) => (
                          <div key={o.n} className="order-notif" style={{ background: o.hot ? "rgba(255,255,255,0.26)" : "rgba(255,255,255,0.14)", borderRadius: 12, padding: "8px 11px", display: "flex", gap: 9, alignItems: "center", border: o.hot ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.12)", boxShadow: o.hot ? "0 8px 20px rgba(0,0,0,0.22)" : "none" }}>
                            <div style={{ width: 24, height: 24, borderRadius: 7, background: "rgba(255,255,255,0.28)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><IconBag /></div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                                <span style={{ fontSize: 9.5, color: "#fff", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Захиалга {o.n}</span>
                                <span style={{ fontSize: 7, color: "rgba(255,255,255,0.65)", flexShrink: 0 }}>1 мин</span>
                              </div>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6, marginTop: 2 }}>
                                <span style={{ fontSize: 8.5, color: "#3ddc84", fontWeight: 700, whiteSpace: "nowrap" }}>Төлөгдсөн</span>
                                <span style={{ fontSize: 9.5, color: "#fff", fontWeight: 800, whiteSpace: "nowrap", letterSpacing: "-0.02em", flexShrink: 0 }}>{o.p}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* bottom: flashlight / camera + home indicator */}
                      <div style={{ marginTop: "auto" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 10px", marginBottom: 9 }}>
                          <span style={{ width: 27, height: 27, borderRadius: "50%", background: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></svg>
                          </span>
                          <span style={{ width: 27, height: 27, borderRadius: "50%", background: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                          </span>
                        </div>
                        <div style={{ width: 66, height: 4, borderRadius: 3, background: "rgba(255,255,255,0.9)", margin: "0 auto" }} />
                      </div>
                    </div>
                  </div>
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
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Хэрэглэгч байгаа газар <span className="gradient-text">бүрт зар</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "460px", margin: "0 auto", fontSize: "0.92rem", lineHeight: 1.7 }}>
              Дэлгүүр, сошиал, чат, гар утас — нэг бараагаа хаана ч тавьж, QPay-аар хормын дотор төлүүл.
            </p>
          </div>

          <div className="sell-grid stagger" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
            <SellCard
              visual={channelVisual}
              title="Хаана ч худалдаалах"
              desc={<>Нэг дэлгүүрээ Facebook, Instagram, чат болон өөрийн домэйнтэй холбоно. Хэрэглэгч хаанаас орсон ч ижил бараа, ижил үнээр захиална.</>}
            />
            <SellCard
              visual={phoneVisual}
              title="Утсан дээр гоё харагдах"
              desc={<>Дэлгүүр чинь утас, компьютер бүр дээр автоматаар тохирч, цэвэрхэн харагдана. Хэрэглэгч хялбар үзэж, хурдан захиална.</>}
            />
            <SellCard
              visual={checkoutVisual}
              title="QPay-аар шууд төлүүлэх"
              desc={<>Хэрэглэгч хэдхэн товшилтоор QPay-аар төлнө. Мөнгө тань шууд дансанд ороод, захиалга бэлэн болно — гар аргаар баталгаажуулах шаардлагагүй.</>}
            />
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: "1rem" }}>
              Дэлгүүр эрхлэхэд <span className="gradient-text">хэрэгтэй бүхэн</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "460px", margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Олон апп, нэмэлт хэрэгслийн оронд — нэг платформоос дэлгүүрээ бүрэн удирд.
            </p>
          </div>

          <div className="why-grid stagger" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ borderRadius: "1.25rem", overflow: "hidden", background: CARD_BG, border: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: "152px", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://images.unsplash.com/photo-${f.img}?w=520&q=80&auto=format&fit=crop`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(20,16,24,0.05) 35%, rgba(20,16,24,0.92))" }} />
                </div>
                <div style={{ padding: "1.25rem 1.65rem 1.75rem", marginTop: "-2.25rem", position: "relative" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#fff", marginBottom: "0.5rem" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AUTOMATE (interactive tabbed section) ─────────── */}
      <StoreAutomate />

      {/* ─── ADVANTAGES (dark band + stats) ───────────────── */}
      <section data-animate style={{ position: "relative", overflow: "hidden", padding: "7rem 0", background: "linear-gradient(120deg, #25202A 0%, #1b1720 100%)", color: "#fff" }}>
        <div style={{ position: "absolute", top: "8%", left: "-10%", width: "45%", height: "75%", background: "radial-gradient(circle, rgba(196,142,128,0.22), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ ...wrap, position: "relative" }}>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "1rem" }}>Давуу тал</div>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", marginBottom: "1.1rem", maxWidth: "640px", lineHeight: 1.12 }}>
            Урт хугацаанд ажиллах дэлгүүрийн платформ
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.62)", maxWidth: "620px", marginBottom: "3.75rem" }}>
            Mongol Agent бол монгол бизнест зориулсан бүрэн цахим худалдааны систем. Дэлгүүрээ хурдан нээж, зардлаа хэмнэж, орлогоо тогтвортой өсгөнө.
          </p>

          <div className="adv-grid stagger" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.75rem 2rem", marginBottom: "4rem" }}>
            {ADVANTAGES.map(a => (
              <div key={a.title}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.14)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.1rem" }}>{a.ic}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "0.55rem", letterSpacing: "-0.01em" }}>{a.title}</h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="adv-stats stagger" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
            {STATS.map(s => (
              <div key={s.label} style={{ borderRadius: "1.25rem", padding: "2.25rem 2rem", background: "linear-gradient(150deg, #FBEDEA, #F4E4E0)" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em", color: "#143A6B", marginBottom: "0.5rem", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#1C2B3A", marginBottom: "0.5rem" }}>{s.label}</div>
                <p style={{ fontSize: "0.85rem", color: "#5A6B80", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap3}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
          <div style={{ borderRadius: "1.5rem", overflow: "hidden", padding: "4rem 3rem", textAlign: "center", background: "linear-gradient(150deg, #2d2733 0%, #241f2a 55%, #1b1720 100%)", color: "white" }}>
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
