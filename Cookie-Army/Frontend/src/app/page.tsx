'use client'

import AppSidebar from "@/components/AppSidebar";
import PeopleYouMayKnow from "@/components/PeopleYouMayKnow";
import PostCard from "@/components/PostCard";
import Stories from "@/components/Stories";


export default function Home() {
  return (
    <>
      <section className="md:col-span-3 hidden border-x">
        <AppSidebar />
      </section>
      <section className="col-span-12 md:col-span-9 border-x">
        <Stories />
        <PostCard />
      </section>
      <section className="col-span-3 hidden h-screen top-4 sticky md:block mt-4">
        <PeopleYouMayKnow />
      </section>
    </>
  );
}
