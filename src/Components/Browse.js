import React from "react";
import Header from "./Header";
import useNewPlayingMovies from "../Hook/useNewPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hook/usePopularMovies";
import useTrandingMovies from "../Hook/useTrandingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const toggleGpt = useSelector((store) => store.gpt.showGptSearch);

  // api calling
  useNewPlayingMovies();
  usePopularMovies();
  useTrandingMovies();

  return (
    <>
      <div>
        <Header />
        {toggleGpt ? (
          <GptSearch />
        ) : (
          <>            
            <MainContainer />
            <SecondaryContainer />
          </>
        )}

        {/* 
          MainContainer
            - videoBackground
            - videoTitle
        
          SecondaryContainer
            - MovieList * n
            - cards * n
         */}
      </div>
    </>
  );
};

export default Browse;
