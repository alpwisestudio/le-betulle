// Dati della struttura che non dipendono dalla lingua (i testi sono in src/i18n).
export const site = {
  name: "Le Betulle",
  host: "Francesca",
  street: "Via Parma, 1",
  city: "21010 Cardano al Campo (VA)",
  address: "Via Parma, 1 · Cardano al Campo",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=B%26B+Le+Betulle+Via+Parma+1+Cardano+al+Campo",
  cin: "CIN IT012032C18ZLWZIHL",
  // Formato internazionale senza + (es. 39345...). Sovrascrivibile da .env.local
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "393453506104",
  phoneDisplay: "+39 345 350 6104",
  email: process.env.NEXT_PUBLIC_EMAIL || "francesca.lebetulle@outlook.com",
  // Booking.com, annuncio "B&B Le Betulle" (letto il 25/11/2026).
  // scores segue l'ordine di reviews.categories nei dizionari: staff, pulizia, comfort, qualità-prezzo, wi-fi.
  ratings: {
    booking: "9,0",
    bookingCount: "192",
    scores: ["9,5", "9,5", "9,4", "9,2", "9,8"],
  },
};

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
