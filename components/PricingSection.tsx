"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface ModalFeature { title: string; desc: string; }
interface Plan {
  name: string; price: string; period: string; desc: string;
  features: string[]; highlight: boolean; badge?: string;
  modal: { features: ModalFeature[]; target: string; caseStudy: string; };
}

const PLANS: Plan[] = [
  {
    name: "Starter", price: "₮79,900", period: "/сар",
    desc: "Жижиг бизнест зориулсан суурь AI шийдэл",
    badge: "3 хоног үнэгүй",
    features: [
      "7,000 мессеж/сар",
      "Facebook Messenger AI",
      "Builder AI тохируулга",
      "Мэдлэгийн сан (30 зүйл)",
      "Lead цуглуулах",
      "Telegram мэдэгдэл",
      "Үндсэн тайлан",
    ],
    highlight: false,
    modal: {
      features: [
        { title: "Facebook Messenger AI", desc: "Хэрэглэгчийн асуултад AI ажилтан таны мэдлэгийн сангийн хүрээнд ухаалгаар хариулна. Өдөрт 30+ давтагдах асуултыг автоматаар шийдэнэ." },
        { title: "Builder AI тохируулга", desc: "8 энгийн асуулт хариулахад л болно — AI chatbot-оо автоматаар тохируулж өгнө. Кодчилол шаардахгүй." },
        { title: "Мэдлэгийн сан (30 зүйл)", desc: "Бүтээгдэхүүн, үнэ, ажлын цаг зэрэг 30 хүртэлх Q&A оруулна. AI эдгээрт тулгуурлан хариулна." },
        { title: "Lead цуглуулах", desc: "Сонирхсон хэрэглэгчийн нэр, утасыг автоматаар бүртгэж dashboard-д харуулна." },
        { title: "Telegram мэдэгдэл", desc: "Шинэ lead ирэх бүрт таны Telegram руу шууд мэдэгдэл ирнэ." },
        { title: "Үндсэн тайлан", desc: "Сар бүр хэдэн мессеж ирсэн, хэдэн lead цуглуулсан тоон мэдээлэл." },
      ],
      target: "Facebook хуудастай, өдөр бүр ижил асуулт их ирдэг, AI туршиж үзэхийг хүсч буй жижиг бизнест хамгийн тохиромжтой.",
      caseStudy: "Гоо сайхны салон: \"Үнэ хэд вэ?\", \"Хаяг хаана?\", \"Хэдээс нээдэг?\" гэсэн өдөрт 30+ асуултыг автоматаар шийдэж, эзэн чухал ажилдаа анхаарах болсон.",
    },
  },
  {
    name: "Growth", price: "₮149,900", period: "/сар",
    desc: "Захиалга авч, төлбөр цуглуулдаг бүрэн шийдэл",
    badge: "Хамгийн алдартай",
    features: [
      "15,000 мессеж/сар",
      "Захиалга + QPay төлбөр",
      "Consultation цаг захиалга",
      "+1 → DM автоматжуулалт",
      "PDF → Мэдлэгийн сан",
      "Funnel analytics",
      "+ Starter бүгд",
    ],
    highlight: true,
    modal: {
      features: [
        { title: "Захиалга + QPay төлбөр", desc: "Хэрэглэгч чат дотроос захиалга өгч QPay-ээр төлбөр төлнө. Төлбөр шууд таны дансруу орно — манайхаар дамжихгүй." },
        { title: "Consultation цаг захиалга", desc: "Хэрэглэгч чат дотроос цаг захиалж урьдчилгаа төлбөр QPay-ээр төлнө. AI автоматаар зохицуулна." },
        { title: "+1 → DM автоматжуулалт", desc: "Facebook постод '+1' гэж comment бичсэн хүн бүрт автоматаар DM явна. Viral пост дээр ч зардал бараг $0." },
        { title: "PDF → Мэдлэгийн сан", desc: "Каталог, дүрэм, гарын авлага PDF хэлбэрт байвал шууд upload хийхэд AI автоматаар Q&A болгоно." },
        { title: "Funnel analytics", desc: "Яриа → Lead → Захиалга хэдэн хувь болж хувирч байгааг харуулна. Алдаж байгаа цэгийг олоход тусална." },
        { title: "Хариулагдаагүй асуулт", desc: "AI хариулж чадаагүй асуултуудыг бүртгэж, та KB-д нэмэх боломж олгоно." },
        { title: "+ Starter бүгд", desc: "Builder AI, Lead цуглуулах, Telegram мэдэгдэл, Үндсэн тайлан бүгд багтана." },
      ],
      target: "Онлайн захиалга авдаг, цаг захиалгатай үйлчилгээ эрхлэгчид. Гоо сайхан, эмнэлэг, хоол хүргэлт, фитнес.",
      caseStudy: "Гоо сайхны салон Facebook зар өгсний дараа 200+ comment ирдэг байсан. +1 automation-оор бүгдийг DM руу татаж цаг захиалгыг автоматаар авдаг болсон. Ажилтны ачаалал 60% буурсан.",
    },
  },
  {
    name: "Business", price: "₮249,900", period: "/сар",
    desc: "Instagram нэмж, олон суваг нэгтгэсэн шийдэл",
    features: [
      "30,000 мессеж/сар",
      "Instagram канал",
      "Custom keyword → DM",
      "Хүний handoff систем",
      "AI тохиргоо (model, temp)",
      "Telegram дэмжлэг",
      "+ Growth бүгд",
    ],
    highlight: false,
    modal: {
      features: [
        { title: "Instagram канал", desc: "Facebook Messenger-ийн зэрэгцээ Instagram DM-д ч AI ажилтан хариулна. Нэг dashboard-аас хоёуланг харна." },
        { title: "Custom keyword → DM", desc: "'+1' гэлтгүй өөрийн тодорхойлсон үгс (жишээ: 'үнэ', 'захиалах') comment дотор байвал автоматаар DM явуулна." },
        { title: "Хүний handoff систем", desc: "AI шийдэж чадахгүй нарийн асуудлыг таны ажилтанд шилжүүлж, dashboard-аас шууд хариулах боломжтой." },
        { title: "AI тохиргоо", desc: "GPT model сонгох, температур тохируулах — хариултын хэв маягийг нарийн тохируулж болно." },
        { title: "+ Growth бүгд", desc: "QPay, Consultation, +1 automation, PDF import, Funnel analytics бүгд багтана." },
      ],
      target: "Facebook + Instagram хоёуланд идэвхтэй, ачаалал өндөр, хүний хариулт шаардлагатай дунд хэмжээний бизнест.",
      caseStudy: "E-commerce дэлгүүр: Instagram + Facebook хоёр сувгаас нэгэн зэрэг захиалга авч, нарийн асуудлыг ажилтанд шилжүүлдэг болсон. Customer satisfaction 40% өссөн.",
    },
  },
  {
    name: "Enterprise", price: "₮499,900", period: "/сар",
    desc: "Том бизнест зориулсан захиалгат бүрэн шийдэл",
    badge: "Захиалгат",
    features: [
      "70,000 мессеж/сар",
      "Custom AI Chatbot хөгжүүлэлт",
      "Custom AI Agent хөгжүүлэлт",
      "Custom Website хөгжүүлэлт",
      "White label (өөрийн брэнд)",
      "Олон хуудас (3+) + API",
      "+ Business бүгд",
    ],
    highlight: false,
    modal: {
      features: [
        { title: "Custom AI Chatbot", desc: "Таны брэнд, платформ, дизайнд тохируулсан тусгай AI chatbot. Стандарт бус хэрэгцээнд зориулсан." },
        { title: "Custom AI Agent", desc: "Захиалга боловсруулах, тайлан гаргах, өгөгдөл шинжлэх зэрэг нарийн процессыг бүрэн автоматжуулсан AI систем." },
        { title: "Custom Website", desc: "Бизнесийн professional вэбсайт, landing page хөгжүүлэлт. ⚠️ Subscription цуцалсан тохиолдолд вэбсайт Түрүү AI-ийн өмч болно." },
        { title: "White label", desc: "'Powered by Түрүү AI' гэсэн брэндинг хасагдаж таны компанийн нэрээр гарна." },
        { title: "Олон хуудас (3+) + API", desc: "3 болон түүнээс дээш Facebook/Instagram хуудсыг нэг account-аас удирдана. API хандалтаар өөрийн системтэй интеграц хийнэ." },
        { title: "Шууд утасны дэмжлэг + SLA", desc: "Техникийн асуудал гарвал 4 цагийн дотор шийдэгдэх баталгаа. Шууд утасны дэмжлэг." },
        { title: "+ Business бүгд", desc: "Instagram, handoff, custom keyword, AI тохиргоо, QPay, analytics бүгд багтана." },
      ],
      target: "Олон салбартай, өдөр бүр их хэмжээний харилцаа явуулдаг, professional брэнд дүр төрхтэй том бизнест.",
      caseStudy: "Банк, даатгал, корпораци: захиалга авах, мэдэгдэл явуулах, тайлан гаргах бүх процессыг Custom AI Agent-аар автоматжуулсан. Сард 3+ ажилтны цалинтай тэнцэх зардал хэмнэсэн.",
    },
  },
];

