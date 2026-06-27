import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Бидний тухай — Түрүү AI" };

const wrap = { maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap5 = { maxWidth: "64rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap3 = { maxWidth: "48rem", margin: "0 auto", padding: "0 1.25rem" } as const;

const VALUES = [
  {
    icon: "⚡",
    title: "Хурдан нэвтрүүлэлт",
    desc: "8 асуулт хариулахад л AI ажилтан бэлэн болно. Долоо хоногоос дэмжихгүй — бизнес тань хүлээхгүй.",
  },
  {
    icon: "🇲🇳",
    title: "Монголд зориулсан",
    desc: "Монгол хэл, QPay, Facebook — Монголын бизнесийн бодит хэрэгцээнд тохируулсан шийдэл. Гадаадын загвар биш.",
  },
  {
    icon: "📈",
    title: "Бодит үр дүн",
    desc: "Захиалга нэмэгдэх, зардал буурах, цаг хэмнэх — тоо баримтаар хэмждэг үр дүн гаргах нь манай зорилго.",
  },
  {
    icon: "🤝",
    title: "Урт хугацааны түнш",
    desc: "Нэг удаа тохируулаад орхихгүй. Бизнес таны өсөлттэй хамт AI шийдлийг тасралтгүй сайжруулна.",
  },
];

const STATS = [
  { num: "200+", label: "бизнес ашигладаг" },
  { num: "1M+", label: "мессеж боловсруулсан" },
  { num: "24/7", label: "тасралтгүй ажилладаг" },
  { num: "7 хоног", label: "нэвтрүүлэх хугацаа" },
];

const STACK = [
  "OpenAI GPT-4o", "Facebook Messenger API", "Instagram Graph API",
  "QPay", "Next.js", "Node.js", "PostgreSQL", "Prisma",
  "Telegram API", "Render", "Vercel", "Supabase",
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "6rem 0 5rem" }}>
        <div style={{ ...wrap3, textAlign: "center" }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
            Бидний тухай
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Монголын бизнесийг{" "}
            <span className="gradient-text">AI-аар хүчирхэгжүүлнэ</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Түрүү AI нь жижиг, дунд бизнесүүдэд хурдан, хямд, бодит үр дүнтэй AI chatbot шийдэл хүргэхийн тулд байгуулагдсан.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://app.mongolagent.mn/register" className="btn-primary">
              Үнэгүй эхлэх →
            </Link>
            <a href="https://m.me/turuuai" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Холбоо барих
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "3rem 0" }}>
        <div style={wrap}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem",
          }}>
            {STATS.map(s => (
              <div key={s.label} style={{
                textAlign: "center", padding: "1.75rem 1rem",
                borderRadius: "1rem", background: "var(--surface2)",
                border: "1px solid var(--border2)",
              }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-light)", marginTop: "0.4rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ padding: "6rem 0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Манай зорилт</div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                AI технологи — зөвхөн<br />
                <span className="gradient-text">том компаниудынх биш</span>
              </h2>
              <p style={{ color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.85, marginBottom: "1rem" }}>
                Монголын ресторан, дэлгүүр, гоо сайхны салон, клиник — өдөр бүр ижил асуулт хариулж, захиалга авч, хүргэлт зохицуулдаг эзэд байдаг.
              </p>
              <p style={{ color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.85 }}>
                Тэдэнд зориулж 8 асуулт хариулахад л бэлэн болдог, QPay-тэй холбогдсон, Монгол хэлний AI ажилтан бий болгох нь Түрүү AI-ийн зорилго.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { emoji: "😩", before: "Өдөрт 100+ ижил асуулт гараараа хариулна" },
                { emoji: "😓", before: "Шөнийн захиалга дутуу, орлого алдана" },
                { emoji: "😤", before: "Ажилтан байхгүй үед хэрэглэгч хариулт авахгүй" },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: "1rem 1.25rem", borderRadius: "0.875rem",
                  background: "var(--surface2)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", gap: "0.875rem",
                  fontSize: "0.85rem", color: "var(--text-mid)",
                }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.emoji}</span>
                  <span>{item.before}</span>
                </div>
              ))}
              <div style={{
                padding: "1rem 1.25rem", borderRadius: "0.875rem",
                background: "linear-gradient(135deg, #143a6b10, #143a6b10)",
                border: "1px solid #143a6b30",
                fontSize: "0.85rem", fontWeight: 600, color: "var(--primary2)",
                textAlign: "center",
              }}>
                ✦ Түрүү AI — бүгдийг автоматаар шийднэ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "6rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Манай үнэт зүйлс</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Юу бидийг <span className="gradient-text">ялгаруулдаг вэ</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            {VALUES.map(v => (
              <div key={v.title} style={{
                padding: "1.75rem", borderRadius: "1.25rem",
                background: "var(--surface2)", border: "1px solid var(--border2)",
                display: "flex", gap: "1rem",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                  background: "#143a6b10", border: "1px solid #143a6b20",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.25rem",
                }}>
                  {v.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem", color: "var(--text)" }}>
                    {v.title}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
                    {v.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section style={{ padding: "6rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Жишээ бүтээл</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Бодит бизнест <span className="gradient-text">хэрэглэгдсэн</span>
            </h2>
          </div>

          <div style={{
            borderRadius: "1.5rem", overflow: "hidden",
            background: "var(--surface2)", border: "1px solid var(--border2)",
          }}>
            <div style={{
              padding: "2.5rem", borderBottom: "1px solid var(--border)",
              background: "linear-gradient(135deg, #143a6b08, #143a6b08)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  background: "linear-gradient(135deg, #143a6b, #143a6b)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem",
                }}>
                  🐱
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem" }}>Kitty House Mongolia</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>kittyhouse.mn · Муурны бүтээгдэхүүн</div>
                </div>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-mid)", lineHeight: 1.75 }}>
                Facebook Messenger AI chatbot, QPay төлбөр, автомат захиалга, Telegram мэдэгдэл бүхий бүрэн систем хэрэгжүүлсэн. Одоо ажилтангүйгээр 24/7 захиалга хүлээн авдаг.
              </p>
            </div>
            <div style={{ padding: "1.5rem 2.5rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[
                { num: "24/7", label: "захиалга хүлээн авах" },
                { num: "0", label: "давтагдах асуултад хариулах цаг" },
                { num: "QPay", label: "шууд төлбөр" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)" }}>{s.num}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-light)" }}>{s.label}</div>
                </div>
              ))}
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                <a href="https://kittyhouse.mn" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.82rem", fontWeight: 600, color: "#143a6b", textDecoration: "none" }}>
                  Сайт үзэх →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ padding: "5rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "0.75rem" }}>Технологи</div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Ашигладаг <span className="gradient-text">технологиуд</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", justifyContent: "center" }}>
            {STACK.map(t => (
              <span key={t} style={{
                padding: "0.4rem 0.9rem", borderRadius: "100px",
                fontSize: "0.78rem", fontWeight: 500,
                background: "var(--surface2)", color: "var(--text-mid)",
                border: "1px solid var(--border2)",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "5rem 0 6rem" }}>
        <div style={wrap3}>
          <div style={{
            position: "relative", borderRadius: "1.5rem", overflow: "hidden",
            padding: "4rem 3rem", textAlign: "center",
            background: "linear-gradient(135deg, #1c2b3a 0%, #312e81 50%, #1c2b3a 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, #143a6b20 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1.25rem", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}>
                Хамтран ажиллая
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem", color: "white" }}>
                Бизнестээ AI нэвтрүүлэх<br />
                <span className="gradient-text">эхний алхам</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 2rem" }}>
                30 минутын үнэгүй consultation-аар бизнестээ яг тохирсон шийдлийг олж мэдээрэй.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="https://app.mongolagent.mn/register"
                  style={{ display: "inline-flex", alignItems: "center", padding: "0.9rem 2rem", fontSize: "0.92rem", fontWeight: 600, textDecoration: "none", borderRadius: "0.75rem", background: "white", color: "#1c2b3a", transition: "all 0.2s" }}>
                  Үнэгүй эхлэх →
                </Link>
                <a href="https://m.me/turuuai" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", padding: "0.9rem 2rem", fontSize: "0.92rem", fontWeight: 500, textDecoration: "none", borderRadius: "0.75rem", background: "transparent", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  Messenger-ээр холбогдох
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
