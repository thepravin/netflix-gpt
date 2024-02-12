import React, { useEffect, useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constatnts";
import { addgptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    // search box text => searchText.current?.value

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current?.value +
      "only give me name of 5 movies,in comma seperated format like the example result given ahead.Example Result: Gadar,sholay      3)Don ";

    // openai api call
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      //TODO:Write error handling
    }
    // making array
    const gptMovies = gptResults.choices?.[0].message.content.split(",");

    // search each movie >>> herer result is array of 10 promises.
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addgptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          placeholder={lang[language].placeHolder}
          type="text"
          className="p-4 m-4 col-span-10 rounded-lg "
        />
        <button
          onClick={handleSearch}
          className="col-span-2 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
