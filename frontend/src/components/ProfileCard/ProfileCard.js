import React, { useContext, useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import Skeleton from "react-loading-skeleton";
import Resizer from "react-image-file-resizer";

import { storage } from "../../firebase";
import { OverlayActions } from "../../store/overlay";
import { AlertBoxActions } from "../../store/alertBox";
import { MyProfileActions } from "../../store/myProfile";
import { getProfileStatistics, saveProfile } from "../../api/auth";

import AuthContext from "../../Context/auth";
import ProfileCardEdit from "./ProfileCardEdit/ProfileCardEdit";
import UpAndDown from "../../animation/Wrapper/UpAndDown";
import ProfileCardStatistics from "./ProfileCardStatistics/ProfileCardStatistics";

import "./ProfileCard.css";

const ProfileCard = () => {
  const imgRef = useRef(null);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const user = useSelector((state) => state.myProfile);

  const [preview, setPreview] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [categoryStats, setCategoryStats] = useState({
    animeStats: [],
    mangaStats: [],
  });


  useEffect(() => {
    if (profileImage) {
      const readImg = new FileReader();
      readImg.onloadend = () => {
        setPreview(readImg.result);
      };
      readImg.readAsDataURL(profileImage);
    } else {
      setPreview(null);
    }
  }, [profileImage]);

  useEffect(() => {
    getProfileStatistics(authCtx.token)
      .then((res) => {
        setCategoryStats(res);
      })
      .catch((err) => console.log(err));
  }, [authCtx.email]);


  // Update profile data in DB and save into state
  const saveProfileDetail = async (
    username,
    gender,
    location,
    favorite_genre,
  ) => {
    if (profileImage) {
      let imageRef = ref(storage, `images/${authCtx.email}`);
      const uploadTask = uploadBytesResumable(imageRef, profileImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              console.log("Error");
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((profile_photo) => {
            saveProfile(
              username,
              gender,
              location,
              favorite_genre,
              profile_photo,
              authCtx.token
            )
              .then((res) => {
                dispatch(AlertBoxActions.saveAlertBoxData(res));
                if (res.success) {
                  dispatch(
                    MyProfileActions.saveProfileData({
                      username: username,
                      gender: gender,
                      location: location,
                      favorite_genre: favorite_genre,
                      profile_photo: profile_photo,
                    })
                  );
                }
              })
              .catch((err) => console.log());
          });
        }
      );
    } else {
      saveProfile(
        username,
        gender,
        location,
        favorite_genre,
        null,
        authCtx.token
      )
        .then((res) => {
          dispatch(AlertBoxActions.saveAlertBoxData(res));
          if (res.success) {
            dispatch(
              MyProfileActions.saveProfileData({
                username: username,
                gender: gender,
                location: location,
                favorite_genre: favorite_genre,
              })
            );
          }
        })
        .catch((err) => console.log());
    }
  };

  // Compress Profile Upload Image 
  const compressProfileImage = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            setProfileImage(uri);
          },
          "blob",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      setProfileImage(null);
    }
  };

 

  return (
    <UpAndDown className="profile-card-container">
      <div className="flex-center profile-card-container-top">
        <span className="close-button">
          <Icon
            onClick={() => dispatch(OverlayActions.closeOverlayHandler())}
            color="white"
            icon="material-symbols:close"
            style={{ cursor: "pointer", fontSize: "2rem" }}
          />
        </span>
        <h3>Profile</h3>
        <p
          className={`edit-button cursor-btn ${
            showEdit && "edit-button-selected"
          }`}
          onClick={() => setShowEdit(!showEdit)}
        >
          Edit
        </p>
      </div>
      <div className="profile-card-container-bottom">
        <div className="profile-photo-container">
          <div className="flex-center profile-photo">
            {user.profile_photo && (
              <img
                alt={"profile"}
                accept="image/*"
                src={preview || user.profile_photo}
              />
            )}
            {!user.profile_photo && <Skeleton width={300} height={300} />}
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
                onChange={(event) => compressProfileImage(event)}
              />
              <Icon icon="ri:edit-line" />
            </span>
          )}
        </div>
        <div className="profile-personal-details">
          <h5 className="username">{user.username}</h5>
          <p className="email">{authCtx.email && authCtx.email}</p>
        </div>
        {!showEdit && <ProfileCardStatistics categoryStats={categoryStats} />}
        {showEdit && <ProfileCardEdit saveProfileDetail={saveProfileDetail} />}
      </div>
    </UpAndDown>
  );
};

export default ProfileCard;
