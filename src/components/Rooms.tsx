"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import dueBetulle from "@/assets/camera-due-betulle.jpg";
import laBetulla from "@/assets/camera-la-betulla.jpg";
import casa from "@/assets/angolo-cucina.jpg";
import { Item, Reveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

function Photo({ src, alt, className, delay = 0 }: { src: StaticImageData; alt: string; className: string; delay?: number }) {
  return (
    <motion.figure
      className={`photo ${className}`}
      initial={{ clipPath: "inset(12% 8% 12% 8% round 6px)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 6px)", opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease, delay }}
    >
      <Image src={src} alt={alt} fill placeholder="blur" sizes="(max-width: 800px) 100vw, 50vw" className="cover photo__img" />
    </motion.figure>
  );
}

const rooms = [
  { name: "Due Betulle", detail: "Due letti singoli · da [PREZZO]" },
  { name: "La Betulla", detail: "Letto matrimoniale · da [PREZZO]" },
  { name: "La Casa delle Betulle", detail: "Appartamento con terrazzo e parcheggio · da [PREZZO]" },
];

export function Rooms() {
  return (
    <section id="camere" className="section wrap">
      <Reveal className="section__head">
        <h2 className="h2">Tre modi di stare</h2>
        <p className="muted measure">Bagno privato, Wi‑Fi, TV, clima e angolo colazione in ogni camera. Il giardino è di tutti.</p>
      </Reveal>

      <div className="rooms__gallery">
        <Photo src={dueBetulle} alt="Camera Due Betulle con due letti singoli" className="rooms__big" />
        <div className="rooms__stack">
          <Photo src={laBetulla} alt="Camera La Betulla con letto matrimoniale" className="rooms__small" delay={0.15} />
          <Photo src={casa} alt="Zona giorno dell’appartamento La Casa delle Betulle" className="rooms__small" delay={0.3} />
        </div>
      </div>

      <Reveal group className="rooms__list">
        {rooms.map((r) => (
          <Item key={r.name} className="rooms__item">
            <h3 className="h3">{r.name}</h3>
            <p className="muted">{r.detail}</p>
          </Item>
        ))}
      </Reveal>
    </section>
  );
}
