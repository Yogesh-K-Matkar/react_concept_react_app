import footerContactData from "../../api/footerData.json";

import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footers = () => {
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContactData.map((footerContact, index) => {
          return (
            <FooterContact key={index} id={index} contact={footerContact} />
          );
        })}
      </div>
      <CopyRightContent />
    </footer>
  );
};

const FooterContact = (props) => {
  const { id, contact } = props;
  const { icon, title, details } = contact;

  return (
    <div key={id} className="footer-contact">
      <div className="icon">
        {icon === "MdPlace" ? (
          <MdPlace />
        ) : icon === "IoCallSharp" ? (
          <IoCallSharp />
        ) : icon === "TbMailPlus" ? (
          <TbMailPlus />
        ) : (
          ""
        )}
      </div>
      <div className="footer-contact-text">
        <p>{title}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};

const CopyRightContent = () => {
  return (
    <div className="copyright-area">
      <div className="container">
        <div className="grid grid-two-cols">
          <div className="copyright-text">
            <p>
              Copyright &copy; 2025, All Right Reserved
              <NavLink
                to="https://github.com/Yogesh-K-Matkar/react_concept_react_app"
                target="_blank"
              >
                Yogesh Matkar
              </NavLink>
            </p>
          </div>

          <div className="footer-menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink
                  to="https://www.linkedin.com/in/yogesh-matkar-fullstack/"
                  target="_blank"
                >
                  Social
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://github.com/Yogesh-K-Matkar/react_concept_react_app"
                  target="_blank"
                >
                  Source Code
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
