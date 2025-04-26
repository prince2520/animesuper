import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";

import CustomButton from "../../../components/CustomButton/CustomButton";
import ZoomInZoomOut from "../../../animation/Wrapper/ZoomInZoomOut";
import { AlertBoxActions } from "../../../redux/slice/alertBoxSlice";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signUpHandler = async (event) => {
    let data = {
      username: event.target[0].value,
      email: event.target[1].value, 
      password: event.target[2].value,
      confirmPassword: event.target[3].value
    };

    event.preventDefault();

    signUpHandler(...data)
    .then((res)=>{
      AlertBoxActions.getAlertBoxReducer(res);
    }).catch((err)=>{ console.log(err)});
  };

  return (
    <form onSubmit={(event) => signUpHandler(event)}>
      <h2>Sign up</h2>

      <div>
        <h5>Username</h5>
        <span className="input-box">
          <Icon icon="gg:profile" />
          <input name={"username"} type="text" placeholder="example_123" />
        </span>
      </div>

      <div>
        <h5>Email</h5>
        <span className="input-box">
          <Icon icon="ic:outline-email" />
          <input name={"email"} type="email" placeholder="example@email.com" />
        </span>
      </div>

      <div>
        <h5>Password</h5>
        <span className="input-box">
          <input
            name={"password"}
            type={!showPassword ? "password" : "text"}
            placeholder="Pick a strong password"
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

      <div>
        <h5>Confirm Password</h5>
        <span className="input-box">
          <input
            name={"confirm-password"}
            type={!showConfirmPassword ? "password" : "text"}
            placeholder="Confirm your password"
          />
          <ZoomInZoomOut width={"fit-content"}>
            <Icon
              className={"cursor-btn"}
              icon={
                !showConfirmPassword ? `mdi:eye-off-outline` : "mdi:eye-outline"
              }
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </ZoomInZoomOut>
        </span>
      </div>

      <CustomButton width={"60%"} backgroundColor={"var(--primary)"}>
        <h5 className="color-text">Create Account</h5>
      </CustomButton>

      <div className="change-box">
        <p className="color-text-extra-light">Already have an account? </p>
        <Link to="/login">
          <p className="color-text-light highlight">Login</p>
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
