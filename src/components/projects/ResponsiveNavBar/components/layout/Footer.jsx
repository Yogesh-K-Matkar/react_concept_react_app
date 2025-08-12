import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import footerContactDetails from "../../api/footerContactDetails.json";

export const Footer = () => {
  const objDynamicContactIconList = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  const dynamicContactDetails = (currElm) => {
    const { icon, title, details } = currElm;
    return (
      <div className="footer-contact">
        <div className="icon">{objDynamicContactIconList[icon]}</div>
        <div className="footer-contact-text">
          <p>{title}</p>
          <p>{details}</p>
        </div>
      </div>
    );
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="grid grid-three-cols">
          {footerContactDetails.map((currContactDetails) => {
            return dynamicContactDetails(currContactDetails);
          })}
        </div>
      </div>

      <div className="copyright-area">Copyright © 2025. All Right Reserved</div>
    </footer>
  );
};
