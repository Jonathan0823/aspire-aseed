import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/"];

export default async function middleware(req: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // Bypass middleware for static files
  if (req.nextUrl.pathname.startsWith("/_next") || req.nextUrl.pathname.startsWith("/static")) {
    return NextResponse.next();
  }

  // Prevent redirect loop by checking if the user is already on the login page
  if (isProtected && !session && req.nextUrl.pathname !== "/login") {
    const absoluteUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  return NextResponse.next();
}