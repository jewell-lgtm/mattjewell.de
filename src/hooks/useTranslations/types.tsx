import { de, en } from "./locales";

export type Copy = typeof en;

export type CopyKey = keyof Copy;

export type Locale = "en" | "de";

export type Locales = Record<Locale, Copy>;

export const locales: Locales = { en, de };
