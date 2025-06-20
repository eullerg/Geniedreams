"use client";

const faqs = [
  [
    "O que é a GenieDreams?",
    "Uma IA que transforma textos ou imagens em vídeos curtos, entregues via WhatsApp.",
  ],
  [
    "Preciso saber editar?",
    "Não! Toda edição é automática. Você só publica.",
  ],
  [
    "Em quais plataformas meus vídeos funcionam?",
    "TikTok, Reels, Shorts ou qualquer player 16:9/9:16.",
  ],
  [
    "Posso usar minhas imagens ou músicas?",
    "Sim, basta enviá-las junto da sua mensagem.",
  ],
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-neutral-950 px-6 py-24 font-geist text-white"
    >
      {/* Animated mesh‑gradient background */}
      <div className="mesh-gradient pointer-events-none absolute inset-0 -z-20" />
      {/* Grain overlay for subtle noise */}
      <div className="grainOverlay pointer-events-none absolute inset-0 -z-10" />

      <h2 className="mb-12 text-center font-geist-mono text-3xl font-semibold">
        Perguntas Frequentes
      </h2>
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map(([q, a]) => (
          <details key={q} className="rounded-lg border border-white/10 bg-neutral-900/70 p-4 backdrop-blur">
            <summary className="cursor-pointer list-none font-medium">{q}</summary>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

