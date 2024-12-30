import React, { CSSProperties } from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { ActivitySquare, AlertTriangle, Book, FolderClock, Home, LogOut, MenuSquare, MessageSquare, PlusSquare, Search, User } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { ModeToggleSwitch } from "./ModeToggle"
import { Link, usePage } from "@inertiajs/react"
import { PopoverClose } from "@radix-ui/react-popover"

const SidebarNav = () => {
    const { auth } = usePage().props

    return (
        <SidebarProvider className="hidden w-max md:block" style={{
            '--sidebar-width': '10rem'
        } as CSSProperties}>
            <Sidebar className="hidden md:flex" collapsible="icon">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton className="hover:bg-accent" asChild>
                                <Link href={route('home')}>
                                    <span className="ps-1">S</span>
                                    <h2 className="text-xl font-bold ps-1">ShareFly</h2>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className="hover:bg-accent" asChild>
                                <SidebarTrigger className="justify-start">
                                    <span>Collapse</span>
                                </SidebarTrigger>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent className="justify-center">
                    <SidebarMenu className="gap-2 px-2">
                        <SidebarMenuItem>
                            <SidebarMenuButton className="hover:bg-accent" asChild>
                                <a href='/'>
                                    <Home />
                                    <span>Home</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className="hover:bg-accent" asChild>
                                <a href='#'>
                                    <Search />
                                    <span>Search</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        {
                            auth.user && (
                                <SidebarMenuItem>
                                    <SidebarMenuButton className="hover:bg-accent" asChild>
                                        <a href='#'>
                                            <PlusSquare />
                                            <span>Create Post</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        }
                        <SidebarMenuItem>
                            <SidebarMenuButton className="hover:bg-accent" asChild>
                                <a href='#'>
                                    <FolderClock />
                                    <span>Movie Anime</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className="hover:bg-accent" asChild>
                                <a href='#'>
                                    <Book />
                                    <span>Read Book</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        {
                            auth.user && (
                                <>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="hover:bg-accent" asChild>
                                            <Link href={route('chat')}>
                                                <MessageSquare />
                                                <span>Messages</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="hover:bg-accent" asChild>
                                            <a href='#'>
                                                <User />
                                                <span>Profile</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </>
                            )
                        }
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter className="mb-2">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <SidebarMenuButton className="hover:bg-accent">
                                        <MenuSquare />
                                        <span>Menu</span>
                                    </SidebarMenuButton>
                                </PopoverTrigger>
                                <PopoverContent side="right" align="end" className="flex flex-col gap-2 w-max">
                                    {
                                        auth.user && (
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
                                        <Label htmlFor="switchMode" className='justify-start cursor-pointer'>
                                            Theme Mode
                                            <ModeToggleSwitch id='switchMode' />
                                        </Label>
                                    </Button>
                                    {
                                        auth.user && (
                                            <PopoverClose asChild>
                                                <Button variant={'ghost'} className="justify-start" asChild>
                                                    <Link href={route('logout')} method="post">
                                                        <LogOut />
                                                        <span>Logout</span>
                                                    </Link>
                                                </Button>
                                            </PopoverClose>
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