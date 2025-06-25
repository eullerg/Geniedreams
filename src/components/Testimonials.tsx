"use client";

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";

/**
 * Testimonials.tsx – GenieDreams
 * Efeito "entrando/saindo" aprimorado.
 * 1. Máscara CSS (mask‑image) para fade suave top/bottom.
 * 2. Sobreposição gradiente (backup para navegadores sem mask).
 */

const testimonials = [
  { image: "https://randomuser.me/api/portraits/women/15.jpg", name: "Camila Esteves", position: "Influencer de Conteúdo", feedback: "Gravei um Reels com a GenieDreams e bati 1 M de views em 24 h. A praticidade do WhatsApp é surreal!" },
  { image: "https://randomuser.me/api/portraits/men/58.jpg",   name: "Leonardo Mota",   position: "Consultor de Marketing", feedback: "Recomendo GenieDreams para todos os meus clientes. Conversão subiu 32 % em média após adotar vídeos IA." },
  { image: "https://randomuser.me/api/portraits/women/52.jpg", name: "Renata Shimizu",   position: "Empresária",              feedback: "Economizei horas de edição. A IA acerta a estética na primeira tentativa!" },
  { image: "https://randomuser.me/api/portraits/men/34.jpg",   name: "Carlos Antunes",   position: "CTO",                     feedback: "Integração via WhatsApp = zero código. Time feliz, board feliz." },
  { image: "https://randomuser.me/api/portraits/men/60.jpg",   name: "Samuel Reis",      position: "Dev Front-End",          feedback: "API robusta, docs claras. Automatizei criação de vídeos em minutos." },
  { image: "https://randomuser.me/api/portraits/women/10.jpg", name: "Patrícia Vieira",  position: "Diretora de Operações",   feedback: "Reduzimos custo de produção em 70 % mantendo qualidade premium." },
  { image: "https://randomuser.me/api/portraits/men/91.jpg",   name: "Hélio Cardoso",    position: "Gerente de Projetos",    feedback: "Time GenieDreams é ágil e receptivo a feedback. Evolução constante!" },
  { image: "https://randomuser.me/api/portraits/women/28.jpg", name: "Bianca Moreira",   position: "UX Researcher",          feedback: "A experiência do usuário ficou incrivelmente simples. Só mandar msg!" },
  { image: "https://randomuser.me/api/portraits/men/48.jpg",   name: "Marcelo Lima",     position: "Analista de Sistemas",   feedback: "É incrível ver IA gerando vídeos tão rápido. Produtividade lá em cima." },
  { image: "https://randomuser.me/api/portraits/women/66.jpg", name: "Tatiana Fernandes",position: "Head de Inovação",        feedback: "GenieDreams virou case interno de transformação digital!" },
  { image: "https://randomuser.me/api/portraits/men/71.jpg",   name: "Juliano Pinto",    position: "Founder",               feedback: "Escalabilidade e suporte incríveis. Já produzimos +5 k vídeos/mês." },
  { image: "https://randomuser.me/api/portraits/women/19.jpg", name: "Fernanda Correia", position: "Arquiteta de Software",   feedback: "Pipeline CI/CD com vídeos automáticos? Check ✅ GenieDreams entrega!" },
];

export default function Testimonials() {
  const { col1Loop, col2Loop, col3Loop } = useMemo(() => {
    const third = Math.ceil(testimonials.length / 3);
    return {
      col1Loop: [...testimonials.slice(0, third), ...testimonials.slice(0, third)],
      col2Loop: [...testimonials.slice(third, third * 2), ...testimonials.slice(third, third * 2)],
      col3Loop: [...testimonials.slice(third * 2), ...testimonials.slice(third * 2)],
    };
  }, []);

  const Card = ({ t }: { t: (typeof testimonials)[0] }) => (
    <div className="rounded-xl bg-neutral-900/90 p-5 shadow-lg shadow-black/40 backdrop-blur-md">
      <div className="mb-3 flex items-center">
        <img src={t.image} alt={t.name} width={44} height={44} loading="lazy" className="mr-3 h-11 w-11 rounded-full object-cover" />
        <div>
          <h3 className="text-sm font-bold text-white">{t.name}</h3>
          <p className="text-xs text-neutral-400">{t.position}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-neutral-300">{t.feedback}</p>
    </div>
  );

  const columnVariants: Variants = {
    animate: {
      y: ["0%", "-100%"],
      transition: { repeat: Infinity, duration: 40, ease: "linear" },
    },
  };

  return (
    <section id="testemunhos" className="w-full bg-neutral-950 py-20 px-4 font-geist">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
          Opiniões dos nossos agentes IA da Geniedreams
        </h2>
        <p className="text-sm tracking-wide text-neutral-400 md:text-base">
          Profissionais de vários setores já criam vídeos IA via WhatsApp.
        </p>
      </div>

      {/* Scroller com máscara */}
      <div
        className="relative mx-auto h-[560px] max-w-6xl overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
                {/* Fallback gradiente */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent" />

        <div className="absolute inset-0 flex space-x-6 z-0">
          {[col1Loop, col2Loop, col3Loop].map((col, cIdx) => (
            <motion.div
              key={cIdx}
              variants={columnVariants}
              animate="animate"
              className="relative w-1/3 space-y-6 first:mt-14"
              style={cIdx === 1 ? { animationDirection: "reverse", marginTop: "7rem" } : cIdx === 2 ? { marginTop: "3.5rem" } : undefined}
            >
              {col.map((t, idx) => (
                <Card key={`c${cIdx}-${idx}`} t={t} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
