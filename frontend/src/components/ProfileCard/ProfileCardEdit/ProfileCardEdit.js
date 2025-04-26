import { uid } from "uid";
import { Icon } from "@iconify/react";
import {  useSelector } from "react-redux";
import React, { useRef, useState } from "react";

import randomColor from "randomcolor";
import CustomButton from "../../CustomButton/CustomButton";

import './ProfileCardEdit.css';

const ProfileCardEdit = ({ updatedProfileHandler }) => {
  const genreRef = useRef(null);

  const auth = useSelector((state) => state.auth);

  const [newFavoriteGenre, setNewFavoriteGenre] = useState(auth.favorite_genre);

  const submitUpdatedEditHandler = (event) =>{
    event.preventDefault();

    let data = {
      username : event.target[0].value,
      gender : event.target[1].value,
      location : event.target[2].value,
      favorite_genre : newFavoriteGenre
    }

    updatedProfileHandler(data);
  }

  return (
    <form
      className="flex-center profile-card-edit-form"
      onSubmit={submitUpdatedEditHandler}
    >
      <div className="username-container">
        <p>Username</p>
        <span className="input-box">
          <Icon icon="gg:profile" style={{ fontSize: "1.5rem" }} />
          <input
            defaultValue={auth.username}
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
              defaultValue={auth.gender}
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
              defaultValue={auth.location}
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
              if (genreRef.current.value !== "")
                setNewFavoriteGenre(prevState => [...prevState, genreRef.current.value]);
            }}
            icon="material-symbols:add-circle-outline"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          />
        </span>
      </div>
      <div className="favorite-genre">
        <div className="favorite-genre-list">
          {newFavoriteGenre.map((genre) => {
            let color = randomColor({
              luminosity: "light",
              hue: "random",
            });
            return (
              <p
                key={uid(8)}
                onClick={() => setNewFavoriteGenre(prevState=>{
                  prevState = prevState.filter(g=>g !== genre)
                  return prevState
                })}
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
