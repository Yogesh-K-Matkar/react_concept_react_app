import footerContactData from "../../api/footerData.json";

import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

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

export default Footers;
