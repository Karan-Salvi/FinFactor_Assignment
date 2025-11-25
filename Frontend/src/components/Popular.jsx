import React, { use, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";

const Popular = () => {
  const {
    movies: popularMovies,
    loading,
    error,
    searchMovies,
  } = useFetchMovies();

  useEffect(() => {
    searchMovies("popular");
  }, []);
  return (
    <section class="max-w-[1400px] mx-auto mt-20 px-6 md:px-12">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-cinzel text-xl sm:text-2xl font-semibold">
          Most Popular
        </h2>
        <a
          href="#"
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
        </a>
      </div>
      <div class="flex space-x-5 overflow-x-auto scrollbar-hide pb-2">
        {popularMovies?.map((movie) => (
          <Link
            to={`/movie/${movie.imdbID}`}
            class="min-w-[150px] flex-shrink-0 cursor-pointer group"
          >
            <img
              src={movie?.Poster}
              alt={movie?.Title}
              class="rounded-lg w-full h-44 object-cover brightness-90 group-hover:brightness-110 transition"
            />
            <h3 class="mt-2 text-xs sm:text-sm font-semibold">
              {movie.Title} ({movie.Year})
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Popular;
