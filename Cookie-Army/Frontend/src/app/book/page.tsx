'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Book() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* New Release Book Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">New Release Book</h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
        <Button className="bg-white text-gray-800 hover:bg-gray-300 px-6 py-2 rounded mt-4">
          See Details
        </Button>
      </section>

      {/* Recommended For You */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recommended For You</h2>
          <select className="bg-yellow-300 text-gray-800 px-3 py-1 rounded">
            <option>Choose Genre</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Book Card */}
          <BookCard
            title="The Having"
            description="Lorem Ipsum is simply dummy text..."
            imageSrc="https://via.placeholder.com/150x200"
          />
          <BookCard
            title="The Bookish Life"
            description="Lorem Ipsum is simply dummy text..."
            imageSrc="https://via.placeholder.com/150x200"
          />
          <BookCard
            title="Fact ful Ness"
            description="Lorem Ipsum is simply dummy text..."
            imageSrc="https://via.placeholder.com/150x200"
          />
        </div>
      </section>

      {/* Top Sellers */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Top Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Seller Book Card */}
          <BookCard
            title="The GoldFinch"
            description="Lorem Ipsum is simply dummy text..."
            imageSrc="https://via.placeholder.com/150x200"
          />
          <BookCard
            title="Steal Like An Artist"
            description="Lorem Ipsum is simply dummy text..."
            imageSrc="https://via.placeholder.com/150x200"
          />
          <BookCard
            title="Vampire Diaries"
            description="Lorem Ipsum is simply dummy text..."
            imageSrc="https://via.placeholder.com/150x200"
          />
        </div>
      </section>
    </div>
  );
}

function BookCard({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) {
  return (
    <Card className="bg-gray-800 p-4 rounded-lg">
      <Image src={imageSrc} alt={title} width={150} height={200} className="mx-auto mb-4 rounded" />
      <CardHeader className="text-center p-0">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Button className="bg-yellow-300 text-gray-900 px-4 py-1 rounded hover:bg-yellow-400">
          Add Book
        </Button>
      </CardContent>
    </Card>
  );
}
