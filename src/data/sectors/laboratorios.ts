import { defineSector } from './build';

/**
 * Laboratorios clínicos — "diseño web para laboratorios clínicos" / "página
 * web para laboratorio de análisis". Ángulo: catálogo de estudios con
 * preparación, resultados en línea y sucursales/toma a domicilio.
 * Prueba: Elite Home Health y Dentol (salud), CEIICH-UNAM (investigación).
 */
export const laboratorios = defineSector({
  id: 'laboratorios',
  publishAt: '2026-10-19T00:00:00-06:00',
  slug: { es: 'para-laboratorios-clinicos', en: 'for-clinical-laboratories' },
  name: { es: 'Laboratorios clínicos', en: 'Clinical laboratories' },
  proof: ['elite', 'dentol', 'ceiich'],
  es: {
    seoTitle: 'Diseño Web para Laboratorios Clínicos',
    seoDescription:
      'Páginas web para laboratorios clínicos: catálogo de estudios con preparación, acceso a resultados, sucursales y presencia en Google y en la IA.',
    keywords:
      'diseño web para laboratorios clínicos, página web laboratorio de análisis, catálogo de estudios web, resultados en línea, marketing laboratorio',
    subtitle: 'Diseño web para laboratorios clínicos',
    accent: 'Laboratorios',
    target: 'laboratorios clínicos',
    hero: 'Antes de ir, el paciente quiere saber si haces el estudio, cuánto tarda, cómo prepararse y en qué sucursal le queda más cerca. Después, quiere encontrar dónde ver sus resultados. Diseñamos sitios de laboratorio que resuelven todo eso en línea y que también entienden los buscadores con IA.',
    stat: { value: 'Salud', label: 'ya trabajamos con marcas como Elite Home Health y Dentol' },
    intro:
      'Diseñamos páginas web para laboratorios clínicos, de imagen y redes de sucursales. Cada página web para laboratorio se diseña alrededor de tus estudios y de cómo atienden a tus pacientes.',
    items: [
      {
        title: 'Catálogo de estudios que se entiende',
        description:
          'Cada estudio con para qué sirve, cómo prepararse y cuándo están los resultados, y un buscador a la medida si tu catálogo es grande.',
        bullets: ['Indicaciones de preparación', 'Paquetes y chequeos'],
        custom: ['Buscador de estudios'],
      },
      {
        title: 'Resultados y citas en línea',
        description:
          'El paciente pide su toma, incluso a domicilio, y entra a sus resultados desde el sitio, con un enlace visible al portal de tu sistema.',
        bullets: ['Enlace a tu portal de resultados', 'Citas y toma a domicilio', 'Contacto directo por WhatsApp'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Los pacientes buscan "laboratorio cerca de mí" o un estudio específico en Google y en la IA. Estructuramos tu sitio para que esas herramientas entiendan qué haces y dónde estás.',
        bullets: ['Datos estructurados del laboratorio', 'Páginas por estudio y sucursal', 'Contenido que la IA puede citar'],
      },
      {
        title: 'Sucursales y médicos referentes',
        description:
          'Mapa de sucursales con horarios y una sección para médicos que refieren pacientes.',
        bullets: ['Mapa de sucursales', 'Sección para médicos', 'Convenios con empresas'],
      },
    ],
    diagnosis: 'Una llamada para entender tus estudios, tus sucursales y cómo llegan hoy tus pacientes.',
    pages: 'estudios, preparación, resultados, sucursales, médicos, empresas y aviso de privacidad',
    costQuestion: '¿Cuánto cuesta la página web de un laboratorio clínico?',
    costScope:
      'cuántos estudios y sucursales, si incluye acceso a resultados o agenda y si también necesitas marca',
    faqs: [
      {
        question: '¿Cómo consultan sus resultados los pacientes desde el sitio?',
        answer:
          'Enlazamos desde tu sitio el portal de resultados que ya te da tu proveedor de sistema, en un lugar visible, para que el paciente entre sin buscarlo.',
      },
      {
        question: '¿Podemos actualizar el catálogo de estudios nosotros?',
        answer:
          'Sí, con un administrador a la medida para que tu equipo agregue estudios, cambie indicaciones y publique paquetes sin depender de nosotros.',
      },
    ],
    aiSubject: 'mi laboratorio',
    remoteWho: 'laboratorios',
    proofText:
      'Proyectos reales de identidad y sitios web en salud, salud dental e investigación. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu laboratorio.',
    howTo: 'el sitio web de un laboratorio clínico',
    lead: {
      heading: 'Hablemos de tu laboratorio',
      description:
        'Cuéntanos qué estudios haces, cuántas sucursales tienes y cómo entregas resultados. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos cinco sucursales y queremos que los pacientes vean sus resultados en línea.',
    },
  },
  en: {
    seoTitle: 'Web Design for Clinical Laboratories',
    seoDescription:
      'Websites for clinical laboratories: test catalog with preparation, results access, locations, and visibility on Google and AI search tools.',
    keywords:
      'web design for clinical laboratories, lab website, test catalog website, online lab results, laboratory marketing',
    subtitle: 'Web design for clinical laboratories',
    accent: 'Laboratories',
    target: 'clinical laboratories',
    hero: 'Before coming in, patients want to know whether you run the test, how long it takes, how to prepare, and which location is closest. Afterward, they want to find where to see their results. We design lab websites that handle all of that online and that AI search tools understand too.',
    stat: { value: 'Health', label: 'we already work with brands like Elite Home Health and Dentol' },
    intro:
      'We design websites for clinical labs, imaging centers, and location networks. Every lab website is designed around your tests and how you serve your patients.',
    items: [
      {
        title: 'A test catalog people understand',
        description:
          'Each test with what it is for, how to prepare, and when results are ready, plus a custom search if your catalog is large.',
        bullets: ['Preparation instructions', 'Packages and checkups'],
        custom: ['Test search'],
      },
      {
        title: 'Online results and appointments',
        description:
          'Patients request their visit, including home collection, and reach their results from the site, through a visible link to your system’s portal.',
        bullets: ['Link to your results portal', 'Appointments and home collection', 'Direct contact over WhatsApp'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Patients search for "lab near me" or a specific test on Google and AI tools. We structure your site so those tools understand what you do and where you are.',
        bullets: ['Lab structured data', 'Pages by test and location', 'Content AI tools can cite'],
      },
      {
        title: 'Locations and referring doctors',
        description:
          'A location map with hours and a section for doctors who refer patients.',
        bullets: ['Location map', 'Section for doctors', 'Corporate agreements'],
      },
    ],
    diagnosis: 'We learn about your tests, your locations, and how patients find you today.',
    pages: 'tests, preparation, results, locations, doctors, corporate clients, and the privacy notice',
    costQuestion: 'How much does a clinical laboratory website cost?',
    costScope:
      'how many tests and locations, whether it includes results access or booking, and whether you also need a brand',
    faqs: [
      {
        question: 'How do patients check their results from the site?',
        answer:
          'We link the results portal your system provider already gives you from a visible spot on your site, so patients get there without searching.',
      },
      {
        question: 'Can we update the test catalog ourselves?',
        answer:
          'Yes, with a custom admin so your team can add tests, change instructions, and publish packages without depending on us.',
      },
    ],
    aiSubject: 'my lab',
    remoteWho: 'laboratories',
    proofText:
      'Real identity and website work in healthcare, dental care, and research. The same care we put into every brand is what we would bring to your lab.',
    howTo: 'a clinical laboratory website',
    lead: {
      heading: 'Let’s talk about your lab',
      description:
        'Tell us which tests you run, how many locations you have, and how you deliver results. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We have five locations and want patients to see their results online.',
    },
  },
});
