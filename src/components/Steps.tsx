"use client";

import { MessageCircle, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Envie seu pedido",
    description: "Exemplo: Showroom futurista com óculos escuros, flutuando e mudando de cor no ritmo de synthwave, ângulo de drone.",
  },
  {
    icon: Sparkles,
    title: "A magia acontece",
    description: "Nossa IA cria um vídeo de alta qualidade em minutos.",
  },
  {
    icon: Download,
    title: "E o resultado?",
    description: "Um conteúdo que parece ter custado milhões, mas saiu do seu WhatsApp!",
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-24">
      {/* Heading */}
      <h2 className="text-center font-geist-mono text-3xl md:text-4xl font-semibold">
      Parece mágica, mas é Geniedreams!
      </h2>

      {/* Sub-título */}
      <p className="mt-4 mb-12 text-center text-sm md:text-base text-neutral-400 font-geist-mono">
      Quer um vídeo que faça seus concorrentes perguntarem &quot;como eles fizeram isso?&quot; Sem estúdio. Sem edição. Apenas mensagens.
      </p>

      {/* Cards */}
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-neutral-900 p-8 text-center shadow-lg transition hover:bg-neutral-800"
          >
            <Icon className="mx-auto mb-4 h-10 w-10 text-turquoise" />
            <h3 className="mb-2 font-geist-mono text-xl font-medium">{title}</h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}