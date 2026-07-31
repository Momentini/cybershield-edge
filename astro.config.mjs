import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Sostituisci "tuo-username" con il tuo nickname GitHub reale
  site: 'https://Momentini.github.io',
  base: '/cybershield-edge',
  vite: {
    plugins: [tailwindcss()],
  },
});
