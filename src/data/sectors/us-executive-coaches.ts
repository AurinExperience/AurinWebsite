import { defineSector } from './build';

/**
 * Coaches ejecutivos y consultores de liderazgo (EE. UU.) — "executive coach
 * website design". Ángulo: el producto es la persona; clientes corporativos
 * (RR. HH., CEOs) contratan por credenciales, metodología y referencias, y el
 * sitio debe sostener honorarios altos. Distinto de `consultoras` (México).
 */
export const usExecutiveCoaches = defineSector({
  id: 'us-executive-coaches',
  country: 'US',
  publishAt: '2026-11-03T00:00:00-06:00',
  slug: { es: 'para-coaches-ejecutivos', en: 'for-executive-coaches' },
  name: { es: 'Coaches ejecutivos', en: 'Executive coaches' },
  proof: ['inglesIndividual', 'ceiich', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Coaches Ejecutivos en EE. UU.',
    seoDescription:
      'Sitios para coaches ejecutivos en Estados Unidos: metodología, credenciales, programas para empresas, conferencias y una marca personal sólida.',
    keywords:
      'diseño web coach ejecutivo, sitio web consultor de liderazgo, página web marca personal coach, sitio web conferencista, diseño web coaching corporativo',
    subtitle: 'Diseño web para coaches ejecutivos',
    accent: 'Coaches Ejecutivos',
    target: 'coaches ejecutivos y consultores de liderazgo',
    hero: 'Un CEO o una directora de talento no contrata a un coach por un sitio bonito, pero sí lo descarta por uno que no está a la altura. Revisa tu trayectoria, tu metodología, con qué tipo de líderes trabajas y si tu marca se ve tan seria como tus honorarios. Diseñamos sitios de marca personal que sostienen tu posicionamiento y abren conversaciones con empresas.',
    intro:
      'Diseñamos páginas web para coaches ejecutivos, consultores de liderazgo, facilitadores de equipos directivos y conferencistas en Estados Unidos.',
    items: [
      {
        title: 'Marca personal',
        description:
          'Tu historia, tu enfoque y tu voz presentados con fotografía profesional y un diseño que se siente premium y cercano a la vez.',
        bullets: ['Historia y enfoque', 'Fotografía y retrato', 'Identidad personal'],
      },
      {
        title: 'Metodología y programas',
        description:
          'Coaching uno a uno, programas para equipos directivos y talleres, explicados con el proceso y lo que el cliente se lleva.',
        bullets: ['Coaching individual', 'Programas para equipos', 'Talleres y retiros'],
      },
      {
        title: 'Credenciales y prueba',
        description:
          'Certificaciones, trayectoria, testimonios de líderes y casos sin datos confidenciales, que justifican tus honorarios.',
        bullets: ['Certificaciones y trayectoria', 'Testimonios', 'Casos anónimos'],
      },
      {
        title: 'Conferencias y contenido',
        description:
          'Página de conferencista con temas, video y kit de prensa, más artículos, podcast o libro si los tienes.',
        bullets: ['Página de conferencista', 'Kit de prensa', 'Artículos, podcast o libro'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu enfoque, tus clientes y cómo te contratan hoy.',
    pages: 'sobre ti, enfoque, coaching, programas para empresas, conferencias, testimonios y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un coach ejecutivo?',
    costScope:
      'cuántos programas, si incluye página de conferencista y contenido, si necesitas sesión de fotos y si también necesitas identidad personal',
    faqs: [
      {
        question: '¿Cómo muestro resultados si mis clientes son confidenciales?',
        answer:
          'Con casos anónimos por industria y nivel del líder, testimonios autorizados y el tipo de retos en los que trabajas. La confidencialidad bien comunicada también es una señal de nivel.',
      },
      {
        question: '¿Conviene publicar precios?',
        answer:
          'En coaching ejecutivo casi nunca. Es mejor explicar tu proceso y llevar a una conversación inicial; lo definimos contigo según cómo vendes.',
      },
      {
        question: '¿Pueden ayudarme con mi identidad visual?',
        answer:
          'Sí. Diseñamos una identidad personal con logotipo o firma, colores y tipografía que puedes usar en presentaciones, propuestas y redes.',
      },
    ],
    aiSubject: 'mi práctica de coaching',
    remoteWho: 'coaches ejecutivos',
    proofText:
      'Proyectos reales de sitios web e identidad en educación, investigación y diseño de marca. Es el estándar con el que trabajaríamos tu marca personal.',
    howTo: 'el sitio web de un coach ejecutivo',
    lead: {
      heading: 'Hablemos de tu práctica',
      description:
        'Cuéntanos con qué líderes trabajas y cómo te contratan hoy. Te contactaremos para conocerte y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Soy coach de CEOs en empresas de tecnología y quiero renovar mi marca y mi sitio.',
    },
  },
  en: {
    seoTitle: 'Executive Coach Website Design',
    seoDescription:
      'Websites for executive coaches and leadership consultants in the US: methodology, credentials, corporate programs, speaking, and a personal brand.',
    keywords:
      'executive coach website design, leadership coach website, coaching website design agency, keynote speaker website, personal brand website for coaches',
    subtitle: 'Web design for executive coaches',
    accent: 'Executive Coaches',
    target: 'executive coaches and leadership consultants',
    hero: 'A CEO or head of talent will not hire a coach because of a beautiful website, but they will rule one out over a site that is not at their level. They review your background, your methodology, the leaders you work with, and whether your brand looks as serious as your fees. We design personal brand websites that support your positioning and open conversations with companies.',
    intro:
      'We design websites for executive coaches, leadership consultants, executive team facilitators, and keynote speakers across the US.',
    items: [
      {
        title: 'Personal brand',
        description:
          'Your story, approach, and voice presented with professional photography and a design that feels premium and approachable.',
        bullets: ['Story and approach', 'Portrait photography', 'Personal identity'],
      },
      {
        title: 'Methodology and programs',
        description:
          'One-on-one coaching, executive team programs, and workshops explained through the process and what clients gain.',
        bullets: ['Individual coaching', 'Team programs', 'Workshops and retreats'],
      },
      {
        title: 'Credentials and proof',
        description:
          'Certifications, track record, leader testimonials, and anonymized cases that justify your fees.',
        bullets: ['Certifications and background', 'Testimonials', 'Anonymized cases'],
      },
      {
        title: 'Speaking and content',
        description:
          'A speaker page with topics, video, and press kit, plus articles, podcast, or book if you have them.',
        bullets: ['Speaker page', 'Press kit', 'Articles, podcast, or book'],
      },
    ],
    diagnosis: 'A video call to learn about your approach, your clients, and how you are hired today.',
    pages: 'about, approach, coaching, corporate programs, speaking, testimonials, and contact',
    costQuestion: 'How much does an executive coach website cost?',
    costScope:
      'how many programs, whether it includes a speaker page and content, whether you need a photo shoot, and whether you also need a personal identity',
    faqs: [
      {
        question: 'How do I show results when my clients are confidential?',
        answer:
          'Through anonymized cases by industry and leader level, approved testimonials, and the kinds of challenges you work on. Well-communicated confidentiality is also a signal of level.',
      },
      {
        question: 'Should I publish prices?',
        answer:
          'In executive coaching, rarely. It is better to explain your process and lead to an initial conversation; we decide it with you based on how you sell.',
      },
      {
        question: 'Can you help with my visual identity?',
        answer:
          'Yes. We design a personal identity with a logo or signature, colors, and typography you can use in presentations, proposals, and social media.',
      },
    ],
    aiSubject: 'my coaching practice',
    remoteWho: 'executive coaches',
    proofText:
      'Real website and identity work in education, research, and brand design. It is the standard we would bring to your personal brand.',
    howTo: 'an executive coach website',
    lead: {
      heading: 'Let’s talk about your practice',
      description:
        'Tell us which leaders you work with and how you are hired today. We will reach out to get to know you and send you an itemized proposal.',
      messagePlaceholder: 'E.g. I coach CEOs at tech companies and want to refresh my brand and website.',
    },
  },
});
