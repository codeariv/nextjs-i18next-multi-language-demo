import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes("/api/") &&
    !request.nextUrl.pathname.includes("/ar") &&
    !request.nextUrl.pathname.includes("/en") &&
    request.nextUrl.locale === "default";

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${request.nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }
  return undefined;
}
