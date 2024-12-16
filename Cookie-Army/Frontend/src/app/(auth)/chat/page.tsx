'use client'

import BottomNav from "@/components/BottomNav";
import SidebarNav from "@/components/SidebarNav";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MessageBubble from "@/components/ui/custom/chat/MessageBubble";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import axios, { csrf } from "@/lib/axios";
import { pusher } from "@/lib/socket";
import { faker } from "@faker-js/faker/locale/id_ID";
import { zodResolver } from "@hookform/resolvers/zod";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { MessageCircle, Mic, Phone, Plus, Search, Send, Smile, UsersRound, Video } from "lucide-react";
import { useTheme } from "next-themes";
import { CSSProperties, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Chat() {
  const chatList = Array.from({ length: 20 })
  const containerChatRef = useRef<HTMLDivElement | null>(null)
  const { theme } = useTheme()
  const messageFormSchema = z.object({
    message: z.string()
  })
  const formMessage = useForm<z.infer<typeof messageFormSchema>>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      message: ''
    }
  })

  const onSubmit = async (value: z.infer<typeof messageFormSchema>) => {
    // formMessage.reset()
    try {
      await csrf()
      await axios.post('chat', {
        message: value.message
      }).then(res => console.log(res))
    } catch (err) {
      console.log(err)
    }
  }

  // const handleEmojiClick = (emojiData: EmojiClickData) => {
  //   setComment(prevComment => prevComment + emojiData.emoji)
  // }

  useEffect(() => {
    pusher.subscribe('messages').bind('MessageEvent', (data: never) => {
      console.log(data)
    })

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
            <div className="grid h-[85vh] overflow-y-auto px-5 pt-2 pb-6 scrollbar-w-1 scrollbar scrollbar-thumb-foreground resize-none scrollbar-thumb-rounded-lg shadow-[inset_10px_0_15px_-3px_rgb(0_0_0_/_0.1)]" ref={containerChatRef}>
              <div className="flex flex-col justify-end gap-2">
                <MessageBubble
                  position="left"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?"
                  isFirstMessage={true}
                />
                <MessageBubble
                  position="left"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?"
                  isFirstMessage={false}
                />
                <MessageBubble
                  position="right"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?"
                  isFirstMessage={true}
                />
                <MessageBubble
                  position="right"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perspiciatis?"
                  isFirstMessage={false}
                />
              </div>
            </div>

            <Form {...formMessage}>
              <form className="flex gap-2 items-center sticky bottom-0 px-4 py-2 bg-accent/50 shadow-[0_-10px_15px_-3px_rgb(0_0_0_/_0.1)]" onSubmit={formMessage.handleSubmit(onSubmit)}>
                <Button variant={'ghost'} size={'icon'}>
                  <Plus />
                </Button>
                <FormField
                  control={formMessage.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem className="w-full relative">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant={'ghost'} size={'icon'} className="absolute top-5 left-2 hover:bg-muted-foreground/50">
                            <Smile />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-max p-0 z-[1]">
                          <EmojiPicker theme={theme === 'dark' ? Theme.DARK : Theme.LIGHT} />
                        </PopoverContent>
                      </Popover>
                      <FormControl>
                        <Textarea placeholder='Type a message...' className="ps-12 bg-accent scrollbar-w-1 scrollbar scrollbar-thumb-foreground resize-none scrollbar-thumb-rounded-lg" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" size={'icon'}>
                  <Send />
                </Button>
                <Button variant={'ghost'} size={'icon'}>
                  <Mic />
                </Button>
              </form>
            </Form>
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
