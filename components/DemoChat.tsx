"use client";
import { useState, useRef, useEffect } from "react";

const QUICK_QS = [
  "AI chatbot яаж ажилладаг вэ?",
  "QPay интеграц байдаг уу?",
  "Хэдэн хоногт бэлэн болох вэ?",
  "Үнэ хэр байдаг вэ?",
];

const ANSWERS: Record<string, string> = {
  "AI chatbot яаж ажилладаг вэ?":
    "Mongol Agent-ийн AI Chatbot нь Facebook Messenger болон Instagram DM дээр Монгол хэлээр 24/7 автоматаар хариулдаг.\n\nТаны бизнесийн мэдлэгийн санд суурилан сургасны дараа захиалга авах, асуулт хариулах, мэдээлэл өгөх — бүгдийг хийнэ. Ажилтан шаардалгүй. ✨",
  "QPay интеграц байдаг уу?":
    "Тийм! QPay нь манай Growth болон Enterprise багцад бүрэн интегратчилагдсан.\n\nХэрэглэгч чат дотроос захиалга өгмөгц AI автоматаар QPay QR код илгээдэг. Хэрэглэгч төлсний дараа система шууд баталгаажуулж, Telegram мэдэгдэл ирнэ. 💳",
  "Хэдэн хоногт бэлэн болох вэ?":
    "Ихэнх тохиолдолд 3–7 хоног:\n• Энгийн chatbot → 3 хоног\n• QPay + интеграц → 5–7 хоног\n\nConsultation → Тохируулга → Туршилт гэсэн 3 алхмаар явагдана. Та зөвхөн бизнесийн мэдээллээ өгөхөд л хангалттай. 🚀",
  "Үнэ хэр байдаг вэ?":
    "3 багц бий:\n• Starter — ₮79,900/сар\n• Growth — ₮149,900/сар (QPay + захиалга)\n• Enterprise — ₮399,000/сар (бүгд + custom)\n\nЭхний хэрэглэгчид 3 хоног үнэгүй туршиж болно! Pricing хэсгийг үзнэ үү. 👇",
};

const FALLBACKS = [
  "Маш сайн асуулт! Танай бизнесийн онцлогоос хамааран хариулт өөр байж болно. 30 минутын үнэгүй consultation авбал бүх зүйлийг тодруулж өгнө.",
  "Энэ талаар манай мэргэжилтэн дэлгэрэнгүй тайлбарлах болно. 📞 80952821 дугаарт залгаж эсвэл доорх товчийг дарж холбогдоорой!",
];

interface Msg { role: "user" | "ai"; text: string; }

