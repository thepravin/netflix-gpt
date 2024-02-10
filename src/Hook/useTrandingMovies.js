import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constatnts";
import { useEffect } from "react";
import {  addTrendingMovies } from "../utils/movieSlice";

 const useTrandingMovies = () => {
  /* API CALL
fetch data and ubdate store
*/
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS
    );
    const json = await data.json();
   // console.log(json.results)

    // update into store movie
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};


export default useTrandingMovies;