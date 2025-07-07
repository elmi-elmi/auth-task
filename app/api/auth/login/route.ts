import { NextResponse } from 'next/server'
import {fetchRandomUser} from "@/services/userService";
import {setAuthCookies} from "@/lib/cookies";

export async function POST() {
    const data = await  fetchRandomUser()
    const user = data.results[0]

    const token = crypto.randomUUID()

    await setAuthCookies(token, user.name.first)

    return NextResponse.json({ success: true })
}