export default function DemoChat() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "Сайн байна уу! 👋 Би Mongol Agent-ийн AI туслах.\n\nAI chatbot, QPay интеграц, автоматжуулалт — аль ч талаар асуугаарай. Доорх товч асуултуудаас сонгох эсвэл өөрийн асуултаа бичнэ үү." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const q = text.trim();
    setInput("");
    setMsgs(prev => [...prev, { role: "user", text: q }]);
    setLoading(true);
    await new Promise(r => setTimeout(r, 900 + Math.random() * 500));
    const answer = ANSWERS[q] ?? FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
    setLoading(false);
    setMsgs(prev => [...prev, { role: "ai", text: answer }]);
  };

  return (
    <section data-animate style={{ padding: "5rem 0", background: "var(--surface)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Туршиж үзэх</div>
          <h2 style={{ fontSize: "clamp(1.7rem,3.5vw,2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Таньд асуулт байна уу?
          </h2>
          <p style={{ color: "var(--text-mid)", maxWidth: "420px", margin: "0 auto", fontSize: "0.92rem" }}>
            Доорх чат дотроос AI-тай шууд ярьж, та бизнестээ тохирсон шийдлийг олоорой.
          </p>
        </div>

        {/* Two-column: chat + side info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "2rem", alignItems: "start" }}
          className="demo-grid">

          {/* ── Chat window ── */}
          <div style={{
            borderRadius: "1.5rem", overflow: "hidden",
            border: "1px solid var(--border2)",
            background: "var(--surface2)",
            boxShadow: "0 0 60px #6366f110",
          }}>
            {/* Chat header */}
            <div style={{
              padding: "1rem 1.25rem",
              borderBottom: "1px solid var(--border)",
              background: "var(--surface)",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <div style={{
                width: "2.25rem", height: "2.25rem", borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" fill="white" opacity="0.9" />
                  <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="white" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>Mongol Agent AI</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "1px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                  <span style={{ fontSize: "0.68rem", color: "var(--text-light)" }}>Онлайн · Дунджаар 1 мин хариулдаг</span>
                </div>
              </div>
              <div style={{
                padding: "0.25rem 0.65rem", borderRadius: "100px",
                background: "#10b98112", border: "1px solid #10b98130",
                fontSize: "0.65rem", fontWeight: 600, color: "#34d399", letterSpacing: "0.06em",
              }}>DEMO</div>
            </div>

            {/* Messages */}
            <div ref={containerRef} style={{
              height: "360px", overflowY: "auto", padding: "1.5rem 1.25rem",
              display: "flex", flexDirection: "column", gap: "1rem",
              scrollbarWidth: "thin", scrollbarColor: "var(--border2) transparent",
            }}>
              {msgs.map((m, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                  gap: "0.5rem", alignItems: "flex-end",
                }}>
                  {m.role === "ai" && (
                    <div style={{
                      width: "1.75rem", height: "1.75rem", borderRadius: "50%", flexShrink: 0,
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem",
                    }}>
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" fill="white" opacity="0.9" />
                        <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="white" />
                      </svg>
                    </div>
                  )}
                  <div style={{
                    maxWidth: "78%",
                    padding: "0.75rem 1rem",
                    borderRadius: m.role === "user"
                      ? "1rem 1rem 0.2rem 1rem"
                      : "1rem 1rem 1rem 0.2rem",
                    background: m.role === "user"
                      ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                      : "var(--surface)",
                    border: m.role === "user" ? "none" : "1px solid var(--border2)",
                    fontSize: "0.84rem",
                    color: m.role === "user" ? "white" : "var(--text-mid)",
                    lineHeight: 1.65,
                    whiteSpace: "pre-line",
                  }}>
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end" }}>
                  <div style={{
                    width: "1.75rem", height: "1.75rem", borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" fill="white" opacity="0.9" />
                      <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="white" />
                    </svg>
                  </div>
                  <div style={{
                    padding: "0.75rem 1.1rem", borderRadius: "1rem 1rem 1rem 0.2rem",
                    background: "var(--surface)", border: "1px solid var(--border2)",
                    display: "flex", gap: "4px", alignItems: "center",
                  }}>
                    <span className="typing-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text-light)", display: "inline-block", animationDelay: "0s" }} />
                    <span className="typing-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text-light)", display: "inline-block", animationDelay: "0.18s" }} />
                    <span className="typing-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text-light)", display: "inline-block", animationDelay: "0.36s" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Quick questions */}
            <div style={{ padding: "0 1.25rem 0.75rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {QUICK_QS.map(q => (
                <button key={q} onClick={() => send(q)} disabled={loading}
                  style={{
                    padding: "0.3rem 0.8rem", borderRadius: "100px", fontSize: "0.73rem",
                    background: "#6366f110", border: "1px solid #6366f128",
                    color: "var(--primary2)", cursor: "pointer", fontWeight: 500,
                    transition: "all 0.15s",
                    opacity: loading ? 0.5 : 1,
                  }}>
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div style={{
              padding: "0.75rem 1rem 1rem",
              borderTop: "1px solid var(--border)",
              display: "flex", gap: "0.6rem", alignItems: "center",
            }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send(input)}
                placeholder="Асуулт бичнэ үү..."
                disabled={loading}
                style={{
                  flex: 1, background: "var(--surface)", border: "1px solid var(--border2)",
                  borderRadius: "0.75rem", padding: "0.65rem 1rem",
                  color: "var(--text)", fontSize: "0.875rem", outline: "none",
                  transition: "border-color 0.15s",
                }}
                onFocus={e => (e.target.style.borderColor = "#6366f160")}
                onBlur={e => (e.target.style.borderColor = "var(--border2)")}
              />
              <button
                onClick={() => send(input)}
                disabled={loading || !input.trim()}
                style={{
                  width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", flexShrink: 0,
                  background: input.trim() && !loading
                    ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                    : "var(--surface)",
                  border: "1px solid var(--border2)",
                  cursor: input.trim() && !loading ? "pointer" : "default",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.15s",
                  opacity: loading ? 0.5 : 1,
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Side info panel ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* AI info card */}
            <div style={{
              borderRadius: "1.25rem", padding: "1.5rem",
              background: "var(--surface2)",
              border: "1px solid var(--border2)",
              boxShadow: "0 0 40px #6366f108",
            }}>
              <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-light)", marginBottom: "1rem" }}>
                AI боломжууд
              </div>
              {[
                { icon: "💬", text: "Монгол хэлээр ярилцах" },
                { icon: "🛒", text: "Захиалга авах, QPay төлбөр" },
                { icon: "🎯", text: "Лид цуглуулах, ангилах" },
                { icon: "⚙️", text: "Workflow автоматжуулалт" },
                { icon: "📊", text: "Тайлан, аналитик" },
              ].map(f => (
                <div key={f.text} style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  padding: "0.6rem 0",
                  borderBottom: "1px solid var(--border)",
                }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0 }}>{f.icon}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-mid)" }}>{f.text}</span>
                </div>
              ))}
              <div style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 0",
              }}>
                <span style={{ fontSize: "1rem", flexShrink: 0 }}>🔗</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-mid)" }}>15+ платформ интеграц</span>
              </div>
            </div>

            {/* CTA card */}
            <div style={{
              borderRadius: "1.25rem", padding: "1.5rem",
              background: "var(--surface2)", border: "1px solid var(--border2)",
            }}>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                Өөрийн агентаа бүтээх үү?
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-light)", lineHeight: 1.6, marginBottom: "1rem" }}>
                30 минутын үнэгүй consultation-аар бизнестээ яг тохирсон шийдлийг олоорой.
              </p>
              <a href="https://app.mongolagent.mn/register"
                style={{
                  display: "block", textAlign: "center",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "white", fontWeight: 600, fontSize: "0.82rem",
                  padding: "0.65rem 1rem", borderRadius: "0.65rem",
                  textDecoration: "none", transition: "opacity 0.15s",
                }}>
                Агентаа бүтээх →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
