import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { FooterImage, Logo } from "../../photo";

import "./Footer.css";

const policiesData = [
  {
    to: "terms-and-condition",
    name: "Term of conditions",
  },
  {
    to: "dmca",
    name: "DMCA",
  },
  {
    to: "contact-us",
    name: "Contact Us",
  },
];

const Footer = () => {
  return (
    <div className="footer-bar">
      <img src={FooterImage} alt="footer-img" />
      <div className="footer-overlay">
        <div className="footer-left">
          <div className="policies">
            {policiesData.map((data) => (
              <Link key={data.toString()} to={data.to}>
                <p className="color-text-light highlight">{data.name}</p>
              </Link>
            ))}
          </div>
          <div className="store-policy">
            <p className="color-text-extra-light">
              SuperAnime does not index any files on our server, we only linked
              to the media which is hosted on myanimelist api.
            </p>
            <h6 className="color-text-extra-light">©superanime.com</h6>
          </div>
        </div>
        <div className="footer-right">
          <div className="socials-logo">
            {["logos:facebook", "logos:reddit-icon", "logos:twitter"].map(
              (icon) => (
                <Icon
                  key={icon.toString()}
                  icon={icon}
                  style={{ fontSize: "2rem" }}
                />
              )
            )}
          </div>
          <div className="site-logo">
            <img
              alt="anime-super"
              src={Logo}
              style={{ width: "7rem", position: "relative" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
