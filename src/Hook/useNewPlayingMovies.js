import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constatnts";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNewPlayingMovies = () => {
  /* API CALL
fetch data and ubdate store
*/

  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results)

    // update into store movie
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
   !nowPlayingMovies && getNowPlaying();
  }, []);
};

export default useNewPlayingMovies;
