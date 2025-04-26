import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { AlertBoxActions } from "./store/alertBox";

import Home from "./Pages/Home/Home";
import DMCA from "./Pages/Home/PolicyContactUs/DMCA";
import AlertBox from "./components/AlertBox/AlertBox";
import AnimeManga from "./Pages/Home/AnimeManga/AnimeManga";
import LoginForm from "./Pages/LoginSignPage/Form/LoginForm";
import SignupForm from "./Pages/LoginSignPage/Form/SignupForm";
import LoginSignupPage from "./Pages/LoginSignPage/LoginSignupPage";
import ContactUs from "./Pages/Home/PolicyContactUs/ContactUs/ContactUs";
import TermAndCondition from "./Pages/Home/PolicyContactUs/TermAndCondition";
import MyFavorite from "./Pages/Home/MyFavoriteWatchlist/MyFavorite/MyFavorite";
import MyWatchlist from "./Pages/Home/MyFavoriteWatchlist/MyWatchlist/MyWatchlist";
import AnimeMangaDetail from "./Pages/Home/AnimeManga/AnimeMangaDetail/AnimeMangaDetail";
import AnimeMangaCategory from "./Pages/Home/AnimeManga/AnimeMangaCategory/AnimeMangaCategory";

import "./App.css";
import { AuthActions } from "./redux/slice/authSlice";
import { useAuth } from "./hooks/useAuth";
import { getUserThunk } from "./redux/thunk/authThunk";

let time = null;

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const visible = useSelector((state) => state.alertBox.isVisible);
  const alertBoxData = useSelector((state) => state.alertBox.data);

  const navigate = useNavigate();
  const { autoLogout, logout } = useAuth();

  useEffect(() => {
    clearTimeout(time);
    if (visible) {
      time = setTimeout(() => {
        dispatch(AlertBoxActions.closeAlertBox());
      }, [2000]);
    }
  }, [dispatch, visible, alertBoxData]);


  useEffect(() => {
    const localToken = localStorage.getItem("token");

    const localExpiryDate = localStorage.getItem("expiryDate");

    if (new Date(localExpiryDate) <= new Date()) {
      dispatch(AuthActions.updateIsAuthReducer({ isAuth: false }));
      logout();
      return;
    }
    const remainingMilliseconds =
      new Date(localExpiryDate).getTime() - new Date().getTime();

    autoLogout(remainingMilliseconds);
    dispatch(getUserThunk({ token: localToken }))
      .unwrap().then(() => navigate("home")).catch((err) => console.log(err));
  }, []);

  return (
    <div className="App dark">
      {visible && <AlertBox />}
      <Routes>
        <Route path="/" element={<LoginSignupPage />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="" element={<Navigate to={"login"} />} />
        </Route>
        <Route path="/home" element={<Home />}>
          <Route
            path=":category/category/:id"
            element={<AnimeMangaCategory />}
          />
          {auth.isAuth && (
            <React.Fragment>
              <Route path="my-watchlist" element={<MyWatchlist />} />
              <Route path="my-favorite" element={<MyFavorite />} />
            </React.Fragment>
          )}
          <Route path="terms-and-condition" element={<TermAndCondition />} />
          <Route path="dmca" element={<DMCA />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path=":category" element={<AnimeManga />} />
          <Route path=":category/:id" element={<AnimeMangaDetail />} />
          <Route path="" element={<Navigate to={"anime"} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
