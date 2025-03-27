import React from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    {
      title: "The Shawshank Redemption",
      info: "A movie about a banker who gets caught and tries to save his family",
    },
    {
      title: "The Godfather",
      info: "A movie about a mob boss who tries to kill his son",
    },
    { title: "Pulp Fiction", info: "A movie about a cop who solves crimes" },
    {
      title: "Inception",
      info: "A movie about a hacker who uses dreams to solve problems",
    },
  ];

  return (
    <div className="bg-black w-screen h-screen flex flex-col justify-start items-center gap-4">
      <div className="flex gap-2 mt-8">
        <input
          className="bg-gray-800 rounded-lg text-white p-3 sm:w-[400px] w-[60vw]"
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button className="text-white border-2  border-white rounded-lg py-2 px-6 cursor-pointer">
        Search
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 sm:px-20 ">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchTerm) && (
              <MovieCard movie={movie} key={movie.title} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
