import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

import {FooterImage, Logo} from "../../photo";

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-bar">
            <img src={FooterImage} alt="footer-img"/>
            <div className="footer-overlay">
                <div className="footer-left">
                    <div className="policies">
                        <Link to='terms-and-condition'>Term of conditions</Link>
                        <Link to='dmca'>DMCA</Link>
                        <Link to='dmca'>Contact Us</Link>
                    </div>
                    <div className="store-policy">
                    <span className="note">
                        SuperAnime  does not index any files on our server, we only linked to the media which is hosted on myanimelist api.
                    </span>
                        <span className="superanime-site">
                        ©superanime.com
                    </span>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="socials-logo">
                        {["logos:facebook", "logos:reddit-icon", "logos:twitter"]
                            .map(icon=> (<Icon icon={icon} style={{fontSize:'2rem'}}/>))}
                    </div>
                    <div className="site-logo">
                        <img alt='anime-super' src={Logo} style={{width:'7rem', position:'relative'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;