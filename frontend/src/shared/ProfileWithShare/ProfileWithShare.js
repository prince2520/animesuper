import {useContext} from "react";
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";

import Skeleton from "react-loading-skeleton";

import AuthContext from "../../Context/auth";
import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";

import {OverlayActions} from "../../store/overlay";

import './ProfileWithShare.css';

const ProfileWithShare = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.myProfile);
    const authCtx = useContext(AuthContext);

    return (
        <div className="profile-tab">
            <div className="share-links">
                {['logos:facebook', 'logos:reddit-icon', 'logos:twitter']
                    .map((data) =>
                        <Icon key={data.toString()}
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