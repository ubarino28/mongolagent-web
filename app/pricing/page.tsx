import type { Metadata } from "next";

export const metadata: Metadata = { title: "Үнэ — Түрүү AI" };

const PLANS = [
  {
    name: "Starter Chatbot",
    price: "500,000₮",
    period: "+ 100,000₮/сар",
    desc: "Жижиг бизнест зориулсан AI chatbot",
    features: ["Facebook Messenger эсвэл веб", "Q&A автоматжуулалт", "Ажлын цагийн мэдэгдэл", "Монгол+латин хэл", "1 сарын дэмжлэг"],
    cta: "Эхлэх",
  },
  {
    name: "Business Chatbot",
    price: "1,000,000₮",
    period: "+ 150,000₮/сар",
    desc: "Захиалга авах, QPay төлбөртэй бүрэн систем",
    features: ["Business Starter-ийн бүгд", "Захиалга авах систем", "QPay төлбөр интеграц", "DB + Telegram мэдэгдэл", "Хүний туслах руу шилжих", "3 сарын дэмжлэг"],
    cta: "Сонгох",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Тохиролцооны",
    period: "+ 250,000₮/сар",
    desc: "Том бизнест зориулсан бүрэн AI шийдэл",
    features: ["Business-ийн бүгд", "Multi-platform (FB+веб+TG)", "Захиалгын аналитик", "Admin dashboard", "CRM интеграц", "Тасралтгүй дэмжлэг"],
    cta: "Холбогдох",
  },
];

const FAQ = [
  { q: "Chatbot хийхэд хэр удах вэ?", a: "Starter 3-5 хоног, Business 5-7 хоног. Хэрэгцээнд тохируулан нарийвчилсан хугацааг consultation-д тодорхойлно." },
  { q: "Сарын дэмжлэг гэж юу хийдэг вэ?", a: "Prompt сайжруулалт, шинэ функц нэмэх, алдаа засах, ажилтны сургалт багтана." },
  { q: "Facebook-гүйгээр веб дээр л ажиллах боломжтой юу?", a: "Тийм. Веб widget хэлбэрээр ямар ч сайт дээр суулгаж болно." },
  { q: "Төлбөрийг хэрхэн хийдэг вэ?", a: "50% урьдчилгаа, 50% тохиргоо дуусмагц. QPay эсвэл банкны шилжүүлгээр." },
  { q: "Consultation үнэгүй юу?", a: "Тийм, анхны 30 минутын consultation үнэгүй. Тэндээ бизнест ямар шийдэл тохирохыг хамтдаа тодорхойлно." },
];

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">Үнэ & Багцууд</h1>
        <p className="text-lg" style={{ color: "var(--text-mid)" }}>Бизнесийн хэмжээнд тохирсон сонголт</p>
      </div>

      {/* Chatbot plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {PLANS.map(p => (
          <div key={p.name} className={`card p-6 flex flex-col ${p.highlight ? "relative" : ""}`}
            style={p.highlight ? { borderColor: "#143a6b60", background: "#143a6b08" } : {}}>
            {p.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "linear-gradient(135deg, #143a6b, #143a6b)", color: "white" }}>
                Хамгийн их сонгогддог
              </div>
            )}
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-1">{p.name}</h3>
              <p className="text-xs" style={{ color: "var(--text-light)" }}>{p.desc}</p>
            </div>
            <div className="mb-5">
              <span className="text-3xl font-bold gradient-text">{p.price}</span>
              <div className="text-sm mt-0.5" style={{ color: "var(--text-light)" }}>{p.period}</div>
            </div>
            <ul className="space-y-2 mb-6 flex-1">
              {p.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span style={{ color: "#143a6b" }}>✓</span>
                  <span style={{ color: "var(--text-mid)" }}>{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://m.me/turuuai" target="_blank" rel="noopener noreferrer"
              className={p.highlight ? "btn-primary justify-center" : "btn-outline justify-center"}>
              {p.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Other services */}
      <div className="card p-6 mb-16">
        <h2 className="font-bold text-lg mb-5">Бусад үйлчилгээ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Автоматжуулалт", price: "800,000₮–2,000,000₮", unit: "project" },
            { name: "AI Workshop", price: "500,000–800,000₮", unit: "бүлэг" },
            { name: "Consultation", price: "150,000₮", unit: "цаг" },
          ].map(s => (
            <div key={s.name} className="flex items-center justify-between p-4 rounded-xl" style={{ background: "var(--surface2)" }}>
              <span className="font-medium text-sm">{s.name}</span>
              <div className="text-right">
                <div className="font-bold text-sm gradient-text">{s.price}</div>
                <div className="text-xs" style={{ color: "var(--text-light)" }}>{s.unit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free consultation */}
      <div className="card p-8 text-center mb-16" style={{ background: "linear-gradient(135deg, #143a6b15, #143a6b15)", borderColor: "#143a6b30" }}>
        <h2 className="text-2xl font-bold mb-3">Үнэгүй 30 минутын consultation</h2>
        <p className="mb-6" style={{ color: "var(--text-mid)" }}>
          Бизнестээ ямар AI шийдэл тохирохыг хамтдаа тодорхойлно. Танилцуулга, санал, үнийн тооцооллыг үнэгүй гаргаж өгнө.
        </p>
        <a href="https://m.me/turuuai" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-3.5">
          Одоо холбогдох →
        </a>
        <p className="text-xs mt-4" style={{ color: "var(--text-light)" }}>Facebook Messenger-ээр шууд холбогдоно</p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Түгээмэл асуултууд</h2>
        <div className="space-y-3">
          {FAQ.map(f => (
            <div key={f.q} className="card p-5">
              <div className="font-semibold mb-2 text-sm">{f.q}</div>
              <div className="text-sm" style={{ color: "var(--text-mid)" }}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
