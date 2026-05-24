import Link from "next/link";

/* ── DATA ─────────────────────────────────────────────── */

const CLIENTS = [
  "Kitty House Mongolia", "Dressy Shop", "Heal Medical", "PC Mall",
  "BeautyMN", "GourmetUB", "FlexGym", "TravelMN",
  "Kitty House Mongolia", "Dressy Shop", "Heal Medical", "PC Mall",
  "BeautyMN", "GourmetUB", "FlexGym", "TravelMN",
];

const RESULTS = [
  { num: "40+", label: "Хэрэгжүүлсэн проект" },
  { num: "3 хоног", label: "Нэвтрүүлэх хугацаа" },
  { num: "₮800M+", label: "Нэмэлт орлого үүсгэсэн" },
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
    color: "#6366f1",
  },
  {
    tag: "Борлуулалт AI",
    icon: "🛒",
    title: "AI Sales Agent",
    desc: "Захиалга авч, QPay QR код илгээж, төлбөр баталгаажуулаад орлогыг автоматаар нэмнэ.",
    items: ["QPay төлбөрийн интеграц", "Автомат захиалга боловсруулалт", "Telegram мэдэгдэл", "Орлогын тайлан"],
    result: "30.5M₮ сарын орлого нэмсэн нэг жишээ клиент",
    color: "#10b981",
  },
  {
    tag: "Лид менежмент",
    icon: "🎯",
    title: "AI Lead Machine",
    desc: "Харилцагчийн мэдээллийг автоматаар цуглуулж, ангилаад, таны CRM-д бэлдэж өгнө.",
    items: ["Автомат лид цуглуулалт", "Статус хянах (CRM)", "Дагаж ажиллах сануулга", "Клиентийн аналитик"],
    result: "Шинэ лид бүрт автомат мэдэгдэл + дагаж ажиллах",
    color: "#f59e0b",
  },
  {
    tag: "Процесс AI",
    icon: "⚙️",
    title: "AI Automation",
    desc: "Захиалга, мэдэгдэл, тайлан, customer support зэрэг давтагдах ажлыг бүрэн автоматжуулна.",
    items: ["Workflow автоматжуулалт", "Олон суваг нэгтгэл", "API интеграц", "Custom AI agent"],
    result: "Ажилтны цагийн 60%+ хэмнэсэн клиент байна",
    color: "#8b5cf6",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Consultation & Шинжилгээ",
    desc: "Бизнесийн онцлог, зорилго, одоогийн workflow-г дүн шинжилгээ хийнэ. Ямар AI шийдэл хамгийн тохирохыг тодорхойлно.",
  },
  {
    num: "02",
    title: "Тохируулга & Суурилуулалт",
    desc: "Системийг бизнест тохируулан тохиргоо хийнэ. Мэдлэгийн сан, prompt, интеграцийг бүрэн бэлдэнэ.",
  },
  {
    num: "03",
    title: "Туршилт & Нэвтрүүлэлт",
    desc: "Нарийн туршиж, зохицуулсны дараа 3-7 хоногт амьд горимд нэвтрүүлнэ. Тасралтгүй дэмжлэг үзүүлнэ.",
  },
];

const CASE_STUDY = {
  client: "Kitty House Mongolia",
  category: "Муурны бүтээгдэхүүн",
  logo: "🐱",
  challenge: "Өдөр бүр 150+ ижил асуулт, шөнийн захиалга хаагдах асуудал",
  solution: "Facebook Messenger AI chatbot + QPay автомат төлбөр",
  metrics: [
    { label: "Сарын нэмэлт орлого", value: "+₮12M" },
    { label: "Хэмнэсэн ажлын цаг", value: "40ц/сар" },
    { label: "Захиалга автоматжуулалт", value: "85%" },
    { label: "Нэвтрүүлсэн хугацаа", value: "5 хоног" },
  ],
  quote: "Шөнийн захиалгуудыг AI боловсруулдаг болсон. Орлого мэдэгдэхүйц өссөн.",
  author: "Б.Оюунтунгалаг, Founder",
};

