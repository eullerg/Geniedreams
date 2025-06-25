"use client";

import Image from "next/image";

export default function PoweredBy() {
  return (
    <section className="w-full bg-[#0A0A0A] py-20">
      <div className="mx-auto flex flex-col items-center gap-8">
        {/* Heading */}
        <span className="font-geist-mono text-xs uppercase tracking-wide text-white/60">
        Construída com tecnologia de ponta, simplificada para você
        </span>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10">
          <Image
            src="/VEO3-Logo.png"
            alt="VEO3 logo"
            width={160}
            height={50}
            className="object-contain opacity-90"
            priority
          />

          <Image
            src="/OpenAI_Logo (1).png"
            alt="OpenAI logo"
            width={140}
            height={40}
            className="object-contain opacity-80"
          />

          <Image
            src="/KlingAI-logo.png"
            alt="Kling AI logo"
            width={140}
            height={40}
            className="object-contain opacity-80"
          />

          <Image
            src="/WhatsApp-logo (3).png"
            alt="WhatsApp logo"
            width={140}
            height={40}
            className="object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
