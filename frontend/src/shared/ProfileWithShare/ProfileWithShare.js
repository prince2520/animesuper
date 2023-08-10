import {useContext} from "react";

import {useDispatch, useSelector} from "react-redux";
import {Icon} from "@iconify/react";

import Skeleton from "react-loading-skeleton";

import AuthContext from "../../Context/auth";

import {OverlayActions} from "../../store/overlay";

import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";

import './ProfileWithShare.css';


const ProfileWithShare = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.myProfile);
    const authCtx = useContext(AuthContext);


    return (
        <div className="profile-tab">
            <div className="share-links">
                {['logos:facebook', 'logos:reddit-icon', 'logos:twitter']
                    .map((data, index) =>
                        <Icon key={index}
                              icon={data}
                              style={{fontSize: '2.25rem'}}/>)}
            </div>
            <ZoomInZoomOut width={'fit-content'}>
                {authCtx.isAuth && <div className="profile-button" style={{cursor: 'pointer'}}
                                        onClick={() => dispatch(OverlayActions.showProfileHandler())}>
                    <span>{user.username || <Skeleton width={50}/>}</span>
                    <div className="profile-logo">
                        {user.profile_photo &&
                            <img
                                alt={'profile'}
                                style={{objectFit: "cover", height: "2.5rem"}}
                                src={user.profile_photo}/>}
                        {!user.profile_photo && <Skeleton width={40} height={100}/>}
                    </div>
                </div>}
            </ZoomInZoomOut>

        </div>)
}

export default ProfileWithShare;