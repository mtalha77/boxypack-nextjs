import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is an admin route
  if (pathname.startsWith('/admin')) {
    // Skip auth page
    if (pathname === '/admin/auth') {
      return NextResponse.next();
    }

    // Check for admin authentication
    const adminAuth = request.cookies.get('adminAuth')?.value;
    const adminUser = request.cookies.get('adminUser')?.value;

    if (!adminAuth || !adminUser) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};
