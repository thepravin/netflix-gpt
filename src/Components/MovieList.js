import React from "react";
import MovieCard from "./MovieCard";



const MovieList = ({ title, movies }) => {
 
  return (
    <div className="px-6">
      <h1 className="text-2xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-auto ">
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
