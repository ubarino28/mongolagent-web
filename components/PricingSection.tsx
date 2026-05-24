"use client";
import { useState } from "react";
import Link from "next/link";

interface ModalFeature { title: string; desc: string; }
interface Plan {
  name: string; price: string; period: string; desc: string;
  features: string[]; highlight: boolean;
  modal: { features: ModalFeature[]; target: string; caseStudy: string; };
}

const PLANS: Plan[] = [
  {
    name: "Starter", price: "₮79,900", period: "/сар",
    desc: "Жижиг бизнест зориулсан суурь AI шийдэл",
    features: ["10,000 мессеж/сар", "AI Chatbot", "Мэдлэгийн сан", "Тайлан", "Захиалгийн бүртгэл", "Борлуулалтын тайлан"],
    highlight: false,
    modal: {
      features: [
        { title: "AI Chatbot", desc: "Facebook Messenger болон Instagram DM дээр хэрэглэгчийн асуултад AI ажилтан таны брэнд/дэлгүүрийн мэдлэгийн сангийн хүрээнд тохирох байдлаар ухаалгаар хариулна. Ирсэн чат болгоныг хугацаа алдахгүй яг л жинхэнэ ажилтантай ярьж байгаа юм шигээр хариулж захиалга авна. Мөн таны барааг санал болгон захиалга авч үнийн дүнг бодон үйлчлүүлэгчдэд явуулж дансны мэдээллийг бас явуулах боломжтой. ⚠️ Starter багцад QPay integration орохгүй учраас төлбөр төлөгдсөн үгүйг та өөрөө баталгаажуулах шаардлагатай." },
        { title: "Мэдлэгийн сан", desc: "Таны бүтээгдэхүүн, үйлчилгээ, үнэ, ажлын цаг зэрэг мэдээллийг дэлгэрэнгүй суулгаж AI ажилтныг сургана. Chatbot үүнд суурилан ухаалгаар хариулна." },
        { title: "Захиалгийн бүртгэл", desc: "Хэрэглэгч чат дотроос захиалга өгөхөд автоматаар бүртгэж, таны dashboard-д харуулна. ⚠️ Төлбөр төлөгдсөн үгүйг та өөрөө баталгаажуулах шаардлагатай." },
        { title: "Борлуулалтын тайлан", desc: "Хэдэн захиалга орсон, ямар бүтээгдэхүүн их борлогдсоныг харуулна. Захиалагчийн утас, хаяг, нэр, захиалсан он сар хугацааг хадгалж авна." },
        { title: "Тайлан", desc: "Сар бүр хэдэн мессеж ирсэн, хэдэн хэрэглэгч харилцсан тоон мэдээлэл гарна." },
      ],
      target: "Facebook, Instagram хуудастай, өдөр бүр ижил асуулт их ирдэг, захиалгаа чатаараа авдаггүй, мэдээлэл түгээх зорилготой байгууллага/бизнест хамгийн тохиромжтой.",
      caseStudy: "Гоо сайхны салон: \"Үнэ хэд вэ?\", \"Хаяг хаана вэ?\", \"Хэдээс онгойх вэ?\" гэсэн өдөрт 30+ давтагдах асуултыг автоматаар шийдэж, эзэн чухал ажилдаа анхаарах болсон.",
    },
  },
  {
    name: "Growth", price: "₮149,900", period: "/сар",
    desc: "Өсч буй бизнест зориулсан бүрэн шийдэл",
    features: ["15,000 мессеж/сар", "Цаг захиалга", "Коммент автоматжуулалт", "Telegram мэдэгдэл", "+ Starter бүгд"],
    highlight: true,
    modal: {
      features: [
        { title: "AI Chatbot + QPay", desc: "Facebook Messenger болон Instagram DM дээр AI ажилтан ухаалгаар хариулна. Таны барааг санал болгон захиалга авч QPay линк явуулан чатнаасаа төлбөр авах боломжтой. Төлбөр төлөгдсөн тохиолдолд AI chatbot шалган dashboard дээр автоматаар бүртгэнэ. QPay төлбөр хэрэглэгчээс шууд таны дансруу орно — манайхаар дамжихгүй. Зөвхөн төлбөр төлөгдсөн захиалга автоматаар бүртгэгдэнэ." },
        { title: "Цаг захиалга", desc: "Хэрэглэгч чат дотроос шууд цаг авах боломжтой. Та хуваарь тохируулж өгнө, AI автоматаар зохицуулна. Цаг захиалахад урьдчилгаа төлбөр QPay-ээр авч, төлбөр төлөгдсөн тохиолдолд таны цагийг захиалгатай болгоно. Дараагийн хүнд өөр сул цагуудыг санал болгоно." },
        { title: "Коммент автоматжуулалт", desc: "Facebook post-ын коммент дээр автоматаар хариулж, DM руу татдаг. Постны дараа комментний үерт живдэггүй болно." },
        { title: "Telegram мэдэгдэл", desc: "Шинэ захиалга ирэх бүрт таны Telegram руу шууд мэдэгдэл ирнэ." },
        { title: "+ Starter бүгд", desc: "Starter багцын бүх боломж — Мэдлэгийн сан, Захиалгийн бүртгэл, Борлуулалтын тайлан, Тайлан — бүгд багтана." },
      ],
      target: "Зар их өгдөг, цаг захиалгатай үйлчилгээ эрхлэгчид тохиромжтой. Гоо сайхан, эмнэлэг, фитнес, хоол хүргэлт зэрэг.",
      caseStudy: "Гоо сайхны салон Facebook зар өгсний дараа 200+ коммент ирдэг байсан. Коммент автоматжуулалтаар бүгдийг DM руу татаж, цаг захиалгыг автоматаар авдаг болсон. Ажилтны ачаалал 60% буурсан.",
    },
  },
  {
    name: "Enterprise", price: "₮399,000", period: "/сар",
    desc: "Том бизнест зориулсан бүрэн шийдэл",
    features: ["17,000 мессеж/сар", "Website хөгжүүлэлт", "Custom AI agent хөгжүүлэлт", "SLA баталгаа", "Мэдлэгийн сан хязгааргүй", "+ Growth багц бүгд"],
    highlight: false,
    modal: {
      features: [
        { title: "Website хөгжүүлэлт", desc: "Бизнест тохирсон professional website хийж өгнө. Hosting, дизайнийг таны хүсэлд тааруулан custom хийж өгнө. (Custom domain авах бол төлбөрийг 1 удаа сарын төлбөр дээр нийцүүлэн бодож авна)\n\n⚠️ Анхааруулга: Subscription цуцалсан тохиолдолд Mongol Agent-ийн боловсруулсан website нь Mongol Agent-ийн өмч болж үлдэнэ." },
        { title: "Custom AI agent", desc: "Стандарт chatbot-оос давсан, таны бизнесийн онцлог процессыг бүрэн автоматжуулсан AI систем боловсруулна." },
        { title: "Admin Panel", desc: "Facebook болон Instagram чатнаас орж ирсэн бүх захиалгууд таны website admin panel дээр тус тусын ангилалд хадгалагдана. (Захиалга, үнэ, хүргэх хаяг, утасны дугаар, имэйл хаяг гэх мэт)" },
        { title: "Email & SMS мэдэгдэл", desc: "Төлбөр төлөгдсөн захиалга болгонд Email & SMS мэдэгдэл автоматаар илгээгдэнэ. Жишээ: \"Таны захиалга баталгаажлаа. Хүргэлт 24-48 цагын дотор очно.\" ⚠️ Email үнэгүй, SMS-ийн төлбөрийг та төлнө (1 мэссеж ≈ 80₮)." },
        { title: "SLA баталгаа", desc: "Техникийн асуудал гарсан тохиолдолд 4 цагийн дотор шийдэгдэх баталгаатай. Бизнес тасалдахгүй." },
        { title: "Мэдлэгийн сан хязгааргүй", desc: "Бүтээгдэхүүн, үйлчилгээний мэдээлэл хэчнээн ч их байсан бүгдийг суулгаж болно." },
        { title: "+ Growth багц бүгд", desc: "Growth багцын бүх боломж — AI Chatbot + QPay, Цаг захиалга, Коммент автоматжуулалт, Telegram мэдэгдэл — бүгд багтана." },
      ],
      target: "Олон салбартай, өдөр бүр их хэмжээний харилцаа явуулдаг, professional брэнд дүр төрхтэй байхыг шаарддаг дунд болон том бизнест тохиромжтой.",
      caseStudy: "E-commerce дэлгүүр: захиалга авах, QPay төлбөр баталгаажуулах, хүргэлтийн мэдэгдэл илгээх бүх процессыг Custom AI agent-аар автоматжуулсан. Сард 2 ажилтны цалинтай тэнцэх зардал хэмнэсэн.",
    },
  },
];

