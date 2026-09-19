export const navigation = [
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
];
export function getSiteOrigin(value = process.env.NEXT_PUBLIC_SITE_URL) {
  if (!value) return undefined;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("Site URL must use HTTP or HTTPS");
  return url.origin;
}
export function pageMetadata(title, description, path) {
  const origin = getSiteOrigin();
  return {
    title,
    description,
    ...(origin
      ? { alternates: { canonical: new URL(path, origin).href } }
      : {}),
  };
}
