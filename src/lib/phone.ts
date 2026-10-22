import { AsYouType, getCountryCallingCode, isValidPhoneNumber, type CountryCode } from 'libphonenumber-js/min';

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

/** Número nacional con los espacios de su país: "7771234567" → "777 123 4567". */
export function formatPhone(phone: string, country: CountryCode): string {
  const digits = phone.replace(/\D/g, '');
  // Con el 0 de marcación nacional, formato nacional ("01512 3456789"). Sin él, el
  // nacional no aplica en países como Alemania: se usa el internacional sin la lada.
  if (digits.startsWith('0')) return new AsYouType(country).input(digits);
  const code = getCountryCallingCode(country);
  return new AsYouType(country).input(`+${code}${digits}`).slice(code.length + 1).trimStart();
}