const PLANS = [
  {
    name: "Starter",
    price: "₮390,000",
    period: "/сар",
    desc: "Жижиг бизнест зориулсан суурь AI шийдэл",
    features: [
      "Facebook Messenger chatbot",
      "Мэдлэгийн сан (50 Q&A)",
      "Лид менежмент",
      "Telegram мэдэгдэл",
      "Сарын тайлан",
    ],
    cta: "Эхлэх",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₮790,000",
    period: "/сар",
    desc: "Өсч буй бизнест зориулсан бүрэн шийдэл",
    features: [
      "Starter багцийн бүх зүйл",
      "QPay төлбөрийн интеграц",
      "Instagram DM автоматжуулалт",
      "Мэдлэгийн сан (хязгааргүй)",
      "CRM интеграц",
      "Тэргүүлэх дэмжлэг",
    ],
    cta: "Хамгийн алдартай",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Тохиролцоо",
    period: "",
    desc: "Том бизнест зориулсан custom шийдэл",
    features: [
      "Growth багцийн бүх зүйл",
      "Custom AI agent хөгжүүлэлт",
      "Олон суваг интеграц",
      "Dedicated менежер",
      "SLA баталгаа",
      "Онsite сургалт",
    ],
    cta: "Холбоо барих",
    highlighted: false,
  },
];

const TESTIMONIALS = [
  {
    text: "Шөнийн захиалгуудыг AI боловсруулдаг болсон. Нийт орлого 40% өсч, ажилтнуудын ачаалал мэдэгдэхүйц буурсан.",
    name: "Б.Оюунтунгалаг",
    role: "Kitty House Mongolia · Founder",
    avatar: "Б",
  },
  {
    text: "Өдөр бүр 200 гаруй ижил асуулт ирдэг байсан. Одоо AI бүгдийг шийдэж, бид чухал ажилдаа анхаарч чаддаг болсон.",
    name: "Д.Мөнхбаяр",
    role: "Кофе шоп · Эзэн",
    avatar: "Д",
  },
  {
    text: "QPay холболт хамгийн хэрэгтэй зүйл болсон. Хэрэглэгчид чат дотроос шууд төлдөг. Цуцлалт мэдэгдэхүйц буурсан.",
    name: "Э.Баярмаа",
    role: "Гоо сайхны салон · Эзэн",
    avatar: "Э",
  },
];

const FAQS = [
  { q: "Chatbot Монгол хэлийг бүрэн ойлгодог уу?", a: "Тийм. Кирилл болон латин үсгийн Монгол хэлийг, хэл яриаг (informal) ч мөн ойлгодог. Монгол хэлний контекст дээр тусгайлан сайжруулсан." },
  { q: "Нэвтрүүлэхэд хэр хугацаа шаардагдах вэ?", a: "Ихэнх тохиолдолд 3-7 хоног. Энгийн chatbot 3 хоногт, QPay болон бусад интеграцтай 5-7 хоногт бэлэн болдог." },
  { q: "Миний бизнесийн мэдээлэл аюулгүй юу?", a: "Бүх мэдээлэл шифрлэгдэж хадгалагдана. Гуравдагч этгээдтэй хуваалцахгүй. Европын GDPR стандартад нийцсэн." },
  { q: "Facebook Page байхгүй бол яах вэ?", a: "Бизнесийн Facebook Page үүсгэхэд тусалж болно. Page байгаа бол шууд холбоно. Ихэнхдээ 1 өдрийн дотор холбогддог." },
];

