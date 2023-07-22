import {Link, Outlet} from "react-router-dom";
import {useDispatch} from 'react-redux'

import {helperActions} from "../../store/helper";
import {loginSignupPageRight, Logo} from "../../photo";

import './LoginSignupPage.css';

const LoginSignupPage = () => {

    const dispatch = useDispatch();

    return (
        <div className="form-page">
            <div className="form-page-left">
                <span className="form-top">
                    <img alt={'anime-super'} src={Logo} />
                    <Link to='/home' className="skip" onClick={() => dispatch(helperActions.isSkipHandler(true))}>Skip >></Link>
                </span>
                <Outlet/>
            </div>

            <div className="form-page-right">
                <div className="slogan">
                    <p>“Forgetting is like a wound. The wound may heal but it has already left a scar.”</p>
                    <span>~ Monkey D Luffy (One Piece)</span>
                </div>
                <div className="img-overlay">
                    <img src={loginSignupPageRight} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default LoginSignupPage;