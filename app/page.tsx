import Link from "next/link";

const PLATFORMS = [
  { name: "Facebook",      color: "#1877F2", vb: "0 0 24 24",       path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { name: "Instagram",     color: "#E1306C", vb: "0 0 24 24",       path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { name: "QPay",          color: "#0066FF", vb: "0 0 24 24",       path: "M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" },
  { name: "Telegram",      color: "#26A5E4", vb: "0 0 24 24",       path: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" },
  { name: "Google Sheets", color: "#34A853", vb: "0 0 24 24",       path: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" },
  { name: "Shopify",       color: "#95BF47", vb: "0 0 24 24",       path: "M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" },
  { name: "GitHub",        color: "#e2e8f0", vb: "0 0 24 24",       path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
  { name: "Render",        color: "#46E3B7", vb: "0 0 15 18.667",   path: "M0 0h7.786C11.73 0 15 3.273 15 7.22c0 2.62-1.4 4.917-3.496 6.182L15 18.667H10.02l-3.184-4.8H4.8v4.8H0V0zm4.8 9.453h2.986c1.337 0 2.42-1.087 2.42-2.427 0-1.34-1.083-2.427-2.42-2.427H4.8v4.854z" },
  { name: "Vercel",        color: "#e2e8f0", vb: "0 0 24 22.526",   path: "M24 22.525H0l12-21.05 12 21.05z" },
];

const RESULTS = [
  { num: "Chatbot", label: "Хиймэл оюун ухаантай чатбот" },
  { num: "10 мин", label: "Агентаа бэлэн болгоход" },
  { num: "24/7", label: "Тасралтгүй ажиллах агент" },
  { num: "Автомат", label: "AI ажилтантай болоорой" },
];

const SERVICES = [
  {
    tag: "Мессенжер AI",
    icon: "💬",
    title: "AI Chatbot",
    desc: "Facebook Messenger, Instagram DM дээр Монгол хэлээр автоматаар хариулж, борлуулалт хийдэг.",
    items: ["Facebook & Instagram холболт", "Монгол хэлний дэмжлэг", "Мэдлэгийн сан суурилсан", "Хэрэглэгч хөтлөх flow"],
    result: "Өдөрт 200+ ижил асуултыг автоматаар шийдсэн",
    color: "#818cf8",
  },
  {
    tag: "Борлуулалт AI",
    icon: "🛒",
    title: "AI Sales Agent",
    desc: "Захиалга авч, QPay QR код илгээж, төлбөр баталгаажуулаад орлогыг автоматаар нэмнэ.",
    items: ["QPay төлбөрийн интеграц", "Автомат захиалга боловсруулалт", "Telegram мэдэгдэл", "Орлогын тайлан"],
    result: "30.5M₮ сарын орлого нэмсэн нэг жишээ клиент",
    color: "#34d399",
  },
  {
    tag: "Лид менежмент",
    icon: "🎯",
    title: "AI Lead Machine",
    desc: "Харилцагчийн мэдээллийг автоматаар цуглуулж, ангилаад, таны CRM-д бэлдэж өгнө.",
    items: ["Автомат лид цуглуулалт", "Статус хянах (CRM)", "Дагаж ажиллах сануулга", "Клиентийн аналитик"],
    result: "Шинэ лид бүрт автомат мэдэгдэл + дагаж ажиллах",
    color: "#fbbf24",
  },
  {
    tag: "Процесс AI",
    icon: "⚙️",
    title: "AI Automation",
    desc: "Захиалга, мэдэгдэл, тайлан, customer support зэрэг давтагдах ажлыг бүрэн автоматжуулна.",
    items: ["Workflow автоматжуулалт", "Олон суваг нэгтгэл", "API интеграц", "Custom AI agent"],
    result: "Ажилтны цагийн 60%+ хэмнэсэн клиент байна",
    color: "#a78bfa",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Consultation & Шинжилгээ",
    desc: "Бизнесийн онцлог, зорилго, workflow-г шинжилнэ. Тохирох AI шийдлийг тодорхойлно.",
  },
  {
    num: "02",
    title: "Тохируулга & Суурилуулалт",
    desc: "Системийг бизнест тохируулан тохиргоо хийнэ. Мэдлэгийн сан, prompt, интеграцийг бэлдэнэ.",
  },
  {
    num: "03",
    title: "Туршилт & Нэвтрүүлэлт",
    desc: "Нарийн туршиж, зохицуулсны дараа 3-7 хоногт амьд горимд нэвтрүүлнэ.",
  },
];

const CASE_METRICS = [
  { label: "Сарын нэмэлт орлого", value: "+₮12M" },
  { label: "Хэмнэсэн ажлын цаг", value: "40ц/сар" },
  { label: "Захиалга автоматжуулалт", value: "85%" },
  { label: "Нэвтрүүлсэн хугацаа", value: "5 хоног" },
];

const PLANS = [
  {
    name: "Starter",
    price: "₮390,000",
    period: "/сар",
    desc: "Жижиг бизнест зориулсан суурь AI шийдэл",
    features: ["Facebook Messenger chatbot", "Мэдлэгийн сан (50 Q&A)", "Лид менежмент", "Telegram мэдэгдэл", "Сарын тайлан"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₮790,000",
    period: "/сар",
    desc: "Өсч буй бизнест зориулсан бүрэн шийдэл",
    features: ["Starter багцийн бүх зүйл", "QPay төлбөрийн интеграц", "Instagram DM автоматжуулалт", "Мэдлэгийн сан (хязгааргүй)", "CRM интеграц", "Тэргүүлэх дэмжлэг"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Тохиролцоо",
    period: "",
    desc: "Том бизнест зориулсан custom шийдэл",
    features: ["Growth багцийн бүх зүйл", "Custom AI agent хөгжүүлэлт", "Олон суваг интеграц", "Dedicated менежер", "SLA баталгаа", "Onsite сургалт"],
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    text: "Шөнийн захиалгуудыг AI боловсруулдаг болсон. Нийт орлого 40% өсч, ажилтнуудын ачаалал мэдэгдэхүйц буурсан.",
    name: "Б.Оюунтунгалаг",
    role: "Kitty House Mongolia · Founder",
    av: "Б",
  },
  {
    text: "Өдөр бүр 200 гаруй ижил асуулт ирдэг байсан. Одоо AI бүгдийг шийдэж, бид чухал ажилдаа анхаарч чаддаг болсон.",
    name: "Д.Мөнхбаяр",
    role: "Кофе шоп · Эзэн",
    av: "Д",
  },
  {
    text: "QPay холболт хамгийн хэрэгтэй зүйл болсон. Хэрэглэгчид чат дотроос шууд төлдөг. Цуцлалт мэдэгдэхүйц буурсан.",
    name: "Э.Баярмаа",
    role: "Гоо сайхны салон · Эзэн",
    av: "Э",
  },
];

const FAQS = [
  { q: "Chatbot Монгол хэлийг бүрэн ойлгодог уу?", a: "Тийм. Кирилл болон латин үсгийн Монгол хэлийг, хэл яриаг (informal) ч мөн ойлгодог. Монгол хэлний контекст дээр тусгайлан сайжруулсан." },
  { q: "Нэвтрүүлэхэд хэр хугацаа шаардагдах вэ?", a: "Ихэнх тохиолдолд 3-7 хоног. Энгийн chatbot 3 хоногт, QPay болон бусад интеграцтай 5-7 хоногт бэлэн болдог." },
  { q: "Миний бизнесийн мэдээлэл аюулгүй юу?", a: "Бүх мэдээлэл шифрлэгдэж хадгалагдана. Гуравдагч этгээдтэй хуваалцахгүй. Европын GDPR стандартад нийцсэн." },
  { q: "Facebook Page байхгүй бол яах вэ?", a: "Бизнесийн Facebook Page үүсгэхэд тусалж болно. Page байгаа бол шууд холбоно. Ихэнхдээ 1 өдрийн дотод холбогддог." },
];

const wrap = { maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap5 = { maxWidth: "64rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap3 = { maxWidth: "48rem", margin: "0 auto", padding: "0 1.25rem" } as const;

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "4rem 0 5rem" }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.35,
          backgroundImage: "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Glow — left for text, right for mascot */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 55% 60% at 20% 40%, #6366f115 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 78% 50%, #8b5cf622 0%, #6366f115 40%, transparent 70%)" }} />

        <div style={{ ...wrap, position: "relative" }}>
          {/* Two-column grid */}
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>

            {/* ── Left: text ── */}
            <div>
              <div className="section-tag" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
                🇲🇳 Монголын #1 Agentic AI Platform
              </div>

              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
                Таны бизнест<br />
                <span className="gradient-text">цаг тутам ажилладаг</span><br />
                AI баг
              </h1>

              <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.75, maxWidth: "480px", marginBottom: "2.5rem" }}>
                Facebook, Instagram дээр автоматаар борлуулж, QPay-аар төлбөр авч, лид менежментийг бүрэн хийдэг. Монголын бизнест зориулсан premium AI платформ.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Агентаа бүтээх
                </Link>
                <Link href="#services" className="btn-outline" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Танилцуулга үзэх ↓
                </Link>
              </div>
            </div>

            {/* ── Right: mascot ── */}
            <div className="hero-mascot" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "460px" }}>
              {/* Outer glow blob */}
              <div style={{
                position: "absolute", width: "520px", height: "520px", borderRadius: "50%",
                background: "radial-gradient(ellipse at center, #6366f130 0%, #8b5cf622 45%, transparent 70%)",
                filter: "blur(32px)",
              }} />
              {/* Pulsing ring 1 */}
              <div className="mascot-ring" style={{
                position: "absolute", width: "460px", height: "460px", borderRadius: "50%",
                border: "1px solid #6366f135",
              }} />
              {/* Pulsing ring 2 */}
              <div className="mascot-ring" style={{
                position: "absolute", width: "380px", height: "380px", borderRadius: "50%",
                border: "1px solid #8b5cf628",
                animationDelay: "1s",
              }} />
              {/* Ground glow */}
              <div style={{
                position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
                width: "200px", height: "30px",
                background: "radial-gradient(ellipse at center, #6366f135 0%, transparent 70%)",
                filter: "blur(12px)",
              }} />
              {/* Floating dots */}
              <div style={{ position: "absolute", top: "80px", right: "80px", width: "8px", height: "8px", borderRadius: "50%", background: "#818cf8", opacity: 0.7, boxShadow: "0 0 10px #6366f1" }} />
              <div style={{ position: "absolute", top: "140px", left: "70px", width: "5px", height: "5px", borderRadius: "50%", background: "#a78bfa", opacity: 0.5 }} />
              <div style={{ position: "absolute", bottom: "120px", right: "70px", width: "6px", height: "6px", borderRadius: "50%", background: "#6366f1", opacity: 0.6, boxShadow: "0 0 8px #6366f1" }} />
              {/* Mascot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mascot.png"
                alt="Mongol Agent AI Mascot"
                className="mascot-float"
                style={{ width: "440px", maxWidth: "90%", position: "relative", zIndex: 2, filter: "drop-shadow(0 20px 40px #6366f140) drop-shadow(0 0 60px #8b5cf625)" }}
              />
              {/* Chat bubble decoration */}
              <div style={{
                position: "absolute", top: "60px", right: "50px", zIndex: 3,
                background: "var(--surface2)", border: "1px solid var(--border2)",
                borderRadius: "1rem 1rem 1rem 0.25rem",
                padding: "0.6rem 0.9rem",
                fontSize: "0.75rem", color: "var(--text-mid)",
                boxShadow: "0 4px 20px #00000040",
              }}>
                💬 Сайн байна уу?
              </div>
              <div style={{
                position: "absolute", bottom: "110px", left: "30px", zIndex: 3,
                background: "var(--surface2)", border: "1px solid var(--border2)",
                borderRadius: "1rem 1rem 0.25rem 1rem",
                padding: "0.6rem 0.9rem",
                fontSize: "0.75rem", color: "var(--text-mid)",
                boxShadow: "0 4px 20px #00000040",
              }}>
                ✅ Захиалга баталгаажлаа!
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PLATFORMS MARQUEE ────────────────────────────── */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "1.75rem 0" }}>
        <p style={{ textAlign: "center", fontSize: "0.68rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "1.5rem" }}>
          Интеграцтай платформууд
        </p>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6rem", zIndex: 10, background: "linear-gradient(90deg, var(--bg), transparent)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "6rem", zIndex: 10, background: "linear-gradient(-90deg, var(--bg), transparent)", pointerEvents: "none" }} />
          <div className="marquee-inner">
            {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.65rem", margin: "0 2.5rem", flexShrink: 0 }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: p.color + "18", border: `1px solid ${p.color}30`,
                }}>
                  <svg viewBox={p.vb} fill={p.color} width="16" height="16">
                    <path d={p.path} />
                  </svg>
                </div>
                <span style={{ fontSize: "0.88rem", color: "var(--text-mid)", whiteSpace: "nowrap", fontWeight: 600 }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── RESULTS ──────────────────────────────────────── */}
      <section style={{ padding: "4rem 0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="md:grid-cols-4">
            {RESULTS.map(r => (
              <div key={r.label} style={{ textAlign: "center", padding: "1.5rem", borderRadius: "1rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="stat-num" style={{ marginBottom: "0.5rem" }}>{r.num}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-light)", lineHeight: 1.4 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────── */}
      <section id="services" style={{ padding: "5rem 0", background: "var(--surface)" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Үйлчилгээ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Бизнесийн хэрэгцээнд тохирсон<br />
              <span className="gradient-text">AI шийдлүүд</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "440px", margin: "0 auto", fontSize: "0.92rem" }}>
              Нэг платформоос — борлуулалт, харилцагч, лид, автоматжуулалт бүгд нэг дор.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.25rem" }} className="md:grid-cols-2">
            {SERVICES.map(s => (
              <div key={s.title} className="card card-glow" style={{ padding: "1.75rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", borderRadius: "50%", background: `radial-gradient(circle, ${s.color}12, transparent)`, transform: "translate(30%, -30%)", pointerEvents: "none" }} />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div>
                    <div className="section-tag" style={{ display: "inline-flex", marginBottom: "0.6rem", background: `${s.color}12`, borderColor: `${s.color}28`, color: s.color }}>
                      {s.tag}
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{s.title}</h3>
                  </div>
                  <span style={{ fontSize: "1.8rem" }}>{s.icon}</span>
                </div>

                <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{s.desc}</p>

                <div style={{ marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {s.items.map(item => (
                    <div key={item} className="check-item">{item}</div>
                  ))}
                </div>

                <div style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem", background: `${s.color}0a`, border: `1px solid ${s.color}20` }}>
                  <p style={{ fontSize: "0.78rem", color: s.color, fontWeight: 500 }}>📈 {s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────── */}
      <section style={{ padding: "5rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Процесс</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              3 алхамд ажилладаг болно
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "2rem" }} className="md:grid-cols-3">
            {PROCESS.map(p => (
              <div key={p.num}>
                <div style={{ width: "3.25rem", height: "3.25rem", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", fontSize: "1rem", fontWeight: 800, letterSpacing: "-0.02em", background: "linear-gradient(135deg, #6366f118, #8b5cf618)", border: "1px solid #6366f128", color: "var(--primary2)" }}>
                  {p.num}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY ───────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--surface)" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Case Study</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Бодит үр дүн</h2>
          </div>

          <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--border2)", background: "var(--surface2)" }}>
            <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--border)", background: "linear-gradient(135deg, #6366f108, transparent)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", background: "var(--surface)", border: "1px solid var(--border2)" }}>🐱</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>Kitty House Mongolia</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-light)" }}>Муурны бүтээгдэхүүн</div>
                </div>
              </div>
              <div className="section-tag" style={{ background: "#10b98112", borderColor: "#10b98128", color: "#34d399", display: "inline-flex" }}>Амжилттай</div>
            </div>

            <div style={{ padding: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem", marginBottom: "1.5rem" }} className="md:grid-cols-2">
                <div>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-light)", marginBottom: "0.5rem" }}>Асуудал</div>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.65 }}>Өдөр бүр 150+ ижил асуулт, шөнийн захиалга хаагдах асуудал</p>
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-light)", marginBottom: "0.5rem" }}>Шийдэл</div>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.65 }}>Facebook Messenger AI chatbot + QPay автомат төлбөр</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }} className="md:grid-cols-4">
                {CASE_METRICS.map(m => (
                  <div key={m.label} style={{ borderRadius: "0.75rem", padding: "1rem", textAlign: "center", background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#a78bfa", marginBottom: "0.25rem" }}>{m.value}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-light)", lineHeight: 1.3 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ borderRadius: "0.875rem", padding: "1.25rem 1.5rem", background: "#6366f10c", border: "1px solid #6366f120" }}>
                <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", fontStyle: "italic", lineHeight: 1.6 }}>
                  "Шөнийн захиалгуудыг AI боловсруулдаг болсон. Орлого мэдэгдэхүйц өссөн."
                </p>
                <p style={{ marginTop: "0.6rem", fontSize: "0.78rem", color: "var(--text-light)", fontWeight: 500 }}>— Б.Оюунтунгалаг, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────── */}
      <section id="pricing" style={{ padding: "5rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Үнэ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Бизнестэй тохирсон <span className="gradient-text">ил тод үнэ</span>
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.875rem" }}>Далд төлбөргүй. Хэрэгцээнийхээ дагуу багцаа сонгоно.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.25rem" }} className="md:grid-cols-3">
            {PLANS.map(plan => (
              <div key={plan.name} style={{ position: "relative", borderRadius: "1.25rem", padding: "1.75rem", display: "flex", flexDirection: "column", background: plan.highlight ? "linear-gradient(160deg, #13132a, #0d0d1f)" : "var(--surface)", border: plan.highlight ? "1px solid #6366f155" : "1px solid var(--border)", boxShadow: plan.highlight ? "0 0 60px #6366f118" : "none" }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: "-0.875rem", left: "50%", transform: "translateX(-50%)", padding: "0.2rem 1rem", borderRadius: "100px", fontSize: "0.72rem", fontWeight: 700, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", whiteSpace: "nowrap" }}>
                    Хамгийн алдартай
                  </div>
                )}

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "0.25rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: plan.price === "Тохиролцоо" ? "1.6rem" : "2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>{plan.price}</span>
                    {plan.period && <span style={{ fontSize: "0.82rem", color: "var(--text-light)", marginBottom: "0.3rem" }}>{plan.period}</span>}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{plan.desc}</p>
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
                  {plan.features.map(f => (
                    <div key={f} className="check-item">{f}</div>
                  ))}
                </div>

                <Link href={plan.name === "Enterprise" ? "tel:80952821" : "https://app.mongolagent.mn/register"}
                  className={plan.highlight ? "btn-primary" : "btn-outline"}
                  style={{ display: "flex", justifyContent: "center" }}>
                  {plan.name === "Enterprise" ? "Холбоо барих" : "Эхлэх →"}
                </Link>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.78rem", color: "var(--text-light)" }}>
            Тохиромжтой багцаа олохгүй байна уу?{" "}
            <Link href="tel:80952821" style={{ color: "#818cf8", textDecoration: "none" }}>80952821</Link>-д залгана уу.
          </p>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--surface)" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Сэтгэгдэл</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Клиентүүд яриад байна</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.25rem" }} className="md:grid-cols-3">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card card-glow" style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: "#f59e0b", fontSize: "0.85rem" }}>★</span>)}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "1.5rem" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, flexShrink: 0, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white" }}>
                    {t.av}
                  </div>
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
      <section style={{ padding: "5rem 0" }}>
        <div style={wrap3}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Түгээмэл асуултууд</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderRadius: "1rem", padding: "1.5rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "0.4rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", background: "#6366f118", color: "var(--primary2)", fontSize: "0.65rem", fontWeight: 700 }}>Q</div>
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
      <section style={{ padding: "5rem 0 6rem" }}>
        <div style={wrap3}>
          <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", padding: "4rem 3rem", textAlign: "center", background: "linear-gradient(135deg, #0d0d22 0%, #13132a 50%, #0d0d22 100%)", border: "1px solid #6366f130" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, #6366f115 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>Өнөөдөр эхэл</div>
              <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                Бизнесийнхээ <span className="gradient-text">AI хувьсгалыг</span><br />
                эхлүүлэх цаг болсон
              </h2>
              <p style={{ color: "var(--text-mid)", fontSize: "0.97rem", lineHeight: 1.65, maxWidth: "440px", margin: "0 auto 2.5rem" }}>
                30 минутын үнэгүй consultation-аар бизнестэй яг тохирсон AI шийдлийг олж мэдэ. Хэрэгжүүлэлт 3 хоногоос эхэлнэ.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ padding: "0.95rem 2rem", fontSize: "0.95rem" }}>
                  Үнэгүй demo авах →
                </Link>
                <Link href="tel:80952821" className="btn-outline" style={{ padding: "0.95rem 2rem", fontSize: "0.95rem" }}>
                  📞 80952821
                </Link>
              </div>
              <p style={{ marginTop: "2rem", fontSize: "0.75rem", color: "var(--text-light)" }}>
                Нэвтрүүлснийхээ дараа ч тасралтгүй дэмжлэг · Нуугдмал нэмэлт төлбөргүй
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
