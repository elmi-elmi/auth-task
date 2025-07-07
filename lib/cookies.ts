// lib/cookies.ts

import { cookies } from 'next/headers'

export async function setAuthCookies(token: string, name: string) {
    const cookieStore = await cookies()

    cookieStore.set('auth_token', token, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60 * 24,
        sameSite: 'lax',
    })

    cookieStore.set('user_name', name, {
        path: '/',
        maxAge: 60 * 60 * 24,
    })
}

export async function clearAuthCookies() {
    const cookieStore = await cookies()
    cookieStore.delete('auth_token')
    cookieStore.delete('user_name')
}