const C = 175.93; // 2π × 28 (donut circumference)
const LINE_Y = [62, 55, 59, 42, 49, 29, 34, 17, 23, 8];
const LINE_PTS = LINE_Y.map((y, i) => [i * 18, y] as [number, number]);
const PATH_D = LINE_PTS.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
const FILL_D = `${PATH_D} L ${LINE_PTS[LINE_PTS.length - 1][0]} 72 L 0 72 Z`;

const DAYS = ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"];

const KPIS = [
  { icon: "💬", label: "Нийт мессеж", val: "12,548", delta: "+8.2%" },
  { icon: "👥", label: "Шинэ хэрэглэгч", val: "2,381", delta: "+13.4%" },
  { icon: "📋", label: "Захиалга", val: "1,024", delta: "+5.2%" },
  { icon: "💰", label: "Орлого", val: "₮12.5сая", delta: "+10.7%" },
];

const NAV = [
  { icon: "◻", label: "Тойм", active: true },
  { icon: "◻", label: "Inbox" },
  { icon: "◻", label: "Хэрэглэгчид" },
  { icon: "◻", label: "Бүтээгдэхүүн" },
  { icon: "◻", label: "Захиалга" },
  { icon: "◻", label: "AI agent" },
  { icon: "◻", label: "Flow builder" },
  { icon: "◻", label: "Тайлан" },
  { icon: "◻", label: "Тохиргоо" },
];

const NAV_EMOJIS = ["📊", "📥", "👥", "🛍️", "📋", "🤖", "⚡", "📈", "⚙️"];

const SERVICES_TOP = [
  { color: "#c4b5fd", label: "Үс засах", count: "382ш", rev: "₮1.9сая" },
  { color: "#fbcfe8", label: "Хумс", count: "296ш", rev: "₮1.6сая" },
  { color: "#bbf7d0", label: "Нүүр", count: "244ш", rev: "₮976мян" },
];

const AI_METRICS = [
  { label: "Хариулт хурд", val: "3.2 сек", pct: 62 },
  { label: "Зөв хариу %", val: "94%", pct: 94 },
  { label: "Захиалгад хувирах", val: "47%", pct: 47 },
];

const CHANNEL = [
  { color: "#6366f1", label: "Facebook", pct: "68%" },
  { color: "#ec4899", label: "Instagram", pct: "22%" },
  { color: "#e2e8f0", label: "Бусад", pct: "10%" },
];

