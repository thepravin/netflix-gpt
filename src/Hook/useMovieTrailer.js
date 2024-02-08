import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constatnts";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = async (movieId) => {
  const dispatch = useDispatch();
  const movieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    // if trailer not present
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    movieVideos();
  }, []);
};

export default useMovieTrailer;
