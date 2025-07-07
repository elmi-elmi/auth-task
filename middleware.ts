/**
 * Middleware for route protection and authentication
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Protected routes that require authentication
 */
const PROTECTED_ROUTES = ['/dashboard'];

/**
 * Public routes that don't require authentication
 */
const PUBLIC_ROUTES = ['/auth'];

/**
 * Check if user is authenticated by looking for user data in request
 * Note: This is a simplified check. In production, you'd verify JWT tokens
 */
const isAuthenticated = (request: NextRequest): boolean => {
    const userCookie = request.cookies.get('auth_token');
    return !!userCookie?.value;
};

/**
 * Middleware function to handle route protection
 */
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const authenticated = isAuthenticated(request);
    console.log('authenticated', authenticated);

    // Redirect authenticated users away from auth page
    if (authenticated && PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Redirect unauthenticated users to auth page
    if (!authenticated && PROTECTED_ROUTES.includes(pathname)) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    // Redirect root to appropriate page
    if (pathname === '/') {
        const redirectPath = authenticated ? '/dashboard' : '/auth';
        return NextResponse.redirect(new URL(redirectPath, request.url));
    }


    // Redirect root to appropriate page
    if (pathname === '/') {
        const redirectPath = authenticated ? '/dashboard' : '/auth';
        return NextResponse.redirect(new URL(redirectPath, request.url));
    }

    return NextResponse.next();
}

/**
 * Middleware configuration
 */
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};