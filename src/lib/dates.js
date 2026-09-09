export function formatMonth(value) {
 if (!value) return "";
 const [year, month] = value.split("-").map(Number);
 return new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, 1)));
}
export function dateRange(start, end) { return start ? `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}` : "2026"; }
