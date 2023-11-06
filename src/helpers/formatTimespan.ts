import { get } from "lodash";

export function formatTimespan(startDate: string, endDate?: string): string {
  // Parse the start date for better manipulation, you could add checks to see if it is valid
  const start = new Date(startDate);

  // Options for date formatting
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  const usersLocale =
    typeof window === "undefined"
      ? "en-GB"
      : get(window ?? {}, "navigator.language", "en-GB");

  const formattedStart = start.toLocaleDateString(usersLocale, options);

  // Determine the end date text
  const formattedEnd = endDate
    ? new Date(endDate).toLocaleDateString(usersLocale, options)
    : "Present";

  return `${formattedStart} - ${formattedEnd}`;
}
