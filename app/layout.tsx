import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mongol Agent — Монголын бизнесийн AI шийдэл",
  description: "AI chatbot хөгжүүлэлт, бизнес автоматжуулалт, сургалт, зөвлөгөө. Монголын бизнесийг AI-аар хүчирхэгжүүл.",
  openGraph: {
    title: "Mongol Agent",
    description: "Монголын бизнесийн AI шийдэл",
    url: "https://mongolagent.mn",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn" className={jakarta.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
