import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constatnts";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

 const usePopularMovies = () => {
  /* API CALL
fetch data and ubdate store
*/

const popularMovies = useSelector((store) => store.movie.popularMovies);

  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
   // console.log(json.results)

    // update into store movie
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
   !popularMovies && getPopularMovies();
  }, []);
};


export default usePopularMovies;