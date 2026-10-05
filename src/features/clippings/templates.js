export function clippingTemplate(body) {
  if (body.length <= 52) return "whisper";
  if (body.length <= 170) return "excerpt";
  if (body.length <= 330) return "reflection";
  return "anchor";
}

export function clippingPreview(body, limit = 92) {
  const compact = body.replace(/\s+/g, " ").trim();
  return compact.length <= limit ? compact : `${compact.slice(0, limit).replace(/\s+\S*$/, "")}…`;
}
