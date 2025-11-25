import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_BASE = `${BASE_URL}/api`;

export default function useFetchMovieDetails(id) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchMovie() {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(`${API_BASE}/movie/${id}`);
        setMovie(res.data);
      } catch (err) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  return { movie, loading, error };
}
