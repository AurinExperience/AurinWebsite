import { defineSector } from './build';

/**
 * Turismo médico en México — "medical tourism Mexico website".
 * Ángulo: el paciente de EE. UU./Canadá cruza la frontera o vuela para una
 * cirugía (bariatría, ortopedia, dental); decide por confianza en el médico y
 * en el hospital y por lo resuelto que esté el viaje. Inglés primero.
 */
export const turismoMedico = defineSector({
  id: 'turismo-medico',
  publishAt: '2026-10-29T00:00:00-06:00',
  slug: { es: 'para-turismo-medico', en: 'for-medical-tourism-in-mexico' },
  name: { es: 'Turismo médico', en: 'Medical tourism in Mexico' },
  proof: ['elite', 'dentol', 'elRollo'],
  es: {
    seoTitle: 'Diseño Web para Turismo Médico en México',
    seoDescription:
      'Sitios en inglés para médicos y clínicas que atienden pacientes de EE. UU. y Canadá: credenciales, procedimientos, paquetes y coordinación del viaje.',
    keywords:
      'diseño web turismo médico México, página web bariatría Tijuana, sitio web cirugía para pacientes extranjeros, marketing turismo médico, página web hospital pacientes internacionales',
    subtitle: 'Diseño web para turismo médico',
    accent: 'Turismo Médico',
    target: 'turismo médico',
    hero: 'Un paciente estadounidense que considera operarse en México tiene una pregunta antes que el precio: ¿puedo confiar en este médico y en este hospital? Busca credenciales, instalaciones, testimonios reales y cómo va a ser el viaje. Si tu sitio parece improvisado, se queda con la cirugía cara en su país. Diseñamos sitios en inglés que transmiten la seriedad de tu práctica y resuelven todo el viaje.',
    intro:
      'Diseñamos páginas web para cirujanos bariátricos, ortopedistas, clínicas dentales, centros de cirugía estética y hospitales en Tijuana, Monterrey, Cancún, Guadalajara y otras ciudades que reciben pacientes internacionales.',
    items: [
      {
        title: 'Credenciales primero',
        description:
          'Formación, certificaciones del consejo, membresías internacionales y el hospital donde operas, presentados de forma verificable.',
        bullets: ['Perfil y certificaciones', 'Hospital y acreditaciones', 'Membresías profesionales'],
      },
      {
        title: 'Procedimientos claros',
        description:
          'Cada procedimiento con candidatos, preparación, días de estancia, recuperación y seguimiento al volver a casa.',
        bullets: ['Páginas por procedimiento', 'Días de estancia', 'Seguimiento a distancia'],
      },
      {
        title: 'El viaje resuelto',
        description:
          'Paquetes con traslado desde el aeropuerto o la frontera, hospedaje y coordinador bilingüe, explicados paso a paso.',
        bullets: ['Paquetes y qué incluyen', 'Traslados y hospedaje', 'Coordinador bilingüe'],
      },
      {
        title: 'Testimonios y valoración',
        description:
          'Testimonios en video de pacientes reales y un formulario de valoración en línea que tu coordinador recibe completo.',
        bullets: ['Testimonios en video', 'Valoración en línea', 'WhatsApp y videollamada'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu práctica, tus procedimientos y de dónde vienen tus pacientes.',
    pages: 'procedimientos, el médico, el hospital, paquetes, el viaje, testimonios y valoración',
    costQuestion: '¿Cuánto cuesta un sitio web de turismo médico?',
    costScope:
      'cuántos procedimientos, si incluye paquetes y coordinación del viaje y si también necesitas marca',
    faqs: [
      {
        question: '¿El sitio debe ser primero en inglés?',
        answer:
          'Sí, si tus pacientes vienen de Estados Unidos y Canadá. Lo redactamos en inglés desde el principio, con la terminología que ellos buscan, y dejamos el español como versión secundaria.',
      },
      {
        question: '¿Conviene publicar precios?',
        answer:
          'En turismo médico, sí suele convenir publicar rangos o paquetes, porque el paciente compara con lo que pagaría en su país. Lo definimos contigo según cómo cotizas.',
      },
      {
        question: '¿Cómo transmitimos confianza a un paciente que no nos conoce?',
        answer:
          'Con credenciales verificables, fotos reales del hospital y del equipo, testimonios en video y un proceso de viaje explicado sin huecos. Diseñamos el sitio alrededor de esas pruebas.',
      },
    ],
    aiSubject: 'mi clínica',
    remoteWho: 'clínicas y médicos de turismo médico',
    proofText:
      'Proyectos reales de sitios web e identidad en salud, salud dental y turismo. Es el estándar con el que trabajaríamos tu práctica.',
    howTo: 'el sitio web de una clínica de turismo médico',
    lead: {
      heading: 'Hablemos de tu práctica',
      description:
        'Cuéntanos qué procedimientos realizas y de dónde vienen tus pacientes. Te contactaremos para entender tu práctica y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Soy cirujano bariátrico en Tijuana y el 80 % de mis pacientes viene de California.',
    },
  },
  en: {
    seoTitle: 'Website Design for Medical Tourism in Mexico',
    seoDescription:
      'English-first websites for doctors and clinics in Mexico serving US and Canadian patients: credentials, procedures, packages, and trip coordination.',
    keywords:
      'medical tourism website design, Mexico medical tourism marketing, bariatric surgery Mexico website, international patient website, Tijuana clinic web design',
    subtitle: 'Web design for medical tourism in Mexico',
    accent: 'Medical Tourism',
    target: 'medical tourism providers in Mexico',
    hero: 'An American patient considering surgery in Mexico has one question before price: can I trust this doctor and this hospital? They look for credentials, facilities, real testimonials, and how the trip will work. If your site looks improvised, they stay home with the expensive surgery. We design English-first websites that convey the seriousness of your practice and answer the entire trip.',
    intro:
      'We design websites for bariatric surgeons, orthopedists, dental clinics, cosmetic surgery centers, and hospitals in Tijuana, Monterrey, Cancún, Guadalajara, and other cities welcoming international patients.',
    items: [
      {
        title: 'Credentials first',
        description:
          'Training, board certifications, international memberships, and the hospital where you operate, presented in a verifiable way.',
        bullets: ['Profile and certifications', 'Hospital and accreditations', 'Professional memberships'],
      },
      {
        title: 'Clear procedures',
        description:
          'Each procedure with candidates, preparation, length of stay, recovery, and follow-up once patients return home.',
        bullets: ['Procedure pages', 'Length of stay', 'Remote follow-up'],
      },
      {
        title: 'The trip, solved',
        description:
          'Packages with airport or border transfers, lodging, and a bilingual coordinator, explained step by step.',
        bullets: ['Packages and inclusions', 'Transfers and lodging', 'Bilingual coordinator'],
      },
      {
        title: 'Testimonials and assessment',
        description:
          'Video testimonials from real patients and an online assessment form your coordinator receives complete.',
        bullets: ['Video testimonials', 'Online assessment', 'WhatsApp and video calls'],
      },
    ],
    diagnosis: 'A call to learn about your practice, your procedures, and where your patients come from.',
    pages: 'procedures, the doctor, the hospital, packages, the trip, testimonials, and assessment',
    costQuestion: 'How much does a medical tourism website cost?',
    costScope:
      'how many procedures, whether it includes packages and trip coordination, and whether you also need a brand',
    faqs: [
      {
        question: 'Should the site be English-first?',
        answer:
          'Yes, if your patients come from the US and Canada. We write it in English from the start, with the terms they search for, and keep Spanish as the secondary version.',
      },
      {
        question: 'Should we publish prices?',
        answer:
          'In medical tourism, publishing ranges or packages usually helps, because patients compare against what they would pay at home. We decide it with you based on how you quote.',
      },
      {
        question: 'How do we build trust with a patient who does not know us?',
        answer:
          'With verifiable credentials, real photos of the hospital and team, video testimonials, and a trip process explained without gaps. We design the site around that proof.',
      },
    ],
    aiSubject: 'my clinic',
    remoteWho: 'medical tourism clinics and doctors',
    proofText:
      'Real website and identity work in healthcare, dental care, and tourism. It is the standard we would bring to your practice.',
    howTo: 'a medical tourism clinic website',
    lead: {
      heading: 'Let’s talk about your practice',
      description:
        'Tell us which procedures you perform and where your patients come from. We will reach out to understand your practice and send you an itemized proposal.',
      messagePlaceholder: 'E.g. I am a bariatric surgeon in Tijuana and 80% of my patients come from California.',
    },
  },
});
