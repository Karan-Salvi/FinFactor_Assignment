import useFetchMovies from "../hooks/useFetchMovies";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Popular from "../components/Popular";
import MostPopular from "../components/MostPopular";
import Series from "../components/Series";
import Footer from "../components/Footer";

export default function Home() {
  const { movies, loading, error, searchMovies } = useFetchMovies();

  console.log(movies);

  const [category, setCategory] = useState("horror");

  useEffect(() => {
    searchMovies(category);
  }, [category]);

  return (
    <div class="bg-black text-white">
      <Navbar />
      <Hero />
      <Category />
      <section
        class="relative max-w-[1400px] mx-auto mt-20 px-6 md:px-12 rounded-3xl overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url('https://wallpaperaccess.com/thumb/8939731.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div class="bg-gradient-to-r from-black via-black/80 to-black/70 p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col justify-center space-y-6 max-w-lg">
            <h2 class="text-5xl font-cinzel font-bold tracking-wide">
              BLACK ADAM
            </h2>
            <div class="flex items-center space-x-2">
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <span class="text-yellow-400 font-semibold tracking-wide">
                IMDb 8.1
              </span>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">
              Shazam! (Death Adam) (2022) Nearly 5,000 years ago, Black Adam was
              bestowed with the almighty powers of the ancient gods—and
              imprisoned just as quickly—Black Adam is freed from his earthly
              tomb, ready to unleash his unique form of justice on the modern
              world.
            </p>
            <div class="flex items-center space-x-4">
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full flex items-center space-x-3 shadow-md transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.752 11.168l-6.586-4.352A1 1 0 007 7.618v8.764a1 1 0 001.166.986l6.586-1.562a1 1 0 000-1.832z"
                  />
                </svg>
                <span>PLAY</span>
              </button>
              <button class="text-white/70 hover:text-white border border-white/50 rounded-full p-3 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* <!-- Three smaller images on right --> */}
          <div class="hidden md:flex flex-col space-y-4 col-span-2">
            <img
              src="https://wallpaperaccess.com/thumb/8939737.jpg"
              alt="Scene 1"
              class="rounded-lg w-full h-32 object-cover shadow-lg"
            />
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.n1wGeSc_qR7bdT_2zGgaKwHaEK?pid=Api&P=0&h=180"
              alt="Scene 2"
              class="rounded-lg w-full h-32 object-cover shadow-lg"
            />
            <img
              src="https://wallpaperaccess.com/thumb/1079504.jpg"
              alt="Scene 3"
              class="rounded-lg w-full h-32 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
      <Popular />
      <MostPopular />
      <section class="max-w-[1400px] mx-auto mt-24 px-6 md:px-12 text-center">
        <h2 class="font-cinzel text-5xl font-bold mb-12">Popular TV Series</h2>
      </section>
      <section
        class="relative max-w-[1400px] mx-auto px-6 md:px-12 rounded-3xl overflow-hidden shadow-lg"
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/4243613.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="bg-gradient-to-r from-black via-black/90 to-black/50 p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col justify-center space-y-6 max-w-lg">
            <h2 class="text-5xl font-cinzel font-bold tracking-wide">
              THE FLASH : <br />
              SEASON 9
            </h2>
            <div class="flex items-center space-x-2">
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <span class="text-yellow-400 font-semibold tracking-wide">
                IMDb 7.8
              </span>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">
              After being struck by lightning, Barry Allen wakes to find that
              his coma is over. He’s been given the power of super-speed,
              becoming the new Flash, fighting crime in Central City.
            </p>
            <div class="flex items-center space-x-4">
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full flex items-center space-x-3 shadow-md transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.752 11.168l-6.586-4.352A1 1 0 007 7.618v8.764a1 1 0 001.166.986l6.586-1.562a1 1 0 000-1.832z"
                  />
                </svg>
                <span>PLAY</span>
              </button>
              <button class="text-white/70 hover:text-white border border-white/50 rounded-full p-3 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* <!-- Right images stacked --> */}
          <div class="hidden md:grid grid-cols-1 gap-6 col-span-2">
            <img
              src="https://wallpapercave.com/wp/wp11156795.jpg"
              alt="All of Us Are Dead"
              class="rounded-lg object-cover h-32 w-full shadow-lg"
            />
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.tI04tImBNmq-gQfLrg8KyAHaEK?pid=Api&P=0&h=180"
              alt="Flash TV Show"
              class="rounded-lg object-cover h-32 w-full shadow-lg"
            />
            <img
              src="https://wallpapercave.com/wp/wp7317303.jpg"
              alt="Money Heist: Korea"
              class="rounded-lg object-cover h-32 w-full shadow-lg"
            />
          </div>
        </div>
      </section>
      <Series />
      <Footer />
    </div>
  );
}
