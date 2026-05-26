"use client";
import { useState, useEffect, useRef } from "react";

const QA = [
  {
    q: "1️⃣  Бизнесийнхээ нэр, чиглэлийг хэлнэ үү?",
    a: "\"Lumière\" гоо сайхны салон — үсчин, арьс, хумсны үйлчилгээ.",
  },
  {
    q: "2️⃣  Хэрэглэгчид ихэвчлэн ямар асуулт тавьдаг вэ?",
    a: "Үнэ хэд вэ? Цаг захиалах боломжтой юу? Хаяг хаана?",
  },
  {
    q: "3️⃣  Ажлын цагаа хэлнэ үү?",
    a: "Даваа–Бямба 10:00–20:00. Ням гарагт амарна.",
  },
  {
    q: "4️⃣  Захиалга хэрхэн авдаг вэ? QPay ашигладаг уу?",
    a: "Messenger-ээр цаг авна, урьдчилгаа QPay-ээр төлнө.",
  },
];

type BubbleState = "typing-q" | "show-q" | "typing-a" | "show-a";

interface Bubble {
  type: "q" | "a";
  text: string;
  partial?: boolean;
}

const TYPING_SPEED = 28;
const PAUSE_AFTER_Q = 600;
const PAUSE_AFTER_A = 900;
const RESTART_DELAY = 2200;

export default function BuilderAIDemo() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [phase, setPhase] = useState<BubbleState>("typing-q");
  const [qIndex, setQIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [bubbles]);

  useEffect(() => {
    const current = QA[qIndex];

    if (phase === "typing-q") {
      if (charIndex < current.q.length) {
        const t = setTimeout(() => {
          setBubbles(prev => {
            const next = [...prev];
            if (next.length === 0 || next[next.length - 1].type !== "q" || !next[next.length - 1].partial) {
              next.push({ type: "q", text: current.q.slice(0, charIndex + 1), partial: true });
            } else {
              next[next.length - 1] = { type: "q", text: current.q.slice(0, charIndex + 1), partial: true };
            }
            return next;
          });
          setCharIndex(c => c + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        setBubbles(prev => {
          const next = [...prev];
          next[next.length - 1] = { type: "q", text: current.q, partial: false };
          return next;
        });
        const t = setTimeout(() => { setPhase("typing-a"); setCharIndex(0); }, PAUSE_AFTER_Q);
        return () => clearTimeout(t);
      }
    }

    if (phase === "typing-a") {
      if (charIndex < current.a.length) {
        const t = setTimeout(() => {
          setBubbles(prev => {
            const next = [...prev];
            if (next[next.length - 1].type !== "a" || !next[next.length - 1].partial) {
              next.push({ type: "a", text: current.a.slice(0, charIndex + 1), partial: true });
            } else {
              next[next.length - 1] = { type: "a", text: current.a.slice(0, charIndex + 1), partial: true };
            }
            return next;
          });
          setCharIndex(c => c + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        setBubbles(prev => {
          const next = [...prev];
          next[next.length - 1] = { type: "a", text: current.a, partial: false };
          return next;
        });
        const nextQ = qIndex + 1;
        if (nextQ < QA.length) {
          const t = setTimeout(() => { setQIndex(nextQ); setPhase("typing-q"); setCharIndex(0); }, PAUSE_AFTER_A);
          return () => clearTimeout(t);
        } else {
          const t = setTimeout(() => { setBubbles([]); setQIndex(0); setPhase("typing-q"); setCharIndex(0); }, RESTART_DELAY);
          return () => clearTimeout(t);
        }
      }
    }
  }, [phase, charIndex, qIndex]);

  const progress = ((qIndex + (phase === "show-a" ? 1 : 0)) / QA.length) * 100;

  return (
    <section data-animate style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left: text */}
          <div>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Builder AI</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: 1.15 }}>
              8 асуултад хариулаад л —{" "}
              <span className="gradient-text">AI ажилтан бэлэн</span>
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Бизнесийнхээ нэр, үйлчилгээ, ажлын цаг, үнэ — Builder AI асуух бүрт хариулаарай. Мэдлэгийн сан, persona, хариултын загвар автоматаар үүснэ.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Код шаардахгүй", "10 минутад бэлэн", "QPay шууд холбогдоно"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-mid)" }}>
                  <span style={{ color: "#6366f1", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: chat window */}
          <div style={{
            borderRadius: "1.25rem", overflow: "hidden",
            border: "1px solid var(--border2)",
            background: "var(--surface)",
            boxShadow: "0 8px 40px #6366f112",
          }}>
            {/* Header */}
            <div style={{
              padding: "0.875rem 1.25rem",
              background: "var(--surface2)",
              borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "8px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.7rem", color: "white", fontWeight: 700,
                }}>AI</div>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text)" }}>Builder AI</span>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              </div>
              <span style={{ fontSize: "0.65rem", color: "var(--text-light)", fontWeight: 500 }}>
                {qIndex + 1} / {QA.length} асуулт
              </span>
            </div>

            {/* Progress bar */}
            <div style={{ height: "2px", background: "var(--border)" }}>
              <div style={{
                height: "100%",
                width: `${((qIndex) / QA.length) * 100 + (phase === "typing-a" || phase === "show-a" ? 25 / QA.length * 100 : 0)}%`,
                background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                transition: "width 0.4s ease",
              }} />
            </div>

            {/* Messages */}
            <div ref={containerRef} style={{
              height: "300px", overflowY: "auto", padding: "1.25rem",
              display: "flex", flexDirection: "column", gap: "0.875rem",
              scrollbarWidth: "thin", scrollbarColor: "var(--border2) transparent",
            }}>
              {bubbles.map((b, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: b.type === "a" ? "flex-end" : "flex-start",
                }}>
                  <div style={{
                    maxWidth: "82%",
                    padding: "0.65rem 0.9rem",
                    borderRadius: b.type === "a" ? "1rem 1rem 0.2rem 1rem" : "1rem 1rem 1rem 0.2rem",
                    background: b.type === "a"
                      ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                      : "var(--surface2)",
                    border: b.type === "a" ? "none" : "1px solid var(--border)",
                    fontSize: "0.82rem",
                    color: b.type === "a" ? "white" : "var(--text-mid)",
                    lineHeight: 1.6,
                  }}>
                    {b.text}
                    {b.partial && (
                      <span style={{
                        display: "inline-block", width: "2px", height: "13px",
                        background: b.type === "a" ? "rgba(255,255,255,0.8)" : "var(--primary2)",
                        marginLeft: "2px", verticalAlign: "middle",
                        animation: "blink 0.7s step-end infinite",
                      }} />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{
              padding: "0.75rem 1rem",
              borderTop: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: "0.5rem",
            }}>
              <div style={{
                flex: 1, padding: "0.5rem 0.875rem", borderRadius: "0.65rem",
                background: "var(--surface2)", border: "1px solid var(--border2)",
                fontSize: "0.78rem", color: "var(--text-light)",
              }}>
                Хариултаа бичнэ үү...
              </div>
              <div style={{
                width: "32px", height: "32px", borderRadius: "0.65rem", flexShrink: 0,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
