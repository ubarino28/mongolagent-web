import Link from "next/link";
import type { ReactNode } from "react";

/* ─── Brand glyphs (showcase logo circles) ─── */
const FbGlyph = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.4 18.6 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.5 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.6 23.04 24 18.07 24 12.07z"/></svg>);
const IgGlyph = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="#E1306C"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>);
const MsgGlyph = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="#0084FF"><path d="M12 0C5.37 0 0 4.97 0 11.11c0 3.5 1.74 6.62 4.47 8.66V24l4.09-2.25c1.09.3 2.25.47 3.44.47 6.63 0 12-4.97 12-11.11C24 4.97 18.63 0 12 0zm1.19 14.96l-3.06-3.26-5.97 3.26 6.56-6.97 3.13 3.26 5.9-3.26-6.59 6.97z"/></svg>);
const BagGlyph = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#143A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>);
const GlobeGlyph = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#143A6B" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>);
const QpayGlyph = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>);

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

const CARD_BG = "linear-gradient(150deg, #16314F 0%, #0E2540 55%, #0A1B2E 100%)";

function Circle({ children }: { children: ReactNode }) {
  return <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid #0E2540", boxShadow: "0 3px 12px rgba(0,0,0,0.4)" }}>{children}</div>;
}

function Showcase({ eyebrow, logos, title, titleAccent, desc, href, cta, visual }: {
  eyebrow: string; logos: ReactNode[]; title: string; titleAccent: string;
  desc: string; href: string; cta: string; visual: ReactNode;
}) {
  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: "1.75rem", background: CARD_BG, border: "1px solid rgba(255,255,255,0.08)", padding: "clamp(2rem, 4vw, 3.5rem)" }}>
      <div style={{ position: "absolute", top: "-25%", right: "-8%", width: "55%", height: "80%", background: "radial-gradient(circle, rgba(43,90,143,0.32), transparent 70%)", pointerEvents: "none" }} />
      <div className="showcase-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "2.5rem", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>{eyebrow}</div>
          <div style={{ display: "flex", marginBottom: "1.5rem" }}>
            {logos.map((l, i) => <div key={i} style={{ marginLeft: i ? -11 : 0, zIndex: logos.length - i, position: "relative" }}><Circle>{l}</Circle></div>)}
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.85rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", marginBottom: "1.1rem" }}>
            {title} <span style={{ color: "#9DC0E8" }}>{titleAccent}</span>
          </h2>
          <p style={{ fontSize: "0.97rem", lineHeight: 1.75, color: "rgba(255,255,255,0.62)", maxWidth: "430px", marginBottom: "2rem" }}>{desc}</p>
          <Link href={href} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.82rem 1.9rem", borderRadius: "0.75rem", background: "#fff", color: "var(--navy)", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>{cta} <IconArrow /></Link>
        </div>
        <div style={{ position: "relative", minHeight: "330px" }}>{visual}</div>
      </div>
    </div>
  );
}

const FLOW = [
  { num: "01", title: "Онлайн дэлгүүрээ нээ", desc: "Бэлэн загвараас сонгож, бараагаа оруулаад хэдхэн минутад дэлгүүрээ нийтэл." },
  { num: "02", title: "AI Agent захиалга авна", desc: "Facebook/Instagram-аар ирсэн хэрэглэгчтэй AI харилцаж, бараа санал болгож, захиалга бүртгэнэ." },
  { num: "03", title: "QPay-аар төлбөр шууд дансанд", desc: "Хэрэглэгч чат эсвэл дэлгүүр дотроос QPay-аар төлж, орлого шууд таны дансанд орно." },
];

