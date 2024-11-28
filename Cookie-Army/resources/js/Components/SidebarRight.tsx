import { Link, usePage } from "@inertiajs/react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const SidebarRight = () => {
    const { auth } = usePage().props;

    return (
        <div className="flex flex-col items-center col-span-3 gap-4 max-md:hidden">
            {auth.user && (
                <>
                    <div
                        className={cn(
                            "flex flex-col gap-4 p-5 rounded-lg max-h-[620px] bg-accent w-full"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] bg-gray-500 flex-1" />
                            <span className="flex-1 text-nowrap">
                                Story 24 Hour
                            </span>
                            <div className="h-[1px] bg-gray-500 flex-1" />
                        </div>
                        <div className="flex-col hidden gap-2">
                            <Button
                                variant={"ghost"}
                                className="border-[5px] items-start justify-start p-2 flex border-blue-500 dark:border-yellow-500 bg-center bg-[url('https://placehold.co/200x100?text=ini_gambar_higlight')] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-background/30 rounded-lg h-40"
                            >
                                <div className="z-10 flex items-start gap-2 p-1 min-h-max hover:bg-accent/10">
                                    <img
                                        src="https://placehold.co/50?text=ini foto profile"
                                        alt="profile"
                                        className="size-[50px] rounded-full border"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-xl">
                                            Nama User
                                        </span>
                                        <span className="-mt-1 text-sm text-gray-300">
                                            @username
                                        </span>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <Button
                            variant={"link"}
                            asChild
                            className="hidden text-blue-500 dark:text-yellow-500"
                        >
                            <Link href="#">See more...</Link>
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SidebarRight;
