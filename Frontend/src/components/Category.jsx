import React, { useEffect, useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import { Link } from "react-router-dom";

const Category = () => {
  const { movies, loading, error, searchMovies } = useFetchMovies();

  console.log(movies);

  const [category, setCategory] = useState("horror");

  useEffect(() => {
    searchMovies(category);
  }, [category]);
  return (
    <>
      <section class="max-w-[1400px] mx-auto mt-14 px-6 md:px-12">
        <div class="flex space-x-3 overflow-x-auto scrollbar-hide text-sm md:text-base pb-2">
          <Link
            to={"/movie"}
            class="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold whitespace-nowrap"
          >
            ALL
          </Link>
          <button
            class="border border-white/40 text-white text-opacity-75 px-5 py-2 rounded-full whitespace-nowrap hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer"
            onClick={() => setCategory("action")}
          >
            Action
          </button>
          <button
            class="border border-white/40 text-white text-opacity-75 px-5 py-2 rounded-full whitespace-nowrap hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer"
            onClick={() => setCategory("comedy")}
          >
            Comedy
          </button>
          <button
            class="border border-white/40 text-white text-opacity-75 px-5 py-2 rounded-full whitespace-nowrap hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer"
            onClick={() => setCategory("series")}
          >
            Series
          </button>
          <button
            class="border border-white/40 text-white text-opacity-75 px-5 py-2 rounded-full whitespace-nowrap hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer"
            onClick={() => setCategory("adventure")}
          >
            Adventure
          </button>
          <button
            class="border border-white/40 text-white text-opacity-75 px-5 py-2 rounded-full whitespace-nowrap hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer"
            onClick={() => setCategory("drama")}
          >
            Drama
          </button>
          <Link
            to={"/movie"}
            class="text-white text-opacity-50 text-2xl font-light px-4 py-2  rounded-full whitespace-nowrap  select-none cursor-pointer"
          >
            +
          </Link>
        </div>
      </section>

      {/* <!-- Most Viewed Horizontal Scroll --> */}
      <section class="max-w-[1400px] mx-auto mt-10 px-6 md:px-12">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-cinzel text-xl sm:text-2xl font-semibold">
            Most Viewed
          </h2>
          <Link
            to={"/movie"}
            class="text-white/70 text-sm hover:text-yellow-400 transition flex items-center space-x-1"
          >
            <span>View all</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div class="flex space-x-5 overflow-x-auto scrollbar-hide pb-2">
          {/* <!-- Each movie card --> */}
          {movies?.map((movie) => (
            <Link
              to={`/movie/${movie.imdbID}`}
              class="min-w-[150px] flex-shrink-0 cursor-pointer group"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                class="rounded-lg w-full h-44 object-cover brightness-90 group-hover:brightness-110 transition"
              />
              <h3 class="mt-2 text-xs sm:text-sm font-semibold">
                {movie.Title}
              </h3>
              <p class="text-[10px] text-gray-400">{movie.Year}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
