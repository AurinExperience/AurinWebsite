/**
 * Baja los assets de R2 que se sirven en cada página (logos del slider, logo del
 * footer/header, imágenes de portafolio) y los deja en `public/` optimizados.
 *
 * Por qué: el bucket público de R2 responde SIN `Cache-Control`, así que cada
 * visita se vuelve a bajar 2.2 MB. Además los SVG son exports de Figma sin
 * limpiar — `aurinWhiteLogo.svg` son 263 KB de PNG en base64 dentro de un
 * `<pattern>`, `identidad.svg` 475 KB. Desde `public/` los agarra la regla
 * `immutable` que ya existe en vercel.json y salen en su tamaño real.
 *
 * Regla: SVG > 20 KB se rasteriza a WebP a 3x el alto de render; los SVG
 * limpios se copian tal cual (siguen siendo más ligeros y nítidos).
 *
 * Re-correr cuando cambie un logo:  node scripts/localize-assets.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const R2 = 'https://pub-d17bbbdbf8e348c5a57c8168ad69c92f.r2.dev';
const ROOT = path.resolve(import.meta.dirname, '..');

/** SVG por debajo de esto se copia sin tocar: ya es ligero y escala mejor. */
const RASTERIZE_OVER_BYTES = 20 * 1024;
/** Densidad para pantallas retina. */
const DPR = 3;

/** [ruta en R2, destino en public/, alto de render en CSS px] */
const LOGOS = [
  ['AntojosSabores.svg', 'logos/antojos-sabores', 80],
  ['Galicia.svg', 'logos/galicia', 72],
  ['InglesIndividual.svg', 'logos/ingles-individual', 60],
  ['Latiz.svg', 'logos/latiz', 108],
  ['MexicoPacific.svg', 'logos/mexico-pacific', 96],
  ['Pinnacle.svg', 'logos/pinnacle', 80],
  ['SinfonicadeMineria.svg', 'logos/sinfonica-mineria', 96],
  ['TioFrancisco%20.svg', 'logos/tio-francisco', 80],
  ['slider-clients/ancient.svg', 'logos/ancient', 80],
  ['slider-clients/bonanza.svg', 'logos/bonanza', 80],
  ['slider-clients/dentol.svg', 'logos/dentol', 80],
  ['slider-clients/elite.svg', 'logos/elite', 80],
  ['slider-clients/estrella.svg', 'logos/estrella', 80],
  ['slider-clients/fruit.svg', 'logos/fruit', 80],
  ['slider-clients/identidad.svg', 'logos/identidad', 80],
  ['slider-clients/ideograma.svg', 'logos/ideograma', 80],
  ['slider-clients/mexico.svg', 'logos/mexico', 80],
  ['slider-clients/monetix.svg', 'logos/monetix', 80],
  ['aurinWhiteLogo.svg', 'logos/aurin-white', 78], // 340px de ancho / ratio 398:77
  ['AurinTinyWhiteLogo.svg', 'logos/aurin-tiny-white', 40],
  ['Light.svg', 'logos/footer-glow', 445], // haz de luz del footer (1536x445)

  // Home + about + services
  ['Header-logo.svg', 'logos/aurin-header', 96], // hero de home, 32rem de ancho
  ['TopDesignGreen.svg', 'logos/topdesign', 28], // alturas de Alliances.module.css
  ['AncientLogo.svg', 'logos/ancient-tech', 16],
  ['IdeogramaGreen.svg', 'logos/ideograma-green', 24],
  ['identidapunto.svg', 'logos/identidapunto', 40],
  ['aldea-creativa.svg', 'logos/aldea-creativa', 46], // 2.9rem
  ['Instagram.svg', 'logos/instagram', 24],
  ['Linkedin.svg', 'logos/linkedin', 24],
  ['Facebook.svg', 'logos/facebook', 24],

  // Vectores decorativos (todos SVG limpios: solo se copian por el caché)
  ['Vector.svg', 'decor/vector', 200],
  ['LightSVG.svg', 'decor/light', 200],
  ['heroservices.svg', 'decor/hero-services', 200],
  ['Vector-hero-about.svg', 'decor/hero-about', 200],
  ['about-colaborative.svg', 'decor/about-collaborative', 200],
];

/** [ruta en R2, destino, ancho de render máximo en CSS px] */
const IMAGES = [
  ['ProjectGalicia.webp', 'work/galicia', 500],
  ['ProjectSinfonica.webp', 'work/sinfonica', 500],
  ['ProjectSai.webp', 'work/sai', 500],
  ['NosotrosImage.webp', 'work/nosotros', 1000], // a sangre; 2000px finales sobran para una foto decorativa
  ['about-how-did-we-get-here.png', 'work/our-story', 872], // clamp(400px, 60vw, 872px)
  ['DisenoColaboracionInnovacion.webp', 'work/collaborative', 700],
  ['Avatar_2%404x.webp', 'work/avatar', 96], // avatar del chatbot
];

const fetchBuffer = async (key) => {
  const res = await fetch(`${R2}/${key}`);
  if (!res.ok) throw new Error(`${key}: HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
};

const out = (dest, ext) => path.join(ROOT, 'public', `${dest}.${ext}`);

const manifest = [];

for (const [key, dest, cssHeight] of LOGOS) {
  const buf = await fetchBuffer(key);
  await mkdir(path.dirname(out(dest, 'x')), { recursive: true });

  if (buf.length <= RASTERIZE_OVER_BYTES) {
    await writeFile(out(dest, 'svg'), buf);
    const { width, height } = await sharp(buf).metadata();
    manifest.push({ dest: `${dest}.svg`, cssHeight, width, height, bytes: buf.length });
    continue;
  }

  const png = await sharp(buf, { density: 72 * DPR })
    .resize({ height: cssHeight * DPR })
    .webp({ quality: 90, effort: 6 })
    .toBuffer();
  await writeFile(out(dest, 'webp'), png);
  const { width, height } = await sharp(png).metadata();
  manifest.push({ dest: `${dest}.webp`, cssHeight, width, height, bytes: png.length, from: buf.length });
}

for (const [key, dest, cssWidth] of IMAGES) {
  const buf = await fetchBuffer(key);
  await mkdir(path.dirname(out(dest, 'x')), { recursive: true });
  const webp = await sharp(buf)
    .resize({ width: cssWidth * 2, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toBuffer();
  await writeFile(out(dest, 'webp'), webp);
  const { width, height } = await sharp(webp).metadata();
  manifest.push({ dest: `${dest}.webp`, width, height, bytes: webp.length, from: buf.length });
}

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
for (const m of manifest) {
  console.log(
    `${m.dest.padEnd(34)} ${String(m.width).padStart(5)}x${String(m.height).padEnd(5)} ${kb(m.bytes).padStart(9)}` +
      (m.from ? `  (antes ${kb(m.from)})` : '')
  );
}
console.log(
  `\ntotal: ${kb(manifest.reduce((a, m) => a + m.bytes, 0))}` +
    `  (antes ${kb(manifest.reduce((a, m) => a + (m.from ?? m.bytes), 0))})`
);
