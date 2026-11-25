import { notFound } from "next/navigation";
import { Booking, MobileBar } from "@/components/Closing";
import { Facts } from "@/components/Facts";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { Reviews } from "@/components/Reviews";
import { Rooms } from "@/components/Rooms";
import { getDictionary, hasLocale } from "@/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <MotionProvider>
      <Nav t={t.nav} lang={lang} />
      <main>
        <Hero t={t.hero} booking={t.booking} lang={lang} />
        <Facts t={t.facts} />
        <Rooms t={t.rooms} />
        <Reviews t={t.reviews} />
        <Highlights t={t.highlights} />
        <Booking t={t.prenota} booking={t.booking} lang={lang} />
      </main>
      <Footer t={t.footer} hello={t.booking.hello} />
      <MobileBar t={t.mobile} hello={t.booking.hello} />
    </MotionProvider>
  );
}
