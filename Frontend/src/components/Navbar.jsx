import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto">
      <div class="flex items-center space-x-8">
        <div class="text-yellow-400 font-bold text-xl font-cinzel cursor-pointer select-none">
          Movie love
        </div>
        <ul class="hidden md:flex items-center space-x-12 text-sm font-medium text-white/75">
          <li>
            <Link to="/" class="hover:text-white transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`/movie`}
              class="hover:text-white transition duration-300"
            >
              Tv Shows
            </Link>
          </li>
          <li>
            <Link
              to={`/movie`}
              class="hover:text-yellow-400 transition duration-300 font-cinzel"
            >
              Movie
            </Link>
          </li>
          <li>
            <Link
              to={`/movie`}
              class="hover:text-white transition duration-300"
            >
              Upcoming
            </Link>
          </li>
        </ul>
      </div>
      <Link
        to={`/movie`}
        class="flex items-center space-x-8 relative text-white/60"
      >
        <div className="flex justify-center  items-center border rounded-full border-white/50 px-4 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" w-6 h-7 text-white/50 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m.7-4.7a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <img
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="User"
          class="w-8 h-8 rounded-full border border-yellow-400 cursor-pointer"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
