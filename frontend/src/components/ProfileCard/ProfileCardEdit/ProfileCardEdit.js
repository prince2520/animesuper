import React, { useRef } from "react";

import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import randomColor from "randomcolor";

import { MyProfileActions } from "../../../store/myProfile";

import CustomButton from "../../CustomButton/CustomButton";

import './ProfileCardEdit.css';
import { uid } from "uid";

const ProfileCardEdit = (props) => {
  const genreRef = useRef(null);
  const genderRef = useRef(null);
  const usernameRef = useRef(null);
  const locationRef = useRef(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.myProfile);


  // Update and save profile details 
  const saveEditHandler = (event) => {
    event.preventDefault();
    props.saveProfileDetail(
      usernameRef.current.value,
      genderRef.current.value,
      locationRef.current.value,
      user.new_favorite_genre
    );
  };

  return (
    <form
      className="flex-center profile-card-edit-form"
      onSubmit={(event) => saveEditHandler(event)}
    >
      <div className="username-container">
        <p>Username</p>
        <span className="input-box">
          <Icon icon="gg:profile" style={{ fontSize: "1.5rem" }} />
          <input
            ref={usernameRef}
            defaultValue={user.username}
            placeholder="example_123"
          />
        </span>
      </div>

      <div className="gender-location-container">
        <div className="gender-container">
          <p>Gender</p>
          <span className="input-box">
            <Icon icon="mdi:gender-male" style={{ fontSize: "1.5rem" }} />
            <input
              ref={genderRef}
              defaultValue={user.gender}
              placeholder="Male"
            />
          </span>
        </div>

        <div className="location-container">
          <p>Location</p>
          <span className="input-box">
            <Icon
              icon="material-symbols:location-on-outline"
              style={{ fontSize: "1.5rem" }}
            />
            <input
              ref={locationRef}
              defaultValue={user.location}
              placeholder="India, Delhi"
            />
          </span>
        </div>
      </div>

      <div className="favorite-genre-container">
        <p>Favorite Genre</p>
        <span className="input-box">
          <input ref={genreRef} placeholder="ex - Action" />
          <Icon
            onClick={() => {
              if (genreRef.current.value !== "") {
                dispatch(MyProfileActions.addNewGenre(genreRef.current.value));
              }
            }}
            icon="material-symbols:add-circle-outline"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          />
        </span>
      </div>
      <div className="favorite-genre">
        <div className="favorite-genre-list">
          {user.new_favorite_genre.map((genre) => {
            let color = randomColor({
              luminosity: "light",
              hue: "random",
            });
            return (
              <p
                key={uid(8)}
                onClick={() => dispatch(MyProfileActions.deleteGenre(genre))}
                className="favorite-genre-item"
                style={{
                  borderColor: `${color}`,
                  color: `${color}`,
                  cursor: "pointer",
                }}
              >
                {genre}
              </p>
            );
          })}
        </div>
      </div>
      <CustomButton width={"60%"} backgroundColor={"var(--primary)"}>
        <h5 className="color-text">Save</h5>
      </CustomButton>
    </form>
  );
};

export default ProfileCardEdit;
