import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-lg mb-3">
              <span className="gradient-text">Түрүү</span>
              <span style={{ color: "var(--text-mid)" }}> AI</span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-light)" }}>
              Монголын бизнесийг AI-аар хүчирхэгжүүл. Chatbot, автоматжуулалт, сургалт, зөвлөгөө.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-3" style={{ color: "var(--text-mid)" }}>Үйлчилгээ</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-light)" }}>
              {["AI Chatbot хөгжүүлэлт", "Бизнес автоматжуулалт", "AI Сургалт", "AI Зөвлөгөө"].map(s => (
                <li key={s}><Link href="/services" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-3" style={{ color: "var(--text-mid)" }}>Холбоо барих</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-light)" }}>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Consultation захиалах</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Бидний тухай</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs" style={{ borderColor: "var(--border)", color: "var(--text-light)" }}>
          <span>© {new Date().getFullYear()} Түрүү AI. Бүх эрх хуулиар хамгаалагдсан.</span>
          <span>turuuai.mn</span>
        </div>
      </div>
    </footer>
  );
}
