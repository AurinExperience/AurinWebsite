import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://aurin.mx',
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
  // Precompila la página al pasar el mouse sobre el link: el click ya la encuentra lista.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: {
    /*
     * El CSS de una página salía en 4 archivos separados (tokens, Header+Footer,
     * MegaMenu, bloques de la página) y los cuatro bloquean el render: en móvil
     * eran ~1500 ms de round trips antes del primer pintado, con FCP = LCP = 2.9 s.
     * Inline los mete en el HTML, así que el render arranca con el primer byte.
     * Son ~13 KB gzip por página — dentro del presupuesto clásico de la primera
     * ventana de congestión, y estas landings viven de tráfico de anuncios (casi
     * todo primera visita), donde cachear el CSS aparte no compensa.
     */
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      assetsInlineLimit: 4096,
    },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
