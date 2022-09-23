import { Locale } from "./types";
import { useRouter } from "next/router";

export const useLocale = (): Locale => {
  const { locale } = useRouter();
  if (locale === "de") return "de";
  return "en";
};
