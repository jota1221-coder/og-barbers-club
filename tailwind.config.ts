import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  "#FAFAFA",
          100: "#EDEDED",
          200: "#D4D4D4",
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#2A2A2A",
          800: "#1A1A1A",
          900: "#0F0F0F",
          950: "#080808"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        logo: ["var(--font-logo)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards"
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
