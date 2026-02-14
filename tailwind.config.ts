import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pulp-orange": "#FF6B2B",
        "pulp-green": "#2D5016",
        "pulp-cream": "#FFF8F0",
        "pulp-gold": "#D4A017",
      },
    },
  },
  plugins: [],
} satisfies Config;
