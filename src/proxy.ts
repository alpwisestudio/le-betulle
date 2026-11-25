import { NextResponse, type NextRequest } from "next/server";

// "/" porta alla lingua del browser: inglese se l'utente non preferisce l'italiano, altrimenti italiano.
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().slice(0, 2), q: q ? Number(q) : 1 };
    })
    .filter((x) => x.lang)
    .sort((a, b) => b.q - a.q)
    .find((x) => x.lang === "it" || x.lang === "en");

  const lang = preferred?.lang ?? "it";
  return NextResponse.redirect(new URL(`/${lang}`, request.url));
}

export const config = {
  matcher: ["/"],
};
