import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSiteOrigin } from "@/lib/site";
const mono = localFont({
  src: [
    { path: "../../public/fonts/space-mono-regular.woff2", weight: "400" },
    { path: "../../public/fonts/space-mono-bold.woff2", weight: "700" },
  ],
  variable: "--font-space-mono",
  display: "swap",
});
const rubik = localFont({
  src: [
    { path: "../../public/fonts/rubik-regular.woff2", weight: "400" },
    { path: "../../public/fonts/rubik-bold.woff2", weight: "700" },
  ],
  variable: "--font-rubik",
  display: "swap",
});
const origin = getSiteOrigin();
export const metadata = {
  ...(origin ? { metadataBase: new URL(origin) } : {}),
  title: {
    default: "Tharun Kumar A — Software Developer",
    template: "%s · Tharun Kumar A",
  },
  description:
    "Full-stack applications, thoughtful interfaces, and practical automation. Explore the work and experience of Tharun Kumar A.",
  ...(origin ? { alternates: { types: { "application/rss+xml": new URL("/rss.xml", origin).href } } } : {}),
  authors: [{ name: "Tharun Kumar A" }],
  openGraph: {
    type: "website",
    title: "Tharun Kumar A — Software Developer",
    description:
      "Selected work in full-stack development, AI tools, and workflow automation.",
  },
  twitter: { card: "summary" },
};
export const viewport = { themeColor: "#171313" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mono.variable} ${rubik.variable} font-body`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
