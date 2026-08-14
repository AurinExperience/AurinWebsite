export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'es';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    return key;
  }
}

export function getLocalizedUrl(url: string, lang: string): string {
  // Remove leading slash and split path
  const cleanUrl = url.replace(/^\//, '');
  const segments = cleanUrl.split('/');
  
  // If it's the default language (Spanish), return root path
  if (lang === defaultLang) {
    // Remove language prefix if it exists
    if (segments[0] === 'en') {
      segments.shift();
    }
    return '/' + segments.join('/');
  }
  
  // For English, add /en prefix
  if (lang === 'en') {
    // Remove existing language prefix if any
    if (segments[0] === 'en') {
      segments.shift();
    }
    return '/en/' + segments.join('/');
  }
  
  return url;
}

export function getAlternateLanguage(currentLang: string): string {
  return currentLang === 'es' ? 'en' : 'es';
}

/**
 * Páginas cuyo slug NO es el mismo en los dos idiomas. `getLocalizedUrl` solo
 * agrega o quita el prefijo `/en`, así que para estas rutas hay que mapear a
 * mano o se generan URLs que no existen.
 */
const slugExceptions: Record<string, { es: string; en: string }> = {
  '/appointment-confirmed': { es: '/appointment-confirmed', en: '/en/appointment-confirmation' },
  '/en/appointment-confirmation': { es: '/appointment-confirmed', en: '/en/appointment-confirmation' },
  '/diseno-web-monterrey': { es: '/diseno-web-monterrey', en: '/en/web-design-monterrey' },
  '/en/web-design-monterrey': { es: '/diseno-web-monterrey', en: '/en/web-design-monterrey' },
};

/**
 * La misma ruta en el otro idioma. Única fuente de verdad para el botón de
 * idioma del Header y para los hreflang de AdvancedSEO: antes cada uno tenía su
 * propia lista, y la del Header no incluía la landing de Monterrey, así que el
 * botón mandaba a /en/diseno-web-monterrey (404).
 */
export function getLocalizedPath(pathname: string, lang: 'es' | 'en'): string {
  const path = pathname.replace(/\/$/, '') || '/';
  const exception = slugExceptions[path];
  const target = exception ? exception[lang] : getLocalizedUrl(path, lang);
  // Sin barra final ("/en", no "/en/"), para que el enlace coincida con el
  // canonical y con el sitemap en lugar de apuntar a una variante de la URL.
  return target.replace(/(.)\/$/, '$1');
}

/**
 * Builds a canonical URL for the given page path and language.
 * For the default locale (es), no prefix is added.
 * For other locales, the language code is prepended.
 * @param siteUrl - The base site URL (e.g. "https://aurin.mx")
 * @param pagePath - The page path without language prefix (e.g. "/about", "/" for home)
 * @param lang - The current language code
 */
export function getCanonicalUrl(siteUrl: string, pagePath: string, lang: string): string {
  const cleanPath = pagePath === '/' ? '' : pagePath;
  if (lang === defaultLang) {
    return `${siteUrl}${cleanPath || '/'}`;
  }
  // No trailing slash on the locale root (/en, not /en/) so it matches the
  // sitemap and the no-trailing-slash convention used by every other URL.
  return `${siteUrl}/${lang}${cleanPath}`;
}
