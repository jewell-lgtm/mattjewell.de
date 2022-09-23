import { CopyKey, locales } from "./types";
import { useLocale } from "@/copy/useLocale";

interface TranslationFn {
  (key: CopyKey): string;
}

export const useTranslations: () => TranslationFn = () => {
  const locale = useLocale();
  return key => locales[locale][key];
};
