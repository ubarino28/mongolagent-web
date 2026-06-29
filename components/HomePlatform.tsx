"use client";
import { useState, type ReactNode } from "react";
import Link from "next/link";

/* ─── icons ─── */
const Fb = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.4 18.6 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.5 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.6 23.04 24 18.07 24 12.07z" /></svg>);
const Check = () => (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>);
const Bag = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg>);

/* ─── frame ─── */
function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="automate-tablet" style={{ position: "relative", width: "100%", maxWidth: 600, borderRadius: 24, background: "linear-gradient(160deg, #25262c, #131419)", padding: 10, boxShadow: "0 44px 90px rgba(10,27,46,0.3)" }}>
      <div style={{ position: "relative", borderRadius: 15, overflow: "hidden", background: "#F6F8FB", aspectRatio: "4 / 3" }}>{children}</div>
    </div>
  );
}

/* ─── 1) AI чатаар захиалга ─── */
const Bubble = ({ side, children, navy }: { side: "l" | "r"; children: ReactNode; navy?: boolean }) => (
  <div style={{ alignSelf: side === "r" ? "flex-end" : "flex-start", maxWidth: "78%", background: navy ? "var(--navy)" : "#fff", color: navy ? "#fff" : "var(--navy-dark)", border: navy ? "none" : "1px solid var(--border)", borderRadius: side === "r" ? "14px 14px 4px 14px" : "14px 14px 14px 4px", padding: "8px 12px", fontSize: "0.78rem", lineHeight: 1.5, boxShadow: "0 4px 14px rgba(10,27,46,0.06)" }}>{children}</div>
);
const ChatVisual = (
  <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#EEF2F7" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0.7rem 1.1rem", background: "#fff", borderBottom: "1px solid var(--border)" }}>
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><Fb /></div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--navy-dark)" }}>Миний дэлгүүр</div>
        <div style={{ fontSize: "0.62rem", color: "#16a34a", fontWeight: 600 }}>● AI Agent онлайн</div>
      </div>
    </div>
    <div style={{ flex: 1, padding: "1rem 1.1rem", display: "flex", flexDirection: "column", gap: 9, overflow: "hidden" }}>
      <Bubble side="r" navy>Сайн уу, ногоон цамц байна уу? 🧥</Bubble>
      <Bubble side="l">Тийм ээ! Энэ загвар бэлэн байна 👇</Bubble>
      <div style={{ alignSelf: "flex-start", display: "flex", gap: 9, background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: 8, maxWidth: "82%", boxShadow: "0 6px 16px rgba(10,27,46,0.06)" }}>
        <div style={{ width: 42, height: 42, borderRadius: 9, overflow: "hidden", background: "var(--bg-tint)", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=120&q=80&auto=format&fit=crop" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--navy-dark)" }}>Ойн ногоон цамц</div>
          <div style={{ fontSize: "0.74rem", fontWeight: 800, color: "var(--navy)", margin: "2px 0 4px" }}>189,000₮</div>
          <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#fff", background: "var(--navy)", borderRadius: 6, padding: "3px 8px" }}>Захиалах</span>
        </div>
      </div>
      <Bubble side="r" navy>Авъя, QPay-аар төлье ✅</Bubble>
    </div>
  </div>
);

