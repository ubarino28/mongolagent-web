import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Бидний тухай — Түрүү AI" };

const VALUES = [
  { icon: "🎯", title: "Практик үр дүн", desc: "Загвар биш, ажиллагаатай шийдэл. Бизнест бодит өөрчлөлт авчирдаг AI хэрэгжүүлэлтэд л анхаарна." },
  { icon: "🇲🇳", title: "Монголд зориулсан", desc: "Монгол хэл, соёл, бизнесийн онцлогийг ойлгосон — гадаадын хэрэгслийг Монголын нөхцөлд тохируулж өгнө." },
  { icon: "🤝", title: "Урт хугацааны түнш", desc: "Нэг удаа хийгээд явахгүй. Бизнесийн өсөлттэй зэрэгцэн AI шийдлийг тасралтгүй сайжруулна." },
  { icon: "💡", title: "Ил тод үнэ", desc: "Нуугдмал зардал байхгүй. Юу авах, хэдийд авах, хэд төлөх — бүгдийг эхнээс тодорхой болгоно." },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Бидний тухай</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-mid)" }}>
          Монголын бизнесүүдийг AI-аар хүчирхэгжүүлэх зорилготой хөгжүүлэгчид.
        </p>
      </div>

      {/* Mission */}
      <div className="card p-8 mb-12" style={{ background: "linear-gradient(135deg, #6366f110, #8b5cf610)", borderColor: "#6366f130" }}>
        <h2 className="text-2xl font-bold mb-4">Манай зорилт</h2>
        <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
          AI технологи нь зөвхөн том компаниудын эрхэм зүйл биш — жижиг, дунд бизнесүүд ч ашиглаж чадна.
          Монголын ресторан, дэлгүүр, үйлчилгээний газрууд AI chatbot, автоматжуулалтаар цаг хэмнэж,
          борлуулалтаа нэмэгдүүлж, хэрэглэгчийн үйлчилгээгээ сайжруулах боломжтой.
          Тэр боломжийг практик, хямд, хурдан хэлбэрээр хүргэх нь бидний зорилго.
        </p>
      </div>

      {/* Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Манай үнэт зүйлс</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {VALUES.map(v => (
            <div key={v.title} className="card p-5 flex gap-4">
              <span className="text-2xl">{v.icon}</span>
              <div>
                <div className="font-semibold mb-1">{v.title}</div>
                <div className="text-sm" style={{ color: "var(--text-mid)" }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech */}
      <div className="card p-6 mb-12">
        <h2 className="text-xl font-bold mb-4">Ашигладаг технологи</h2>
        <div className="flex flex-wrap gap-2">
          {["OpenAI GPT-4o", "Next.js", "Node.js", "PostgreSQL", "Facebook Messenger API", "QPay", "n8n", "Make", "Telegram API", "Vercel", "Render"].map(t => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: "var(--surface2)", color: "var(--text-mid)", border: "1px solid var(--border)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Case study */}
      <div className="card p-6 mb-12">
        <h2 className="text-xl font-bold mb-2">Кейс: Kitty House Mongolia</h2>
        <p className="text-sm mb-4" style={{ color: "var(--text-mid)" }}>
          Муурны элс зарж буй бизнест Facebook Messenger AI chatbot хэрэгжүүлсэн — QPay төлбөр, автомат захиалга,
          Telegram мэдэгдэл бүхий бүрэн систем. Одоо 24/7 ажилтангүйгээр захиалга хүлээн авдаг.
        </p>
        <a href="https://kittyhouse.mn" target="_blank" rel="noopener noreferrer"
          className="text-sm font-medium" style={{ color: "#6366f1" }}>
          kittyhouse.mn → үзэх
        </a>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-3">Хамтран ажиллая</h2>
        <p className="mb-6" style={{ color: "var(--text-mid)" }}>Бизнестээ AI нэвтрүүлэх эхний алхамыг хамтдаа хийцгээе.</p>
        <Link href="/pricing" className="btn-primary text-base px-8 py-3">Үнэгүй consultation авах →</Link>
      </div>
    </div>
  );
}
