import React, { useContext, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AuthContext from "../../Context/auth";
import SideBar from "../../components/SideBar/SideBar";
import Overlay from "../../components/Overlay/overlay";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProfileWithShare from "../../components/ProfileWithShare/ProfileWithShare";
import SideBarMobile from "../../components/SideBar/SideBarMobile/SideBarMobile";

import { getProfileDetail } from "../../api/auth";
import { MyProfileActions } from "../../store/myProfile";

import "swiper/css";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MenuBtn from "../../components/MenuBtn/MenuBtn";

const Home = () => {
  const showOverlay = useSelector((state) => state.overlay.showOverlay);
  const blurNavbar = useSelector((state) => state.helper.blurNavbar);
  const showMobileSideBar = useSelector(
    (state) => state.helper.showMobileSideBar
  );
  const showSearchBar = useSelector((state) => state.helper.showSearchBar);

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    getProfileDetail(authCtx?.email)
      .then((res) => {
        let favorite_genre = res?.favorite_genre.map(
          (result) => result.fields.name
        );
        dispatch(
          MyProfileActions.saveProfileData({
            username: res.username,
            email: res.email,
            profile_photo: res.profile_photo,
            gender: res.gender,
            location: res.location,
            favorite_genre: favorite_genre,
          })
        );
      })
      .catch((err) => console.log(err));
  }, [dispatch, authCtx?.email]);

  return (
    <div className="home-page">
      <div className={"home-left sidebar-web"}>{<SideBar />}</div>
      {showMobileSideBar && <SideBarMobile />}
      <div className="home-right">
        {showOverlay && <Overlay />}
        <div
          className={`search-container ${
            blurNavbar ? "search-container-blur" : ""
          }`}
        >
          <div className="navbar-container">
            <Navbar />
          </div>
          <div className={`search-bar-box ${!showSearchBar ? "show" : ""}`}>
            <div className="menu-btn-container">
              <MenuBtn />
            </div>
            <SearchBar />
            <ProfileWithShare />
          </div>
        </div>
        <div className={"carousel-ranking-container"}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
