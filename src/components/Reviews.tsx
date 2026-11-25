import { fill, type Dict } from "@/i18n";
import { site } from "@/lib/site";
import { Item, Reveal } from "./Reveal";

// Estratti di recensioni reali da Booking.com (nome come pubblicato da Booking).
// In inglese sono tradotte dall'italiano, e la pagina lo dice.
export function Reviews({ t }: { t: Dict["reviews"] }) {
  return (
    <section id="ospiti" className="dark">
      <div className="section wrap">
        <Reveal className="section__head">
          <h2 className="h2 measure-wide">{t.title}</h2>
          <p className="reviews__score">
            <span className="reviews__big">{site.ratings.booking}</span>
            <span className="on-dark-muted">
              {t.score}
              <br />
              {fill(t.count, { n: site.ratings.bookingCount })}
            </span>
          </p>
        </Reveal>
        <Reveal group className="reviews__grid">
          {t.items.map((r) => (
            <Item key={r.who}>
              <figure className="review">
                <p className="eyebrow on-dark-muted">{r.topic}</p>
                <blockquote className="review__quote">“{r.quote}”</blockquote>
                <figcaption className="on-dark-muted small">
                  {r.who} · {t.source}
                </figcaption>
              </figure>
            </Item>
          ))}
        </Reveal>
        <Reveal group className="reviews__cats">
          {site.ratings.scores.map((score, i) => (
            <Item key={t.categories[i]} className="reviews__cat">
              <span className="on-dark-muted">{t.categories[i]}</span>
              <span className="reviews__catscore">{score}</span>
            </Item>
          ))}
        </Reveal>
        {t.note && <p className="on-dark-muted small">{t.note}</p>}
      </div>
    </section>
  );
}
