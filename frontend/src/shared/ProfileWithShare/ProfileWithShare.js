import {useContext} from "react";

import {useDispatch, useSelector} from "react-redux";
import {Icon} from "@iconify/react";

import AuthContext from "../../Context/auth";

import {OverlayActions} from "../../store/overlay";


import './ProfileWithShare.css';
import ZoomInZoomOut from "../../Animation/Wrapper/ZoomInZoomOut";


let shareLinkData = [{
    icon: 'logos:facebook'
}, {
    icon: 'logos:reddit-icon'
}, {
    icon: 'logos:twitter'
},

];

const ProfileWithShare = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.myProfile);
    const authCtx = useContext(AuthContext);


    return (<div className="profile-tab">
        <div className="share-links">
            {shareLinkData.map((data, index) => <Icon key={index} icon={data.icon} style={{fontSize: '2.25rem'}}/>)}
        </div>
        <ZoomInZoomOut width={'fit-content'}>
            {authCtx.isAuth && <div className="profile-button" style={{cursor: 'pointer'}}
                                    onClick={() => dispatch(OverlayActions.showProfileHandler())}>
                <span>{user.username}</span>
                <div className="profile-logo">
                    <img alt={'profile'} style={{objectFit: "cover", height: "2.5rem"}}
                         src={user.profile_photo}/>
                </div>
            </div>}
        </ZoomInZoomOut>

    </div>)
}

export default ProfileWithShare;