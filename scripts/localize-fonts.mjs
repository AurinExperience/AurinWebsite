/**
 * Auto-hospeda las Google Fonts en public/fonts/ y genera src/styles/fonts.css.
 *
 * Por qué: cargarlas desde Google encadena dos orígenes antes de que se pueda
 * pintar texto con la tipografía real — HTML -> fonts.googleapis.com (el CSS)
 * -> fonts.gstatic.com (los woff2). En móvil eso son dos handshakes TLS que no
 * empiezan hasta que el HTML llegó. Desde public/ salen del mismo origen, sobre
 * la conexión ya abierta, y les aplica el `immutable` de vercel.json.
 *
 * Se piden solo los pesos que el sitio usa de verdad (ver tokens/typography.css):
 * la URL anterior traía Titillium en 11 variantes, incluidas 900 e itálicas que
 * ningún CSS referencia.
 *
 * Re-correr si cambian los pesos:  node scripts/localize-fonts.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'fonts');

/* UA de Chrome moderno: sin esto la API v2 devuelve ttf en vez de woff2. */
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

/* Solo los subsets que necesita un sitio en español/inglés. */
const KEEP_SUBSETS = new Set(['latin', 'latin-ext']);

const FAMILIES = [
  // Urbanist es variable: un solo archivo cubre 100..900.
  'Urbanist:ital,wght@0,100..900;1,100..900',
  // Titillium solo en los pesos que aparecen en el CSS del sitio.
  'Titillium+Web:wght@200;300;400;600;700',
];

const url = `https://fonts.googleapis.com/css2?${FAMILIES.map((f) => `family=${f}`).join(
  '&'
)}&display=swap`;

const css = await fetch(url, { headers: { 'User-Agent': UA } }).then((r) => {
  if (!r.ok) throw new Error(`Google Fonts respondió ${r.status}`);
  return r.text();
});

await mkdir(OUT_DIR, { recursive: true });

/* La respuesta viene como bloques `/* subset *​/ @font-face {...}` */
const blocks = css.split('/*').filter((b) => b.includes('@font-face'));
const out = [];
let downloaded = 0;
let bytes = 0;

for (const block of blocks) {
  const subset = block.slice(0, block.indexOf('*/')).trim();
  if (!KEEP_SUBSETS.has(subset)) continue;

  const face = block.slice(block.indexOf('@font-face'));
  const remote = face.match(/url\((https:\/\/[^)]+\.woff2)\)/)?.[1];
  if (!remote) continue;

  const family = face.match(/font-family:\s*'([^']+)'/)[1];
  const style = face.match(/font-style:\s*([^;]+);/)[1].trim();
  const weight = face.match(/font-weight:\s*([^;]+);/)[1].trim();

  const name = `${family.toLowerCase().replace(/\s+/g, '-')}-${weight.replace(
    /\s+/g,
    '-'
  )}-${style}-${subset}.woff2`;

  const buf = Buffer.from(await fetch(remote).then((r) => r.arrayBuffer()));
  await writeFile(path.join(OUT_DIR, name), buf);
  downloaded++;
  bytes += buf.length;

  out.push(
    face
      .replace(/url\(https:\/\/[^)]+\.woff2\)/, `url('/fonts/${name}')`)
      .replace(/^@font-face/, `/* ${subset} */\n@font-face`)
      .trim()
  );
  console.log(
    `${name.padEnd(48)} ${(buf.length / 1024).toFixed(1).padStart(6)} KB`
  );
}

const header = `/* Generado por scripts/localize-fonts.mjs — no editar a mano.
   Auto-hospedadas para no encadenar fonts.googleapis.com + fonts.gstatic.com
   antes del primer pintado de texto. */\n\n`;

await writeFile(path.join(ROOT, 'src', 'styles', 'fonts.css'), header + out.join('\n\n') + '\n');

console.log(`\n${downloaded} archivos, ${(bytes / 1024).toFixed(1)} KB -> public/fonts/`);
console.log('src/styles/fonts.css regenerado');