/* ── COMPONENT ────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "center" }}>
        {/* Grid bg */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, #6366f114 0%, transparent 70%)" }} />
        <div className="absolute pointer-events-none" style={{ width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, #8b5cf608 0%, transparent 70%)", top: "10%", left: "-10%" }} />
        <div className="absolute pointer-events-none" style={{ width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #6366f108 0%, transparent 70%)", bottom: "5%", right: "0%" }} />

        <div className="max-w-6xl mx-auto px-5 py-24 relative w-full">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="section-tag mb-6 w-fit">
              🇲🇳 Монголын #1 бизнес AI платформ
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em" }} className="mb-6">
              Таны бизнест<br />
              <span className="gradient-text">цаг тутам ажилладаг</span><br />
              AI баг
            </h1>

            <p className="mb-10 max-w-xl" style={{ fontSize: "1.1rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
              Facebook, Instagram дээр автоматаар борлуулж, QPay-аар төлбөр авч, лид менежментийг бүрэн хийдэг. Монголын бизнест зориулсан premium AI платформ.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ padding: "0.95rem 2rem", fontSize: "0.95rem" }}>
                Үнэгүй demo авах →
              </Link>
              <Link href="#services" className="btn-outline" style={{ padding: "0.95rem 2rem", fontSize: "0.95rem" }}>
                Үйлчилгээ харах
              </Link>
            </div>

            {/* Proof badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: "🏢", val: "40+", label: "Клиент" },
                { icon: "💰", val: "₮800M+", label: "Орлого үүсгэсэн" },
                { icon: "⚡", val: "3 хоног", label: "Нэвтрүүлэлт" },
              ].map(b => (
                <div key={b.val} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border2)" }}>
                  <span style={{ fontSize: "1.1rem" }}>{b.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text)" }}>{b.val}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-light)" }}>{b.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS MARQUEE ──────────────────────────────── */}
      <div className="border-y py-6 overflow-hidden" style={{ borderColor: "var(--border)" }}>
        <p className="text-center text-xs mb-5 uppercase tracking-widest" style={{ color: "var(--text-light)" }}>
          Итгэлтэй ажилладаг компаниуд
        </p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, var(--bg), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, var(--bg), transparent)" }} />
          <div className="marquee-inner">
            {CLIENTS.map((name, i) => (
              <div key={i} className="flex items-center gap-2 mx-8 flex-shrink-0">
                <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: "var(--border2)" }} />
                <span style={{ fontSize: "0.88rem", color: "var(--text-mid)", whiteSpace: "nowrap", fontWeight: 500 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESULTS ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {RESULTS.map(r => (
              <div key={r.label} className="text-center p-6 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="stat-num mb-2">{r.num}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-light)", lineHeight: 1.4 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="section-tag mb-4 mx-auto w-fit">Үйлчилгээ</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }} className="mb-4">
              Бизнесийн хэрэгцээнд тохирсон<br />
              <span className="gradient-text">AI шийдлүүд</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: 480, margin: "0 auto", fontSize: "0.95rem" }}>
              Нэг платформоос — борлуулалт, харилцагч, лид, автоматжуулалт бүгд нэг дор.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="card card-glow p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-[0.04]"
                  style={{ background: `radial-gradient(circle, ${s.color}, transparent)`, transform: "translate(20%, -20%)" }} />

                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="section-tag mb-3 w-fit" style={{ background: `${s.color}12`, borderColor: `${s.color}28`, color: s.color }}>
                      {s.tag}
                    </div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{s.title}</h3>
                  </div>
                  <span style={{ fontSize: "1.8rem" }}>{s.icon}</span>
                </div>

                <p className="mb-5" style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>

                <div className="space-y-2 mb-6">
                  {s.items.map(item => (
                    <div key={item} className="check-item">{item}</div>
                  ))}
                </div>

                <div className="rounded-xl px-4 py-3" style={{ background: `${s.color}0a`, border: `1px solid ${s.color}20` }}>
                  <p style={{ fontSize: "0.78rem", color: s.color, fontWeight: 500 }}>📈 {s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="section-tag mb-4 mx-auto w-fit">Процесс</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              3 алхамд ажилладаг болно
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #6366f130, transparent)" }} />

            {PROCESS.map((p, i) => (
              <div key={p.num} className="relative">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 font-bold text-lg"
                    style={{ background: "linear-gradient(135deg, #6366f118, #8b5cf618)", border: "1px solid #6366f130", color: "var(--primary2)", letterSpacing: "-0.02em" }}>
                    {p.num}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ───────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="section-tag mb-4 mx-auto w-fit">Case Study</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Бодит үр дүн
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border2)", background: "var(--surface2)" }}>
            {/* Header */}
            <div className="px-8 py-6 border-b flex items-center justify-between" style={{ borderColor: "var(--border)", background: "linear-gradient(135deg, #6366f108, transparent)" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border2)" }}>
                  {CASE_STUDY.logo}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{CASE_STUDY.client}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{CASE_STUDY.category}</div>
                </div>
              </div>
              <div className="section-tag" style={{ background: "#10b98112", borderColor: "#10b98128", color: "#34d399" }}>
                Амжилттай
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-light)" }}>Асуудал</div>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.65 }}>{CASE_STUDY.challenge}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-light)" }}>Шийдэл</div>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.65 }}>{CASE_STUDY.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {CASE_STUDY.metrics.map(m => (
                  <div key={m.label} className="rounded-xl p-4 text-center" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#a78bfa" }} className="mb-1">{m.value}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-light)", lineHeight: 1.3 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="rounded-xl px-6 py-5" style={{ background: "#6366f10c", border: "1px solid #6366f120" }}>
                <p style={{ fontSize: "0.95rem", color: "var(--text-mid)", fontStyle: "italic", lineHeight: 1.6 }}>
                  "{CASE_STUDY.quote}"
                </p>
                <p className="mt-3" style={{ fontSize: "0.8rem", color: "var(--text-light)", fontWeight: 500 }}>— {CASE_STUDY.author}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <section id="pricing" className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="section-tag mb-4 mx-auto w-fit">Үнэ</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em" }} className="mb-4">
              Бизнестэй тохирсон<br />
              <span className="gradient-text">ил тод үнэ</span>
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.9rem" }}>
              Далд төлбөргүй. Хэрэгцээнийхээ дагуу багцаа сонгоно.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map(plan => (
              <div key={plan.name}
                className={`card p-7 relative flex flex-col ${plan.highlighted ? "pricing-active" : ""}`}
                style={{ border: "1px solid var(--border)" }}>

                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold"
                      style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white" }}>
                      Хамгийн алдартай
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div style={{ fontSize: "0.8rem", color: "var(--text-light)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                    {plan.name}
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span style={{ fontSize: plan.price === "Тохиролцоо" ? "1.8rem" : "2.2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
                      {plan.price}
                    </span>
                    {plan.period && <span style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "0.3rem" }}>{plan.period}</span>}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-light)" }}>{plan.desc}</p>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <div key={f} className="check-item">{f}</div>
                  ))}
                </div>

                <Link href={plan.name === "Enterprise" ? "tel:80952821" : "https://app.mongolagent.mn/register"}
                  className={plan.highlighted ? "btn-primary justify-center" : "btn-outline justify-center"}>
                  {plan.name === "Enterprise" ? "Холбоо барих" : plan.name === "Starter" ? "Эхлэх" : "Эхлэх →"}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center mt-6" style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>
            Тохиромжтой багцаа олохгүй байна уу?{" "}
            <Link href="tel:80952821" style={{ color: "var(--primary2)" }}>80952821</Link>-д залгана уу.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="section-tag mb-4 mx-auto w-fit">Сэтгэгдэл</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Клиентүүд яриад байна
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card card-glow p-7">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: "#f59e0b", fontSize: "0.8rem" }}>★</span>
                  ))}
                </div>
                <p className="mb-6" style={{ fontSize: "0.88rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white" }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-light)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="section-tag mb-4 mx-auto w-fit">FAQ</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Түгээмэл асуултууд
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#6366f118", color: "var(--primary2)", fontSize: "0.7rem", fontWeight: 700 }}>
                    Q
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{f.q}</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{f.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-5">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center noise"
            style={{ background: "linear-gradient(135deg, #0d0d22 0%, #13132a 50%, #0d0d22 100%)", border: "1px solid #6366f130" }}>

            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, #6366f115 0%, transparent 70%)" }} />

            <div className="relative">
              <div className="section-tag mb-6 mx-auto w-fit">Өнөөдөр эхэл</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em" }} className="mb-4">
                Бизнесийнхээ <span className="gradient-text">AI хувьсгалыг</span><br />
                эхлүүлэх цаг болсон
              </h2>
              <p className="mb-10 max-w-lg mx-auto" style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.65 }}>
                30 минутын үнэгүй consultation-аар бизнестэй яг тохирсон AI шийдлийг олж мэдэ. Хэрэгжүүлэлт 3 хоногоос эхэлнэ.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ padding: "1rem 2.2rem", fontSize: "1rem" }}>
                  Үнэгүй demo авах →
                </Link>
                <Link href="tel:80952821" className="btn-outline" style={{ padding: "1rem 2.2rem", fontSize: "1rem" }}>
                  📞 80952821
                </Link>
              </div>

              <p className="mt-8 text-xs" style={{ color: "var(--text-light)" }}>
                Нэвтрүүлснийхээ дараа ч тасралтгүй дэмжлэг · Нуугдмал нэмэлт төлбөргүй
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
