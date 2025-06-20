"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type Dot = {
  x0: number;
  y0: number;
  dx: number;
  dy: number;
  size: number;
  dur: number;
  delay: number;
  color: string;
};

/* ------------ Particulas gerando 30 dots aleatórios ------------ */
const dots: Dot[] = Array.from({ length: 30 }, () => ({
  x0: Math.random() * 100,                   // posição inicial (vw/vh)
  y0: Math.random() * 100,
  dx: (Math.random() - 0.5) * 80,            // ±40 vw
  dy: (Math.random() - 0.5) * 80,            // ±40 vh
  size: 6 + Math.random() * 6,               // 6-12 px
  dur: 8 + Math.random() * 6,                // 8-14 s
  delay: Math.random() * 6,
  color: Math.random() > 0.5 ? "#17E6E4" : "#C700FF",
}));

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0A0A0A] pt-28">
      {/* ------- fitas diagonais -------- */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(70deg, transparent 30%, rgba(23,230,228,0.35) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(250deg, transparent 35%, rgba(199,0,255,0.30) 55%, transparent 75%)",
          backgroundSize: "180% 180%",
        }}
        animate={{ backgroundPosition: ["100% 0%", "0% 100%", "100% 0%"] }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, transparent 40%, rgba(23,230,228,0.25) 60%, transparent 80%)",
          backgroundSize: "160% 160%",
        }}
        animate={{ backgroundPosition: ["0% 100%", "100% 0%", "0% 100%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
      />

      {/* ----------- Partículas animadas ----------- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {dots.map((d, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full blur-[2px] opacity-60"
            style={{
              backgroundColor: d.color,
              width: d.size,
              height: d.size,
              top: `${d.y0}vh`,
              left: `${d.x0}vw`,
            }}
            animate={{
              x: [0, d.dx, 0],
              y: [0, d.dy, 0],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: d.dur,
              delay: d.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* --------------- Conteúdo --------------- */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 md:grid md:grid-cols-2 md:gap-32 lg:px-14">
        {/* Texto */}
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-start">
          <h1 className="font-geist text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold leading-tight text-white">
            Crie videos<br />
            <span className="text-turquoise">impressionantes</span>
            <br />
            com ia que vendem<br />
            e <span className="text-neonPurple">engajam</span>
          </h1>

          <p className="max-w-md text-base text-neutral-300">
            Peça no WhatsApp e receba em minutos. Sem apps. Sem habilidades.
            Simples assim.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Link
              href="https://chat.whatsapp.com/B67TOgZXQTOETP9XGmvO4D" /* TODO: add number */
              className="hero-outline-button rounded-md bg-white/10 px-8 py-3 font-geist-mono text-sm text-white backdrop-blur-md transition hover:bg-white/15"
            >
              <Sparkles className="mr-2 inline-block h-5 w-5" />
              Criar Meu Primeiro Vídeo
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm text-white/70 underline-offset-4 transition hover:text-white"
            >
              Como Funciona →
            </Link>
          </div>
        </div>

        {/* Mockup WhatsApp */}
        <div className="mt-32 flex w-full max-w-sm justify-center md:mt-32 md:ml-auto md:justify-end md:translate-x-16 -translate-y-[10%]">
          <div className="w-full rounded-2xl bg-[#152415]/40 p-5 shadow-lg backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/80">
              <span className="inline-block h-3 w-3 rounded-full bg-green-500" />
              Geniedreams Bot
            </div>
            <div className="flex flex-col gap-3 font-geist-mono text-xs sm:text-sm">
              <div className="w-fit max-w-[85%] self-start rounded-2xl bg-neonPurple/25 p-3">
                “Um dragão dourado voando sobre um castelo medieval ao pôr-do-sol,
                9:16, 8 segundos”
              </div>
              <div className="w-fit max-w-[85%] self-end rounded-2xl bg-turquoise/25 p-3">
                Formato 9:16 selecionado. Aguarde, criando sua obra-prima…
              </div>
              <div className="flex h-36 w-full items-center justify-center self-end rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-neonPurple/20 to-turquoise/20">
                <span className="text-white/70">▶️ Pré-visualização</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powered by */}
      <div className="mt-20 flex flex-col items-center gap-2 translate-y-[15%]">
        <span className="font-geist-mono text-xs uppercase tracking-wide text-white/60">
          Powered by
        </span>
        <Image
          src="/veo3-logo.png"
          alt="VEO3 logo"
          width={220}
          height={64}
          className="object-contain opacity-90"
          priority
        />
      </div>
    </section>
  );
}
