import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      colors: {
        brand: {
          bg: "var(--brand-bg)",
          surface: "var(--brand-surface)",
          text: "var(--brand-text)",
          muted: "var(--brand-muted)",
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
          soft: "var(--brand-soft)"
        }
      }
    }
  },
  plugins: []
};

export default config;
