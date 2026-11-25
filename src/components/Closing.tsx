"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import type { Dict, Locale } from "@/i18n";
import { whatsappLink } from "@/lib/site";
import { BookingForm } from "./BookingForm";
import { Reveal } from "./Reveal";

export function Booking({ t, booking, lang }: { t: Dict["prenota"]; booking: Dict["booking"]; lang: Locale }) {
  return (
    <section id="prenota" className="soft">
      <div className="section wrap prenota">
        <Reveal className="prenota__text">
          <h2 className="h1-ish">
            {t.title} <span className="italic">{t.titleItalic}</span>
          </h2>
          <p className="muted measure">{t.text}</p>
          <a className="btn btn--outline" href={whatsappLink(booking.hello)} target="_blank" rel="noopener">
            {t.whatsapp}
          </a>
        </Reveal>
        <Reveal delay={0.15}>
          <BookingForm t={booking} lang={lang} variant="card" />
        </Reveal>
      </div>
    </section>
  );
}

/** Barra fissa su telefono: compare dopo l’hero. */
export function MobileBar({ t, hello }: { t: Dict["mobile"]; hello: string }) {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 600));
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="mobilebar"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
        >
          <a className="btn btn--outline" href={whatsappLink(hello)} target="_blank" rel="noopener">
            {t.whatsapp}
          </a>
          <a className="btn btn--accent" href="#prenota">
            {t.dates}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
