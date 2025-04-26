import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";
import randomColor from "randomcolor";

import { categoryType, getStatusColor } from "../../../constants/constants";
import { OverlayActions } from "../../../redux/slice/overlaySlice";

import CustomButton from "../../CustomButton/CustomButton";

import "./ProfileCardStatistics.css";
import { uid } from "uid";

const ProfileCardStatistics = () => {
  const [category, setCategory] = useState("anime");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // Logout my account
  const logoutProfileCard = (event) => {
    event.preventDefault();
    dispatch(OverlayActions.closeOverlayReducer());
    dispatch(OverlayActions.showLogoutReducer());
  };

  return (
    <form
      className="profile-card-statistics-form"
      onSubmit={(event) => logoutProfileCard(event)}
    >
      <div className="profile-anime-manga-details">
        <div className="favorite-genre">
          <h5 className="favorite-genre-title">Favorite Genre</h5>
          <div className="favorite-genre-list">
            {auth.favorite_genre.length > 0 ? (
              auth.favorite_genre.map((res) => {
                let color = randomColor({
                  luminosity: "light",
                  hue: "random",
                });
                return (
                  <span
                    key={uid(8)}
                    className="favorite-genre-item"
                    style={{ borderColor: `${color}`, color: `${color}` }}
                  >
                    <p style={{ color: color }}>{res}</p>
                  </span>
                );
              })
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
        <div className="statistics">
          <div className="statistics-bar">
            <h5>Statistics</h5>
            <div className="flex-center category-change-button">
              {categoryType.map((name) => (
                <h6
                  key={uid(8)}
                  style={{ padding: "0.1rem 0.5rem" }}
                  className={`cursor-btn ${category === name.toLowerCase() ? "selected" : ""}`}
                  onClick={() => setCategory(name.toLowerCase())}
                >
                  {name}
                </h6>
              ))}
            </div>
          </div>
          <div className="statistics-list">
            {(auth.stats[category]).map((s) => (
              <div className="statistics-item" key={uid(8)}>
                <div className="currently-watching">
                  <span
                    className="circle"
                    style={{ backgroundColor: getStatusColor(s.status) }}
                  />
                  <div className="currently-watching-detail">
                    <p className="title">{s.status}</p>
                    <p className="value">{s.count}</p>
                  </div>
                </div>
              </div>
            ))}
            {auth.stats[category].length === 0 ? (
              <Skeleton count={5} />
            ) : null}
          </div>
        </div>
      </div>
      <CustomButton width={"60%"} backgroundColor={"var(--error)"}>
        <h5 className="color-text">Logout</h5>
      </CustomButton>
    </form>
  );
};

export default ProfileCardStatistics;
