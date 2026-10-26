import type { Guide } from './types';

/**
 * Guía 5 — "cuánto cuesta un logo / branding en México".
 *
 * Pareja de costo-pagina-web para el otro servicio de la agencia. Mismo
 * criterio: no inventa cifras de mercado, explica qué se está comprando y qué
 * pedir por escrito, sobre todo la propiedad de los archivos y el registro
 * ante el IMPI, que es donde más se equivoca quien compra un logo barato.
 */
export const costoBranding: Guide = {
  id: 'costo-branding',
  status: 'live',
  authors: ['nayeli-quinto'],
  slug: {
    es: 'cuanto-cuesta-un-logo-y-branding-en-mexico',
    en: 'how-much-does-a-logo-and-branding-cost-in-mexico',
  },
  published: '2026-10-13',
  updated: '2026-10-13',
  relatedLandings: ['jalisco', 'puebla', 'estado-de-mexico'],
  relatedSectors: ['franquicias', 'joyerias', 'estetica'],
  copy: {
    es: {
      seo: {
        title: '¿Cuánto cuesta un logo y el branding en México? Guía 2026 | Aurin',
        description:
          'Logo o identidad de marca: en qué se diferencian, qué mueve el precio, qué entregables pedir y por qué importan los derechos y el registro ante el IMPI.',
        keywords:
          'cuánto cuesta un logo, precio logotipo México, costo branding, identidad de marca precio, manual de marca, diseño de logo para empresa',
      },
      title: '¿Cuánto cuesta un logo y el branding en México?',
      excerpt:
        'Un logo y una identidad de marca no son lo mismo, y casi todas las diferencias de precio vienen de confundirlos. Esto es lo que estás comprando y lo que debes pedir por escrito.',
      intro: [
        'Puedes conseguir un logo por unos cientos de pesos en una plataforma de concursos o pagar una cifra de seis dígitos a un estudio. Las dos cosas se llaman “logo”, pero entregan cosas muy distintas, y la confusión casi siempre se descubre tarde: cuando el logo no se lee en un bordado, cuando no hay archivo para la lona o cuando otra empresa ya tenía registrada la marca.',
        'Como en una página web, nadie serio te puede dar un precio sin conocer el alcance. Lo que sí te podemos dar es el mapa: qué partes componen una identidad, cuáles necesitas hoy y qué tiene que venir en la entrega para que no pagues dos veces.',
      ],
      sections: [
        {
          heading: 'Logo, identidad y branding no son lo mismo',
          paragraphs: [
            '**Logo.** Es el símbolo, la tipografía del nombre o la combinación de los dos. Es la pieza más visible, pero sola no basta para que una marca se vea igual en todos lados.',
            '**Identidad visual.** Es el sistema alrededor del logo: paleta de color, tipografías, versiones del logo para cada uso, iconos, fotografía y reglas de aplicación. Es lo que hace que tu tarjeta, tu sitio, tu camioneta y tu Instagram parezcan de la misma empresa.',
            '**Branding.** Incluye lo anterior y empieza antes: a quién le hablas, qué te diferencia de tu competencia, cómo suenas y, a veces, cómo te llamas. Es trabajo de estrategia que después se traduce en diseño.',
            'Muchas cotizaciones baratas son de un logo, y muchas caras son de un branding completo. Compararlas por el total no sirve: primero hay que ver qué nivel está cotizando cada una.',
          ],
        },
        {
          heading: 'Qué mueve el precio',
          paragraphs: [
            'Estas son las variables que explican la diferencia entre una propuesta y otra. Úsalas para comparar cotizaciones parecidas.',
          ],
          bullets: [
            'Investigación y estrategia. Analizar tu mercado y a tu competencia antes de dibujar cuesta tiempo, y es lo que evita un logo bonito que se parece al de otros tres negocios de tu ramo.',
            'Naming. Si también hay que crear o cambiar el nombre, es un proyecto aparte: hay que proponer opciones y revisar que estén disponibles como marca y como dominio.',
            'Número de propuestas y rondas de revisión. Más rutas iniciales y más ajustes significan más horas.',
            'Aplicaciones incluidas. Tarjetas, papelería, plantillas para redes, empaque, señalética, uniformes. Cada pieza se diseña y se adapta a su medida.',
            'Manual de marca. Un documento con las reglas de uso que permite que cualquier proveedor aplique tu marca bien sin preguntarle al diseñador.',
          ],
        },
        {
          heading: 'Los entregables que no pueden faltar',
          paragraphs: [
            'Un logo que solo existe en un JPG es un problema futuro. Revisa que la entrega incluya, como mínimo:',
          ],
          bullets: [
            'Archivos vectoriales (SVG, PDF o AI), que se pueden ampliar a cualquier tamaño sin perder calidad. Son los que va a pedir la imprenta, el rotulista y el bordador.',
            'Versiones del logo: horizontal, vertical, solo el símbolo, a una tinta, en positivo y en negativo.',
            'PNG con fondo transparente para usos digitales, y un tamaño pensado para el perfil de redes y el favicon del sitio.',
            'Paleta de color con sus valores para pantalla (HEX y RGB) y para impresión (CMYK y, si aplica, Pantone).',
            'Tipografías con su licencia, o la indicación de dónde conseguirla. Una fuente sin licencia comercial puede ser un problema legal.',
          ],
        },
        {
          heading: 'Derechos y registro: lo que más se olvida',
          paragraphs: [
            'Pagar el diseño no te convierte automáticamente en dueño de todos los derechos sobre él. Pide que la cesión de derechos patrimoniales sobre el logo y la identidad quede por escrito en el contrato o en la factura. Sin eso, quien lo diseñó podría reclamarlo más adelante.',
            'Tampoco hay que confundir el diseño con el registro de marca. El registro se tramita ante el IMPI y es lo que te protege si alguien más quiere usar tu nombre o tu logo. Conviene revisar que el nombre y el logo estén disponibles **antes** de cerrar el diseño: rehacer una identidad porque la marca ya existía cuesta mucho más que una búsqueda previa.',
          ],
        },
        {
          heading: 'Cuándo basta con un logo y cuándo necesitas branding',
          paragraphs: [
            'Si estás validando un negocio, tienes poco presupuesto y vas a cambiar mucho en el primer año, un logo bien hecho con sus archivos completos puede ser suficiente. Más adelante se construye el sistema alrededor de él.',
            'Si compites en un sector saturado, vas a invertir en un sitio web, en publicidad o en un local, o tu marca la van a aplicar varios proveedores, conviene la identidad completa. Cada peso que pongas después en anuncios rinde más cuando la marca se reconoce y se ve igual en todos lados.',
          ],
        },
      ],
      cta: {
        heading: 'Cotiza tu identidad de marca',
        text: 'Empezamos con una llamada para entender tu negocio y tu competencia. Después te enviamos una propuesta con alcance, entregables y fechas por etapa, con la cesión de derechos incluida.',
        label: 'Solicita tu cotización',
      },
      linkLabel: '¿Cuánto cuesta un logo y el branding en México?',
      breadcrumb: 'Cuánto cuesta un logo y el branding',
    },
    en: {
      seo: {
        title: 'How much do a logo and branding cost in Mexico? 2026 guide | Aurin',
        description:
          'The difference between a logo and a brand identity, what drives the price, which deliverables to ask for, and why rights and IMPI registration matter.',
        keywords:
          'logo design cost Mexico, branding price, brand identity cost, brand guidelines, logo design for business, how much does a logo cost',
      },
      title: 'How much do a logo and branding cost in Mexico?',
      excerpt:
        'A logo and a brand identity are not the same thing, and almost every price difference comes from confusing them. Here is what you are buying and what to get in writing.',
      intro: [
        'You can get a logo for a few hundred pesos on a contest platform or pay a six-figure fee to a studio. Both are called a “logo”, but they deliver very different things, and the confusion is usually discovered late: when the logo does not read when embroidered, when there is no file for the banner, or when another company had already registered the brand.',
        'As with a website, no one serious can give you a price without knowing the scope. What we can give you is the map: which parts make up an identity, which ones you need today, and what the delivery must include so you do not pay twice.',
      ],
      sections: [
        {
          heading: 'Logo, identity, and branding are not the same',
          paragraphs: [
            '**Logo.** The symbol, the typeset name, or the combination of both. It is the most visible piece, but on its own it is not enough to make a brand look consistent everywhere.',
            '**Visual identity.** The system around the logo: color palette, typefaces, logo versions for each use, icons, photography, and usage rules. It is what makes your business card, your website, your van, and your Instagram look like the same company.',
            '**Branding.** Includes all of the above and starts earlier: who you speak to, what sets you apart from your competitors, how you sound, and sometimes what you are called. It is strategy work that later turns into design.',
            'Many cheap quotes are for a logo, and many expensive ones are for full branding. Comparing them on the total is useless: first check which level each one is quoting.',
          ],
        },
        {
          heading: 'What drives the price',
          paragraphs: [
            'These are the variables that explain the difference between one proposal and another. Use them to compare similar quotes.',
          ],
          bullets: [
            'Research and strategy. Analyzing your market and your competitors before drawing takes time, and it is what prevents a pretty logo that looks like three other businesses in your field.',
            'Naming. If the name also has to be created or changed, that is a separate project: options have to be proposed and checked for availability as a trademark and as a domain.',
            'Number of concepts and review rounds. More initial directions and more revisions mean more hours.',
            'Included applications. Business cards, stationery, social media templates, packaging, signage, uniforms. Each piece is designed and adapted to its format.',
            'Brand guidelines. A document with usage rules that lets any supplier apply your brand correctly without asking the designer.',
          ],
        },
        {
          heading: 'The deliverables that cannot be missing',
          paragraphs: [
            'A logo that only exists as a JPG is a future problem. Make sure the delivery includes, at a minimum:',
          ],
          bullets: [
            'Vector files (SVG, PDF, or AI), which scale to any size without losing quality. They are what the printer, the sign maker, and the embroiderer will ask for.',
            'Logo versions: horizontal, vertical, symbol only, single color, positive and negative.',
            'Transparent-background PNGs for digital use, plus a size meant for social profiles and the website favicon.',
            'Color palette with values for screen (HEX and RGB) and for print (CMYK and, where relevant, Pantone).',
            'Typefaces with their license, or a note on where to get them. A font without a commercial license can become a legal problem.',
          ],
        },
        {
          heading: 'Rights and registration: what gets forgotten most',
          paragraphs: [
            'Paying for the design does not automatically make you the owner of all rights to it. Ask for the transfer of economic rights over the logo and the identity to be stated in writing, in the contract or on the invoice. Without it, whoever designed it could claim it later.',
            'Do not confuse the design with trademark registration either. In Mexico, registration is filed with IMPI, and it is what protects you if someone else wants to use your name or logo. It is worth checking that the name and logo are available **before** finalizing the design: redoing an identity because the brand already existed costs far more than a prior search.',
          ],
        },
        {
          heading: 'When a logo is enough and when you need branding',
          paragraphs: [
            'If you are validating a business, have a tight budget, and expect to change a lot in the first year, a well-made logo with complete files can be enough. The system around it can be built later.',
            'If you compete in a crowded sector, are about to invest in a website, advertising, or a storefront, or several suppliers will apply your brand, the full identity is worth it. Every peso you later put into ads goes further when the brand is recognizable and looks the same everywhere.',
          ],
        },
      ],
      cta: {
        heading: 'Get a quote for your brand identity',
        text: 'We start with a call to understand your business and your competitors. Then we send a proposal with scope, deliverables, and dates per stage, with the transfer of rights included.',
        label: 'Request your quote',
      },
      linkLabel: 'How much do a logo and branding cost in Mexico?',
      breadcrumb: 'Logo and branding cost',
    },
  },
};
