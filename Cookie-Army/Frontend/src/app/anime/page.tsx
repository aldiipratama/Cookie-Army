import React from "react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Header */}
      <header className="relative flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <input
            type="text"
            placeholder="Search anywhere..."
            className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Right Side (Bell, Settings, etc.) */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center space-x-4">
        <Button><i>🔔</i></Button> {/* Bell button */}
        <Button><i>⚙️</i></Button> {/* Settings button */}
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 mt-24">
        {/* Main Section */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Responsive Navigation */}
          <section className="md:w-max hidden lg:block col-span-1">
            <ResponsiveNav />
          </section>

          {/* Featured Section */}
          <section className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg overflow-hidden relative">
              <Image
                src="/featured-anime.jpg"
                alt="Featured Anime"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold">Judul Movie Anime</h2>
                <p className="text-gray-400">Category / Genre</p>
                <p className="text-gray-400">Penerbit</p>
                <Button className="mt-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-semibold">
                  See Detail
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Giorno Giovanna", "Edward Elric", "Tengen Uzui", "Izuku Midoriya", "Isaac Netero"].map((tag) => (
                <Button key={tag} className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full">
                  {tag}
                </Button>
              ))}
            </div>

            {/* Top Trending Anime */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Top Trending Anime</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((anime) => (
                  <Image
                    key={anime}
                    src={`/anime${anime}.jpg`}
                    alt={`Anime ${anime}`}
                    width={200}
                    height={300}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* All Anime */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">All Anime</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[5, 6, 7, 8, 9, 10].map((anime) => (
                  <Image
                    key={anime}
                    src={`/anime${anime}.jpg`}
                    alt={`Anime ${anime}`}
                    width={200}
                    height={300}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Category</h3>
              <ul className="space-y-2">
                {["Category a", "Category b", "Category c", "Category d", "Category e"].map((category) => (
                  <li key={category}>
                    <a href="#" className="text-gray-400 hover:text-gray-200">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center mt-6 text-gray-500">
        <p>Copyright © 2024 ShareFly</p>
      </footer>
    </main>
  );
};

export default Home;
