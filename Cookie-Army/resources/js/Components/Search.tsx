import {
    LuMoon,
    LuSearch,
    LuSettings,
    LuSun,
    LuSunMoon,
    LuUser,
} from "react-icons/lu";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/Components/ui/command";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { Link, router } from "@inertiajs/react";

const Search = () => {
    const [open, setOpen] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (
                (e.key === "k" || e.key === "/") &&
                (e.metaKey || e.ctrlKey || e.altKey)
            ) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <div className="flex w-full">
            <Button
                variant="ghost"
                className="relative justify-start w-full rounded-md max-md:w-2/3 bg-accent hover:bg-accent-foreground/10 ps-8 max-md:p-0"
                onClick={() => setOpen(!open)}
            >
                <LuSearch className="absolute w-[1.2rem] h-[1.2em] text-muted-foregroundtext-muted-foreground top-2 left-2 max-md:inset-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2" />
                <span className="max-md:hidden">Quick Search...</span>
                <div className="absolute right-2 top-2 max-md:hidden">
                    <p className="text-xs text-muted-foreground">
                        <kbd className="ms-1 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">⌘</span>+ k |{" "}
                            <span className="text-xs">CTRL</span>+ k
                        </kbd>
                    </p>
                </div>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput
                    placeholder="search people or your friends..."
                    className="border-none focus:ring-0"
                />
                <CommandList
                    className="custom-scrollbar "
                    onClick={() => setOpen(!open)}
                >
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Theme">
                        <CommandItem>
                            <Button
                                variant="ghost"
                                className="justify-start w-full"
                                onClick={() => setTheme("light")}
                            >
                                <LuSun className="h-[1.2rem] w-[1.2rem]" />
                                Light
                            </Button>
                        </CommandItem>
                        <CommandItem>
                            <Button
                                variant="ghost"
                                className="justify-start w-full"
                                onClick={() => setTheme("dark")}
                            >
                                <LuMoon className="h-[1.2rem] w-[1.2rem]" />
                                Dark
                            </Button>
                        </CommandItem>
                        <CommandItem>
                            <Button
                                variant="ghost"
                                className="justify-start w-full"
                                onClick={() => setTheme("system")}
                            >
                                <LuSunMoon className="h-[1.2rem] w-[1.2rem]" />
                                System
                            </Button>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <LuUser />
                            <Button
                                variant={"ghost"}
                                className="justify-start w-full"
                                asChild
                            >
                                <Link href={route("profile.edit")}>
                                    Profile
                                </Link>
                            </Button>
                            <CommandShortcut>CTRL+P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <LuSettings />
                            <Button
                                variant={"ghost"}
                                className="justify-start w-full"
                                asChild
                            >
                                <Link href={"#"}>Settings</Link>
                            </Button>
                            <CommandShortcut>CTRL+S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    );
};

export default Search;
