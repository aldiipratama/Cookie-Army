'use client'

import PeopleYouMayKnow from "@/components/PeopleYouMayKnow";
import PostCard from "@/components/PostCard";
import ResponsiveNav from "@/components/ResponsiveNav";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <main className="bg-background flex flex-col md:flex-row relative">
      <section className="md:w-max">
        <ResponsiveNav />
      </section>

      <section className="flex-1 md:w-2/4">
        <Stories />
        <PostCard />
      </section>

      <section className="hidden lg:block lg:w-1/3 xl:w-1/4 p-4 border-l">
        <div className="sticky top-4">
          <PeopleYouMayKnow />
        </div>
      </section>
    </main>
  );
}

