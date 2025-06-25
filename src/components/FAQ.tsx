"use client";

const faqs = [
  [
    "O que é a Geniedreams?",
    "Seu estúdio de criação via WhatsApp: transforme textos, imagens ou ideias em vídeos profissionais com IA sem apps ou edição manual.",
  ],
  [
    "Como funciona?",
    "1. Envie seu pedido por WhatsApp (ex.:Showroom futurista com meus óculos escuros flutuando em synthwave) 2. Nossa IA confirma os detalhes e cria o vídeo 3. Você recebe o arquivo pronto para postar em minutos",
  ],
  [
    "Preciso instalar algo ou ter habilidades técnicas?",
    "Absolutamente não. Basta ter WhatsApp e saber descrever seu pedido em português natural.",
  ],
  [
    "Posso usar minhas próprias imagens/vídeos?",
    "Sim! Envie-os no chat junto com suas instruções. A IA ajusta automaticamente iluminação, cortes, efeitos e mais.",
  ],
  [
    "Consigo escolher o estilo do vídeo (realista, cartoon, etc.)?",
    "Com certeza! Especifique na mensagem (ex.: Estilo 3D animado ou Tom cinematográfico realista)."
  ],
  [
    "Em quais redes sociais meus vídeos funcionam?",
    "Formatos 9:16 e 16:9. YouTube, Instagram, TikTok, X, LinkedIn.",
  ],
  [
    "Os vídeos têm marca d’água?",
    "Não! Você recebe arquivos limpos, prontos para branding (podemos incluir seu logo sob demanda).",
  ],
  [
    "Consigo gerar vídeos em outros formatos (como 1:1)?",
    "Atualmente focamos em 16:9 e 9:16, mas planejamos novos formatos em breve!",
  ],
  [
    "Como funcionam os créditos?",
    "1 crédito = 1 vídeo de 5s a 10s. Os créditos têm validade mensal (não cumulativos), renovados automaticamente conforme seu plano.",
  ],
  [
    "Há opção para agências, empresas ou grandes demandas?",
    "Sim! Entre em contato conosco para saber mais.",
  ],
  [
    "Qual o prazo para receber os vídeos?",
    "De 2 a 5 minutos por vídeo (dependendo da complexidade).",
  ],
  [
    "Quem é dono dos vídeos criados?",
    "Você! Todos os direitos autorais são transferidos assim que o vídeo é entregue.",
  ],
  [
    "A Geniedreams pode usar meus vídeos como exemplo?",
    "Só com sua autorização explícita (perguntaremos sempre).",
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

