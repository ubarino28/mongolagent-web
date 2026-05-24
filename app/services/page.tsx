import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Үйлчилгээ — Түрүү AI" };

const SERVICES = [
  {
    id: "chatbot",
    icon: "🤖",
    title: "AI Chatbot хөгжүүлэлт",
    desc: "Facebook Messenger, веб сайт, Telegram дээр ажиллах ухаалаг AI chatbot. Хэрэглэгчийн асуулт хариулах, захиалга авах, QPay төлбөр баталгаажуулах бүгдийг автоматаар хийнэ.",
    features: [
      "Монгол болон латин хэлд хариулдаг",
      "QPay төлбөрийн систем",
      "Захиалга DB-д хадгалах",
      "Telegram мэдэгдэл",
      "Ажлын цагийн мэдэгдэл",
      "Хүний туслахтай шилжих",
    ],
    packages: [
      { name: "Starter", price: "500,000₮", per: "нэг удаагийн", support: "100,000₮/сар", note: "Энгийн Q&A, мэдээлэл өгөх" },
      { name: "Business", price: "1,000,000₮", per: "нэг удаагийн", support: "150,000₮/сар", note: "Захиалга + QPay + DB", highlight: true },
      { name: "Premium", price: "2,000,000₮+", per: "нэг удаагийн", support: "250,000₮/сар", note: "Бүрэн тохиргоо + аналитик" },
    ],
  },
  {
    id: "automation",
    icon: "⚙️",
    title: "Бизнес автоматжуулалт",
    desc: "n8n, Make, Zapier ашиглан дахин давтагдах ажлыг автоматжуулна. Захиалга боловсруулах, имэйл явуулах, тайлан гаргах, мэдэгдэл илгээх — бүгдийг автоматаар.",
    features: [
      "Workflow дизайн ба хэрэгжүүлэлт",
      "API интеграц",
      "Алдааны мэдэгдэл",
      "Тайлан автоматжуулалт",
      "CRM холболт",
      "Хуваарийн дагуу ажиллах",
    ],
    packages: [
      { name: "Consultation", price: "150,000₮", per: "цаг", support: "", note: "Шинжилгээ + зөвлөгөө" },
      { name: "Хэрэгжүүлэлт", price: "800,000₮–2,000,000₮", per: "project", support: "100,000₮/сар", note: "Бүрэн автоматжуулалт", highlight: true },
    ],
  },
  {
    id: "training",
    icon: "📚",
    title: "AI Сургалт / Workshop",
    desc: "Компанийн ажилтнуудад ChatGPT, Claude, Midjourney болон бусад AI хэрэгслийг ажлын байранд хэрэглэх практик ур чадвар олгоно.",
    features: [
      "ChatGPT prompt инженеринг",
      "AI-аар баримт боловсруулах",
      "Маркетинг контент үүсгэх",
      "Зураг үүсгэх AI хэрэгслүүд",
      "Workflow-д AI нэвтрүүлэх",
      "Дадлага, жишээ, хэрхэн хийх",
    ],
    packages: [
      { name: "Хагас өдрийн workshop", price: "500,000₮", per: "бүлэг (10 хүртэл)", support: "", note: "4 цаг, практик дадлагатай" },
      { name: "Бүтэн өдрийн intensive", price: "800,000₮", per: "бүлэг", support: "", note: "8 цаг, гүнзгий судалгаа", highlight: true },
      { name: "Онлайн курс", price: "250,000₮", per: "хүн", support: "", note: "4 долоо хоног, өөрийн хурдаар" },
    ],
  },
  {
    id: "consulting",
    icon: "🎯",
    title: "AI Зөвлөгөө",
    desc: "Бизнестэй нь танилцаж, AI-г хэрхэн ашиглах боломжтойг шинжилж, тодорхой төлөвлөгөө гаргана. Ямар хэрэгсэл, ямар алхамаар явах вэ гэдгийг тодорхой болгоно.",
    features: [
      "AI боломжийн шинжилгээ",
      "Тохирох хэрэгслийн сонголт",
      "Хэрэгжүүлэлтийн төлөвлөгөө",
      "ROI тооцоолол",
      "Хөрөнгө оруулалтын зөвлөгөө",
      "Тасралтгүй дэмжлэг",
    ],
    packages: [
      { name: "Нэг удаагийн session", price: "150,000₮", per: "цаг", support: "", note: "Zoom эсвэл биечлэн" },
      { name: "Сарын retainer", price: "500,000₮", per: "сар", support: "", note: "Тогтмол зөвлөгөө + хяналт", highlight: true },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Үйлчилгээнүүд</h1>
        <p className="text-lg" style={{ color: "var(--text-mid)" }}>Бизнесийн хэрэгцээнд тохирсон AI шийдлүүд</p>
      </div>

      <div className="space-y-20">
        {SERVICES.map(s => (
          <section key={s.id} id={s.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{s.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
            </div>
            <p className="text-base mb-8 max-w-3xl" style={{ color: "var(--text-mid)" }}>{s.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="card p-6">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: "var(--text-light)" }}>Багтаах зүйлс</h3>
                <ul className="space-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span style={{ color: "#6366f1" }}>✓</span>
                      <span style={{ color: "var(--text-mid)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                {s.packages.map(p => (
                  <div key={p.name} className={`card p-4 ${p.highlight ? "border-indigo-500/40" : ""}`}
                    style={p.highlight ? { borderColor: "#6366f160", background: "#6366f108" } : {}}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-sm">{p.name}</div>
                        <div className="text-xs mt-0.5" style={{ color: "var(--text-light)" }}>{p.note}</div>
                        {p.support && <div className="text-xs mt-0.5" style={{ color: "var(--text-light)" }}>+ {p.support} дэмжлэг</div>}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bold text-sm gradient-text">{p.price}</div>
                        <div className="text-xs" style={{ color: "var(--text-light)" }}>{p.per}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="card p-8 inline-block" style={{ background: "linear-gradient(135deg, #6366f115, #8b5cf615)", borderColor: "#6366f130" }}>
          <h3 className="text-xl font-bold mb-3">Тохирох үйлчилгээгээ сонгоход тусалъя</h3>
          <p className="mb-5 text-sm" style={{ color: "var(--text-mid)" }}>Үнэгүй 30 минутын consultation-аар бизнестээ ямар шийдэл хамгийн тохиромжтойг олж мэдэх боломжтой.</p>
          <Link href="/pricing" className="btn-primary">Consultation авах →</Link>
        </div>
      </div>
    </div>
  );
}
