/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { csrf } from "@/lib/axios"
import { IUser } from "@/model/user"
import { loginFormSchema } from "@/requests/login-request"
import { registerFormSchema } from "@/requests/register-request"
import { useMutation, useQuery } from "@tanstack/react-query"
import { isAxiosError } from "axios"
import { useParams } from "next/navigation"
import { useRouter } from "nextjs-toploader/app"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { z } from "zod"

export const useAuth = ({ middleware, redirect }: {
    middleware?: 'guest' | 'auth',
    redirect?: string
}) => {
    const router = useRouter()
    const params = useParams()

    // user
    const { data: user, error: userError } = useQuery<IUser>({
        queryKey: ['api/user'],
        queryFn: async () => {
            try {
                return await axios.get('/api/user').then(res => res.data)
            } catch (err) {
                throw err
            }
        }
    })

    // register
    const { isPending: registerIsPending, mutate: registerMutate } = useMutation({
        mutationKey: ['register'],
        mutationFn: async ({
            firstname,
            lastname,
            username,
            email,
            password,
            password_confirmation,
            role
        }: z.infer<typeof registerFormSchema>) => {
            try {
                await csrf()
                await axios.post('/register', {
                    firstname,
                    lastname,
                    username,
                    email,
                    password,
                    password_confirmation,
                    role
                })
            } catch (err) {
                throw err
            }
        },
        onSuccess: () => {
            toast('Register Success !', {
                position: 'top-center',
                type: 'success'
            })
            router.push('/')
        },
        onError: () => {
            toast('Register Failed, please try again !', {
                position: 'top-center',
                type: 'error'
            })
        }
    })

    // login
    const { isPending: loginIsPending, mutate: loginMutate } = useMutation({
        mutationKey: ['login'],
        mutationFn: async ({ email, password }: z.infer<typeof loginFormSchema>) => {
            try {
                await csrf()
                await axios.post('/login', { email, password })
            } catch (err) {
                throw err
            }
        },
        onSuccess: () => {
            toast('Login Success !', {
                position: 'top-center',
                type: 'success'
            })
            router.push('/')
        },
        onError: (err) => {
            if (isAxiosError(err)) {
                const errors = err.response?.data;
                if (errors.username) {
                    toast(errors.username, {
                        position: 'top-center',
                        type: 'error',
                    });
                } else {
                    toast('Login Failed, check your email and password and try again!', {
                        position: 'top-center',
                        type: 'error',
                    });
                }
            } else {
                toast('An unexpected error occurred!', {
                    position: 'top-center',
                    type: 'error',
                });
            }
        }
    })

    // forgot password
    const forgotPasswordSchema = z.object({ email: z.string().email('Email mus be a valid email') })
    const { isPending: forgotPasswordIsPending, mutate: forgotPasswordMutate } = useMutation({
        mutationKey: ['forgot-password'],
        mutationFn: async ({ email }: z.infer<typeof forgotPasswordSchema>) => {
            try {
                await csrf()
                await axios.post('/forgot-password', { email })
            } catch (err) {
                throw err
            }
        },
        onSuccess: () => {
            toast('Password has send to your email !', {
                position: 'top-center',
                type: 'success'
            })
            router.push('/')
        },
        onError: () => {
            toast('Ups, request failed.. please try again !', {
                position: 'top-center',
                type: 'error'
            })
        }
    })

    // reset password
    const { isPending: resetPasswordIsPending, mutate: resetPasswordMutate } = useMutation({
        mutationKey: ['reset-password'],
        mutationFn: async () => {
            try {
                await csrf()
                await axios.post('/reset-password', { token: params.token })
            } catch (err) {
                throw err
            }
        },
        onSuccess: () => {
            toast('Password has been reset !', {
                position: 'top-center',
                type: 'success'
            })
            router.push('/')
        },
        onError: (err) => {
            toast(err.message, {
                position: 'top-center',
                type: 'error'
            })
        }
    })

    // resend email verification
    const { isPending: resendEmailVerifIsPending, mutate: resendEmailVerifMutate } = useMutation({
        mutationKey: ['resend-email-verification'],
        mutationFn: async () => {
            try {
                await axios.post('/email/verification-notification')
            } catch (err) {
                throw err
            }
        },
        onSuccess: () => {
            toast('Email verification has been resend to your email !', {
                position: 'top-center',
                type: 'success'
            })
            router.push('/')
        },
        onError: () => {
            toast('Ups, request failed please try again', {
                position: 'top-center',
                type: 'error'
            })
        }
    })

    // logout
    const { isPending: logoutIsPending, mutate: logoutMutate } = useMutation({
        mutationKey: ['logout'],
        mutationFn: async () => {
            try {
                await axios.post('/logout')
            } catch (err) {
                throw err
            }
        },
        onSuccess: () => {
            toast("Logout success, Don't forget to come back!", {
                position: 'top-center',
                type: 'info'
            })
            router.push('/login')
        }
    })

    useEffect(() => {
        if (middleware === 'guest' && redirect && user) router.push(redirect)
        if (window.location.pathname === '/verify-email' && user?.email_verified_at) router.push(redirect!)
        if (middleware === 'auth' && userError) logoutMutate()
    }, [user, userError])

    return {
        user,
        registerIsPending,
        registerMutate,
        loginIsPending,
        loginMutate,
        forgotPasswordIsPending,
        forgotPasswordMutate,
        resetPasswordIsPending,
        resetPasswordMutate,
        resendEmailVerifIsPending,
        resendEmailVerifMutate,
        logoutIsPending,
        logoutMutate,
    }
}