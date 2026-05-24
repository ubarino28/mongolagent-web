import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
    <html lang="mn" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
