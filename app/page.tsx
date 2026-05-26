import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import DemoChat from "@/components/DemoChat";

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconTrend = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMapPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PLATFORMS = [
  { name: "Facebook",      color: "#1877F2", vb: "0 0 24 24",       path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { name: "Instagram",     color: "#E1306C", vb: "0 0 24 24",       path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { name: "QPay",          color: "#0066FF", vb: "0 0 24 24",       path: "M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" },
  { name: "Telegram",      color: "#26A5E4", vb: "0 0 24 24",       path: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" },
  { name: "Google Sheets", color: "#34A853", vb: "0 0 24 24",       path: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" },
  { name: "Shopify",       color: "#95BF47", vb: "0 0 24 24",       path: "M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" },
  { name: "GitHub",        color: "#e2e8f0", vb: "0 0 24 24",       path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
  { name: "Render",        color: "#46E3B7", vb: "0 0 15 18.667",   path: "M0 0h7.786C11.73 0 15 3.273 15 7.22c0 2.62-1.4 4.917-3.496 6.182L15 18.667H10.02l-3.184-4.8H4.8v4.8H0V0zm4.8 9.453h2.986c1.337 0 2.42-1.087 2.42-2.427 0-1.34-1.083-2.427-2.42-2.427H4.8v4.854z" },
  { name: "Vercel",        color: "#e2e8f0", vb: "0 0 24 22.526",   path: "M24 22.525H0l12-21.05 12 21.05z",    letter: "" },
  { name: "Supabase",     color: "#3ECF8E", vb: "0 0 24 24",       path: "M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z", letter: "" },
  { name: "Mobicom",      color: "#E8161C", vb: "",                 path: "",                                   letter: "", img: "/logo-mobicom.png" },
  { name: "Unitel",       color: "#0066B3", vb: "",                 path: "",                                   letter: "", img: "/logo-unitel.png" },
  { name: "Gmobile",      color: "#00A550", vb: "",                 path: "",                                   letter: "", img: "/logo-gmobile.svg" },
  { name: "Skytel",       color: "#00B4D8", vb: "",                 path: "",                                   letter: "", img: "/logo-skytel.svg" },
  { name: "Datacom",      color: "#FF6B00", vb: "",                 path: "",                                   letter: "", img: "/logo-datacom.svg" },
  { name: "ChatGPT",      color: "#74AA9C", vb: "0 0 24 24",       path: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z", letter: "", img: "" },
  { name: "Claude",       color: "#D97757", vb: "0 0 24 24",       path: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z", letter: "", img: "" },
];

const RESULTS = [
  { num: "Ухаалаг Агент", label: "Хиймэл оюун дээр суурилсан" },
  { num: "10 мин", label: "Агентаа бэлэн болгоход" },
  { num: "24/7", label: "Тасралтгүй ажиллах агент" },
  { num: "Автомат", label: "AI ажилтантай болоорой" },
];

const SERVICES = [
  {
    tag: "Мессенжер AI",
    icon: <IconChat />,
    title: "AI Chatbot",
    desc: "Facebook Messenger, Instagram DM дээр Монгол хэлээр автоматаар хариулж, борлуулалт хийдэг.",
    items: ["Facebook & Instagram холболт", "Монгол хэлний дэмжлэг", "Мэдлэгийн сан суурилсан", "Хэрэглэгч хөтлөх flow"],
    result: "Өдөрт 200+ ижил асуултыг автоматаар шийдсэн",
    color: "#818cf8",
  },
  {
    tag: "Борлуулалт AI",
    icon: <IconTrend />,
    title: "AI Sales Agent",
    desc: "Захиалга авч, QPay QR код илгээж, төлбөр баталгаажуулаад орлогыг автоматаар нэмнэ.",
    items: ["QPay төлбөрийн интеграц", "Автомат захиалга боловсруулалт", "Telegram мэдэгдэл", "Орлогын тайлан"],
    result: "30.5M₮ сарын орлого нэмсэн нэг жишээ клиент",
    color: "#34d399",
  },
  {
    tag: "Лид менежмент",
    icon: <IconUsers />,
    title: "AI Lead Machine",
    desc: "Харилцагчийн мэдээллийг автоматаар цуглуулж, ангилаад, таны CRM-д бэлдэж өгнө.",
    items: ["Автомат лид цуглуулалт", "Статус хянах (CRM)", "Дагаж ажиллах сануулга", "Клиентийн аналитик"],
    result: "Шинэ лид бүрт автомат мэдэгдэл + дагаж ажиллах",
    color: "#fbbf24",
  },
  {
    tag: "Процесс AI",
    icon: <IconZap />,
    title: "AI Automation",
    desc: "Захиалга, мэдэгдэл, тайлан, customer support зэрэг давтагдах ажлыг бүрэн автоматжуулна.",
    items: ["Workflow автоматжуулалт", "Олон суваг нэгтгэл", "API интеграц", "Custom AI agent"],
    result: "Ажилтны цагийн 60%+ хэмнэсэн клиент байна",
    color: "#a78bfa",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Consultation & Шинжилгээ",
    desc: "Бизнесийн онцлог, зорилго, workflow-г шинжилнэ. Тохирох AI шийдлийг тодорхойлно.",
  },
  {
    num: "02",
    title: "Тохируулга & Суурилуулалт",
    desc: "Системийг бизнест тохируулан тохиргоо хийнэ. Мэдлэгийн сан, prompt, интеграцийг бэлдэнэ.",
  },
  {
    num: "03",
    title: "Туршилт & Нэвтрүүлэлт",
    desc: "Нарийн туршиж, зохицуулсны дараа 3-7 хоногт амьд горимд нэвтрүүлнэ.",
  },
];

const TESTIMONIALS = [
  {
    text: "Шөнийн захиалгуудыг AI боловсруулдаг болсон. Нийт орлого 40% өсч, ажилтнуудын ачаалал мэдэгдэхүйц буурсан.",
    name: "Б.Оюунтунгалаг",
    role: "Kitty House Mongolia · Founder",
    av: "Б",
  },
  {
    text: "Өдөр бүр 200 гаруй ижил асуулт ирдэг байсан. Одоо AI бүгдийг шийдэж, бид чухал ажилдаа анхаарч чаддаг болсон.",
    name: "Д.Мөнхбаяр",
    role: "Кофе шоп · Эзэн",
    av: "Д",
  },
  {
    text: "QPay холболт хамгийн хэрэгтэй зүйл болсон. Хэрэглэгчид чат дотроос шууд төлдөг. Цуцлалт мэдэгдэхүйц буурсан.",
    name: "Э.Баярмаа",
    role: "Гоо сайхны салон · Эзэн",
    av: "Э",
  },
];

const FAQS = [
  { q: "Chatbot Монгол хэлийг бүрэн ойлгодог уу?", a: "Тийм. Кирилл болон латин үсгийн Монгол хэлийг, хэл яриаг (informal) ч мөн ойлгодог. Монгол хэлний контекст дээр тусгайлан сайжруулсан." },
  { q: "AI Chatbot сургахад хэр удах вэ?", a: "Та брэнд/дэлгүүрийнхаа танилцуулгыг AI мэдлэгийн санд өгснөөр шууд ажиллаж эхлэнэ." },
  { q: "Нэвтрүүлэхэд хэр хугацаа шаардагдах вэ?", a: "Ихэнх тохиолдолд 3-7 хоног. Энгийн chatbot 3 хоногт, QPay болон бусад интеграцтай 5-7 хоногт бэлэн болдог." },
  { q: "Миний бизнесийн мэдээлэл аюулгүй юу?", a: "Бүх мэдээлэл шифрлэгдэж хадгалагдана. Гуравдагч этгээдтэй хуваалцахгүй. Европын GDPR стандартад нийцсэн." },
  { q: "Facebook Page байхгүй бол яах вэ?", a: "Бизнесийн Facebook Page үүсгэхэд тусалж болно. Page байгаа бол шууд холбоно." },
  { q: "QPay merchant яаж болох вэ?", a: "Та төлбөр хүлээн авах дансны мэдээллээ dashboard дээрх QPay merchant хуудсан дээр бөглөснөөр, хэрэглэгч QPay ашиглан төлбөр төлөхөд шууд таны дансанд орно. (Төлбөр Mongol Agent-аар дамжихгүй)" },
];

const wrap = { maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap5 = { maxWidth: "64rem", margin: "0 auto", padding: "0 1.25rem" } as const;
const wrap3 = { maxWidth: "48rem", margin: "0 auto", padding: "0 1.25rem" } as const;

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "6rem 0 7rem" }}>
        {/* Subtle color glows */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 50% 55% at 18% 38%, #2563eb08 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 55% 65% at 78% 50%, #6366f10a 0%, #2563eb06 40%, transparent 70%)" }} />

        <div style={{ ...wrap, position: "relative" }}>
          {/* Two-column grid */}
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>

            {/* ── Left: text ── */}
            <div>
              <div className="section-tag" style={{ marginBottom: "1.75rem", display: "inline-flex" }}>
                Монголын #1 AI Platform
              </div>

              <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.035em", marginBottom: "1.5rem" }}>
                Бизнесийн<br />харилцааг<br />
                <span className="gradient-text">автоматжуулна.</span>
              </h1>

              <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.8, maxWidth: "460px", marginBottom: "2.5rem" }}>
                Facebook, Instagram мессенжерт холбогдсон AI — таны хэрэглэгчтэй 24/7 Монгол хэлээр харилцаж, захиалга авч, QPay-аар төлбөр баталгаажуулна.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="https://app.mongolagent.mn/register" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Агентаа бүтээх
                </Link>
                <a href="#services" className="btn-outline" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                  Танилцуулга үзэх ↓
                </a>
              </div>
            </div>

            {/* ── Right: mascot ── */}
            <div className="hero-mascot" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "460px" }}>
              {/* Subtle glow */}
              <div style={{
                position: "absolute", width: "420px", height: "420px", borderRadius: "50%",
                background: "radial-gradient(ellipse at center, #6366f120 0%, #8b5cf612 50%, transparent 72%)",
                filter: "blur(48px)",
              }} />
              {/* Mascot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mascot.png"
                alt="Mongol Agent AI"
                className="mascot-float"
                style={{ width: "400px", maxWidth: "88%", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 32px #6366f130)" }}
              />
              {/* Chat bubble — user */}
              <div style={{
                position: "absolute", top: "72px", right: "44px", zIndex: 3,
                background: "var(--surface2)", border: "1px solid var(--border2)",
                borderRadius: "1rem 1rem 1rem 0.25rem",
                padding: "0.55rem 0.85rem",
                fontSize: "0.75rem", color: "var(--text-mid)",
                boxShadow: "0 4px 24px #00000050",
              }}>
                Сайн байна уу?
              </div>
              {/* Chat bubble — AI */}
              <div style={{
                position: "absolute", bottom: "110px", left: "28px", zIndex: 3,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                borderRadius: "1rem 1rem 0.25rem 1rem",
                padding: "0.55rem 0.85rem",
                fontSize: "0.75rem", color: "white",
                boxShadow: "0 4px 24px #6366f128",
              }}>
                Захиалга баталгаажлаа!
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────── */}
      <div style={{ padding: "0 1.25rem 2.5rem" }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem 4rem", padding: "1.75rem 2.5rem", borderRadius: "1.25rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
            {[
              { num: "200+", label: "бизнес ашигладаг" },
              { num: "4.9★", label: "дундаж үнэлгээ" },
              { num: "24/7", label: "тасралтгүй ажиллагаа" },
              { num: "10 мин", label: "тохируулахад хангалттай" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.45rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "0.73rem", color: "var(--text-light)", marginTop: "0.3rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PLATFORMS MARQUEE ────────────────────────────── */}
      <div data-animate style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "1.75rem 0" }}>
        <p style={{ textAlign: "center", fontSize: "0.68rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "1.5rem" }}>
          Интеграцтай платформууд
        </p>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6rem", zIndex: 10, background: "linear-gradient(90deg, #f4f3ef, transparent)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "6rem", zIndex: 10, background: "linear-gradient(-90deg, #f4f3ef, transparent)", pointerEvents: "none" }} />
          <div className="marquee-inner">
            {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.65rem", margin: "0 2.5rem", flexShrink: 0 }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: p.img ? "var(--surface2)" : p.color + "18",
                  border: p.img ? "1px solid var(--border2)" : `1px solid ${p.color}30`,
                }}>
                  {p.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.img} alt={p.name} style={{ width: "22px", height: "22px", objectFit: "contain" }} />
                  ) : p.path ? (
                    <svg viewBox={p.vb} fill={p.color} width="16" height="16">
                      <path d={p.path} />
                    </svg>
                  ) : (
                    <span style={{ fontSize: "0.72rem", fontWeight: 900, color: p.color, lineHeight: 1 }}>{p.letter}</span>
                  )}
                </div>
                <span style={{ fontSize: "0.88rem", color: "var(--text-mid)", whiteSpace: "nowrap", fontWeight: 600 }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── WHY US ───────────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Яагаад биднийг сонгох вэ?</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Зүгээр нэг chatbot биш —{" "}
              <span className="gradient-text">таны AI ажилтан</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "460px", margin: "0 auto", fontSize: "0.92rem", lineHeight: 1.7 }}>
              Захиалга авах, төлбөр баталгаажуулах, lead цуглуулах, хүнд шилжүүлэх — бүгдийг нэг тохируулгаар автоматжуулна.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="services-grid">
            {[
              {
                badge: "Builder AI",
                icon: "⚡",
                title: "8 асуулт хариулахад л бэлэн",
                desc: "Бизнесийнхээ талаар 8 асуултад хариулаад л — Builder AI үлдсэн бүгдийг хийнэ. Мэдлэгийн сан, persona, хариултын загвар автоматаар үүснэ.",
              },
              {
                badge: "QPay интеграц",
                icon: "💳",
                title: "Чат дотроос захиалга авч, дансандаа шууд авна",
                desc: "Хэрэглэгч Messenger-т захиалга өгмөгц AI автоматаар QPay QR явуулна. Төлбөр шууд таны дансанд орно.",
              },
              {
                badge: "+1 → DM автомат",
                icon: "🎯",
                title: "Comment бүрийг боломж болгоно",
                desc: "Facebook постод '+1' гэж бичсэн хэрэглэгч бүрт автоматаар DM явна. Viral пост дээр ч зардал бараг $0.",
              },
              {
                badge: "Хүний handoff",
                icon: "🤝",
                title: "AI хийж чадахгүй үед хүнд шилжүүлнэ",
                desc: "Нарийн асуудал, гомдол, тохиролцоо шаардсан яриаг таны ажилтанд автоматаар шилжүүлнэ. Dashboard-аас шууд хариулж, дахин AI-д буцаана.",
              },
              {
                badge: "Мэдлэгийн сан",
                icon: "📚",
                title: "Таны брэндийн дуу хоолойгоор хариулна",
                desc: "Бүтээгдэхүүн, үнэ, ажлын цаг, FAQ — бүгдийг мэдлэгийн санд оруулна. AI таны мэдлэгийн хүрээнд л хариулж, буруу мэдээлэл өгөхгүй.",
              },
              {
                badge: "Facebook + Instagram",
                icon: "📱",
                title: "Хоёр сувгаа нэг дороос хянана",
                desc: "Facebook Messenger болон Instagram DM — хоёуланд нэг AI ажилтан. Мессеж, захиалга, lead, тайлан бүгдийг нэг dashboard-аас харна.",
              },
              {
                badge: "Self-learning AI",
                icon: "🧠",
                title: "Өөрөө өөрийгөө сургадаг AI",
                desc: "Таны бизнесийн чат бүрийг дүн шинжилгээ хийж, хариултаа өдөр бүр сайжруулна. Хэрэглэгчийн асуулт, зан төлөвт суурилан тасралтгүй хөгжинө.",
              },
              {
                badge: "Захиалгат шийдэл",
                icon: "🛠️",
                title: "Зөвхөн танд зориулсан агент",
                desc: "Custom вэбсайт, custom AI agent — таны бизнесийн онцлог, дизайн, процесст бүрэн тааруулсан шийдэл. Стандарт загвар биш, өөрийн брэндтэй.",
              },
            ].map(f => (
              <div key={f.title} style={{
                borderRadius: "1.25rem", padding: "1.75rem",
                background: "var(--surface2)", border: "1px solid var(--border2)",
                display: "flex", flexDirection: "column", gap: "0.75rem",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                    background: "#0ea5e914", border: "1px solid #0ea5e928",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.25rem",
                  }}>
                    {f.icon}
                  </div>
                  <span style={{
                    fontSize: "0.63rem", fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.08em", color: "#0ea5e9",
                    background: "#0ea5e910", border: "1px solid #0ea5e920",
                    padding: "0.2rem 0.55rem", borderRadius: "100px",
                  }}>
                    {f.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: "0.97rem", fontWeight: 700, letterSpacing: "-0.01em", color: "var(--text)", lineHeight: 1.35 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────── */}
      <PricingSection />

      {/* ─── DEMO CHAT ────────────────────────────────────── */}
      <DemoChat />

      {/* ─── SERVICES ─────────────────────────────────────── */}
      <section id="services" data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Үйлчилгээ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Бизнесийн хэрэгцээнд тохирсон<br />
              <span className="gradient-text">AI шийдлүүд</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: "440px", margin: "0 auto", fontSize: "0.92rem" }}>
              Нэг платформоос — борлуулалт, харилцагч, лид, автоматжуулалт бүгд нэг дор.
            </p>
          </div>

          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {SERVICES.map(s => (
              <div key={s.title} className="card-glow" style={{
                position: "relative", overflow: "hidden", borderRadius: "1.25rem",
                background: "var(--surface2)", border: "1px solid var(--border2)",
                padding: "2rem",
              }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "160px", height: "160px", borderRadius: "50%", background: `radial-gradient(circle, ${s.color}15, transparent 70%)`, transform: "translate(40%, -40%)", pointerEvents: "none" }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                    background: `${s.color}15`, border: `1px solid ${s.color}25`, flexShrink: 0,
                    color: s.color,
                  }}>
                    {s.icon}
                  </div>
                  <div className="section-tag" style={{ display: "inline-flex", background: `${s.color}12`, borderColor: `${s.color}28`, color: s.color, fontSize: "0.65rem" }}>
                    {s.tag}
                  </div>
                </div>

                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.65rem" }}>{s.title}</h3>
                <p style={{ color: "var(--text-mid)", fontSize: "0.84rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{s.desc}</p>

                <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.25rem" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1.5rem" }}>
                  {s.items.map(item => (
                    <div key={item} className="check-item">{item}</div>
                  ))}
                </div>

                <div style={{ borderRadius: "0.65rem", padding: "0.7rem 1rem", background: `${s.color}08`, border: `1px solid ${s.color}25`, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                  <p style={{ fontSize: "0.78rem", color: s.color, fontWeight: 500, lineHeight: 1.4 }}>{s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS ──────────────────────────────────────── */}
      <section data-animate style={{ padding: "4rem 0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="md:grid-cols-4">
            {RESULTS.map(r => (
              <div key={r.label} style={{ textAlign: "center", padding: "1.5rem", borderRadius: "1rem", background: "var(--surface2)", border: "1px solid var(--border2)" }}>
                <div className="stat-num" style={{ marginBottom: "0.5rem" }}>{r.num}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-light)", lineHeight: 1.4 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Процесс</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              3 алхамд ажилладаг болно
            </h2>
          </div>

          {/* Grid + connectors wrapper */}
          <div style={{ position: "relative" }}>
            {/* Connecting line */}
            <div className="process-connector" style={{
              position: "absolute", top: "2.6rem", left: "calc(16.66% + 1.6rem)", right: "calc(16.66% + 1.6rem)",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #6366f140, #6366f140, transparent)",
              pointerEvents: "none",
            }} />

            <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
              {PROCESS.map((p, i) => (
                <div key={p.num} style={{
                  position: "relative",
                  borderRadius: "1.25rem",
                  padding: "2rem 1.75rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}>
                  {/* Step badge */}
                  <div style={{
                    width: "3rem", height: "3rem", borderRadius: "0.875rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.5rem",
                    fontSize: "0.9rem", fontWeight: 800, letterSpacing: "-0.02em",
                    background: i === 1
                      ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                      : "linear-gradient(135deg, #6366f118, #8b5cf618)",
                    border: i === 1 ? "none" : "1px solid #6366f130",
                    color: i === 1 ? "white" : "var(--primary2)",
                    boxShadow: i === 1 ? "0 4px 16px #6366f135" : "none",
                  }}>
                    {p.num}
                  </div>

                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.65rem", letterSpacing: "-0.01em" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.845rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
                    {p.desc}
                  </p>

                  {/* Arrow hint (not last) */}
                  {i < PROCESS.length - 1 && (
                    <div className="process-connector" style={{
                      position: "absolute", top: "2.55rem", right: "-1rem",
                      fontSize: "0.75rem", color: "#6366f150", zIndex: 2,
                      pointerEvents: "none",
                    }}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap5}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Сэтгэгдэл</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Захиалагчдын сэтгэгдэл</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.25rem" }} className="md:grid-cols-3">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card card-glow" style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: "#f59e0b", fontSize: "0.85rem" }}>★</span>)}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "1.5rem" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, flexShrink: 0, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white" }}>
                    {t.av}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-light)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section id="faq" data-animate style={{ padding: "7rem 0" }}>
        <div style={wrap3}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Түгээмэл асуултууд</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderRadius: "1rem", padding: "1.5rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "0.4rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", background: "#6366f118", color: "var(--primary2)", fontSize: "0.65rem", fontWeight: 700 }}>Q</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.92rem", marginBottom: "0.4rem" }}>{f.q}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{f.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section data-animate style={{ padding: "5rem 0 6rem" }}>
        <div style={wrap3}>
          <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", padding: "4rem 3rem", textAlign: "center", background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, #6366f120 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", color: "white" }}>
              <div className="section-tag" style={{ display: "inline-flex", marginBottom: "1.5rem", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}>Өнөөдөр эхэл</div>
              <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem", color: "white" }}>
                Бизнесийнхээ <span className="gradient-text">AI хувьсгалыг</span><br />
                эхлүүлэх цаг болсон
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.97rem", lineHeight: 1.65, maxWidth: "440px", margin: "0 auto 2.5rem" }}>
                30 минутын үнэгүй consultation-аар бизнестээ яг тохирсон AI шийдлийг олж мэдээрэй.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="https://app.mongolagent.mn/register" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.95rem 2rem", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", borderRadius: "0.75rem", background: "white", color: "#1e1b4b", transition: "all 0.2s" }}>
                  Агентаа бүтээх →
                </Link>
                <Link href="tel:80952821" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.95rem 2rem", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", borderRadius: "0.75rem", background: "transparent", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)", transition: "all 0.2s" }}>
                  <IconPhone /> 80952821
                </Link>
              </div>
              <p style={{ marginTop: "2rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
                Нэвтрүүлснийхээ дараа ч тасралтгүй дэмжлэг · Нуугдмал нэмэлт төлбөргүй
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
