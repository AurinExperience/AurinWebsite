import { isValidPhoneNumber, type CountryCode } from 'libphonenumber-js/min';

/**
 * Teléfono que existe en el plan de numeración del país (lada y longitud
 * válidas) y no es de relleno (1111111111, 1234567890). Corre en el navegador
 * (PhoneInput) y en el servidor.
 * Recibe "+52 777 123 4567", o el número nacional junto con su país.
 */
export function isValidPhone(phone: unknown, country?: CountryCode): boolean {
  if (typeof phone !== 'string') return false;
  const national = (country ? phone : phone.trim().replace(/^\+\d+\s+/, '')).replace(/\D/g, '');
  const filler =
    /^(\d)\1+$/.test(national) ||
    '01234567890123456789'.includes(national) ||
    '98765432109876543210'.includes(national);
  return !filler && isValidPhoneNumber(phone, country);
}
