"use client";

import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + Nome */}
        <Link href="https://chat.whatsapp.com/B67TOgZXQTOETP9XGmvO4D" className="flex items-center gap-2 font-geist-mono text-lg text-white font-semibold">
          <Image
            src="/geniedreams-logo.png"        
            alt="Geniedreams logo"
            width={28}                         /* altura logo */
            height={28}
            className="object-contain"
            priority
          />
          Geniedreams
        </Link>

        {/* Links desktop */}
        <nav className="hidden gap-8 md:flex">
          {[
            ["Como Funciona", "#como-funciona"],
            ["Benefícios", "#beneficios"],
            ["Preços", "#precos"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-geist-mono transition text-white hover:text-neonPurple"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA padronizado */}
        <Link
          href="http://wa.me/558331428770" /* TODO: número */
          className="
            hero-outline-button
            flex items-center gap-2
            rounded-md
            bg-white/10
            px-5 py-2
            text-sm
            font-geist-mono
            text-white
            backdrop-blur-md
            transition
            hover:bg-white/15
          "
        >
          
          Criar Vídeo 🧞
        </Link>
      </div>
    </header>
  );
}
