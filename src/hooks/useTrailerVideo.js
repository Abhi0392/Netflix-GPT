import React, { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?&language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    const filteredData =
      jsonData &&
      jsonData?.results.filter((item) => {
        return item.type === "Trailer";
      });
    const trailer = filteredData?.length
      ? filteredData[0]
      : jsonData?.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useTrailerVideo;
