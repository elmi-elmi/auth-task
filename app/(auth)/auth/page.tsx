
import styles from './auth.module.scss';
import LoginForm from "@/app/(auth)/auth/components/LoginForm";

/**
 * Auth page /auth
 * @returns JSX.Element
 */
export default function AuthPage() {
    return  <div className={styles.container}>
        <h1>Login</h1>
        <LoginForm />
    </div>

}
