'use client'

import { loginSchema, LoginFormData } from '@/lib/validators/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useLogin } from '@/hooks/useLogin'
import { useForm } from 'react-hook-form'

/**
 * Login form component
 * @returns JSX.Element
 */
export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    })

    const { login } = useLogin()

    const onSubmit = async () => login()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                {...register('phone')}
                error={errors.phone?.message}
                label="Phone Number"
                type="tel"
                maxLength={11}
                {...register('phone')}
                placeholder="09xxxxxxxxx"
                autoComplete="tel"
            />
            <Button type="submit" disabled={isSubmitting} >
                {isSubmitting ? 'Loading...' : 'Login'}
            </Button>
        </form>
    )
}