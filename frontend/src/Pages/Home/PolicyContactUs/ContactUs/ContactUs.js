import {useDispatch} from "react-redux";
import {Icon} from "@iconify/react";

import Button from "../../../../shared/Button/Button";

import {OverlayActions} from "../../../../store/overlay";
import {contactUs} from "../../../../api";

import './ContactUs.css';
import {useRef} from "react";

const ContactUs = () => {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const messageRef = useRef();

    const messageUs = () => {
        let email = emailRef.current.value;
        let message = messageRef.current.value;

        contactUs(email, message).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <div className="contact-us-page">
            <div className="contact-us-route"> Help > <span style={{color: "white"}}>Contact Us</span></div>
            <div onSubmit={(event) => messageUs(event)} className="content-us-box">
                <span className="contact-us-heading heading">
                    <h1 style={{margin: "0"}}>Contact Us</h1>
                </span>
                <div className="links">
                    <div className="link-box">
                        <Icon
                            className='link-icon'
                            icon="logos:facebook"
                            />
                        <span className="link-name">Facebook</span>
                    </div>
                    <div className="link-box">
                        <Icon
                            className='link-icon'
                            icon="logos:reddit-icon"
                            />
                        <span className="link-name">Reddit</span>
                    </div>
                    <div className="link-box">
                        <Icon
                            className='link-icon'
                            icon="logos:twitter"
                            />
                        <span className="link-name">Twitter</span>
                    </div>
                </div>
                <div className="contact-note" style={{color: "#636262", fontSize: "1rem"}}>
                    Please submit your inquiry using the form below and we will get in touch with you shortly!
                </div>
                <span className="email-box">
                    <label htmlFor="email" style={{
                        fontSize: "1.25rem",
                        fontWeight: "500",
                    }}>Email</label>
                    <span className="input-box">
                        <Icon icon="ic:outline-email" style={{fontSize: '2rem', color: 'white'}}/>
                        <input style={{borderLeft: "0.095rem solid #636262", paddingLeft: "0.5rem"}} type="email"
                               ref={emailRef}
                               placeholder="Enter your email"/>
                    </span>
                </span>

                <div className="message-box">
                    <label htmlFor="Message" style={{
                        fontSize: "1.25rem",
                        fontWeight: "500",
                    }}>Message</label>
                    <textarea ref={messageRef} placeholder="Enter your message"/>
                </div>
                <div className='contact-us-submit' onClick={() => {
                    messageUs()
                    dispatch(OverlayActions.showThankYouBoxHandler())
                }}>
                    <Button title="Submit"/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;