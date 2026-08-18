/**
 * Catálogo de proyectos reales para la prueba social de las landings.
 *
 * Los nombres y los sectores salen del CMS (colección `projects`), no están
 * inventados. Cada landing elige 3 por afinidad de SECTOR, nunca por
 * geografía: decir que un cliente es de Tijuana cuando no lo es sería falso, y
 * además invita a que te pidan un caso local que no existe.
 *
 * Solo se declara nombre y sector porque es lo único verificable. La disciplina
 * exacta de cada proyecto no está documentada aquí, y aproximarla sería
 * inventar el entregable de un cliente real.
 *
 * ponytail: catálogo estático en vez de tirar de PayloadAPI. Los 20 proyectos
 * del CMS traen `placeholder-2.jpg` como banner, así que la API solo aportaría
 * los mismos dos campos que ya están aquí, a cambio de una llamada de red en el
 * render de cada landing. Cuando el CMS tenga banners reales, esto se cambia
 * por PayloadAPI.getFeaturedProjects() y se muestran también las imágenes.
 */

export interface ProofProject {
  name: string;
  sector: { es: string; en: string };
}

export const PROOF_PROJECTS: Record<string, ProofProject> = {
  galicia: { name: 'Galicia', sector: { es: 'Legal', en: 'Legal' } },
  sinfonica: {
    name: 'Orquesta Sinfónica de Minería',
    sector: { es: 'Cultura y música', en: 'Culture and music' },
  },
  ceiich: {
    name: 'CEIICH-UNAM',
    sector: { es: 'Educación e investigación', en: 'Education and research' },
  },
  monetix: { name: 'Monetix', sector: { es: 'Finanzas', en: 'Finance' } },
  bonanza: { name: 'Bonanza', sector: { es: 'Finanzas', en: 'Finance' } },
  fortrade: {
    name: 'Fortrade',
    sector: { es: 'Finanzas internacionales', en: 'International finance' },
  },
  debiti: { name: 'Debiti', sector: { es: 'Finanzas', en: 'Finance' } },
  elite: { name: 'Elite Home Health', sector: { es: 'Salud', en: 'Healthcare' } },
  dentol: { name: 'Dentol', sector: { es: 'Salud dental', en: 'Dental care' } },
  grupoEstrella: {
    name: 'Grupo Estrella',
    sector: { es: 'Construcción', en: 'Construction' },
  },
  mexicoPacific: { name: 'Mexico Pacific', sector: { es: 'Energía', en: 'Energy' } },
  ancient: {
    name: 'Ancient',
    sector: { es: 'Desarrollo de software', en: 'Software development' },
  },
  fruitAcademy: {
    name: 'Fruit Academy',
    sector: { es: 'Agroindustria y alimentos', en: 'Agribusiness and food' },
  },
  inglesIndividual: {
    name: 'Inglés Individual',
    sector: { es: 'Educación', en: 'Education' },
  },
  elRollo: {
    name: 'El Rollo',
    sector: { es: 'Turismo y recreación', en: 'Tourism and recreation' },
  },
  ideograma: { name: 'Ideograma', sector: { es: 'Diseño y marca', en: 'Design and brand' } },
  pfi: { name: 'PFI', sector: { es: 'Mascotas', en: 'Pets' } },
};

export type ProofProjectId = keyof typeof PROOF_PROJECTS;
