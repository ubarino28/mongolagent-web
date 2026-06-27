export const revalidate = false;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

// Inter — Латин + Кирилл (Монгол) хоёуланг төгс дэмждэг нэг фонт.
// (Plus Jakarta Sans кирилл дэмждэггүй тул Монгол текст өөр фонтоор унадаг байсан.)
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jakarta",
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
    <html lang="mn" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
