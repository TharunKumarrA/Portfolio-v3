export async function copyText(text, clipboard) {
  try {
    if (!clipboard?.writeText) return { ok: false };
    await clipboard.writeText(text);
    return { ok: true };
  } catch {
    return { ok: false };
  }
}
