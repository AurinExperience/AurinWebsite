# Chatbot Search Module

Módulo de búsqueda interactiva con efecto glass y respuestas de chatbot.

## 📁 Estructura

```
chatbot-search/
├── ChatbotSearchContainer.astro  # Contenedor principal Astro
├── ChatbotInterface.tsx          # Lógica del chatbot (maneja estado)
├── SearchInput.tsx               # Input con typewriter effect
├── SearchInput.module.css        # Estilos del input
├── ChatbotResponse.tsx           # Componente de respuesta
├── ChatbotResponse.module.css    # Estilos de respuesta
├── GlassEffect.tsx               # Efecto glass con filtros SVG
├── GlassEffect.module.css        # Estilos del efecto glass
├── useTypewriter.ts              # Hook para efecto typewriter
├── mockResponses.ts              # Respuestas mock del chatbot
├── index.ts                      # Exportaciones del módulo
└── README.md                     # Documentación
```

## 🎯 Uso

```astro
---
import ChatbotSearchContainer from '@/components/modules/chatbot-search/ChatbotSearchContainer.astro';
---

<ChatbotSearchContainer />
```

## ✨ Características

- **Efecto Glass**: Textura liquid glass con múltiples capas y blur
- **Typewriter Effect**: Placeholder animado que alterna entre servicios
- **IA Real**: Conectado a n8n API con modo 'search' para respuestas cortas e inteligentes
- **Respuestas Contextuales**: Solo sobre servicios de Aurin, limitadas a 2-3 oraciones
- **Animaciones Suaves**: Usando Motion (framer-motion)
- **100% CSS Modules**: Sin Tailwind, todo en CSS puro
- **Accesible**: Labels, ARIA attributes, navegación por teclado
- **Responsive**: Adaptado para móvil y desktop

## 🔧 Componentes

### ChatbotInterface
Componente principal que maneja toda la lógica del chatbot.
- Conecta con `/api/chat` usando `mode: 'search'`
- Genera sessionId único con nanoid
- Manejo de errores y loading states
- Respuestas cortas y contextuales sobre servicios

### SearchInput
Input con efecto typewriter y botón de submit.

### ChatbotResponse
Muestra la respuesta del chatbot con animación.

### GlassEffect
Efecto visual de vidrio líquido con filtros SVG.

## 🔌 Integración con API

El chatbot-search consume la misma API que el chatbot principal (`/api/chat`) pero con `mode: 'search'`:

```typescript
fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({
    message: query,
    sessionId: sessionId,
    mode: 'search', // ← Activa respuestas cortas
    metadata: {
      source: 'chatbot-search'
    }
  })
})
```

El modo 'search' instruye a n8n para:
- Limitar respuestas a 2-3 oraciones máximo
- Enfocarse solo en servicios de Aurin
- No mencionar agendamiento de citas ni funcionalidades del chatbot completo

## 📝 Servicios

Los servicios que se muestran en el typewriter:
- Desarrollo web y plataformas
- Pruebas de usabilidad
- Desarrollo de Branding
- Diseño UX/UI
- Consultoría Digital
