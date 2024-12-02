'use client'

import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { faker } from '@faker-js/faker/locale/id_ID'

export default function Stories() {
    return (
        <div className="flex px-5 py-2 gap-2 border-b sticky top-0">
            <Carousel className="w-full">
                <CarouselContent>
                    {[...Array(20)].map((_, i) => (
                        <CarouselItem key={i} className="basis-1/5 sm:basis-1/6 md:basis-1/5 lg:basis-1/6 xl:basis-1/12 -mr pl-5 flex flex-col items-center cursor-pointer gap-1">
                            <Avatar className="border-[3px] border-blue-500 dark:border-yellow-500 w-14 h-14">
                                <AvatarImage src={`https://picsum.photos/50?random=${i}`} />
                            </Avatar>
                            <span className="text-sm">{faker.person.firstName()}</span>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-left-3 opacity-80 disabled:hidden" variant={'secondary'} />
                <CarouselNext className="-right-3 opacity-80 disabled:hidden" variant={'secondary'} />
            </Carousel>
        </div>
    )
}
