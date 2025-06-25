"use client";

import { motion } from "framer-motion";

type Feature = {
  video: string;
  title: string;
  copy?: string;        // texto corrido
  intro?: string;       // frase antes da lista
  bullets?: string[];   // itens da lista
};

const features: Feature[] = [
  {
    video: "/feat-1.mp4",
    title: "Escolha seu objetivo",
    intro: "A IA ajusta automaticamente o estilo do vídeo para:",
    bullets: [
      "📢 Divulgar produtos",
      "🎉 Gerar engajamento",
      "🛒 Aumentar vendas",
      "🏆 Fortalecer sua marca",
    ],
  },
  {
    video: "/feat-2.mp4",
    title: "As imagens podem ganhar vida",
    copy: "Basta mandar uma imagem e o nosso modelo faz o resto. Transformamos sua foto em um clipe dinâmico de alta qualidade.",
  },
  {
    video: "/feat-3.mp4",
    title: "Junte vídeos e conte histórias",
    intro: "Mande seus clipes pelo WhatsApp e receba um único vídeo dinâmico:",
    bullets: [
      "✔️ Transições inteligentes que contam sua história",
      "✔️ Trilha sonora que eleva a emoção do seu conteúdo",
      "✔️ Efeitos cinematográficos, iluminação e cores profissionais",
    ],
  },
];

export default function Funcionalidades() {
  return (
    <section id="funcionalidades" className="w-full bg-[#0A0A0A] py-20 px-6">
      {/* ---------- Heading & Sub-heading ---------- */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg,#17E6E4,#C700FF)" }}
        >
          Seu Estúdio Inteligente
        </h2>
        <p className="mt-4 text-sm md:text-base text-neutral-400 font-geist-mono">
        Dê vida a vídeos que impressionam: resultados profissionais a poucas mensagens de distância.
        </p>
      </div>

      {/* -------------- Grid de features -------------- */}
      <div className="mx-auto max-w-6xl space-y-24">
        {features.map(({ video, title, copy, intro, bullets }, i) => (
          <div
            key={title}
            className={`
              flex flex-col items-center gap-10
              md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* vídeo */}
            <motion.video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md rounded-2xl object-cover shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* texto */}
            <motion.div
              className="max-w-md space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="font-geist-mono text-lg font-bold text-turquoise">
                {title}
              </h3>

              {copy && <p className="text-neutral-300">{copy}</p>}

              {intro && (
                <>
                  <p className="text-neutral-300">{intro}</p>
                  <ul className="space-y-1 text-neutral-300">
                    {bullets?.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
