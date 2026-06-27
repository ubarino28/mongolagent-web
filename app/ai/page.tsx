import Link from "next/link";
import HeroChatThread from "@/components/HeroChatThread";
import PricingSection from "@/components/PricingSection";
import AIChatDemo from "@/components/AIChatDemo";
import BuilderAIDemo from "@/components/BuilderAIDemo";
import DashboardSection from "@/components/DashboardSection";

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconTrend = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMapPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CARD_BG = "linear-gradient(150deg, #16314F 0%, #0E2540 55%, #0A1B2E 100%)";

const SERVICES = [
  {
    tag: "Мессенжер AI",
    icon: <IconChat />,
    title: "AI Chatbot",
    desc: "Facebook Messenger, Instagram DM дээр Монгол хэлээр автоматаар хариулж, борлуулалт хийдэг.",
    items: ["Facebook & Instagram холболт", "Монгол хэлний дэмжлэг", "Мэдлэгийн сан суурилсан", "Хэрэглэгч хөтлөх flow"],
    result: "Өдөрт 200+ ижил асуултыг автоматаар шийдсэн",
    color: "#143a6b",
  },
  {
    tag: "Борлуулалт AI",
    icon: <IconTrend />,
    title: "AI Sales Agent",
    desc: "Захиалга авч, QPay QR код илгээж, төлбөр баталгаажуулаад орлогыг автоматаар нэмнэ.",
    items: ["QPay төлбөрийн интеграц", "Автомат захиалга боловсруулалт", "Telegram мэдэгдэл", "Орлогын тайлан"],
    result: "30.5M₮ сарын орлого нэмсэн нэг жишээ клиент",
    color: "#34d399",
  },
  {
    tag: "Лид менежмент",
    icon: <IconUsers />,
    title: "AI Lead Machine",
    desc: "Харилцагчийн мэдээллийг автоматаар цуглуулж, ангилаад, таны CRM-д бэлдэж өгнө.",
    items: ["Автомат лид цуглуулалт", "Статус хянах (CRM)", "Дагаж ажиллах сануулга", "Клиентийн аналитик"],
    result: "Шинэ лид бүрт автомат мэдэгдэл + дагаж ажиллах",
    color: "#c8a24b",
  },
  {
    tag: "Процесс AI",
    icon: <IconZap />,
    title: "AI Automation",
    desc: "Захиалга, мэдэгдэл, тайлан, customer support зэрэг давтагдах ажлыг бүрэн автоматжуулна.",
    items: ["Workflow автоматжуулалт", "Олон суваг нэгтгэл", "API интеграц", "Custom AI agent"],
    result: "Ажилтны цагийн 60%+ хэмнэсэн клиент байна",
    color: "#2b5a8f",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Бүртгэл хийнэ",
    desc: "app.mongolagent.mn дээр бүртгэл хийнэ. Нэр, имэйл, нууц үг — дууслаа. Код шаардахгүй.",
    duration: "2 минут",
  },
  {
    num: "02",
    title: "Builder AI-д хариулна",
    desc: "8 энгийн асуултад хариулна. AI чинь мэдлэгийн сан, persona, хариултаа автоматаар үүсгэнэ.",
    duration: "5 минут",
  },
  {
    num: "03",
    title: "Facebook & Instagram холбоод live",
    desc: "Facebook болон Instagram page-аа холбоно. Тэр даруй хэрэглэгчтэй Монгол хэлээр харилцаж эхэлнэ.",
    duration: "3 минут",
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
  { q: "AI Chatbot сургахад хэр удах вэ?", a: "Та брэнд/дэлгүүрийнхаа танилцуулгыг AI мэдлэгийн санд өгснөөр шууд ажиллаж эхлэнэ." },
  { q: "Нэвтрүүлэхэд хэр хугацаа шаардагдах вэ?", a: "30 минутын дотор. Бэлэн загвараар AI Agent-аа өөрөө угсарч, Facebook/Instagram болон QPay-тайгаа холбоод тэр даруй захиалга авч эхэлнэ." },
  { q: "Миний бизнесийн мэдээлэл аюулгүй юу?", a: "Бүх мэдээлэл шифрлэгдэж хадгалагдана. Гуравдагч этгээдтэй хуваалцахгүй. Европын GDPR стандартад нийцсэн." },
  { q: "Facebook Page байхгүй бол яах вэ?", a: "Бизнесийн Facebook Page үүсгэхэд тусалж болно. Page байгаа бол шууд холбоно." },
  { q: "QPay merchant яаж болох вэ?", a: "Та төлбөр хүлээн авах дансны мэдээллээ dashboard дээрх QPay merchant хуудсан дээр бөглөснөөр, хэрэглэгч QPay ашиглан төлбөр төлөхөд шууд таны дансанд орно. (Төлбөр Mongol Agent-аар дамжихгүй)" },
];

const wrap = { maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap5 = { maxWidth: "64rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap3 = { maxWidth: "48rem", margin: "0 auto", padding: "0 1.25rem" } as const;

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "6rem 0 7rem", background: "var(--hero-gradient)" }}>

        <div style={{ ...wrap, maxWidth: "90rem", position: "relative" }}>
          <div style={{ position: "absolute", top: "-30%", right: "-12%", width: "62%", height: "125%", background: "radial-gradient(circle, rgba(43,90,143,0.1), transparent 62%)", pointerEvents: "none" }} />
          {/* Two-column grid */}
          <div className="hero-store-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "0.82fr 1.42fr", gap: "3.25rem", alignItems: "center" }}>

            {/* ── Left: text ── */}
            <div className="hero-store-copy">
              <h1 style={{ fontSize: "clamp(2.4rem, 4.8vw, 3.9rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
                <span style={{ display: "block", color: "var(--navy-dark)" }}>Бизнесийн харилцааг</span>
                <span style={{ display: "block", color: "var(--text-secondary)" }}>автоматжуулна.</span>
              </h1>

              <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.8, maxWidth: "460px", marginBottom: "2.5rem" }}>
                Facebook, Instagram мессенжерт холбогдсон AI — таны хэрэглэгчтэй 24/7 Монгол хэлээр харилцаж, захиалга авч, QPay-аар төлбөр баталгаажуулна.
              </p>

              {/* CTAs */}
              <div className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Агентаа бүтээх
                </Link>
                <a href="#services" className="btn-outline" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Танилцуулга үзэх ↓
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem 1.75rem", marginTop: "2.25rem" }}>
                {["Facebook & Instagram", "Монгол хэл", "QPay төлбөр"].map((t) => (
                  <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", fontSize: "0.86rem", color: "var(--text-mid)", fontWeight: 500 }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: device cluster (AI чат + мэдэгдэл) ── */}
            <div className="hero-cluster" style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", gap: "1.25rem" }}>

              {/* MacBook — AI чатлаж буй харилцаа */}
              <div className="hero-laptop" style={{ position: "relative", flex: "1 1 0", minWidth: 0 }}>
                <div style={{ position: "relative", background: "linear-gradient(#23242a, #16171b)", borderRadius: "16px 16px 7px 7px", padding: "10px 10px 12px", boxShadow: "0 36px 70px rgba(10,27,46,0.26)" }}>
                  <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 88, height: 15, background: "#16171b", borderRadius: "0 0 9px 9px", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: 4, height: 4, borderRadius: "50%", background: "#2c2d33" }} /></div>
                  <div style={{ position: "relative", borderRadius: "7px", overflow: "hidden", background: "#fff", aspectRatio: "16 / 9", display: "flex", flexDirection: "column" }}>
                    {/* chat header */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0.6rem 1rem", borderBottom: "1px solid var(--border)", background: "#fff" }}>
                      <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 800, fontSize: "0.8rem" }}>М</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--navy-dark)" }}>Миний бизнес</div>
                        <div style={{ fontSize: "0.62rem", color: "#16a34a", fontWeight: 600 }}>● AI Agent хариулж байна</div>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0084FF"><path d="M12 0C5.37 0 0 4.97 0 11.11c0 3.5 1.74 6.62 4.47 8.66V24l4.09-2.25c1.09.3 2.25.47 3.44.47 6.63 0 12-4.97 12-11.11C24 4.97 18.63 0 12 0zm1.19 14.96l-3.06-3.26-5.97 3.26 6.56-6.97 3.13 3.26 5.9-3.26-6.59 6.97z" /></svg>
                    </div>
                    {/* thread — мессеж ар араасаа гарч, доош smooth scroll хийнэ (client) */}
                    <HeroChatThread />
                  </div>
                </div>
                {/* hinge + base */}
                <div style={{ height: 7, margin: "0 3.5%", background: "linear-gradient(#1c1d22, #0c0d10)" }} />
                <div style={{ position: "relative", height: 16, margin: "0 -8%", background: "linear-gradient(180deg, #56575f 0%, #43444c 15%, #2c2d33 52%, #161719 100%)", borderRadius: "0 0 13px 13px", boxShadow: "0 26px 40px rgba(0,0,0,0.3)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1.5, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22) 14%, rgba(255,255,255,0.22) 86%, transparent)" }} />
                  <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 98, height: 7, background: "linear-gradient(#15161a, #25262c)", borderRadius: "0 0 10px 10px" }} />
                </div>
              </div>

              {/* iPhone — AI-н авсан захиалгын мэдэгдэл */}
              <div className="cluster-phone" style={{ order: -1, flex: "0 0 auto", width: 194, marginBottom: 14 }}>
                <div style={{ position: "relative", borderRadius: 34, background: "linear-gradient(150deg, #2a2b30, #0c0d10)", padding: 5, boxShadow: "0 34px 70px rgba(10,27,46,0.5)" }}>
                  <div style={{ position: "absolute", left: -2, top: 78, width: 2.5, height: 22, background: "#3a3b40", borderRadius: 2 }} />
                  <div style={{ position: "absolute", left: -2, top: 108, width: 2.5, height: 22, background: "#3a3b40", borderRadius: 2 }} />
                  <div style={{ position: "absolute", right: -2, top: 96, width: 2.5, height: 34, background: "#3a3b40", borderRadius: 2 }} />
                  <div style={{ position: "relative", borderRadius: 29, overflow: "hidden", background: "linear-gradient(165deg, #1E436E 0%, #123255 40%, #0A1E36 100%)", aspectRatio: "192/406" }}>
                    <div style={{ position: "absolute", top: "-12%", left: "50%", transform: "translateX(-50%)", width: "130%", height: "52%", background: "radial-gradient(circle, rgba(120,170,230,0.3), transparent 64%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(7,17,32,0.4) 100%)", pointerEvents: "none" }} />
                    <div style={{ position: "relative", height: "100%", padding: "9px 11px 12px", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff", fontSize: 9.5, fontWeight: 600, padding: "0 4px" }}>
                        <span>10:09</span>
                        <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                          <svg width="14" height="9" viewBox="0 0 18 12" fill="#fff"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 1.5 }}><span style={{ width: 16, height: 8.5, border: "1px solid rgba(255,255,255,0.75)", borderRadius: 2.5, padding: 1.3, display: "inline-flex" }}><span style={{ flex: 1, background: "#fff", borderRadius: 1 }} /></span></span>
                        </span>
                      </div>
                      <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 62, height: 18, background: "#000", borderRadius: 11 }} />
                      <div style={{ textAlign: "center", color: "#fff", marginTop: 16 }}>
                        <div style={{ fontSize: 10, opacity: 0.88, fontWeight: 500 }}>Даваа, 6-р сарын 15</div>
                        <div style={{ fontSize: 46, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.04, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>10:10</div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 15 }}>
                        {[
                          { ch: "Facebook", p: "+189,000₮", n: "#34", hot: true },
                          { ch: "Instagram", p: "+144,320₮", n: "#33" },
                          { ch: "Messenger", p: "+745,930₮", n: "#32" },
                        ].map((o) => (
                          <div key={o.n} className="order-notif" style={{ background: o.hot ? "rgba(255,255,255,0.26)" : "rgba(255,255,255,0.14)", borderRadius: 12, padding: "8px 11px", display: "flex", gap: 9, alignItems: "center", border: o.hot ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.12)", boxShadow: o.hot ? "0 8px 20px rgba(0,0,0,0.22)" : "none" }}>
                            <div style={{ width: 24, height: 24, borderRadius: 7, background: "rgba(255,255,255,0.28)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                                <span style={{ fontSize: 9.5, color: "#fff", fontWeight: 700, whiteSpace: "nowrap" }}>AI Agent · {o.n}</span>
                                <span style={{ fontSize: 7, color: "rgba(255,255,255,0.65)", flexShrink: 0 }}>1 мин</span>
                              </div>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6, marginTop: 2 }}>
                                <span style={{ fontSize: 8.5, color: "#3ddc84", fontWeight: 700, whiteSpace: "nowrap" }}>● {o.ch}</span>
                                <span style={{ fontSize: 9.5, color: "#fff", fontWeight: 800, whiteSpace: "nowrap", letterSpacing: "-0.02em", flexShrink: 0 }}>{o.p}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: "auto" }}>
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


      {/* ─── WHY US ───────────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Зүгээр нэг chatbot биш —{" "}
              <span className="gradient-text">таны AI ажилтан</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "460px", margin: "0 auto", fontSize: "0.92rem", lineHeight: 1.7 }}>
              Захиалга авах, төлбөр баталгаажуулах, lead цуглуулах, хүнд шилжүүлэх — бүгдийг нэг тохируулгаар автоматжуулна.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="why-grid stagger">
            {[
              {
                badge: "Builder AI",
                icon: "⚡",
                title: "8 асуулт хариулахад л бэлэн",
                desc: "Бизнесийнхээ талаар 8 асуултад хариулаад л — Builder AI үлдсэн бүгдийг хийнэ. Мэдлэгийн сан, persona, хариултын загвар автоматаар үүснэ.",
              },
              {
                badge: "QPay интеграц",
                icon: "💳",
                title: "Чат дотроос захиалга авч, дансандаа шууд авна",
                desc: "Хэрэглэгч Messenger-т захиалга өгмөгц AI автоматаар QPay QR явуулна. Төлбөр шууд таны дансанд орно.",
              },
              {
                badge: "+1 → DM автомат",
                icon: "🎯",
                title: "Comment бүрийг боломж болгоно",
                desc: "Facebook постод '+1' гэж бичсэн хэрэглэгч бүрт автоматаар DM явна. Viral пост дээр ч зардал бараг $0.",
              },
              {
                badge: "Мэдлэгийн сан",
                icon: "📚",
                title: "Таны брэндийн дуу хоолойгоор хариулна",
                desc: "Бүтээгдэхүүн, үнэ, ажлын цаг, FAQ — бүгдийг мэдлэгийн санд оруулна. AI таны мэдлэгийн хүрээнд л хариулж, буруу мэдээлэл өгөхгүй.",
              },
              {
                badge: "Facebook + Instagram",
                icon: "📱",
                title: "Хоёр сувгаа нэг дороос хянана",
                desc: "Facebook Messenger болон Instagram DM — хоёуланд нэг AI ажилтан. Мессеж, захиалга, lead, тайлан бүгдийг нэг dashboard-аас харна.",
              },
              {
                badge: "Self-learning AI",
                icon: "🧠",
                title: "Өөрөө өөрийгөө сургадаг AI",
                desc: "Таны бизнесийн чат бүрийг дүн шинжилгээ хийж, хариултаа өдөр бүр сайжруулна. Хэрэглэгчийн асуулт, зан төлөвт суурилан тасралтгүй хөгжинө.",
              },
            ].map(f => (
              <div key={f.title} style={{
                borderRadius: "1.25rem", padding: "1.75rem",
                background: CARD_BG, border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", flexDirection: "column", gap: "0.85rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.25rem",
                  }}>
                    {f.icon}
                  </div>
                  <span style={{
                    fontSize: "0.63rem", fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.08em", color: "#9DC0E8",
                    background: "rgba(157,192,232,0.12)", border: "1px solid rgba(157,192,232,0.22)",
                    padding: "0.2rem 0.6rem", borderRadius: "100px",
                  }}>
                    {f.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: "0.97rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#fff", lineHeight: 1.35 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUILDER AI DEMO ──────────────────────────────── */}
      <BuilderAIDemo />

      {/* ─── AI CHAT DEMO ─────────────────────────────────── */}
      <AIChatDemo />

      {/* ─── DASHBOARD SECTION ────────────────────────────── */}
      <DashboardSection />

      {/* ─── PRICING ──────────────────────────────────────── */}
      <PricingSection />

      {/* ─── SERVICES ─────────────────────────────────────── */}
      <section id="services" data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Бизнесийн хэрэгцээнд тохирсон<br />
              <span className="gradient-text">AI шийдлүүд</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "440px", margin: "0 auto", fontSize: "0.92rem" }}>
              Нэг платформоос — борлуулалт, харилцагч, лид, автоматжуулалт бүгд нэг дор.
            </p>
          </div>

          <div className="services-grid stagger" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {SERVICES.map(s => (
              <div key={s.title} className="card-glow" style={{
                position: "relative", overflow: "hidden", borderRadius: "1.25rem",
                background: "var(--surface2)", border: "1px solid var(--border2)",
                padding: "2rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                    background: "var(--surface3)", border: "1px solid var(--border)", flexShrink: 0,
                    color: "var(--text-mid)",
                  }}>
                    {s.icon}
                  </div>
                  <div className="section-tag" style={{ display: "inline-flex", fontSize: "0.65rem" }}>
                    {s.tag}
                  </div>
                </div>

                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.65rem" }}>{s.title}</h3>
                <p style={{ color: "var(--text-mid)", fontSize: "0.84rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{s.desc}</p>

                <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.25rem" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1.5rem" }}>
                  {s.items.map(item => (
                    <div key={item} className="check-item">{item}</div>
                  ))}
                </div>

                <div style={{ borderRadius: "0.65rem", padding: "0.7rem 1rem", background: "var(--surface3)", border: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text-light)", flexShrink: 0 }} />
                  <p style={{ fontSize: "0.78rem", color: "var(--text-mid)", fontWeight: 500, lineHeight: 1.4 }}>{s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── PROCESS ──────────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div style={{ ...wrap5, position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              10 минутад AI ажилтан бэлэн
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto" }}>
              Бүртгэлээс Facebook холболт хүртэл — кодгүй, суулгалтгүй, шууд ажиллана
            </p>
          </div>

          <div style={{ position: "relative" }}>
            {/* Connector line */}
            <div className="process-connector" style={{
              position: "absolute", top: "3.35rem",
              left: "calc(16.66% + 2.25rem)", right: "calc(16.66% + 2.25rem)",
              height: "1px",
              background: "var(--border2)",
              pointerEvents: "none", zIndex: 0,
            }} />

            <div className="process-grid stagger" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", position: "relative", zIndex: 1 }}>
              {PROCESS.map((p, i) => (
                <div key={p.num} style={{
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "1.5rem", padding: "2rem 1.75rem",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}>
                  {/* Icon */}
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: "var(--surface2)", border: "1px solid var(--border2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text)", marginBottom: "1.25rem",
                  }}>
                    {i === 0 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                      </svg>
                    )}
                  </div>

                  <h3 style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.6rem", lineHeight: 1.3, color: "var(--text)" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.84rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {p.desc}
                  </p>

                  {/* Duration */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontSize: "0.7rem", fontWeight: 600, color: "var(--text-light)",
                    background: "var(--surface2)", border: "1px solid var(--border)",
                    borderRadius: "100px", padding: "0.25rem 0.75rem",
                  }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--border2)", display: "inline-block", flexShrink: 0 }}/>
                    {p.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Захиалагчдын сэтгэгдэл</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="testimonials-grid stagger">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card card-glow" style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: "var(--gold)", fontSize: "0.85rem" }}>★</span>)}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "1.5rem" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, flexShrink: 0, background: "var(--accent)", color: "white" }}>
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
      <section id="faq" data-animate style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div style={wrap3}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Түгээмэл асуултууд</h2>
          </div>

          <div className="stagger" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderRadius: "1rem", padding: "1.5rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "0.4rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", background: "var(--surface3)", color: "var(--text-mid)", fontSize: "0.65rem", fontWeight: 700 }}>Q</div>
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
          <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", padding: "4rem 3rem", textAlign: "center", background: "var(--accent)", border: "none" }}>
            <div style={{ position: "relative", color: "white" }}>
              <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem", color: "white" }}>
                Бизнесийнхээ AI хувьсгалыг<br />
                эхлүүлэх цаг болсон
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.97rem", lineHeight: 1.65, maxWidth: "440px", margin: "0 auto 2.5rem" }}>
                30 минутын үнэгүй consultation-аар бизнестээ яг тохирсон AI шийдлийг олж мэдээрэй.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="https://app.mongolagent.mn/register" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.95rem 2rem", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", borderRadius: "0.75rem", background: "white", color: "var(--accent)", transition: "all 0.2s" }}>
                  Агентаа бүтээх →
                </Link>
                <Link href="tel:80952821" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.95rem 2rem", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", borderRadius: "0.75rem", background: "transparent", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)", transition: "all 0.2s" }}>
                  <IconPhone /> 80952821
                </Link>
              </div>
              <p style={{ marginTop: "2rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
                Нэвтрүүлснийхээ дараа ч тасралтгүй дэмжлэг · Нуугдмал нэмэлт төлбөргүй
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
