import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../components/UI/MovieCard";

export const Movie = () => {
  const moviesData = useLoaderData();

  console.log(moviesData);

  const getMoviesUI = () => {
    return (
      moviesData && (
        <ul className="container grid grid-four-cols">
          {moviesData.Search.map((curMovie) => {
            return <MovieCard key={curMovie.imdbID} movieData={curMovie} />;
          })}
        </ul>
      )
    );
  };

  return (
    <>
      <h1>
        <b>
          <u>Movie Page</u>
        </b>
      </h1>
      <br />
      {getMoviesUI()}
    </>
  );
};
