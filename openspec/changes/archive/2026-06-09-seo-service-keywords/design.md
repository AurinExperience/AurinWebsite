## Context

Los 5 servicios objetivo son exactamente las categorías de filtro que ya usa el sitio (`diseno-ux-ui`, `desarrollo-web-movil`, `desarrollo-branding`, `marketing-digital`, `pruebas-usabilidad`). El problema no es de arquitectura sino de copywriting: los meta textos actuales son demasiado abstractos ("comunicación visual", "soluciones creativas") y no mencionan los términos que los clientes escriben en Google.

Estado actual de las páginas más relevantes:
- **Services ES**: description menciona "branding, identidad corporativa, diseño UX/UI y estrategia digital" — cubre UX/UI y branding pero no menciona desarrollo web, pruebas de usabilidad ni marketing digital
- **Home ES**: description menciona "branding, identidad y diseño gráfico" — muy genérico, no lista servicios concretos
- **Projects ES**: no menciona las categorías de servicio, solo "diseño estratégico"

## Goals / Non-Goals

**Goals:**
- Cada uno de los 5 servicios objetivo aparece al menos una vez en keywords de alguna página
- La página de Servicios menciona los 5 servicios en su description o keywords sin verse como lista de spam
- Las descriptions conservan tono de agencia premium (no suenan a directorio de servicios)
- Longitud dentro de reglas ya establecidas: title ≤ 60 chars, description 120-155 chars

**Non-Goals:**
- Crear páginas de servicio individuales (eso sería otro cambio)
- Cambiar el title de ninguna página (los actuales ya son buenos)
- Modificar páginas de Privacy, Terms, Contact o About

## Decisions

### Decisión 1: Distribución de keywords entre páginas

Cada página tiene un foco principal para evitar canibalización:

| Página | Keyword primaria | Keywords de soporte |
|---|---|---|
| Services ES/EN | desarrollo branding + UX/UI + desarrollo web | pruebas usabilidad, marketing digital |
| Home ES/EN | branding + UX/UI | ecommerce, marketing digital |
| Projects ES/EN | UX/UI + branding | desarrollo web, casos éxito por categoría |

**Rationale:** La página de Servicios es la que más debe capturar búsquedas de servicio específico. Home refuerza las 2-3 más importantes. Proyectos las menciona en contexto de portafolio.

### Decisión 2: Lenguaje natural sobre keyword stuffing

En lugar de listar keywords: *"Diseño UX/UI, desarrollo web, branding, marketing digital, pruebas de usabilidad"* (spammy), usar frases que incluyan el término en contexto:

- ✗ Genérico: "Servicios de diseño UX/UI y desarrollo web en México"
- ✓ Natural: "Diseñamos apps e interfaces UX/UI que la gente quiere usar, construimos webs y ecommerce que venden, y creamos marcas que permanecen"

### Decisión 3: Variantes long-tail en el campo `keywords`

El campo `keywords` (invisible para usuarios) puede ser más directo. Ahí sí se incluyen variantes específicas: "agencia UX UI México", "desarrollo ecommerce México", "pruebas usabilidad app", "agencia marketing digital CDMX".

## Risks / Trade-offs

- **[Trade-off] Description más cargada de contenido** → Al incluir más servicios concretos en 120-155 chars, hay menos espacio para el CTA. Mitigación: mantener el CTA pero hacerlo más breve ("Cotiza hoy" en lugar de "Solicita tu propuesta personalizada").
- **[Riesgo] Descripción de Servicios intenta cubrir los 5 servicios** → Puede sonar a lista. Mitigación: agrupar servicios relacionados ("diseño UX/UI y desarrollo web", "branding y marketing digital") y dejar pruebas de usabilidad como diferenciador único.
