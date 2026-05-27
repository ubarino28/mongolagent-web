"use client";
import { useState } from "react";

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "orders",    label: "Захиалга",  icon: "📅" },
  { id: "inbox",     label: "Inbox",     icon: "💬" },
];

const ORDERS = [
  { name:"Оюунаа", service:"Үс засах",        time:"14:00", status:"confirmed", av:"О", avBg:"linear-gradient(135deg,#f9a8d4,#ec4899)" },
  { name:"Болд",   service:"QPay төлсөн",      time:"13:30", status:"paid",      av:"Б", avBg:"linear-gradient(135deg,#fb923c,#f59e0b)" },
  { name:"Дэлгэр", service:"Нүүр арчилгаа",   time:"15:00", status:"pending",   av:"Д", avBg:"linear-gradient(135deg,#818cf8,#6366f1)" },
  { name:"Сарнай", service:"Хумс",             time:"11:00", status:"done",      av:"С", avBg:"linear-gradient(135deg,#34d399,#059669)" },
  { name:"Анар",   service:"Үс засах",         time:"16:00", status:"confirmed", av:"А", avBg:"linear-gradient(135deg,#7dd3fc,#0284c7)" },
];

const STATUS_CFG = {
  confirmed: { label:"Баталгаажсан",      color:"#6366f1", bg:"#eef2ff", border:"#c7d2fe" },
  paid:      { label:"Төлсөн ✓",          color:"#059669", bg:"#d1fae5", border:"#6ee7b7" },
  pending:   { label:"Хүлээгдэж байна",   color:"#d97706", bg:"#fef3c7", border:"#fcd34d" },
  done:      { label:"Дууссан",           color:"#9ca3af", bg:"#f3f4f6", border:"#e5e7eb" },
};

const CONVOS = [
  { av:"О", avBg:"linear-gradient(135deg,#f9a8d4,#ec4899)", name:"Оюунаа", msg:"Цаг авах боломжтой юу?",     time:"1м",  unread:true,  ch:"FB" },
  { av:"Б", avBg:"linear-gradient(135deg,#fb923c,#f59e0b)", name:"Болд",   msg:"QPay-аар төлсөн! ✅",        time:"5м",  unread:false, ch:"IG" },
  { av:"Д", avBg:"linear-gradient(135deg,#818cf8,#6366f1)", name:"Дэлгэр", msg:"Үнэ хэд вэ?",               time:"12м", unread:true,  ch:"TG" },
  { av:"С", avBg:"linear-gradient(135deg,#34d399,#059669)", name:"Сарнай", msg:"Захиалга баталгаажлаа 🎉",   time:"18м", unread:false, ch:"FB" },
  { av:"А", avBg:"linear-gradient(135deg,#7dd3fc,#0284c7)", name:"Анар",   msg:"Маргааш 14:00 боломжтой уу?",time:"24м", unread:true,  ch:"IG" },
];

const CH_COLOR: Record<string,string> = { FB:"#1877F2", IG:"#E1306C", TG:"#26A5E4" };
const BARS = [40, 62, 48, 78, 58, 88, 72];

const FEATURES = [
  { icon:"💬", title:"Нэг unified inbox",     desc:"Facebook, Instagram, Telegram — бүх мессеж нэг дороос" },
  { icon:"📊", title:"Real-time аналитик",    desc:"Орлого, захиалга, хэрэглэгч — бодит цагт хянана" },
  { icon:"🤖", title:"AI хариулт хянах",      desc:"AI юу хэлсэн, хэр зөв — бүгдийг нэг дороос харна" },
];

