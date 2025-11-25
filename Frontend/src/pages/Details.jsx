import { useParams } from "react-router-dom";
import useFetchMovieDetails from "../hooks/useFetchMovieDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Details() {
  const { id } = useParams();
  const { movie, loading, error } = useFetchMovieDetails(id);

  if (loading) return <h2 className="text-center">Loading...</h2>;
  if (error) return <h2 className="text-center text-red-500">{error}</h2>;

  return (
    <div class="bg-black text-white">
      <Navbar />
      {/* <!-- Hero Section --> */}
      <div class="relative h-screen max-w-7xl mx-auto">
        <div class="absolute inset-0 p-2 ">
          <img
            src={movie?.Poster}
            alt={movie?.Title}
            class="w-full h-full object-cover opacity-40 rounded-lg "
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
        </div>

        <div class="relative h-full flex items-center justify-center text-center px-4">
          <div class="max-w-3xl">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              {movie?.Title}
            </h1>
            <p class="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
              {movie?.Plot?.length > 120
                ? movie.Plot.substring(0, 120) + "..."
                : movie?.Plot}
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4">
              <button class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition">
                <i class="fas fa-play"></i>
                <span class="font-semibold">Play Now</span>
              </button>
              <button class="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition">
                <i class="fas fa-plus"></i>
              </button>
              <button class="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition">
                <i class="fas fa-thumbs-up"></i>
              </button>
              <button class="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition">
                <i class="fas fa-volume-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Content Section --> */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Left Column --> */}
          <div class="lg:col-span-2 space-y-8">
            {/* <!-- Description --> */}
            <div class="bg-gray-900 rounded-xl p-6">
              <h2 class="text-xl font-bold mb-4">Description</h2>
              <p class="text-gray-300 leading-relaxed">{movie?.Plot}</p>
            </div>

            {/* <!-- Cast --> */}
            <div class="bg-gray-900 rounded-xl p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold">Cast</h2>
                <div class="flex space-x-2">
                  <button class="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition">
                    <i class="fas fa-chevron-left"></i>
                  </button>
                  <button class="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition">
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {movie?.Actors?.split(", ").map((actor) => (
                  <div class="text-center">
                    <div class="w-full aspect-square bg-gray-800 rounded-lg mb-2 flex items-center justify-center">
                      <i class="fas fa-user text-lg text-white">{actor}</i>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- Reviews --> */}
            <div class="bg-gray-900 rounded-xl p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold">Reviews</h2>
              </div>

              <div class="space-y-6">
                {/* <!-- Review 1 --> */}
                {movie?.Ratings?.map((rating) => (
                  <div class="border-b border-gray-800 pb-6">
                    <div class="flex items-start justify-between mb-2">
                      <div>
                        <h3 class="font-semibold">{rating.Source}</h3>
                      </div>
                      <div class="flex items-center space-x-1">
                        <i class="fas fa-star text-red-600"></i>
                        <i class="fas fa-star text-red-600"></i>
                        <i class="fas fa-star text-red-600"></i>
                        <i class="fas fa-star text-red-600"></i>
                        <i class="fas fa-star text-gray-600"></i>
                        <span class="ml-2 text-sm">{rating.Value}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <!-- Review 2 --> */}
              </div>

              {/* <!-- Pagination --> */}
              <div class="flex items-center justify-center space-x-2 mt-6">
                <button class="p-2 rounded-lg hover:bg-gray-800 transition">
                  <i class="fas fa-chevron-left"></i>
                </button>
                <div class="flex space-x-1">
                  <button class="w-2 h-2 rounded-full bg-red-600"></button>
                  <button class="w-2 h-2 rounded-full bg-gray-600"></button>
                  <button class="w-2 h-2 rounded-full bg-gray-600"></button>
                </div>
                <button class="p-2 rounded-lg hover:bg-gray-800 transition">
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div class="space-y-6">
            {/* <!-- Release Info --> */}
            <div class="bg-gray-900 rounded-xl p-6">
              <div class="flex items-center space-x-2 mb-4">
                <i class="fas fa-calendar text-gray-400"></i>
                <span class="text-sm text-gray-400">Released Year</span>
              </div>
              <p class="text-xl font-semibold">{movie?.Year}</p>
            </div>

            {/* <!-- Available Languages --> */}
            <div class="bg-gray-900 rounded-xl p-6">
              <div class="flex items-center space-x-2 mb-4">
                <i class="fas fa-language text-gray-400"></i>
                <span class="text-sm text-gray-400">Available Languages</span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="bg-gray-800 px-3 py-1 rounded-lg text-sm">
                  {movie.Language}
                </span>
              </div>
            </div>

            {/* <!-- Ratings --> */}
            <div class="bg-gray-900 rounded-xl p-6">
              <div class="flex items-center space-x-2 mb-4">
                <i class="fas fa-star text-gray-400"></i>
                <span class="text-sm text-gray-400">Ratings</span>
              </div>
              <div class="space-y-3">
                {movie?.Ratings?.map((rating) => (
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm font-semibold">
                        {rating?.Source}
                      </span>
                      <div class="flex items-center space-x-1">
                        <i class="fas fa-star text-red-600 text-xs"></i>
                        <i class="fas fa-star text-red-600 text-xs"></i>
                        <i class="fas fa-star text-red-600 text-xs"></i>
                        <i class="fas fa-star text-red-600 text-xs"></i>
                        <i class="fas fa-star-half-alt text-red-600 text-xs"></i>
                        <span class="text-sm ml-1">{rating?.Value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- Genres --> */}
            <div class="bg-gray-900 rounded-xl p-6">
              <div class="flex items-center space-x-2 mb-4">
                <i class="fas fa-film text-gray-400"></i>
                <span class="text-sm text-gray-400">Genres</span>
              </div>
              <div class="flex flex-wrap gap-2">
                {movie?.Genre?.split(", ").map((genre) => (
                  <span class="bg-gray-800 px-3 py-1 rounded-lg text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* <!-- Director --> */}
            <div class="bg-gray-900 rounded-xl p-6">
              <div class="flex items-center space-x-2 mb-4">
                <i class="fas fa-video text-gray-400"></i>
                <span class="text-sm text-gray-400">Director</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <i class="fas fa-user text-gray-600"></i>
                </div>
                <div>
                  <p class="font-semibold">{movie?.Director}</p>
                  <p class="text-sm text-gray-400">{movie?.Writer}</p>
                </div>
              </div>
            </div>

            {/* <!-- Music --> */}
            <div class="bg-gray-900 rounded-xl p-6">
              <div class="flex items-center space-x-2 mb-4">
                <i class="fas fa-music text-gray-400"></i>
                <span class="text-sm text-gray-400">Awards</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <i class="fas fa-user text-gray-600"></i>
                </div>
                <div>
                  <p class="font-semibold">Various Awards</p>
                  <p class="text-sm text-gray-400">{movie?.Awards}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- CTA Section --> */}
      <div class="relative py-24 my-12 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-red-900/20 to-purple-900/20"></div>
        <div class="absolute inset-0 opacity-10">
          <div class="grid grid-cols-4 gap-2 h-full">
            <div class="bg-red-600"></div>
            <div class="bg-purple-600"></div>
            <div class="bg-red-600"></div>
            <div class="bg-purple-600"></div>
          </div>
        </div>
        <div class="relative max-w-4xl mx-auto text-center px-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Start your free trial today!
          </h2>
          <p class="text-gray-300 mb-8">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
          <button class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Start a Free Trial
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
