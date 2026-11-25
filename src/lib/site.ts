// Dati della struttura (dal sito attuale lebetullemalpensa.site123.me).
// I valori tra parentesi quadre sono da completare con Francesca.
export const site = {
  name: "Le Betulle",
  tagline: "Bed & Breakfast · Malpensa",
  host: "Francesca",
  street: "Via Parma, 1",
  city: "21010 Cardano al Campo (VA)",
  address: "Via Parma, 1 · Cardano al Campo",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=B%26B+Le+Betulle+Via+Parma+1+Cardano+al+Campo",
  hours: "Rispondiamo dalle 8:00 alle 20:00",
  // Orari ufficiali, allineati all'annuncio Booking
  checkIn: "15:00 – 24:00",
  checkOut: "04:00 – 11:30",
  cin: "CIN IT012032C18ZLWZIHL",
  // Formato internazionale senza + (es. 39345...). Sovrascrivibile da .env.local
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "393453506104",
  phoneDisplay: "+39 345 350 6104",
  email: process.env.NEXT_PUBLIC_EMAIL || "francesca.lebetulle@outlook.com",
  // Booking.com, annuncio "B&B Le Betulle" (letto il 25/11/2026)
  ratings: {
    booking: "9,0",
    bookingCount: "192",
    categories: [
      ["Staff", "9,5"],
      ["Pulizia", "9,5"],
      ["Comfort", "9,4"],
      ["Qualità‑prezzo", "9,2"],
      ["Wi‑Fi", "9,8"],
    ] as const,
  },
};

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
