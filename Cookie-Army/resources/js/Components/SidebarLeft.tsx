import { usePage } from "@inertiajs/react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "./Image";
import { useRelationships } from "@/hooks/features/relationships/useRelationships";
import { toPascalCase } from "@/lib/toPascalCase";

const SidebarLeft = () => {
    const { auth } = usePage().props;
    const { peopleYouMayKnow, sumFollowers, sumFollowings } = useRelationships(
        auth?.user?.id
    );

    return (
        <div className="flex flex-col justify-between col-span-3 max-md:hidden">
            {auth.user && (
                <div className={cn("flex flex-col gap-4")}>
                    <div className="w-full overflow-hidden rounded-lg">
                        <Image
                            src="https://placehold.co/300x100?text=ini background profile"
                            alt="image"
                            cursor="yes"
                            variant="bgProfile"
                            className="w-full"
                        />
                        <div className="relative flex flex-col gap-4 px-4 text-center bg-accent">
                            <Image
                                src={auth.user?.profile_picture}
                                alt={auth.user?.profile_picture}
                                className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 border rounded-full cursor-pointer inset-x-1/2 bg-accent"
                                variant="profile"
                            />
                            <div className="flex justify-between mt-1">
                                <Button
                                    variant={"ghost"}
                                    className="flex flex-col items-center justify-center py-10 hover:bg-accent-foreground/10"
                                >
                                    {sumFollowers} <span>Followers</span>
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className="flex flex-col items-center justify-center py-10 hover:bg-accent-foreground/10"
                                >
                                    {sumFollowings} <span>Following</span>
                                </Button>
                            </div>
                            <Button
                                variant={"link"}
                                className="flex flex-col gap-0 -mt-5 bg-transparent hover:no-underline"
                            >
                                <span
                                    className="text-lg hover:underline"
                                    data-testid="name__user"
                                >
                                    {toPascalCase(auth.user?.first_name)}{" "}
                                    {toPascalCase(auth.user?.last_name)}
                                </span>
                                <span
                                    className="text-sm text-gray-500 hover:underline"
                                    data-testid="user__name"
                                >
                                    @{auth.user?.username}
                                </span>
                            </Button>
                            <div
                                className="flex flex-col items-center gap-4"
                                data-testid="user__bio"
                            >
                                <p className="text-sm">{auth.user?.bio}</p>
                                <Button
                                    variant={"secondary"}
                                    className="mb-4 max-w-max bg-background hover:bg-accent-foreground/10"
                                    data-testid="button_to_profile"
                                >
                                    My Profile
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                        <span className="self-start" title="suggestion_friends">
                            People you may know
                        </span>
                        <div className="flex flex-col w-full gap-8">
                            {(peopleYouMayKnow?.length || 0) === 0 ? (
                                <p className="text-sm text-gray-500">
                                    No people available.
                                </p>
                            ) : (
                                peopleYouMayKnow?.slice(0, 3).map((people) => (
                                    <div
                                        key={people.id}
                                        className="flex items-center justify-between w-full"
                                    >
                                        <Button
                                            variant={"ghost"}
                                            className="flex items-center gap-2 p-0 hover:bg-transparent"
                                        >
                                            <Image
                                                src={people.profile_picture}
                                                alt={people.profile_picture}
                                                variant="profile"
                                            />
                                            <div className="flex flex-col justify-center text-start">
                                                <span>
                                                    {toPascalCase(
                                                        people.first_name
                                                    )}{" "}
                                                    {toPascalCase(
                                                        people.last_name
                                                    )}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    @{people.username}
                                                </span>
                                            </div>
                                        </Button>
                                        <Button variant={"link"}>
                                            {"+ Follow"}
                                        </Button>
                                    </div>
                                ))
                            )}
                        </div>
                        {(peopleYouMayKnow?.length || 0) > 3 && (
                            <div className="flex flex-col items-center">
                                <Button
                                    variant={"link"}
                                    className="text-blue-500 dark:text-yellow-500"
                                >
                                    See more...
                                </Button>
                                <div className="w-1/2 h-[1px] bg-gray-500"></div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SidebarLeft;
