"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { BookingForm } from "./BookingForm";
import { Reveal } from "./Reveal";

const hello = "Ciao Francesca, vorrei informazioni per un soggiorno a Le Betulle.";

export function Booking() {
  return (
    <section id="prenota" className="soft">
      <div className="section wrap prenota">
        <Reveal className="prenota__text">
          <h2 className="h1-ish">
            Prenota con Francesca. <span className="italic">Senza commissioni.</span>
          </h2>
          <p className="muted measure">Dicci date e orario del volo: ti rispondiamo con disponibilità e prezzo. {site.hours}.</p>
          <a className="btn btn--outline" href={whatsappLink(hello)} target="_blank" rel="noopener">
            Oppure scrivi su WhatsApp
          </a>
        </Reveal>
        <Reveal delay={0.15}>
          <BookingForm variant="card" />
        </Reveal>
      </div>
    </section>
  );
}

/** Barra fissa su telefono: compare dopo l’hero. */
export function MobileBar() {
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
            WhatsApp
          </a>
          <a className="btn btn--accent" href="#prenota">
            Verifica date
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
