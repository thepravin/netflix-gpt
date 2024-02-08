
import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

  // use data from store
  const movies = useSelector((stoer)=>stoer.movie?.nowPlayingMovies);

  if(!movies) return; // this is called 'early return' not exicute above code

  const mainMovie = movies[0];
  //console.log(mainMovie)

  const {original_title,overview,id} = mainMovie

  return (
    <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer