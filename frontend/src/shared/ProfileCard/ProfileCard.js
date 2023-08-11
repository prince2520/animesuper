import React, {useContext, useEffect, useRef, useState} from "react";

import {Icon} from "@iconify/react";
import Resizer from "react-image-file-resizer";
import {useDispatch, useSelector} from "react-redux";
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'

import AuthContext from "../../Context/auth";
import ProfileCardEdit from "./ProfileCardEdit/ProfileCardEdit";
import ProfileCardStatistics from "./ProfileCardStatistics/ProfileCardStatistics";

import {storage} from "../../firebase";
import {OverlayActions} from "../../store/overlay";
import {AlertBoxActions} from "../../store/alertBox";
import {MyProfileActions} from "../../store/myProfile";
import {getProfileStatistics, saveProfile} from "../../api/auth";

import './ProfileCard.css';
import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";
import Skeleton from "react-loading-skeleton";

const ProfileCard = () => {
    const dispatch = useDispatch();

    const [preview, setPreview] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [categoryStats, setCategoryStats] = useState({
        animeStats: [],
        mangaStats: []
    });

    const authCtx = useContext(AuthContext);
    const user = useSelector(state => state.myProfile);

    const imgRef = useRef(null);


    useEffect(() => {
        if (profileImage) {
            const readImg = new FileReader();
            readImg.onloadend = () => {
                setPreview(readImg.result);
            }
            readImg.readAsDataURL(profileImage)
        } else {
            setPreview(null)
        }
    }, [profileImage])

    const saveProfileDetail = async (username, gender, location, favorite_genre) => {
        if (profileImage) {
            let imageRef = ref(storage, `images/${authCtx.email}`);
            const uploadTask = uploadBytesResumable(imageRef, profileImage);
            await uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default :
                            console.log('Error')
                    }
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((profile_photo) => {
                        saveProfile(authCtx.email, username, gender, location, favorite_genre, profile_photo).then(res => {
                            dispatch(AlertBoxActions.saveAlertBoxData(res));
                            if (res.success) {
                                dispatch(MyProfileActions.saveProfileData({
                                    username: username,
                                    gender: gender,
                                    location: location,
                                    favorite_genre: favorite_genre,
                                    profile_photo: profile_photo
                                }));
                            }
                        }).catch(err => console.log())
                    });
                }
            );
        } else {
            saveProfile(authCtx.email, username, gender, location, favorite_genre, null).then(res => {
                dispatch(AlertBoxActions.saveAlertBoxData(res));
                if (res.success) {
                    dispatch(MyProfileActions.saveProfileData({
                        username: username,
                        gender: gender,
                        location: location,
                        favorite_genre: favorite_genre,
                    }));
                }
            }).catch(err => console.log())
        }
    }


    useEffect(() => {
        getProfileStatistics(authCtx.email).then((res) => {
            setCategoryStats(res)
        }).catch(err => console.log(err))
    }, [authCtx.email])


    return (
        <div className="profile-card-container">
            <div className="profile-card-container-top">
                <span className="close-button">
                    <Icon
                        onClick={() => dispatch(OverlayActions.closeOverlayHandler())} color="white"
                        icon="material-symbols:close" style={{cursor: 'pointer', fontSize: '2rem'}}/>
                </span>
                <span className="title">Profile</span>
                <span
                    className={`edit-button cursor-btn ${showEdit && 'edit-button-selected'}`}
                    onClick={() => setShowEdit(!showEdit)}>Edit</span>
            </div>
            <div className="profile-card-container-bottom">
                <div className="profile-photo-container">
                    <div className="profile-photo">
                        {user.profile_photo && <img alt={'profile'} accept='image/*'
                              src={preview || user.profile_photo}/>}
                        {!user.profile_photo && <Skeleton width={300} height={300}/>}
                    </div>
                    {showEdit && <span className="edit-icon selected-container cursor-btn" onClick={() => imgRef.current.click()}>
                        <input
                            ref={imgRef}
                            type={"file"}
                            style={{display: 'none'}}
                            onChange={(event) => {
                                const file = event.target.files[0]
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
                                                setProfileImage(uri)
                                            },
                                            "blob",
                                            200,
                                            200
                                        );
                                    } catch (err) {
                                        console.log(err);
                                    }
                                } else {
                                    setProfileImage(null)
                                }
                            }}
                        />
                        <Icon
                            icon="ri:edit-line"
                        />
                    </span>}
                </div>
                <div className="profile-personal-details">
                    <span className="username">{user.username}</span>
                    <span className="email">{authCtx.email && authCtx.email}</span>
                </div>
                {!showEdit && <ProfileCardStatistics categoryStats={categoryStats}/>}
                {showEdit && <ProfileCardEdit saveProfileDetail={saveProfileDetail}/>}
            </div>
        </div>
    );
}

export default ProfileCard;