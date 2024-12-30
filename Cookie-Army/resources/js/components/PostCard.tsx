import React, { lazy, Suspense, useState } from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { faker } from "@faker-js/faker/locale/id_ID";
import { BadgeCheckIcon, Bookmark, Heart, Loader, MessageCircleMore, MoreHorizontal, Send, SendHorizonal, Smile } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react';
import { useTheme } from './ThemeProvider';
import { ShowMore } from '@re-dev/react-truncate';
import Loading from './ui/loading';
const EmojiPicker = lazy(() => import('emoji-picker-react'))

export default function PostCard() {
    const posts = Array.from({ length: 10 })

    return (
        <div className="flex flex-col items-center gap-2 px-5 mt-2">
            {
                posts.length > 0 ?
                    posts.map((_, i) => (
                        <Card key={i} className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <CardHeader className="flex-row items-center justify-start gap-2">
                                <Avatar>
                                    <AvatarImage src={'https://picsum.photos/50'} alt="avatar" />
                                </Avatar>
                                <CardTitle className="flex items-center gap-2 text-sm">
                                    {faker.person.middleName()}
                                    <BadgeCheckIcon className="text-blue-500 size-5" />
                                </CardTitle>
                                <Separator orientation="vertical" className="h-5 w-0.5" />
                                <span className="text-xs">3 day ago</span>
                                <div className="ms-auto">
                                    <Dialog>
                                        <DialogOverlay className="bg-black/[.01]" />
                                        <DialogTrigger>
                                            <MoreHorizontal />
                                        </DialogTrigger>
                                        <DialogContent className="w-80">
                                            <DialogTitle className="sr-only">More Menu</DialogTitle>
                                            <Button variant={'destructive'}>
                                                Report
                                            </Button>
                                            <Button variant={'destructive'}>
                                                Unfollow
                                            </Button>
                                            <Separator />
                                            <Button variant={'ghost'}>
                                                Add to Bookmark
                                            </Button>
                                            <Button variant={'ghost'}>
                                                Open Post
                                            </Button>
                                            <Button variant={'ghost'}>
                                                Share to...
                                            </Button>
                                            <Button variant={'ghost'}>
                                                Copy Link
                                            </Button>
                                            <Separator />
                                            <DialogClose asChild>
                                                <Button variant={'ghost'}>
                                                    Cancel
                                                </Button>
                                            </DialogClose>
                                            <DialogClose hidden={true} />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </CardHeader>
                            <CardContent className="p-2">
                                <AspectRatio ratio={1 / 1} className="-mt-4">
                                    <img src={`https://picsum.photos/1024?random=${i}`} alt="image" className="rounded-md" />
                                </AspectRatio>
                                <div className="flex items-center justify-between -mt-2">
                                    <div className="flex items-center">
                                        <Button variant={'ghost'} size={'icon'}>
                                            <Heart />
                                        </Button>
                                        <Button variant={'ghost'} size={'icon'}>
                                            <MessageCircleMore />
                                        </Button>
                                        <Button variant={'ghost'} size={'icon'}>
                                            <Send />
                                        </Button>
                                    </div>
                                    <Button variant={'ghost'} size={'icon'}>
                                        <Bookmark />
                                    </Button>
                                </div>
                                <Button variant={'link'} className="h-full p-0 text-foreground">
                                    500 like
                                </Button>
                            </CardContent>
                            <CardFooter className="flex flex-col p-2 pt-0 space-y-4">
                                <CardDescription className="w-full">
                                    <Button variant={'link'} className="h-full p-0 w-max text-foreground">
                                        {faker.person.middleName()}
                                        <BadgeCheckIcon className="text-blue-500 size-5" />
                                    </Button>
                                    <ShowMore lines={2} id="showmore" more={'See more'} less={'Less more'}>
                                        {faker.lorem.paragraph({ min: 3, max: 5 })}
                                    </ShowMore>
                                </CardDescription>
                                <CommentInput />
                            </CardFooter>
                        </Card>
                    )) : (
                        <span>Post Not Found</span>
                    )
            }
        </div>
    )
}

const CommentInput = () => {
    const [comment, setComment] = useState<string>('')
    const { theme } = useTheme()

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setComment(prevComment => prevComment + emojiData.emoji)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted comment:', comment)
        setComment('')
    }

    return (
        <div className="flex flex-col w-full">
            <form className="relative flex gap-2" onSubmit={handleSubmit}>
                <Textarea placeholder="Write your commentar..." className="resize-none scrollbar-w-1 scrollbar scrollbar-thumb-foreground scrollbar-thumb-rounded-lg" value={comment}
                    onChange={(e) => setComment(e.target.value)} />
                <div className="flex flex-col">
                    <Button variant={'ghost'} type="submit" className="p-0" size={'icon'} disabled={comment.trim().length === 0}>
                        <SendHorizonal />
                    </Button>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={'ghost'} className="p-0">
                                <Smile />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-max p-0 z-[1]">
                            <Suspense fallback={<Loading />}>
                                <EmojiPicker theme={theme === 'dark' ? Theme.DARK : Theme.LIGHT} onEmojiClick={handleEmojiClick} emojiStyle={EmojiStyle.APPLE} />
                            </Suspense>
                        </PopoverContent>
                    </Popover>
                </div>
            </form>
        </div>
    )
}