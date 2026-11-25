import { site } from "@/lib/site";
import { Item, Reveal } from "./Reveal";

// Estratti di recensioni reali da Booking.com (nome come pubblicato da Booking).
const reviews = [
  { topic: "L’accoglienza", quote: "Disponibilità della titolare davvero grandissima.", who: "Claudio" },
  { topic: "La posizione", quote: "Ideale per chi deve prendere l’aereo da Milano Malpensa.", who: "Ireberte" },
  { topic: "Le camere", quote: "Stanze grandi e pulite e isolate perfettamente, dotate di tutti i servizi.", who: "Cristiano" },
];

export function Reviews() {
  return (
    <section id="ospiti" className="dark">
      <div className="section wrap">
        <Reveal className="section__head">
          <h2 className="h2 measure-wide">Gli ospiti parlano soprattutto di Francesca</h2>
          <p className="reviews__score">
            <span className="reviews__big">{site.ratings.booking}</span>
            <span className="on-dark-muted">
              Eccellente su Booking
              <br />
              {site.ratings.bookingCount} recensioni
            </span>
          </p>
        </Reveal>
        <Reveal group className="reviews__grid">
          {reviews.map((r) => (
            <Item key={r.topic}>
              <figure className="review">
                <p className="eyebrow on-dark-muted">{r.topic}</p>
                <blockquote className="review__quote">“{r.quote}”</blockquote>
                <figcaption className="on-dark-muted small">{r.who} · Booking.com</figcaption>
              </figure>
            </Item>
          ))}
        </Reveal>
        <Reveal group className="reviews__cats">
          {site.ratings.categories.map(([label, score]) => (
            <Item key={label} className="reviews__cat">
              <span className="on-dark-muted">{label}</span>
              <span className="reviews__catscore">{score}</span>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
