import { defineConfig } from 'astro/config';

export default defineConfig({
  // ⚠️ SOLO el dominio base, SIN la subruta
  site: 'https://mazmorrdev.github.io',
  
  // ⚠️ SOLO la subruta, sin el dominio
  base: '/portfolio.github.io/',
  
  integrations: []
});