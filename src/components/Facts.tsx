"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { Item, Reveal } from "./Reveal";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Facts() {
  return (
    <section id="fatti" className="facts">
      <Reveal group className="facts__grid wrap">
        <Item>
          <div className="facts__value"><CountUp to={5} suffix=" min" /></div>
          <div className="facts__label">dal Terminal 2</div>
        </Item>
        <Item>
          <div className="facts__value">Fuori rotta</div>
          <div className="facts__label">nessun aereo sopra la casa</div>
        </Item>
        <Item>
          <div className="facts__value">Navetta</div>
          <div className="facts__label">da e per l’aeroporto, su accordo</div>
        </Item>
        <Item>
          <div className="facts__value">{site.ratings.booking}</div>
          <div className="facts__label">su Booking, {site.ratings.bookingCount} recensioni</div>
        </Item>
      </Reveal>
    </section>
  );
}
