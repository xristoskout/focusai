import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'el']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || ''
  // Check if the user's browser prefers Greek
  if (acceptLanguage.includes('el')) return 'el'
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip if a locale is already in the path
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect to detected or default locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip _next internals and static files
    '/((?!_next|favicon.ico|images|.*\\..*).*)',
  ],
}
