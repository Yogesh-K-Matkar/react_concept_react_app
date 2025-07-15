import { NavLink } from "react-router-dom";
import viteLogo from "/vite.svg";

export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <img src={viteLogo} alt="logo" />
          <p>
            Welcome to Yogesh EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_2">
          <h4>SHOPPING</h4>
          <NavLink to="#">Computer Store</NavLink>
          <NavLink to="#">Laptop Store</NavLink>
          <NavLink to="#">Accessories</NavLink>
          <NavLink to="#">Sales & Discount</NavLink>
        </div>
        <div className="content_3">
          <h4>Experience</h4>
          <NavLink to="./contact.html">Contact Us</NavLink>
          <NavLink to="" target="_blank">
            Payment Method
          </NavLink>
          <NavLink to="" target="_blank">
            Delivery
          </NavLink>
          <NavLink to="" target="_blank">
            Return and Exchange
          </NavLink>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code by Yogesh Matkar</p>
        </div>
      </div>
    </footer>
  );
};
