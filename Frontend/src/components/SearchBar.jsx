import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const submit = () => {
    if (query.trim() === "") return;
    onSearch(query);
  };

  return (
    <div className="flex justify-center gap-3 py-6">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-72 px-4 py-2 rounded-lg text-black outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={submit}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}
