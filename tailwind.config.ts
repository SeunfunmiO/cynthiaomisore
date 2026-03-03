import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#d4a843",
          light: "#f0c865",
          dim: "#9a7a2e",
        },
        bg: {
          DEFAULT: "#0a0a0a",
          2: "#111111",
          3: "#181818",
        },
        cream: "#f5f0e8",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        ui: ["var(--font-syne)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        bounce2: "bounce2 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        bounce2: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
