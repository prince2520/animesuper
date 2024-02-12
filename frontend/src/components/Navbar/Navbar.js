import './Navbar.css';

import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Logo} from "../../photo";

import AuthContext from "../../Context/auth";

import {useContext} from "react";
import {helperActions} from "../../store/helper";
import {OverlayActions} from "../../store/overlay";

const Navbar = () => {
    const profilePhoto = useSelector(state => state.myProfile.profile_photo);
    const authCtx = useContext(AuthContext);
    const dispatch = useDispatch()
    const showMobileSideBar = useSelector(state => state.helper.showMobileSideBar);

    return (
        <div className="navbar">
            <Icon icon="material-symbols:menu-rounded" onClick={()=>dispatch(helperActions.showMobileSideBarHandler(!showMobileSideBar))} style={{fontSize: '2rem', color: "white"}} />
            <Link to='/home' className="nav-logo">
                <img alt='anime-super' src={Logo}/>
            </Link>
            {authCtx.isAuth ? <div className="flex-center profile">
                <img onClick={() => dispatch(OverlayActions.showProfileHandler())} src={profilePhoto} alt="profile-img"/>
            </div> : <Link to='/login' className='login-btn'><h4>Login</h4></Link> }
        </div>
    );
}

export default Navbar;