"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

const noopSubscribe = () => () => {};

function formatDate(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

/** Barra date: compone un messaggio WhatsApp per Francesca con date, ospiti e orario del volo. */
export function BookingForm({ variant = "bar" }: { variant?: "bar" | "card" }) {
  const [arrivo, setArrivo] = useState("");
  const [partenza, setPartenza] = useState("");
  const [ospiti, setOspiti] = useState("2");
  const [volo, setVolo] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const parts = [
      "Ciao Francesca, vorrei sapere se avete disponibilità",
      arrivo && partenza ? `dal ${formatDate(arrivo)} al ${formatDate(partenza)}` : "",
      `per ${ospiti} ${ospiti === "1" ? "ospite" : "ospiti"}.`,
      volo ? `Il mio volo è alle ${volo}.` : "",
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
        <span>Arrivo</span>
        <input type="date" min={today} value={arrivo} onChange={(e) => setArrivo(e.target.value)} required />
      </label>
      <label className="booking__field">
        <span>Partenza</span>
        <input type="date" min={arrivo || today} value={partenza} onChange={(e) => setPartenza(e.target.value)} required />
      </label>
      <label className="booking__field">
        <span>Ospiti</span>
        <select value={ospiti} onChange={(e) => setOspiti(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      {variant === "card" && (
        <label className="booking__field">
          <span>Orario del volo</span>
          <input type="time" value={volo} onChange={(e) => setVolo(e.target.value)} />
        </label>
      )}
      <button type="submit" className="btn btn--accent booking__submit">
        Verifica date
      </button>
    </form>
  );
}
