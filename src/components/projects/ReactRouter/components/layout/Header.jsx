import { NavLink } from "react-router-dom";

/*
Notes:-

1. Due to <a> html tag when link is click their is full postback of page so no use of <a> anchor html tags in React.
   Therefore in React in-built component as <NavLink> is provided in place on <a> anchor tag or any navigation html tag.

2.
   

*/

export const Header = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return { color: isActive ? "cyan" : "black" };
  };

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Memebership, 30-days return or refund guarantee.</p>
            </div>
            <div className="sign_in_up">
              <NavLink to="#">SIGN IN </NavLink>
              <NavLink to="#">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>MoviesFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link activelink" : "nav-link"
                  }>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : "black" };
                  }}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movie"
                  className="nav-link"
                  style={getNavLinkStyle}>
                  Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
