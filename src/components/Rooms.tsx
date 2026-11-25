"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import dueBetulle from "@/assets/camera-due-betulle.jpg";
import laBetulla from "@/assets/camera-la-betulla.jpg";
import casa from "@/assets/angolo-cucina.jpg";
import type { Dict } from "@/i18n";
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

export function Rooms({ t }: { t: Dict["rooms"] }) {
  return (
    <section id="camere" className="section wrap">
      <Reveal className="section__head">
        <h2 className="h2">{t.title}</h2>
        <p className="muted measure">{t.intro}</p>
      </Reveal>

      <div className="rooms__gallery">
        <Photo src={dueBetulle} alt={t.altDue} className="rooms__big" />
        <div className="rooms__stack">
          <Photo src={laBetulla} alt={t.altLa} className="rooms__small" delay={0.15} />
          <Photo src={casa} alt={t.altCasa} className="rooms__small" delay={0.3} />
        </div>
      </div>

      <Reveal group className="rooms__list">
        {t.items.map((r) => (
          <Item key={r.name} className="rooms__item">
            <h3 className="h3">{r.name}</h3>
            <p className="muted">{r.detail}</p>
          </Item>
        ))}
      </Reveal>
    </section>
  );
}
