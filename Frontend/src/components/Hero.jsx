import React, { useState } from "react";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState({
    uri: "https://wallpaperaccess.com/full/5587837.jpg",
    id: 1,
  });

  return (
    <section class="relative max-w-[1400px] mx-auto mt-6">
      {/* <!-- Background image --> */}
      <div
        class="relative overflow-hidden rounded-3xl shadow-lg"
        style={{
          backgroundImage: `url(${selectedImage.uri})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1rem",
          height: "550px",
        }}
      >
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/0"></div>
        <div class="relative z-10 flex flex-col justify-center h-full max-w-7xl px-6 md:px-12 space-y-6">
          <h1 class="text-5xl md:text-6xl font-cinzel font-bold leading-tight text-white">
            RAYA <br />
            AND THE <br />
            LAST DRAGON
          </h1>
          <p class="max-w-xl text-gray-300 text-sm leading-relaxed">
            A quest to save her world.
            <span class="text-yellow-400 underline cursor-pointer hover:text-yellow-300">
              Mar. 03, 2021
            </span>
            <span class="text-yellow-400 underline cursor-pointer hover:text-yellow-300">
              USA
            </span>
          </p>
          <p class="max-w-xl text-gray-300 text-xs sm:text-sm leading-relaxed">
            It's a wonderful fact that the world is filled with wonders by the
            creative concept of imagination drawing it for layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters.
          </p>

          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-1">
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
            </div>
            <span class="text-yellow-400 font-semibold tracking-wide">
              8.0 RATING
            </span>
          </div>

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

          {/* <!-- Thumbnails carousel --> */}
          <div class="absolute bottom-6 left-6 flex space-x-2 overflow-x-auto scrollbar-hide max-w-[90vw] md:max-w-[45vw]">
            <img
              src="https://wallpaperaccess.com/full/5587837.jpg"
              alt=""
              class={`w-28 h-16 rounded-lg object-cover cursor-pointer" ${
                selectedImage.id === 1 ? "border-4 border-yellow-400" : ""
              } cursor-pointer`}
              onClick={() => {
                setSelectedImage({
                  uri: "https://wallpaperaccess.com/full/5587837.jpg",
                  id: 1,
                });
              }}
            />

            <img
              src="https://wallpaperaccess.com/full/5587838.jpg"
              alt=""
              class={`w-28 h-16 rounded-lg object-cover cursor-pointer" ${
                selectedImage.id === 2 ? "border-4 border-yellow-400" : ""
              } cursor-pointer`}
              onClick={() => {
                setSelectedImage({
                  uri: "https://wallpaperaccess.com/full/5587838.jpg",
                  id: 2,
                });
              }}
            />
            <img
              src="https://wallpaperaccess.com/full/5587839.jpg"
              alt=""
              class={`w-28 h-16 rounded-lg object-cover cursor-pointer" ${
                selectedImage.id === 3 ? "border-4 border-yellow-400" : ""
              } cursor-pointer`}
              onClick={() => {
                setSelectedImage({
                  uri: "https://wallpaperaccess.com/full/5587839.jpg",
                  id: 3,
                });
              }}
            />
            <img
              src="https://wallpaperaccess.com/full/5587864.jpg"
              alt=""
              class={`w-28 h-16 rounded-lg object-cover cursor-pointer" ${
                selectedImage.id === 4 ? "border-4 border-yellow-400" : ""
              } cursor-pointer`}
              onClick={() => {
                setSelectedImage({
                  uri: "https://wallpaperaccess.com/full/5587864.jpg",
                  id: 4,
                });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
