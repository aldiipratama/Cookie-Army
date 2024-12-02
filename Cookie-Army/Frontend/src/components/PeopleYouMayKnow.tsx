import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker/locale/id_ID";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function PeopleYouMayKnow() {
    return (
        <><div className="flex gap-2 px-2">
            <Avatar>
                <AvatarImage src="https://picsum.photos/50" />
            </Avatar>
            <div className="flex flex-col">
                <span>{faker.person.firstName()}</span>
                <span className="text-sm text-slate-500">{faker.person.bio()}</span>
            </div>
        </div>
            <div className="flex flex-col px-2 mt-4">
                <div className="flex justify-between items-center px-2">
                    <span className="text-sm">
                        People you may know
                    </span>
                    <Button variant={'link'} className="p-0 text-xs">
                        See more
                    </Button>
                </div>
                <div className="flex flex-col gap-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex gap-2 p-2 items-center justify-between">
                            <Avatar className="cursor-pointer group/image relative">
                                <AvatarImage src={`https://picsum.photos/50?random=${i + 20}`} alt="avatar" />
                            </Avatar>
                            <div className="flex flex-col w-full h-full">
                                <Button variant={'link'} className="text-sm p-0 justify-start h-full">{faker.person.firstName()}</Button>
                                <Button variant={'link'} className="text-[10px] p-0 text-wrap h-full underline-offset-2 text-start text-slate-500 line-clamp-2">Following by {faker.person.firstName()} + 7 lainnya</Button>
                            </div>
                            <Button variant={'link'} className="p-0 text-xs">
                                + Follow
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-xs text-slate-500 text-center mt-10">Copyright &copy; ShareFly from Cookie-Army</p></>
    )
}
