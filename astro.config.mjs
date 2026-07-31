import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Sostituisci "tuo-username" con il nickname che sceglierai su GitHub
  site: 'https://Momentini.github.io',
  base: '/cybershield-edge',
  integrations: [tailwind()],
});


