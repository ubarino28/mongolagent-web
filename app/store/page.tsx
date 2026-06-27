import Link from "next/link";

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
