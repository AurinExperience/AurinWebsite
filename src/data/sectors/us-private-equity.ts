import { defineSector } from './build';

/**
 * Private equity y venture capital (EE. UU.) — "private equity website
 * design" / "venture capital website design". Ángulo: el sitio lo revisan
 * fundadores, LPs y empresas objetivo; tiene que transmitir tesis, portafolio y
 * equipo con sobriedad. Sin prometer rendimientos.
 */
export const usPrivateEquity = defineSector({
  id: 'us-private-equity',
  country: 'US',
  publishAt: '2026-10-24T00:00:00-06:00',
  slug: { es: 'para-private-equity-y-venture-capital', en: 'for-private-equity-and-vc-firms' },
  name: { es: 'Private equity y venture capital', en: 'Private equity and VC firms' },
  proof: ['fortrade', 'bonanza', 'ancient'],
  es: {
    seoTitle: 'Diseño Web para Firmas de Private Equity y Venture Capital',
    seoDescription:
      'Sitios web para firmas de private equity, venture capital y family offices: tesis de inversión clara, portafolio y equipo presentados con la sobriedad que esperan fundadores y LPs.',
    keywords:
      'diseño web private equity, sitio web venture capital, página web fondo de inversión, diseño web family office, sitio web firma de inversión',
    subtitle: 'Diseño web para private equity y venture capital',
    accent: 'Private Equity y VC',
    target: 'firmas de private equity y venture capital',
    hero: 'Antes de tomar tu llamada, un fundador, un LP o el dueño de una empresa revisa tu sitio para entender quién eres y qué haces. Si se ve genérico, tu firma se confunde con cientos más. Diseñamos sitios sobrios y precisos que comunican tu tesis, tu portafolio y a tu equipo con la claridad que tu reputación merece.',
    intro:
      'Trabajamos con firmas de private equity, fondos de venture capital, family offices y firmas de inversión en mercados como Nueva York, San Francisco, Boston, Greenwich y Austin.',
    items: [
      {
        title: 'Tesis de inversión clara',
        description:
          'Qué buscas, en qué etapa y en qué sectores, explicado para que el fundador o la empresa correcta se identifique al instante.',
        bullets: ['Tesis y criterios de inversión', 'Sectores y etapas', 'Cómo trabajas con el portafolio'],
      },
      {
        title: 'Portafolio que respalda',
        description:
          'Empresas del portafolio con filtros, logos y casos, fácil de actualizar cuando cierras una inversión nueva.',
        bullets: ['Portafolio con filtros', 'Casos de empresas', 'Actualización sencilla'],
      },
      {
        title: 'Equipo y criterio',
        description:
          'Perfiles del equipo que transmiten experiencia y forma de pensar, más allá de un cargo y una foto.',
        bullets: ['Perfiles del equipo', 'Perspectivas y publicaciones', 'Prensa'],
      },
      {
        title: 'Acceso para inversionistas',
        description:
          'Diseñamos la experiencia del acceso de LPs y de los reportes para que se vea tan cuidada como el sitio.',
        bullets: ['Acceso de LPs', 'Diseño de reportes', 'Discreción por diseño'],
      },
    ],
    diagnosis: 'Una videollamada para entender tu tesis, tu portafolio y a quién tiene que convencer el sitio.',
    pages: 'tesis, portafolio, equipo, perspectivas, acceso de inversionistas y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una firma de inversión?',
    costScope:
      'cuántas empresas en el portafolio y perfiles de equipo, si incluye el diseño del acceso de inversionistas, si lleva publicaciones y si también necesitas marca',
    faqs: [
      {
        question: '¿Pueden hacer un sitio discreto para un family office?',
        answer:
          'Sí. Muchos family offices quieren solo lo indispensable: quiénes son, cómo contactarlos y nada más. Lo diseñamos con la misma calidad y la menor exposición posible.',
      },
      {
        question: '¿Podemos actualizar el portafolio nosotros?',
        answer:
          'Sí. Dejamos el sitio listo para que tu equipo agregue empresas y noticias sin depender de nosotros.',
      },
    ],
    aiSubject: 'mi firma',
    remoteWho: 'firmas de inversión',
    proofText:
      'Proyectos reales de identidad, sitios y productos digitales en finanzas internacionales, finanzas y desarrollo de software. Es el estándar con el que trabajaríamos tu firma.',
    howTo: 'el sitio web de una firma de private equity o venture capital',
    lead: {
      heading: 'Hablemos de tu firma',
      description:
        'Cuéntanos sobre tu firma y a quién tiene que convencer el sitio. Te contactamos y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un fondo de venture capital en Nueva York y nuestro sitio no refleja nuestra tesis.',
    },
  },
  en: {
    seoTitle: 'Private Equity & Venture Capital Website Design',
    seoDescription:
      'Websites for private equity firms, venture capital funds, and family offices: a clear investment thesis, portfolio, and team presented with the polish founders and LPs expect.',
    keywords:
      'private equity website design, venture capital website design, VC firm website, family office website design, investment firm web design',
    subtitle: 'Web design for private equity and VC',
    accent: 'Private Equity & VC',
    target: 'private equity and VC firms',
    hero: 'Before taking your call, a founder, an LP, or a business owner reviews your site to understand who you are and what you do. If it looks generic, your firm blends in with hundreds of others. We design sober, precise websites that communicate your thesis, your portfolio, and your team with the clarity your reputation deserves.',
    intro:
      'We work with private equity firms, venture capital funds, family offices, and investment firms in markets like New York, San Francisco, Boston, Greenwich, and Austin.',
    items: [
      {
        title: 'A clear investment thesis',
        description:
          'What you look for, at what stage, and in which sectors, explained so the right founder or company recognizes the fit instantly.',
        bullets: ['Thesis and investment criteria', 'Sectors and stages', 'How you support the portfolio'],
      },
      {
        title: 'A portfolio that backs you',
        description:
          'Portfolio companies with filters, logos, and case studies, easy to update when you close a new deal.',
        bullets: ['Filterable portfolio', 'Company case studies', 'Simple updates'],
      },
      {
        title: 'Team and judgment',
        description:
          'Team profiles that convey experience and how you think, beyond a title and a headshot.',
        bullets: ['Team profiles', 'Insights and publications', 'Press'],
      },
      {
        title: 'Investor access',
        description:
          'We design the LP login and reporting experience so it looks as polished as the site.',
        bullets: ['LP login', 'Report design', 'Discretion by design'],
      },
    ],
    diagnosis: 'A video call to understand your thesis, your portfolio, and who the site needs to convince.',
    pages: 'thesis, portfolio, team, insights, investor login, and contact',
    costQuestion: 'How much does an investment firm website cost?',
    costScope:
      'how many portfolio companies and team profiles, whether it includes the investor login design, whether it has publications, and whether you also need a brand',
    faqs: [
      {
        question: 'Can you build a discreet site for a family office?',
        answer:
          'Yes. Many family offices want only the essentials: who they are, how to reach them, and nothing more. We design it with the same quality and as little exposure as possible.',
      },
      {
        question: 'Can we update the portfolio ourselves?',
        answer: 'Yes. We set the site up so your team can add companies and news without depending on us.',
      },
    ],
    aiSubject: 'my firm',
    remoteWho: 'investment firms',
    proofText:
      'Real identity, website, and digital product work in international finance, finance, and software development. It is the standard we would bring to your firm.',
    howTo: 'a private equity or venture capital firm website',
    lead: {
      heading: 'Let’s talk about your firm',
      description:
        'Tell us about your firm and who the site needs to convince. We will reach out and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a New York VC fund and our site doesn’t reflect our thesis.',
    },
  },
});
