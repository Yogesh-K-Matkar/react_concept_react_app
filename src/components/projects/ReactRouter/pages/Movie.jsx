import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../components/UI/MovieCard";

export const Movie = () => {
  const moviesData = useLoaderData();

  console.log(moviesData);

  const generateMovieUI = () => {
    return moviesData.map((curMovie) => {
      return <MovieCard key={curMovie.imdbID} movieData={curMovie} />;
    });
  };

  return;
  <>
    <h1><b><u>Movie Page</u></b></h1>
    <br/>
    {() => generateMovieUI()}
  </>;
};