export default function PricingSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const activePlan = PLANS.find(p => p.name === activeModal) ?? null;

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeModal]);

  return (
    <>
      <section id="pricing" data-animate style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Үнэ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Бизнестээ тохируулан <span className="gradient-text">багцаа сонгоорой</span>
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", marginBottom: "0.6rem" }}>
              Starter багцыг <span style={{ color: "#818cf8", fontWeight: 600 }}>3 хоног үнэгүй</span> туршаад үзээрэй — карт шаардахгүй
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", alignItems: "stretch" }}>
            {PLANS.map(plan => (
              <div key={plan.name}
                style={{
                  position: "relative", borderRadius: "1.25rem",
                  padding: plan.highlight ? "2rem 1.5rem" : "1.75rem 1.5rem",
                  display: "flex", flexDirection: "column",
                  background: plan.highlight ? "linear-gradient(160deg, #16163a 0%, #0e0e24 100%)" : "var(--surface)",
                  border: plan.highlight ? "1px solid #6366f160" : "1px solid var(--border)",
                  boxShadow: plan.highlight ? "0 0 60px #6366f122, inset 0 1px 0 #6366f130" : "none",
                  transform: plan.highlight ? "scale(1.03)" : "scale(1)",
                  zIndex: plan.highlight ? 2 : 1,
                }}>

                {plan.badge && (
                  <div style={{
                    position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)",
                    padding: "0.25rem 0.9rem", borderRadius: "0 0 0.65rem 0.65rem",
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.05em", whiteSpace: "nowrap",
                    background: plan.highlight ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "var(--surface3)",
                    color: plan.highlight ? "white" : "var(--text-mid)",
                    border: plan.highlight ? "none" : "1px solid var(--border)",
                    borderTop: "none",
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: "0.35rem", marginTop: plan.badge ? "0.5rem" : "0" }}>
                  <span style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: plan.highlight ? "#818cf8" : "var(--text-light)" }}>{plan.name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "0.25rem", marginBottom: "0.35rem" }}>
                  <span style={{ fontSize: "1.9rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: plan.highlight ? "#f1f5f9" : "var(--text)" }}>{plan.price}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-light)", paddingBottom: "0.25rem" }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: "0.75rem", color: plan.highlight ? "rgba(255,255,255,0.5)" : "var(--text-light)", marginBottom: "1.25rem", lineHeight: 1.5 }}>{plan.desc}</p>

                <div style={{ height: "1px", background: plan.highlight ? "#6366f125" : "var(--border)", marginBottom: "1rem" }} />

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.78rem", color: plan.highlight ? "rgba(255,255,255,0.7)" : "var(--text-light)" }}>
                      <span style={{ color: plan.highlight ? "#818cf8" : "#6366f1", flexShrink: 0, marginTop: "0.05rem" }}>✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModal(plan.name)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "0.6rem", marginBottom: "0.6rem", fontSize: "0.75rem", fontWeight: 500, cursor: "pointer", background: "transparent", border: `1px solid ${plan.highlight ? "#6366f140" : "var(--border)"}`, color: plan.highlight ? "#818cf8" : "var(--text-light)", transition: "all 0.15s" }}>
                  Дэлгэрэнгүй →
                </button>

                <Link
                  href="https://app.turuuai.mn/register"
                  style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0.7rem 1rem", borderRadius: "0.7rem", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", transition: "all 0.2s", ...(plan.highlight ? { background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", boxShadow: "0 4px 16px #6366f130" } : { background: "transparent", color: "var(--text-mid)", border: "1px solid var(--border2)" }) }}>
                  {plan.name === "Starter" ? "Үнэгүй эхлэх →" : "Эхлэх →"}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p style={{ textAlign: "center", fontSize: "0.78rem", color: "var(--text-light)", marginTop: "2rem" }}>
            Enterprise багцын <strong style={{ color: "var(--text-mid)" }}>Custom хөгжүүлэлт</strong> нь сарын төлбөрөөс гадна нэмэлт үнийн саналтай байна
            {" "}· {" "}
            <a href="https://m.me/turuuai" target="_blank" rel="noopener noreferrer" style={{ color: "#818cf8", textDecoration: "none" }}>Асуух →</a>
          </p>
        </div>
      </section>

      {/* Modal */}
      {activePlan && (
        <div
          onClick={() => setActiveModal(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
          <div
            onClick={e => e.stopPropagation()}
            style={{ width: "100%", maxWidth: "580px", maxHeight: "88vh", overflowY: "auto", borderRadius: "1.5rem", background: "var(--surface2)", border: "1px solid var(--border2)", boxShadow: "0 24px 80px #00000060" }}>

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

            <div style={{ padding: "1.75rem" }}>
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-light)", marginBottom: "1rem" }}>Юу хийж чадах вэ</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {activePlan.modal.features.map((f, i) => (
                    <div key={i} style={{ padding: "1rem 1.1rem", borderRadius: "0.875rem", background: "var(--surface3)", border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.35rem" }}>✦ {f.title}</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem", padding: "1rem 1.1rem", borderRadius: "0.875rem", background: "#6366f108", border: "1px solid #6366f122" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary2)", marginBottom: "0.5rem" }}>Хэнд тохиромжтой вэ</div>
                <p style={{ fontSize: "0.84rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{activePlan.modal.target}</p>
              </div>

              <div style={{ marginBottom: "1.75rem", padding: "1rem 1.1rem", borderRadius: "0.875rem", background: "#10b98108", border: "1px solid #10b98122" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#34d399", marginBottom: "0.5rem" }}>📈 Жишээ кейс</div>
                <p style={{ fontSize: "0.84rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{activePlan.modal.caseStudy}</p>
              </div>

              <Link
                href="https://app.turuuai.mn/register"
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
