import {useContext} from "react";

import {useDispatch, useSelector} from "react-redux";
import {Icon} from "@iconify/react";

import AuthContext from "../../Context/auth";

import {OverlayActions} from "../../store/overlay";


import './ProfileWithShare.css';

const ProfileWithShare = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.myProfile);
    const authCtx = useContext(AuthContext)


    return (
        <div className="profile-tab">
            <div className="share-links">
                <Icon icon="logos:facebook" style={{fontSize:'2.25rem'}}/>
                <Icon icon="logos:reddit-icon" style={{fontSize:'2.25rem'}}/>
                <Icon icon="logos:twitter" style={{fontSize:'2.25rem'}} />
            </div>
            {authCtx.isAuth &&
                <div className="profile-button"  style={{cursor:'pointer'}} onClick={() => dispatch(OverlayActions.showProfileHandler())}>
                    <span>{user.username}</span>
                    <div className="profile-logo">
                        <img alt={'profile'} style={{objectFit: "cover", height: "2.5rem"}} src={user.profile_photo}/>
                    </div>
                </div>}
        </div>
    );
}

export default ProfileWithShare;