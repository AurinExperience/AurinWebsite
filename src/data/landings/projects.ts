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
 * Nombre y sector son fijos; la imagen (miniatura del CMS) y el enlace al caso
 * salen de Payload por `cmsId` (ver SocialProof.astro).
 */

export interface ProofProject {
  /** ID del proyecto en Payload: de ahí salen la miniatura y el enlace del caso */
  cmsId: string;
  name: string;
  sector: { es: string; en: string };
}

export const PROOF_PROJECTS: Record<string, ProofProject> = {
  galicia: { cmsId: '68f7bc40151925a565531d9e', name: 'Galicia', sector: { es: 'Legal', en: 'Legal' } },
  sinfonica: {
    cmsId: '68f6b1b0bf7d2ebdea83527b',
    name: 'Orquesta Sinfónica de Minería',
    sector: { es: 'Cultura y música', en: 'Culture and music' },
  },
  ceiich: {
    cmsId: '691228b5be422963797e0f84',
    name: 'CEIICH-UNAM',
    sector: { es: 'Educación e investigación', en: 'Education and research' },
  },
  monetix: { cmsId: '69122ce23c0985e0017a903a', name: 'Monetix', sector: { es: 'Finanzas', en: 'Finance' } },
  bonanza: { cmsId: '69122bd5be422963797e1049', name: 'Bonanza', sector: { es: 'Finanzas', en: 'Finance' } },
  fortrade: {
    cmsId: '69122af9be422963797e101a',
    name: 'Fortrade',
    sector: { es: 'Finanzas internacionales', en: 'International finance' },
  },
  debiti: { cmsId: '69122b90e9c8699e389f744b', name: 'Debiti', sector: { es: 'Finanzas', en: 'Finance' } },
  elite: { cmsId: '69122d25e9c8699e389f74e2', name: 'Elite Home Health', sector: { es: 'Salud', en: 'Healthcare' } },
  dentol: { cmsId: '69122c5dbe422963797e1082', name: 'Dentol', sector: { es: 'Salud dental', en: 'Dental care' } },
  grupoEstrella: {
    cmsId: '69122a15e9c8699e389f73b0',
    name: 'Grupo Estrella',
    sector: { es: 'Construcción', en: 'Construction' },
  },
  mexicoPacific: { cmsId: '6912284ce6e9a8af0f4efe0f', name: 'Mexico Pacific', sector: { es: 'Energía', en: 'Energy' } },
  ancient: {
    cmsId: '68f7bfa7427889a642a101d7',
    name: 'Ancient',
    sector: { es: 'Desarrollo de software', en: 'Software development' },
  },
  fruitAcademy: {
    cmsId: '691229533c0985e0017a8ed4',
    name: 'Fruit Academy',
    sector: { es: 'Agroindustria y alimentos', en: 'Agribusiness and food' },
  },
  inglesIndividual: {
    cmsId: '69122c1ae9c8699e389f747b',
    name: 'Inglés Individual',
    sector: { es: 'Educación', en: 'Education' },
  },
  elRollo: {
    cmsId: '69122992e9c8699e389f7358',
    name: 'El Rollo',
    sector: { es: 'Turismo y recreación', en: 'Tourism and recreation' },
  },
  ideograma: { cmsId: '691228f8e9c8699e389f7319', name: 'Ideograma', sector: { es: 'Diseño y marca', en: 'Design and brand' } },
  pfi: { cmsId: '69122c9d3c0985e0017a900e', name: 'PFI', sector: { es: 'Mascotas', en: 'Pets' } },
};

export type ProofProjectId = keyof typeof PROOF_PROJECTS;
