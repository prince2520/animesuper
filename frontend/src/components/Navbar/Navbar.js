import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MenuBtn from "../MenuBtn/MenuBtn";

import { Logo } from "../../photo";
import { OverlayActions } from "../../redux/slice/overlaySlice";

import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  return (
    <div className="navbar">
      <MenuBtn />
      <Link to="/home/anime" className="nav-logo">
        <img alt="anime-super" src={Logo} />
      </Link>
      {auth.isAuth ? (
        <div className="flex-center profile">
          <img
            onClick={() => dispatch(OverlayActions.showProfileReducer())}
            src={auth.profile_photo}
            alt="profile-img"
          />
        </div>
      ) : (
        <Link to="/auth/login" className="login-btn">
          <h5 className="color-text">Login</h5>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
