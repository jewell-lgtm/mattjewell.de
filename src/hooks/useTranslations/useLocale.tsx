import { useRouter } from "next/router";
import { Locale } from "./types";

export const useLocale = (): Locale => {
  const { locale } = useRouter();
  if (locale === "de") return "de";
  return "en";
};
