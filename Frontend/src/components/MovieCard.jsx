import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className="bg-gray-800 p-3 rounded-lg hover:scale-105 transition block w-full"
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
      />

      <h3 className="mt-3 font-bold text-lg">{movie.Title}</h3>
      <p className="text-gray-400">{movie.Year}</p>
    </Link>
  );
}
