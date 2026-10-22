import {
  getCountries,
  getCountryCallingCode,
  validatePhoneNumberLength,
  type CountryCode,
} from 'libphonenumber-js/min';
import { Metadata } from 'libphonenumber-js/core';
import metadata from 'libphonenumber-js/min/metadata';

export interface PhoneCountry {
  code: CountryCode;
  flag: string;
  dial: string;
  /** Dígitos del número sin lada, "mín-máx". */
  digits: string;
  name: string;
  /** País principal de su lada (+44 → Reino Unido, no Guernsey). */
  primary: boolean;
}

// Mercados de Aurin: van arriba, con largos de celular y fijo revisados a mano.
// Para el resto se usan los de libphonenumber, más holgados porque incluyen
// números especiales (con ellos Guatemala aceptaría 11 dígitos por los 1-800).
const MAIN: Partial<Record<CountryCode, string>> = {
  MX: '10-10',
  US: '10-10',
  CA: '10-10',
  ES: '9-9',
  DO: '10-10',
  PR: '10-10',
  PA: '7-8',
  CO: '10-10',
  AR: '10-11',
  CL: '9-9',
  PE: '8-9',
  GT: '8-8',
  CR: '8-8',
  UY: '8-8',
  EC: '8-9',
  VE: '10-10',
};

const meta = new Metadata(metadata);

const flag = (code: string) => String.fromCodePoint(...[...code].map((c) => 0x1f1a5 + c.charCodeAt(0)));

function libLengths(code: CountryCode): string {
  let min = 0;
  let max = 0;
  for (let n = 1; n <= 17; n++) {
    const result = validatePhoneNumberLength('9'.repeat(n), code);
    if (!min && result !== 'TOO_SHORT' && result !== 'NOT_A_NUMBER') min = n;
    if (result !== 'TOO_LONG') max = n;
  }
  return `${min}-${max}`;
}

const cache = new Map<string, { main: PhoneCountry[]; rest: PhoneCountry[] }>();

/** Mercados de Aurin en su orden y, aparte, el resto del mundo por nombre en `lang`. */
export function phoneCountries(lang: string) {
  if (!cache.has(lang)) {
    const names = new Intl.DisplayNames([lang], { type: 'region' });
    const make = (code: CountryCode): PhoneCountry => ({
      code,
      flag: flag(code),
      dial: `+${getCountryCallingCode(code)}`,
      digits: MAIN[code] ?? libLengths(code),
      name: names.of(code) ?? code,
      primary: meta.getCountryCodesForCallingCode(getCountryCallingCode(code))?.[0] === code,
    });
    const main = (Object.keys(MAIN) as CountryCode[]).map(make);
    const rest = getCountries()
      .filter((code) => !MAIN[code])
      .map(make)
      .sort((a, b) => a.name.localeCompare(b.name, lang));
    cache.set(lang, { main, rest });
  }
  return cache.get(lang)!;
}
