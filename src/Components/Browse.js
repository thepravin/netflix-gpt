import React from 'react'
import Header from './Header'
import useNewPlayingMovies from '../Hook/useNewPlayingMovies';


const Browse = () => {

  // api calling
  useNewPlayingMovies();

  return (
    <>
      <div>
        <Header/>
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