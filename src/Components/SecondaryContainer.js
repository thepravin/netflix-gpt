import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  const trendingMovies = useSelector((store) => store.movie.trendingMovies);

  

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies}  />
      <MovieList title={"Popular"} movies={popularMovies}  />
      <MovieList title={"Trending"} movies={trendingMovies}  />
      </div>
    </div>
  );
};

export default SecondaryContainer;
