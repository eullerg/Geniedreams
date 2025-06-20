"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  credits: number | string;
  features: string[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    credits: 20,
    price: "R$ 199",
    features: [
      "20 créditos de vídeo IA",
      "Suporte básico via WhatsApp",
      "Entrega em até 15 min",
    ],
  },
  {
    name: "Pro",
    credits: 100,
    price: "R$ 599",
    highlighted: true,
    features: [
      "100 créditos (economize 20%)",
      "Prioridade na fila de render",
      "Template personalizado",
      "1 revisão gratuita",
    ],
  },
  {
    name: "Studio",
    credits: 500,
    price: "R$ 899",
    features: [
      "500 créditos (economize 40%)",
      "Suporte dedicado 24h",
      "Integração via API",
      "Revisões ilimitadas",
      "Acesso antecipado a novos filtros",
    ],
  },
];

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-2 text-sm text-neutral-300">
    <Check className="h-4 w-4 text-turquoise" />
    {children}
  </li>
);

export default function Pricing() {
  const handleBuy = () => {
    window.location.href = "https://chat.whatsapp.com/B67TOgZXQTOETP9XGmvO4D"; // TODO: Add number
  };

  const handleEnterprise = () => {
    window.location.href = "https://chat.whatsapp.com/B67TOgZXQTOETP9XGmvO4D"; // TODO: Add number
  };

  return (
    <section id="precos" className="w-full bg-neutral-950 py-24 px-4 font-geist text-white">
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2
          className="mb-3 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          style={{ backgroundImage: "linear-gradient(to right,#fff,#888)" }}
        >
          Planos GenieDreams
        </h2>
        <p className="text-sm text-neutral-400 md:text-base">
          Escolha o pacote de créditos perfeito para seu fluxo de criação.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`relative flex flex-col items-start rounded-lg border border-white/10 bg-[#1a1a1a]/70 p-6 shadow-md backdrop-blur-lg ${
              plan.highlighted ? "ring-2 ring-turquoise/60" : ""
            }`}
          >
            {plan.highlighted && (
              <span className="absolute right-4 top-4 rounded bg-neonPurple px-2 py-1 text-xs font-bold uppercase text-white">
                Popular
              </span>
            )}

            <h3 className="mb-1 text-base font-bold text-neutral-400">{plan.name}</h3>
            <p className="mb-3 text-3xl font-bold md:text-4xl">{plan.price}</p>

            <div className="mb-4 w-full border-b border-white/10" />

            <p className="mb-2 text-sm text-neutral-300">
              {typeof plan.credits === "number" ? `${plan.credits} créditos` : plan.credits}
            </p>

            <ul className="mb-6 space-y-2">
              {plan.features.map((f) => (
                <CheckItem key={f}>{f}</CheckItem>
              ))}
            </ul>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleBuy}
              className="hero-outline-button mt-auto w-full rounded-md bg-transparent px-4 py-2 text-sm transition hover:bg-white/10"
            >
              Comprar no WhatsApp
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Texto adicional */}
      <div className="mx-auto mt-10 max-w-4xl text-center text-sm text-neutral-400">
        Precisa de <span className="font-semibold text-white">mais de 500 créditos</span> ou de uma
        integração corporativa em larga escala? Nosso time pode configurar um
        plano <span className="text-turquoise">Enterprise</span> sob medida para você.
        <br className="hidden md:block" />
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleEnterprise}
          className="hero-outline-button mt-4 inline-flex rounded-md bg-transparent px-5 py-2 text-xs md:text-sm transition hover:bg-white/10"
        >
          Falar com Vendas
        </motion.button>
      </div>
    </section>
  );
}
