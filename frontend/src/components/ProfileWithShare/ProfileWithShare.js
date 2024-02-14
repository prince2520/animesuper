import { useContext } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";

import { OverlayActions } from "../../store/overlay";

import AuthContext from "../../Context/auth";
import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";

import "./ProfileWithShare.css";

const ProfileWithShare = () => {
  
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const user = useSelector((state) => state.myProfile);

  return (
    <div className="flex-center profile-tab">
      <div className="flex-center share-links">
        {["logos:facebook", "logos:reddit-icon", "logos:twitter"].map(
          (data) => (
            <Icon
              key={data.toString()}
              icon={data}
              style={{ fontSize: "1.75rem" }}
            />
          )
        )}
      </div>
      <ZoomInZoomOut width={"fit-content"}>
        {authCtx.isAuth && (
          <div
            className="flex-center profile-button"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(OverlayActions.showProfileHandler())}
          >
            <h5 className="color-text">
              {user.username || <Skeleton width={50} />}
            </h5>
            <div className="flex-center profile-logo">
              {user.profile_photo && (
                <img
                  alt={"profile"}
                  style={{ objectFit: "cover", height: "2.5rem" }}
                  src={user.profile_photo}
                />
              )}
              {!user.profile_photo && <Skeleton width={40} height={100} />}
            </div>
          </div>
        )}
      </ZoomInZoomOut>
    </div>
  );
};

export default ProfileWithShare;
