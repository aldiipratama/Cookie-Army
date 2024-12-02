'use client'

import PeopleYouMayKnow from "@/components/PeopleYouMayKnow";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <>
      <section className="col-span-12 md:col-span-9 border-x">
        <Stories />
        <div className="flex px-5 flex-col gap-2 items-center">
          {/*  */}
        </div>
      </section>
      <section className="col-span-3 hidden md:block mt-4">
        <PeopleYouMayKnow />
      </section>
    </>
  );
}
