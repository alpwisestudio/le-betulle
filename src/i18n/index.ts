import { en } from "./en";
import { it, type Dict } from "./it";

export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

const dictionaries: Record<Locale, Dict> = { it, en };

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];

/** Sostituisce i segnaposto {chiave} in una stringa del dizionario. */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}

export type { Dict };
