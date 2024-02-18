import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BAGROUND } from "../utils/constatnts";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img className="h-s" src={BAGROUND} alt="baground" />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
