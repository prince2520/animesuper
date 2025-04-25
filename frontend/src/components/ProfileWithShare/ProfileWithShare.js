import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";

import { OverlayActions } from "../../redux/slice/overlaySlice";

import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";

import "./ProfileWithShare.css";
import { uid } from "uid";

const ProfileWithShare = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div className="flex-center profile-tab">
      <div className="flex-center share-links">
        {["logos:facebook", "logos:reddit-icon", "logos:twitter"].map(
          (data) => (
            <Icon
              key={uid(8)}
              icon={data}
              style={{ fontSize: "1.75rem" }}
            />
          )
        )}
      </div>
      <ZoomInZoomOut width={"fit-content"}>
        {auth.isAuth && (
          <div
            className="flex-center profile-button"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(OverlayActions.showProfileReducer())}
          >
            <h5 className="color-text">
              {auth.username || <Skeleton width={50} />}
            </h5>
            <div className="flex-center profile-logo">
              {auth.profile_photo && (
                <img
                  alt={"profile"}
                  style={{ objectFit: "cover", height: "2.5rem" }}
                  src={auth.profile_photo}
                />
              )}
              {!auth.profile_photo && <Skeleton width={40} height={100} />}
            </div>
          </div>
        )}
      </ZoomInZoomOut>
    </div>
  );
};

export default ProfileWithShare;
