import { Link, router, usePage } from "@inertiajs/react";
import Search from "./Search";
import {
    FiBell,
    FiBookOpen,
    FiFilm,
    FiHome,
    FiLogOut,
    FiMenu,
    FiMessageCircle,
    FiSettings,
    FiUser,
} from "react-icons/fi";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { Theme, useTheme } from "./theme-provider";
import { LuMoon, LuSun, LuSunMoon } from "react-icons/lu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import Image from "./Image";
import { toPascalCase } from "@/lib/toPascalCase";

const Navbar = () => {
    const { setTheme } = useTheme();
    const [openMenu, setOpenMenu] = useState(false);
    const { auth, canLogin, canRegister } = usePage().props;

    const handleClickMenuItem = (theme?: Theme) => {
        theme && setTheme(theme);
        setOpenMenu(false);
    };

    return (
        <header className="sticky top-0 z-[99]">
            <nav className="grid justify-between grid-cols-12 px-5 py-2 rounded-lg shadow-lg bg-accent/70 backdrop-blur-lg">
                <div className="flex items-center col-span-3 gap-4">
                    <img
                        src="https://placehold.co/50?text=logo"
                        alt="placehold"
                        className="rounded-full"
                    />
                    <Search />
                </div>

                {/* desktop menu */}
                <div className="flex items-center justify-center col-span-6 gap-4 pr-10 text-2xl max-md:hidden">
                    <Link
                        href="#"
                        className="p-2 rounded-lg hover:bg-accent bg-accent group"
                    >
                        <FiHome className="text-white group-hover:fill-blue-500 dark:group-hover:fill-yellow-500 dark:group-hover:text-black group-hover:text-white fill-blue-500 dark:fill-yellow-500 dark:text-black" />
                    </Link>
                    <Link
                        href={route("chat")}
                        className="p-2 rounded-lg hover:bg-accent group"
                    >
                        <FiMessageCircle className="group-hover:fill-blue-500 dark:group-hover:fill-yellow-500 dark:group-hover:text-black group-hover:text-white" />
                    </Link>
                    <Link
                        href="#"
                        className="p-2 rounded-lg hover:bg-accent group"
                    >
                        <FiFilm className="group-hover:fill-blue-500 dark:group-hover:fill-yellow-500 dark:group-hover:text-black group-hover:text-white" />
                    </Link>
                    <Link
                        href="#"
                        className="p-2 rounded-lg hover:bg-accent group"
                    >
                        <FiBookOpen className="group-hover:fill-blue-500 dark:group-hover:fill-yellow-500 dark:group-hover:text-black group-hover:text-white" />
                    </Link>
                </div>
                <div className="flex items-center justify-end col-span-3 gap-2 max-md:hidden">
                    <ModeToggle />
                    {auth.user ? (
                        <>
                            <Button variant={"ghost"}>
                                <FiBell />
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Image
                                        src={auth?.user.profile_picture}
                                        alt={auth?.user.profile_picture}
                                        variant="profile"
                                    />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="z-[999]"
                                    align="end"
                                    side="top"
                                >
                                    <DropdownMenuLabel className="text-center">
                                        {toPascalCase(auth?.user.first_name)}{" "}
                                        {toPascalCase(auth?.user.last_name)}
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Button
                                            variant={"ghost"}
                                            className="justify-start w-full"
                                        >
                                            <FiUser /> Profile
                                        </Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Button
                                            variant={"ghost"}
                                            className="justify-start w-full"
                                        >
                                            <FiSettings /> Settings
                                        </Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Button
                                            variant={"ghost"}
                                            className="justify-start w-full"
                                            asChild
                                        >
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                            >
                                                <FiLogOut /> Logout
                                            </Link>
                                        </Button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            {canLogin && (
                                <Button
                                    variant={"ghost"}
                                    onClick={() => router.visit(route("login"))}
                                >
                                    Login
                                </Button>
                            )}
                            {canRegister && (
                                <Button
                                    variant={"ghost"}
                                    onClick={() =>
                                        router.visit(route("register"))
                                    }
                                >
                                    Register
                                </Button>
                            )}
                        </>
                    )}
                </div>

                {/* mobile menu */}
                <div className="flex items-center justify-end col-span-9 md:hidden">
                    <Sheet open={openMenu} onOpenChange={setOpenMenu}>
                        <SheetTrigger>
                            <Button variant={"ghost"}>
                                <FiMenu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="z-[999] max-md:w-2/4">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <Separator className="mt-2" />
                            <div className="flex flex-col gap-4 mt-2">
                                <Button
                                    variant={"ghost"}
                                    className="flex items-center justify-start gap-2 bg-accent group"
                                    onClick={() => handleClickMenuItem()}
                                >
                                    <FiHome className="text-white group-hover:fill-blue-500 dark:group-hover:fill-yellow-500 dark:group-hover:text-black group-hover:text-white fill-blue-500 dark:fill-yellow-500 dark:text-black !w-5 !h-5" />{" "}
                                    Home
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className="flex items-center justify-start gap-2 group"
                                    onClick={() => handleClickMenuItem()}
                                >
                                    <FiMessageCircle className="group-hover:fill-blue-500 dark:group-hover:fill-yellow-500 dark:group-hover:text-black group-hover:text-white !w-5 !h-5" />{" "}
                                    Chat
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className="flex items-center justify-start gap-2 group"
                                    onClick={() => handleClickMenuItem()}
                                >
                                    <FiFilm className="group-hover:fill-blue-500 dark:group-hover:fill-yellow-500 dark:group-hover:text-black group-hover:text-white !w-5 !h-5" />{" "}
                                    Anime
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className="flex items-center justify-start gap-2 group"
                                    onClick={() => handleClickMenuItem()}
                                >
                                    <FiBookOpen className="group-hover:fill-blue-500 dark:group-hover:fill-yellow-500 dark:group-hover:text-black group-hover:text-white !w-5 !h-5" />{" "}
                                    Book
                                </Button>
                                <Separator />
                                <span>Theme</span>
                                <Button
                                    variant={"ghost"}
                                    className="flex items-center justify-start gap-2"
                                    onClick={() => handleClickMenuItem("light")}
                                >
                                    <LuSun className="!w-5 !h-5" /> Light
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className="flex items-center justify-start gap-2"
                                    onClick={() => handleClickMenuItem("dark")}
                                >
                                    <LuMoon className="!w-5 !h-5" /> Night
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className="flex items-center justify-start gap-2"
                                    onClick={() =>
                                        handleClickMenuItem("system")
                                    }
                                >
                                    <LuSunMoon className="!w-5 !h-5" /> System
                                </Button>
                                <Separator />
                                <Button
                                    variant={"ghost"}
                                    className="flex items-center justify-start gap-2"
                                >
                                    <FiSettings className="!w-5 !h-5" />{" "}
                                    Settings
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
