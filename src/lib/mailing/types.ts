/**
 * Mailing Module Types
 * Shared types for email sending across the application
 */

export interface EmailAttachment {
  filename: string;
  url: string;
}

export interface ContactFormData {
  nombre: string;
  correo: string;
  servicio: string;
  asunto: string;
  mensaje: string;
  attachment?: EmailAttachment;
  // Lead context (origin + geolocation), filled in by the API route
  origen?: string; // page URL where the form was submitted
  referrer?: string; // where the visitor came from (or "Directo")
  ubicacion?: string; // "City, Region, Country" from Vercel geo headers
  ip?: string;
}

export interface TicketData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  description: string;
  ticketId?: string;
  createdAt?: string;
  fileUrl?: string;
  subject?: string;
}

export interface AppointmentData {
  name: string;
  email: string;
  appointmentDate: string; // ISO string
  meetLink: string;
  eventId: string;
  calendarLink: string;
  reason?: string; // Added for appointment notifications
}

export interface CancellationData {
  name: string;
  email: string;
  appointmentDate: string; // ISO string
  reason: 'not_confirmed' | 'user_requested';
}

export interface EmailResponse {
  success: boolean;
  id?: string;
  error?: string;
}
