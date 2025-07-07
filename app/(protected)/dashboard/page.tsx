
import LogoutButton from "@/app/(protected)/dashboard/components/logout";
import styles from './dashboard.module.scss'
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

/**
 *  Dashboard page
 * @returns JSX.Element
 */
export default async function DashboardPage() {

    const cookieStore = await cookies()
    const token = cookieStore.get('auth_token')?.value
    const user = cookieStore.get('user_name')?.value || 'User'

    // if (!token) {
    //     redirect('/auth')
    // }

    return <main className={styles.main}>
        <h1> Hi {user}👋, Welcome to the Dashboard</h1>
       <div>
           <LogoutButton/>
       </div>
    </main>
}
