import Link from "next/link";

const SERVICES = [
  { icon: "🤖", title: "AI Chatbot", desc: "Facebook, веб, Telegram дээр ажиллах ухаалаг chatbot. Захиалга авах, асуулт хариулах, хэрэглэгчийг хөтлөх.", href: "/services#chatbot" },
  { icon: "⚙️", title: "Автоматжуулалт", desc: "n8n, Make ашиглан дахин давтагдах ажлыг автоматжуулна. Цаг хэмнэ, алдаа багасга.", href: "/services#automation" },
  { icon: "📚", title: "AI Сургалт", desc: "Компанийн ажилтнуудад ChatGPT болон AI хэрэгслийг ажлын байранд хэрэглэх ур чадвар олгоно.", href: "/services#training" },
  { icon: "🎯", title: "AI Зөвлөгөө", desc: "AI стратеги боловсруулах, тохирох хэрэгслийг сонгох, хэрэгжүүлэх чиглэлд мэргэжлийн зөвлөгөө.", href: "/services#consulting" },
];

const STATS = [
  { value: "3–7", unit: "хоног", label: "Chatbot нэвтрүүлэх хугацаа" },
  { value: "24/7", unit: "", label: "Chatbot ажиллах цаг" },
  { value: "80%", unit: "", label: "Давтагдах асуултыг автоматаар шийднэ" },
];

const WHY = [
  { title: "Монгол хэлтэй", desc: "Монгол хэлийг бүрэн ойлгодог AI — латин, кирилл хоёуланд хариулдаг." },
  { title: "Хурдан нэвтрүүлэлт", desc: "3–7 хоногт ажиллах chatbot. Удаан хүлээлгүй шууд ашиглаж эхэлнэ." },
  { title: "QPay интеграц", desc: "Монголын QPay төлбөртэй шууд холбосон — chatbot-оос захиалга авч, төлбөр баталгаажуулна." },
  { title: "Тасралтгүй дэмжлэг", desc: "Нэвтрүүлснийхээ дараа ч тогтмол хянаж, сайжруулна." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, #6366f118 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto px-5 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border"
            style={{ background: "#6366f110", borderColor: "#6366f130", color: "#a78bfa" }}>
            🇲🇳 Монгол дахь анхны AI chatbot компани
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Бизнесийг <span className="gradient-text">AI-аар</span><br />хүчирхэгжүүл
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--text-mid)" }}>
            AI chatbot, автоматжуулалт, сургалт — Монголын бизнесүүдэд зориулсан практик AI шийдлүүд.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary text-base px-8 py-3">Үнэгүй consultation авах →</Link>
            <Link href="/services" className="btn-outline text-base px-8 py-3">Үйлчилгээ харах</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y py-12" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-4xl mx-auto px-5 grid grid-cols-3 gap-6 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold mb-1">
                <span className="gradient-text">{s.value}</span>
                {s.unit && <span className="text-lg ml-1" style={{ color: "var(--text-mid)" }}>{s.unit}</span>}
              </div>
              <div className="text-sm" style={{ color: "var(--text-light)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Үйлчилгээнүүд</h2>
            <p style={{ color: "var(--text-mid)" }}>Бизнесийн хэрэгцээнд тохирсон AI шийдэл</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map(s => (
              <Link key={s.title} href={s.href} className="card p-6 block group">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-indigo-400 transition-colors">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="py-16" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>Case Study</div>
            <h2 className="text-3xl font-bold mb-3">Kitty House Mongolia</h2>
            <p style={{ color: "var(--text-mid)" }}>Муурны элс зардаг бизнест хэрэгжүүлсэн AI chatbot</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: "Facebook Messenger chatbot", desc: "Захиалга авах, QPay төлбөр баталгаажуулах" },
              { label: "Автомат захиалга боловсруулалт", desc: "Ажилтангүйгээр 24/7 захиалга хүлээн авдаг" },
              { label: "Telegram мэдэгдэл", desc: "Шинэ захиалга ирэхэд эзэнд шуурхай мэдэгддэг" },
            ].map(c => (
              <div key={c.label} className="card p-5">
                <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-sm font-bold"
                  style={{ background: "#6366f120", color: "#a78bfa" }}>✓</div>
                <div className="font-semibold text-sm mb-1">{c.label}</div>
                <div className="text-xs" style={{ color: "var(--text-light)" }}>{c.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://kittyhouse.mn" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "#6366f1" }}>
              kittyhouse.mn-г үзэх →
            </a>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Яагаад Түрүү AI?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY.map(w => (
              <div key={w.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-bold"
                  style={{ background: "#6366f115", color: "#818cf8" }}>→</div>
                <div>
                  <div className="font-semibold mb-1">{w.title}</div>
                  <div className="text-sm" style={{ color: "var(--text-mid)" }}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="card p-10 md:p-14" style={{ background: "linear-gradient(135deg, #6366f115, #8b5cf615)", borderColor: "#6366f130" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Өнөөдөр эхэл</h2>
            <p className="mb-8 text-lg" style={{ color: "var(--text-mid)" }}>
              Үнэгүй 30 минутын consultation-аар бизнестээ ямар AI шийдэл тохирохыг мэдэж ав.
            </p>
            <Link href="/pricing" className="btn-primary text-base px-10 py-3.5">Үнэгүй consultation авах →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
