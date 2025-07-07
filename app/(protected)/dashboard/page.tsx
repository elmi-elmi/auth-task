
import LogoutButton from "@/app/(protected)/dashboard/components/logout";
import styles from './dashboard.module.scss'
import {cookies} from "next/headers";

/**
 *  Dashboard page
 * @returns JSX.Element
 */
export default async function DashboardPage() {

    const cookieStore = await cookies()
    const user = cookieStore.get('user_name')?.value || 'User'


    return <main className={styles.main}>
        <h1> Hi {user}👋, Welcome to the Dashboard</h1>
       <div>
           <LogoutButton/>
       </div>
    </main>
}
