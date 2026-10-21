import { defineSector } from './build';

/**
 * Hospitales y clínicas — "diseño web para hospitales" / "página web para
 * hospital privado". Distinto de médicos (consultorio individual) y de UX/UI
 * healthcare (portales): aquí es el sitio institucional con especialidades,
 * directorio médico y urgencias. Prueba: Elite Home Health y Dentol.
 */
export const hospitales = defineSector({
  id: 'hospitales',
  publishAt: '2026-10-19T00:00:00-06:00',
  slug: { es: 'para-hospitales', en: 'for-hospitals' },
  name: { es: 'Hospitales y clínicas', en: 'Hospitals and clinics' },
  proof: ['elite', 'dentol', 'ceiich'],
  es: {
    seoTitle: 'Diseño Web para Hospitales y Clínicas Privadas',
    seoDescription:
      'Páginas web para hospitales y clínicas: especialidades y directorio médico claros, urgencias a la vista y presencia en Google y en buscadores con IA.',
    keywords:
      'diseño web para hospitales, página web hospital privado, sitio web clínica, directorio médico web, marketing hospitalario',
    subtitle: 'Diseño web para hospitales y clínicas privadas',
    accent: 'Hospitales',
    target: 'hospitales y clínicas',
    hero: 'Antes de elegir dónde atenderse, el paciente y su familia revisan especialidades, médicos, instalaciones y si aceptan su seguro, y cada vez más le preguntan a una IA. En una urgencia necesitan tu teléfono en segundos. Diseñamos sitios que transmiten la calidad de tu atención y llevan a cada quien a lo que busca.',
    stat: { value: 'Salud', label: 'ya trabajamos con marcas como Elite Home Health y Dentol' },
    intro:
      'Diseñamos para hospitales privados, clínicas de especialidad y redes de consultorios. Cada página web para hospital se diseña alrededor de tus especialidades y de los pacientes que quieres atender.',
    items: [
      {
        title: 'Especialidades y médicos',
        description:
          'Una página por especialidad y un directorio médico con formación y cédula, para que el paciente encuentre al especialista correcto.',
        bullets: ['Páginas por especialidad', 'Directorio médico con cédula', 'Estudios y paquetes'],
      },
      {
        title: 'Urgencias y contacto sin buscar',
        description:
          'Teléfono de urgencias, ubicación y horarios visibles en cada pantalla, y citas que se agendan en línea.',
        bullets: ['Urgencias siempre visibles', 'Agenda de citas', 'Contacto directo por WhatsApp'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Los pacientes buscan especialistas en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan qué atiendes y te puedan recomendar.',
        bullets: ['Datos estructurados del hospital', 'Contenido que la IA puede citar', 'Seguros y convenios'],
      },
      {
        title: 'Branding hospitalario',
        description:
          'Una identidad cuidada hace que tu hospital se vea igual de confiable en tu sitio, tu señalética, tus uniformes y tus campañas.',
        bullets: ['Logo e identidad con manual', 'Señalética y papelería según el alcance', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una llamada para entender tus especialidades, tus pacientes y cómo llegan hoy a tu hospital.',
    pages: 'especialidades, directorio médico, urgencias, estudios, seguros y aviso de privacidad',
    costQuestion: '¿Cuánto cuesta la página web de un hospital?',
    costScope:
      'cuántas especialidades y médicos, si incluye agenda en línea y directorio administrable, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿Podemos actualizar el directorio médico nosotros?',
        answer:
          'Sí. Incluimos un administrador para que tu equipo agregue médicos, especialidades y estudios sin depender de nosotros.',
      },
      {
        question: '¿Qué pasa con los datos de los pacientes?',
        answer:
          'Los datos de salud son datos sensibles. Si el sitio recibe información de pacientes, incluimos el aviso de privacidad y el consentimiento, y pedimos solo lo necesario.',
      },
    ],
    aiSubject: 'mi hospital',
    remoteWho: 'hospitales y clínicas',
    proofText:
      'Proyectos reales de identidad y sitios web en salud, salud dental e investigación. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu hospital.',
    howTo: 'el sitio web de un hospital o una clínica',
    lead: {
      heading: 'Hablemos de tu hospital',
      description:
        'Cuéntanos tus especialidades y cómo llegan hoy tus pacientes. Te contactamos para entender tu hospital y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un hospital privado con 20 especialidades y queremos que los pacientes encuentren a sus médicos.',
    },
  },
  en: {
    seoTitle: 'Web Design for Hospitals and Private Clinics',
    seoDescription:
      'Websites for hospitals and clinics: clear specialties and physician directory, emergencies in plain sight, and visibility on Google and AI search.',
    keywords:
      'web design for hospitals, private hospital website, clinic website, physician directory website, hospital marketing',
    subtitle: 'Web design for hospitals and private clinics',
    accent: 'Hospitals',
    target: 'hospitals and clinics',
    hero: 'Before choosing where to get care, patients and families check specialties, doctors, facilities, and whether you take their insurance, and more and more often they ask an AI. In an emergency they need your phone number in seconds. We design websites that convey the quality of your care and take everyone to what they need.',
    stat: { value: 'Health', label: 'we already work with brands like Elite Home Health and Dentol' },
    intro:
      'We design for private hospitals, specialty clinics, and practice networks. Every hospital website is designed around your specialties and the patients you want to serve.',
    items: [
      {
        title: 'Specialties and doctors',
        description:
          'A page per specialty and a physician directory with training and license, so patients find the right specialist.',
        bullets: ['Pages by specialty', 'Physician directory with license', 'Tests and packages'],
      },
      {
        title: 'Emergencies and contact, no searching',
        description:
          'Emergency phone, location, and hours visible on every screen, and appointments booked online.',
        bullets: ['Emergencies always visible', 'Appointment booking', 'Direct contact over WhatsApp'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Patients search for specialists on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand what you treat and can recommend you.',
        bullets: ['Hospital structured data', 'Content AI tools can cite', 'Insurance and agreements'],
      },
      {
        title: 'Hospital branding',
        description:
          'A carefully crafted identity makes your hospital look equally trustworthy on your site, signage, uniforms, and campaigns.',
        bullets: ['Logo and identity with guidelines', 'Signage and stationery based on project scope', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'We learn about your specialties, your patients, and how they find your hospital today.',
    pages: 'specialties, physician directory, emergencies, tests, insurance, and the privacy notice',
    costQuestion: 'How much does a hospital website cost?',
    costScope:
      'how many specialties and doctors, whether it includes online booking and an editable directory, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Can we update the physician directory ourselves?',
        answer:
          'Yes. We include an admin so your team can add doctors, specialties, and tests without depending on us.',
      },
      {
        question: 'What about patient data?',
        answer:
          'Health data is sensitive personal data. If the site collects patient information, we include the privacy notice and consent, and ask only for what is needed.',
      },
    ],
    aiSubject: 'my hospital',
    remoteWho: 'hospitals and clinics',
    proofText:
      'Real identity and website work in healthcare, dental care, and research. The same care we put into every brand is what we would bring to your hospital.',
    howTo: 'a website for a hospital or clinic',
    lead: {
      heading: 'Let’s talk about your hospital',
      description:
        'Tell us your specialties and how patients find you today. We will reach out to understand your hospital and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a private hospital with 20 specialties and want patients to find their doctors.',
    },
  },
});
