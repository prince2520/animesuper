import { useState } from "react";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import ZoomInZoomOut from "../../../animation/Wrapper/ZoomInZoomOut";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../redux/thunk/authThunk";
import { useAuth } from "../../../hooks/useAuth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const {authTimer} = useAuth();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(loginThunk({
      email: event.target[0].value,
      password: event.target[1].value
    }))
    .unwrap()
    .then(((data) => {
      console.log(data)
      authTimer(data);
    }))
    .catch((err) => {console.log(err)});
  };

  return (
    <form onSubmit={(event) => loginHandler(event)}>
      <h2>Login</h2>

      <div>
        <h5>Email</h5>
        <span className="input-box">
          <Icon icon="ic:outline-email" />
          <input name="email" type="email" placeholder="Enter your username" />
        </span>
      </div>

      <div>
        <h5>Password</h5>
        <span className="input-box">
          <input
            name="password"
            type={!showPassword ? "password" : "text"}
            placeholder="Enter your password"
          />
          <ZoomInZoomOut width={"fit-content"}>
            <Icon
              className={"cursor-btn"}
              icon={!showPassword ? `mdi:eye-off-outline` : "mdi:eye-outline"}
              onClick={() => setShowPassword(!showPassword)}
            />
          </ZoomInZoomOut>
        </span>
      </div>

      <CustomButton width={"60%"} backgroundColor={"var(--primary)"}>
        <h5 className="color-text">Login</h5>
      </CustomButton>

      <span className="change-box">
        <p className="color-text-extra-light">Don't have an account?</p>
        <Link to="/signup">
          <p className="color-text-light highlight">Sign up</p>
        </Link>
      </span>

    </form>
  );
};

export default LoginForm;
