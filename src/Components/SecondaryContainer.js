import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);

  

  return (
    <div>
      <MovieList title={"Now Playing Movies"} movies={movies}  />
      <MovieList title={"TRENDING"} movies={movies}  />
    </div>
  );
};

export default SecondaryContainer;
