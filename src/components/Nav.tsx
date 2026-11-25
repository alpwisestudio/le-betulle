"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const links = [
  { href: "#camere", label: "Camere" },
  { href: "#ospiti", label: "Recensioni" },
  { href: "#dintorni", label: "Dintorni" },
  { href: "#contatti", label: "Contatti" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 80));

  return (
    <motion.header
      className={`nav ${solid || open ? "nav--solid" : ""}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <div className="nav__inner wrap">
        <a href="#top" className="nav__brand">
          Le Betulle
        </a>
        <nav className="nav__links" aria-label="Sezioni">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
          <a href="#prenota" className="btn btn--light">
            Prenota diretto
          </a>
        </nav>
        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__sheet"
            aria-label="Menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {[...links, { href: "#prenota", label: "Prenota diretto" }].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