export default function PricingSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const activePlan = PLANS.find(p => p.name === activeModal) ?? null;

  return (
    <>
      <section id="pricing" style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.25rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Үнэ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Бизнестэй тохирсон <span className="gradient-text">ил тод үнэ</span>
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.875rem" }}>Далд төлбөргүй. Хэрэгцээнийхээ дагуу багцаа сонгоно.</p>
          </div>

          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0", alignItems: "stretch" }}>
            {PLANS.map(plan => (
              <div key={plan.name}
                className={plan.highlight ? "pricing-featured" : ""}
                style={{
                  position: "relative", borderRadius: plan.highlight ? "1.5rem" : "1.25rem",
                  padding: plan.highlight ? "2.25rem 2rem" : "2rem 1.75rem",
                  display: "flex", flexDirection: "column",
                  background: plan.highlight ? "linear-gradient(160deg, #16163a 0%, #0e0e24 100%)" : "var(--surface)",
                  border: plan.highlight ? "1px solid #6366f160" : "1px solid var(--border)",
                  boxShadow: plan.highlight ? "0 0 80px #6366f122, inset 0 1px 0 #6366f130" : "none",
                  transform: plan.highlight ? "scale(1.04)" : "scale(1)",
                  zIndex: plan.highlight ? 2 : 1,
                  margin: plan.highlight ? "0 -4px" : "0",
                }}>

                {plan.highlight && (
                  <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", padding: "0.3rem 1.1rem", borderRadius: "0 0 0.75rem 0.75rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", whiteSpace: "nowrap", textTransform: "uppercase" }}>
                    ✦ Хамгийн алдартай
                  </div>
                )}
                {plan.highlight && (
                  <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, #8b5cf620 0%, transparent 70%)", transform: "translate(30%, -30%)", pointerEvents: "none" }} />
                )}

                <div style={{ marginBottom: "0.4rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: plan.highlight ? "#818cf8" : "var(--text-light)" }}>{plan.name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "0.3rem", marginBottom: "0.4rem" }}>
                  <span style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: plan.highlight ? "#f1f5f9" : "var(--text)" }}>{plan.price}</span>
                  {plan.period && <span style={{ fontSize: "0.82rem", color: "var(--text-light)", paddingBottom: "0.3rem" }}>{plan.period}</span>}
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-light)", marginBottom: "1.5rem", lineHeight: 1.5 }}>{plan.desc}</p>

                <div style={{ height: "1px", background: plan.highlight ? "#6366f125" : "var(--border)", marginBottom: "1.25rem" }} />

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                  {plan.features.map(f => (
                    <div key={f} className="check-item" style={{ color: plan.highlight ? "var(--text-mid)" : "var(--text-light)" }}>{f}</div>
                  ))}
                </div>

                {/* Detail button */}
                <button
                  onClick={() => setActiveModal(plan.name)}
                  style={{ width: "100%", padding: "0.55rem", borderRadius: "0.65rem", marginBottom: "0.75rem", fontSize: "0.8rem", fontWeight: 500, cursor: "pointer", background: "transparent", border: `1px solid ${plan.highlight ? "#6366f140" : "var(--border)"}`, color: plan.highlight ? "#818cf8" : "var(--text-light)", transition: "all 0.15s" }}>
                  Дэлгэрэнгүй үзэх →
                </button>

                <Link
                  href="https://app.mongolagent.mn/register"
                  style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0.75rem 1.5rem", borderRadius: "0.75rem", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.2s", ...(plan.highlight ? { background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", boxShadow: "0 4px 20px #6366f135" } : { background: "transparent", color: "var(--text-mid)", border: "1px solid var(--border2)" }) }}>
                  Эхлэх →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activePlan && (
        <div
          onClick={() => setActiveModal(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}>
          <div
            onClick={e => e.stopPropagation()}
            style={{ width: "100%", maxWidth: "600px", maxHeight: "88vh", overflowY: "auto", borderRadius: "1.5rem", background: "var(--surface2)", border: "1px solid var(--border2)", boxShadow: "0 24px 80px #00000060" }}>

            {/* Modal header */}
            <div style={{ position: "sticky", top: 0, zIndex: 10, padding: "1.5rem 1.75rem 1.25rem", background: "var(--surface2)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
              <div>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary2)", marginBottom: "0.3rem" }}>{activePlan.name}</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "0.3rem" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>{activePlan.price}</span>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-light)", paddingBottom: "0.2rem" }}>{activePlan.period}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "8px", border: "1px solid var(--border2)", background: "var(--surface3)", color: "var(--text-mid)", fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                ✕
              </button>
            </div>

            {/* Modal body */}
            <div style={{ padding: "1.75rem" }}>

              {/* Features */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-light)", marginBottom: "1rem" }}>Юу хийж чадах вэ</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {activePlan.modal.features.map((f, i) => (
                    <div key={i} style={{ padding: "1rem 1.1rem", borderRadius: "0.875rem", background: "var(--surface3)", border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>✦ {f.title}</div>
                      <div style={{ fontSize: "0.825rem", color: "var(--text-mid)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target */}
              <div style={{ marginBottom: "1.25rem", padding: "1rem 1.1rem", borderRadius: "0.875rem", background: "#6366f108", border: "1px solid #6366f122" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary2)", marginBottom: "0.5rem" }}>Хэнд тохиромжтой вэ</div>
                <p style={{ fontSize: "0.845rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{activePlan.modal.target}</p>
              </div>

              {/* Case study */}
              <div style={{ marginBottom: "1.75rem", padding: "1rem 1.1rem", borderRadius: "0.875rem", background: "#10b98108", border: "1px solid #10b98122" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#34d399", marginBottom: "0.5rem" }}>📈 Жишээ кейс</div>
                <p style={{ fontSize: "0.845rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{activePlan.modal.caseStudy}</p>
              </div>

              {/* CTA */}
              <Link
                href="https://app.mongolagent.mn/register"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0.875rem", borderRadius: "0.875rem", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", boxShadow: "0 4px 20px #6366f130" }}>
                {activePlan.name} багцаар эхлэх →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
