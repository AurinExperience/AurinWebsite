# Assets de Open Graph

- `aurin-og.png` (1200×630) — preview de OG/Twitter, valor por defecto de `SITE.ogImage`.
- `aurin-logo.png` (600×116) — logo raster para el schema `Organization`. Google prefiere
  PNG/JPG sobre SVG aquí.

Viven en `/public` a propósito. Antes apuntaban a un `.webp` en R2 que devolvía 404, así que
todas las previews y el logo del schema salían rotos sin que nadie se enterara.

## Regenerar

Requiere `sharp` (ya viene con Astro) y el logo fuente:

```bash
curl -s https://pub-d17bbbdbf8e348c5a57c8168ad69c92f.r2.dev/aurinWhiteLogo.svg -o /tmp/logo.svg
node -e "
const sharp=require('sharp');
const W=1200,H=630,BG='#0A0A0A',YELLOW='#D0DF00';
(async()=>{
  const logo = await sharp('/tmp/logo.svg').resize({width:520}).png().toBuffer();
  const bg = Buffer.from(\`<svg width='\${W}' height='\${H}' xmlns='http://www.w3.org/2000/svg'>
    <defs><radialGradient id='glow' cx='0.12' cy='0.18' r='0.85'>
      <stop offset='0%' stop-color='\${YELLOW}' stop-opacity='0.22'/>
      <stop offset='45%' stop-color='\${YELLOW}' stop-opacity='0.06'/>
      <stop offset='100%' stop-color='\${YELLOW}' stop-opacity='0'/>
    </radialGradient></defs>
    <rect width='\${W}' height='\${H}' fill='\${BG}'/>
    <rect width='\${W}' height='\${H}' fill='url(#glow)'/>
    <rect x='80' y='452' width='96' height='5' fill='\${YELLOW}'/>
    <text x='80' y='522' font-family='Helvetica,Arial,sans-serif' font-size='36' font-weight='600' fill='#FFFFFF'>Diseño UX/UI, desarrollo web y branding</text>
    <text x='80' y='568' font-family='Helvetica,Arial,sans-serif' font-size='27' font-weight='400' fill='#8E9089'>aurin.mx</text>
  </svg>\`);
  await sharp(bg).composite([{input:logo, top:175, left:80}]).png({compressionLevel:9}).toFile('public/og/aurin-og.png');
  await sharp('/tmp/logo.svg').resize({width:600}).flatten({background:BG}).png().toFile('public/og/aurin-logo.png');
})();
"
```

El texto usa Helvetica/Arial, no Urbanist: sharp rasteriza con las fuentes del sistema y no
tiene acceso a las webfonts. Si algún día importa que sea la tipografía de marca, hay que
pasar por una captura del navegador en vez de SVG plano.
