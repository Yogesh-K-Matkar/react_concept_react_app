export const Navbar = () => {
  let navLinks = [
    { url: "#", name: "Home" },
    { url: "#", name: "About" },
    { url: "#", name: "Services" },
    { url: "#", name: "Contact" },
  ];

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>All-in-One Secure Files</h1>
          </div>
          <nav>
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
        </div>
      </div>
    </header>
  );
};
