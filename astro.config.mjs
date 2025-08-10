// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jadep1103.github.io",  // ajoute ton URL GitHub Pages ici
  vite: {
    plugins: [tailwindcss()],
  },
});
