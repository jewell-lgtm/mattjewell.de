import { Locale } from "@/hooks/useTranslations/types";

export function formatTimespan(
  startDate: string,
  endDate: string | null | undefined,
  userLocale: Locale
): string {
  // Parse the start date for better manipulation, you could add checks to see if it is valid
  const start = new Date(startDate);

  // Options for date formatting
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  const formattedStart = start.toLocaleDateString(userLocale, options);

  // Determine the end date text
  const formattedEnd = endDate
    ? new Date(endDate).toLocaleDateString(userLocale, options)
    : "Present";

  return `${formattedStart} - ${formattedEnd}`;
}
