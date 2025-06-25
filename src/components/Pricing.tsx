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
    name: "Hobby",
    credits: 5,
    price: "R$ 19,99",
    features: [
      "5 créditos de vídeo",
      "Criar vídeos (5 a 10s)",
      "Criar imagens",
      "Comunidade Geniedreams",
    ],
  },
  {
    name: "Criador",
    credits: 20,
    price: "R$ 149,99",
    highlighted: true,
    features: [
      "20 créditos de vídeo",
      "Tudo no plano Hobby",
      "Criar vídeos com imagens de referência",
      "Editar imagens",
      "Combinar imagens"
    ],
  },
  {
    name: "Premiere",
    credits: 100,
    price: "R$ 999,99",
    features: [
      "100 créditos de vídeo",
      "Tudo no plano Criador",
      "Editar vídeos",
      "Consultoria mensal com especialistas",
      "Acesso antecipado a novas funcionalidades",
      "Suporte dedicado"
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
    window.location.href = "http://wa.me/558331428770?text=Ol%C3%A1%21+Gostaria+de+saber+sobre+Planos"; // TODO: Add number
  };

  const handleEnterprise = () => {
    window.location.href = "http://wa.me/558331428770?text=Ol%C3%A1%21+Gostaria+de+saber+sobre+Vendas"; // TODO: Add number
  };

  return (
    <section id="precos" className="w-full bg-neutral-950 py-24 px-4 font-geist text-white">
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2
          className="mb-3 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          style={{ backgroundImage: "linear-gradient(to right,#fff,#888)" }}
        >
          Planos Geniedreams
        </h2>
        <p className="text-sm text-neutral-400 md:text-base">
        Do Hobby ao Profissional: escolha o que combina com seu ritmo de criação.
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
              Quero este Plano
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Texto adicional */}
      <div className="mx-auto mt-10 max-w-4xl text-center text-sm text-neutral-400">
        Precisa de <span className="font-semibold text-white">um plano personalizado</span> ou volume
        corporativo? Fale com nosso time e criamos uma solução
        sob medida para suas necessidades com <span className="text-turquoise">descontos</span> progressivos e integração dedicada.
        <br className="hidden md:block" />
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleEnterprise}
          className="hero-outline-button mt-4 inline-flex rounded-md bg-transparent px-5 py-2 text-xs md:text-sm transition hover:bg-white/10"
        >
          Fale conosco
        </motion.button>
      </div>
    </section>
  );
}
