import React from "react";
import { IMG_URL_CDN } from "../utils/constatnts";

const MovieCard = ({ posterUrl, moveTitle }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="image" src={IMG_URL_CDN + posterUrl} />
      <h2>{moveTitle}</h2>
    </div>
  );
};

export default MovieCard;