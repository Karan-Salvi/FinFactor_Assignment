import { useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_BASE = `${BASE_URL}/api`;

export default function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    if (!title) return;

    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(`${API_BASE}/search?title=${title}`);

      setMovies(res.data.Search || []);
    } catch (err) {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, searchMovies };
}
