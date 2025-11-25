import React from "react";

const Footer = () => {
  return (
    <footer class="bg-black border-t border-white/10 pt-12 pb-16">
      <div class="max-w-[1400px] mx-auto px-6 md:px-12">
        <div class="flex justify-between items-center mb-8">
          <div class="text-yellow-400 font-bold text-xl font-cinzel select-none cursor-default">
            Movie love
          </div>
          <div class="flex space-x-6 text-white/70 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              class="hover:text-yellow-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.596 0 0 .6 0 1.33v21.34C0 23.404.596 24 1.325 24h11.49V14.71h-3.129v-3.63h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.762v2.31h3.59l-.467 3.631h-3.122V24h6.116c.73 0 1.324-.597 1.324-1.33V1.33c0-.73-.595-1.33-1.326-1.33z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Google"
              class="hover:text-yellow-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.35 11.1h-9.29v2.86h5.43c-.23 1.35-1.53 3.97-5.43 3.97-3.27 0-5.95-2.72-5.95-6.05s2.68-6.05 5.95-6.05c1.87 0 3.14.79 3.87 1.47l2.65-2.55c-1.57-1.47-3.6-2.37-6.52-2.37-5.32 0-9.64 4.39-9.64 9.82s4.32 9.82 9.64 9.82c5.57 0 9.27-3.89 9.27-9.37 0-.63-.07-1.08-.14-1.38z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              class="hover:text-yellow-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56c-.89.39-1.83.66-2.83.78a4.936 4.936 0 0 0 2.17-2.72 9.864 9.864 0 0 1-3.13 1.2 4.917 4.917 0 0 0-8.38 4.48 13.94 13.94 0 0 1-10.12-5.14 4.917 4.917 0 0 0 1.52 6.57c-.81-.03-1.57-.25-2.23-.62v.06a4.917 4.917 0 0 0 3.94 4.81 4.93 4.93 0 0 1-2.22.08 4.919 4.919 0 0 0 4.59 3.41 9.856 9.856 0 0 1-6.1 2.1c-.4 0-.79-.02-1.17-.07a13.91 13.91 0 0 0 7.53 2.22c9.04 0 14-7.49 14-13.98 0-.21 0-.42-.02-.63A10.01 10.01 0 0 0 24 4.56z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm lowercase text-white/50">
          <div>
            <h3 class="text-yellow-400 font-semibold mb-3">Movie</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Action
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Comedy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Horror
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Animation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Fantasy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-yellow-400 font-semibold mb-3">Series</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Reality Shows
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Classic Shows
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Valentine Day
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Comedy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Fantasy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-yellow-400 font-semibold mb-3">Support</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  General Info
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-400 transition">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-yellow-400 font-semibold mb-3">Support</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="mailto:support@movies.com"
                  class="hover:text-yellow-400 transition"
                >
                  support@movies.com
                </a>
              </li>
              <li class="select-text">Tel : 019875232***</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
