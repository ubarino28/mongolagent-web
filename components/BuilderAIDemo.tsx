"use client";
import { useState, useEffect, useRef } from "react";

const QA = [
  { q: "Бизнесийнхээ нэр, чиглэлийг хэлнэ үү?", a: '"Lumière" гоо сайхны салон — үсчин, арьс, хумсны үйлчилгээ.' },
  { q: "Хэрэглэгчид ихэвчлэн ямар асуулт тавьдаг вэ?", a: "Үнэ хэд вэ? Цаг захиалах боломжтой юу? Хаяг хаана байдаг вэ?" },
  { q: "Ажлын цагаа хэлнэ үү?", a: "Даваа–Бямба 10:00–20:00. Ням гарагт амарна." },
  { q: "Захиалга хэрхэн авдаг вэ? QPay ашигладаг уу?", a: "Messenger-ээр цаг авна, урьдчилгаа QPay-ээр төлнө." },
  { q: "Үйлчилгээнийхээ үнийг хэлнэ үү?", a: "Үс засах 25,000–80,000₮, хумс 35,000₮-аас, нүүр 45,000₮-аас." },
  { q: "Цаг захиалахад яаж баталгаажуулдаг вэ?", a: "QPay-аар 10,000₮ урьдчилгаа төлөхөд цаг баталгаажиж, мессеж очно." },
  { q: "Ямар брэндийн бүтээгдэхүүн ашигладаг вэ?", a: "Wella, L'Oréal Professional, OPI — гадаадаас оруулж ирдэг." },
  { q: "AI ажилтандаа ямар нэр, дүр өгмөөр байна вэ?", a: '"Lumi" нэртэй, эелдэг, мэргэжлийн залуу эмэгтэй дүртэй байна уу.' },
];

type Phase = "thinking" | "typing-q" | "typing-a" | "sending" | "done";

interface Bubble {
  type: "q" | "a" | "thinking" | "done";
  text: string;
  partial?: boolean;
  index?: number;
}

const PAUSE_AFTER_Q = 700;
const PAUSE_AFTER_A = 900;
const THINKING_DURATION = 950;
const DONE_DISPLAY = 5500;
const ENTER_PAUSE = 320;

function randSpeed(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min));
}

const AIAvatar = () => (
  <div style={{
    width: "26px", height: "26px", borderRadius: "8px", flexShrink: 0,
    background: "var(--surface2)",
    border: "1px solid var(--border)",
    display: "flex", alignItems: "center", justifyContent: "center",
    alignSelf: "flex-end", overflow: "hidden",
  }}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/logo-profile.png" alt="AI" style={{ width: "22px", height: "22px", objectFit: "contain" }} />
  </div>
);

