import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://aurin.mx',
  output: 'server',
  /*
   * ISR: una sola copia global de cada página. El caché del CDN (s-maxage del
   * middleware) es por región y con tantas landings de poco tráfico acertaba ~6%:
   * casi cada visita o bot pagaba el SSR. Con ISR la página se genera una vez y
   * todas las regiones la leen de ahí. Expira igual que antes (1 día) y la etiqueta
   * CMS_CACHE_TAG del middleware la borra al guardar en Payload.
   * Fuera: endpoints (/api, POST, formularios) y el preview del admin (borradores, no-store).
   */
  adapter: vercel({
    isr: {
      expiration: 86400,
      exclude: [/^\/(en\/)?(api|preview)(\/|$)/],
    },
  }),
  integrations: [react()],
  // Precompila la página al pasar el mouse sobre el link: el click ya la encuentra lista.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // /about/ y /about respondían 200 los dos: URLs duplicadas para Google. Con
  // 'never' la variante con barra redirige con 301 a la del canonical y el sitemap.
  trailingSlash: 'never',
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
  /*
   * La landing de Monterrey vivió meses en /diseno-web-nuevo-leon. Sin este 301
   * esa URL cae en la ruta [ciudad], no encuentra la ciudad y termina en el home:
   * se pierde el historial de la URL vieja y Google lee el redirect masivo al
   * home como soft 404.
   */
  redirects: {
    '/diseno-web-nuevo-leon': { status: 301, destination: '/diseno-web-monterrey' },
    '/en/web-design-nuevo-leon': { status: 301, destination: '/en/web-design-monterrey' },
    // Rutas en español de la versión anterior del sitio: Search Console las sigue
    // rastreando como 404.
    '/servicios': { status: 301, destination: '/services' },
    '/contacto': { status: 301, destination: '/contact' },
    '/privacidad': { status: 301, destination: '/privacy' },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
