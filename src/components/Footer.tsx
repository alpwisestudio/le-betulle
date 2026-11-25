import type { Dict } from "@/i18n";
import { site, whatsappLink } from "@/lib/site";
import { Item, Reveal } from "./Reveal";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

function Brand({ tagline }: { tagline: string }) {
  return (
    <span className="brandmark">
      <span className="brandmark__name">Le Betulle</span>
      <span className="brandmark__sub">{tagline}</span>
    </span>
  );
}

export function Footer({ t, hello }: { t: Dict["footer"]; hello: string }) {
  return (
    <footer id="contatti" className="site-footer">
      <div className="wrap contacts">
        <Reveal className="contacts__head">
          <p className="eyebrow on-dark-muted">{t.eyebrow}</p>
          <h2 className="h2">
            {t.title} <span className="italic">{t.titleItalic}</span>
          </h2>
        </Reveal>

        <Reveal group className="contacts__grid">
          <Item className="contacts__col">
            <h3 className="eyebrow on-dark-muted">{t.stayTitle}</h3>
            <dl className="rows">
              {t.stay.map(([k, v]) => (
                <div key={k} className="rows__row">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Item>

          <Item className="contacts__col">
            <h3 className="eyebrow on-dark-muted">{t.whereTitle}</h3>
            <p className="contacts__address">
              {site.street}
              <br />
              {site.city}
            </p>
            <a className="textlink" href={site.mapsUrl} target="_blank" rel="noopener">
              {t.maps} <Arrow />
            </a>
            <dl className="rows rows--tight">
              {t.getting.map(([k, v]) => (
                <div key={k} className="rows__row">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Item>

          <Item className="contacts__col">
            <h3 className="eyebrow on-dark-muted">{t.bookTitle}</h3>
            <dl className="direct">
              <div>
                <dt>{t.phone}</dt>
                <dd>
                  <a className="direct__big" href={`tel:+${site.whatsapp}`}>
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt>{t.email}</dt>
                <dd>
                  <a className="textlink" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
            <a className="btn btn--light" href={whatsappLink(hello)} target="_blank" rel="noopener">
              {t.whatsapp}
            </a>
          </Item>
        </Reveal>

        <Reveal className="contacts__good">
          <h3 className="eyebrow on-dark-muted">{t.goodTitle}</h3>
          <ul className="chips">
            {t.good.map((g) => (
              <li key={g} className="chip">
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="footbar">
        <div className="wrap footbar__inner">
          <a href="#top" aria-label={t.top}>
            <Brand tagline={t.tagline} />
          </a>
          <p className="footbar__meta">
            {site.address} · <a href={`tel:+${site.whatsapp}`}>{site.phoneDisplay}</a>
            <span className="footbar__sep" aria-hidden="true">·</span>
            {site.cin}
          </p>
          <p className="footbar__credit">
            <span className="badge">{t.badge}</span>
            {t.credit}
          </p>
          <p className="footbar__photo">
            <a href="https://unsplash.com/photos/gUSzeVurjQg" target="_blank" rel="noopener">
              {t.photoCredit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
