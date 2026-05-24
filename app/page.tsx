import Link from "next/link";

const CLIENTS = [
  "Kitty House Mongolia", "Dressy Shop", "Heal Medical", "PC Mall",
  "BeautyMN", "GourmetUB", "FlexGym", "TravelMN",
  "Kitty House Mongolia", "Dressy Shop", "Heal Medical", "PC Mall",
  "BeautyMN", "GourmetUB", "FlexGym", "TravelMN",
];

const RESULTS = [
  { num: "40+", label: "Хэрэгжүүлсэн проект" },
  { num: "3 хоног", label: "Нэвтрүүлэх хугацаа" },
  { num: "₮800M+", label: "Нэмэлт орлого" },
  { num: "24/7", label: "Тасралтгүй ажиллагаа" },
];

const SERVICES = [
  {
    tag: "Мессенжер AI",
    icon: "💬",
    title: "AI Chatbot",
    desc: "Facebook Messenger, Instagram DM дээр Монгол хэлээр автоматаар хариулж, борлуулалт хийдэг.",
    items: ["Facebook & Instagram холболт", "Монгол хэлний дэмжлэг", "Мэдлэгийн сан суурилсан", "Хэрэглэгч хөтлөх flow"],
    result: "Өдөрт 200+ ижил асуултыг автоматаар шийдсэн",
    color: "#818cf8",
  },
  {
    tag: "Борлуулалт AI",
    icon: "🛒",
    title: "AI Sales Agent",
    desc: "Захиалга авч, QPay QR код илгээж, төлбөр баталгаажуулаад орлогыг автоматаар нэмнэ.",
    items: ["QPay төлбөрийн интеграц", "Автомат захиалга боловсруулалт", "Telegram мэдэгдэл", "Орлогын тайлан"],
    result: "30.5M₮ сарын орлого нэмсэн нэг жишээ клиент",
    color: "#34d399",
  },
  {
    tag: "Лид менежмент",
    icon: "🎯",
    title: "AI Lead Machine",
    desc: "Харилцагчийн мэдээллийг автоматаар цуглуулж, ангилаад, таны CRM-д бэлдэж өгнө.",
    items: ["Автомат лид цуглуулалт", "Статус хянах (CRM)", "Дагаж ажиллах сануулга", "Клиентийн аналитик"],
    result: "Шинэ лид бүрт автомат мэдэгдэл + дагаж ажиллах",
    color: "#fbbf24",
  },
  {
    tag: "Процесс AI",
    icon: "⚙️",
    title: "AI Automation",
    desc: "Захиалга, мэдэгдэл, тайлан, customer support зэрэг давтагдах ажлыг бүрэн автоматжуулна.",
    items: ["Workflow автоматжуулалт", "Олон суваг нэгтгэл", "API интеграц", "Custom AI agent"],
    result: "Ажилтны цагийн 60%+ хэмнэсэн клиент байна",
    color: "#a78bfa",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Consultation & Шинжилгээ",
    desc: "Бизнесийн онцлог, зорилго, workflow-г шинжилнэ. Тохирох AI шийдлийг тодорхойлно.",
  },
  {
    num: "02",
    title: "Тохируулга & Суурилуулалт",
    desc: "Системийг бизнест тохируулан тохиргоо хийнэ. Мэдлэгийн сан, prompt, интеграцийг бэлдэнэ.",
  },
  {
    num: "03",
    title: "Туршилт & Нэвтрүүлэлт",
    desc: "Нарийн туршиж, зохицуулсны дараа 3-7 хоногт амьд горимд нэвтрүүлнэ.",
  },
];

const CASE_METRICS = [
  { label: "Сарын нэмэлт орлого", value: "+₮12M" },
  { label: "Хэмнэсэн ажлын цаг", value: "40ц/сар" },
  { label: "Захиалга автоматжуулалт", value: "85%" },
  { label: "Нэвтрүүлсэн хугацаа", value: "5 хоног" },
];

