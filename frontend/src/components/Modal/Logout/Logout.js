import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import CustomButton from "../../CustomButton/CustomButton";

import { useAuth } from "../../../hooks/useAuth";
import { OverlayActions } from "../../../redux/slice/overlaySlice";

const Logout = () => {
  const dispatch = useDispatch();
  const { autoLogout } = useAuth();

  return (
    <div className="logout-container">
      <div className="flex-center logout-container-top">
        <h3>Logout</h3>
        <span>
          <Icon
            className={"cursor-btn"}
            color="white"
            icon="material-symbols:close"
            style={{ fontSize: "2rem" }}
            onClick={() => dispatch(OverlayActions.closeOverlayReducer())}
          />
        </span>
      </div>
      <div className="logout-container-middle">
        <p className="color-text-light">Are you sure, do you want to logout ?</p>
      </div>
      <div className="logout-container-bottom">
        <CustomButton
          width={"45%"}
          onClick={() => dispatch(OverlayActions.closeOverlayReducer())}
          backgroundColor={"var(--success)"}
        >
          <h5 className="color-text">No</h5>
        </CustomButton>
        <CustomButton
          width={"45%"}
          onClick={() => {
            dispatch(OverlayActions.closeOverlayReducer());
            autoLogout();
          }}
          backgroundColor={"var(--error)"}
        >
          <h5 className="color-text">Yes</h5>
        </CustomButton>
      </div>
    </div>
  );
};

export default Logout;
