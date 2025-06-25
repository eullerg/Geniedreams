"use client";

import { useRef, useState } from "react";            /* ⬅️ novo */
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Volume2,
  VolumeX,
  Play,
  Pause,                                         /* ⬅️ ícones */
} from "lucide-react";
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
            Crie vídeos<br />
            <span className="text-turquoise">impressionantes</span>
            <br />
            com IA que vendem<br />
            e <span className="text-neonPurple">engajam</span>
          </h1>

          <p className="max-w-md text-base text-neutral-300">
          Sem apps, sem instalações, sem esforço. Apenas peça, receba, e compartilhe.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Link
              href="https://chat.whatsapp.com/B67TOgZXQTOETP9XGmvO4D" /* TODO: add number */
              className="hero-outline-button rounded-md bg-white/10 px-8 py-3 font-geist-mono text-sm text-white backdrop-blur-md transition hover:bg-white/15"
            >
              <Sparkles className="mr-2 inline-block h-5 w-5" />
               Criar meu primeiro vídeo! 
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm text-white/70 underline-offset-4 transition hover:text-white"
            >
              
            </Link>
          </div>
        </div>

        {/* Mockup WhatsApp */}
        <div className="mt-56 flex w-full max-w-sm justify-center md:mt-32 md:ml-auto md:justify-end md:translate-x-16 -translate-y-[10%]">
          <div className="w-full rounded-2xl bg-[#152415]/40 p-5 shadow-lg backdrop-blur-sm">
            {/* Header */}
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/80">
              <span className="inline-block h-3 w-3 rounded-full bg-green-500" />
              Assistente criativo Geniedreams no WhatsApp
            </div>

            <div className="flex flex-col gap-3 font-geist-mono text-xs sm:text-sm">
              {/* Bolhas de texto */}
              <div className="w-fit max-w-[85%] self-start rounded-2xl bg-neonPurple/25 p-3">
                “Uma modelo vestindo um casaco, estilo inverno premium, preto e laranja, em um estudio com fotógrafos ao fundo, a câmera então se afasta, em uma perspectiva de baixo para cima.”
              </div>
              <div className="w-fit max-w-[85%] self-end rounded-2xl bg-turquoise/25 p-3">
              Seu vídeo em 16:9 está sendo criado. Em breve você terá um conteúdo digno de campanhas de alto desempenho! ❄️🛍️
              </div>

              {/* --- Pré-visualização em vídeo com controles --- */}
              {(() => {
                const [muted, setMuted]   = useState(true);
                const [playing, setPlay]  = useState(true);
                const videoRef            = useRef<HTMLVideoElement>(null);

                return (
                  <div className="relative flex h-56 w-full overflow-hidden rounded-2xl border border-dashed border-white/20">
                    <video
                      ref={videoRef}
                      src="/geniedreamsexemplo2.mp4"
                      autoPlay
                      loop
                      muted={muted}
                      playsInline
                      className="h-full w-full object-cover"
                    />

                    {/* Botões */}
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      {/* mute / unmute */}
                      <button
                        onClick={() => {
                          setMuted(!muted);
                          if (videoRef.current)
                            videoRef.current.muted = !muted;
                        }}
                        className="rounded-full bg-black/50 p-1 backdrop-blur-sm transition hover:bg-black/70"
                      >
                        {muted ? (
                          <VolumeX className="h-4 w-4 text-white" />
                        ) : (
                          <Volume2 className="h-4 w-4 text-white" />
                        )}
                      </button>

                      {/* play / pause */}
                      <button
                        onClick={() => {
                          if (!videoRef.current) return;
                          if (playing) {
                            videoRef.current.pause();
                          } else {
                            videoRef.current.play();
                          }
                          setPlay(!playing);
                        }}
                        className="rounded-full bg-black/50 p-1 backdrop-blur-sm transition hover:bg-black/70"
                      >
                        {playing ? (
                          <Pause className="h-4 w-4 text-white" />
                        ) : (
                          <Play className="h-4 w-4 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
        </div>
        <div className="mt-40 flex flex-col items-center gap-2"></div>
    </section>
  );
}
