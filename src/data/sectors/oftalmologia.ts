import { defineSector } from './build';

/**
 * Oftalmología y cirugía láser — "página web oftalmólogo".
 * Ángulo: procedimientos electivos de alto valor (LASIK, cataratas, lente
 * intraocular) que el paciente investiga, compara y paga de su bolsillo;
 * también pacientes de EE. UU. Sin prometer resultados visuales.
 */
export const oftalmologia = defineSector({
  id: 'oftalmologia',
  publishAt: '2026-11-04T00:00:00-06:00',
  slug: { es: 'para-oftalmologos', en: 'for-ophthalmologists' },
  name: { es: 'Oftalmología y cirugía láser', en: 'Ophthalmology and laser eye surgery' },
  proof: ['elite', 'dentol', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Oftalmólogos y Clínicas de Cirugía Láser',
    seoDescription:
      'Sitios para oftalmólogos y clínicas de cirugía láser: LASIK, cataratas y lentes intraoculares explicados, prueba de candidato y agenda en línea.',
    keywords:
      'diseño web oftalmólogo, página web clínica oftalmológica, sitio web cirugía LASIK, página web cirugía de cataratas, marketing oftalmología',
    subtitle: 'Diseño web para oftalmólogos y cirugía láser',
    accent: 'Oftalmólogos',
    target: 'oftalmólogos y clínicas de cirugía láser',
    hero: 'Quien piensa operarse los ojos lo pospone durante años por miedo. Cuando por fin busca, quiere saber si es candidato, cómo es el procedimiento, cuánto tarda en recuperarse y quién lo va a operar. Si tu sitio no lo tranquiliza, sigue posponiendo o se va con la clínica que sí lo hizo. Diseñamos sitios que explican con claridad y convierten la duda en una valoración.',
    intro:
      'Diseñamos para oftalmólogos, clínicas de cirugía refractiva, centros de cataratas y retina, y hospitales oftalmológicos.',
    items: [
      {
        title: 'Procedimientos sin miedo',
        description:
          'LASIK, PRK, cataratas, lentes intraoculares y retina explicados paso a paso, con lo que el paciente siente y cómo se recupera.',
        bullets: ['Páginas por procedimiento', 'Antes, durante y después', 'Preguntas frecuentes'],
      },
      {
        title: '¿Soy candidato?',
        description:
          'Un cuestionario breve, desarrollado a la medida, que orienta al paciente y lo lleva a pedir su valoración, sin sustituir el diagnóstico médico.',
        bullets: ['Solicitud de valoración', 'Seguimiento por WhatsApp'],
        custom: ['Cuestionario de candidato'],
      },
      {
        title: 'Tecnología y equipo',
        description:
          'Equipos, quirófano y perfiles de los cirujanos con su formación y certificaciones, que es lo que da confianza para operarse.',
        bullets: ['Tecnología láser', 'Perfiles de cirujanos', 'Certificaciones'],
      },
      {
        title: 'Costos y financiamiento',
        description:
          'Paquetes, opciones de pago, meses sin intereses y seguros presentados con claridad, porque casi siempre es un gasto propio.',
        bullets: ['Paquetes y qué incluyen', 'Financiamiento', 'Pacientes de otros países'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu clínica, tus procedimientos y qué pacientes quieres atraer.',
    pages: 'procedimientos, candidatos, tecnología, cirujanos, costos y financiamiento, testimonios y agenda',
    costQuestion: '¿Cuánto cuesta la página web de un oftalmólogo?',
    costScope:
      'cuántos procedimientos, si incluye cuestionario de candidato y agenda conectada y si también necesitas marca',
    faqs: [
      {
        question: '¿El cuestionario de candidato sustituye la valoración?',
        answer:
          'No. Solo orienta al paciente y le explica qué se revisa en la valoración. Su objetivo es que agende, no que se autodiagnostique.',
      },
      {
        question: '¿Pueden mostrar resultados de pacientes?',
        answer:
          'Podemos publicar testimonios autorizados y experiencias de pacientes. No presentamos promesas de resultados visuales, porque dependen de cada caso.',
      },
      {
        question: '¿Sirve para atraer pacientes de Estados Unidos?',
        answer:
          'Sí. Con una versión en inglés, costos claros y una guía para quien viaja, una clínica en México puede atender pacientes estadounidenses y canadienses.',
      },
    ],
    aiSubject: 'mi clínica',
    remoteWho: 'oftalmólogos',
    proofText:
      'Proyectos reales de sitios web e identidad en salud, salud dental y diseño de marca. Es el estándar con el que trabajaríamos tu clínica.',
    howTo: 'el sitio web de un oftalmólogo',
    lead: {
      heading: 'Hablemos de tu clínica',
      description:
        'Cuéntanos qué procedimientos realizas y dónde está tu clínica. Te contactaremos para entenderla y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una clínica de cirugía refractiva en Guadalajara y queremos más valoraciones de LASIK.',
    },
  },
  en: {
    seoTitle: 'Web Design for Ophthalmologists and LASIK Clinics',
    seoDescription:
      'Websites for ophthalmologists and laser eye surgery clinics: LASIK, cataract, and lens procedures explained, candidacy quiz, and online scheduling.',
    keywords:
      'ophthalmology website design, LASIK clinic website, eye surgery website design, cataract surgeon website, ophthalmologist web design',
    subtitle: 'Web design for ophthalmologists and laser eye surgery',
    accent: 'Ophthalmologists',
    target: 'ophthalmologists and laser eye surgery clinics',
    hero: 'People considering eye surgery put it off for years out of fear. When they finally search, they want to know if they are a candidate, what the procedure is like, how long recovery takes, and who will operate. If your site does not reassure them, they keep waiting or go to the clinic that did. We design websites that explain clearly and turn doubt into a consultation.',
    intro:
      'We design for ophthalmologists, refractive surgery clinics, cataract and retina centers, and eye hospitals.',
    items: [
      {
        title: 'Procedures without fear',
        description:
          'LASIK, PRK, cataract, lens implants, and retina explained step by step, with what patients feel and how they recover.',
        bullets: ['Procedure pages', 'Before, during, and after', 'FAQs'],
      },
      {
        title: 'Am I a candidate?',
        description:
          'A short custom-built quiz that guides patients and leads them to request a consultation, without replacing a medical diagnosis.',
        bullets: ['Consultation requests', 'WhatsApp follow-up'],
        custom: ['Candidacy quiz'],
      },
      {
        title: 'Technology and team',
        description:
          'Equipment, operating room, and surgeon profiles with training and certifications, which is what builds the trust to have surgery.',
        bullets: ['Laser technology', 'Surgeon profiles', 'Certifications'],
      },
      {
        title: 'Costs and financing',
        description:
          'Packages, payment options, installments, and insurance presented clearly, since it is usually an out-of-pocket expense.',
        bullets: ['Packages and inclusions', 'Financing', 'International patients'],
      },
    ],
    diagnosis: 'A call to learn about your clinic, your procedures, and the patients you want to attract.',
    pages: 'procedures, candidacy, technology, surgeons, costs and financing, testimonials, and scheduling',
    costQuestion: 'How much does an ophthalmologist website cost?',
    costScope:
      'how many procedures, whether it includes a candidacy quiz and connected scheduling, and whether you also need a brand',
    faqs: [
      {
        question: 'Does the candidacy quiz replace the consultation?',
        answer:
          'No. It only guides patients and explains what the consultation checks. Its goal is for them to book, not to self-diagnose.',
      },
      {
        question: 'Can you show patient outcomes?',
        answer:
          'We can publish approved testimonials and patient experiences. We do not present promises about visual outcomes, since they depend on each case.',
      },
      {
        question: 'Can it attract patients from the US?',
        answer:
          'Yes. With an English version, clear costs, and a guide for traveling patients, a clinic in Mexico can serve American and Canadian patients.',
      },
    ],
    aiSubject: 'my clinic',
    remoteWho: 'ophthalmologists',
    proofText:
      'Real website and identity work in healthcare, dental care, and brand design. It is the standard we would bring to your clinic.',
    howTo: 'an ophthalmologist website',
    lead: {
      heading: 'Let’s talk about your clinic',
      description:
        'Tell us which procedures you perform and where your clinic is. We will reach out to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a refractive surgery clinic in Guadalajara and want more LASIK consultations.',
    },
  },
});
