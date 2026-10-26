import { defineSector } from './build';

/**
 * Joyerías — "diseño web para joyerías" / "tienda en línea de joyería".
 * Ángulo: piezas de ticket alto que se compran por fotografía y confianza;
 * catálogo que luce, citas en showroom y venta en línea. Sin cliente de
 * joyería en el catálogo: datos genéricos; Ideograma (diseño y marca) de prueba.
 */
export const joyerias = defineSector({
  id: 'joyerias',
  publishAt: '2026-10-20T00:00:00-06:00',
  slug: { es: 'para-joyerias', en: 'for-jewelry-brands' },
  name: { es: 'Joyerías', en: 'Jewelry brands' },
  proof: ['ideograma', 'elRollo', 'pfi'],
  es: {
    seoTitle: 'Diseño Web para Joyerías y Marcas de Joyería',
    seoDescription:
      'Páginas web y tiendas en línea para joyerías: piezas que lucen como en vitrina, compra segura, citas en showroom y presencia en Google y en la IA.',
    keywords:
      'diseño web para joyerías, tienda en línea de joyería, página web joyería, sitio web anillos de compromiso, ecommerce joyería',
    subtitle: 'Diseño web para joyerías y marcas de joyería',
    accent: 'Joyerías',
    target: 'joyerías',
    hero: 'Una joya se compra por cómo se ve y por la confianza en quien la vende. Si la foto no hace justicia a la pieza o el sitio no transmite seguridad, el cliente no paga en línea ni visita la tienda. Diseñamos sitios que hacen lucir cada pieza como en vitrina y convierten la admiración en compra.',
    intro:
      'Diseñamos para joyerías, marcas de joyería de autor y relojerías. Cada sitio se diseña alrededor de tus piezas y de cómo prefieres vender: en línea, en showroom o ambos.',
    items: [
      {
        title: 'Piezas que lucen como en vitrina',
        description:
          'Fotografía grande con zoom, detalles del material y la pieza puesta, en fichas que cargan rápido aun con imágenes de alta calidad.',
        bullets: ['Galerías con zoom', 'Materiales, quilates y medidas', 'Colecciones'],
      },
      {
        title: 'Compra en línea segura',
        description:
          'Si vendes en línea, desarrollamos a la medida carrito, pago y envío asegurado con la confianza que pide una compra de ticket alto, y opción de apartar o pagar en showroom.',
        bullets: [],
        custom: ['Tienda en línea', 'Pagos seguros y meses sin intereses si los ofreces', 'Envío asegurado'],
      },
      {
        title: 'Citas y piezas a la medida',
        description:
          'Solicitud de cita en showroom para anillos de compromiso o piezas personalizadas, con contacto directo por WhatsApp.',
        bullets: ['Citas en showroom', 'Solicitud de pieza personalizada', 'Contacto directo por WhatsApp'],
      },
      {
        title: 'Marca que se ve de lujo',
        description:
          'Una identidad cuidada hace que tu joyería se vea igual de exclusiva en tu sitio, tus estuches, tus bolsas y tus redes.',
        bullets: ['Logo e identidad con manual', 'Empaque y papelería según el alcance', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una llamada para entender tus piezas, tus colecciones y cómo vendes hoy.',
    pages: 'colecciones, piezas, tienda, citas, nosotros y aviso de privacidad',
    costQuestion: '¿Cuánto cuesta la página web de una joyería?',
    costScope:
      'cuántas piezas y colecciones, si incluye tienda en línea y citas y si también necesitas marca',
    faqs: [
      {
        question: '¿Conviene vender joyería en línea o solo mostrarla?',
        answer:
          'Depende de tus piezas. Las de menor precio suelen venderse bien en línea; las de ticket alto, como un anillo de compromiso, convierten mejor llevando al cliente a una cita. Podemos hacer ambas.',
      },
      {
        question: '¿Pueden ayudarnos con la fotografía?',
        answer:
          'Sí, se puede incluir en el alcance o te recomendamos cómo producirla. En joyería la fotografía es la mitad de la venta.',
      },
    ],
    aiSubject: 'mi joyería',
    remoteWho: 'joyerías',
    proofText:
      'Proyectos reales de identidad y sitios web en diseño, recreación y marcas de consumo. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu joyería.',
    howTo: 'el sitio web de una joyería',
    lead: {
      heading: 'Hablemos de tu joyería',
      description:
        'Cuéntanos qué piezas vendes y cómo vendes hoy. Te contactaremos lo antes posible para entender tu marca y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Hacemos joyería de autor en plata y oro y queremos vender en línea en todo México.',
    },
  },
  en: {
    seoTitle: 'Web Design for Jewelry Stores and Brands',
    seoDescription:
      'Websites and online stores for jewelers: pieces that shine like in a display case, secure checkout, showroom appointments, and visibility on Google and AI.',
    keywords:
      'web design for jewelry stores, jewelry online store, jewelry website, engagement ring website, jewelry ecommerce',
    subtitle: 'Web design for jewelry stores and brands',
    accent: 'Jewelers',
    target: 'jewelry brands',
    hero: 'Jewelry is bought for how it looks and for trust in the seller. If the photo does not do the piece justice or the site does not feel secure, customers will not pay online or visit the store. We design websites that make every piece shine like in a display case and turn admiration into a purchase.',
    intro:
      'We design for jewelers, designer jewelry brands, and watch stores. Every site is designed around your pieces and how you prefer to sell: online, in a showroom, or both.',
    items: [
      {
        title: 'Pieces that shine like in a display case',
        description:
          'Large photography with zoom, material details, and the piece being worn, on pages that load fast even with high-quality images.',
        bullets: ['Galleries with zoom', 'Materials, carats, and sizes', 'Collections'],
      },
      {
        title: 'Secure online purchase',
        description:
          'If you sell online, we build a custom cart, payment, and insured shipping with the confidence a high-ticket purchase needs, plus the option to reserve or pay in the showroom.',
        bullets: [],
        custom: ['Online store', 'Secure payments and installments if you offer them', 'Insured shipping'],
      },
      {
        title: 'Appointments and custom pieces',
        description:
          'Showroom appointment requests for engagement rings or custom pieces, with direct contact over WhatsApp.',
        bullets: ['Showroom appointments', 'Custom piece requests', 'Direct contact over WhatsApp'],
      },
      {
        title: 'A brand that looks luxurious',
        description:
          'A carefully crafted identity makes your brand look equally exclusive on your site, boxes, bags, and social media.',
        bullets: ['Logo and identity with guidelines', 'Packaging and stationery based on project scope', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'We learn about your pieces, your collections, and how you sell today.',
    pages: 'collections, pieces, store, appointments, about, and the privacy notice',
    costQuestion: 'How much does a jewelry website cost?',
    costScope:
      'how many pieces and collections, whether it includes an online store and appointments, and whether you also need a brand',
    faqs: [
      {
        question: 'Should we sell jewelry online or just show it?',
        answer:
          'It depends on your pieces. Lower-priced items usually sell well online; high-ticket ones, like an engagement ring, convert better by bringing the customer to an appointment. We can do both.',
      },
      {
        question: 'Can you help with photography?',
        answer:
          'Yes, it can be included in the scope or we can advise you on how to produce it. In jewelry, photography is half the sale.',
      },
    ],
    aiSubject: 'my jewelry store',
    remoteWho: 'jewelry brands',
    proofText:
      'Real identity and website work in design, leisure, and consumer brands. The same care we put into every brand is what we would bring to yours.',
    howTo: 'a jewelry store website',
    lead: {
      heading: 'Let’s talk about your jewelry brand',
      description:
        'Tell us what pieces you sell and how you sell today. We will reach out as soon as possible to understand your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We make designer silver and gold jewelry and want to sell online across Mexico.',
    },
  },
});
