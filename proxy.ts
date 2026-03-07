import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if already on /fr or /en
  if (pathname.startsWith("/fr") || pathname.startsWith("/en")) {
    return;
  }

  const acceptLanguage = request.headers.get("accept-language") || "";

  const prefersFrench = acceptLanguage.toLowerCase().includes("fr");

  const lang = prefersFrench ? "fr" : "en";

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
