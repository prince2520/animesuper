import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Logo } from "../../photo";
import { OverlayActions } from "../../redux/slice/overlaySlice";

import MenuBtn from "../MenuBtn/MenuBtn";

import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  return (
    <div className="navbar">
      <MenuBtn />
      <Link to="/home" className="nav-logo">
        <img alt="anime-super" src={Logo} />
      </Link>
      {auth.isAuth ? (
        <div className="flex-center profile">
          <img
            onClick={() => dispatch(OverlayActions.showProfileReducer())}
            src={auth.profilePhoto}
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
