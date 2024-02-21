import { Icon } from "@iconify/react";

import { Logo, ThumbsUpImg } from "./photo";

import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thank-you-box">
      <div className="circle" />
      <div className="thank-you-box-top">
        <img src={Logo} alt="anime-logo" />
      </div>
      <div className="thank-you-box-middle">
        <img src={ThumbsUpImg} alt="thumbs-up" />
        <div className="thank-you-box-middle-content">
          <h1>Thank you for contacting us! </h1>
          <span className="message">
            <p>Your submission has been received.</p>
            <p>We will be in touch and contact you soon!</p>
          </span>
          <button>Visit our website</button>
        </div>
      </div>
      <div className="thank-you-box-bottom">
        <div className="links">
          <Icon icon="logos:facebook" style={{ fontSize: "2rem" }} />
          <Icon icon="logos:reddit-icon" style={{ fontSize: "2rem" }} />
          <Icon icon="logos:twitter" style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
