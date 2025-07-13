//import { useParams } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import "./Card.css";

export const MovieDetails = () => {
  //const urlParams = useParams();

  //console.log(urlParams);

  const movieData = useLoaderData();

  console.log(movieData);

  let { Actor, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } = movieData;

  return (
    movieData && (
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <h4 className="ticket__movie_title">
              <b>
                <u>{Title}</u>
              </b>
            </h4>
          </div>
        </div>
      </div>
    )
  );
};
