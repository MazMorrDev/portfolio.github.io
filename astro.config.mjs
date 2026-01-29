import { defineConfig } from 'astro/config';

export default defineConfig({
  // ⚠️ SOLO el dominio base, SIN la subruta
  site: 'https://mazmorrdev.is-a.dev',
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
  integrations: []
});