"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  const handleWhatsapp = () => {
    window.location.href = "https://chat.whatsapp.com/B67TOgZXQTOETP9XGmvO4D"; // TODO: add number
  };

  return (
    <section className="w-full bg-neutral-950 py-20 px-4 font-geist text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">
        {/* Texto + Botão */}
        <div className="flex-1 text-center md:text-left">
          <h2
            className="mb-8 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
            style={{ backgroundImage: "linear-gradient(90deg,#17E6E4,#C700FF)" }}
          >
            Pronto para vídeos mágicos?
          </h2>

          {/* Glassmorphism button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsapp}
            className="hero-outline-button rounded-md bg-white/10 px-6 py-3 font-geist-mono text-sm text-white backdrop-blur-md transition duration-300 hover:bg-white/15 md:text-base"
          >
            Entre em Contato
          </motion.button>
        </div>

        {/* Ilustração / Logo */}
        <div className="flex flex-1 items-center justify-center md:justify-end">
          <Image
            src="/geniedreams-logo.png"
            alt="Logo GenieDreams"
            width={280}
            height={280}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
