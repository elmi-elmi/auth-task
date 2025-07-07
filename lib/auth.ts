// lib/auth.ts

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

/**
 * Checks if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth_token')?.value
    return !!token
}

/**
 * Redirects to /auth if not authenticated
 */
export async function requireAuth(): Promise<void> {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth_token')?.value

    if (!token) {
        redirect('/auth')
    }
}