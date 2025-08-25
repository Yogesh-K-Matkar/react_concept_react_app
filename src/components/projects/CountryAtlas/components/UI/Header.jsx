import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Headers = () => {
  const [showMenu, setShowMenu] = useState(false);

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * This function toggles the showMenu state which is used to show/hide the menu in the mobile screen.
   * The showMenu state is used to apply the class "menu-mobile" to the nav element which makes the menu visible in the mobile screen.
   */
  /*******  e8f2d6f2-0c63-4d0a-8d5c-4de61f80c90e  *******/
  const handleMenuDisplayToogle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={() => handleMenuDisplayToogle()}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
