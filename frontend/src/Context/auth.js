import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AlertBoxActions } from "../store/alertBox";

const AuthContext = React.createContext({
  loginHandler: (email, password) => {},
  signUpHandler: (username, email, password, confirmPassword) => {},
  logoutHandler: () => {},
  autoLogout: () => {},
  isAuth: false,
  email: "",
  username: "",
  profilePhoto: null,
});

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    const localUserEmail = localStorage.getItem("email");
    setEmail(localUserEmail);
    const localUsername = localStorage.getItem("username");
    setUsername(localUsername);

    const localProfilePhoto = localStorage.getItem("profilePhoto");
    setProfilePhoto(localProfilePhoto);

    const localExpiryDate = localStorage.getItem("expiryDate");

    if (new Date(localExpiryDate) <= new Date()) {
      setIsAuth(false);
      logoutHandler();
      return;
    }
    const remainingMilliseconds =
      new Date(localExpiryDate).getTime() - new Date().getTime();
    autoLogout(remainingMilliseconds);
    setIsAuth(true);
    navigate("home");
  }, []);

  const autoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  const signUpHandler = (username, email, password, confirmPassword) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(AlertBoxActions.saveAlertBoxData(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginHandler = (email, password) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          localStorage.setItem("email", result.email);
          setEmail(result.email);

          localStorage.setItem("username", result.username);
          setEmail(result.email);

          localStorage.setItem("profilePhoto", result.profilePhoto);
          setProfilePhoto(result.profilePhoto);

          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          localStorage.setItem("expiryDate", expiryDate.toISOString());
          setIsAuth(result.isAuth);
          autoLogout(remainingMilliseconds);
          dispatch(AlertBoxActions.closeAlertBox());
          navigate("/home");
        } else {
          dispatch(AlertBoxActions.saveAlertBoxData(result));
        }
      })
      .catch((err) => console.log(err));
  };
  const logoutHandler = () => {
    setIsAuth(false);
    localStorage.clear();
    navigate("login");
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler: loginHandler,
        signUpHandler: signUpHandler,
        logoutHandler: logoutHandler,
        autoLogout: autoLogout,
        isAuth: isAuth,
        email: email,
        username: username,
        profilePhoto: profilePhoto,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
