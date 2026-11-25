"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import colazione from "@/assets/colazione.jpg";
import naviglio from "@/assets/naviglio.jpg";
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

const distances = [
  ["Malpensa Terminal 2", "5 min"],
  ["Malpensa Terminal 1", "10 min"],
  ["Stazione, treni per Milano", "10 min"],
  ["Malpensa Fiere", "10 min"],
  ["Fiera Milano Rho", "30 min"],
  ["Lago Maggiore e d’Orta", "30 min"],
];

export function Highlights() {
  return (
    <section id="dintorni" className="section wrap highlights">
      <Reveal as="article" className="highlight">
        <ParallaxPhoto src={colazione} alt="Cappuccino e croissant serviti in camera" />
        <h3 className="h3 h3--lg">Colazione in camera, anche alle 5</h3>
        <p className="muted">Cappuccino, tè, croissant freschi. Per le partenze all’alba un cestino pronto; per intolleranze o frutta fresca, basta dirlo prima.</p>
      </Reveal>
      <Reveal as="article" className="highlight" delay={0.15}>
        <ParallaxPhoto src={naviglio} alt="Canale tra i campi con papaveri, vicino a Cardano al Campo" />
        <h3 className="h3 h3--lg">Laghi a mezz’ora, Milano in treno</h3>
        <ul className="distances">
          {distances.map(([place, time]) => (
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
