import React, { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useFetchMovies from "../hooks/useFetchMovies";
import useDebounce from "../hooks/useDebounce";
import { Link } from "react-router-dom";

const MovieSearch = () => {
  const [query, setQuery] = useState("comedy");

  const debouncedQuery = useDebounce(query, 700);
  const { movies, loading, error, searchMovies } = useFetchMovies();

  const submit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    searchMovies(query);
  };

  useEffect(() => {
    if (debouncedQuery.trim() !== "") {
      searchMovies(debouncedQuery);
    }
  }, [debouncedQuery]);
  return (
    <div class="bg-black text-white">
      <Navbar />
      {/* <!-- Search Section --> */}
      <div class="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          {/* <!-- Search Header --> */}
          <div class="text-center mb-8">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Discover Movies & Shows
            </h1>
            <p class="text-gray-400 text-sm sm:text-base">
              Search through thousands of movies and TV shows
            </p>
          </div>

          {/* <!-- Search Bar --> */}
          <div class="max-w-3xl mx-auto mb-12">
            <form onSubmit={submit} className="flex w-full gap-1.5">
              <div class="relative w-full">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for movies, shows, actors..."
                  class="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-4 pl-14 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition"
                />
                <i class="fas fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>
              <button
                type="submit"
                class="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl text-sm font-medium transition "
              >
                Search
              </button>
            </form>
          </div>

          {/* <!-- Filter Section --> */}
          <div class="mb-8 flex flex-wrap gap-3">
            <button class="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-sm font-medium transition">
              All
            </button>
            <button
              class="bg-gray-900 hover:bg-gray-800 border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition"
              onClick={() => setQuery("movies")}
            >
              Movies
            </button>
            <button
              class="bg-gray-900 hover:bg-gray-800 border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition"
              onClick={() => setQuery("series")}
            >
              TV Shows
            </button>
            <button
              class="bg-gray-900 hover:bg-gray-800 border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition"
              onClick={() => setQuery("drama")}
            >
              Drama
            </button>
            <button
              class="bg-gray-900 hover:bg-gray-800 border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition"
              onClick={() => setQuery("horror")}
            >
              Horror
            </button>
            <button
              class="bg-gray-900 hover:bg-gray-800 border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition"
              onClick={() => setQuery("action")}
            >
              Action
            </button>
            <button
              class="bg-gray-900 hover:bg-gray-800 border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition"
              onClick={() => setQuery("comedy")}
            >
              Comedy
            </button>
            <button
              class="bg-gray-900 hover:bg-gray-800 border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition"
              onClick={() => setQuery("sci-fi")}
            >
              Sci-Fi
            </button>
          </div>

          {/* <!-- Results Count --> */}
          <div class="mb-6 flex items-center justify-between">
            <p class="text-gray-400">
              Showing <span class="text-white font-semibold">24</span> results
            </p>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-400">Sort by:</span>
              <select class="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-600">
                <option>Most Popular</option>
                <option>Latest Release</option>
                <option>Highest Rated</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>

          {/* <!-- Movie Cards Grid --> */}
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {/* <!-- Movie Card 1 - American Horror Story --> */}

            {movies?.map((movie) => (
              <Link to={`/movie/${movie?.imdbID}`} class="group cursor-pointer">
                <div class="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 bg-gray-900">
                  <img
                    src={movie?.Poster}
                    alt={movie?.Title}
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="absolute top-3 right-3 bg-black bg-opacity-80 rounded-lg px-2 py-1 flex items-center space-x-1">
                    <i class="fas fa-star text-yellow-500 text-xs"></i>
                    <span class="text-xs font-semibold">7.9</span>
                  </div>
                  <div class="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      to={`/movie/${movie?.imdbID}`}
                      class="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center space-x-2 transition cursor-pointer"
                    >
                      <i class="fas fa-play"></i>
                      <span>Play</span>
                    </Link>
                  </div>
                </div>
                <h3 class="font-semibold text-sm sm:text-base mb-1 line-clamp-1">
                  {movie?.Title}
                </h3>
                <p class="text-xs sm:text-sm text-gray-400">
                  {movie?.Year} • {movie?.Type}
                </p>
              </Link>
            ))}

            {/* <!-- Movie Card 2 --> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieSearch;
