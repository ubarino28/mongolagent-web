import Link from "next/link";

/* ─── Icons ─── */
const IconChat = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconStore = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l1-5h16l1 5"/><path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/>
    <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M9 21v-6h6v6"/>
  </svg>
);
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

const PRODUCTS = [
  {
    tag: "Автоматжуулалт",
    icon: <IconChat />,
    title: "AI Agent",
    desc: "Facebook, Instagram мессенжерт холбогдсон AI ажилтан — хэрэглэгчтэй 24/7 Монгол хэлээр харилцаж, захиалга авч, QPay-аар төлбөр баталгаажуулна.",
    items: ["Facebook & Instagram chatbot", "Чат дотроос QPay захиалга, төлбөр", "Мэдлэгийн санд суурилсан, өөрөө суралцдаг"],
    href: "/ai",
    cta: "AI Agent үзэх",
  },
  {
    tag: "Цахим худалдаа",
    icon: <IconStore />,
    title: "Онлайн дэлгүүр",
    desc: "Shopify шиг — кодгүйгээр өөрийн онлайн дэлгүүрээ хормын дотор нээ. Бараа, захиалга, төлбөр, хүргэлт, домэйн бүгд нэг дор.",
    items: ["Drag-and-drop сайт бүтээгч", "QPay төлбөр + хүргэлт + өөрийн домэйн", "Захиалга, бараа, аналитик, хямдрал"],
    href: "/store",
    cta: "Онлайн дэлгүүр үзэх",
  },
];

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

      {/* ─── PRODUCTS (2 тэнцүү) ──────────────────────────── */}
      <section id="products" data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Хоёр шийдэл, нэг платформ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Бизнесээ ургуулах <span className="gradient-text">хоёр хүчирхэг хэрэгсэл</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "480px", margin: "0 auto", fontSize: "0.92rem", lineHeight: 1.7 }}>
              Аль нэгийг нь дангаар, эсвэл хоёуланг хослуулан ашиглаж болно. Эхлэхэд тань тохирсон шийдлээ сонго.
            </p>
          </div>

          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {PRODUCTS.map(p => (
              <div key={p.title} className="card card-glow" style={{ display: "flex", flexDirection: "column", padding: "2.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--navy)", color: "#fff", flexShrink: 0 }}>
                    {p.icon}
                  </div>
                  <div className="section-tag" style={{ display: "inline-flex", fontSize: "0.63rem" }}>{p.tag}</div>
                </div>

                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.6rem" }}>{p.title}</h3>
                <p style={{ color: "var(--text-mid)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{p.desc}</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
                  {p.items.map(item => <div key={item} className="check-item">{item}</div>)}
                </div>

                <Link href={p.href} className="btn-primary" style={{ marginTop: "auto", justifyContent: "center", fontSize: "0.9rem" }}>
                  {p.cta} <IconArrow />
                </Link>
              </div>
            ))}
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
