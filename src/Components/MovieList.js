import React from "react";
import MovieCard from "./MovieCard";

import "./MovieList.css"; // Import a CSS file for styling

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-2xl text-white py-4">{title}</h1>
      <div className="scroll-my-0">
        <div className="flex movie-list-container">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              moveTitle={movie.title}
              posterUrl={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