const PLANS = [
  {
    name: "Starter",
    price: "₮390,000",
    period: "/сар",
    desc: "Жижиг бизнест зориулсан суурь AI шийдэл",
    features: ["Facebook Messenger chatbot", "Мэдлэгийн сан (50 Q&A)", "Лид менежмент", "Telegram мэдэгдэл", "Сарын тайлан"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₮790,000",
    period: "/сар",
    desc: "Өсч буй бизнест зориулсан бүрэн шийдэл",
    features: ["Starter багцийн бүх зүйл", "QPay төлбөрийн интеграц", "Instagram DM автоматжуулалт", "Мэдлэгийн сан (хязгааргүй)", "CRM интеграц", "Тэргүүлэх дэмжлэг"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Тохиролцоо",
    period: "",
    desc: "Том бизнест зориулсан custom шийдэл",
    features: ["Growth багцийн бүх зүйл", "Custom AI agent хөгжүүлэлт", "Олон суваг интеграц", "Dedicated менежер", "SLA баталгаа", "Onsite сургалт"],
    highlight: false,
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
  { q: "Нэвтрүүлэхэд хэр хугацаа шаардагдах вэ?", a: "Ихэнх тохиолдолд 3-7 хоног. Энгийн chatbot 3 хоногт, QPay болон бусад интеграцтай 5-7 хоногт бэлэн болдог." },
  { q: "Миний бизнесийн мэдээлэл аюулгүй юу?", a: "Бүх мэдээлэл шифрлэгдэж хадгалагдана. Гуравдагч этгээдтэй хуваалцахгүй. Европын GDPR стандартад нийцсэн." },
  { q: "Facebook Page байхгүй бол яах вэ?", a: "Бизнесийн Facebook Page үүсгэхэд тусалж болно. Page байгаа бол шууд холбоно. Ихэнхдээ 1 өдрийн дотод холбогддог." },
];

const wrap = { maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap5 = { maxWidth: "64rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap3 = { maxWidth: "48rem", margin: "0 auto", padding: "0 1.25rem" } as const;

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "5rem 0 5rem" }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.4,
          backgroundImage: "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Glow top */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 50% at 50% -5%, #6366f118 0%, transparent 70%)" }} />

        <div style={{ ...wrap, position: "relative" }}>
          {/* Tag */}
          <div className="section-tag" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
            🇲🇳 Монголын #1 бизнес AI платформ
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "680px" }}>
            Таны бизнест<br />
            <span className="gradient-text">цаг тутам ажилладаг</span><br />
            AI баг
          </h1>

          <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.7, maxWidth: "520px", marginBottom: "2.5rem" }}>
            Facebook, Instagram дээр автоматаар борлуулж, QPay-аар төлбөр авч, лид менежментийг бүрэн хийдэг. Монголын бизнест зориулсан premium AI платформ.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
              Үнэгүй demo авах →
            </Link>
            <Link href="#services" className="btn-outline" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
              Үйлчилгээ харах
            </Link>
          </div>

          {/* Proof badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { icon: "🏢", val: "40+", label: "Клиент" },
              { icon: "💰", val: "₮800M+", label: "Орлого үүсгэсэн" },
              { icon: "⚡", val: "3 хоног", label: "Нэвтрүүлэлт" },
            ].map(b => (
              <div key={b.val} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.6rem 1rem", borderRadius: "0.75rem", background: "var(--surface)", border: "1px solid var(--border2)" }}>
                <span style={{ fontSize: "1rem" }}>{b.icon}</span>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text)" }}>{b.val}</div>
                  <div style={{ fontSize: "0.68rem", color: "var(--text-light)" }}>{b.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENTS MARQUEE ──────────────────────────────── */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "1.5rem 0" }}>
        <p style={{ textAlign: "center", fontSize: "0.7rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
          Итгэлтэй ажилладаг компаниуд
        </p>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "5rem", zIndex: 10, background: "linear-gradient(90deg, var(--bg), transparent)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "5rem", zIndex: 10, background: "linear-gradient(-90deg, var(--bg), transparent)", pointerEvents: "none" }} />
          <div className="marquee-inner">
            {CLIENTS.map((name, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "0 2rem", flexShrink: 0 }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "var(--border2)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--text-mid)", whiteSpace: "nowrap", fontWeight: 500 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── RESULTS ──────────────────────────────────────── */}
      <section style={{ padding: "4rem 0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="md:grid-cols-4">
            {RESULTS.map(r => (
              <div key={r.label} style={{ textAlign: "center", padding: "1.5rem", borderRadius: "1rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="stat-num" style={{ marginBottom: "0.5rem" }}>{r.num}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-light)", lineHeight: 1.4 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────── */}
      <section id="services" style={{ padding: "5rem 0", background: "var(--surface)" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Үйлчилгээ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Бизнесийн хэрэгцээнд тохирсон<br />
              <span className="gradient-text">AI шийдлүүд</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "440px", margin: "0 auto", fontSize: "0.92rem" }}>
              Нэг платформоос — борлуулалт, харилцагч, лид, автоматжуулалт бүгд нэг дор.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.25rem" }} className="md:grid-cols-2">
            {SERVICES.map(s => (
              <div key={s.title} className="card card-glow" style={{ padding: "1.75rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", borderRadius: "50%", background: `radial-gradient(circle, ${s.color}12, transparent)`, transform: "translate(30%, -30%)", pointerEvents: "none" }} />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div>
                    <div className="section-tag" style={{ display: "inline-flex", marginBottom: "0.6rem", background: `${s.color}12`, borderColor: `${s.color}28`, color: s.color }}>
                      {s.tag}
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{s.title}</h3>
                  </div>
                  <span style={{ fontSize: "1.8rem" }}>{s.icon}</span>
                </div>

                <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{s.desc}</p>

                <div style={{ marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {s.items.map(item => (
                    <div key={item} className="check-item">{item}</div>
                  ))}
                </div>

                <div style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem", background: `${s.color}0a`, border: `1px solid ${s.color}20` }}>
                  <p style={{ fontSize: "0.78rem", color: s.color, fontWeight: 500 }}>📈 {s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────── */}
      <section style={{ padding: "5rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Процесс</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              3 алхамд ажилладаг болно
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "2rem" }} className="md:grid-cols-3">
            {PROCESS.map(p => (
              <div key={p.num}>
                <div style={{ width: "3.25rem", height: "3.25rem", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", fontSize: "1rem", fontWeight: 800, letterSpacing: "-0.02em", background: "linear-gradient(135deg, #6366f118, #8b5cf618)", border: "1px solid #6366f128", color: "var(--primary2)" }}>
                  {p.num}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY ───────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--surface)" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Case Study</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Бодит үр дүн</h2>
          </div>

          <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--border2)", background: "var(--surface2)" }}>
            <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--border)", background: "linear-gradient(135deg, #6366f108, transparent)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", background: "var(--surface)", border: "1px solid var(--border2)" }}>🐱</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>Kitty House Mongolia</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-light)" }}>Муурны бүтээгдэхүүн</div>
                </div>
              </div>
              <div className="section-tag" style={{ background: "#10b98112", borderColor: "#10b98128", color: "#34d399", display: "inline-flex" }}>Амжилттай</div>
            </div>

            <div style={{ padding: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem", marginBottom: "1.5rem" }} className="md:grid-cols-2">
                <div>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-light)", marginBottom: "0.5rem" }}>Асуудал</div>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.65 }}>Өдөр бүр 150+ ижил асуулт, шөнийн захиалга хаагдах асуудал</p>
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-light)", marginBottom: "0.5rem" }}>Шийдэл</div>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.65 }}>Facebook Messenger AI chatbot + QPay автомат төлбөр</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }} className="md:grid-cols-4">
                {CASE_METRICS.map(m => (
                  <div key={m.label} style={{ borderRadius: "0.75rem", padding: "1rem", textAlign: "center", background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#a78bfa", marginBottom: "0.25rem" }}>{m.value}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-light)", lineHeight: 1.3 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ borderRadius: "0.875rem", padding: "1.25rem 1.5rem", background: "#6366f10c", border: "1px solid #6366f120" }}>
                <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", fontStyle: "italic", lineHeight: 1.6 }}>
                  "Шөнийн захиалгуудыг AI боловсруулдаг болсон. Орлого мэдэгдэхүйц өссөн."
                </p>
                <p style={{ marginTop: "0.6rem", fontSize: "0.78rem", color: "var(--text-light)", fontWeight: 500 }}>— Б.Оюунтунгалаг, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────── */}
      <section id="pricing" style={{ padding: "5rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Үнэ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Бизнестэй тохирсон <span className="gradient-text">ил тод үнэ</span>
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.875rem" }}>Далд төлбөргүй. Хэрэгцээнийхээ дагуу багцаа сонгоно.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.25rem" }} className="md:grid-cols-3">
            {PLANS.map(plan => (
              <div key={plan.name} style={{ position: "relative", borderRadius: "1.25rem", padding: "1.75rem", display: "flex", flexDirection: "column", background: plan.highlight ? "linear-gradient(160deg, #13132a, #0d0d1f)" : "var(--surface)", border: plan.highlight ? "1px solid #6366f155" : "1px solid var(--border)", boxShadow: plan.highlight ? "0 0 60px #6366f118" : "none" }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: "-0.875rem", left: "50%", transform: "translateX(-50%)", padding: "0.2rem 1rem", borderRadius: "100px", fontSize: "0.72rem", fontWeight: 700, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", whiteSpace: "nowrap" }}>
                    Хамгийн алдартай
                  </div>
                )}

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "0.25rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: plan.price === "Тохиролцоо" ? "1.6rem" : "2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>{plan.price}</span>
                    {plan.period && <span style={{ fontSize: "0.82rem", color: "var(--text-light)", marginBottom: "0.3rem" }}>{plan.period}</span>}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{plan.desc}</p>
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
                  {plan.features.map(f => (
                    <div key={f} className="check-item">{f}</div>
                  ))}
                </div>

                <Link href={plan.name === "Enterprise" ? "tel:80952821" : "https://app.mongolagent.mn/register"}
                  className={plan.highlight ? "btn-primary" : "btn-outline"}
                  style={{ display: "flex", justifyContent: "center" }}>
                  {plan.name === "Enterprise" ? "Холбоо барих" : "Эхлэх →"}
                </Link>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.78rem", color: "var(--text-light)" }}>
            Тохиромжтой багцаа олохгүй байна уу?{" "}
            <Link href="tel:80952821" style={{ color: "#818cf8", textDecoration: "none" }}>80952821</Link>-д залгана уу.
          </p>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--surface)" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Сэтгэгдэл</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Клиентүүд яриад байна</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.25rem" }} className="md:grid-cols-3">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card card-glow" style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: "#f59e0b", fontSize: "0.85rem" }}>★</span>)}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "1.5rem" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, flexShrink: 0, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white" }}>
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
      <section style={{ padding: "5rem 0" }}>
        <div style={wrap3}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Түгээмэл асуултууд</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderRadius: "1rem", padding: "1.5rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "0.4rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", background: "#6366f118", color: "var(--primary2)", fontSize: "0.65rem", fontWeight: 700 }}>Q</div>
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
      <section style={{ padding: "5rem 0 6rem" }}>
        <div style={wrap3}>
          <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", padding: "4rem 3rem", textAlign: "center", background: "linear-gradient(135deg, #0d0d22 0%, #13132a 50%, #0d0d22 100%)", border: "1px solid #6366f130" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, #6366f115 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>Өнөөдөр эхэл</div>
              <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                Бизнесийнхээ <span className="gradient-text">AI хувьсгалыг</span><br />
                эхлүүлэх цаг болсон
              </h2>
              <p style={{ color: "var(--text-mid)", fontSize: "0.97rem", lineHeight: 1.65, maxWidth: "440px", margin: "0 auto 2.5rem" }}>
                30 минутын үнэгүй consultation-аар бизнестэй яг тохирсон AI шийдлийг олж мэдэ. Хэрэгжүүлэлт 3 хоногоос эхэлнэ.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ padding: "0.95rem 2rem", fontSize: "0.95rem" }}>
                  Үнэгүй demo авах →
                </Link>
                <Link href="tel:80952821" className="btn-outline" style={{ padding: "0.95rem 2rem", fontSize: "0.95rem" }}>
                  📞 80952821
                </Link>
              </div>
              <p style={{ marginTop: "2rem", fontSize: "0.75rem", color: "var(--text-light)" }}>
                Нэвтрүүлснийхээ дараа ч тасралтгүй дэмжлэг · Нуугдмал нэмэлт төлбөргүй
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
