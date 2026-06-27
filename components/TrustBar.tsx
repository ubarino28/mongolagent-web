const Brief = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>);
const Star = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z" /></svg>);
const Clock = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
const Bolt = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>);

const STATS = [
  { icon: <Brief />, num: "200+", label: "бизнес ашигладаг", gold: false },
  { icon: <Star />, num: "4.9", label: "дундаж үнэлгээ", gold: true },
  { icon: <Clock />, num: "24/7", label: "тасралтгүй ажиллагаа", gold: false },
  { icon: <Bolt />, num: "10 мин", label: "тохируулахад хангалттай", gold: false },
];

export default function TrustBar() {
  return (
    <div className="trust-strip" style={{ display: "flex", flexWrap: "wrap", borderRadius: "1.25rem", background: "#fff", border: "1px solid var(--border)", boxShadow: "0 14px 44px rgba(20,58,107,0.08)", overflow: "hidden" }}>
      {STATS.map((s, i) => (
        <div key={s.label} style={{ flex: "1 1 0", minWidth: 160, display: "flex", alignItems: "center", gap: "0.85rem", padding: "1.35rem 1.6rem", borderLeft: i ? "1px solid var(--border)" : "none" }}>
          <div style={{ width: 42, height: 42, borderRadius: 11, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: s.gold ? "rgba(200,162,75,0.13)" : "var(--bg-tint)", color: s.gold ? "var(--gold)" : "var(--navy)" }}>{s.icon}</div>
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--navy-dark)", lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: "0.74rem", color: "var(--text-light)", marginTop: "0.3rem", lineHeight: 1.2 }}>{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
