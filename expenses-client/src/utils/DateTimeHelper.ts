export function formatDateToVietnam(isoString: string) {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    // year: "numeric",
    day: "2-digit",
    month: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    timeZone: "Asia/Ho_Chi_Minh"
  };
  
  return new Intl.DateTimeFormat("en-US", options).format(date);
}