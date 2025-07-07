'use client'

import Button from "@/components/ui/Button";
import { useRouter } from 'next/navigation'
import {useState} from "react";

/**
 * logout button component
 * @returns JSX.Element
 */
export default function LogoutButton() {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)

    const handleLogout = async () => {
        try{
            setLoading(true)
            await fetch('/api/auth/logout', {
                method: 'POST',
            })

            router.push('/auth')
        }catch (err){
            console.log(err)
        }finally {
            setLoading(false)
        }


    }

    return (
        <form onSubmit={handleLogout}>
            <Button type={"submit"} onClick={handleLogout} disabled={loading}>
                {loading ? 'Logout...' : 'Logout'}
            </Button>
        </form>
    )
}
