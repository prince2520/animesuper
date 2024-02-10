import { useContext, useState } from "react";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import AuthContext from "../../../Context/auth";

import Button from "../../../components/Button/Button";
import ZoomInZoomOut from "../../../animation/Wrapper/ZoomInZoomOut";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    authCtx.loginHandler(event.target[0].value, event.target[1].value);
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

      <Button width={"60%"} backgroundColor={"var(--primary)"}>
        <h5 className="color-text">Login</h5>
      </Button>

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
