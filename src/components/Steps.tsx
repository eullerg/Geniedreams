"use client";

import { MessageCircle, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Envie sua ideia",
    description: "Abra o WhatsApp, descreva ou envie uma imagem. Só isso!",
  },
  {
    icon: Sparkles,
    title: "A magia acontece",
    description: "Nossa IA cria um vídeo de alta qualidade em minutos.",
  },
  {
    icon: Download,
    title: "Receba & compartilhe",
    description: "O arquivo chega direto no WhatsApp, pronto para postar.",
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-12 text-center font-geist-mono text-3xl font-semibold">
        Simples assim → 3 passos
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-neutral-900 p-8 text-center shadow-lg transition hover:bg-neutral-800"
          >
            <Icon className="mx-auto mb-4 h-10 w-10 text-turquoise" />
            <h3 className="mb-2 font-geist-mono text-xl font-medium">{title}</h3>
            <p className="text-sm leading-relaxed text-neutral-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
