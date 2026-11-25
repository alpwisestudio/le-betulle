"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { fill, type Dict } from "@/i18n";
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

export function Facts({ t }: { t: Dict["facts"] }) {
  return (
    <section id="fatti" className="facts">
      <Reveal group className="facts__grid wrap">
        <Item>
          <div className="facts__value"><CountUp to={5} suffix={t.minutes} /></div>
          <div className="facts__label">{t.terminal}</div>
        </Item>
        <Item>
          <div className="facts__value">{t.quiet}</div>
          <div className="facts__label">{t.quietLabel}</div>
        </Item>
        <Item>
          <div className="facts__value">{t.shuttle}</div>
          <div className="facts__label">{t.shuttleLabel}</div>
        </Item>
        <Item>
          <div className="facts__value">{site.ratings.booking}</div>
          <div className="facts__label">{fill(t.rating, { n: site.ratings.bookingCount })}</div>
        </Item>
      </Reveal>
    </section>
  );
}
