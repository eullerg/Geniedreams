"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const primaryNav: [string, string][] = [
    ["Como Funciona", "#como-funciona"],
    ["Preços", "#precos"],
    ["FAQ", "#faq"],
  ];

  const institutional: [string, string][] = [
    ["Segurança", "/seguranca"],
    ["Termos", "/termos"],
    ["Privacidade", "/privacidade"],
  ];

  return (
    <footer className="w-full bg-neutral-950 py-12 px-4 text-sm text-neutral-400 font-geist-mono">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        {/* Brand / Contact */}
        <div className="flex flex-col space-y-3">
          <Link
            href="mailto:support@geniedreams.ai"
            className="inline-flex items-center gap-1 transition hover:text-white"
          >
            support@geniedreams.ai <span>↗</span>
          </Link>

          <span className="inline-flex w-max items-center rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-white hover:bg-white/20">
            NicaLabs Verified
          </span>

          <p className="text-xs text-neutral-500">
            Feito pela <span className="font-bold">NicaLabs</span>
          </p>
        </div>

        {/* Navegação primária */}
        <div className="flex flex-col space-y-2">
          {primaryNav.map(([label, href]) => (
            <Link key={label} href={href} className="transition hover:text-white">
              {label}
            </Link>
          ))}
        </div>

        {/* Links institucionais */}
        <div className="flex flex-col space-y-2">
          {institutional.map(([label, href]) => (
            <Link key={label} href={href} className="transition hover:text-white">
              {label}
            </Link>
          ))}
        </div>

        {/* CTA WhatsApp  */}
        <div className="flex md:justify-end">
  <motion.a
    whileTap={{ scale: 0.95 }}
    href="https://chat.whatsapp.com/B67TOgZXQTOETP9XGmvO4D"           /* TODO: adicionar número */
    className="
      hero-outline-button           /* vidro + borda neon padrão */
      rounded-md
      bg-white/10
      px-4 py-3                     /* ⬅️ mesmo padding do botão CTA */
      font-geist-mono text-sm text-white
      backdrop-blur-md
      transition duration-300
      hover:bg-white/15
    "
  >
    Clique aqui AGORA 👆<br />
    e garanta um desconto<br />
    especial no seu primeiro vídeo!🤝
  </motion.a>
</div>
      </div>
    </footer>
  );
}
