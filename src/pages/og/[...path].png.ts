import type { APIRoute } from "astro";
import sharp from "sharp";
import { create, type Font } from "fontkitten";
import { SITE } from "@/config/site";

export const prerender = false;

/*
 * Imagen OG por página (1200×630) con el título de la página.
 * /og/index.png → "/", /og/en/services.png → "/en/services".
 *
 * Con una sola imagen genérica, cada página citada por ChatGPT, Perplexity o
 * un link compartido mostraba la misma miniatura. El título sale del <title>
 * real de la página (no de la URL), así nadie puede pintar texto arbitrario
 * con el dominio de Aurin.
 *
 * El texto se convierte a trazos con fontkitten: el runtime de Vercel no trae
 * fuentes instaladas, y un <text> en el SVG saldría en blanco.
 */

const W = 1200;
const H = 630;
const BG = "#0A0A0A";
const YELLOW = "#D0DF00";
const PAD = 80;

let assets: Promise<{ fonts: Font[]; logo: string }> | undefined;

async function loadAssets(origin: string) {
  const get = (p: string) => fetch(new URL(p, origin)).then((r) => r.arrayBuffer());
  const [latin, latinExt, logo] = await Promise.all([
    get("/fonts/titillium-web-700-normal-latin.woff2"),
    get("/fonts/titillium-web-700-normal-latin-ext.woff2"),
    get("/logos/aurin-header.svg"),
  ]);
  return {
    fonts: [latin, latinExt].map((b) => create(Buffer.from(b)) as Font),
    logo: Buffer.from(logo).toString("base64"),
  };
}

function glyphFor(fonts: Font[], char: string) {
  const cp = char.codePointAt(0)!;
  for (const font of fonts) {
    const glyph = font.glyphForCodePoint(cp);
    if (glyph.id !== 0) return { font, glyph };
  }
  return { font: fonts[0], glyph: fonts[0].glyphForCodePoint(cp) };
}

function measure(fonts: Font[], text: string, size: number) {
  let w = 0;
  for (const ch of text) {
    const { font, glyph } = glyphFor(fonts, ch);
    w += (glyph.advanceWidth * size) / font.unitsPerEm;
  }
  return w;
}

function wrap(fonts: Font[], text: string, size: number, maxWidth: number) {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (line && measure(fonts, next, size) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textPaths(fonts: Font[], text: string, size: number, x: number, y: number, fill: string) {
  let out = "";
  for (const ch of text) {
    const { font, glyph } = glyphFor(fonts, ch);
    const s = size / font.unitsPerEm;
    const d = glyph.path.toSVG();
    if (d) out += `<path transform="translate(${x.toFixed(1)} ${y}) scale(${s} ${-s})" d="${d}"/>`;
    x += glyph.advanceWidth * s;
  }
  return `<g fill="${fill}">${out}</g>`;
}

// "Diseño Web y UX/UI en Monterrey | Aurin" → "Diseño Web y UX/UI en Monterrey"
function cleanTitle(raw: string) {
  const decoded = raw
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
  return decoded.split(" | ").find((part) => part.trim() !== "Aurin")?.trim() || "Aurin";
}

export const GET: APIRoute = async ({ params, url, redirect }) => {
  const slug = (params.path ?? "index").replace(/^\/+/, "");
  const pagePath = slug === "index" ? "/" : `/${slug}`;

  // Sin seguir redirects: una ruta que manda al home no debe heredar su título.
  const page = await fetch(new URL(pagePath, url.origin), { redirect: "manual" });
  const title = page.ok ? (await page.text()).match(/<title>([^<]*)<\/title>/)?.[1] : undefined;
  if (!title) return redirect(SITE.ogImage, 302);

  assets ??= loadAssets(url.origin).catch((e) => {
    assets = undefined;
    throw e;
  });
  const { fonts, logo } = await assets;

  // Títulos largos bajan de tamaño antes de cortarse a tres líneas.
  const maxWidth = W - PAD * 2;
  let size = 76;
  let lines = wrap(fonts, cleanTitle(title), size, maxWidth);
  if (lines.length > 2) {
    size = 60;
    lines = wrap(fonts, cleanTitle(title), size, maxWidth).slice(0, 3);
  }
  const lineHeight = size * 1.12;
  const lastBaseline = 470;
  const firstBaseline = lastBaseline - lineHeight * (lines.length - 1);
  const titleSvg = lines
    .map((line, i) => textPaths(fonts, line, size, PAD, firstBaseline + i * lineHeight, "#FFFFFF"))
    .join("");
  const footer = textPaths(fonts, `aurin.mx${pagePath === "/" ? "" : pagePath}`, 28, PAD, 560, "#8E9089");

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs><radialGradient id="glow" cx="0.12" cy="0.18" r="0.85">
      <stop offset="0%" stop-color="${YELLOW}" stop-opacity="0.22"/>
      <stop offset="45%" stop-color="${YELLOW}" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="${YELLOW}" stop-opacity="0"/>
    </radialGradient></defs>
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <rect width="${W}" height="${H}" fill="url(#glow)"/>
    <image x="${PAD}" y="${PAD}" width="266" height="48" xlink:href="data:image/svg+xml;base64,${logo}"/>
    <rect x="${PAD}" y="${firstBaseline - size - 28}" width="96" height="5" fill="${YELLOW}"/>
    ${titleSvg}
    ${footer}
  </svg>`;

  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      // El CDN de Vercel la guarda una semana: se genera una vez por página, no por visita.
      "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
    },
  });
};
