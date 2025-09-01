import { NavLink } from "react-router-dom";
import imgReactQuery from "../../assets/react-query.png";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">
          <img className="logo" src={imgReactQuery} alt="ReactQuery" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/fetch/traditional">TraditionalFetch</NavLink>
          </li>
          <li>
            <NavLink to="/fetch/reactquery">ReactQueryFetch</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