const TESTIMONIALS = [
  { text: "Шөнийн захиалгуудыг AI боловсруулдаг болсон. Нийт орлого 40% өсч, ажилтнуудын ачаалал мэдэгдэхүйц буурсан.", name: "Б.Оюунтунгалаг", role: "Kitty House Mongolia · Founder", av: "Б" },
  { text: "Онлайн дэлгүүрээ нээгээд, чатбот захиалга авдаг болсноор бид өсөлтдөө л анхаарч чаддаг болсон.", name: "Д.Мөнхбаяр", role: "Кофе шоп · Эзэн", av: "Д" },
  { text: "QPay холболт хамгийн хэрэгтэй. Хэрэглэгчид чат болон дэлгүүрээс шууд төлдөг. Цуцлалт буурсан.", name: "Э.Баярмаа", role: "Гоо сайхны салон · Эзэн", av: "Э" },
];

const FAQS = [
  { q: "Хоёр үйлчилгээг хамтад нь авах шаардлагатай юу?", a: "Үгүй. AI Agent эсвэл Онлайн дэлгүүрийн аль нэгийг нь дангаар авч болно. Гэхдээ хоёуланг хослуулбал захиалгаас төлбөр хүртэлх бүх урсгал бүрэн автоматжина." },
  { q: "Код бичих, программист хэрэгтэй юу?", a: "Үгүй. Хоёр бүтээгдэхүүн хоёулаа кодгүй. Бүртгүүлээд, заавраар дагаад л өөрөө тохируулна." },
  { q: "Нэвтрүүлэхэд хэр хугацаа шаардагдах вэ?", a: "Онлайн дэлгүүр хэдхэн минутад, AI Agent ихэвчлэн 3-7 хоногт бэлэн болдог." },
  { q: "Төлбөр хэрхэн төлөгдөх вэ?", a: "QPay-ээр. Хэрэглэгчийн төлбөр Mongol Agent-аар дамжихгүй, шууд таны дансанд орно." },
];

