import { defineSector } from './build';

/**
 * Clínicas de fertilidad en México — "página web clínica de fertilidad".
 * Ángulo: pacientes nacionales y de EE. UU./Canadá (los tratamientos cuestan
 * menos en México); el sitio explica tratamientos, acompaña la decisión y, en
 * inglés, resuelve el viaje. Distinto de `us-fertility-clinics` (clínicas en
 * EE. UU.). Sin prometer tasas de éxito.
 */
export const fertilidad = defineSector({
  id: 'fertilidad',
  publishAt: '2026-10-29T00:00:00-06:00',
  slug: { es: 'para-clinicas-de-fertilidad', en: 'for-fertility-clinics-in-mexico' },
  name: { es: 'Clínicas de fertilidad', en: 'Fertility clinics in Mexico' },
  proof: ['elite', 'dentol', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Clínicas de Fertilidad en México',
    seoDescription:
      'Sitios para clínicas de fertilidad en México: tratamientos explicados con empatía, equipo médico, costos y versión en inglés para pacientes extranjeros.',
    keywords:
      'diseño web clínica de fertilidad, página web reproducción asistida México, sitio web FIV México, marketing clínica de fertilidad, página web ovodonación',
    subtitle: 'Diseño web para clínicas de fertilidad',
    accent: 'Clínicas de Fertilidad',
    target: 'clínicas de fertilidad',
    hero: 'Tus pacientes llegan de dos lados: parejas en México que buscan a quién confiarle un sueño, y pacientes de Estados Unidos y Canadá que comparan costos y calidad para viajar. Los dos leen con cuidado, desconfían de las promesas y deciden por la claridad y la calidez. Diseñamos sitios que acompañan esa decisión en español y en inglés.',
    intro:
      'Diseñamos páginas web para clínicas de reproducción asistida, centros de FIV y unidades de fertilidad en hospitales, con atención a pacientes nacionales e internacionales.',
    items: [
      {
        title: 'Tratamientos con empatía',
        description:
          'FIV, inseminación, ovodonación, preservación de la fertilidad y estudios explicados en lenguaje claro, con cada etapa del proceso.',
        bullets: ['Tratamientos paso a paso', 'Qué esperar en cada etapa', 'Preguntas frecuentes'],
      },
      {
        title: 'Equipo y laboratorio',
        description:
          'Perfiles de médicos y embriólogos, el laboratorio y sus certificaciones, que es lo que más pesa al elegir clínica.',
        bullets: ['Perfiles del equipo', 'Laboratorio y tecnología', 'Certificaciones'],
      },
      {
        title: 'Pacientes internacionales',
        description:
          'Una sección en inglés que explica el viaje: cuántas visitas, cuánto tiempo de estancia, coordinación y costos aproximados si los publicas.',
        bullets: ['Sitio en inglés', 'Guía para pacientes que viajan', 'Coordinador de pacientes'],
      },
      {
        title: 'Primera consulta',
        description:
          'Solicitud de consulta presencial o por videollamada, formularios de valoración y WhatsApp, para que el primer paso no se sienta difícil.',
        bullets: ['Consulta presencial o virtual', 'Formulario de valoración', 'Contacto por WhatsApp'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu clínica, tus tratamientos y de dónde llegan tus pacientes.',
    pages: 'tratamientos, equipo médico, laboratorio, pacientes internacionales, costos, testimonios y agenda',
    costQuestion: '¿Cuánto cuesta la página web de una clínica de fertilidad?',
    costScope:
      'cuántos tratamientos, si incluye la sección para pacientes internacionales en inglés, si se conecta con tu agenda y si también necesitas marca',
    faqs: [
      {
        question: '¿Conviene publicar precios de los tratamientos?',
        answer:
          'Para pacientes de Estados Unidos y Canadá, publicar rangos o paquetes ayuda mucho, porque el costo es una de las razones por las que viajan. Lo definimos contigo según cómo cotizas.',
      },
      {
        question: '¿Pueden publicar tasas de éxito?',
        answer:
          'Si decides publicarlas, las presentamos con su periodo, su fuente y el contexto necesario, revisadas por tu equipo médico. Nunca como promesa.',
      },
      {
        question: '¿El sitio protege la información de los pacientes?',
        answer:
          'Sí. Los formularios piden solo lo necesario, cumplen con tu aviso de privacidad y evitamos herramientas que expongan datos sensibles.',
      },
    ],
    aiSubject: 'mi clínica',
    remoteWho: 'clínicas de fertilidad',
    proofText:
      'Proyectos reales de sitios web e identidad en salud, salud dental y diseño de marca. Es el estándar con el que trabajaríamos tu clínica.',
    howTo: 'el sitio web de una clínica de fertilidad',
    lead: {
      heading: 'Hablemos de tu clínica',
      description:
        'Cuéntanos qué tratamientos ofreces y si atiendes pacientes del extranjero. Te contactaremos para entender tu clínica y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una clínica de FIV en Monterrey y queremos atraer pacientes de Texas.',
    },
  },
  en: {
    seoTitle: 'Website Design for Fertility Clinics in Mexico',
    seoDescription:
      'Websites for fertility clinics in Mexico: treatments explained with empathy, care team, costs, and an English experience for traveling patients.',
    keywords:
      'fertility clinic Mexico website, IVF clinic Mexico web design, fertility tourism website, egg donation clinic website, reproductive medicine Mexico marketing',
    subtitle: 'Web design for fertility clinics in Mexico',
    accent: 'Fertility Clinics in Mexico',
    target: 'fertility clinics in Mexico',
    hero: 'Your patients come from two places: couples in Mexico looking for someone to trust with a dream, and patients from the US and Canada comparing cost and quality before traveling. Both read carefully, distrust promises, and decide based on clarity and warmth. We design websites that support that decision in English and Spanish.',
    intro:
      'We design websites for assisted reproduction clinics, IVF centers, and hospital fertility units in Mexico serving local and international patients.',
    items: [
      {
        title: 'Treatments with empathy',
        description:
          'IVF, IUI, egg donation, fertility preservation, and testing explained in plain language, stage by stage.',
        bullets: ['Step-by-step treatments', 'What to expect at each stage', 'FAQs'],
      },
      {
        title: 'Care team and lab',
        description:
          'Physician and embryologist profiles, the lab, and its certifications, which weigh most when choosing a clinic.',
        bullets: ['Team profiles', 'Lab and technology', 'Certifications'],
      },
      {
        title: 'International patients',
        description:
          'An English section that explains the trip: how many visits, how long to stay, coordination, and approximate costs if you publish them.',
        bullets: ['Native English site', 'Guide for traveling patients', 'Patient coordinator'],
      },
      {
        title: 'First consultation',
        description:
          'In-person or video consultations, assessment forms, and WhatsApp, so the first step does not feel hard.',
        bullets: ['In-person or virtual consult', 'Assessment form', 'WhatsApp contact'],
      },
    ],
    diagnosis: 'A call to learn about your clinic, your treatments, and where your patients come from.',
    pages: 'treatments, care team, lab, international patients, costs, testimonials, and scheduling',
    costQuestion: 'How much does a fertility clinic website cost?',
    costScope:
      'how many treatments, whether it includes the English section for international patients, whether it connects to your scheduling, and whether you also need a brand',
    faqs: [
      {
        question: 'Should we publish treatment prices?',
        answer:
          'For patients from the US and Canada, publishing ranges or packages helps a lot, since cost is one of the reasons they travel. We decide it with you based on how you quote.',
      },
      {
        question: 'Can you publish success rates?',
        answer:
          'If you choose to publish them, we present them with their time period, source, and the necessary context, reviewed by your medical team. Never as a promise.',
      },
      {
        question: 'Does the site protect patient information?',
        answer:
          'Yes. Forms ask only for what is needed, follow your privacy notice, and we avoid tools that could expose sensitive data.',
      },
    ],
    aiSubject: 'my clinic',
    remoteWho: 'fertility clinics',
    proofText:
      'Real website and identity work in healthcare, dental care, and brand design. It is the standard we would bring to your clinic.',
    howTo: 'a fertility clinic website',
    lead: {
      heading: 'Let’s talk about your clinic',
      description:
        'Tell us which treatments you offer and whether you serve patients from abroad. We will reach out to understand your clinic and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are an IVF clinic in Monterrey and want to attract patients from Texas.',
    },
  },
});
