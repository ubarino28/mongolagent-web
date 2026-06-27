"use client";
import { useState, type ReactNode } from "react";
import Link from "next/link";

/* ─── жижиг icons ─── */
const Lock = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>);
const Truck = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>);
const Pin = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>);
const Store = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M4 9h16" /></svg>);
const CheckBig = () => (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>);
const Bag = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg>);

const PANEL_HEAD = { fontSize: "0.92rem", fontWeight: 800, color: "var(--navy-dark)", letterSpacing: "-0.01em" } as const;
const PANEL_SUB = { fontSize: "0.7rem", color: "var(--text-light)", lineHeight: 1.5, marginTop: 3 } as const;

/* ─── Tablet хүрээ ─── */
function Tablet({ children }: { children: ReactNode }) {
  return (
    <div className="automate-tablet" style={{ position: "relative", width: "100%", maxWidth: 620, borderRadius: 26, background: "linear-gradient(160deg, #25262c, #131419)", padding: 11, boxShadow: "0 44px 90px rgba(10,27,46,0.3)" }}>
      <div style={{ position: "relative", borderRadius: 15, overflow: "hidden", background: "#F6F8FB", aspectRatio: "4 / 3" }}>
        {children}
      </div>
    </div>
  );
}

/* ─── 1) Домэйн холбох ─── */
const DomainVisual = (
  <div style={{ position: "relative", height: "100%", background: "#fff" }}>
    <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 3, background: "#1C2B3A", color: "#fff", borderRadius: 11, padding: "9px 18px", display: "flex", alignItems: "center", gap: 8, fontSize: "0.86rem", fontWeight: 600, boxShadow: "0 16px 34px rgba(0,0,0,0.28)", whiteSpace: "nowrap" }}>
      <Lock /> миний-дэлгүүр.mn
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.85rem 1.4rem", borderBottom: "1px solid var(--border)" }}>
      <span style={{ fontWeight: 900, letterSpacing: "0.08em", fontSize: "0.86rem", color: "var(--navy-dark)" }}>МИНИЙ ДЭЛГҮҮР</span>
      <span style={{ display: "inline-flex", gap: "0.9rem", fontSize: "0.66rem", color: "var(--text-mid)", fontWeight: 600 }}><span>Нүүр</span><span>Бараа</span><span>Тухай</span></span>
    </div>
    <div style={{ position: "relative", height: "calc(100% - 50px)", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=620&q=80&auto=format&fit=crop" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.7) 42%, transparent 70%)" }} />
      <div style={{ position: "relative", padding: "2.6rem 1.6rem", maxWidth: "62%" }}>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.16em", color: "var(--navy)", fontWeight: 700, marginBottom: "0.5rem" }}>SSL · АЮУЛГҮЙ ХОЛБОЛТ</div>
        <div style={{ fontSize: "clamp(1.1rem, 3vw, 1.7rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--navy-dark)", lineHeight: 1.1, marginBottom: "0.7rem" }}>Таны өөрийн домэйн</div>
        <span style={{ display: "inline-block", background: "var(--navy)", color: "#fff", fontSize: "0.66rem", fontWeight: 700, padding: "0.45rem 1.1rem", borderRadius: "0.5rem" }}>Дэлгүүр үзэх →</span>
      </div>
    </div>
  </div>
);

