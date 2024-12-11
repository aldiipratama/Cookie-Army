'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/controllers/auth/use-auth";
import { registerFormSchema } from "@/requests/register-request";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftCircle, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ModeToggleClick } from "@/components/ui/ModeToggle";
import ButtonProvider from "@/components/ui/button-provider";

export default function Register() {
  const { registerIsPending, registerMutate } = useAuth({ middleware: 'guest' })

  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      role: 3
    }
  })

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    const { firstname, lastname, username, email, password, password_confirmation, role } = values
    await registerMutate({ firstname, lastname, username, email, password, password_confirmation, role })
  }

  return (
    <div className="flex justify-center p-5 items-center h-screen">
      <Card className="md:w-1/2 relative w-full">
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
          <div className="flex gap-10 items-center justify-center mt-10">
            <div className="grid gap-4">
              <CardHeader className="p-0">
                <CardTitle className="text-xl">Register</CardTitle>
                <CardDescription className="text-xs">
                  Receive Personalized Recomendations and Offers Just For You
                </CardDescription>
              </CardHeader>
              <div className="grid grid-cols-3 gap-2">
                <ButtonProvider provider="google" />
                <ButtonProvider provider="twitter" />
                <ButtonProvider provider="tiktok" />
              </div>
              <span className="text-center text-xs">or</span>
              <Form {...registerForm}>
                <form className="grid gap-4" onSubmit={registerForm.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={registerForm.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Firstname</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="Your firstname..." id='firstname' autoFocus {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Lastname</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="Your lastname..." id='lastname' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={registerForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Username</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Your username..." id='username' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email..." id='email' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={registerForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="********" id='password' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="password_confirmation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="********" id='password_confirmation' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" disabled={registerIsPending}>
                    {
                      registerIsPending ? (
                        <>
                          <Loader className='animate-spin' />
                          Loading
                        </>
                      ) : 'Register'
                    }
                  </Button>
                  <p className="text-center text-xs">
                    Have an account?
                    <Button variant={'link'} className="p-0 ms-2">
                      <Link href={'/login'}>Login</Link>
                    </Button>
                  </p>
                </form>
              </Form>
            </div>
            <Image src='https://picsum.photos/150?random=logo' alt="logo" className="rounded-full max-md:hidden" width={150} height={150} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