const STATS = [
  { num:"12,548", label:"Сарын мессеж" },
  { num:"94%",    label:"AI нарийвчлал" },
  { num:"3.2с",   label:"Хариулт хурд" },
];

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState<"dashboard"|"orders"|"inbox">("dashboard");

  return (
    <section data-animate style={{ padding:"7rem 0", overflow:"hidden" }}>
      <div style={{ maxWidth:"80rem", margin:"0 auto", padding:"0 1.25rem" }}>
        <div className="dashboard-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:"4rem", alignItems:"center" }}>

          {/* ── Left: text ── */}
          <div>
            <div className="section-tag" style={{ display:"inline-flex", marginBottom:"1rem" }}>
              ГАР УТАС + ШИРЭЭНИЙ КОМПЬЮТЕР
            </div>
            <h2 style={{ fontSize:"clamp(1.9rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:"1.25rem" }}>
              Бүх channel —{" "}
              <span className="gradient-text">нэг tab.</span>
            </h2>
            <p style={{ color:"var(--text-mid)", fontSize:"0.95rem", lineHeight:1.75, marginBottom:"2rem", maxWidth:"400px" }}>
              Өнөөдрийн захиалга, орлого, AI хариулт, channel хуваарлалт — бүгд real-time нэг dashboard дээр.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:"1.1rem", marginBottom:"2.5rem" }}>
              {FEATURES.map(f => (
                <div key={f.title} style={{ display:"flex", alignItems:"flex-start", gap:"0.875rem" }}>
                  <div style={{ width:"40px", height:"40px", borderRadius:"11px", background:"linear-gradient(135deg,#6366f110,#8b5cf110)", border:"1px solid #6366f118", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"1.15rem" }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ fontSize:"0.88rem", fontWeight:700, color:"var(--text)", marginBottom:"0.2rem" }}>{f.title}</div>
                    <div style={{ fontSize:"0.79rem", color:"var(--text-mid)", lineHeight:1.55 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display:"flex", gap:"2rem", paddingTop:"1.75rem", borderTop:"1px solid var(--border)" }}>
              {STATS.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize:"1.5rem", fontWeight:800, letterSpacing:"-0.025em", color:"var(--text)", lineHeight:1 }}>{s.num}</div>
                  <div style={{ fontSize:"0.68rem", color:"var(--text-light)", marginTop:"3px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: tabbed dashboard ── */}
          <div style={{
            borderRadius:"20px", overflow:"hidden",
            border:"1px solid #e8e5f5", background:"white",
            boxShadow:"0 24px 64px #6366f114, 0 4px 20px #00000009",
          }}>
            {/* Browser chrome */}
            <div style={{ padding:"10px 14px", background:"#f8f7fc", borderBottom:"1px solid #ede9f8", display:"flex", alignItems:"center", gap:"6px" }}>
              {["#ff5f57","#febc2e","#28c840"].map(c => (
                <div key={c} style={{ width:"10px", height:"10px", borderRadius:"50%", background:c }} />
              ))}
              <div style={{ flex:1, marginLeft:"8px", background:"white", border:"1px solid #e5e1f5", borderRadius:"6px", padding:"3px 10px", fontSize:"0.6rem", color:"#9ca3af" }}>
                app.mongolagent.mn/dashboard
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display:"flex", borderBottom:"1px solid #ede9f8", background:"#f8f7fc" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id as typeof activeTab)} style={{
                  flex:1, padding:"10px 6px", border:"none", cursor:"pointer",
                  fontSize:"0.72rem", fontWeight:600, background:"transparent", transition:"all 0.18s",
                  color: activeTab === t.id ? "#6366f1" : "#9ca3af",
                  borderBottom: activeTab === t.id ? "2px solid #6366f1" : "2px solid transparent",
                  display:"flex", alignItems:"center", justifyContent:"center", gap:"4px",
                }}>
                  <span style={{ fontSize:"0.85rem" }}>{t.icon}</span>{t.label}
                </button>
              ))}
            </div>

            {/* Content area */}
            <div className="db-tab-content" style={{ height:"360px", overflowY:"auto", scrollbarWidth:"none" }}>

              {/* ── DASHBOARD ── */}
              {activeTab === "dashboard" && (
                <div style={{ padding:"1rem" }}>
                  {/* Revenue card */}
                  <div style={{ borderRadius:"14px", padding:"1rem 1.1rem", marginBottom:"0.75rem", background:"linear-gradient(135deg,#6366f1,#8b5cf6)", boxShadow:"0 8px 28px #6366f128" }}>
                    <div style={{ fontSize:"0.58rem", fontWeight:600, color:"rgba(255,255,255,0.7)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"4px" }}>Өнөөдрийн орлого</div>
                    <div style={{ fontSize:"1.75rem", fontWeight:800, color:"white", letterSpacing:"-0.03em", lineHeight:1, marginBottom:"4px" }}>₮1,270,000</div>
                    <div style={{ fontSize:"0.62rem", color:"rgba(255,255,255,0.7)", marginBottom:"10px" }}>↑ +25,000₮ өчигдрөөс</div>
                    <div style={{ display:"flex", alignItems:"flex-end", gap:"3px", height:"32px" }}>
                      {BARS.map((h, i) => (
                        <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:"3px 3px 0 0", background: i === BARS.length-1 ? "white" : "rgba(255,255,255,0.35)" }} />
                      ))}
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"0.5rem", marginBottom:"0.75rem" }}>
                    {[
                      { label:"Захиалга",      val:"24",   icon:"📅", color:"#6366f1" },
                      { label:"AI нарийвчлал", val:"94%",  icon:"🤖", color:"#10b981" },
                      { label:"Хариулт",       val:"3.2с", icon:"⚡", color:"#f59e0b" },
                    ].map(s => (
                      <div key={s.label} style={{ borderRadius:"12px", padding:"0.6rem 0.5rem", background:"var(--surface2)", border:"1px solid var(--border)", textAlign:"center" }}>
                        <div style={{ fontSize:"1rem", marginBottom:"2px" }}>{s.icon}</div>
                        <div style={{ fontSize:"0.9rem", fontWeight:800, color:s.color, letterSpacing:"-0.02em" }}>{s.val}</div>
                        <div style={{ fontSize:"0.55rem", color:"var(--text-light)", marginTop:"1px" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Channel breakdown */}
                  <div style={{ borderRadius:"12px", padding:"0.7rem 0.875rem", background:"var(--surface2)", border:"1px solid var(--border)" }}>
                    <div style={{ fontSize:"0.6rem", fontWeight:700, color:"var(--text-light)", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:"0.5rem" }}>Channel хуваарилалт</div>
                    {[
                      { ch:"Facebook",  pct:52, color:"#1877F2" },
                      { ch:"Instagram", pct:31, color:"#E1306C" },
                      { ch:"Telegram",  pct:17, color:"#26A5E4" },
                    ].map(c => (
                      <div key={c.ch} style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.4rem" }}>
                        <div style={{ fontSize:"0.65rem", color:"var(--text-mid)", width:"68px", flexShrink:0 }}>{c.ch}</div>
                        <div style={{ flex:1, height:"5px", borderRadius:"100px", background:"var(--border)", overflow:"hidden" }}>
                          <div style={{ height:"100%", width:`${c.pct}%`, background:c.color, borderRadius:"100px" }} />
                        </div>
                        <div style={{ fontSize:"0.62rem", fontWeight:700, color:"var(--text-mid)", width:"28px", textAlign:"right" }}>{c.pct}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── ORDERS ── */}
              {activeTab === "orders" && (
                <div style={{ padding:"0.875rem" }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.75rem" }}>
                    <div style={{ fontSize:"0.72rem", fontWeight:700, color:"var(--text)" }}>Өнөөдрийн захиалга</div>
                    <div style={{ fontSize:"0.6rem", fontWeight:700, color:"white", background:"linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius:"100px", padding:"2px 9px" }}>5 захиалга</div>
                  </div>

                  <div style={{ display:"flex", flexDirection:"column", gap:"0.4rem" }}>
                    {ORDERS.map((o, i) => {
                      const st = STATUS_CFG[o.status as keyof typeof STATUS_CFG];
                      return (
                        <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.6rem", padding:"0.55rem 0.7rem", borderRadius:"10px", background:"var(--surface2)", border:"1px solid var(--border)" }}>
                          <div style={{ width:"30px", height:"30px", borderRadius:"50%", background:o.avBg, color:"white", fontSize:"0.68rem", fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{o.av}</div>
                          <div style={{ flex:1, minWidth:0 }}>
                            <div style={{ fontSize:"0.73rem", fontWeight:700, color:"var(--text)" }}>{o.name}</div>
                            <div style={{ fontSize:"0.62rem", color:"var(--text-light)", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis" }}>{o.service}</div>
                          </div>
                          <div style={{ fontSize:"0.65rem", fontWeight:600, color:"var(--text-mid)", flexShrink:0 }}>{o.time}</div>
                          <div style={{ fontSize:"0.58rem", fontWeight:700, color:st.color, background:st.bg, border:`1px solid ${st.border}`, borderRadius:"100px", padding:"2px 7px", whiteSpace:"nowrap", flexShrink:0 }}>{st.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ marginTop:"0.75rem", borderRadius:"10px", padding:"0.6rem 0.875rem", background:"linear-gradient(135deg,#f0fdf4,#dcfce7)", border:"1px solid #bbf7d0", display:"flex", alignItems:"center", gap:"0.5rem" }}>
                    <span style={{ fontSize:"1rem" }}>✅</span>
                    <div style={{ fontSize:"0.7rem", color:"#15803d", fontWeight:600 }}>AI автоматаар 5 захиалга боловсруулсан</div>
                  </div>
                </div>
              )}

              {/* ── INBOX ── */}
              {activeTab === "inbox" && (
                <div>
                  <div style={{ padding:"0.65rem 0.875rem", borderBottom:"1px solid #f4f2fb", display:"flex", alignItems:"center", gap:"8px", background:"white" }}>
                    <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#10b981", flexShrink:0 }}/>
                    <span style={{ fontSize:"0.73rem", fontWeight:700, color:"#1e293b", flex:1 }}>Unified Inbox</span>
                    <div style={{ fontSize:"0.58rem", fontWeight:700, color:"white", background:"linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius:"100px", padding:"2px 8px" }}>3 шинэ</div>
                  </div>

                  {CONVOS.map((c, i) => (
                    <div key={c.name} style={{
                      padding:"10px 14px", display:"flex", alignItems:"center", gap:"9px",
                      background: c.unread ? "#faf9ff" : "white",
                      borderBottom: i < CONVOS.length-1 ? "1px solid #f8f7fc" : "none",
                    }}>
                      <div style={{ position:"relative", flexShrink:0 }}>
                        <div style={{ width:"32px", height:"32px", borderRadius:"50%", background:c.avBg, color:"white", fontSize:"0.68rem", fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center" }}>{c.av}</div>
                        <div style={{ position:"absolute", bottom:"-1px", right:"-2px", width:"14px", height:"14px", borderRadius:"4px", background:CH_COLOR[c.ch], border:"1.5px solid white", display:"flex", alignItems:"center", justifyContent:"center" }}>
                          <span style={{ fontSize:"0.38rem", color:"white", fontWeight:900, letterSpacing:"-0.02em" }}>{c.ch}</span>
                        </div>
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"2px" }}>
                          <div style={{ fontSize:"0.7rem", fontWeight:c.unread?700:500, color:"#1e293b" }}>{c.name}</div>
                          <div style={{ fontSize:"0.57rem", color:"#94a3b8", flexShrink:0 }}>{c.time}</div>
                        </div>
                        <div style={{ fontSize:"0.63rem", color:c.unread?"#64748b":"#94a3b8", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis" }}>{c.msg}</div>
                      </div>
                      {c.unread && <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#6366f1", flexShrink:0 }}/>}
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
