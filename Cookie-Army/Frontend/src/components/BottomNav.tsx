import Link from 'next/link'
import { Home, User, Search, PlusSquare, MenuSquare, FolderClock, Book, LogOut, ActivitySquare, LogIn, Indent } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'
import { ModeToggleSwitch } from './ui/ModeToggle'
import { Button } from './ui/button'
import { useAuth } from '@/controllers/auth/use-auth'

const BottomNav = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-background/50 backdrop-blur-2xl border-t border-border p-1 md:hidden z-[1]">
            <ul className="flex justify-around">
                <li>
                    <Button variant={'ghost'} asChild>
                        <Link href="/" className="flex flex-col items-center hover:bg-transparent hover:text-muted-foreground">
                            <Home size={18} />
                            <span className="text-xs">Home</span>
                        </Link>
                    </Button>
                </li>
                <li>
                    <Button variant={'ghost'} asChild>
                        <Link href="/" className="flex flex-col items-center hover:bg-transparent hover:text-muted-foreground">
                            <Search size={18} />
                            <span className="text-xs">Search</span>
                        </Link>
                    </Button>
                </li>
                {
                    user && (
                        <>
                            <li>
                                <Button variant={'ghost'} asChild>
                                    <Link href="/" className="flex flex-col items-center hover:bg-transparent hover:text-muted-foreground">
                                        <PlusSquare size={18} />
                                        <span className="text-xs">Create Post</span>
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant={'ghost'} asChild>
                                    <Link href="/profile" className="flex flex-col items-center hover:bg-transparent hover:text-muted-foreground">
                                        <User size={18} />
                                        <span className="text-xs">Profile</span>
                                    </Link>
                                </Button>
                            </li>
                        </>
                    )
                }
                <li>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={'ghost'} className='hover:bg-transparent hover:text-muted-foreground flex flex-col items-center mt-1'>
                                <MenuSquare size={18} />
                                <span className="text-xs">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='space-y-2'>
                            <SheetTitle>Menu</SheetTitle>
                            <Separator />
                            <div className="flex flex-col gap-2">
                                <Button variant={'ghost'} className='w-full justify-start'>
                                    <FolderClock />
                                    <Link href="/">
                                        <span className="text-sm">Movie Anime</span>
                                    </Link>
                                </Button>
                                <Button variant={'ghost'} className='w-full justify-start'>
                                    <Book />
                                    <Link href="/">
                                        <span className="text-sm">Read Book</span>
                                    </Link>
                                </Button>
                                {
                                    user && (
                                        <Button variant={'ghost'} className='w-full justify-start'>
                                            <ActivitySquare />
                                            <Link href="/">
                                                <span className="text-sm">Your Activity</span>
                                            </Link>
                                        </Button>
                                    )
                                }
                            </div>
                            <SheetTitle>Setting</SheetTitle>
                            <Separator />
                            <div className="flex-flex-col gap-2">
                                <Button variant={'ghost'} className='w-full justify-between'>
                                    <span>Theme Mode</span>
                                    <ModeToggleSwitch />
                                </Button>
                                {
                                    user ? (
                                        <Button variant={'ghost'} className='w-full justify-start'>
                                            <LogOut />
                                            <Link href="/">
                                                <span className="text-sm">Logout</span>
                                            </Link>
                                        </Button>
                                    ) : (
                                        <div className="flex gap-2">
                                            <Button variant={'default'} className='w-full justify-start'>
                                                <LogIn />
                                                <Link href="/login">
                                                    <span className="text-sm">Login</span>
                                                </Link>
                                            </Button>
                                            <Button variant={'default'} className='w-full justify-start'>
                                                <Indent />
                                                <Link href="/register">
                                                    <span className="text-sm">Register</span>
                                                </Link>
                                            </Button>
                                        </div>
                                    )
                                }
                            </div>
                        </SheetContent>
                    </Sheet>
                </li>
            </ul>
        </nav>
    )
}

export default BottomNav

