"use client";
import { useState, useEffect, useRef } from "react";

const MSGS = [
  { from: "user", type: "text",  text: "Сайн уу! Үс засуулахыг хүсч байна 😊" },
  { from: "ai",   type: "text",  text: "Сайн байна уу! Манайд дараах үйлчилгээ бэлэн байна:" },
  { from: "ai",   type: "card"  },
  { from: "user", type: "text",  text: "Авъя! Маргааш 14:00 цагт боломжтой юу?" },
  { from: "ai",   type: "text",  text: "Тийм ээ, маргааш 14:00 чөлөөтэй байна 😊 Нэрээ хэлнэ үү?" },
  { from: "user", type: "text",  text: "Оюунаа" },
  { from: "ai",   type: "text",  text: "Баярлалаа, Оюунаа! 10,000₮ урьдчилгаа QPay-ээр төлнө үү 👇" },
  { from: "ai",   type: "qpay" },
  { from: "user", type: "text",  text: "Төлсөн!" },
  { from: "ai",   type: "text",  text: "✅ Маргааш 14:00д тан руу хүлээж байна! 💜" },
] as const;

type MsgType = typeof MSGS[number]["type"];
type Phase = "idle" | "typing-user" | "sending" | "thinking" | "typing-ai" | "card-in" | "done";

interface Bubble {
  id: number;
  from: "user" | "ai";
  type: MsgType | "thinking";
  text?: string;
  partial?: boolean;
}

const PAUSE_BEFORE   = 420;
const PAUSE_AFTER    = 560;
const THINKING_DUR   = 1050;
const ENTER_PAUSE    = 300;
const DONE_PAUSE     = 5500;

function rand(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min));
}

const BizAvatar = () => (
  <div style={{
    width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
    background: "#f0eeff", border: "1.5px solid #e0dafb",
    display: "flex", alignItems: "center", justifyContent: "center",
    alignSelf: "flex-end", overflow: "hidden",
  }}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/logo-profile.png" alt="" style={{ width: "22px", height: "22px", objectFit: "contain" }} />
  </div>
);

