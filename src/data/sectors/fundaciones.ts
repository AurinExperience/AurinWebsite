import { defineSector } from './build';

/**
 * Fundaciones y asociaciones civiles — "página web para fundación".
 * Ángulo: financiadas por empresas y donantes que exigen transparencia; el
 * sitio rinde cuentas (impacto, informes, donataria autorizada), facilita
 * donar y atrae patrocinios corporativos.
 */
export const fundaciones = defineSector({
  id: 'fundaciones',
  publishAt: '2026-11-02T00:00:00-06:00',
  slug: { es: 'para-fundaciones', en: 'for-foundations-and-nonprofits' },
  name: { es: 'Fundaciones y asociaciones civiles', en: 'Foundations and nonprofits' },
  proof: ['ceiich', 'sinfonica', 'inglesIndividual'],
  es: {
    seoTitle: 'Diseño Web para Fundaciones y Asociaciones Civiles',
    seoDescription:
      'Sitios para fundaciones y asociaciones civiles: causa e impacto con claridad, donativos en línea, transparencia y una sección para patrocinadores.',
    keywords:
      'diseño web para fundaciones, página web asociación civil, sitio web ONG, donativos en línea fundación, página web donataria autorizada',
    subtitle: 'Diseño web para fundaciones y asociaciones civiles',
    accent: 'Fundaciones',
    target: 'fundaciones y asociaciones civiles',
    hero: 'Un donante o una empresa que evalúa patrocinarte quiere ver tres cosas: qué causa atiendes, qué has logrado y cómo usas el dinero. Si tu sitio no lo muestra con claridad, el donativo se va a otra organización, aunque tu trabajo sea mejor. Diseñamos sitios que cuentan tu causa con emoción y la respaldan con datos y transparencia.',
    intro:
      'Diseñamos páginas web para fundaciones empresariales y familiares, asociaciones civiles, instituciones de asistencia privada y organizaciones culturales y educativas.',
    items: [
      {
        title: 'Causa e historias',
        description:
          'Tu misión, tus programas y las historias de las personas que atiendes, contadas con respeto y con fotografía real.',
        bullets: ['Programas', 'Historias de impacto', 'Testimonios'],
      },
      {
        title: 'Impacto con datos',
        description:
          'Cifras de impacto, informes anuales y estados financieros presentados de forma clara, que es lo que pide un patrocinador.',
        bullets: ['Cifras de impacto', 'Informes anuales', 'Transparencia y donataria autorizada'],
      },
      {
        title: 'Donar en minutos',
        description:
          'Desarrollamos a la medida el donativo en línea, único o recurrente, con solicitud de recibo deducible si estás autorizada, desde cualquier dispositivo.',
        bullets: ['Campañas especiales'],
        custom: ['Donativos únicos y recurrentes', 'Recibos deducibles'],
      },
      {
        title: 'Empresas y voluntarios',
        description:
          'Una sección para empresas patrocinadoras, alianzas y voluntariado corporativo, con formulario que llega a tu equipo.',
        bullets: ['Patrocinios corporativos', 'Voluntariado', 'Alianzas'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu causa, tus programas y cómo recaudas hoy.',
    pages: 'la causa, programas, impacto, transparencia, donar, empresas, voluntariado y contacto',
    costQuestion: '¿Cuánto cuesta la página web de una fundación?',
    costScope:
      'cuántos programas, si incluye donativos en línea y recibos y si también necesitas marca',
    faqs: [
      {
        question: '¿Se pueden recibir donativos en línea con recibo deducible?',
        answer:
          'Sí, si tu organización es donataria autorizada, como desarrollo a la medida. Conectamos una plataforma de pagos y el flujo para que el donante pida su recibo; la emisión fiscal sigue a cargo de tu administración.',
      },
      {
        question: '¿Cómo atraemos a empresas patrocinadoras?',
        answer:
          'Con una sección para ellas: impacto medible, cómo se usan los fondos, formas de participar y reconocimiento a patrocinadores. Es lo que un comité de responsabilidad social revisa.',
      },
      {
        question: '¿Pueden recibir donativos del extranjero?',
        answer:
          'Podemos desarrollar pagos internacionales a la medida, y la versión en inglés ya viene incluida. La parte fiscal en otros países depende de tu estructura, así que la revisamos con tu equipo.',
      },
    ],
    aiSubject: 'mi fundación',
    remoteWho: 'fundaciones',
    proofText:
      'Proyectos reales de sitios web e identidad en educación, investigación y cultura. Es el estándar con el que trabajaríamos tu fundación.',
    howTo: 'el sitio web de una fundación',
    lead: {
      heading: 'Hablemos de tu causa',
      description:
        'Cuéntanos qué causa atiendes y cómo recaudas hoy. Te contactaremos para conocer tu organización y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una fundación educativa y queremos recibir donativos recurrentes y patrocinios.',
    },
  },
  en: {
    seoTitle: 'Web Design for Foundations and Nonprofits',
    seoDescription:
      'Websites for foundations and nonprofits: cause and impact told clearly, online donations, transparency reports, and a section for corporate sponsors.',
    keywords:
      'foundation website design, nonprofit website design, NGO website, online donations website, charity web design',
    subtitle: 'Web design for foundations and nonprofits',
    accent: 'Foundations & Nonprofits',
    target: 'foundations and nonprofits',
    hero: 'A donor or a company considering sponsorship wants to see three things: what cause you serve, what you have achieved, and how you use the money. If your site does not show that clearly, the donation goes elsewhere, even if your work is better. We design websites that tell your cause with emotion and back it with data and transparency.',
    intro:
      'We design websites for corporate and family foundations, nonprofits, private charitable institutions, and cultural and educational organizations.',
    items: [
      {
        title: 'Cause and stories',
        description:
          'Your mission, programs, and the stories of the people you serve, told with respect and real photography.',
        bullets: ['Programs', 'Impact stories', 'Testimonials'],
      },
      {
        title: 'Impact with data',
        description:
          'Impact figures, annual reports, and financial statements presented clearly, which is what sponsors ask for.',
        bullets: ['Impact figures', 'Annual reports', 'Transparency'],
      },
      {
        title: 'Give in minutes',
        description:
          'We build custom online giving, one-time or recurring, with tax receipt requests where applicable, from any device.',
        bullets: ['Special campaigns'],
        custom: ['One-time and recurring gifts', 'Tax receipts'],
      },
      {
        title: 'Companies and volunteers',
        description:
          'A section for corporate sponsors, partnerships, and corporate volunteering, with a form that reaches your team.',
        bullets: ['Corporate sponsorship', 'Volunteering', 'Partnerships'],
      },
    ],
    diagnosis: 'A call to learn about your cause, your programs, and how you fundraise today.',
    pages: 'the cause, programs, impact, transparency, donate, companies, volunteering, and contact',
    costQuestion: 'How much does a foundation website cost?',
    costScope:
      'how many programs, whether it includes online donations and receipts, and whether you also need a brand',
    faqs: [
      {
        question: 'Can we accept online donations with tax receipts?',
        answer:
          'Yes, if your organization is authorized to issue them, as custom development. We connect a payment platform and the flow for donors to request receipts; issuing them stays with your administration.',
      },
      {
        question: 'How do we attract corporate sponsors?',
        answer:
          'With a section for them: measurable impact, how funds are used, ways to participate, and sponsor recognition. It is what a corporate giving committee reviews.',
      },
      {
        question: 'Can we receive donations from abroad?',
        answer:
          'We can build international payments as custom development, and the English version is already included. Tax treatment in other countries depends on your structure, so we review it with your team.',
      },
    ],
    aiSubject: 'my foundation',
    remoteWho: 'foundations',
    proofText:
      'Real website and identity work in education, research, and culture. It is the standard we would bring to your foundation.',
    howTo: 'a foundation website',
    lead: {
      heading: 'Let’s talk about your cause',
      description:
        'Tell us what cause you serve and how you fundraise today. We will reach out to learn about your organization and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are an education foundation and want recurring donations and corporate sponsors.',
    },
  },
});
