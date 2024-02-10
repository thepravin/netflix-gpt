import React from "react";
import MovieCard from "./MovieCard";

import "./MovieList.css"; // Import a CSS file for styling

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl text-white py-4">{title}</h1>
      <div className="scroll-container">
      
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
