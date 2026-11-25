import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Le Betulle · B&B a 4 km da Malpensa, fuori dalle rotte",
  description:
    "Bed & Breakfast con giardino a Cardano al Campo: Terminal 2 in 5 minuti, camere con bagno privato, colazione in camera e navetta per l'aeroporto su accordo.",
  openGraph: {
    title: "Le Betulle · B&B a 4 km da Malpensa",
    description: "Vicini a Malpensa. Lontani dagli aerei.",
    locale: "it_IT",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1D201B",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
