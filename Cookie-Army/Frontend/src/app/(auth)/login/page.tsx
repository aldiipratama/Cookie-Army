'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeftCircle, Loader } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from "@/requests/login-request"
import { useAuth } from "@/hooks/controllers/auth/use-auth"
import { ModeToggleClick } from "@/components/ui/ModeToggle"
import ButtonProvider from "@/components/ui/custom/button-provider"

export default function Login() {
    const { loginIsPending, loginMutate } = useAuth({ middleware: 'guest' })

    const loginForm = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
        loginMutate({ email: values.email, password: values.password })
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="md:w-2/5 w-4/5 relative">
                <Button variant={'ghost'} className="absolute top-2 left-2" asChild>
                    <Link href='/'>
                        <ArrowLeftCircle />
                        Back
                    </Link>
                </Button>
                <div className="absolute top-2 right-2">
                    <ModeToggleClick />
                </div>
                <CardContent className="py-5 bg-accent/30 rounded-lg">
                    <div className="flex gap-10 items-center justify-center">
                        <Image src='https://picsum.photos/150?random=logo' alt="logo" className="rounded-full max-md:hidden" width={150} height={150} />
                        <div className="grid gap-4 max-md:mt-10">
                            <CardHeader className="p-0">
                                <CardTitle className="text-2xl">Login</CardTitle>
                                <CardDescription>
                                    Receive Personalized Recomendations and Offers Just For You
                                </CardDescription>
                            </CardHeader>
                            <Form {...loginForm}>
                                <form className="grid gap-4" onSubmit={loginForm.handleSubmit(onSubmit)}>
                                    <FormField
                                        control={loginForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="Your email..." id='email' autoFocus {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={loginForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="********" id='password' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" disabled={loginIsPending}>
                                        {
                                            loginIsPending ? (
                                                <>
                                                    <Loader className='animate-spin' />
                                                    Loading
                                                </>
                                            ) : 'Login'
                                        }
                                    </Button>
                                </form>
                                <span className="text-center">or</span>
                                <div className="grid grid-cols-3 gap-2">
                                    <ButtonProvider provider="google" />
                                    <ButtonProvider provider="twitter" />
                                    <ButtonProvider provider="tiktok" />
                                </div>
                                <p className="text-center">
                                    Dont&apos;t have an account?
                                    <Button variant={'link'} className="p-0 ms-2">
                                        <Link href={'/register'}>Register</Link>
                                    </Button>
                                </p>
                            </Form>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
