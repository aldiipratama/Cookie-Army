import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker/locale/id_ID";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ArrowRightToLine, BadgeCheckIcon } from "lucide-react";

export default function PeopleYouMayKnow() {
    return (
        <div className="px-2 space-y-4">
            <div className="flex gap-2 p-2 border rounded-lg">
                <Avatar>
                    <AvatarImage src="https://picsum.photos/50" alt='image' />
                </Avatar>
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <Button variant={'link'} className="p-0 justify-start h-full">{faker.person.firstName()}</Button>
                        <BadgeCheckIcon className="text-blue-500 size-5" />
                    </div>
                    <Button variant={'link'} className="text-sm text-slate-500 h-full p-0 justify-start">{faker.person.bio()}</Button>
                </div>
            </div>
            <div className="flex flex-col px-2 border rounded-lg">
                <div className="flex justify-between items-center px-2">
                    <span className="text-sm">
                        People you may know
                    </span>
                    <Button variant={'link'} className="p-0 text-xs font-light">
                        See more <ArrowRightToLine />
                    </Button>
                </div>
                <div className="flex flex-col gap-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex gap-2 p-2 items-center justify-between">
                            <Avatar className="cursor-pointer group/image relative">
                                <AvatarImage src={`https://picsum.photos/50?random=${i + 20}`} alt="avatar" />
                            </Avatar>
                            <div className="flex flex-col w-full h-full">
                                <div className="flex gap-2">
                                    <Button variant={'link'} className="p-0 text-sm justify-start h-full">{faker.person.firstName()}</Button>
                                    <BadgeCheckIcon className="text-blue-500 size-5" />
                                </div>
                                <Button variant={'link'} className="text-[10px] p-0 text-wrap h-full underline-offset-2 text-start text-slate-500 line-clamp-2">Following by {faker.person.firstName()} + 7 lainnya</Button>
                            </div>
                            <Button variant={'link'} className="p-0 text-xs">
                                + Follow
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-xs text-slate-500 text-center">Copyright &copy; ShareFly from Cookie-Army</p>
        </div>
    )
}