const wrap = { maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap5 = { maxWidth: "64rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap3 = { maxWidth: "48rem", margin: "0 auto", padding: "0 1.25rem" } as const;

export default function HomePage() {
  const aiVisual = (
    <>
      <div style={{ position: "absolute", top: 0, right: 0, background: "#fff", color: "#1C2B3A", borderRadius: "1rem 1rem 0.25rem 1rem", padding: "0.7rem 1rem", fontSize: "0.82rem", fontWeight: 500, maxWidth: "230px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", lineHeight: 1.45, zIndex: 2 }}>
        Ногоон цамц хэрэгтэй, 200мянгаас доош 🧥
      </div>
      <div style={{ position: "absolute", top: "96px", right: "26px", width: "186px", background: "#fff", borderRadius: "0.9rem", overflow: "hidden", boxShadow: "0 18px 44px rgba(0,0,0,0.4)", zIndex: 1 }}>
        <div style={{ aspectRatio: "4/5", overflow: "hidden", background: "#16382E" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80&auto=format&fit=crop" alt="Ойн ногоон цамц" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ padding: "0.7rem 0.85rem" }}>
          <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1C2B3A" }}>Ойн ногоон цамц</div>
          <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#143A6B", marginTop: "0.15rem" }}>189,000₮</div>
        </div>
      </div>
    </>
  );
  const webVisual = (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <div style={{ width: "100%", maxWidth: "330px", borderRadius: "0.9rem", overflow: "hidden", background: "#fff", boxShadow: "0 18px 44px rgba(0,0,0,0.4)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "0.55rem 0.75rem", background: "#F6F8FB", borderBottom: "1px solid #E4E8ED" }}>
            {[0, 1, 2].map(i => <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#E4E8ED" }} />)}
            <span style={{ marginLeft: 8, fontSize: "0.6rem", color: "#8A98A8", background: "#fff", border: "1px solid #E4E8ED", borderRadius: 5, padding: "0.12rem 0.5rem" }}>миний-дэлгүүр.mn</span>
          </div>
          <div style={{ padding: "0.9rem" }}>
            <div style={{ height: 9, width: "45%", background: "#E4E8ED", borderRadius: 4, marginBottom: 11 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
              {[
                { img: "1576566588028-4147f3842f27", price: "189,000₮" },
                { img: "1521572163474-6864f9cf17ab", price: "129,000₮" },
                { img: "1542272604-787c3835535d", price: "99,000₮" },
                { img: "1620799140408-edc6dcb6d633", price: "159,000₮" },
              ].map((t, i) => (
                <div key={i} style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #E4E8ED" }}>
                  <div style={{ aspectRatio: "1/1", overflow: "hidden", background: "#EAF0F8" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://images.unsplash.com/photo-${t.img}?w=240&q=80&auto=format&fit=crop`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "0.4rem 0.5rem" }}>
                    <div style={{ height: 6, width: "70%", background: "#E4E8ED", borderRadius: 3, marginBottom: 5 }} />
                    <div style={{ fontSize: "0.62rem", fontWeight: 800, color: "#143A6B" }}>{t.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "8%", left: "-4%", background: "#fff", borderRadius: "0.7rem", padding: "0.5rem 0.85rem", boxShadow: "0 10px 28px rgba(0,0,0,0.3)", display: "inline-flex", alignItems: "center", gap: 7, fontSize: "0.72rem", fontWeight: 700, color: "#16a34a" }}>
        ✓ QPay төлбөр амжилттай
      </div>
    </>
  );
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "6rem 0 7rem", background: "var(--hero-gradient)" }}>
        <div style={{ ...wrap, position: "relative" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
            <div>
              <div className="section-tag" style={{ marginBottom: "1.75rem", display: "inline-flex" }}>
                Монголын бизнесийн AI платформ
              </div>
              <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.035em", marginBottom: "1.5rem" }}>
                Бизнесээ онлайн<br />болгож,{" "}
                <span className="gradient-text">AI-аар автоматжуул.</span>
              </h1>
              <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.8, maxWidth: "470px", marginBottom: "2.5rem" }}>
                Нэг платформ — онлайн дэлгүүрээ нээж, AI ажилтнаар захиалга авч, QPay-аар төлбөр баталгаажуул. Код шаардахгүй, хэдхэн минутад.
              </p>
              <div className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Үнэгүй эхлэх
                </Link>
                <a href="#products" className="btn-outline" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Бүтээгдэхүүн үзэх ↓
                </a>
              </div>
            </div>

            <div className="hero-mascot" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "460px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mascot.png" alt="Mongol Agent AI" className="mascot-float"
                style={{ width: "400px", maxWidth: "88%", position: "relative", zIndex: 2, filter: "drop-shadow(0 24px 48px rgba(20,58,107,0.16))" }} />
              <div className="hero-bubble" style={{ position: "absolute", top: "72px", right: "44px", zIndex: 3, background: "var(--bg-white)", border: "1px solid var(--border)", borderRadius: "1rem 1rem 1rem 0.25rem", padding: "0.55rem 0.85rem", fontSize: "0.75rem", color: "var(--text-mid)", boxShadow: "0 4px 24px rgba(20,58,107,0.1)" }}>
                Сайн байна уу?
              </div>
              <div className="hero-bubble" style={{ position: "absolute", bottom: "110px", left: "28px", zIndex: 3, background: "var(--navy)", borderRadius: "1rem 1rem 0.25rem 1rem", padding: "0.55rem 0.85rem", fontSize: "0.75rem", color: "white", boxShadow: "0 6px 22px rgba(20,58,107,0.28)" }}>
                Захиалга баталгаажлаа!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────── */}
      <div style={{ padding: "0 1.25rem 0", marginTop: "-2.5rem", position: "relative", zIndex: 5 }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
          <div className="trust-bar" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem 4rem", padding: "1.75rem 2.5rem", borderRadius: "1.25rem", background: "var(--bg-white)", border: "1px solid var(--border)", boxShadow: "0 8px 30px rgba(20,58,107,0.06)" }}>
            {[
              { num: "200+", label: "бизнес ашигладаг" },
              { num: "4.9★", label: "дундаж үнэлгээ" },
              { num: "24/7", label: "тасралтгүй ажиллагаа" },
              { num: "10 мин", label: "тохируулахад хангалттай" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.45rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "0.73rem", color: "var(--text-light)", marginTop: "0.3rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PRODUCTS — premium showcase ──────────────────── */}
      <section id="products" data-animate style={{ padding: "7rem 0 6rem" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Хоёр шийдэл, нэг платформ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Бизнесээ ургуулах <span className="gradient-text">хоёр хүчирхэг хэрэгсэл</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <Showcase
              eyebrow="AI Agent · Чатбот"
              logos={[<FbGlyph key="f" />, <IgGlyph key="i" />, <MsgGlyph key="m" />]}
              title="Таны брэнд"
              titleAccent="чат руу оров."
              desc="Хэрэглэгч Facebook, Instagram дээр AI-тай Монгол хэлээр чатлаж, шууд захиалга өгнө. Чат дотроос QPay-аар төлж, та бүх захиалгаа нэг дороос хянана."
              href="/ai"
              cta="AI Agent үзэх"
              visual={aiVisual}
            />
            <Showcase
              eyebrow="Онлайн дэлгүүр · Цахим худалдаа"
              logos={[<BagGlyph key="b" />, <GlobeGlyph key="g" />, <QpayGlyph key="q" />]}
              title="Онлайн дэлгүүрээ"
              titleAccent="хормын дотор нээ."
              desc="Кодгүйгээр дэлгүүрээ угсар. Бараа, QPay төлбөр, хүргэлт, өөрийн домэйн — бүгд бэлэн. Хэрэглэгч шууд төлж, орлого таны дансанд орно."
              href="/store"
              cta="Онлайн дэлгүүр үзэх"
              visual={webVisual}
            />
          </div>
        </div>
      </section>

      {/* ─── ХАМТДАА (combine flow) ───────────────────────── */}
      <section data-animate style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Хамтдаа хүчтэй</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.9rem" }}>
              Захиалгаас төлбөр хүртэл — бүрэн автомат
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "440px", margin: "0 auto" }}>
              Онлайн дэлгүүр + AI Agent хослоход худалдааны бүх урсгал гараар ажиллахгүйгээр эргэлдэнэ.
            </p>
          </div>

          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
            {FLOW.map(f => (
              <div key={f.num} style={{ background: "var(--bg-white)", border: "1px solid var(--border)", borderRadius: "1.5rem", padding: "2rem 1.75rem" }}>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--navy)", background: "var(--bg-tint)", width: "40px", height: "40px", borderRadius: "11px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  {f.num}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.6rem", lineHeight: 1.3, color: "var(--text)" }}>{f.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Сэтгэгдэл</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Захиалагчдын сэтгэгдэл</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card card-glow" style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: "var(--gold)", fontSize: "0.85rem" }}>★</span>)}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "1.5rem" }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, flexShrink: 0, background: "var(--navy)", color: "white" }}>{t.av}</div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-light)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section id="faq" data-animate style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
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
          <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", padding: "4rem 3rem", textAlign: "center", background: "var(--navy)" }}>
            <div style={{ position: "relative", color: "white" }}>
              <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1.5rem", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}>Өнөөдөр эхэл</div>
              <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem", color: "white" }}>
                Бизнесийнхээ дараагийн<br />шатыг эхлүүлэх цаг
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.97rem", lineHeight: 1.65, maxWidth: "460px", margin: "0 auto 2.5rem" }}>
                30 минутын үнэгүй зөвлөгөөгөөр бизнестээ яг тохирсон шийдлийг олж мэдээрэй.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="https://app.mongolagent.mn/register" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.95rem 2rem", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", borderRadius: "0.75rem", background: "white", color: "var(--navy)", transition: "all 0.2s" }}>
                  Үнэгүй эхлэх →
                </Link>
                <Link href="tel:80952821" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.95rem 2rem", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", borderRadius: "0.75rem", background: "transparent", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)", transition: "all 0.2s" }}>
                  <IconPhone /> 80952821
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
