import { z } from 'zod'

const phoneRegex = /^(\+98|0)?9\d{9}$/;
export const loginSchema =z.object({
    phone: z
        .string()
        .min(11, 'Phone number must be 11 digits')
        .max(11, 'Phone number must be 11 digits')
        .regex(phoneRegex, 'Please enter a valid phone number'),
});

export type LoginFormData = z.infer<typeof loginSchema>