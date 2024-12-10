'use client'

import BottomNav from "@/components/BottomNav";
import SidebarNav from "@/components/SidebarNav";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Video } from "lucide-react";
import { CSSProperties } from "react";

export default function Chat() {
  const chatList = Array.from({ length: 20 })

  return (
    <main className="bg-background flex flex-col md:flex-row relative">
      <section className="md:w-max">
        <SidebarNav />
      </section>

      <section className="flex-1 flex h-screen">
        <SidebarProvider style={{
          "--sidebar-width": "20rem",
        } as CSSProperties} defaultOpen={false}>
          <div className="grid gap-4 bg-accent/50 p-5 w-1/5 items-start overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-foreground scrollbar-thumb-rounded-lg">
            {
              /* chat list */
              chatList.length > 0 ?
                chatList.map((_, i) => (
                  <div key={i} className="grid gap-2">
                    <div className="flex gap-4 items-center">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src="https://picsum.photos/50?random=user-chat" />
                        </Avatar>
                        <Badge className="size-4 rounded-full absolute -bottom-0.5 -left-0.5 bg-green-500 z-[1]" />
                      </div>
                      <div className="grid grid-rows-2 h-14 items-center">
                        <span>Bro</span>
                        <HoverCard>
                          <HoverCardTrigger className="text-sm text-gray-500 line-clamp-1 h-max w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur.
                          </HoverCardTrigger>
                          <HoverCardContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur.
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </div>
                    <Separator className="place-self-start" />
                  </div>
                )) : (
                  <span className="text-center text-gray-500 text-sm p-5">No chats</span>
                )
            }
          </div>
          <div className="flex flex-col w-full">
            <div className="flex gap-4 items-center justify-between shadow-lg dark:shadow-foreground/5 p-5">
              {/* chat header */}
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage src="https://picsum.photos/50?random=user-chat" />
                </Avatar>
                <div className="grid h-max items-center">
                  <span className="text-lg">Bro</span>
                  <span className="text-xs text-muted-foreground">
                    Online
                    <Badge className="size-2 ml-1 bg-green-500 animate-pulse" />
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex">
                  <Button variant={'ghost'} size={'icon'} className="p-0">
                    <Phone />
                  </Button>
                  <Button variant={'ghost'} size={'icon'} className="p-0">
                    <Video />
                  </Button>
                </div>
                <Separator orientation="vertical" className="h-10" />
                <SidebarTrigger />
              </div>
            </div>

            {/* chat content */}
            <div className="flex flex-col h-full justify-between py-2">
              <div className="flex px-5 py-2 flex-col h-[80vh] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-foreground scrollbar-thumb-rounded-lg">
                <div className="flex gap-4 flex-col justify-end">
                  <div className="bg-primary self-end px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-primary after:inset-5 after:top-0 after:-right-0 after:-skew-y-12">
                    <span className="relative z-[1]">Hello</span>
                  </div>
                  <div className="bg-secondary self-start px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-secondary after:inset-5 after:top-0 after:-left-0 after:skew-y-12">
                    <span className="relative z-[1]">Hi</span>
                  </div>
                  <div className="bg-primary self-end px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-primary after:inset-5 after:top-0 after:-right-0 after:-skew-y-12">
                    <span className="relative z-[1]">Hello</span>
                  </div>
                  <div className="bg-primary self-end px-4 py-2 rounded-lg">
                    <span className="relative z-[1]">Hello</span>
                  </div>
                  <div className="bg-secondary self-start px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-secondary after:inset-5 after:top-0 after:-left-0 after:skew-y-12">
                    <span className="relative z-[1]">Hi</span>
                  </div>
                  <div className="bg-secondary self-start px-4 py-2 rounded-lg">
                    <span className="relative z-[1]">Hi</span>
                  </div>
                  <div className="bg-primary self-end px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-primary after:inset-5 after:top-0 after:-right-0 after:-skew-y-12">
                    <span className="relative z-[1]">Hello</span>
                  </div>
                  <div className="bg-secondary self-start px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-secondary after:inset-5 after:top-0 after:-left-0 after:skew-y-12">
                    <span className="relative z-[1]">Hi</span>
                  </div>
                  <div className="bg-primary self-end px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-primary after:inset-5 after:top-0 after:-right-0 after:-skew-y-12">
                    <span className="relative z-[1]">Hello</span>
                  </div>
                  <div className="bg-primary self-end px-4 py-2 rounded-lg">
                    <span className="relative z-[1]">Hello</span>
                  </div>
                  <div className="bg-secondary self-start px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-secondary after:inset-5 after:top-0 after:-left-0 after:skew-y-12">
                    <span className="relative z-[1]">Hi</span>
                  </div>
                  <div className="bg-secondary self-start px-4 py-2 rounded-lg">
                    <span className="relative z-[1]">Hi</span>
                  </div>
                  <div className="bg-primary self-end px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-primary after:inset-5 after:top-0 after:-right-0 after:-skew-y-12">
                    <span className="relative z-[1]">Hello</span>
                  </div>
                  <div className="bg-secondary self-start px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-secondary after:inset-5 after:top-0 after:-left-0 after:skew-y-12">
                    <span className="relative z-[1]">Hi</span>
                  </div>
                  <div className="bg-primary self-end px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-primary after:inset-5 after:top-0 after:-right-0 after:-skew-y-12">
                    <span className="relative z-[1]">Hello</span>
                  </div>
                  <div className="bg-primary self-end px-4 py-2 rounded-lg">
                    <span className="relative z-[1]">Hello</span>
                  </div>
                  <div className="bg-secondary self-start px-4 py-2 rounded-lg relative after:absolute after:content-[''] after:bg-secondary after:inset-5 after:top-0 after:-left-0 after:skew-y-12">
                    <span className="relative z-[1]">Hi</span>
                  </div>
                  <div className="bg-secondary self-start px-4 py-2 rounded-lg">
                    <span className="relative z-[1]">Hi</span>
                  </div>
                </div>
              </div>
              <div className="px-5">
                <Textarea placeholder="Write your message..." className="scrollbar-w-1 scrollbar scrollbar-thumb-foreground resize-none scrollbar-thumb-rounded-lg max-h-60" />
              </div>
            </div>
          </div>
          <Sidebar side="right">
            <SidebarContent className="p-5 items-center gap-4">
              <Avatar className="size-40">
                <AvatarImage src="https://picsum.photos/50?random=user-chat" />
              </Avatar>
              <div className="grid w-full">
                <Button variant={'ghost'} asChild>
                  <Label className="w-full justify-between cursor-pointer">
                    Snooze Notification
                    <Switch />
                  </Label>
                </Button>
                <Button variant={'destructive'}>
                  Blockir
                </Button>
              </div>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </section>

      <BottomNav />
    </main>
  )
}
