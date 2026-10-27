import type { Lang, LandingCopy } from '@/data/landings';

/**
 * Pasos del proceso propios de cada sector. Antes los pasos de diseño (web) y de
 * flujos e interfaz (UX/UI) eran el mismo texto en todas las landings: ~100
 * palabras idénticas por página que Google leía como contenido duplicado.
 *
 * Web: qué prioriza el diseño para ese público; build.ts le agrega la frase
 * común de presentar y ajustar el diseño. UX/UI: [flujos, interfaz y prototipo].
 *
 * Mismas reglas de copy que las landings: "Diseñamos…", sin clientes que no
 * existen, sin tiempos ni precios, nada de mapas interactivos ni tours 360, y lo
 * a la medida (reservas, pagos, buscadores) como "solicitud" o "camino a…", no
 * como función incluida. Apps móviles: se diseñan, no se desarrollan.
 */

export const WEB_DESIGN_STEP: Record<string, Record<Lang, string>> = {
  'agencias-viajes': {
    es: 'Diseñamos para que el viajero se imagine ahí: destinos con fotos grandes, paquetes fáciles de comparar y la cotización con un asesor siempre a la mano.',
    en: 'We design so travelers picture themselves there: destinations in large photos, packages that are easy to compare, and a quote from an advisor always within reach.',
  },
  'agentes-seguros': {
    es: 'Diseñamos para quien no sabe qué seguro necesita: cada producto explicado en lenguaje claro, tu respaldo como agente al frente y la solicitud de cotización en cada página.',
    en: 'We design for people who don’t know which policy they need: every product in plain language, your credentials as an agent up front, and a quote request on every page.',
  },
  agroindustria: {
    es: 'Diseñamos para el comprador extranjero que te evalúa: productos y temporadas en una tabla clara, certificaciones visibles y todo en inglés y en español.',
    en: 'We design for the foreign buyer evaluating you: products and seasons in a clear table, certifications in plain view, and everything in English and Spanish.',
  },
  'alimentos-bebidas': {
    es: 'Diseñamos cada producto como en el anaquel, pero con más espacio: fotos que abren el apetito, ingredientes claros y dónde comprarlo a un clic.',
    en: 'We design every product like the shelf, with more room: appetizing photos, clear ingredients, and where to buy it one click away.',
  },
  arquitectos: {
    es: 'Diseñamos un portafolio a la altura de tu obra: proyectos con fotografía a gran tamaño, cada uno contado como caso y tu estudio con nombre propio.',
    en: 'We design a portfolio that matches your work: projects in large-format photography, each told as a case study, and your studio with a name of its own.',
  },
  autopartes: {
    es: 'Diseñamos para el ingeniero de compras de una armadora: capacidades, procesos y certificaciones ordenados para que encuentre lo que pide su auditoría sin tener que escribirte.',
    en: 'We design for an OEM purchasing engineer: capabilities, processes, and certifications organized so they find what their audit requires without having to email you.',
  },
  blindadoras: {
    es: 'Diseñamos con la discreción que espera tu cliente: niveles de protección explicados sin exagerar, imágenes sobrias y un contacto confidencial.',
    en: 'We design with the discretion your clients expect: protection levels explained without hype, restrained imagery, and confidential contact.',
  },
  'bodas-destino': {
    es: 'Diseñamos para la pareja que planea desde otro país: bodas reales que enamoran, locaciones bien mostradas y la consulta inicial fácil de pedir.',
    en: 'We design for couples planning from abroad: real weddings that win them over, venues shown in full, and an easy first consultation request.',
  },
  cerveceras: {
    es: 'Diseñamos con la personalidad de tu etiqueta: cada estilo con su ficha, los lanzamientos al frente y el taproom con horarios y cómo llegar.',
    en: 'We design with the personality of your label: each style with its own spec sheet, releases up front, and the taproom with hours and directions.',
  },
  concesionarias: {
    es: 'Diseñamos para quien ya sabe qué auto quiere y elige dónde comprarlo: inventario con fotos y precios claros, y la prueba de manejo a un toque desde el celular.',
    en: 'We design for buyers who already know the car they want and are choosing where to buy: inventory with clear photos and prices, and a test drive request one tap away on mobile.',
  },
  congresos: {
    es: 'Diseñamos para tres públicos a la vez: el asistente que revisa el programa, el ponente que busca su sesión y el patrocinador que evalúa la exposición de su marca.',
    en: 'We design for three audiences at once: attendees checking the program, speakers looking for their session, and sponsors weighing their brand exposure.',
  },
  constructoras: {
    es: 'Diseñamos para el área de compras que te evalúa: obras con datos, capacidad y certificaciones claras, y la documentación que piden lista para descargar.',
    en: 'We design for the procurement teams vetting you: projects with data, clear capacity and certifications, and the documents they ask for, ready to download.',
  },
  consultoras: {
    es: 'Diseñamos para el director que te va a contratar: servicios explicados en términos de negocio, casos con el problema y el resultado, y un equipo con nombre y cara.',
    en: 'We design for the executive who will hire you: services in business terms, cases that show the problem and the outcome, and a team with names and faces.',
  },
  contadores: {
    es: 'Diseñamos para el empresario que no domina los impuestos: servicios explicados en lenguaje simple, tu despacho con sus credenciales y un contacto sin fricción.',
    en: 'We design for business owners who don’t speak tax: services in plain language, your firm with its credentials, and frictionless contact.',
  },
  cosmeticos: {
    es: 'Diseñamos para quien quiere saber qué se pone en la piel: ingredientes explicados, rutinas paso a paso y fotos de producto con textura y color reales.',
    en: 'We design for people who want to know what goes on their skin: ingredients explained, step-by-step routines, and product photos with true texture and color.',
  },
  dentistas: {
    es: 'Diseñamos para el paciente que compara clínicas desde el celular: tratamientos explicados sin miedo, fotos reales del consultorio y la valoración a un toque.',
    en: 'We design for patients comparing clinics on their phone: treatments explained without fear, real photos of the office, and an evaluation request one tap away.',
  },
  desarrolladoras: {
    es: 'Diseñamos para el comprador que compara proyectos: tipologías con metros y planos, avance de obra con fotos y la cita en el showroom siempre visible.',
    en: 'We design for buyers comparing projects: unit types with square footage and floor plans, construction progress in photos, and a showroom appointment always in view.',
  },
  'desarrollos-playa': {
    es: 'Diseñamos para vender un estilo de vida a quien compra desde otro país: el destino primero, residencias claras y cómo compra un extranjero, explicado paso a paso.',
    en: 'We design to sell a lifestyle to buyers abroad: the destination first, clear residences, and how a foreigner buys, explained step by step.',
  },
  'energia-solar': {
    es: 'Diseñamos para quien quiere pagar menos luz y no sabe por dónde empezar: el ahorro en números simples, instalaciones reales y la cotización con su recibo.',
    en: 'We design for people who want a lower power bill and don’t know where to start: savings in simple numbers, real installations, and a quote based on their bill.',
  },
  'equipo-medico': {
    es: 'Diseñamos para el médico y para el área de compras del hospital: catálogo por especialidad, fichas técnicas descargables y la cotización institucional en cada producto.',
    en: 'We design for physicians and hospital purchasing teams: a catalog by specialty, downloadable spec sheets, and an institutional quote request on every product.',
  },
  estetica: {
    es: 'Diseñamos para el paciente que investiga antes de decidir: tu certificación al frente, procedimientos sin letra chica y la valoración fácil de pedir.',
    en: 'We design for patients who research before deciding: your board certification up front, procedures without fine print, and an easy consultation request.',
  },
  farmaceuticas: {
    es: 'Diseñamos con dos caminos claros, uno para pacientes y otro para profesionales de la salud, con la información de cada producto en su lugar y la farmacovigilancia fácil de encontrar.',
    en: 'We design two clear paths, one for patients and one for healthcare professionals, with each product’s information in its place and pharmacovigilance easy to find.',
  },
  fertilidad: {
    es: 'Diseñamos con la empatía que pide el tema: tratamientos explicados sin jerga, el equipo y el laboratorio a la vista y la primera consulta sin presión.',
    en: 'We design with the empathy the subject demands: treatments explained without jargon, the team and lab in view, and a first consultation without pressure.',
  },
  franquicias: {
    es: 'Diseñamos un sitio para dos públicos: el cliente que busca la sucursal más cercana y el inversionista que quiere saber qué necesita para abrir una franquicia.',
    en: 'We design one site for two audiences: customers looking for the nearest location and investors who want to know what it takes to open a franchise.',
  },
  fundaciones: {
    es: 'Diseñamos para que la causa se entienda de un vistazo y apoyarla sea fácil: historias reales, impacto con datos y las formas de ayudar siempre a la mano.',
    en: 'We design so the cause is clear at a glance and supporting it is easy: real stories, impact backed by data, and ways to help always within reach.',
  },
  galerias: {
    es: 'Diseñamos para que la obra sea la protagonista: imágenes grandes, fichas completas de cada pieza y un archivo de exposiciones que se recorre con calma.',
    en: 'We design so the work takes center stage: large images, complete details for each piece, and an exhibition archive worth browsing.',
  },
  'grupos-restauranteros': {
    es: 'Diseñamos una identidad para el grupo y un espacio propio para cada concepto: menús que se leen bien en el celular, sucursales con cómo llegar y eventos privados a un clic.',
    en: 'We design one identity for the group and a space of its own for each concept: menus that read well on mobile, locations with directions, and private events one click away.',
  },
  hospitales: {
    es: 'Diseñamos para el paciente con prisa: urgencias y teléfonos visibles desde la primera pantalla, especialidades claras y un directorio médico fácil de recorrer.',
    en: 'We design for patients in a hurry: emergency care and phone numbers visible on the first screen, clear specialties, and a physician directory that’s easy to browse.',
  },
  hoteles: {
    es: 'Diseñamos para que el huésped reserve contigo y no en un portal: habitaciones con fotos que venden, la experiencia del lugar y el camino a reservar directo.',
    en: 'We design so guests book with you instead of a booking site: rooms in photos that sell, the experience of the place, and a path to booking direct.',
  },
  inmobiliarias: {
    es: 'Diseñamos para quien busca casa desde el celular: propiedades con fotos y datos claros, y el contacto con el asesor de cada propiedad a un toque.',
    en: 'We design for house hunters on their phone: listings with clear photos and details, and contact with each listing’s agent one tap away.',
  },
  joyerias: {
    es: 'Diseñamos para que cada pieza luzca como en vitrina: fotos de detalle, materiales y medidas claros, y una cita para verla en persona.',
    en: 'We design so every piece shines like it does in the display case: detail photos, clear materials and sizes, and an appointment to see it in person.',
  },
  laboratorios: {
    es: 'Diseñamos para el paciente que llega con una orden médica: cada estudio con su preparación explicada, sucursales con horarios y cómo recibir sus resultados.',
    en: 'We design for patients arriving with a lab order: every test with its preparation explained, locations with hours, and how to get their results.',
  },
  manufactura: {
    es: 'Diseñamos para el comprador industrial que te evalúa como proveedor: capacidades y maquinaria con datos, certificaciones al frente y la cotización con planos adjuntos.',
    en: 'We design for industrial buyers vetting you as a supplier: capabilities and equipment with data, certifications up front, and quote requests with drawings attached.',
  },
  maquinaria: {
    es: 'Diseñamos para quien necesita la máquina correcta: catálogo con especificaciones comparables, opciones de venta, renta y seminuevos, y refacciones fáciles de pedir.',
    en: 'We design for buyers who need the right machine: a catalog with comparable specs, sale, rental, and used options, and parts that are easy to request.',
  },
  marinas: {
    es: 'Diseñamos para el capitán que planea su llegada: slips con medidas y tarifas, instrucciones de aproximación claras y los servicios del puerto en un solo lugar.',
    en: 'We design for captains planning their arrival: slips with dimensions and rates, clear approach instructions, and harbor services in one place.',
  },
  medicos: {
    es: 'Diseñamos para el paciente que te busca antes de su primera cita: tu perfil y especialidad claros, los padecimientos que atiendes explicados y la cita fácil de pedir.',
    en: 'We design for patients who look you up before their first visit: a clear profile and specialty, the conditions you treat explained, and an easy appointment request.',
  },
  moda: {
    es: 'Diseñamos para comprar desde el celular sin dudar: colecciones con buenas fotos, una guía de tallas clara y una marca que se reconoce en cada página.',
    en: 'We design for confident shopping on mobile: collections in great photos, a clear size guide, and a brand you recognize on every page.',
  },
  mueblerias: {
    es: 'Diseñamos para que cada pieza se vea en su contexto: ambientes, acabados y medidas claros, y la visita al showroom fácil de agendar.',
    en: 'We design so every piece is seen in context: room settings, finishes, and clear dimensions, plus an easy showroom visit request.',
  },
  oftalmologia: {
    es: 'Diseñamos para quien tiene miedo de operarse: procedimientos explicados con calma, el cirujano y la tecnología a la vista y la valoración fácil de pedir.',
    en: 'We design for patients who are nervous about surgery: procedures explained calmly, the surgeon and technology in view, and an easy evaluation request.',
  },
  'parques-industriales': {
    es: 'Diseñamos para el gerente de expansión que compara ubicaciones: naves y lotes con especificaciones, la conectividad logística en distancias claras y todo en inglés.',
    en: 'We design for expansion managers comparing locations: buildings and lots with specs, logistics connectivity in clear distances, and everything in English.',
  },
  productoras: {
    es: 'Diseñamos para que el trabajo hable: el reel al frente, proyectos por categoría que cargan rápido y cada director con su propia página.',
    en: 'We design so the work speaks: the reel up front, projects by category that load fast, and every director with a page of their own.',
  },
  'salones-eventos': {
    es: 'Diseñamos para quien organiza un evento y compara lugares: espacios con capacidades, fotos de eventos reales y la visita al salón fácil de agendar.',
    en: 'We design for planners comparing venues: spaces with capacities, photos of real events, and an easy venue tour request.',
  },
  spas: {
    es: 'Diseñamos para transmitir calma desde la primera pantalla: rituales bien descritos, la atmósfera del lugar en fotos y la solicitud de reserva sin pasos de más.',
    en: 'We design to convey calm from the first screen: well-described rituals, the atmosphere of the place in photos, and a booking request without extra steps.',
  },
  suplementos: {
    es: 'Diseñamos para quien lee la etiqueta: ingredientes y dosis claros, una guía para elegir el producto correcto y una marca que se ve confiable.',
    en: 'We design for people who read the label: clear ingredients and doses, a guide to choosing the right product, and a brand that looks trustworthy.',
  },
  'tecnologia-ti': {
    es: 'Diseñamos para el director de TI y para el de finanzas: servicios en términos de negocio, casos con resultados y certificaciones que te respaldan.',
    en: 'We design for both the CIO and the CFO: services in business terms, cases with outcomes, and certifications that back you up.',
  },
  tequileras: {
    es: 'Diseñamos con el origen al frente: la casa y el proceso contados con fotos, cada expresión con sus notas de cata y un camino claro para importadores.',
    en: 'We design with origin up front: the house and the process told through photos, each expression with its tasting notes, and a clear path for importers.',
  },
  'turismo-medico': {
    es: 'Diseñamos para el paciente que viaja a operarse: credenciales del médico y del hospital primero, procedimientos claros y el viaje explicado de principio a fin.',
    en: 'We design for patients traveling for a procedure: the doctor’s and hospital’s credentials first, clear procedures, and the trip explained from start to finish.',
  },
  veterinarias: {
    es: 'Diseñamos para el dueño preocupado por su mascota: urgencias y teléfono visibles, servicios bien explicados y la cita fácil de pedir desde el celular.',
    en: 'We design for worried pet owners: emergencies and phone number in view, services explained clearly, and an easy appointment request on mobile.',
  },
  'us-art-galleries': {
    es: 'Diseñamos con la sobriedad de una galería: la obra a gran tamaño, artistas con su trayectoria y la obra disponible bajo consulta privada.',
    en: 'We design with a gallery’s restraint: the work at full scale, artists with their full résumé, and available work by private inquiry.',
  },
  'us-boutique-hotels': {
    es: 'Diseñamos para que el huésped viva la estancia antes de llegar: habitaciones y experiencias con fotos grandes y el camino a reservar directo siempre a la vista.',
    en: 'We design so guests live the stay before they arrive: rooms and experiences in large photos, and the path to booking direct always in view.',
  },
  'us-concierge-medicine': {
    es: 'Diseñamos para el paciente que evalúa una membresía: qué incluye y qué no, los médicos con nombre y trayectoria y la solicitud de membresía sin fricción.',
    en: 'We design for patients evaluating a membership: what it includes and what it doesn’t, physicians with names and credentials, and a frictionless membership application.',
  },
  'us-cosmetic-dentistry': {
    es: 'Diseñamos para el paciente que compara resultados: galerías de antes y después bien presentadas, el doctor como marca y la consulta fácil de pedir.',
    en: 'We design for patients comparing results: well-presented before-and-after galleries, the dentist as the brand, and an easy consultation request.',
  },
  'us-equestrian': {
    es: 'Diseñamos para jinetes y compradores exigentes: instalaciones en fotos que lucen, programas y entrenadores claros y caballos en venta con su ficha completa.',
    en: 'We design for discerning riders and buyers: facilities in striking photos, clear programs and trainers, and horses for sale with complete profiles.',
  },
  'us-executive-coaches': {
    es: 'Diseñamos tu marca personal con la seriedad que espera un consejo directivo: tu enfoque explicado, credenciales y testimonios a la vista y una primera conversación fácil de agendar.',
    en: 'We design your personal brand with the gravitas a board expects: your approach explained, credentials and testimonials in view, and an easy first conversation request.',
  },
  'us-fertility-clinics': {
    es: 'Diseñamos con calidez y claridad: tratamientos sin jerga, costos y financiamiento explicados con honestidad y la primera consulta sin presión.',
    en: 'We design with warmth and clarity: treatments without jargon, costs and financing explained honestly, and a first consultation without pressure.',
  },
  'us-food-brands': {
    es: 'Diseñamos para que la historia del producto se note: origen e ingredientes en fotos, recetas que inspiran y dónde comprarlo o regalarlo.',
    en: 'We design so the product’s story comes through: origin and ingredients in photos, recipes that inspire, and where to buy it or give it as a gift.',
  },
  'us-golf-communities': {
    es: 'Diseñamos para quien elige dónde vivir y jugar: el campo en fotos que lucen, residencias y membresías explicadas y la visita fácil de agendar.',
    en: 'We design for people choosing where to live and play: the course in striking photos, residences and memberships explained, and an easy visit request.',
  },
  'us-home-automation': {
    es: 'Diseñamos para mostrar proyectos, no equipos: casas reales con lo que hace cada sistema, una sección para arquitectos y constructores y la consulta fácil de pedir.',
    en: 'We design to show projects, not hardware: real homes and what each system does, a section for architects and builders, and an easy consultation request.',
  },
  'us-interior-designers': {
    es: 'Diseñamos un portafolio editorial que atrae al cliente correcto: proyectos en fotos a gran tamaño, tu proceso explicado y una consulta que pregunta lo necesario.',
    en: 'We design an editorial portfolio that attracts the right client: projects in large photos, your process explained, and an inquiry that asks the right questions.',
  },
  'us-longevity-clinics': {
    es: 'Diseñamos para explicar la ciencia sin perder lo premium: programas claros, el equipo médico con credenciales y una membresía fácil de entender.',
    en: 'We design to explain the science without losing the premium feel: clear programs, a medical team with credentials, and a membership that’s easy to understand.',
  },
  'us-luxury-brands': {
    es: 'Diseñamos con el ritmo de una boutique: colecciones con fotografía editorial, la historia de la marca y la atención personal a un clic.',
    en: 'We design at the pace of a boutique: collections in editorial photography, the brand’s story, and personal service one click away.',
  },
  'us-luxury-car-dealers': {
    es: 'Diseñamos el inventario como una galería: cada auto con fotos de detalle e historial, y la compra a distancia explicada paso a paso.',
    en: 'We design inventory like a gallery: every car with detail photos and history, and remote buying explained step by step.',
  },
  'us-luxury-home-builders': {
    es: 'Diseñamos para que tu obra hable por ti: casas terminadas en fotos a gran tamaño, tu proceso explicado y una solicitud que filtra proyectos serios.',
    en: 'We design so your work speaks for you: finished homes in large photos, your process explained, and an inquiry that filters for serious projects.',
  },
  'us-luxury-real-estate': {
    es: 'Diseñamos cada propiedad como una pieza única: fotografía a gran tamaño, el vecindario contado con contexto y un contacto discreto.',
    en: 'We design every property as a one-of-a-kind piece: large-format photography, the neighborhood told in context, and discreet contact.',
  },
  'us-luxury-vacation-rentals': {
    es: 'Diseñamos para que el huésped elija tu propiedad y no un portal: fotos que lucen, servicios de concierge claros y el camino a reservar directo.',
    en: 'We design so guests choose your property over a booking site: striking photos, clear concierge services, and a path to booking direct.',
  },
  'us-med-spas': {
    es: 'Diseñamos para la clienta que investiga antes de reservar: tratamientos explicados, el equipo médico a la vista y la solicitud de cita en un par de toques.',
    en: 'We design for clients who research before booking: treatments explained, the medical team in view, and an appointment request in a couple of taps.',
  },
  'us-nearshore': {
    es: 'Diseñamos con el estándar de una agencia estadounidense: diseño a la medida de tu marca, revisiones en tu horario y todo en inglés desde el primer día.',
    en: 'We design to the standard of a US agency: design tailored to your brand, reviews during your business hours, and everything in English from day one.',
  },
  'us-plastic-surgeons': {
    es: 'Diseñamos para el paciente que elige cirujano: tus credenciales al frente, procedimientos explicados con claridad y galerías de antes y después bien presentadas.',
    en: 'We design for patients choosing a surgeon: your credentials up front, procedures explained clearly, and well-presented before-and-after galleries.',
  },
  'us-pool-builders': {
    es: 'Diseñamos para que el cliente vea su patio terminado: portafolio por estilo, el proceso del diseño a la obra explicado y la consulta fácil de pedir.',
    en: 'We design so clients can picture their finished backyard: a portfolio by style, the design-to-build process explained, and an easy consultation request.',
  },
  'us-private-aviation': {
    es: 'Diseñamos con la precisión que espera quien vuela privado: flota y seguridad bien documentadas, membresías claras y la solicitud de cotización siempre a mano.',
    en: 'We design with the precision private flyers expect: fleet and safety well documented, clear memberships, and a quote request always at hand.',
  },
  'us-private-clubs': {
    es: 'Diseñamos para dos públicos: el prospecto que conoce el club por primera vez y el socio que busca eventos y avisos, cada uno con su propio camino.',
    en: 'We design for two audiences: prospects discovering the club for the first time and members looking for events and news, each with their own path.',
  },
  'us-private-equity': {
    es: 'Diseñamos con la sobriedad que espera un inversionista: tesis clara, portafolio ordenado y un equipo con trayectoria, sin adornos.',
    en: 'We design with the restraint investors expect: a clear thesis, an organized portfolio, and a team with a track record, without embellishment.',
  },
  'us-wealth-management': {
    es: 'Diseñamos para generar confianza antes de la primera reunión: tu filosofía explicada, el equipo con credenciales y las divulgaciones en su lugar.',
    en: 'We design to build trust before the first meeting: your philosophy explained, a team with credentials, and disclosures in their place.',
  },
  'us-wedding-planners': {
    es: 'Diseñamos un portafolio editorial que atrae a la pareja correcta: bodas reales, servicios claros y una consulta que pregunta lo necesario.',
    en: 'We design an editorial portfolio that attracts the right couples: real weddings, clear services, and an inquiry that asks the right questions.',
  },
  'us-wineries': {
    es: 'Diseñamos con el carácter de tu viñedo: cada vino con sus notas, catas y visitas fáciles de solicitar y el club explicado con claridad.',
    en: 'We design with your vineyard’s character: each wine with its tasting notes, tastings and visits easy to request, and the wine club explained clearly.',
  },
  'us-yacht-charters': {
    es: 'Diseñamos para quien planea días en altamar: embarcaciones con fotos y especificaciones, destinos e itinerarios y una consulta privada fácil de pedir.',
    en: 'We design for clients planning time at sea: yachts with photos and specs, destinations and itineraries, and an easy private inquiry.',
  },
};

