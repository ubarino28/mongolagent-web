"use client";
import { useState } from "react";

const TABS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "orders",    label: "Захиалга" },
  { id: "inbox",     label: "Inbox" },
];

const ORDERS = [
  { name:"Оюунаа", service:"Үс засах",        time:"14:00", status:"confirmed" },
  { name:"Болд",   service:"QPay төлсөн",      time:"13:30", status:"paid" },
  { name:"Дэлгэр", service:"Нүүр арчилгаа",   time:"15:00", status:"pending" },
  { name:"Сарнай", service:"Хумс",             time:"11:00", status:"done" },
  { name:"Анар",   service:"Үс засах",         time:"16:00", status:"confirmed" },
];

const STATUS_CFG = {
  confirmed: { label:"Баталгаажсан",      color:"#18181b", bg:"#f4f4f4", border:"#d0d0d0" },
  paid:      { label:"Төлсөн ✓",          color:"#18181b", bg:"#f4f4f4", border:"#d0d0d0" },
  pending:   { label:"Хүлээгдэж байна",   color:"#525252", bg:"#f4f4f4", border:"#e8e8e8" },
  done:      { label:"Дууссан",           color:"#a3a3a3", bg:"#fafafa", border:"#e8e8e8" },
};

const CONVOS = [
  { av:"О", name:"Оюунаа", msg:"Цаг авах боломжтой юу?",      time:"1м",  unread:true,  ch:"FB" },
  { av:"Б", name:"Болд",   msg:"QPay-аар төлсөн!",            time:"5м",  unread:false, ch:"IG" },
  { av:"Д", name:"Дэлгэр", msg:"Үнэ хэд вэ?",                time:"12м", unread:true,  ch:"TG" },
  { av:"С", name:"Сарнай", msg:"Захиалга баталгаажлаа",       time:"18м", unread:false, ch:"FB" },
  { av:"А", name:"Анар",   msg:"Маргааш 14:00 боломжтой юу?", time:"24м", unread:true,  ch:"IG" },
];

const BARS = [40, 62, 48, 78, 58, 88, 72];

const IconInbox = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </svg>
);
const IconChart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconBot = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
  </svg>
);

