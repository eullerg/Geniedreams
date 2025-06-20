import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "GenieDreams • Vídeos IA via WhatsApp",
  description: "Crie vídeos mágicos em minutos usando inteligência artificial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative min-h-screen bg-neutral-950 text-white antialiased">
        {/* -------- Mesh-gradient global ---------- */}
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute -left-24 -top-16 h-[420px] w-[420px] rounded-full bg-turquoise opacity-70 blur-[120px] animate-mesh" />
          <div className="absolute -right-32 top-1/3 h-[540px] w-[540px] rounded-full bg-neonPurple opacity-60 blur-[120px] animate-meshReverse" />
          <div className="absolute left-1/3 -bottom-24 h-[480px] w-[480px] rounded-full bg-[#1e90ff] opacity-60 blur-[120px] animate-mesh" />
        </div>

        {/* -------- Grain overlay ---------- */}
        <div className="grainOverlay pointer-events-none fixed inset-0 -z-10" />

        {children}
      </body>
    </html>
  );
}
