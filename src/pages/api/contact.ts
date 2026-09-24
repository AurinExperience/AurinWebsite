import type { APIRoute } from 'astro';
import { sendContactEmail } from '@/lib/mailing/service';
import type { ContactFormData } from '@/lib/mailing/types';
import { leadContext } from '@/lib/mailing/leadContext';

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const body = await request.text();
    if (!body) {
      return new Response(
        JSON.stringify({ error: 'Cuerpo de la petición vacío' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = JSON.parse(body);
    const { nombre, correo, telefono, contacto, servicio, asunto, mensaje, fileUrl, filename, sumaA, sumaB, sumaRespuesta, origen, referrer } = data;

    // Validación básica
    if (!nombre || !correo || !telefono || !contacto || !servicio || !asunto || !mensaje) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Teléfono: 10 a 15 dígitos, admite +, espacios, guiones y paréntesis
    const phoneDigits = String(telefono).replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return new Response(
        JSON.stringify({ error: 'Teléfono inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const contactoLabels: Record<string, string> = {
      whatsapp: 'WhatsApp',
      llamada: 'Llamada telefónica',
      videollamada: 'Videollamada',
      correo: 'Correo electrónico',
    };
    if (!contactoLabels[contacto]) {
      return new Response(
        JSON.stringify({ error: 'Medio de contacto inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Anti-spam: re-check the manual sum server-side
    if (Number(sumaA) + Number(sumaB) !== Number(sumaRespuesta)) {
      return new Response(
        JSON.stringify({ error: 'Verificación anti-spam incorrecta' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { ubicacion, ip } = leadContext(request, clientAddress);

    // Map the service slug to its readable label for the email
    const serviciosLabels: Record<string, string> = {
      'diseno-ux-ui': 'Diseño UX/UI',
      'desarrollo-web-movil': 'Desarrollo web y aplicaciones móviles',
      'desarrollo-branding': 'Desarrollo de Branding',
      'marketing-digital': 'Marketing digital y redes sociales',
      'pruebas-usabilidad': 'Pruebas de usabilidad',
      'otro': 'Otro',
      // Tipos de proyecto del LeadForm de las landings
      'sitio-web': 'Sitio web corporativo',
      'ux-ui': 'Diseño UX/UI',
      'landing-page': 'Landing page',
      'rediseno': 'Rediseño de sitio web',
    };
    const servicioLabel = serviciosLabels[servicio] || servicio;

    console.log('Intentando enviar email con datos:', { nombre, correo, telefono, contacto, servicio, asunto, mensaje, fileUrl });

    // Prepare contact form data
    const contactData: ContactFormData = {
      nombre,
      correo,
      telefono: String(telefono),
      contacto: contactoLabels[contacto],
      servicio: servicioLabel,
      asunto,
      mensaje,
      attachment: fileUrl && filename ? { filename, url: fileUrl } : undefined,
      origen,
      referrer,
      ubicacion,
      ip,
    };

    // Send email using centralized service
    const result = await sendContactEmail(contactData);

    if (!result.success) {
      throw new Error(result.error || 'Failed to send email');
    }

    console.log('Email enviado exitosamente:', result.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email enviado correctamente',
        id: result.id
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error enviando email:', error);

    return new Response(
      JSON.stringify({
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : 'Error desconocido'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
