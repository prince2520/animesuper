import { useRef } from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { contactUs } from "../../../../api/auth";
import { OverlayActions } from "../../../../store/overlay";
import {contactLinkData} from "../../../../constants/constants";

import CustomButton from "../../../../components/CustomButton/CustomButton";

import "./../PolicyContactUs.css";
import "./ContactUs.css";



const ContactUs = () => {
  const emailRef = useRef();
  const messageRef = useRef();

  const dispatch = useDispatch();

  // message to administrators
  const messageUs = () => {
    let email = emailRef.current.value;
    let message = messageRef.current.value;

    contactUs(email, message)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-center contact-us-page">
      <div className="route">
        <h3 className="color-text-light">
          Help > <span style={{ color: `var(--text)` }}>Contact Us</span>
        </h3>
      </div>

      <div onSubmit={(event) => messageUs(event)} className="content-us-box">
        <h2>Contact Us</h2>

        <div className="links">
          {contactLinkData.map((data) => (
            <div className="link-box">
              <Icon className="link-icon" icon={data.icon} />
              <h6>{data.name}</h6>
            </div>
          ))}
        </div>

        <p className="contact-note">
          Please submit your inquiry using the form below and we will get in
          touch with you shortly!
        </p>

        <div className="email-box">
          <h5>Email</h5>
          <div className="input-box">
            <Icon icon="ic:outline-email" />
            <input type="email" ref={emailRef} placeholder="Enter your email" />
          </div>
        </div>

        <div className="message-box">
          <h5>Message</h5>
          <textarea ref={messageRef} placeholder="Enter your message" />
        </div>

        <div
          className="contact-us-submit"
          onClick={() => {
            messageUs();
            dispatch(OverlayActions.showThankYouBoxHandler());
          }}
        >
          <CustomButton width={"100%"} backgroundColor={"var(--primary)"}>
            <h5 className="color-text">Submit</h5>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
