import "swiper/swiper-bundle.css";
import "swiper/css";

import React from "react";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import SideBar from "../../components/SideBar/SideBar";
import Overlay from "../../components/Overlay/overlay";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import MenuBtn from "../../components/MenuBtn/MenuBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProfileWithShare from "../../components/ProfileWithShare/ProfileWithShare";
import SideBarMobile from "../../components/SideBar/SideBarMobile/SideBarMobile";

import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const showOverlay = useSelector((state) => state.overlay.showOverlay);
  const {blurNavbar, showMobileSideBar, showSearchBar } = useSelector((state)=>state.helper);

  return (
    <div className="home-page">
      <div className={"home-left sidebar-web"}>{<SideBar />}</div>
      {showMobileSideBar && <SideBarMobile />}
      <div className="home-right">
        {showOverlay && <Overlay />}
        <div
          className={`search-container ${blurNavbar ? "search-container-blur" : ""
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
