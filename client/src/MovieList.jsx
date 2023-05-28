import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
// http://localhost:5000/movies/get_all
function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleGetMovies = async () => {
      await axios.get("http://localhost:5000/movies/get_all").then((result) => {
        setMovies(result.data);
        console.log(result.data);
      });
    };
    handleGetMovies();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4 text-center display-4 fw-bold">Liste des films</h2>
      <div className="row">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;