/* ─── 2) Хүргэлт тооцоолох ─── */
const shipMethods = [
  { ic: <Truck />, n: "Үнэгүй хүргэлт", s: "80,000₮-с дээш захиалгад", r: "0₮", c: "#16a34a" },
  { ic: <Pin />, n: "Хотын доторх", s: "Улаанбаатар хот · 24 цагт", r: "5,000₮", c: "var(--navy)" },
  { ic: <Truck />, n: "Орон нутаг", s: "Унаагаар · 2-4 хоног", r: "Жинээр", c: "var(--navy)" },
  { ic: <Store />, n: "Очиж авах", s: "Дэлгүүрээс өөрөө", r: "0₮", c: "#16a34a" },
];
const ShippingVisual = (
  <div style={{ height: "100%", background: "#fff", padding: "1.1rem 1.3rem", display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <div style={PANEL_HEAD}>Хүргэлт &amp; хүлээн авах</div>
    <div style={PANEL_SUB}>Хүргэлтийн төрөл, бүс, төлбөрөө тохируул. Захиалга үед автоматаар бодогдоно.</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
      {shipMethods.map((m) => (
        <div key={m.n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 11px", borderRadius: 11, border: "1px solid var(--border)", background: "var(--bg-section)" }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "#fff", border: "1px solid var(--border)", color: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{m.ic}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--navy-dark)" }}>{m.n}</div>
            <div style={{ fontSize: "0.62rem", color: "var(--text-light)" }}>{m.s}</div>
          </div>
          <div style={{ fontSize: "0.74rem", fontWeight: 800, color: m.c, flexShrink: 0 }}>{m.r}</div>
        </div>
      ))}
    </div>
    <div style={{ marginTop: "auto", paddingTop: 12 }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.7rem", fontWeight: 700, color: "var(--navy)", border: "1px dashed var(--navy)", borderRadius: 8, padding: "7px 12px" }}>+ Хүргэлт нэмэх</span>
    </div>
  </div>
);

/* ─── 3) QPay төлбөр ─── */
const PaymentVisual = (
  <div style={{ position: "relative", height: "100%", background: "#EEF2F7" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.7rem 1.2rem", background: "#fff", borderBottom: "1px solid var(--border)" }}>
      <span style={{ fontWeight: 800, fontSize: "0.78rem", color: "var(--navy-dark)" }}>Төлбөр төлөх</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.62rem", color: "#16a34a", fontWeight: 700 }}><Lock /> Аюулгүй</span>
    </div>
    <div style={{ padding: "1rem 1.2rem", display: "flex", flexDirection: "column", gap: 8, filter: "blur(0.4px)", opacity: 0.92 }}>
      {[
        { k: "Дэд дүн", v: "230,000₮" },
        { k: "Хүргэлт", v: "5,000₮" },
      ].map((r) => (
        <div key={r.k} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--text-mid)" }}><span>{r.k}</span><span style={{ fontWeight: 600, color: "var(--navy-dark)" }}>{r.v}</span></div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: 8, fontSize: "0.82rem", fontWeight: 800 }}><span>Нийт</span><span style={{ color: "var(--navy)" }}>235,000₮</span></div>
    </div>
    {/* QPay success float */}
    <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", zIndex: 3, width: "78%", background: "#fff", borderRadius: 16, padding: "1.1rem 1.2rem", boxShadow: "0 24px 50px rgba(10,27,46,0.22)", textAlign: "center" }}>
      <div style={{ marginBottom: 8 }}><CheckBig /></div>
      <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--navy-dark)", marginBottom: 3 }}>QPay төлбөр амжилттай</div>
      <div style={{ fontSize: "0.68rem", color: "var(--text-light)" }}>Орлого шууд таны дансанд орлоо · 235,000₮</div>
    </div>
  </div>
);

/* ─── 4) Захиалгын хуудас ─── */
const orderItems = [
  { img: "1576566588028-4147f3842f27", n: "Ногоон цамц", q: "Хэмжээ M · 1ш", p: "189,000₮" },
  { img: "1542272604-787c3835535d", n: "Деним өмд", q: "Хэмжээ 32 · 1ш", p: "46,000₮" },
];
const OrderVisual = (
  <div style={{ position: "relative", height: "100%", background: "#fff", padding: "1.3rem 1.4rem", overflow: "hidden" }}>
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#E7F6EC", color: "#16a34a", fontSize: "0.64rem", fontWeight: 700, padding: "5px 11px", borderRadius: 20, marginBottom: 12 }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a" }} /> ТӨЛӨГДСӨН
    </div>
    <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--navy-dark)", letterSpacing: "-0.01em" }}>Баярлалаа! Захиалга #851</div>
    <div style={{ fontSize: "0.68rem", color: "var(--text-light)", marginTop: 3, marginBottom: 14 }}>Баталгаажуулалт болон хүргэлтийн мэдээлэл хэрэглэгчид автоматаар илгээгдлээ.</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
      {orderItems.map((it) => (
        <div key={it.n} style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ width: 42, height: 42, borderRadius: 9, overflow: "hidden", background: "var(--bg-tint)", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://images.unsplash.com/photo-${it.img}?w=120&q=80&auto=format&fit=crop`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--navy-dark)" }}>{it.n}</div>
            <div style={{ fontSize: "0.62rem", color: "var(--text-light)" }}>{it.q}</div>
          </div>
          <div style={{ fontSize: "0.74rem", fontWeight: 800, color: "var(--navy-dark)", flexShrink: 0 }}>{it.p}</div>
        </div>
      ))}
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--border)", marginTop: 12, paddingTop: 11, fontSize: "0.86rem", fontWeight: 800 }}>
      <span>Нийт</span><span style={{ color: "var(--navy)" }}>235,000₮</span>
    </div>
    {/* хүлээн авагч + хүргэлт */}
    <div style={{ marginTop: 14, borderRadius: 12, background: "var(--bg-section)", border: "1px solid var(--border)", padding: "12px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "11px 16px" }}>
      {[
        { k: "Хүлээн авагч", v: "Болд Батаа" },
        { k: "Утас", v: "9911-2233" },
        { k: "Хаяг", v: "ХУД, 11-р хороо" },
        { k: "Хүргэлт", v: "Үнэгүй · 24 цагт" },
      ].map((r) => (
        <div key={r.k}>
          <div style={{ fontSize: "0.6rem", color: "var(--text-light)", marginBottom: 2 }}>{r.k}</div>
          <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--navy-dark)" }}>{r.v}</div>
        </div>
      ))}
    </div>
    <div style={{ position: "absolute", top: 18, right: 18, width: 38, height: 38, borderRadius: 11, background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><Bag /></div>
  </div>
);

const TABS = [
  { key: "domain", title: "Домэйн холбох", desc: "Үнэгүй slug.mongolagent.mn хаягтай эхэл, эсвэл өөрийн .mn / .com домэйноо хэдхэн товшилтоор холбо. SSL гэрчилгээ автоматаар идэвхжиж, дэлгүүр чинь найдвартай (https) ажиллана.", visual: DomainVisual },
  { key: "shipping", title: "Хүргэлт тооцоолох", desc: "Хотын дотор, орон нутаг, очиж авах — хүргэлтийн төрөл, бүс, төлбөрөө тохируул. Захиалгын үед хүргэлтийн төлбөр хэрэглэгчийн хаягаар автоматаар бодогдоно.", visual: ShippingVisual },
  { key: "qpay", title: "QPay төлбөр", desc: "Хэрэглэгч дэлгүүр дотроос QPay-аар шууд төлнө. Төлбөр амжилттай болмогц захиалга баталгаажиж, орлого Mongol Agent-аар дамжихгүй шууд таны дансанд орно.", visual: PaymentVisual },
  { key: "order", title: "Захиалгын хуудас", desc: "Захиалга бүр дугаар, төлбөрийн төлөв, бараа, хэрэглэгчийн мэдээлэлтэйгээр бүртгэгдэнэ. Төлөв шинэчлэхэд хэрэглэгч баталгаажуулах мэдэгдэл автоматаар хүлээн авна.", visual: OrderVisual },
];

export default function StoreAutomate() {
  const [active, setActive] = useState(0);
  return (
    <section data-animate style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.25rem" }}>
        <div className="automate-grid" style={{ display: "grid", gridTemplateColumns: "0.95fr 1.3fr", gap: "3.5rem", alignItems: "center" }}>
          {/* LEFT — tab list */}
          <div>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--navy)", marginBottom: "1.75rem" }}>Дэлгүүрээ автоматжуул</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {TABS.map((t, i) => (
                <button key={t.key} onClick={() => setActive(i)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", padding: "0.2rem 0", cursor: "pointer", fontFamily: "inherit" }}>
                  <span style={{ fontSize: "clamp(1.4rem, 2.7vw, 2rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.25, color: i === active ? "var(--navy-dark)" : "var(--text-light)", borderBottom: i === active ? "2px solid var(--navy)" : "2px solid transparent", paddingBottom: 3, transition: "color 0.2s" }}>
                    {t.title}
                  </span>
                </button>
              ))}
            </div>
            <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.75, marginTop: "1.75rem", maxWidth: "440px", minHeight: "5.2rem" }}>
              {TABS[active].desc}
            </p>
            <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ marginTop: "1.5rem", fontSize: "0.95rem", padding: "0.9rem 2.1rem" }}>
              Эхлэх →
            </Link>
          </div>

          {/* RIGHT — tablet */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Tablet>{TABS[active].visual}</Tablet>
          </div>
        </div>
      </div>
    </section>
  );
}
