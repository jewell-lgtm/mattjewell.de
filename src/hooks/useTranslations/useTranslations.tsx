import { CopyKey, locales } from "./types";
// noinspection ES6PreferShortImport
import { useLocale } from "./useLocale";

interface TranslationFn {
  (key: CopyKey): string;
}

export const useTranslations: () => TranslationFn = () => {
  const locale = useLocale();
  return key => locales[locale][key];
};
