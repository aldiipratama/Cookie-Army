'use client'

import { FolderClock, Home, MenuIcon, Book, PlusSquare, Search, User, LogOut, AlertTriangle, BookMarked, ActivitySquare, MenuSquare } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { Sheet, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ModeToggleSwitch } from "./ui/ModeToggle";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Label } from "./ui/label";

export default function AppSidebar() {
    const { isMobile } = useSidebar()

    return (
        <>
            <Sidebar variant="inset" className="w-60" collapsible="offcanvas">
                <SidebarContent className="flex flex-col justify-between">
                    <SidebarGroupLabel className="text-xl font-bold">ShareFly</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size={'lg'}>
                                    <Home />
                                    <span>Home</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size={'lg'}>
                                    <Search />
                                    <span>Search</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size={'lg'}>
                                    <PlusSquare />
                                    <span>Create Post</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem className={cn(isMobile && 'hidden')}>
                                <SidebarMenuButton size={'lg'}>
                                    <FolderClock />
                                    <span>Movie Anime</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem className={cn(isMobile && 'hidden')}>
                                <SidebarMenuButton size={'lg'}>
                                    <Book />
                                    <span>Read Book</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size={'lg'}>
                                    <User />
                                    <span>Profile</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            {/* Mobile */}
                            <SidebarMenuItem className={cn(!isMobile && 'hidden')}>
                                <Sheet onOpenChange={() => !isMobile}>
                                    <SheetTrigger className="hover:bg-accent p-2 rounded-md">
                                        <MenuIcon className="mx-auto" />
                                        <span>Menu</span>
                                    </SheetTrigger>
                                    <SheetContent className="w-60 flex flex-col justify-between">
                                        <div className="flex flex-col gap-2">
                                            <SheetTitle>
                                                Menu
                                            </SheetTitle>
                                            <Separator />
                                            <Button variant={'ghost'} className="w-full justify-start">
                                                <FolderClock />
                                                <span>Movie Anime</span>
                                            </Button>
                                            <Button variant={'ghost'} className="w-full justify-start">
                                                <Book />
                                                <span>Read Book</span>
                                            </Button>
                                            <Button variant={'ghost'} className="w-full justify-start">
                                                <BookMarked />
                                                <span>Bookmark</span>
                                            </Button>
                                            <Button variant={'ghost'} className="w-full justify-start">
                                                <ActivitySquare />
                                                <span>Your Activity</span>
                                            </Button>
                                            <span>Settings</span>
                                            <Separator />
                                            <Button variant={'ghost'} asChild>
                                                <Label htmlFor="themeMode" className="text-sm font-light cursor-pointer flex justify-between">
                                                    <span>Theme Mode</span>
                                                    <ModeToggleSwitch id='themeMode' />
                                                </Label>
                                            </Button>
                                            <Button variant={'ghost'} className="w-full justify-start">
                                                <AlertTriangle />
                                                <span>Report Issue</span>
                                            </Button>
                                            <Button variant={'ghost'} className="w-full justify-start">
                                                <LogOut />
                                                <span>Logout</span>
                                            </Button>
                                        </div>
                                        <SheetFooter>
                                            <span className="text-xs text-muted">Copyright &copy; 2024 - ShareFly By Cookie-Army</span>
                                        </SheetFooter>
                                    </SheetContent>
                                </Sheet>
                                {/* End Mobile */}
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarFooter className={cn("mb-2", isMobile && 'hidden')}>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton size={'lg'}>
                                    <MenuSquare />
                                    <span>Menu</span>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel className="font-bold">
                                    Settings
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup className="space-y-2">
                                    <DropdownMenuItem className="flex justify-start">
                                        <ActivitySquare />
                                        <span>Your Activity</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="justify-between">
                                        <Label htmlFor="switchMode">Theme Mode</Label>
                                        <ModeToggleSwitch id='switchMode' />
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <AlertTriangle />
                                        <span>Report issue</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut />
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarFooter>
                </SidebarContent>
            </Sidebar>
        </>
    )
}
