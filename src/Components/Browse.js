import React from 'react'
import Header from './Header'
import useNewPlayingMovies from '../Hook/useNewPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hook/usePopularMovies';
import useTrandingMovies from '../Hook/useTrandingMovies'

const Browse = () => {

  // api calling
  useNewPlayingMovies();
  usePopularMovies();
  useTrandingMovies();

  return (
    <>
      <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
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
  )
}

export default Browse