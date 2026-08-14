export const SITE = {
  name: "Aurin",
  url: "https://aurin.mx",
  // Assets servidos desde /public: antes apuntaban a un .webp en R2 que daba 404,
  // así que el logo del schema y todas las previews de OG salían rotas.
  // Regenerar con el script de public/og/README.md si cambia la marca.
  logoUrl: "https://aurin.mx/og/aurin-logo.png",
  ogImage: "https://aurin.mx/og/aurin-og.png",
  contactEmail: "hey@aurin.mx",
  // `sameAs` = otros perfiles OFICIALES de Aurin, no sitios de terceros. Antes
  // apuntaba a aldeacreativa.mx, que es el coworking donde estamos, no una
  // identidad de Aurin: eso le decía a Google que ambas marcas son la misma entidad.
  sameAs: [
    "https://www.instagram.com/aurinmx",
    "https://www.linkedin.com/company/aurinmx/",
    "https://www.facebook.com/profile.php?id=61569531232140"
  ] as string[]
};
