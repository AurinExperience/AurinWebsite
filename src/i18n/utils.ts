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
  return `${siteUrl}/${lang}${cleanPath || '/'}`;
}
