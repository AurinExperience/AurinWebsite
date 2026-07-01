<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap · Aurin</title>
        <style>
          :root { --yellow: #D0DF00; --black: #0A0A0A; --gray: #6b6b6b; }
          * { box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; margin: 0; color: var(--black); background: #f6f6f4; }
          header { background: var(--black); color: #fff; padding: 28px 24px; }
          header .brand { color: var(--yellow); font-size: 13px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; }
          header h1 { margin: 6px 0 4px; font-size: 22px; font-weight: 700; }
          header p { margin: 0; color: #b9b9b9; font-size: 14px; }
          .wrap { max-width: 1100px; margin: 0 auto; padding: 24px; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.06); }
          th { text-align: left; font-size: 12px; text-transform: uppercase; letter-spacing: .5px; color: var(--gray); padding: 12px 16px; border-bottom: 2px solid #eee; background: #fafafa; }
          td { padding: 12px 16px; border-bottom: 1px solid #f0f0f0; font-size: 14px; vertical-align: top; }
          tr:last-child td { border-bottom: 0; }
          tr:hover td { background: #fcfcf5; }
          a { color: #0a58ca; text-decoration: none; word-break: break-all; }
          a:hover { text-decoration: underline; }
          .muted { color: var(--gray); white-space: nowrap; }
          .tag { display: inline-block; background: var(--yellow); color: var(--black); font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 20px; margin-right: 4px; }
          .count { font-weight: 700; color: var(--yellow); }
        </style>
      </head>
      <body>
        <header>
          <div class="brand">Aurin</div>
          <h1>Sitemap XML</h1>
          <p><span class="count"><xsl:value-of select="count(s:urlset/s:url)"/></span> URLs indexables · para motores de búsqueda</p>
        </header>
        <div class="wrap">
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Idiomas</th>
                <th>Última modificación</th>
                <th>Frecuencia</th>
                <th>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                  <td>
                    <xsl:for-each select="xhtml:link">
                      <span class="tag"><xsl:value-of select="@hreflang"/></span>
                    </xsl:for-each>
                  </td>
                  <td class="muted"><xsl:value-of select="s:lastmod"/></td>
                  <td class="muted"><xsl:value-of select="s:changefreq"/></td>
                  <td class="muted"><xsl:value-of select="s:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
