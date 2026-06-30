/**
 * Email HTML Templates
 * Centralized email templates for consistent branding
 */

import type { ContactFormData, TicketData } from './types';

export const contactEmailTemplate = (data: ContactFormData): string => {
  const fecha = new Date().toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
    dateStyle: 'long',
    timeStyle: 'short',
  });

  // Reusable row for the labelled data tables
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; width: 130px; vertical-align: top; font-family: Arial, sans-serif;">${label}</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px; font-family: Arial, sans-serif;">${value}</td>
    </tr>`;

  const attachmentSection = data.attachment
    ? `
      <tr><td style="padding: 0 32px 24px;">
        <a href="${data.attachment.url}" target="_blank"
           style="display: inline-block; background: #D0DF00; color: #0A0A0A; text-decoration: none; font-weight: bold; font-size: 14px; padding: 12px 22px; border-radius: 8px; font-family: Arial, sans-serif;">
          📎 Descargar adjunto: ${data.attachment.filename}
        </a>
      </td></tr>`
    : '';

  const origen = data.origen
    ? `<a href="${data.origen}" style="color:#0A0A0A;" target="_blank">${data.origen}</a>`
    : 'No disponible';

  return `
  <div style="background: #f4f4f4; padding: 24px 0; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">

      <!-- Header -->
      <tr>
        <td style="background: #0A0A0A; padding: 28px 32px;">
          <div style="color: #D0DF00; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">Aurin</div>
          <div style="color: #ffffff; font-size: 22px; font-weight: bold; margin-top: 6px;">Nuevo mensaje de contacto</div>
        </td>
      </tr>

      <!-- Contact info -->
      <tr><td style="padding: 24px 32px 8px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          ${row('Nombre', data.nombre)}
          ${row('Correo', `<a href="mailto:${data.correo}" style="color:#0A0A0A;">${data.correo}</a>`)}
          ${row('Servicio', data.servicio)}
          ${row('Asunto', data.asunto)}
        </table>
      </td></tr>

      <!-- Message -->
      <tr><td style="padding: 16px 32px 8px;">
        <div style="background: #fafaf0; border-left: 4px solid #D0DF00; border-radius: 8px; padding: 16px 18px;">
          <div style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Mensaje</div>
          <div style="color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.mensaje}</div>
        </div>
      </td></tr>

      ${attachmentSection}

      <!-- Lead context -->
      <tr><td style="padding: 8px 32px 4px;">
        <div style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 12px 0 4px;">Origen del lead</div>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          ${row('Página', origen)}
          ${row('Procedencia', data.referrer || 'No disponible')}
          ${row('Ubicación', data.ubicacion || 'No disponible')}
          ${row('IP', data.ip || 'No disponible')}
        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="padding: 24px 32px; background: #fafafa; color: #999; font-size: 12px; line-height: 1.5;">
        Enviado desde el formulario de contacto de <strong>aurin.mx</strong><br>
        ${fecha}
      </td></tr>

    </table>
  </div>`;
};

export const ticketEmailTemplate = (data: TicketData): string => {
  const serviceSection = data.service && data.service !== 'No especificado'
    ? `
      <tr>
        <td style="padding: 8px 0; color: #000; font-family: Arial, sans-serif;">
          <strong>Servicio de interés:</strong> ${data.service}
        </td>
      </tr>
    `
    : '';

  const subjectLine = data.subject && data.subject !== 'Consulta general'
    ? `
      <tr>
        <td style="padding: 8px 0; color: #000; font-family: Arial, sans-serif;">
          <strong>Asunto:</strong> ${data.subject}
        </td>
      </tr>
    `
    : '';

  const attachmentSection = data.fileUrl
    ? `
      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
        <tr>
          <td style="padding: 15px; border-left: 4px solid #D0DF00; font-family: Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="color: #000; font-size: 16px; font-weight: bold; padding-bottom: 10px;">
                  Archivo adjunto:
                </td>
              </tr>
              <tr>
                <td>
                  <a href="${data.fileUrl}" 
                     style="color: #000; text-decoration: none; font-weight: 600; background: #D0DF00; padding: 12px 20px; display: inline-block; border-radius: 4px;"
                     target="_blank">
                    Ver archivo adjunto
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `
    : '';

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 700px; margin: 0 auto; background: #ffffff; font-family: Arial, sans-serif;">
      
      <!-- Header -->
      <tr>
        <td style="background: linear-gradient(135deg, #D0DF00 0%, #a8b800 100%); padding: 30px; text-align: center;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="color: #000; font-size: 24px; font-weight: bold; padding-bottom: 10px;">
                Nuevo Ticket de Soporte
              </td>
            </tr>
            <tr>
              <td style="color: #000; font-size: 16px;">
                Chatbot Aurin
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding: 30px;">
          
          <!-- Ticket Information -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8f9fa; margin-bottom: 25px;">
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color: #000; font-size: 18px; font-weight: bold; padding-bottom: 10px; border-bottom: 2px solid #D0DF00;">
                      Información del Ticket
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #000;">
                      <strong>ID del Ticket:</strong> ${data.ticketId}
                    </td>
                  </tr>
                  ${subjectLine}
                  <tr>
                    <td style="padding: 8px 0; color: #000;">
                      <strong>Fecha y Hora:</strong> ${new Date(data.createdAt || '').toLocaleString('es-ES', { timeZone: 'America/Mexico_City' })}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #000;">
                      <strong>Origen:</strong> Chatbot Web (aurin.mx)
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Client Information -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8f9fa; margin-bottom: 25px;">
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color: #000; font-size: 18px; font-weight: bold; padding-bottom: 10px; border-bottom: 2px solid #D0DF00;">
                      Información del Cliente
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #000;">
                      <strong>Nombre:</strong> ${data.name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #000;">
                      <strong>Email:</strong> <a href="mailto:${data.email}" style="color: #D0DF00; text-decoration: none;">${data.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #000;">
                      <strong>Empresa:</strong> ${data.company || 'No especificado'}
                    </td>
                  </tr>
                  ${serviceSection}
                </table>
              </td>
            </tr>
          </table>

          <!-- Description -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8f9fa; margin-bottom: 25px;">
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color: #000; font-size: 18px; font-weight: bold; padding-bottom: 10px; border-bottom: 2px solid #D0DF00;">
                      Descripción de la Solicitud
                    </td>
                  </tr>
                  <tr>
                    <td style="background: #fff; padding: 15px; border-left: 4px solid #D0DF00;">
                      <p style="line-height: 1.6; color: #000; margin: 0; font-family: Arial, sans-serif;">
                        ${data.description}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Attachment -->
          ${attachmentSection}

          <!-- Footer -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px; border-top: 1px solid #eee;">
            <tr>
              <td style="padding-top: 20px; text-align: center; color: #000; font-size: 12px;">
                <p style="margin: 5px 0;">Este ticket fue generado automáticamente por el chatbot de Aurin.</p>
                <p style="margin: 5px 0;">Sistema: n8n + OpenAI GPT-4o-mini | Workflow ID: Ticket Agent</p>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>
  `;
};

