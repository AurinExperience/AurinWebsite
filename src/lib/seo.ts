import type { FAQPageStructuredData } from '@/types/seo';

/** FAQPage schema from the same items the FaqSection block renders, so markup and JSON-LD never drift. */
export const faqSchema = (
  items: readonly { question: string; answer: string }[],
): FAQPageStructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

/**
 * Meta description a partir de texto o HTML de un CMS: quita etiquetas y
 * recorta a ~155 caracteres (lo que Google muestra), de preferencia al final
 * de una frase y si no en la última palabra completa.
 */
export const metaDescription = (html: string, max = 155): string => {
  const text = html
    // Fin de bloque (título, párrafo) = fin de frase, para no pegar "Título Párrafo"
    .replace(/<\/(h[1-6]|p|li)>|<br\s*\/?>/gi, '. ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/([.!?:;,])\s*\.(\s|$)/g, '$1$2') // "¿…?." o ".." → un solo signo
    .replace(/\s+\./g, '.')
    .trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const sentenceEnd = cut.lastIndexOf('. ');
  if (sentenceEnd > max / 2) return cut.slice(0, sentenceEnd + 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};
