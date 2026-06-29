"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const Qr = () => (
  <svg viewBox="0 0 88 88" width="68" height="68" style={{ borderRadius: 7, flexShrink: 0, border: "1px solid var(--border)" }}>
    <rect width="88" height="88" fill="#fff" />
    {[[8, 8], [60, 8], [8, 60]].map(([x, y], i) => (
      <g key={i}>
        <rect x={x} y={y} width="20" height="20" rx="3" fill="#0E2540" />
        <rect x={x + 4} y={y + 4} width="12" height="12" rx="2" fill="#fff" />
        <rect x={x + 7} y={y + 7} width="6" height="6" rx="1" fill="#0E2540" />
      </g>
    ))}
    {[[44, 8], [52, 14], [60, 8], [68, 16], [40, 40], [48, 44], [56, 40], [64, 48], [72, 40], [40, 56], [48, 64], [56, 56], [64, 64], [72, 72], [40, 72], [8, 40], [16, 48], [24, 40], [24, 56], [8, 52], [72, 56], [56, 72]].map(([x, y], i) => (
      <rect key={i} x={x} y={y} width="6" height="6" fill="#0E2540" />
    ))}
  </svg>
);

type Msg = { from: "user" | "ai"; text?: string; kind?: "product" | "qpay" };

const MSGS: Msg[] = [
  { from: "user", text: "Сайн уу! Ногоон цамц байна уу? 🧥" },
  { from: "ai", text: "Сайн байна уу! 😊 Энэ загвар бэлэн байна:" },
  { from: "ai", kind: "product" },
  { from: "user", text: "Тэгье, QPay-аар төлье" },
  { from: "ai", kind: "qpay" },
];

const inBubble: CSSProperties = { alignSelf: "flex-start", maxWidth: "72%", background: "#fff", color: "var(--navy-dark)", border: "1px solid var(--border)", borderRadius: "14px 14px 14px 4px", padding: "8px 12px", fontSize: "0.8rem", lineHeight: 1.5 };
const outBubble: CSSProperties = { alignSelf: "flex-end", maxWidth: "72%", background: "var(--navy)", color: "#fff", borderRadius: "14px 14px 4px 14px", padding: "8px 12px", fontSize: "0.8rem", lineHeight: 1.5 };
const reveal: CSSProperties = { animation: "heroChatIn 0.4s cubic-bezier(0.22,1,0.36,1) both" };

function Bubble({ m }: { m: Msg }) {
  if (m.kind === "product") {
    return (
      <div style={{ ...reveal, alignSelf: "flex-end", display: "flex", gap: 10, background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: 9, maxWidth: "72%", boxShadow: "0 8px 20px rgba(10,27,46,0.08)" }}>
        <div style={{ width: 46, height: 46, borderRadius: 9, overflow: "hidden", background: "var(--bg-tint)", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=120&q=80&auto=format&fit=crop" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div>
          <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--navy-dark)" }}>Ойн ногоон цамц</div>
          <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--navy)", margin: "2px 0 5px" }}>189,000₮</div>
          <span style={{ fontSize: "0.64rem", fontWeight: 700, color: "#fff", background: "var(--navy)", borderRadius: 6, padding: "3px 9px" }}>Захиалах</span>
        </div>
      </div>
    );
  }
  if (m.kind === "qpay") {
    return (
      <div style={{ ...reveal, alignSelf: "flex-end", display: "flex", gap: 12, alignItems: "center", background: "#fff", border: "1px solid var(--border)", borderRadius: "14px 14px 4px 14px", padding: 11, maxWidth: "74%", boxShadow: "0 8px 20px rgba(10,27,46,0.1)" }}>
        <Qr />
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 900, color: "#0066FF", letterSpacing: "0.01em" }}>QPay</span>
            <span style={{ fontSize: "0.62rem", color: "var(--text-light)" }}>төлбөр</span>
          </div>
          <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--navy)" }}>189,000₮</div>
          <div style={{ fontSize: "0.6rem", color: "var(--text-light)", lineHeight: 1.45, marginTop: 3 }}>QR уншуулаад төлөхөд<br />орлого шууд дансанд</div>
        </div>
      </div>
    );
  }
  return <div style={{ ...reveal, ...(m.from === "user" ? inBubble : outBubble) }}>{m.text}</div>;
}

export default function HeroChatThread() {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;
    const run = () => {
      setCount(0);
      setTyping(false);
      let t = 700;
      MSGS.forEach((_, i) => {
        timers.push(setTimeout(() => { if (!cancelled) setTyping(true); }, t));
        t += 750;
        timers.push(setTimeout(() => { if (!cancelled) { setTyping(false); setCount(i + 1); } }, t));
        t += 650;
      });
      timers.push(setTimeout(() => { if (!cancelled) run(); }, t + 2800));
    };
    run();
    return () => { cancelled = true; timers.forEach((id) => clearTimeout(id)); };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [count, typing]);

  return (
    <div ref={scrollRef} className="hero-chat-scroll" style={{ position: "relative", flex: 1, minHeight: 0, padding: "1rem 1.2rem", display: "flex", flexDirection: "column", gap: 9, background: "var(--bg-tint)", overflowY: "auto" }}>
      {MSGS.slice(0, count).map((m, i) => <Bubble key={i} m={m} />)}
      {typing && (
        <div className="ai-typing-live" style={{ alignSelf: "flex-start", display: "inline-flex", gap: 4, alignItems: "center", background: "#fff", border: "1px solid var(--border)", borderRadius: "12px 12px 12px 4px", padding: "9px 13px", boxShadow: "0 4px 14px rgba(10,27,46,0.06)" }}>
          <span /><span /><span />
        </div>
      )}
    </div>
  );
}
