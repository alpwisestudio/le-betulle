"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import betulla from "@/assets/betulla.jpg";
import type { Dict, Locale } from "@/i18n";
import { BookingForm } from "./BookingForm";

const ease = [0.22, 1, 0.36, 1] as const;

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({ y: "0%", transition: { duration: 1, ease, delay: 0.25 + i * 0.14 } }),
};

export function Hero({ t, booking, lang }: { t: Dict["hero"]; booking: Dict["booking"]; lang: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="hero">
      <motion.div className="hero__media" style={{ y: imgY, scale: imgScale }}>
        <motion.div
          className="hero__media-inner"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <Image src={betulla} alt={t.imageAlt} fill priority placeholder="blur" sizes="100vw" className="cover" />
        </motion.div>
      </motion.div>
      <div className="hero__shade" />

      <motion.div className="hero__content wrap" style={{ y: textY, opacity: fade }}>
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
        >
          {t.eyebrow}
        </motion.p>
        <h1 className="hero__title">
          <span className="mask">
            <motion.span className="mask__line" variants={line} custom={0} initial="hidden" animate="show">
              {t.line1}
            </motion.span>
          </span>
          <span className="mask">
            <motion.span className="mask__line italic" variants={line} custom={1} initial="hidden" animate="show">
              {t.line2}
            </motion.span>
          </span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
        >
          <BookingForm t={booking} lang={lang} />
        </motion.div>
      </motion.div>

      <motion.a
        href="#fatti"
        className="hero__scroll"
        aria-label={t.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  );
}
