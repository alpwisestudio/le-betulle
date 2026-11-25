import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales } from "@/i18n";
import "../globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3400");

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { it: "/it", en: "/en", "x-default": "/it" },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      locale: t.locale,
      alternateLocale: lang === "it" ? ["en_GB"] : ["it_IT"],
      type: "website",
      url: `/${lang}`,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#1D201B",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
