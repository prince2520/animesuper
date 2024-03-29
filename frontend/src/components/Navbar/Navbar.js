import { Link } from "react-router-dom";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Logo } from "../../photo";
import { OverlayActions } from "../../store/overlay";

import MenuBtn from "../MenuBtn/MenuBtn";
import AuthContext from "../../Context/auth";

import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const profilePhoto = useSelector((state) => state.myProfile.profile_photo);

  return (
    <div className="navbar">
      <MenuBtn />
      <Link to="/home" className="nav-logo">
        <img alt="anime-super" src={Logo} />
      </Link>
      {authCtx.isAuth ? (
        <div className="flex-center profile">
          <img
            onClick={() => dispatch(OverlayActions.showProfileHandler())}
            src={profilePhoto}
            alt="profile-img"
          />
        </div>
      ) : (
        <Link to="/login" className="login-btn">
          <h5 className="color-text">Login</h5>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