export default function BuilderAIDemo() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [inputText, setInputText] = useState("");
  const [phase, setPhase] = useState<Phase>("thinking");
  const [qIndex, setQIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const userScrolledUp = useRef(false);

  useEffect(() => {
    if (userScrolledUp.current) return;
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [bubbles]);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    userScrolledUp.current = el.scrollHeight - el.scrollTop - el.clientHeight > 30;
  };

  useEffect(() => {
    const current = QA[qIndex];

    if (phase === "thinking") {
      setBubbles(prev => {
        if (prev.length > 0 && prev[prev.length - 1].type === "thinking") return prev;
        return [...prev, { type: "thinking", text: "", index: qIndex }];
      });
      const t = setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.type !== "thinking"));
        setPhase("typing-q");
        setCharIndex(0);
      }, THINKING_DURATION);
      return () => clearTimeout(t);
    }

    if (phase === "typing-q") {
      if (charIndex < current.q.length) {
        const t = setTimeout(() => {
          setBubbles(prev => {
            const next = [...prev];
            const last = next[next.length - 1];
            if (!last || last.type !== "q" || !last.partial) {
              next.push({ type: "q", text: current.q.slice(0, charIndex + 1), partial: true, index: qIndex });
            } else {
              next[next.length - 1] = { ...last, text: current.q.slice(0, charIndex + 1) };
            }
            return next;
          });
          setCharIndex(c => c + 1);
        }, randSpeed(20, 50));
        return () => clearTimeout(t);
      } else {
        setBubbles(prev => {
          const next = [...prev];
          next[next.length - 1] = { ...next[next.length - 1], partial: false };
          return next;
        });
        const t = setTimeout(() => { setPhase("typing-a"); setCharIndex(0); }, PAUSE_AFTER_Q);
        return () => clearTimeout(t);
      }
    }

    // Type answer into input field
    if (phase === "typing-a") {
      if (charIndex < current.a.length) {
        const t = setTimeout(() => {
          setInputText(current.a.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, randSpeed(16, 38));
        return () => clearTimeout(t);
      } else {
        // Pause like user is about to press enter, then send
        const t = setTimeout(() => {
          setInputText("");
          setPhase("sending");
        }, ENTER_PAUSE);
        return () => clearTimeout(t);
      }
    }

    // "Enter pressed" — add bubble, move to next question
    if (phase === "sending") {
      setBubbles(prev => {
        const last = prev[prev.length - 1];
        if (last?.type === "a" && last.text === current.a) return prev;
        return [...prev, { type: "a", text: current.a, partial: false }];
      });
      const nextQ = qIndex + 1;
      if (nextQ < QA.length) {
        const t = setTimeout(() => { setQIndex(nextQ); setPhase("thinking"); setCharIndex(0); }, PAUSE_AFTER_A);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setBubbles(prev => [...prev, { type: "done", text: "" }]);
          setPhase("done");
        }, 600);
        return () => clearTimeout(t);
      }
    }

    if (phase === "done") {
      const t = setTimeout(() => {
        setBubbles([]);
        setInputText("");
        setQIndex(0);
        setPhase("thinking");
        setCharIndex(0);
        userScrolledUp.current = false;
      }, DONE_DISPLAY);
      return () => clearTimeout(t);
    }
  }, [phase, charIndex, qIndex]);

  const progressPct = phase === "done"
    ? 100
    : (qIndex / QA.length) * 100 + (phase === "typing-a" || phase === "sending" ? (1 / QA.length) * 50 : 0);

  const isTypingInput = phase === "typing-a";
  const isSending = phase === "sending";

  return (
    <section data-animate style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" }}>
        <div className="builder-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left */}
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
                  <span style={{ color: "var(--text)", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: chat window */}
          <div style={{
            borderRadius: "1.25rem", overflow: "hidden",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.04)",
          }}>
            {/* Header */}
            <div style={{
              padding: "0.875rem 1.1rem",
              background: "var(--surface)",
              borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "10px",
                  background: "linear-gradient(135deg, #143a6b15, #143a6b15)",
                  border: "1px solid #143a6b20",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-profile.png" alt="Builder AI" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.1 }}>Builder AI</div>
                  <div style={{ fontSize: "0.62rem", color: "var(--text-light)", fontWeight: 600, display: "flex", alignItems: "center", gap: "3px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--text-light)", display: "inline-block" }} />
                    онлайн
                  </div>
                </div>
              </div>
              {phase === "done" ? (
                <div style={{ fontSize: "0.65rem", color: "var(--text)", fontWeight: 700, background: "var(--surface2)", border: "1px solid var(--border)", padding: "0.25rem 0.65rem", borderRadius: "100px" }}>✓ Дууслаа</div>
              ) : (
                <div style={{ fontSize: "0.65rem", color: "var(--text-light)", fontWeight: 600, background: "var(--surface2)", border: "1px solid var(--border)", padding: "0.25rem 0.65rem", borderRadius: "100px" }}>{qIndex + 1} / {QA.length}</div>
              )}
            </div>

            {/* Progress bar */}
            <div style={{ height: "2px", background: "var(--border)" }}>
              <div style={{
                height: "100%", width: `${progressPct}%`,
                background: "var(--accent)",
                transition: "width 0.5s ease, background 0.6s ease",
              }} />
            </div>

            {/* Messages */}
            <div
              ref={containerRef}
              onScroll={handleScroll}
              style={{
                height: "340px", overflowY: "auto", padding: "1rem",
                display: "flex", flexDirection: "column", gap: "0.55rem",
                background: "var(--bg-tint)",
                scrollbarWidth: "thin", scrollbarColor: "var(--border2) transparent",
              }}
            >
              {bubbles.map((b, i) => {
                if (b.type === "thinking") return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-end", gap: "5px" }}>
                    <AIAvatar />
                    <div style={{
                      padding: "0.5rem 0.75rem", borderRadius: "0.875rem 0.875rem 0.875rem 0.2rem",
                      background: "white", border: "1px solid #eaf0f8",
                      boxShadow: "0 1px 4px #00000008",
                      display: "flex", gap: "4px", alignItems: "center",
                    }}>
                      {[0, 1, 2].map(d => (
                        <span key={d} style={{
                          width: "5px", height: "5px", borderRadius: "50%", background: "var(--border2)",
                          display: "inline-block",
                          animation: `tdot 1.2s ease-in-out ${d * 0.18}s infinite`,
                        }} />
                      ))}
                    </div>
                  </div>
                );

                if (b.type === "q") return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-end", gap: "5px" }}>
                    <AIAvatar />
                    <div style={{ display: "flex", flexDirection: "column", maxWidth: "80%" }}>
                      <div style={{ fontSize: "0.57rem", color: "#8a98a8", fontWeight: 600, marginBottom: "2px", marginLeft: "2px" }}>
                        Асуулт {(b.index ?? 0) + 1}
                      </div>
                      <div style={{
                        padding: "0.5rem 0.75rem",
                        borderRadius: "0.875rem 0.875rem 0.875rem 0.2rem",
                        background: "white", border: "1px solid #eaf0f8",
                        boxShadow: "0 1px 5px #00000008",
                        fontSize: "0.78rem", color: "#5a6b80",
                        lineHeight: 1.55, fontWeight: 500,
                      }}>
                        {b.text}
                        {b.partial && (
                          <span style={{
                            display: "inline-block", width: "2px", height: "12px",
                            background: "var(--text-mid)", marginLeft: "2px", verticalAlign: "middle",
                            animation: "blink 0.65s step-end infinite",
                          }} />
                        )}
                      </div>
                    </div>
                  </div>
                );

                if (b.type === "a") return (
                  <div key={i} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{
                      maxWidth: "76%",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "0.875rem 0.875rem 0.2rem 0.875rem",
                      background: "var(--accent)",
                      fontSize: "0.78rem", color: "white",
                      lineHeight: 1.55,
                    }}>
                      {b.text}
                    </div>
                  </div>
                );

                if (b.type === "done") return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-end", gap: "5px" }}>
                    <AIAvatar />
                    <div style={{
                      maxWidth: "85%",
                      padding: "0.65rem 0.875rem",
                      borderRadius: "0.875rem 0.875rem 0.875rem 0.2rem",
                      background: "var(--surface2)",
                      border: "1px solid var(--border)",
                    }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                        Таны AI chatbot бэлэн боллоо!
                      </div>
                      <div style={{ fontSize: "0.74rem", color: "var(--text-mid)", lineHeight: 1.55 }}>
                        Lumière салонд зориулсан AI ажилтан амжилттай тохируулагдлаа. Та одоо Messenger-ээр хэрэглэгчтэйгээ харилцаж эхлэх боломжтой.
                      </div>
                    </div>
                  </div>
                );

                return null;
              })}
            </div>

            {/* Footer — input field shows typing when phase=typing-a */}
            <div style={{
              padding: "0.7rem 0.875rem",
              borderTop: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: "0.5rem",
              background: "var(--surface)",
            }}>
              <div style={{
                flex: 1, padding: "0.5rem 1rem", borderRadius: "100px",
                background: isTypingInput ? "white" : "var(--surface2)",
                border: isTypingInput ? "1.5px solid var(--border2)" : "1px solid var(--border)",
                fontSize: "0.78rem",
                color: inputText ? "#5a6b80" : "#8a98a8",
                transition: "border-color 0.2s, background 0.2s",
                minHeight: "36px", display: "flex", alignItems: "center",
                overflow: "hidden", whiteSpace: "nowrap",
              }}>
                {inputText ? (inputText.length > 38 ? inputText.slice(-35) : inputText) : "Хариултаа бичнэ үү..."}
                {isTypingInput && (
                  <span style={{
                    display: "inline-block", width: "1.5px", height: "13px",
                    background: "var(--text-mid)", marginLeft: "1px", verticalAlign: "middle",
                    animation: "blink 0.65s step-end infinite",
                  }} />
                )}
              </div>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%", flexShrink: 0,
                background: "var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "opacity 0.15s",
                transform: isSending ? "scale(0.93)" : "scale(1)",
                opacity: isSending ? 0.7 : 1,
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
        @keyframes tdot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
