import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().email('Email must be valid email address.'),
    password: z.string().min(8, 'Password must be at least 8 characters.')
})