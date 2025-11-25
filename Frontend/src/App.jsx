import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";
import MovieSearch from "./pages/MovieSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
