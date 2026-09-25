import type { LandingCopy } from './types';

/**
 * Bloques compartidos por las landings de estados de México que se agregaron
 * en tanda. Todo lo que es compromiso comercial (forma de pago, ajustes,
 * mantenimiento, idiomas, trabajo a distancia) vive aquí para que cambie en un
 * solo lugar. Lo que distingue a cada estado (hero, servicios, dos pasos del
 * proceso y sus propias preguntas) va en su archivo.
 *
 * Reglas del copy (acordadas con el cliente): sin precios, tiempos de entrega
 * ni moneda; sin clientes o desarrollos que no existen; ajustes y alcance
 * remiten a la cotización; el sitio bilingüe es el mismo sitio en dos idiomas.
 */

type Step = LandingCopy['process']['steps'][number];
type Faq = LandingCopy['faq']['items'][number];

const es = {
  stats: [
    { value: '+20', label: 'años diseñando marcas y productos digitales' },
    { value: 'ES/EN', label: 'sitios en uno o en los dos idiomas' },
    { value: 'Web + Marca', label: 'diseño, desarrollo y branding en un mismo equipo' },
  ],
  processHeading: 'Cómo trabajamos tu proyecto',
  processDescription:
    'Así trabajamos un proyecto a distancia. Los detalles de cada etapa se definen en la cotización.',
  stepDesign: {
    name: 'Diseño',
    text: 'Te presentamos el diseño y lo ajustamos contigo según lo acordado en la cotización.',
  } satisfies Step,
  stepLaunch: {
    name: 'Lanzamiento',
    text: 'Construimos el sitio y lo conectamos a tu dominio. Después, los cambios los puedes hacer tú: en una sesión te explicamos cómo. O, si prefieres no ocuparte, nos encargamos nosotros con un plan mensual de mantenimiento.',
  } satisfies Step,
  faqCost: (place: string): Faq => ({
    question: `¿Cuánto cuesta una página web en ${place}?`,
    answer:
      'Depende del alcance: cuántas páginas, si va en uno o en los dos idiomas, si hay tienda en línea, reservas u otras integraciones y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
  }),
  faqPayment: {
    question: '¿Cómo se paga?',
    answer:
      'Te cotizamos según tu proyecto. La forma de pago se acuerda en la cotización, antes de arrancar.',
  } satisfies Faq,
  faqRemote: {
    question: 'Están en Morelos, ¿pueden trabajar con mi empresa?',
    answer:
      'Sí. Nuestra oficina está en Cuernavaca y trabajamos a distancia con clientes en México, Estados Unidos, Canadá, España, República Dominicana y muchos países más.',
  } satisfies Faq,
  faqLanguages: {
    question: '¿Pueden hacer el sitio en inglés y en español?',
    answer:
      'Sí. El sitio puede quedar disponible en los dos idiomas con la misma información, y cada visitante elige en cuál leerlo.',
  } satisfies Faq,
  proofHeading: 'Trabajo que respalda la propuesta',
  nearby: {
    heading: '¿Tu empresa está en otro estado?',
    description: 'Diseñamos sitios web para empresas en estas plazas del país.',
  },
};

const en: typeof es = {
  stats: [
    { value: '+20', label: 'years designing brands and digital products' },
    { value: 'ES/EN', label: 'sites in one language or both' },
    { value: 'Web + Brand', label: 'design, development, and branding from one team' },
  ],
  processHeading: 'How we run your project',
  processDescription:
    'How we run a project remotely. The details of each stage are set in the quote.',
  stepDesign: {
    name: 'Design',
    text: 'We present the design to you and refine it with you as agreed in the quote.',
  },
  stepLaunch: {
    name: 'Launch',
    text: 'We build the site and connect it to your domain. After that, you can make changes yourself: we walk you through it in one session. Or, if you would rather not deal with it, we handle it with a monthly maintenance plan.',
  },
  faqCost: (place: string): Faq => ({
    question: `How much does a website cost in ${place}?`,
    answer:
      'It depends on scope: how many pages, whether it runs in one language or both, whether there is an online store, reservations, or other integrations, and whether you also need a brand. After a call we send an itemized quote.',
  }),
  faqPayment: {
    question: 'How does payment work?',
    answer:
      'We quote based on your project. Payment terms are agreed in the quote, before work starts.',
  },
  faqRemote: {
    question: 'You are based in Morelos. Can you work with my company?',
    answer:
      'Yes. Our office is in Cuernavaca and we work remotely with clients in Mexico, the United States, Canada, Spain, the Dominican Republic, and many more countries.',
  },
  faqLanguages: {
    question: 'Can you build the site in English and Spanish?',
    answer:
      'Yes. The site can be available in both languages with the same information, and each visitor chooses which one to read.',
  },
  proofHeading: 'Work that backs the proposal',
  nearby: {
    heading: 'Is your company in another state?',
    description: 'We design websites for businesses in these Mexican markets too.',
  },
};

export const COMMON = { es, en };
