export function formatDate( date_in: number | string): string | undefined {
  const dateTimeFormater = new Intl.DateTimeFormat("es");

  if (!date_in) {
    return;
  }

  if (typeof date_in === "string") {
    const date = new Date(date_in);
    return dateTimeFormater.format(date);
  }

  return dateTimeFormater.format(date_in);
}
