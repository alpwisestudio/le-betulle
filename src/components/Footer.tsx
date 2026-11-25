import { site, whatsappLink } from "@/lib/site";
import { Item, Reveal } from "./Reveal";

const stay = [
  ["Check-in", site.checkIn],
  ["Check-out", site.checkOut],
  ["Arrivi tardi o partenze all’alba", "su accordo"],
  ["Navetta per Malpensa", "su prenotazione"],
  ["Navetta per cena", "gratuita, non la domenica"],
  ["Risposte a messaggi e chiamate", "8:00 – 20:00"],
];

const getting = [
  ["Malpensa Terminal 2", "5 min in auto"],
  ["Malpensa Terminal 1", "10 min in auto"],
  ["Stazione ferroviaria", "10 min · Milano e Rho in 40"],
];

const good = [
  "Bagno privato in ogni camera",
  "Wi‑Fi gratuito",
  "Aria condizionata",
  "Colazione in camera",
  "Giardino per gli ospiti",
  "Posto auto nel cancello",
  "Parking con navetta h24 vicino",
  "Colazione per intolleranze su richiesta",
  "Animali ammessi senza supplemento",
];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

function Brand() {
  return (
    <span className="brandmark">
      <span className="brandmark__name">Le Betulle</span>
      <span className="brandmark__sub">{site.tagline}</span>
    </span>
  );
}

export function Footer() {
  return (
    <footer id="contatti" className="site-footer">
      <div className="wrap contacts">
        <Reveal className="contacts__head">
          <p className="eyebrow on-dark-muted">Soggiorno e contatti</p>
          <h2 className="h2">
            Ti aspettiamo a Cardano al Campo, <span className="italic">a cinque minuti dal tuo volo.</span>
          </h2>
        </Reveal>

        <Reveal group className="contacts__grid">
          <Item className="contacts__col">
            <h3 className="eyebrow on-dark-muted">Il soggiorno</h3>
            <dl className="rows">
              {stay.map(([k, v]) => (
                <div key={k} className="rows__row">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Item>

          <Item className="contacts__col">
            <h3 className="eyebrow on-dark-muted">Dove siamo</h3>
            <p className="contacts__address">
              {site.street}
              <br />
              {site.city}
            </p>
            <a className="textlink" href={site.mapsUrl} target="_blank" rel="noopener">
              Apri in Google Maps <Arrow />
            </a>
            <dl className="rows rows--tight">
              {getting.map(([k, v]) => (
                <div key={k} className="rows__row">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Item>

          <Item className="contacts__col">
            <h3 className="eyebrow on-dark-muted">Prenota con {site.host}</h3>
            <dl className="direct">
              <div>
                <dt>Telefono e WhatsApp</dt>
                <dd>
                  <a className="direct__big" href={`tel:+${site.whatsapp}`}>
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a className="textlink" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
            <a className="btn btn--light" href={whatsappLink(`Ciao ${site.host}, vorrei informazioni per un soggiorno a Le Betulle.`)} target="_blank" rel="noopener">
              Scrivi su WhatsApp
            </a>
          </Item>
        </Reveal>

        <Reveal className="contacts__good">
          <h3 className="eyebrow on-dark-muted">Buono a sapersi</h3>
          <ul className="chips">
            {good.map((g) => (
              <li key={g} className="chip">
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="footbar">
        <div className="wrap footbar__inner">
          <a href="#top" aria-label="Torna su">
            <Brand />
          </a>
          <p className="footbar__meta">
            {site.address} · <a href={`tel:+${site.whatsapp}`}>{site.phoneDisplay}</a>
            <span className="footbar__sep" aria-hidden="true">·</span>
            {site.cin}
          </p>
          <p className="footbar__credit">
            <span className="badge">Anteprima</span>
            Proposta realizzata da Alpwise Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
