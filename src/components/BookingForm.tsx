"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { fill, type Dict, type Locale } from "@/i18n";
import { whatsappLink } from "@/lib/site";

const noopSubscribe = () => () => {};

function formatDate(iso: string, lang: Locale) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(lang === "it" ? "it-IT" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/** Barra date: compone un messaggio WhatsApp per Francesca con date, ospiti e orario del volo. */
export function BookingForm({ t, lang, variant = "bar" }: { t: Dict["booking"]; lang: Locale; variant?: "bar" | "card" }) {
  const [arrivo, setArrivo] = useState("");
  const [partenza, setPartenza] = useState("");
  const [ospiti, setOspiti] = useState("2");
  const [volo, setVolo] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const parts = [
      t.msgStart,
      arrivo && partenza ? fill(t.msgDates, { from: formatDate(arrivo, lang), to: formatDate(partenza, lang) }) : "",
      ospiti === "1" ? t.msgGuestOne : fill(t.msgGuestMany, { n: ospiti }),
      volo ? fill(t.msgFlight, { time: volo }) : "",
    ];
    window.open(whatsappLink(parts.filter(Boolean).join(" ")), "_blank", "noopener");
  }

  // La data minima si calcola nel browser, non durante il prerender.
  const today = useSyncExternalStore(
    noopSubscribe,
    () => new Date().toISOString().slice(0, 10),
    () => undefined,
  );

  return (
    <form className={`booking booking--${variant}`} onSubmit={submit}>
      <label className="booking__field">
        <span>{t.arrival}</span>
        <input type="date" min={today} value={arrivo} onChange={(e) => setArrivo(e.target.value)} required />
      </label>
      <label className="booking__field">
        <span>{t.departure}</span>
        <input type="date" min={arrivo || today} value={partenza} onChange={(e) => setPartenza(e.target.value)} required />
      </label>
      <label className="booking__field">
        <span>{t.guests}</span>
        <select value={ospiti} onChange={(e) => setOspiti(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      {variant === "card" && (
        <label className="booking__field">
          <span>{t.flight}</span>
          <input type="time" value={volo} onChange={(e) => setVolo(e.target.value)} />
        </label>
      )}
      <button type="submit" className="btn btn--accent booking__submit">
        {t.submit}
      </button>
    </form>
  );
}
