import { NavLink } from "react-router-dom";
import "./Card.css";

export const MovieCard = (props) => {
  const { movieData } = props;
  const { imdbID, Title, Year, Type, Poster } = movieData;

  //console.log(Title, Year, Type, Poster);

  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            {/* <NavLink to={`/movie/${imdbID}`}> */}
            <button className="ticket__buy-btn">Watch Now</button>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </li>
  );
};
