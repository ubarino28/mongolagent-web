import Link from "next/link";

const STATS = [
  { value: "3–7", unit: "хоног", label: "Chatbot нэвтрүүлэх хугацаа" },
  { value: "24/7", unit: "", label: "Chatbot ажиллах цаг" },
  { value: "80%", unit: "", label: "Давтагдах асуултыг автоматаар шийднэ" },
  { value: "3сек", unit: "", label: "AI хариу өгөх хурд" },
];

const FEATURES = [
  { icon: "🤖", title: "AI Chatbot", desc: "Facebook Messenger, Instagram, Telegram дээр ажиллах ухаалаг chatbot. Захиалга авах, асуулт хариулах, хэрэглэгчийг хөтлөх." },
  { icon: "💳", title: "QPay интеграц", desc: "Монголын QPay төлбөртэй шууд холбосон — chatbot-оос захиалга авч, QR код илгээж, төлбөр баталгаажуулна." },
  { icon: "⚙️", title: "Автоматжуулалт", desc: "Давтагдах ажлуудыг автоматжуулна. Захиалга боловсруулах, мэдэгдэл илгээх, тайлан гаргах." },
  { icon: "📊", title: "Dashboard & Аналитик", desc: "Бүх мессеж, захиалга, орлогыг нэг газраас харна. Яриа, хэрэглэгч, борлуулалтын статистик." },
  { icon: "📚", title: "Knowledge Base", desc: "Бизнесийн мэдээлэл, бүтээгдэхүүн, үнэ — AI автоматаар сурч, хэрэглэгчид зөв хариулт өгнө." },
  { icon: "🔔", title: "Telegram мэдэгдэл", desc: "Шинэ захиалга, lead ирэхэд эзэнд шуурхай мэдэгддэг. Хаана ч байсан мэдэж байна." },
];

const HOW_IT_WORKS = [
  { num: "01", title: "Хэрэглэгч мессеж илгээнэ", desc: "Facebook Messenger эсвэл Instagram-аар байгалийн хэлэнд мессеж илгээнэ." },
  { num: "02", title: "AI 3 секундэд хариулна", desc: "Chatbot мэдлэгийн санд тулгуурлан Монгол хэлээр зөв хариулт өгнө. Захиалга авна, QPay QR код илгээнэ." },
  { num: "03", title: "Төлбөр банкны дансанд орно", desc: "Хэрэглэгч QPay-аар төлнө — баталгаажилт автоматаар ирж, захиалга боловсруулагдана." },
];

const INDUSTRIES = [
  { icon: "☕", name: "Кофе шоп" },
  { icon: "👗", name: "Хувцасны дэлгүүр" },
  { icon: "💇", name: "Салон" },
  { icon: "🍽️", name: "Ресторан" },
  { icon: "🛋️", name: "Тавилгын дэлгүүр" },
  { icon: "🐾", name: "Тэжээвэр амьтан" },
  { icon: "📦", name: "Онлайн дэлгүүр" },
  { icon: "🏋️", name: "Фитнес клуб" },
];

const WHY = [
  { title: "Монгол хэлтэй", desc: "Монгол хэлийг бүрэн ойлгодог AI — кирилл, латин, хэл яриа хоёуланд хариулдаг." },
  { title: "Хурдан нэвтрүүлэлт", desc: "3–7 хоногт ажиллах chatbot. Удаан хүлээлгүй шууд ашиглаж эхэлнэ." },
  { title: "QPay интеграц", desc: "Монголын QPay-тай шууд холбосон — chatbot-оос захиалга авч, төлбөр баталгаажуулна." },
  { title: "Тасралтгүй дэмжлэг", desc: "Нэвтрүүлснийхээ дараа ч тогтмол хянаж, сайжруулна. Та ганцаараа биш." },
];

const TESTIMONIALS = [
  { text: "Шөнийн захиалгуудыг AI боловсруулдаг болсон. Орлого 40% өссөн.", name: "Б.Оюунтунгалаг", role: "Онлайн дэлгүүр" },
  { text: "Өдөр бүр 200 гаруй ижил асуулт ирдэг байсан. Одоо AI бүгдийг шийддэг.", name: "Д.Мөнхбаяр", role: "Кофе шоп эзэн" },
  { text: "QPay холболт хамгийн хэрэгтэй зүйл болсон. Хэрэглэгчид хүлээлгүй төлдөг.", name: "Э.Баярмаа", role: "Гоо сайхны салон" },
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
            🇲🇳 Монголын анхны AI chatbot платформ
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Бизнесийн <span className="gradient-text">AI борлуулагч</span><br />өдөр шөнөгүй ажиллана
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--text-mid)" }}>
            Facebook Messenger, Instagram дээр Монгол хэлээр хариулдаг AI chatbot. QPay-тай холбосон — захиалга аваад, төлбөр баталгаажуулаад, мэдэгдэл явуулна.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="https://app.mongolagent.mn/register" className="btn-primary text-base px-8 py-3">Үнэгүй эхлэх →</Link>
            <Link href="/services" className="btn-outline text-base px-8 py-3">Үйлчилгээ харах</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y py-12" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Бүх шаардлагатай боломжууд</h2>
            <p style={{ color: "var(--text-mid)" }}>Нэг платформ дотор бизнесийн бүх AI хэрэгсэл</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card p-6">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Хэрхэн ажилладаг вэ?</h2>
            <p style={{ color: "var(--text-mid)" }}>3 алхамд бизнест AI chatbot нэвтрүүлнэ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((h, i) => (
              <div key={h.num} className="relative">
                <div className="text-5xl font-bold mb-4" style={{ color: "#6366f120" }}>{h.num}</div>
                <h3 className="font-bold text-lg mb-2">{h.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{h.desc}</p>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-2xl" style={{ color: "#6366f140" }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>Case Study</div>
            <h2 className="text-3xl font-bold mb-3">Kitty House Mongolia</h2>
            <p style={{ color: "var(--text-mid)" }}>Муурны элс зардаг бизнест хэрэгжүүлсэн AI chatbot</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
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
          <div className="text-center">
            <a href="https://kittyhouse.mn" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "#6366f1" }}>
              kittyhouse.mn-г үзэх →
            </a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold mb-2">Ямар бизнест тохирох вэ?</h2>
          <p className="text-sm mb-10" style={{ color: "var(--text-mid)" }}>Өдөрт 20+ мессеж хүлээн авдаг бизнес бүрт</p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {INDUSTRIES.map(i => (
              <div key={i.name} className="flex flex-col items-center gap-2">
                <div className="text-3xl">{i.icon}</div>
                <div className="text-xs" style={{ color: "var(--text-light)" }}>{i.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Хэрэглэгчдийн туршлага</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card p-6">
                <div className="text-2xl mb-4" style={{ color: "#6366f1" }}>"</div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>{t.text}</p>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs" style={{ color: "var(--text-light)" }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Яагаад Mongol Agent?</h2>
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
            <Link href="https://app.mongolagent.mn/register" className="btn-primary text-base px-10 py-3.5">Үнэгүй эхлэх →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
