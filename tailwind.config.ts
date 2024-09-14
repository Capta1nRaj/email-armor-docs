import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  presets: [createPreset()],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
    './content/**/*.mdx',
    './source.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;