/* ─── 2) Онлайн дэлгүүр ─── */
const StoreVisual = (
  <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0.55rem 0.9rem", background: "var(--bg-section)", borderBottom: "1px solid var(--border)" }}>
      {[0, 1, 2].map((i) => <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#E4E8ED" }} />)}
      <span style={{ margin: "0 auto", fontSize: "0.62rem", color: "var(--text-light)", background: "#fff", border: "1px solid var(--border)", borderRadius: 5, padding: "0.13rem 0.8rem" }}>миний-дэлгүүр.mn</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.65rem 1.2rem", borderBottom: "1px solid var(--border)" }}>
      <span style={{ fontWeight: 900, letterSpacing: "0.08em", fontSize: "0.82rem", color: "var(--navy-dark)" }}>МИНИЙ ДЭЛГҮҮР</span>
      <span style={{ color: "var(--navy-dark)", display: "inline-flex" }}><Bag /></span>
    </div>
    <div style={{ flex: 1, padding: "0.9rem 1.1rem", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 9 }}>
        {[
          { img: "1576566588028-4147f3842f27", p: "189,000₮" },
          { img: "1521572163474-6864f9cf17ab", p: "59,000₮" },
          { img: "1542272604-787c3835535d", p: "129,000₮" },
          { img: "1620799140408-edc6dcb6d633", p: "159,000₮" },
        ].map((t, i) => (
          <div key={i} style={{ borderRadius: 9, overflow: "hidden", border: "1px solid var(--border)" }}>
            <div style={{ aspectRatio: "1/1", overflow: "hidden", background: "var(--bg-tint)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://images.unsplash.com/photo-${t.img}?w=240&q=80&auto=format&fit=crop`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ padding: "0.4rem 0.5rem", fontSize: "0.64rem", fontWeight: 800, color: "var(--navy)" }}>{t.p}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── 3) QPay төлбөр ─── */
const PayVisual = (
  <div style={{ position: "relative", height: "100%", background: "#EEF2F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: "80%", background: "#fff", borderRadius: 18, padding: "1.4rem 1.5rem", boxShadow: "0 24px 50px rgba(10,27,46,0.16)", textAlign: "center" }}>
      <div style={{ marginBottom: 10 }}><Check /></div>
      <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--navy-dark)", marginBottom: 5 }}>QPay төлбөр амжилттай</div>
      <div style={{ fontSize: "0.72rem", color: "var(--text-light)", marginBottom: 14 }}>Орлого Mongol Agent-аар дамжихгүй, шууд таны дансанд орлоо.</div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: 12, fontSize: "0.92rem", fontWeight: 800 }}>
        <span>Нийт</span><span style={{ color: "var(--navy)" }}>235,000₮</span>
      </div>
    </div>
  </div>
);

/* ─── 4) Нэгдсэн самбар ─── */
const bars = [38, 55, 44, 70, 60, 86, 72];
const DashVisual = (
  <div style={{ height: "100%", background: "#fff", padding: "1.1rem 1.3rem", display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <div style={{ fontSize: "0.64rem", color: "var(--text-light)", fontWeight: 600 }}>Өнөөдрийн орлого</div>
        <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--navy-dark)", letterSpacing: "-0.02em" }}>2,450,000₮</div>
      </div>
      <span style={{ fontSize: "0.62rem", fontWeight: 700, color: "#16a34a", background: "#E7F6EC", borderRadius: 20, padding: "4px 9px" }}>▲ 18%</span>
    </div>
    {/* mini chart */}
    <div style={{ display: "flex", alignItems: "flex-end", gap: 7, height: 56, marginTop: 12 }}>
      {bars.map((h, i) => (
        <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 4, background: i === bars.length - 2 ? "var(--navy)" : "var(--bg-tint)" }} />
      ))}
    </div>
    <div style={{ fontSize: "0.62rem", fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "14px 0 8px" }}>Сүүлийн захиалга</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {[
        { n: "#1043 · Болд Б.", ch: "Facebook", p: "189,000₮" },
        { n: "#1042 · Сараа Д.", ch: "Дэлгүүр", p: "59,000₮" },
        { n: "#1041 · Тэмүүлэн", ch: "Instagram", p: "245,000₮" },
      ].map((o) => (
        <div key={o.n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-section)" }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, background: "#fff", border: "1px solid var(--border)", color: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Bag /></div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--navy-dark)" }}>{o.n}</div>
            <div style={{ fontSize: "0.6rem", color: "var(--text-light)" }}>{o.ch}</div>
          </div>
          <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--navy)" }}>{o.p}</div>
        </div>
      ))}
    </div>
  </div>
);

const TABS = [
  { key: "chat", title: "AI чатаар захиалга авах", desc: "Facebook, Instagram-аар ирсэн хэрэглэгчтэй AI Монгол хэлээр чатлаж, бараа санал болгож, захиалгыг шууд бүртгэнэ. Та унтаж байхад ч борлуулалт зогсохгүй.", visual: ChatVisual },
  { key: "store", title: "Онлайн дэлгүүрээр зарах", desc: "Кодгүйгээр дэлгүүрээ угсар. Бараа, хувилбар, хямдрал, өөрийн домэйн — бүгд бэлэн. Хэрэглэгч хүссэн үедээ орж, өөрөө захиална.", visual: StoreVisual },
  { key: "pay", title: "QPay-аар төлбөр авах", desc: "Хэрэглэгч чат эсвэл дэлгүүр дотроос QPay-аар хэдхэн товшилтоор төлнө. Орлого Mongol Agent-аар дамжихгүй, шууд таны дансанд орно.", visual: PayVisual },
  { key: "dash", title: "Нэг самбараас удирдах", desc: "Бүх суваг, бүх захиалга, орлого, бараа — нэг хяналтын самбарт. Аль суваг хэр зарж байгаа, юу нөөц дуусч байгааг тоогоор хар.", visual: DashVisual },
];

export default function HomePlatform() {
  const [active, setActive] = useState(0);
  return (
    <section data-animate style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.25rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Нэг платформ дээр <span className="gradient-text">бүх зүйл холбогдоно</span>
          </h2>
          <p style={{ color: "var(--text-mid)", maxWidth: "470px", margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Чат, дэлгүүр, төлбөр, хяналт — салангид апп хэрэглэхийн оронд бүгдийг нэг дороос.
          </p>
        </div>

        <div className="automate-grid" style={{ display: "grid", gridTemplateColumns: "0.95fr 1.3fr", gap: "3.5rem", alignItems: "center" }}>
          {/* tab list */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {TABS.map((t, i) => (
                <button key={t.key} onClick={() => setActive(i)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", padding: "0.2rem 0", cursor: "pointer", fontFamily: "inherit" }}>
                  <span style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.25, color: i === active ? "var(--navy-dark)" : "var(--text-light)", borderBottom: i === active ? "2px solid var(--navy)" : "2px solid transparent", paddingBottom: 3, transition: "color 0.2s" }}>
                    {t.title}
                  </span>
                </button>
              ))}
            </div>
            <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.75, marginTop: "1.75rem", maxWidth: "440px", minHeight: "5.2rem" }}>
              {TABS[active].desc}
            </p>
            <Link href="/start" className="btn-primary" style={{ marginTop: "1.5rem", fontSize: "0.95rem", padding: "0.9rem 2.1rem" }}>
              Үнэгүй эхлэх →
            </Link>
          </div>

          {/* frame */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Frame>{TABS[active].visual}</Frame>
          </div>
        </div>
      </div>
    </section>
  );
}
