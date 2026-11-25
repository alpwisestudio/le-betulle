"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import colazione from "@/assets/colazione.jpg";
import naviglio from "@/assets/naviglio.jpg";
import type { Dict } from "@/i18n";
import { Reveal } from "./Reveal";

function ParallaxPhoto({ src, alt }: { src: StaticImageData; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className="photo highlight__photo">
      <motion.div className="highlight__parallax" style={{ y }}>
        <Image src={src} alt={alt} fill placeholder="blur" sizes="(max-width: 800px) 100vw, 50vw" className="cover photo__img" />
      </motion.div>
    </div>
  );
}

export function Highlights({ t }: { t: Dict["highlights"] }) {
  return (
    <section id="dintorni" className="section wrap highlights">
      <Reveal as="article" className="highlight">
        <ParallaxPhoto src={colazione} alt={t.breakfastAlt} />
        <h3 className="h3 h3--lg">{t.breakfastTitle}</h3>
        <p className="muted">{t.breakfastText}</p>
      </Reveal>
      <Reveal as="article" className="highlight" delay={0.15}>
        <ParallaxPhoto src={naviglio} alt={t.areaAlt} />
        <h3 className="h3 h3--lg">{t.areaTitle}</h3>
        <ul className="distances">
          {t.distances.map(([place, time]) => (
            <li key={place}>
              <span>{place}</span>
              <span className="muted">{time}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