const ServiceCard = () => (
  <div style={{ borderRadius: "14px", overflow: "hidden", background: "white", border: "1px solid #ede9fe", width: "195px", boxShadow: "0 2px 10px #6366f110" }}>
    <div style={{ background: "linear-gradient(135deg, #f5f3ff, #ede9fe)", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: "2.2rem" }}>✂️</span>
    </div>
    <div style={{ padding: "0.55rem 0.7rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.2rem" }}>
        <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1f2937" }}>Үс засах</div>
        <div style={{ fontSize: "0.58rem", fontWeight: 700, background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", borderRadius: "100px", padding: "0.1rem 0.4rem", whiteSpace: "nowrap" }}>Дээд эрэлттэй</div>
      </div>
      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#6366f1", marginBottom: "0.5rem" }}>25,000₮-аас</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        <button style={{ borderRadius: "7px", border: "1.5px solid #c4b5fd", background: "transparent", color: "#6366f1", fontSize: "0.7rem", padding: "0.28rem", fontWeight: 600, cursor: "default" }}>Дэлгэрэнгүй</button>
        <button style={{ borderRadius: "7px", border: "none", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", fontSize: "0.7rem", padding: "0.3rem", fontWeight: 600, cursor: "default" }}>📅 Захиалах</button>
      </div>
    </div>
  </div>
);

const QPay = () => (
  <div style={{ borderRadius: "14px", overflow: "hidden", background: "white", border: "1px solid #bfdbfe", width: "170px", boxShadow: "0 2px 10px #3b82f610" }}>
    <div style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)", padding: "0.45rem 0.7rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
      <div style={{ width: "18px", height: "18px", borderRadius: "4px", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "12px", height: "12px", background: "#1d4ed8", borderRadius: "2px" }} />
      </div>
      <span style={{ fontSize: "0.72rem", color: "white", fontWeight: 800, letterSpacing: "0.04em" }}>QPay</span>
    </div>
    <div style={{ padding: "0.65rem 0.7rem" }}>
      {/* Simple QR grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "1.5px", marginBottom: "0.5rem" }}>
        {Array.from({ length: 49 }).map((_, i) => {
          const corners = [0,1,2,7,8,14,6,13,35,41,42,43,48,47,46,36,40];
          const fill = corners.includes(i) || Math.random() > 0.55;
          return <div key={i} style={{ aspectRatio: "1", borderRadius: "1px", background: fill ? "#1e3a5f" : "transparent" }} />;
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, color: "#1d4ed8" }}>10,000₮</div>
        <div style={{ fontSize: "0.62rem", color: "#6b7280", marginTop: "1px" }}>Lumière Salon</div>
      </div>
    </div>
  </div>
);

export default function AIChatDemo() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [inputText, setInputText] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [msgIdx, setMsgIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const userScrolledUp = useRef(false);
  const nextId = useRef(0);

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
    if (phase === "done") {
      const t = setTimeout(() => {
        setBubbles([]); setInputText(""); setMsgIdx(0); setCharIdx(0);
        userScrolledUp.current = false; nextId.current = 0;
        setPhase("idle");
      }, DONE_PAUSE);
      return () => clearTimeout(t);
    }

    if (msgIdx >= MSGS.length) {
      setPhase("done");
      return;
    }

    const msg = MSGS[msgIdx];

    if (phase === "idle") {
      const t = setTimeout(() => {
        if (msg.from === "user") setPhase("typing-user");
        else setPhase("thinking");
      }, PAUSE_BEFORE);
      return () => clearTimeout(t);
    }

    if (phase === "typing-user" && msg.type === "text") {
      const text = msg.text as string;
      if (charIdx < text.length) {
        const t = setTimeout(() => {
          setInputText(text.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, rand(18, 45));
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => { setInputText(""); setPhase("sending"); }, ENTER_PAUSE);
        return () => clearTimeout(t);
      }
    }

    if (phase === "sending" && msg.type === "text") {
      const id = nextId.current++;
      setBubbles(prev => [...prev, { id, from: "user", type: "text", text: msg.text as string }]);
      const t = setTimeout(() => { setMsgIdx(i => i + 1); setCharIdx(0); setPhase("idle"); }, PAUSE_AFTER);
      return () => clearTimeout(t);
    }

    if (phase === "thinking") {
      const thinkId = nextId.current++;
      setBubbles(prev => [...prev, { id: thinkId, from: "ai", type: "thinking" }]);
      const t = setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.type !== "thinking"));
        if (msg.type === "text") { setPhase("typing-ai"); setCharIdx(0); }
        else setPhase("card-in");
      }, THINKING_DUR);
      return () => clearTimeout(t);
    }

    if (phase === "typing-ai" && msg.type === "text") {
      const text = msg.text as string;
      if (charIdx < text.length) {
        const t = setTimeout(() => {
          setBubbles(prev => {
            const next = [...prev];
            const last = next[next.length - 1];
            if (!last || last.type !== "text" || last.from !== "ai" || !last.partial) {
              next.push({ id: nextId.current++, from: "ai", type: "text", text: text.slice(0, charIdx + 1), partial: true });
            } else {
              next[next.length - 1] = { ...last, text: text.slice(0, charIdx + 1) };
            }
            return next;
          });
          setCharIdx(c => c + 1);
        }, rand(18, 42));
        return () => clearTimeout(t);
      } else {
        setBubbles(prev => {
          const next = [...prev];
          if (next[next.length - 1]?.partial) next[next.length - 1] = { ...next[next.length - 1], partial: false };
          return next;
        });
        const t = setTimeout(() => { setMsgIdx(i => i + 1); setCharIdx(0); setPhase("idle"); }, PAUSE_AFTER);
        return () => clearTimeout(t);
      }
    }

    if (phase === "card-in") {
      const id = nextId.current++;
      setBubbles(prev => [...prev, { id, from: "ai", type: msg.type as "card" | "qpay" }]);
      const t = setTimeout(() => { setMsgIdx(i => i + 1); setCharIdx(0); setPhase("idle"); }, PAUSE_AFTER + 200);
      return () => clearTimeout(t);
    }
  }, [phase, charIdx, msgIdx]);

  return (
    <section data-animate style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left */}
          <div>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>AI Chatbot Demo</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: 1.15 }}>
              Хэрэглэгч мессеж илгээнэ —{" "}
              <span className="gradient-text">AI хариулна, захиалга авна</span>
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Асуухаас захиалга баталгаажуулах хүртэл — бүгдийг AI автоматаар хийнэ. Та зөвхөн ажлаа хий.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: "🇲🇳", text: "Монгол хэлний бүрэн дэмжлэг" },
                { icon: "💳", text: "QPay төлбөр автоматаар" },
                { icon: "🤝", text: "Нарийн асуудлыг хүнд шилжүүлнэ" },
              ].map(f => (
                <div key={f.text} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-mid)" }}>
                  <span style={{ fontSize: "1rem" }}>{f.icon}</span>
                  {f.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: chat window */}
          <div style={{
            borderRadius: "1.5rem", overflow: "hidden",
            border: "1px solid var(--border2)",
            background: "var(--surface)",
            boxShadow: "0 20px 60px #6366f11a, 0 4px 16px #00000008",
          }}>
            {/* Header */}
            <div style={{
              padding: "0.8rem 1rem",
              background: "var(--surface)",
              borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: "0.6rem",
            }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#f0eeff", border: "1.5px solid #e0dafb", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-profile.png" alt="" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.1 }}>Lumière Salon</div>
                <div style={{ fontSize: "0.62rem", color: "#10b981", fontWeight: 600, display: "flex", alignItems: "center", gap: "3px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                  онлайн · ихэвчлэн хариулдаг
                </div>
              </div>
              {/* Menu dots */}
              <div style={{ display: "flex", gap: "3px" }}>
                {[0,1,2].map(i => <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--text-light)" }} />)}
              </div>
            </div>

            {/* Messages */}
            <div
              ref={containerRef}
              onScroll={handleScroll}
              style={{
                height: "360px", overflowY: "auto", padding: "0.875rem",
                display: "flex", flexDirection: "column", gap: "0.5rem",
                background: "#f7f6f4",
                scrollbarWidth: "thin", scrollbarColor: "var(--border2) transparent",
              }}
            >
              {bubbles.map(b => {
                if (b.type === "thinking") return (
                  <div key={b.id} style={{ display: "flex", alignItems: "flex-end", gap: "5px" }}>
                    <BizAvatar />
                    <div style={{ padding: "0.45rem 0.7rem", borderRadius: "1rem 1rem 1rem 0.2rem", background: "white", border: "1px solid #ede9fe", display: "flex", gap: "4px", alignItems: "center", boxShadow: "0 1px 4px #0000000a" }}>
                      {[0,1,2].map(d => (
                        <span key={d} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a78bfa", display: "inline-block", animation: `tdot 1.2s ease-in-out ${d * 0.18}s infinite` }} />
                      ))}
                    </div>
                  </div>
                );

                if (b.from === "ai" && b.type === "text") return (
                  <div key={b.id} style={{ display: "flex", alignItems: "flex-end", gap: "5px", maxWidth: "82%" }}>
                    <BizAvatar />
                    <div style={{ padding: "0.5rem 0.75rem", borderRadius: "1rem 1rem 1rem 0.2rem", background: "white", border: "1px solid #ede9fe", fontSize: "0.79rem", color: "#374151", lineHeight: 1.55, fontWeight: 450, boxShadow: "0 1px 5px #0000000a" }}>
                      {b.text}
                      {b.partial && <span style={{ display: "inline-block", width: "1.5px", height: "12px", background: "#8b5cf6", marginLeft: "1px", verticalAlign: "middle", animation: "blink 0.65s step-end infinite" }} />}
                    </div>
                  </div>
                );

                if (b.from === "user" && b.type === "text") return (
                  <div key={b.id} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ maxWidth: "76%", padding: "0.5rem 0.75rem", borderRadius: "1rem 1rem 0.2rem 1rem", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", fontSize: "0.79rem", color: "white", lineHeight: 1.55, boxShadow: "0 2px 12px #6366f128" }}>
                      {b.text}
                    </div>
                  </div>
                );

                if (b.type === "card") return (
                  <div key={b.id} style={{ display: "flex", alignItems: "flex-end", gap: "5px" }}>
                    <BizAvatar />
                    <ServiceCard />
                  </div>
                );

                if (b.type === "qpay") return (
                  <div key={b.id} style={{ display: "flex", alignItems: "flex-end", gap: "5px" }}>
                    <BizAvatar />
                    <QPay />
                  </div>
                );

                return null;
              })}
            </div>

            {/* Input */}
            <div style={{ padding: "0.65rem 0.875rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--surface)" }}>
              {/* Mic + image icons */}
              <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                {["🎤","🖼️"].map(ico => (
                  <div key={ico} style={{ fontSize: "0.9rem", opacity: 0.45 }}>{ico}</div>
                ))}
              </div>
              <div style={{
                flex: 1, padding: "0.45rem 0.875rem", borderRadius: "100px",
                background: phase === "typing-user" ? "white" : "#f0ede9",
                border: phase === "typing-user" ? "1.5px solid #a78bfa" : "1px solid #e5e2dd",
                fontSize: "0.77rem",
                color: inputText ? "#374151" : "#b0aaa4",
                transition: "border-color 0.2s, background 0.2s",
                minHeight: "34px", display: "flex", alignItems: "center",
              }}>
                {inputText || "Aa"}
                {phase === "typing-user" && <span style={{ display: "inline-block", width: "1.5px", height: "12px", background: "#8b5cf6", marginLeft: "1px", verticalAlign: "middle", animation: "blink 0.65s step-end infinite" }} />}
              </div>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0, background: phase === "sending" ? "linear-gradient(135deg, #4f46e5,#7c3aed)" : "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px #6366f128", transform: phase === "sending" ? "scale(0.9)" : "scale(1)", transition: "transform 0.15s, background 0.15s" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes tdot {
          0%,60%,100%{transform:translateY(0);opacity:.35}
          30%{transform:translateY(-5px);opacity:1}
        }
      `}</style>
    </section>
  );
}