export const ticketConfirmationMessage = (data: TicketData): string => {
  return `✅ **Perfecto, ${data.name}!**

He creado un ticket de soporte y nuestro equipo te contactará a **${data.email}** muy pronto.

**📋 Detalles de tu ticket:**
- Número de ticket: **${data.ticketId}**
- Estado: En proceso
- Tiempo estimado de respuesta: 24 horas

**📧 Email de contacto:** [hey@aurin.mx](mailto:hey@aurin.mx)

Nos pondremos en contacto contigo dentro de las próximas 24 horas para atender tu solicitud personalmente.

¿Hay algo más en lo que pueda ayudarte mientras tanto?`;
};

export const appointmentCancellationEmail = (data: CancellationData): string => {
  const appointmentDateTime = new Date(data.appointmentDate).toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const reasonText = data.reason === 'not_confirmed'
    ? 'No confirmaste tu cita dentro del período de 24 horas requerido.'
    : 'Recibimos tu solicitud de cancelación.';

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; font-family: Arial, sans-serif;">

      <!-- Header -->
      <tr>
        <td style="background: linear-gradient(135deg, #666 0%, #444 100%); padding: 30px; text-align: center;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="color: #fff; font-size: 24px; font-weight: bold; padding-bottom: 10px;">
                Cita cancelada
              </td>
            </tr>
            <tr>
              <td style="color: #fff; font-size: 16px;">
                Aurin - Sistema de Citas
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding: 30px;">

          <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 20px;">
            Hola <strong>${data.name}</strong>,
          </p>

          <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 30px;">
            Lamentamos informarte que tu cita con Aurin ha sido cancelada.
          </p>

          <!-- Appointment Details -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8f9fa; margin-bottom: 25px;">
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color: #000; font-size: 18px; font-weight: bold; padding-bottom: 15px; border-bottom: 2px solid #D0DF00;">
                      Detalles de la cita cancelada
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #000;">
                      <strong>📅 Fecha y hora:</strong> ${appointmentDateTime}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #000;">
                      <strong>❌ Motivo:</strong> ${reasonText}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Reschedule CTA -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #fff3cd; border-left: 4px solid #ffc107; margin-bottom: 25px;">
            <tr>
              <td style="padding: 20px;">
                <p style="margin: 0; color: #856404; font-weight: bold; font-size: 16px;">
                  ¿Quieres agendar una nueva cita?
                </p>
                <p style="margin: 10px 0 0 0; color: #856404; line-height: 1.6;">
                  Puedes contactarnos directamente en <a href="mailto:hey@aurin.mx" style="color: #856404; text-decoration: underline;">hey@aurin.mx</a> o agendar una nueva cita a través de nuestro chatbot en <a href="https://aurin.mx" style="color: #856404; text-decoration: underline;">aurin.mx</a>
                </p>
              </td>
            </tr>
          </table>

          <p style="font-size: 14px; color: #666; line-height: 1.6; margin-top: 30px;">
            Si tienes alguna pregunta, no dudes en contactarnos en <a href="mailto:hey@aurin.mx" style="color: #D0DF00; text-decoration: none;">hey@aurin.mx</a>
          </p>

          <!-- Footer -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px; border-top: 1px solid #eee;">
            <tr>
              <td style="padding-top: 20px; text-align: center; color: #888; font-size: 12px;">
                <p style="margin: 5px 0;">Este email fue enviado automáticamente por el sistema de citas de Aurin.</p>
                <p style="margin: 5px 0;">© ${new Date().getFullYear()} Aurin. Todos los derechos reservados.</p>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>
  `;
};

export const appointmentConfirmationEmail = (
  data: AppointmentData,
  confirmUrl: string
): string => {
  const appointmentDateTime = new Date(data.appointmentDate).toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; font-family: Arial, sans-serif;">

      <!-- Header -->
      <tr>
        <td style="background: linear-gradient(135deg, #D0DF00 0%, #a8b800 100%); padding: 30px; text-align: center;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="color: #000; font-size: 24px; font-weight: bold; padding-bottom: 10px;">
                ¡Tu cita está reservada!
              </td>
            </tr>
            <tr>
              <td style="color: #000; font-size: 16px;">
                Aurin - Citas Rápidas
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding: 30px;">

          <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 20px;">
            Hola <strong>${data.name}</strong>,
          </p>

          <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 30px;">
            Tu cita con Aurin ha sido reservada exitosamente. Para confirmarla y asegurar tu lugar, haz clic en el botón de abajo.
          </p>

          <!-- Appointment Details -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8f9fa; margin-bottom: 25px;">
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color: #000; font-size: 18px; font-weight: bold; padding-bottom: 15px; border-bottom: 2px solid #D0DF00;">
                      Detalles de tu cita
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #000;">
                      <strong>📅 Fecha y hora:</strong> ${appointmentDateTime}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #000;">
                      <strong>⏱️ Duración:</strong> 30 minutos
                    </td>
                  </tr>
                  ${data.meetLink ? `
                  <tr>
                    <td style="padding: 12px 0; color: #000;">
                      <strong>🎥 Enlace de reunión:</strong> <a href="${data.meetLink}" style="color: #D0DF00; text-decoration: none;">${data.meetLink}</a>
                    </td>
                  </tr>
                  ` : `
                  <tr>
                    <td style="padding: 12px 0; color: #000;">
                      <strong>📞 Modalidad:</strong> Te contactaremos al email proporcionado con los detalles de la reunión
                    </td>
                  </tr>
                  `}
                </table>
              </td>
            </tr>
          </table>

          <!-- Important Notice -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #fff3cd; border-left: 4px solid #ffc107; margin-bottom: 25px;">
            <tr>
              <td style="padding: 20px;">
                <p style="margin: 0; color: #856404; font-weight: bold; font-size: 16px;">
                  ⚠️ IMPORTANTE
                </p>
                <p style="margin: 10px 0 0 0; color: #856404; line-height: 1.6;">
                  Tienes <strong>24 horas</strong> para confirmar tu cita. Si no la confirmas, será cancelada automáticamente para liberar el espacio.
                </p>
              </td>
            </tr>
          </table>

          <!-- CTA Button -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
            <tr>
              <td align="center">
                <a href="${confirmUrl}"
                   style="background: #D0DF00; color: #000; text-decoration: none; font-weight: bold; font-size: 18px; padding: 16px 40px; display: inline-block; border-radius: 8px;">
                  ✓ CONFIRMAR MI CITA
                </a>
              </td>
            </tr>
          </table>

          <p style="font-size: 14px; color: #666; line-height: 1.6; margin-top: 30px;">
            Si tienes alguna pregunta o necesitas reprogramar, responde a este email o contáctanos en <a href="mailto:hey@aurin.mx" style="color: #D0DF00; text-decoration: none;">hey@aurin.mx</a>
          </p>

          <!-- Footer -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px; border-top: 1px solid #eee;">
            <tr>
              <td style="padding-top: 20px; text-align: center; color: #888; font-size: 12px;">
                <p style="margin: 5px 0;">Este email fue enviado automáticamente por el sistema de citas de Aurin.</p>
                <p style="margin: 5px 0;">© ${new Date().getFullYear()} Aurin. Todos los derechos reservados.</p>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>
  `;
};
