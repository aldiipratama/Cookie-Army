import { z } from "zod";

export const registerFormSchema = z.object({
  firstname: z.string({
    required_error: 'Firstname is required',
    invalid_type_error: 'Firstname must be a string'
  }),
  lastname: z.string({
    required_error: 'Firstname is required',
    invalid_type_error: 'Firstname must be a string'
  }),
  username: z.string({
    required_error: 'Firstname is required',
    invalid_type_error: 'Firstname must be a string'
  }).min(3, 'Username must be at least 3 characters.'),
  email: z.string().email('Email must be a valid email.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
  password_confirmation: z.string(),
  role: z.number()
}).refine(data => data.password === data.password_confirmation, {
  message: "Confirm password don't match with password",
  path: ['password_confirmation']
})