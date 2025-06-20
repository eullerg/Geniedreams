/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",       // páginas e layouts
    "./src/components/**/*.{ts,tsx}" // todos os componentes
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      /* ---------- Paleta GenieDreams ---------- */
      colors: {
        turquoise  : "#17E6E4",
        neonPurple : "#C700FF",
      },

      /* ---------- Fontes ---------- */
      fontFamily: {
        geist      : ["var(--font-geist)", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "monospace"],
      },

      /* ---------- Keyframes & animações ---------- */
      keyframes: {
        mesh: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%"    : { transform: "translate(80px,-60px) scale(1.25)" },
        },
      },
      animation: {
        /* uso: className=\"animate-mesh\"           */
        mesh        : "mesh 30s ease-in-out infinite",
        /* uso: className=\"animate-meshReverse\"    */
        meshReverse : "mesh 35s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};
