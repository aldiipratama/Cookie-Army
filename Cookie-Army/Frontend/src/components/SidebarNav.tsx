'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, User, MenuSquare, AlertTriangle, LogOut, ActivitySquare, Search, PlusSquare, FolderClock, Book, MessageSquareIcon, Loader, Send } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarFooter, SidebarTrigger } from '@/components/ui/sidebar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { ModeToggleSwitch } from './ui/ModeToggle'
import { useAuth } from '@/hooks/controllers/auth/use-auth'
import { signOut, useSession } from 'next-auth/react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { useForm } from 'react-hook-form'
import { postSchema } from '@/requests/postRequest'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'

const SidebarNav = () => {
    const { logoutIsPending, logoutMutate, user } = useAuth({ middleware: 'auth' })
    const { data: userSession } = useSession()
    const [loading, setLoading] = useState(false)

    const postForm = useForm<z.infer<typeof postSchema>>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            description: '',
            image: '',
            slug: '',
            userId: undefined
        }
    })

    const handleLogout = async () => {
        if (user) logoutMutate()
        setLoading(true)
        await signOut({ redirectTo: '/login' })
        setLoading(false)
    }

    const onSubmit = (value: z.infer<typeof postSchema>) => {
        postForm.reset()
        console.log(value)
    }


    return (
        <SidebarProvider className='w-max hidden md:block'>
            <Sidebar className="hidden md:flex" collapsible='icon'>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton className='hover:bg-accent' asChild>
                                <Link href="/">
                                    <span className='ps-1'>S</span>
                                    <h2 className="text-xl font-bold ps-1">ShareFly</h2>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className='hover:bg-accent' asChild>
                                <SidebarTrigger className='justify-start'>
                                    <span>Collapse</span>
                                </SidebarTrigger>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent className='justify-center'>
                    <SidebarMenu className='gap-4 px-2'>
                        <SidebarMenuItem>
                            <SidebarMenuButton className='hover:bg-accent' asChild>
                                <Link href="/">
                                    <Home />
                                    Home
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className='hover:bg-accent' asChild>
                                <Link href="/">
                                    <Search />
                                    Search
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        {
                            (user || userSession?.user) && (
                                <SidebarMenuItem>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <SidebarMenuButton className='hover:bg-accent'>
                                                <PlusSquare />
                                                Create Post
                                            </SidebarMenuButton>
                                        </DialogTrigger>
                                        <Form {...postForm}>
                                            <form onSubmit={postForm.handleSubmit(onSubmit)}>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            Create Post
                                                        </DialogTitle>
                                                    </DialogHeader>
                                                    <div className="grid gap-2">
                                                        <FormField
                                                            control={postForm.control}
                                                            name="image"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Input {...field} placeholder="image" />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={postForm.control}
                                                            name="description"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Textarea {...field} placeholder="Description" />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={postForm.control}
                                                            name="slug"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Input {...field} placeholder="slug" type='hidden' />
                                                                    </FormControl>
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={postForm.control}
                                                            name="userId"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Input {...field} placeholder="userId" type='hidden' />
                                                                    </FormControl>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button variant={'secondary'}>Cancel</Button>
                                                        </DialogClose>
                                                        <Button type='submit'>Post <Send /></Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </form>
                                        </Form>
                                    </Dialog>
                                </SidebarMenuItem>
                            )
                        }
                        <SidebarMenuItem>
                            <SidebarMenuButton className='hover:bg-accent' asChild>
                                <Link href="/anime">
                                    <FolderClock />
                                    Movie Anime
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className='hover:bg-accent' asChild>
                                <Link href="/book">
                                    <Book />
                                    Read Book
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        {
                            (user || userSession?.user) && (
                                <>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className='hover:bg-accent' asChild>
                                            <Link href="/chat">
                                                <MessageSquareIcon />
                                                Messages
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className='hover:bg-accent' asChild>
                                            <Link href="/profile">
                                                <User />
                                                Profile
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </>
                            )
                        }
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter className='mb-2'>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <SidebarMenuButton className='hover:bg-accent'>
                                        <MenuSquare />
                                        <span>Menu</span>
                                    </SidebarMenuButton>
                                </PopoverTrigger>
                                <PopoverContent side="right" align="end" className="flex flex-col gap-2 w-48">
                                    {
                                        (user || userSession?.user) && (
                                            <Button variant={'ghost'} className="justify-start">
                                                <ActivitySquare />
                                                <span>Your Activity</span>
                                            </Button>
                                        )
                                    }
                                    <Button variant={'ghost'} className="justify-start">
                                        <AlertTriangle />
                                        <span>Report issue</span>
                                    </Button>
                                    <Button variant={'ghost'} asChild>
                                        <Label htmlFor="switchMode" className='cursor-pointer'>
                                            Theme Mode
                                            <ModeToggleSwitch id='switchMode' />
                                        </Label>
                                    </Button>
                                    {
                                        (user || userSession?.user) && (
                                            <Button variant={'ghost'} className="justify-start" onClick={handleLogout} disabled={logoutIsPending}>
                                                {
                                                    (logoutIsPending || loading) ? (
                                                        <>
                                                            <Loader className='animate-spin' />
                                                            Loading
                                                        </>
                                                    ) : (
                                                        <>
                                                            <LogOut />
                                                            <span>Logout</span>
                                                        </>
                                                    )
                                                }
                                            </Button>
                                        )
                                    }
                                </PopoverContent>
                            </Popover>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    )
}

export default SidebarNav