export default function DashboardSection() {
  return (
    <section data-animate style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: "90rem", margin: "0 auto", padding: "0 1.25rem" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>
            ГАР УТАС + ШИРЭЭНИЙ КОМПЬЮТЕР
          </div>
          <h2 style={{ fontSize: "clamp(1.9rem,4vw,3.1rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Бүх channel —{" "}
            <span className="gradient-text" style={{ textDecoration: "underline", textDecorationColor: "#8b5cf6", textDecorationThickness: "3px", textUnderlineOffset: "7px" }}>
              нэг tab.
            </span>
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "500px", margin: "1rem auto 0" }}>
            Өнөөдрийн захиалга, орлого, AI хариулт, channel хуваарлалт — бүгд real-time.
          </p>
        </div>

        {/* Monitor mockup */}
        <div style={{ maxWidth: "940px", margin: "0 auto" }}>
          {/* Bezel */}
          <div style={{
            background: "linear-gradient(160deg,#2a2a42,#1a1a2e)",
            borderRadius: "22px",
            padding: "10px 10px 0",
            boxShadow: "0 50px 100px #00000022, 0 0 0 1px #ffffff10, inset 0 1px 0 #ffffff15",
          }}>
            {/* Camera dot */}
            <div style={{ display: "flex", justifyContent: "center", paddingBottom: "8px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#3a3a55" }} />
            </div>

            {/* Screen */}
            <div style={{ borderRadius: "12px 12px 0 0", overflow: "hidden", display: "flex", height: "490px", background: "white" }}>

              {/* ── Sidebar ── */}
              <div style={{ width: "152px", background: "white", borderRight: "1px solid #f1f5f9", display: "flex", flexDirection: "column", flexShrink: 0 }}>
                {/* Brand */}
                <div style={{ padding: "14px 12px 12px", borderBottom: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "7px", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: "0.52rem", color: "white", fontWeight: 800, letterSpacing: "-0.02em" }}>MA</span>
                    </div>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#1e293b", lineHeight: 1 }}>Mongol Agent</span>
                  </div>
                </div>

                {/* Nav */}
                <div style={{ padding: "8px 6px", flex: 1, overflowY: "hidden" }}>
                  {NAV.map((item, i) => (
                    <div key={item.label} style={{
                      display: "flex", alignItems: "center", gap: "7px",
                      padding: "5px 7px", borderRadius: "7px", marginBottom: "1px",
                      background: item.active ? "#eef2ff" : "transparent",
                    }}>
                      <span style={{ fontSize: "0.68rem", lineHeight: 1 }}>{NAV_EMOJIS[i]}</span>
                      <span style={{ fontSize: "0.63rem", fontWeight: item.active ? 600 : 500, color: item.active ? "#4f46e5" : "#64748b", whiteSpace: "nowrap" }}>{item.label}</span>
                      {item.label === "Inbox" && (
                        <div style={{ marginLeft: "auto", background: "#6366f1", color: "white", fontSize: "0.48rem", fontWeight: 700, borderRadius: "100px", padding: "1px 4px" }}>12</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Business */}
                <div style={{ padding: "10px 10px", borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: "7px" }}>
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "linear-gradient(135deg,#f9a8d4,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.52rem", color: "white", fontWeight: 700 }}>L</span>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#1e293b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Lumière Salon</div>
                    <div style={{ fontSize: "0.52rem", color: "#94a3b8" }}>Growth</div>
                  </div>
                </div>
              </div>

              {/* ── Main content ── */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#f8fafc" }}>
                {/* Content header */}
                <div style={{ padding: "12px 16px", background: "white", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", lineHeight: 1.2 }}>Тойм</div>
                    <div style={{ fontSize: "0.56rem", color: "#94a3b8", marginTop: "1px" }}>Сайн уу, Lumière Salon 💆 Өнөөдрийн үр дүн</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ fontSize: "0.55rem", color: "#64748b", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "5px", padding: "3px 7px", display: "flex", alignItems: "center", gap: "3px" }}>
                      📅 5-р сар 12 — 18
                    </div>
                    <div style={{ fontSize: "0.55rem", color: "white", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius: "5px", padding: "3px 8px", fontWeight: 600 }}>
                      + Шинэ үрсгал
                    </div>
                  </div>
                </div>

                {/* Scrollable body */}
                <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px" }}>

                  {/* KPI cards */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px", marginBottom: "12px" }}>
                    {KPIS.map(k => (
                      <div key={k.label} style={{ background: "white", borderRadius: "9px", padding: "9px 10px", border: "1px solid #f1f5f9", boxShadow: "0 1px 3px #00000006" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                          <div style={{ fontSize: "0.52rem", color: "#94a3b8", fontWeight: 500, lineHeight: 1.3 }}>{k.label}</div>
                          <span style={{ fontSize: "0.6rem" }}>{k.icon}</span>
                        </div>
                        <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#1e293b", letterSpacing: "-0.02em", lineHeight: 1 }}>{k.val}</div>
                        <div style={{ fontSize: "0.52rem", color: "#10b981", fontWeight: 600, marginTop: "2px" }}>{k.delta}</div>
                      </div>
                    ))}
                  </div>

                  {/* Charts row */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 0.68fr", gap: "8px", marginBottom: "8px" }}>
                    {/* Line chart */}
                    <div style={{ background: "white", borderRadius: "9px", padding: "10px 12px", border: "1px solid #f1f5f9" }}>
                      <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#1e293b", marginBottom: "8px" }}>Захиалга — 7 хоног</div>
                      <svg viewBox="0 0 162 86" style={{ width: "100%", height: "80px", display: "block", overflow: "visible" }}>
                        <defs>
                          <linearGradient id="dbGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d={FILL_D} fill="url(#dbGrad)" />
                        <path d={PATH_D} fill="none" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        {LINE_PTS.map(([x, y]) => (
                          <circle key={x} cx={x} cy={y} r="2" fill="#6366f1" />
                        ))}
                        {DAYS.map((d, i) => (
                          <text key={d} x={i * 27} y={83} style={{ fontSize: "4.5px", fill: "#94a3b8" }}>{d}</text>
                        ))}
                      </svg>
                    </div>

                    {/* Donut chart */}
                    <div style={{ background: "white", borderRadius: "9px", padding: "10px 12px", border: "1px solid #f1f5f9" }}>
                      <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#1e293b", marginBottom: "8px" }}>Channel</div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <svg viewBox="0 0 80 80" style={{ width: "68px", height: "68px", flexShrink: 0 }}>
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#f1f5f9" strokeWidth="11" />
                          {/* Facebook 68% */}
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#6366f1" strokeWidth="11"
                            strokeDasharray={`${0.68 * C} ${C}`}
                            strokeDashoffset={C * 0.25}
                            strokeLinecap="round" />
                          {/* Instagram 22% */}
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#ec4899" strokeWidth="11"
                            strokeDasharray={`${0.22 * C} ${C}`}
                            strokeDashoffset={C * 0.25 - 0.68 * C} />
                          <text x="40" y="38" textAnchor="middle" style={{ fontSize: "9px", fontWeight: 700, fill: "#1e293b" }}>68%</text>
                          <text x="40" y="47" textAnchor="middle" style={{ fontSize: "5px", fill: "#94a3b8" }}>Messenger</text>
                        </svg>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                          {CHANNEL.map(c => (
                            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: c.color, flexShrink: 0 }} />
                              <div style={{ fontSize: "0.52rem", color: "#64748b", flex: 1 }}>{c.label}</div>
                              <div style={{ fontSize: "0.55rem", fontWeight: 700, color: "#1e293b" }}>{c.pct}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {/* Top services */}
                    <div style={{ background: "white", borderRadius: "9px", padding: "10px 12px", border: "1px solid #f1f5f9" }}>
                      <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#1e293b", marginBottom: "9px" }}>Топ бүтээгдэхүүн</div>
                      {SERVICES_TOP.map(p => (
                        <div key={p.label} style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "7px" }}>
                          <div style={{ width: "22px", height: "22px", borderRadius: "5px", background: p.color, flexShrink: 0 }} />
                          <div style={{ flex: 1, fontSize: "0.57rem", color: "#374151", fontWeight: 500 }}>{p.label}</div>
                          <div style={{ fontSize: "0.52rem", color: "#94a3b8" }}>{p.count}</div>
                          <div style={{ fontSize: "0.57rem", fontWeight: 700, color: "#1e293b" }}>{p.rev}</div>
                        </div>
                      ))}
                    </div>

                    {/* AI quality */}
                    <div style={{ background: "white", borderRadius: "9px", padding: "10px 12px", border: "1px solid #f1f5f9" }}>
                      <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#1e293b", marginBottom: "9px" }}>AI хариултын чанар</div>
                      {AI_METRICS.map(m => (
                        <div key={m.label} style={{ marginBottom: "8px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                            <div style={{ fontSize: "0.52rem", color: "#64748b" }}>{m.label}</div>
                            <div style={{ fontSize: "0.57rem", fontWeight: 700, color: "#1e293b" }}>{m.val}</div>
                          </div>
                          <div style={{ height: "4px", borderRadius: "100px", background: "#f1f5f9", overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${m.pct}%`, borderRadius: "100px", background: "linear-gradient(90deg,#6366f1,#8b5cf6)" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Stand */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "72px", height: "30px", background: "linear-gradient(180deg,#2a2a42,#1a1a2e)", clipPath: "polygon(18% 0%,82% 0%,100% 100%,0% 100%)" }} />
            <div style={{ width: "148px", height: "8px", background: "#1a1a2e", borderRadius: "0 0 8px 8px" }} />
          </div>
        </div>

      </div>
    </section>
  );
}