const FEATURES = [
  { icon: <IconInbox />, title:"Нэг unified inbox",     desc:"Facebook, Instagram, Telegram — бүх мессеж нэг дороос" },
  { icon: <IconChart />, title:"Real-time аналитик",    desc:"Орлого, захиалга, хэрэглэгч — бодит цагт хянана" },
  { icon: <IconBot />,   title:"AI хариулт хянах",      desc:"AI юу хэлсэн, хэр зөв — бүгдийг нэг дороос харна" },
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

          {/* Left: text */}
          <div>
            <div className="section-tag" style={{ display:"inline-flex", marginBottom:"1rem" }}>
              ГАР УТАС + ШИРЭЭНИЙ КОМПЬЮТЕР
            </div>
            <h2 style={{ fontSize:"clamp(1.9rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:"1.25rem" }}>
              Бүх channel —{" "}
              <span style={{ fontStyle:"italic" }}>нэг tab.</span>
            </h2>
            <p style={{ color:"var(--text-mid)", fontSize:"0.95rem", lineHeight:1.75, marginBottom:"2rem", maxWidth:"400px" }}>
              Өнөөдрийн захиалга, орлого, AI хариулт, channel хуваарлалт — бүгд real-time нэг dashboard дээр.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:"1.1rem", marginBottom:"2.5rem" }}>
              {FEATURES.map(f => (
                <div key={f.title} style={{ display:"flex", alignItems:"flex-start", gap:"0.875rem" }}>
                  <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:"var(--surface2)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, color:"var(--text-mid)" }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ fontSize:"0.875rem", fontWeight:700, color:"var(--text)", marginBottom:"0.2rem" }}>{f.title}</div>
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

          {/* Right: tabbed dashboard */}
          <div style={{
            borderRadius:"16px", overflow:"hidden",
            border:"1px solid var(--border)", background:"white",
            boxShadow:"0 24px 64px rgba(0,0,0,0.07), 0 4px 20px rgba(0,0,0,0.04)",
          }}>
            {/* Browser chrome */}
            <div style={{ padding:"10px 14px", background:"var(--surface2)", borderBottom:"1px solid var(--border)", display:"flex", alignItems:"center", gap:"6px" }}>
              {["#e8e8e8","#d0d0d0","#bebebe"].map(c => (
                <div key={c} style={{ width:"10px", height:"10px", borderRadius:"50%", background:c }} />
              ))}
              <div style={{ flex:1, marginLeft:"8px", background:"white", border:"1px solid var(--border)", borderRadius:"6px", padding:"3px 10px", fontSize:"0.6rem", color:"var(--text-light)" }}>
                app.mongolagent.mn/dashboard
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display:"flex", borderBottom:"1px solid var(--border)", background:"var(--surface)" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id as typeof activeTab)} style={{
                  flex:1, padding:"10px 6px", border:"none", cursor:"pointer",
                  fontSize:"0.72rem", fontWeight:600, background:"transparent", transition:"all 0.18s",
                  color: activeTab === t.id ? "var(--text)" : "var(--text-light)",
                  borderBottom: activeTab === t.id ? "2px solid var(--accent)" : "2px solid transparent",
                }}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Content area */}
            <div className="db-tab-content" style={{ height:"360px", overflowY:"auto", scrollbarWidth:"none" }}>

              {/* DASHBOARD */}
              {activeTab === "dashboard" && (
                <div style={{ padding:"1rem" }}>
                  {/* Revenue card */}
                  <div style={{ borderRadius:"12px", padding:"1rem 1.1rem", marginBottom:"0.75rem", background:"var(--accent)" }}>
                    <div style={{ fontSize:"0.58rem", fontWeight:600, color:"rgba(255,255,255,0.5)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"4px" }}>Өнөөдрийн орлого</div>
                    <div style={{ fontSize:"1.75rem", fontWeight:800, color:"white", letterSpacing:"-0.03em", lineHeight:1, marginBottom:"4px" }}>₮1,270,000</div>
                    <div style={{ fontSize:"0.62rem", color:"rgba(255,255,255,0.5)", marginBottom:"10px" }}>↑ +25,000₮ өчигдрөөс</div>
                    <div style={{ display:"flex", alignItems:"flex-end", gap:"3px", height:"32px" }}>
                      {BARS.map((h, i) => (
                        <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:"3px 3px 0 0", background: i === BARS.length-1 ? "white" : "rgba(255,255,255,0.25)" }} />
                      ))}
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"0.5rem", marginBottom:"0.75rem" }}>
                    {[
                      { label:"Захиалга",      val:"24" },
                      { label:"AI нарийвчлал", val:"94%" },
                      { label:"Хариулт",       val:"3.2с" },
                    ].map(s => (
                      <div key={s.label} style={{ borderRadius:"10px", padding:"0.6rem 0.5rem", background:"var(--surface2)", border:"1px solid var(--border)", textAlign:"center" }}>
                        <div style={{ fontSize:"0.9rem", fontWeight:800, color:"var(--text)", letterSpacing:"-0.02em" }}>{s.val}</div>
                        <div style={{ fontSize:"0.55rem", color:"var(--text-light)", marginTop:"1px" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Channel breakdown */}
                  <div style={{ borderRadius:"10px", padding:"0.7rem 0.875rem", background:"var(--surface2)", border:"1px solid var(--border)" }}>
                    <div style={{ fontSize:"0.6rem", fontWeight:700, color:"var(--text-light)", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:"0.5rem" }}>Channel хуваарилалт</div>
                    {[
                      { ch:"Facebook",  pct:52 },
                      { ch:"Instagram", pct:31 },
                      { ch:"Telegram",  pct:17 },
                    ].map((c, i) => (
                      <div key={c.ch} style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.4rem" }}>
                        <div style={{ fontSize:"0.65rem", color:"var(--text-mid)", width:"68px", flexShrink:0 }}>{c.ch}</div>
                        <div style={{ flex:1, height:"4px", borderRadius:"100px", background:"var(--border)", overflow:"hidden" }}>
                          <div style={{ height:"100%", width:`${c.pct}%`, background: i === 0 ? "var(--accent)" : i === 1 ? "var(--accent-mid)" : "var(--border2)", borderRadius:"100px" }} />
                        </div>
                        <div style={{ fontSize:"0.62rem", fontWeight:700, color:"var(--text-mid)", width:"28px", textAlign:"right" }}>{c.pct}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ORDERS */}
              {activeTab === "orders" && (
                <div style={{ padding:"0.875rem" }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.75rem" }}>
                    <div style={{ fontSize:"0.72rem", fontWeight:700, color:"var(--text)" }}>Өнөөдрийн захиалга</div>
                    <div style={{ fontSize:"0.6rem", fontWeight:700, color:"white", background:"var(--accent)", borderRadius:"100px", padding:"2px 9px" }}>5 захиалга</div>
                  </div>

                  <div style={{ display:"flex", flexDirection:"column", gap:"0.4rem" }}>
                    {ORDERS.map((o, i) => {
                      const st = STATUS_CFG[o.status as keyof typeof STATUS_CFG];
                      return (
                        <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.6rem", padding:"0.55rem 0.7rem", borderRadius:"10px", background:"var(--surface2)", border:"1px solid var(--border)" }}>
                          <div style={{ width:"30px", height:"30px", borderRadius:"50%", background:"var(--surface3)", color:"var(--text-mid)", fontSize:"0.68rem", fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                            {o.name.slice(0,1)}
                          </div>
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

                  <div style={{ marginTop:"0.75rem", borderRadius:"10px", padding:"0.6rem 0.875rem", background:"var(--surface2)", border:"1px solid var(--border)", display:"flex", alignItems:"center", gap:"0.5rem" }}>
                    <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"var(--accent)", flexShrink:0 }} />
                    <div style={{ fontSize:"0.7rem", color:"var(--text-mid)", fontWeight:600 }}>AI автоматаар 5 захиалга боловсруулсан</div>
                  </div>
                </div>
              )}

              {/* INBOX */}
              {activeTab === "inbox" && (
                <div>
                  <div style={{ padding:"0.65rem 0.875rem", borderBottom:"1px solid var(--border)", display:"flex", alignItems:"center", gap:"8px", background:"white" }}>
                    <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"var(--accent)", flexShrink:0 }}/>
                    <span style={{ fontSize:"0.73rem", fontWeight:700, color:"var(--text)", flex:1 }}>Unified Inbox</span>
                    <div style={{ fontSize:"0.58rem", fontWeight:700, color:"white", background:"var(--accent)", borderRadius:"100px", padding:"2px 8px" }}>3 шинэ</div>
                  </div>

                  {CONVOS.map((c, i) => (
                    <div key={c.name} style={{
                      padding:"10px 14px", display:"flex", alignItems:"center", gap:"9px",
                      background: c.unread ? "var(--surface2)" : "white",
                      borderBottom: i < CONVOS.length-1 ? "1px solid var(--border)" : "none",
                    }}>
                      <div style={{ position:"relative", flexShrink:0 }}>
                        <div style={{ width:"32px", height:"32px", borderRadius:"50%", background:"var(--surface3)", color:"var(--text-mid)", fontSize:"0.68rem", fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center" }}>{c.av}</div>
                        <div style={{ position:"absolute", bottom:"-1px", right:"-2px", width:"14px", height:"14px", borderRadius:"4px", background:"var(--accent)", border:"1.5px solid white", display:"flex", alignItems:"center", justifyContent:"center" }}>
                          <span style={{ fontSize:"0.36rem", color:"white", fontWeight:900, letterSpacing:"-0.02em" }}>{c.ch}</span>
                        </div>
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"2px" }}>
                          <div style={{ fontSize:"0.7rem", fontWeight:c.unread?700:500, color:"var(--text)" }}>{c.name}</div>
                          <div style={{ fontSize:"0.57rem", color:"var(--text-light)", flexShrink:0 }}>{c.time}</div>
                        </div>
                        <div style={{ fontSize:"0.63rem", color:c.unread?"var(--text-mid)":"var(--text-light)", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis" }}>{c.msg}</div>
                      </div>
                      {c.unread && <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"var(--accent)", flexShrink:0 }}/>}
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
