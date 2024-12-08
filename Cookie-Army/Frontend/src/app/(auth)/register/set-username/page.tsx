'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function SetUsername() {
  const usernameSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters" })
  })

  const usernameForm = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: ''
    }
  })

  const onSubmit = (value: z.infer<typeof usernameSchema>) => {
    console.log(value)
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <Image src={'https://picsum.photos/150'} alt="logo" width={50} height={50} className="rounded-full mx-auto border" />
      <Card className="w-1/3">
        <CardContent className="pt-4 space-y-2">
          <p className="text-foreground/50">Please enter your username for your account</p>
          <Form {...usernameForm}>
            <form className="gap-4 flex flex-col" onSubmit={usernameForm.handleSubmit(onSubmit)}>
              <FormField
                control={usernameForm.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder='Username' className="py-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="self-end">Next</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
