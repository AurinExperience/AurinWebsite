/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly RECAPTCHA_SITE_KEY: string;
  readonly RECAPTCHA_SECRET_KEY: string;
  readonly PAYLOAD_API_URL: string;
  readonly PAYLOAD_SERVER_URL: string;
  readonly BLOB_READ_WRITE_TOKEN: string;
  readonly RESEND_API_KEY: string;
  readonly N8N_WEBHOOK_URL: string;
  readonly GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
  readonly GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: string;
  /** Hoja de leads (src/lib/mailing/leadSheet.ts); sin ella no se registra nada */
  readonly LEADS_SHEET_ID?: string;
  readonly NODE_ENV: string;
  readonly HOST: string;
  readonly PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}