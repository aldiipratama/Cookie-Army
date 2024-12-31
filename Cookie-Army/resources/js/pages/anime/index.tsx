import React from "react";

const AnimePage = () => {
  return (
    <div className="min-h-screen p-6 text-white bg-black">
      {/* Back Button */}
      <button className="mb-6 text-lg text-gray-400 hover:text-white">
        &larr; Back
      </button>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Left Side: Poster and Trailer */}
        <div className="col-span-1 md:col-span-3">
          <img
            src="https://via.placeholder.com/300x450"
            alt="Anime Poster"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700">
            Watch Trailer
          </button>
        </div>

        {/* Right Side: Anime Details */}
        <div className="col-span-1 md:col-span-9">
          {/* Title and Status */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-yellow-400">
              Judul Movie Anime Detail
            </h1>
            <p className="mt-2 text-sm text-gray-400">Completed</p>
          </div>

          {/* Anime Details */}
          <div className="space-y-4 text-sm">
            <p>
              <span className="font-bold text-yellow-400">Type: </span>
              Movie
            </p>
            <p>
              <span className="font-bold text-yellow-400">Summary: </span>
              Lorem ipsum dolor sit amet consectetur. Risus viverra pulvinar
              augue in. Quis non venenatis tempus mauris porttitor sagittis
              turpis urna enim. Rutrum scelerisque dictum tellus eu amet velit.
              Imperdiet magna dictum consectetur cursus felis consectetur nunc
              sed.
            </p>
            <p>
              <span className="font-bold text-yellow-400">Release Date: </span>
              2024
            </p>
            <p>
              <span className="font-bold text-yellow-400">Genre: </span>
              Action, Demons, Shounen, Supernatural
            </p>
            <p>
              <span className="font-bold text-yellow-400">Other names: </span>
              -
            </p>
          </div>
        </div>
      </div>

      {/* Related Anime */}
      <div className="mt-10">
        <h2 className="mb-4 text-lg font-bold">Anime Related:</h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {Array.from({ length: 6 }).map((_, index) => (
            <img
              key={index}
              src="https://via.placeholder.com/150x100"
              alt={`Anime ${index + 1}`}
              className="object-cover w-32 h-20 rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimePage;
