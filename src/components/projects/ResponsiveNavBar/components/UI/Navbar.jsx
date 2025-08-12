import { useState } from "react";
import { useCustomResponsiveNavBar } from "../../pages/ResponsiveNavBar";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const { navLinks } = useCustomResponsiveNavBar();

  //console.log(navLinks);

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuDisplayToogle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>All-in-One Secure Files</h1>
          </div>
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              {navLinks.map((link, index) => {
                let { url, name } = link;
                return (
                  <li key={index}>
                    <a href={url}>{name}</a>
                  </li>
                );
              })}
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
