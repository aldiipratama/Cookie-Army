'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, User, MenuSquare, AlertTriangle, LogOut, ActivitySquare, Search, PlusSquare, FolderClock, Book, MessageSquareIcon, LogIn, Indent, Loader } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarFooter, SidebarTrigger } from '@/components/ui/sidebar'
import BottomNav from './BottomNav'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { ModeToggleSwitch } from './ui/ModeToggle'
import { useAuth } from '@/controllers/auth/use-auth'

const ResponsiveNav = () => {
    const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('mobile')
    const { logoutIsPending, logoutMutate, user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth < 768) {
                setScreenSize('mobile')
            } else if (window.innerWidth < 1024) {
                setScreenSize('tablet')
            } else {
                setScreenSize('desktop')
            }
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    if (screenSize === 'mobile') {
        return <BottomNav />
    }


    return (
        <SidebarProvider className='w-max'>
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
                            user && (
                                <SidebarMenuItem>
                                    <SidebarMenuButton className='hover:bg-accent' asChild>
                                        <Link href="/">
                                            <PlusSquare />
                                            Create Post
                                        </Link>
                                    </SidebarMenuButton>
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
                            user ? (
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
                            ) : (
                                <>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className='hover:bg-accent' asChild>
                                            <Link href="/login">
                                                <LogIn />
                                                Login
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className='hover:bg-accent' asChild>
                                            <Link href="/register">
                                                <Indent />
                                                Register
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
                                        user && (
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
                                        user && (
                                            <Button variant={'ghost'} className="justify-start" onClick={() => logoutMutate()} disabled={logoutIsPending}>
                                                {
                                                    logoutIsPending ? (
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

export default ResponsiveNav

