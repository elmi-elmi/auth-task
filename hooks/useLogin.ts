'use client'

import { useRouter } from 'next/navigation'


/**
 * Custom hook to handle login request and redirect
 */
export function useLogin() {
    const router = useRouter()

    const login = async () => {
        const res = await fetch('/api/auth/login', { method: 'POST' })
        if (res.ok) {
            router.push('/dashboard')
        } else {
            console.error("Somthing went wrong in login")
        }
    }

    return { login }
}