/**
 * Google Calendar Service
 * Direct integration with Google Calendar API
 *
 * ponytail: usa la REST API v3 con fetch en vez del SDK `googleapis` (189 MB
 * para tres endpoints). Si algún día se necesitan muchos más endpoints o
 * paginación compleja, volver al SDK es un import.
 */

import { JWT } from 'google-auth-library';

// Calendar ID for "Citas de Aurin.mx"
const CALENDAR_ID = 'd8ef031d15c90593c2688e6aa89081c0f2cca90a18c32ddf14243b792d81f3a7@group.calendar.google.com';

const API_BASE = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events`;

const credentials = {
  client_email: import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: import.meta.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

export interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: string;
  end: string;
  htmlLink?: string;
  hangoutLink?: string;
  attendees?: string[];
  confirmed?: string;
  createdAt?: string;
  customerName?: string;
  customerEmail?: string;
}

export class GoogleCalendarService {
  private auth: JWT;

  constructor() {
    this.auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
  }

  private async request(path: string, init: RequestInit = {}): Promise<any> {
    const { token } = await this.auth.getAccessToken();

    const response = await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...init.headers,
      },
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Google Calendar ${response.status} ${response.statusText}: ${body}`);
    }

    // events.delete responde 204 sin cuerpo
    return response.status === 204 ? null : response.json();
  }

  async getEvents(startDate: Date, endDate: Date): Promise<CalendarEvent[]> {
    const params = new URLSearchParams({
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      singleEvents: 'true',
      orderBy: 'startTime',
      maxResults: '2500',
    });

    const data = await this.request(`?${params}`);

    return data.items?.map((event: any) => ({
      id: event.id!,
      summary: event.summary || '',
      description: event.description,
      start: event.start?.dateTime || event.start?.date || '',
      end: event.end?.dateTime || event.end?.date || '',
      htmlLink: event.htmlLink,
      hangoutLink: event.hangoutLink,
      attendees: event.attendees?.map((a: any) => a.email || ''),
      confirmed: event.extendedProperties?.private?.confirmed,
      createdAt: event.extendedProperties?.private?.createdAt,
      customerName: event.extendedProperties?.private?.customerName,
      customerEmail: event.extendedProperties?.private?.customerEmail,
    })) || [];
  }

  async deleteEvent(eventId: string): Promise<void> {
    await this.request(`/${encodeURIComponent(eventId)}?sendUpdates=all`, {
      method: 'DELETE',
    });
  }

  async createEvent(data: {
    summary: string;
    description: string;
    start: string;
    end: string;
    attendees: string[];
    customerName: string;
    customerEmail: string;
  }): Promise<CalendarEvent> {
    // sendUpdates=none: no mandamos invitaciones de Google Calendar
    const event = await this.request('?sendUpdates=none', {
      method: 'POST',
      body: JSON.stringify({
        summary: data.summary,
        description: data.description,
        start: { dateTime: data.start, timeZone: 'America/Mexico_City' },
        end: { dateTime: data.end, timeZone: 'America/Mexico_City' },
        // ❌ REMOVED attendees - Service Account can't invite without Domain-Wide Delegation
        // ❌ REMOVED conferenceData - Requires Google Workspace with Meet enabled
        // Email confirmation will be sent via Resend with meeting instructions
        extendedProperties: {
          private: {
            confirmed: 'false',
            customerEmail: data.customerEmail,
            customerName: data.customerName,
            createdAt: new Date().toISOString(),
          },
        },
      }),
    });

    return {
      id: event.id!,
      summary: event.summary || '',
      description: event.description,
      start: event.start?.dateTime || '',
      end: event.end?.dateTime || '',
      htmlLink: event.htmlLink,
      hangoutLink: event.hangoutLink,
      attendees: [], // No attendees in Google Calendar, handled via email
    };
  }
}
