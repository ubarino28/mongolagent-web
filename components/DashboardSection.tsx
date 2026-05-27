const CONVOS = [
  { av:"О", avBg:"linear-gradient(135deg,#f9a8d4,#ec4899)", name:"Оюунаа", msg:"Цаг авах боломжтой юу?",     time:"1м",  unread:true  },
  { av:"Б", avBg:"linear-gradient(135deg,#fb923c,#f59e0b)", name:"Болд",    msg:"QPay-аар төлсөн! ✅",          time:"5м",  unread:false },
  { av:"Д", avBg:"linear-gradient(135deg,#818cf8,#6366f1)", name:"Дэлгэр",  msg:"Үнэ хэд вэ?",                time:"12м", unread:true  },
  { av:"С", avBg:"linear-gradient(135deg,#34d399,#059669)", name:"Сарнай",  msg:"Захиалга баталгаажлаа 🎉",    time:"18м", unread:false },
  { av:"А", avBg:"linear-gradient(135deg,#7dd3fc,#0284c7)", name:"Анар",    msg:"Маргааш 14:00 боломжтой уу?", time:"24м", unread:true  },
];

const FEATURES = [
  { icon:"💬", title:"Нэг unified inbox", desc:"Facebook, Instagram, Telegram — бүх мессеж нэг дороос" },
  { icon:"📊", title:"Real-time аналитик", desc:"Орлого, захиалга, хэрэглэгч — бодит цагт хянана" },
  { icon:"🤖", title:"AI хариулт хянах", desc:"AI юу хэлсэн, хэр зөв — бүгдийг нэг дороос харна" },
];

const STATS = [
  { num:"12,548", label:"Сарын мессеж" },
  { num:"94%",    label:"AI нарийвчлал" },
  { num:"3.2с",   label:"Хариулт хурд"  },
];

export default function DashboardSection() {
  return (
    <section data-animate style={{ padding:"7rem 0", overflow:"hidden" }}>
      <div style={{ maxWidth:"80rem", margin:"0 auto", padding:"0 1.25rem" }}>
        <div className="dashboard-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1.15fr", gap:"4rem", alignItems:"center" }}>

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

            {/* Features */}
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

            {/* Stats row */}
            <div style={{ display:"flex", gap:"2rem", paddingTop:"1.75rem", borderTop:"1px solid var(--border)" }}>
              {STATS.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize:"1.5rem", fontWeight:800, letterSpacing:"-0.025em", color:"var(--text)", lineHeight:1 }}>{s.num}</div>
                  <div style={{ fontSize:"0.68rem", color:"var(--text-light)", marginTop:"3px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: floating UI ── */}
          <div className="dashboard-float-wrap" style={{ position:"relative", height:"500px" }}>

            {/* Main inbox card */}
            <div style={{
              position:"absolute", top:"30px", left:"0", right:"50px",
              borderRadius:"18px", background:"white",
              border:"1px solid #ece9f5",
              boxShadow:"0 24px 64px #6366f114, 0 4px 20px #00000009",
              overflow:"hidden",
            }}>
              {/* Inbox header */}
              <div style={{ padding:"12px 16px", borderBottom:"1px solid #f4f2fb", display:"flex", alignItems:"center", gap:"8px", background:"white" }}>
                <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#10b981", flexShrink:0 }}/>
                <span style={{ fontSize:"0.73rem", fontWeight:700, color:"#1e293b", flex:1 }}>Inbox</span>
                <div style={{ fontSize:"0.58rem", fontWeight:700, color:"white", background:"linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius:"100px", padding:"2px 8px" }}>12 шинэ</div>
              </div>
              {/* Conversation list */}
              {CONVOS.map((c, i) => (
                <div key={c.name} style={{
                  padding:"9px 14px", display:"flex", alignItems:"center", gap:"9px",
                  background:c.unread?"#faf9ff":"white",
                  borderBottom: i < CONVOS.length-1 ? "1px solid #f8f7fc" : "none",
                }}>
                  <div style={{ width:"30px", height:"30px", borderRadius:"50%", background:c.avBg, color:"white", fontSize:"0.68rem", fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    {c.av}
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

            {/* Revenue card — bottom right, floating */}
            <div style={{
              position:"absolute", bottom:"60px", right:"0", width:"195px",
              borderRadius:"16px", padding:"16px",
              background:"linear-gradient(135deg,#6366f1,#8b5cf6)",
              boxShadow:"0 16px 48px #6366f138",
            }}>
              <div style={{ fontSize:"0.58rem", fontWeight:600, color:"rgba(255,255,255,0.7)", marginBottom:"7px", textTransform:"uppercase", letterSpacing:"0.07em" }}>Өнөөдрийн орлого</div>
              <div style={{ fontSize:"1.45rem", fontWeight:800, color:"white", letterSpacing:"-0.025em", lineHeight:1 }}>₮1,270,000</div>
              <div style={{ fontSize:"0.6rem", color:"rgba(255,255,255,0.7)", marginTop:"4px", marginBottom:"10px" }}>↑ +25,000₮ сая нэмэгдлээ</div>
              <div style={{ height:"3px", background:"rgba(255,255,255,0.2)", borderRadius:"100px" }}>
                <div style={{ height:"100%", width:"72%", background:"white", borderRadius:"100px", opacity:0.9 }}/>
              </div>
              <div style={{ fontSize:"0.57rem", color:"rgba(255,255,255,0.6)", marginTop:"5px" }}>Сарын зорилтын 72%</div>
            </div>

            {/* AI stats badge — top right */}
            <div style={{
              position:"absolute", top:"8px", right:"8px",
              borderRadius:"14px", padding:"10px 14px",
              background:"white", border:"1px solid #ece9f5",
              boxShadow:"0 8px 28px #00000010",
            }}>
              <div style={{ fontSize:"0.57rem", color:"#94a3b8", marginBottom:"4px", fontWeight:500 }}>AI хариулт</div>
              <div style={{ display:"flex", alignItems:"center", gap:"5px", marginBottom:"3px" }}>
                <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#10b981" }}/>
                <span style={{ fontSize:"0.72rem", fontWeight:800, color:"#1e293b" }}>3.2 сек</span>
              </div>
              <div style={{ fontSize:"0.6rem", fontWeight:600, color:"#10b981" }}>94% нарийвчлал</div>
            </div>

            {/* New appointment toast — bottom left */}
            <div style={{
              position:"absolute", bottom:"50px", left:"12px",
              borderRadius:"14px", padding:"10px 14px",
              background:"white", border:"1px solid #ece9f5",
              boxShadow:"0 8px 28px #00000010",
              display:"flex", alignItems:"center", gap:"10px",
            }}>
              <div style={{ width:"34px", height:"34px", borderRadius:"10px", background:"#dcfce7", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"1rem" }}>
                ✅
              </div>
              <div>
                <div style={{ fontSize:"0.67rem", fontWeight:700, color:"#1e293b" }}>Шинэ захиалга</div>
                <div style={{ fontSize:"0.59rem", color:"#10b981", fontWeight:500 }}>Оюунаа · Үс засах · 14:00</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
