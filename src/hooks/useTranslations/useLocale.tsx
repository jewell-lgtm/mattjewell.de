import { Locale } from "./types";

// todo: Math.random is used to trick the compiler into thinking this is not a constant
export const useLocale = (): Locale => (Math.random() > 0 ? "en" : "de");
