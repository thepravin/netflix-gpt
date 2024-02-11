import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BAGROUND } from '../utils/constatnts'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
          <img
            src={BAGROUND}
            alt="baground"
          />
        </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch