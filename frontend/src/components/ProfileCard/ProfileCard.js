import React, { useEffect, useState, useRef } from "react";

import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import Skeleton from "react-loading-skeleton";
import { storage } from "../../firebase";
import { OverlayActions } from "../../redux/slice/overlaySlice";


import UpAndDown from "../../animation/Wrapper/UpAndDown";
import ProfileCardEdit from "./ProfileCardEdit/ProfileCardEdit";
import ProfileCardStatistics from "./ProfileCardStatistics/ProfileCardStatistics";

import "./ProfileCard.css";
import { getAuthStatisticsThunk, updatedAuthThunk } from "../../redux/thunk/authThunk";
import useCompressImg from "../../hooks/useCompressImg";

const ProfileCard = () => {
  const imgRef = useRef(null);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [preview, setPreview] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  const watchlist = useSelector(state => state.myWatchlist.watchlist);

  const [compressImageHandler, compressImg] = useCompressImg();

  useEffect(() => {
    if (compressImg) {
      const readImg = new FileReader();
      readImg.onloadend = () => {
        setPreview(readImg.result);
      };
      readImg.readAsDataURL(compressImg);
    } else {
      setPreview(null);
    }
  }, [compressImg]);

  useEffect(() => {
    dispatch(getAuthStatisticsThunk());
  }, [dispatch, JSON.stringify(watchlist)]);


  // Update profile data in DB and save into state
  const updatedProfileHandler = async (
    data
  ) => {
    if (compressImg) {
      let imageRef = ref(storage, `images/${auth.email}`);
      const uploadTask = uploadBytesResumable(imageRef, compressImg);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
        },
        (error) => { },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((profile_photo) => {
            dispatch(updatedAuthThunk({ ...data, profile_photo }));
          });
        }
      );
    } else {
      dispatch(updatedAuthThunk({ ...data, profile_photo: auth.profile_photo }));
    }
  };

  return (
    <UpAndDown className="profile-card-container">
      <div className="flex-center profile-card-container-top">
        <span className="close-button">
          <Icon
            onClick={() => dispatch(OverlayActions.closeOverlayReducer())}
            color="white"
            icon="material-symbols:close"
            style={{ cursor: "pointer", fontSize: "2rem" }}
          />
        </span>

        <h3>Profile</h3>
        <p
          className={`edit-button cursor-btn ${showEdit && "edit-button-selected"
            }`}
          onClick={() => setShowEdit(!showEdit)}
        >
          Edit
        </p>
      </div>
      <div className="profile-card-container-bottom">
        <div className="profile-photo-container">
          <div className="flex-center profile-photo">
            {auth.profile_photo && (
              <img
                alt={"profile"}
                accept="image/*"
                src={preview || auth.profile_photo}
              />
            )}
            {!auth.profile_photo && <Skeleton width={300} height={300} />}
          </div>
          {showEdit && (
            <span
              className="flex-center edit-icon selected-container cursor-btn"
              onClick={() => imgRef.current.click()}
            >
              <input
                ref={imgRef}
                type={"file"}
                style={{ display: "none" }}
                onChange={(event) => compressImageHandler(event)}
              />
              <Icon icon="ri:edit-line" />
            </span>
          )}
        </div>
        <div className="profile-personal-details">
          <h5 className="authname">{auth.username}</h5>
          <p className="email">{auth.email}</p>
        </div>
        {!showEdit && <ProfileCardStatistics />}
        {showEdit && <ProfileCardEdit updatedProfileHandler={updatedProfileHandler} />}
      </div>
    </UpAndDown>
  );
};

export default ProfileCard;