/** UX/UI: [Arquitectura y flujos, Interfaz y prototipo]. */
export const UX_STEPS: Record<string, Record<Lang, [string, string]>> = {
  'ux-banca': {
    es: [
      'Ordenamos los trámites más frecuentes para que el cliente los resuelva sin ir a sucursal: qué ve, en qué orden y dónde se confirma cada operación.',
      'Diseñamos pantallas legibles para clientes de todas las edades, con la seguridad visible sin estorbar, y un prototipo navegable para validarlo antes de programar.',
    ],
    en: [
      'We map the most frequent transactions so customers complete them without visiting a branch: what they see, in what order, and where each operation is confirmed.',
      'We design readable screens for customers of every age, with security that’s visible without getting in the way, and a clickable prototype to validate before development.',
    ],
  },
  'ux-ecommerce': {
    es: [
      'Diseñamos el recorrido de la búsqueda al pago: cómo encuentra el producto, qué necesita para decidir y cada paso del checkout, pensando primero en el celular.',
      'Diseñamos fichas de producto, carrito y checkout con un sistema de componentes, y probamos el prototipo antes de programar para quitar fricción.',
    ],
    en: [
      'We design the journey from search to payment: how shoppers find a product, what they need to decide, and every checkout step, mobile first.',
      'We design product pages, cart, and checkout with a component system, and test the prototype before development to remove friction.',
    ],
  },
  'ux-energia': {
    es: [
      'Ordenamos la información técnica según quién la usa: el operador que monitorea, el cliente que revisa su consumo y el equipo que reporta.',
      'Diseñamos paneles y gráficas que se leen de un vistazo, con alertas claras, y un prototipo navegable para validarlo con tus operadores.',
    ],
    en: [
      'We organize technical information by who uses it: operators monitoring assets, customers checking consumption, and teams producing reports.',
      'We design dashboards and charts that read at a glance, with clear alerts, and a clickable prototype to validate with your operators.',
    ],
  },
  'ux-fintech': {
    es: [
      'Diseñamos el onboarding y los flujos de dinero paso a paso: registro, verificación de identidad, depósito y transferencia, con cada comisión visible.',
      'Diseñamos pantallas que transmiten seguridad, con saldos y movimientos fáciles de leer, y un prototipo navegable para probar el onboarding antes de programar.',
    ],
    en: [
      'We design onboarding and money flows step by step: sign-up, identity verification, deposits, and transfers, with every fee visible.',
      'We design screens that feel secure, with balances and transactions that are easy to read, and a clickable prototype to test onboarding before development.',
    ],
  },
  'ux-gobierno': {
    es: [
      'Convertimos cada trámite en pasos claros: qué documentos se piden, en qué orden y qué pasa al terminar, en lenguaje ciudadano.',
      'Diseñamos interfaces accesibles, con buen contraste y lectura sencilla, y un prototipo navegable para validarlo con ciudadanos antes de programar.',
    ],
    en: [
      'We turn each public service into clear steps: what documents are needed, in what order, and what happens at the end, in plain language.',
      'We design accessible interfaces with strong contrast and easy reading, and a clickable prototype to validate with citizens before development.',
    ],
  },
  'ux-healthcare': {
    es: [
      'Ordenamos los recorridos del paciente y del personal: citas, resultados y expedientes, con los datos sensibles solo donde hacen falta.',
      'Diseñamos pantallas accesibles para pacientes y eficientes para el personal, y un prototipo navegable para validarlo con ambos antes de programar.',
    ],
    en: [
      'We map patient and staff journeys: appointments, results, and records, with sensitive data only where it’s needed.',
      'We design screens that are accessible for patients and efficient for staff, and a clickable prototype to validate with both before development.',
    ],
  },
  'ux-healthtech': {
    es: [
      'Diseñamos los flujos de citas y telemedicina: cómo agenda el paciente, cómo entra a su consulta y qué ve el profesional en cada paso.',
      'Diseñamos interfaces accesibles para pacientes y paneles claros para profesionales, con un prototipo navegable para probarlos antes de programar.',
    ],
    en: [
      'We design appointment and telehealth flows: how patients book, how they join a visit, and what clinicians see at each step.',
      'We design accessible interfaces for patients and clear dashboards for clinicians, with a clickable prototype to test before development.',
    ],
  },
  'ux-inversiones': {
    es: [
      'Diseñamos el camino del registro al primer depósito y la lectura del portafolio: qué ve el inversionista y cómo entiende el riesgo antes de decidir.',
      'Diseñamos gráficas y pantallas de mercado legibles, con el riesgo explicado, y un prototipo navegable para validarlo antes de programar.',
    ],
    en: [
      'We design the path from sign-up to first deposit and how investors read their portfolio: what they see and how they understand risk before deciding.',
      'We design readable charts and market screens, with risk explained, and a clickable prototype to validate before development.',
    ],
  },
  'ux-logistica': {
    es: [
      'Ordenamos la operación por rol: el cliente que rastrea su envío, el operador en campo y el coordinador que asigna rutas.',
      'Diseñamos apps para usarse en movimiento y paneles que coordinan la operación, con un prototipo navegable para probarlo con tus operadores.',
    ],
    en: [
      'We organize operations by role: customers tracking shipments, drivers in the field, and coordinators assigning routes.',
      'We design apps built for use on the move and dashboards that coordinate operations, with a clickable prototype to test with your drivers.',
    ],
  },
  'ux-proptech': {
    es: [
      'Diseñamos el recorrido de la búsqueda al cierre: cómo encuentra el usuario la propiedad, cómo la compara y cómo avanza con el asesor o el propietario.',
      'Diseñamos fichas de propiedad, búsqueda y paneles para administradores con un sistema de componentes, y un prototipo navegable para validarlo.',
    ],
    en: [
      'We design the journey from search to closing: how users find a property, compare it, and move forward with the agent or owner.',
      'We design listing pages, search, and dashboards for managers with a component system, and a clickable prototype to validate it.',
    ],
  },
  'ux-saas': {
    es: [
      'Diseñamos el onboarding y los flujos clave hasta que el usuario llega a su primer resultado: qué configura, en qué orden y dónde se atora.',
      'Diseñamos dashboards y pantallas de configuración con un sistema de componentes escalable, y un prototipo navegable para validarlo antes de programar.',
    ],
    en: [
      'We design onboarding and key flows until users reach their first result: what they set up, in what order, and where they get stuck.',
      'We design dashboards and settings screens with a scalable component system, and a clickable prototype to validate before development.',
    ],
  },
  'ux-seguros': {
    es: [
      'Diseñamos el cotizador, la contratación y el reporte de siniestros paso a paso, con la cobertura explicada en cada decisión.',
      'Diseñamos pólizas que se entienden en pantalla y herramientas para agentes, con un prototipo navegable para probarlo antes de programar.',
    ],
    en: [
      'We design quoting, purchase, and claims reporting step by step, with coverage explained at every decision.',
      'We design policies that are easy to read on screen and tools for agents, with a clickable prototype to test before development.',
    ],
  },
  'ux-turismo': {
    es: [
      'Diseñamos el recorrido de la inspiración a la reserva y lo que pasa después: elegir la experiencia, pagar y recibir todo lo necesario para el viaje.',
      'Diseñamos pantallas que inspiran y se entienden en varios idiomas, con un prototipo navegable para validar la reserva antes de programar.',
    ],
    en: [
      'We design the journey from inspiration to booking and what comes after: choosing the experience, paying, and getting everything needed for the trip.',
      'We design screens that inspire and work across languages, with a clickable prototype to validate booking before development.',
    ],
  },
  'us-ux-ai-startups': {
    es: [
      'Diseñamos cómo trabaja el usuario con tu producto: qué le pide, cómo revisa lo que hizo la IA y dónde conserva el control.',
      'Diseñamos interfaces de chat y agentes que muestran qué está haciendo el sistema, con un prototipo navegable para probarlo con usuarios reales.',
    ],
    en: [
      'We design how users work with your product: what they ask for, how they review what the AI did, and where they stay in control.',
      'We design chat and agent interfaces that show what the system is doing, with a clickable prototype to test with real users.',
    ],
  },
  'us-ux-nearshore': {
    es: [
      'Ordenamos los flujos de tu producto junto con tu equipo de producto, en tu horario y en inglés, empezando por lo que más impacto tiene.',
      'Diseñamos las pantallas sobre un design system que tu equipo puede mantener, y un prototipo navegable para validarlo antes de programar.',
    ],
    en: [
      'We map your product’s flows alongside your product team, in your hours and in English, starting with what has the most impact.',
      'We design screens on a design system your team can maintain, and a clickable prototype to validate before development.',
    ],
  },
  'us-ux-wealthtech': {
    es: [
      'Diseñamos los recorridos del inversionista y del asesor: revisar el portafolio, entender el desempeño y preparar la siguiente reunión.',
      'Diseñamos visualizaciones de datos financieros que se leen sin esfuerzo, con un prototipo navegable para validarlas con asesores e inversionistas.',
    ],
    en: [
      'We design investor and advisor journeys: reviewing the portfolio, understanding performance, and preparing the next meeting.',
      'We design financial data visualizations that read effortlessly, with a clickable prototype to validate with advisors and investors.',
    ],
  },
};

type Step = LandingCopy['process']['steps'][number];

/** Paso "Diseño" del sector: su prioridad propia + la frase común (`base`). */
export const designStep = (id: string, lang: Lang, base: Step): Step =>
  WEB_DESIGN_STEP[id] ? { name: base.name, text: `${WEB_DESIGN_STEP[id][lang]} ${base.text}` } : base;

/** Pasos "Arquitectura y flujos" e "Interfaz y prototipo" del sector, o los comunes. */
export const uxSteps = (id: string, lang: Lang, flows: Step, ui: Step): [Step, Step] => {
  const own = UX_STEPS[id]?.[lang];
  return own ? [{ name: flows.name, text: own[0] }, { name: ui.name, text: own[1] }] : [flows, ui];
};
