import {Link, Outlet} from "react-router-dom";

import {loginSignupPageRight, Logo} from "../../photo";

import './LoginSignupPage.css';

const LoginSignupPage = () => {

    return (
        <div className="form-page">
            <div className="form-page-left">
                <span className="flex-center form-top">
                    <img alt={'anime-super'} src={Logo}/>
                        <Link to='/home/anime' className="color-text-light highlight cursor-btn">Skip >> </Link>
                </span>
                <Outlet/>
            </div>
            <div className="form-page-right">
                <div className="flex-center slogan">
                    <h3>“Forgetting is like a wound. The wound may heal but it has already left a scar.”</h3>
                    <p className='color-text' style={{textAlign: "right", width: '80%'}}>~ Monkey D Luffy (One Piece)</p>
                </div>
                <div className="img-overlay">
                    <img src={loginSignupPageRight} alt="img"/>
                </div>
            </div>
        </div>)
};

export default LoginSignupPage;