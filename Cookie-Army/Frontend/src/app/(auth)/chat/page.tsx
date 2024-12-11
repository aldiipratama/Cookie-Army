'use client'

import BottomNav from "@/components/BottomNav";
import SidebarNav from "@/components/SidebarNav";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { faker } from "@faker-js/faker/locale/id_ID";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { MessageCircle, Phone, Search, Smile, UsersRound, Video } from "lucide-react";
import { useTheme } from "next-themes";
import { CSSProperties, useEffect, useRef, useState } from "react";

export default function Chat() {
  const chatList = Array.from({ length: 20 })
  const containerChatRef = useRef<HTMLDivElement | null>(null)
  const { theme } = useTheme()
  const [comment, setComment] = useState<string>('')

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setComment(prevComment => prevComment + emojiData.emoji)
  }

  useEffect(() => {
    if (containerChatRef.current)
      containerChatRef.current.scrollTop = containerChatRef.current.scrollHeight
  }, [])

  return (
    <main className="bg-background flex flex-col md:flex-row relative">
      <section className="md:w-max">
        <SidebarNav />
      </section>

      <section className="flex-1 flex h-screen overflow-hidden">
        <SidebarProvider defaultOpen={false} style={{
          "--sidebar-width": "20rem"
        } as CSSProperties}>
          <div className="grid w-1/5 bg-accent/50">
            <Label className="relative">
              <Search className="absolute top-1 left-2" />
              <Input type='text' placeholder="Search message..." className="focus-visible:ring-0 ps-10" />
            </Label>
            <div className="flex border-y-2 border-border">
              <Button variant={'default'} className='w-full rounded-none grid h-max'>
                <MessageCircle className="mx-auto" />
                Chats
              </Button>
              <Button variant={'ghost'} className='w-full rounded-none grid h-max'>
                <UsersRound className="mx-auto" />
                Groups
              </Button>
              <Button variant={'ghost'} className='w-full rounded-none grid h-max'>
                <Phone className="mx-auto" />
                Calls
              </Button>
            </div>
            <div className="overflow-y-auto h-[90vh] scrollbar-w-1 scrollbar scrollbar-thumb-foreground scrollbar-thumb-rounded-lg">
              {
                chatList.length > 0 ? (
                  chatList.map((_, i) => (
                    <div key={i} className="grid">
                      <div className="flex gap-2 items-center p-2">
                        <div className="relative">
                          <Badge className="bg-green-500 z-[1] size-3 bottom-0 left-0 absolute" />
                          <Avatar>
                            <AvatarImage src={`https://picsum.photos/150?random=user-profile${i}`} />
                          </Avatar>
                        </div>
                        <div className="grid">
                          <span className="text-sm font-bold line-clamp-1">{faker.person.fullName()}</span>
                          <HoverCard>
                            <HoverCardTrigger>
                              <span className="text-xs text-muted-foreground line-clamp-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, ullam.</span>
                            </HoverCardTrigger>
                            <HoverCardContent>
                              <span className="text-muted-foreground text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, ullam.</span>
                            </HoverCardContent>
                          </HoverCard>
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))
                ) : (
                  <div className="text-muted-foreground text-center text-xs">No Message Found !</div>
                )
              }
            </div>
          </div>
          <div className="grid w-full h-max">
            <div className="flex px-4 py-2 justify-between items-center h-max shadow-lg z-[1]">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage src="https://picsum.photos/150" alt="profile" />
                </Avatar>
                <div className="grid h-max">
                  <span>John</span>
                  <span className="text-xs text-muted-foreground">
                    Online
                    <Badge className="size-2 animate-pulse bg-green-500 ms-1" />
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <Button>
                    <Phone />
                  </Button>
                  <Button>
                    <Video />
                  </Button>
                </div>
                <Separator orientation="vertical" className="h-10" />
                <SidebarTrigger />
              </div>
            </div>

            {/* chat content */}
            <div className="grid h-[85vh] overflow-y-auto px-5 pt-2 pb-5 scrollbar-w-1 scrollbar scrollbar-thumb-foreground resize-none scrollbar-thumb-rounded-lg shadow-[inset_10px_0_15px_-3px_rgb(0_0_0_/_0.1)]" ref={containerChatRef}>
              <div className="flex flex-col justify-end gap-2">
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src='https://picsum.photos/150?random=user-chat1' alt='image' />
                  </Avatar>
                  <div className="grid w-1/2 gap-2">
                    <div className="grid bg-secondary p-2 rounded-lg relative before:content-[''] before:absolute before:top-0 before:-left-1 before:bg-secondary before:w-5 before:h-4 before:skew-x-[32deg] min-w-min max-w-max">
                      <span className="relative font-bold">John</span>
                      <p className="dark:text-white/70 text-black/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?</p>
                    </div>
                    <div className="grid bg-secondary p-2 rounded-lg min-w-min max-w-max">
                      <span className="text-secondary relative font-bold">John</span>
                      <p className="dark:text-white/70 text-black/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam quaerat, debitis consectetur quasi necessitatibus facilis ex magnam esse praesentium.</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <Avatar className="order-2">
                    <AvatarImage src='https://picsum.photos/150?random=user-chat2' alt='image' />
                  </Avatar>
                  <div className="grid w-1/2 gap-2 order-1">
                    <div className="grid bg-primary p-2 rounded-lg relative before:content-[''] before:absolute before:top-0 before:-right-1 before:bg-primary before:w-5 before:h-4 before:-skew-x-[32deg] min-w-min max-w-max place-self-end">
                      <span className="text-secondary relative font-bold">Me</span>
                      <p className="dark:text-black/70 text-white/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?</p>
                    </div>
                    <div className="grid bg-primary p-2 rounded-lg min-w-min max-w-max place-self-end">
                      <span className="text-secondary relative font-bold">Me</span>
                      <p className="dark:text-black/70 text-white/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam quaerat, debitis consectetur quasi necessitatibus facilis ex magnam esse praesentium.</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src='https://picsum.photos/150?random=user-chat1' alt='image' />
                  </Avatar>
                  <div className="grid w-1/2 gap-2">
                    <div className="grid bg-secondary p-2 rounded-lg relative before:content-[''] before:absolute before:top-0 before:-left-1 before:bg-secondary before:w-5 before:h-4 before:skew-x-[32deg] min-w-min max-w-max">
                      <span className="relative font-bold">John</span>
                      <p className="dark:text-white/70 text-black/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?</p>
                    </div>
                    <div className="grid bg-secondary p-2 rounded-lg min-w-min max-w-max">
                      <span className="text-secondary relative font-bold">John</span>
                      <p className="dark:text-white/70 text-black/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam quaerat, debitis consectetur quasi necessitatibus facilis ex magnam esse praesentium.</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <Avatar className="order-2">
                    <AvatarImage src='https://picsum.photos/150?random=user-chat2' alt='image' />
                  </Avatar>
                  <div className="grid w-1/2 gap-2 order-1">
                    <div className="grid bg-primary p-2 rounded-lg relative before:content-[''] before:absolute before:top-0 before:-right-1 before:bg-primary before:w-5 before:h-4 before:-skew-x-[32deg] min-w-min max-w-max place-self-end">
                      <span className="text-secondary relative font-bold">Me</span>
                      <p className="dark:text-black/70 text-white/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?</p>
                    </div>
                    <div className="grid bg-primary p-2 rounded-lg min-w-min max-w-max place-self-end">
                      <span className="text-secondary relative font-bold">Me</span>
                      <p className="dark:text-black/70 text-white/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam quaerat, debitis consectetur quasi necessitatibus facilis ex magnam esse praesentium.</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src='https://picsum.photos/150?random=user-chat1' alt='image' />
                  </Avatar>
                  <div className="grid w-1/2 gap-2">
                    <div className="grid bg-secondary p-2 rounded-lg relative before:content-[''] before:absolute before:top-0 before:-left-1 before:bg-secondary before:w-5 before:h-4 before:skew-x-[32deg] min-w-min max-w-max">
                      <span className="relative font-bold">John</span>
                      <p className="dark:text-white/70 text-black/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?</p>
                    </div>
                    <div className="grid bg-secondary p-2 rounded-lg min-w-min max-w-max">
                      <span className="text-secondary relative font-bold">John</span>
                      <p className="dark:text-white/70 text-black/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam quaerat, debitis consectetur quasi necessitatibus facilis ex magnam esse praesentium.</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <Avatar className="order-2">
                    <AvatarImage src='https://picsum.photos/150?random=user-chat2' alt='image' />
                  </Avatar>
                  <div className="grid w-1/2 gap-2 order-1">
                    <div className="grid bg-primary p-2 rounded-lg relative before:content-[''] before:absolute before:top-0 before:-right-1 before:bg-primary before:w-5 before:h-4 before:-skew-x-[32deg] min-w-min max-w-max place-self-end">
                      <span className="text-secondary relative font-bold">Me</span>
                      <p className="dark:text-black/70 text-white/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?</p>
                    </div>
                    <div className="grid bg-primary p-2 rounded-lg min-w-min max-w-max place-self-end">
                      <span className="text-secondary relative font-bold">Me</span>
                      <p className="dark:text-black/70 text-white/70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam quaerat, debitis consectetur quasi necessitatibus facilis ex magnam esse praesentium.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center sticky bottom-0 px-4 py-2 bg-background shadow-[0_-10px_15px_-3px_rgb(0_0_0_/_0.1)]">
              <Textarea placeholder='Type a message...' className="scrollbar-w-1 scrollbar scrollbar-thumb-foreground resize-none scrollbar-thumb-rounded-lg" value={comment}
                onChange={(e) => setComment(e.target.value)} />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={'ghost'} size={'icon'}>
                    <Smile />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-max p-0 z-[1]">
                  <EmojiPicker theme={theme === 'dark' ? Theme.DARK : Theme.LIGHT} onEmojiClick={handleEmojiClick} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Sidebar side="right">
            <SidebarContent>
              <Avatar className="size-40 mx-auto mt-5">
                <AvatarImage src='https://picsum.photos/720' alt='image' />
              </Avatar>
              <Button variant={'ghost'} asChild>
                <Label className="flex justify-between mt-4">
                  Snooze notification
                  <Switch />
                </Label>
              </Button>
              <Button variant={'destructive'} className="mx-4">Blockir</Button>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </section>

      <BottomNav />
    </main>
  )
}
