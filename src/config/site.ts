export const SITE = {
  // Igual que la ficha de Google Business Profile. "Aurin" a secas va como alternateName.
  name: "Aurin User Experts",
  alternateName: "Aurin",
  url: "https://aurin.mx",
  // Assets servidos desde /public: antes apuntaban a un .webp en R2 que daba 404,
  // así que el logo del schema y todas las previews de OG salían rotas.
  // Regenerar con el script de public/og/README.md si cambia la marca.
  logoUrl: "https://aurin.mx/og/aurin-logo.png",
  ogImage: "https://aurin.mx/og/aurin-og.png",
  contactEmail: "hey@aurin.mx",
  // Botón flotante de WhatsApp (formato wa.me: solo dígitos, con lada de país).
  // Mismo número que `telephone` (el de la ficha de Google Business Profile).
  whatsapp: "527773272365",
  // `sameAs` = otros perfiles OFICIALES de Aurin, no sitios de terceros. Antes
  // apuntaba a aldeacreativa.mx, que es el coworking donde estamos, no una
  // identidad de Aurin: eso le decía a Google que ambas marcas son la misma entidad.
  sameAs: [
    "https://www.instagram.com/aurinmx",
    "https://www.linkedin.com/company/aurinmx/",
    "https://www.facebook.com/profile.php?id=61569531232140",
    // Ficha de Google Business Profile por su ID del Knowledge Graph (kgmid): a
    // diferencia de los links de share.google, no caduca ni depende de la sesión.
    "https://www.google.com/search?kgmid=/g/11zkyjfy49"
  ] as string[],

  // NAP (Name, Address, Phone) — la base del SEO local. Tiene que coincidir
  // CARÁCTER POR CARÁCTER con la ficha de Google Business Profile: una calle o
  // un teléfono escritos distinto valen como dos negocios diferentes.
  //
  // El domicilio es Cuernavaca; la landing de Nuevo León se sostiene como área
  // de servicio (`areaServed`), no como presencia física. Esa distinción es la
  // que Google pide: se puede atender Monterrey a distancia, pero no aparecer
  // en su paquete local sin estar ahí.
  telephone: "+52 777 327 2365",
  address: {
    streetAddress: "San Jerónimo 207, Tlaltenango",
    addressLocality: "Cuernavaca",
    addressRegion: "Morelos",
    postalCode: "62170",
    addressCountry: "MX"
  },
  // Pin de la ficha de Google Business Profile. `cid` es el ID estable del lugar
  // (los links maps.app.goo.gl son redirecciones de un solo uso para compartir).
  mapsUrl: "https://maps.google.com/?cid=17105070640348628758",
  // Enlace de "Solicita opiniones" de la ficha (abre directo el formulario de reseña).
  reviewUrl: "https://g.page/r/CRaH8e8ea2HtEAE/review",
  geo: { latitude: 18.9389376, longitude: -99.2468182 },
  // Igual que el horario de la ficha. Formato schema.org: días en inglés, 24 h.
  openingHours: {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00"
  }
};
