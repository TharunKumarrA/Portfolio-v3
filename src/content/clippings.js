const statuses = ["draft", "published"];

export const clippingThemes = {
  ember: { name: "Ember", background: "#171313", ink: "#f3ece1", accent: "#d79a48" },
};

export const clippings = [
  {
    id: "spoke-to-my-younger-self",
    body: "I spoke to my younger self.\n\nTold him we can afford all the cool toys and games.\n\nHe said, “I had Amma feeding me dinner.”\n\nHe won.",
    publishedAt: "2026-10-05",
    status: "published",
    theme: "ember",
  },
  {
    id: "a-heart-that-hurts",
    body: "I’d rather have a heart that hurts from loving than one that heals by becoming cold.\n\nPain didn’t teach me to stop caring. It taught me that kindness can save someone in ways we’ll never get to see.",
    publishedAt: "2026-10-04",
    status: "published",
    theme: "ember",
  },
  {
    id: "the-freedom-to-choose",
    body: "There’s a beautiful but painful consequence of caring deeply about people: their freedom includes the freedom to make choices you wish they wouldn’t make.",
    publishedAt: "2026-10-03",
    status: "published",
    theme: "ember",
  },
  {
    id: "everyone-speaks-a-language",
    body: "There are as many languages as there are people in the world. Everyone speaks their own language.",
    publishedAt: "2026-10-02",
    status: "published",
    theme: "ember",
  },
  {
    id: "letting-go-of-fear",
    body: "It’s not easy to let go of fear. But it’s not that difficult either.",
    publishedAt: "2026-10-01",
    status: "published",
    theme: "ember",
  },
  {
    id: "the-privilege-to-love",
    body: "What’s luck? I asked.\n\nYou are not lucky because someone is there for you or loves you.\n\nYou are lucky if you get the privilege to be there for someone and love someone.",
    publishedAt: "2026-09-30",
    status: "published",
    theme: "ember",
  },
  {
    id: "beautifully-broken",
    body: "Beautifully broken.",
    publishedAt: "2026-09-29",
    status: "published",
    theme: "ember",
  },
  {
    id: "outside-the-hospital-door",
    body: "What’s the scariest place you have ever been?\n\nOutside the hospital door, when your loved one is inside fighting for life.",
    publishedAt: "2026-09-28",
    status: "published",
    theme: "ember",
  },
  {
    id: "what-friendship-is",
    body: "Because friendship isn’t just shared memories. It’s having someone who lends you their belief when you’ve run out of your own. Someone who stands beside you long enough for bravery to catch up.\n\nAnd maybe that’s what life is really built on. Not the big moments, but the people who stand next to us in them. The ones who make us feel like anything is possible.",
    publishedAt: "2026-09-27",
    status: "published",
    theme: "ember",
  },
  {
    id: "courage-and-trust",
    body: "Courage is what you need when trust is absent.\n\nCourage is the behavioural opposite of fear, while trust is the structural opposite. Courage opposes fear in action; trust opposes it at the source.",
    publishedAt: "2026-09-26",
    status: "published",
    theme: "ember",
  },
];

export function getPublishedClippings(today = new Date().toISOString().slice(0, 10)) {
  return clippings
    .filter((clipping) => clipping.status === "published" && clipping.publishedAt <= today)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.id.localeCompare(b.id));
}

export function getPublishedClipping(id) {
  return getPublishedClippings().find((clipping) => clipping.id === id);
}

export function isClippingStatus(status) {
  return statuses.includes(status);
}
