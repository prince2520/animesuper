import { useContext } from "react";

import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { OverlayActions } from "../../../store/overlay";

import AuthContext from "../../../Context/auth";
import CustomButton from "../../CustomButton/CustomButton";


const Logout = () => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

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
            onClick={() => dispatch(OverlayActions.closeOverlayHandler())}
          />
        </span>
      </div>
      <div className="logout-container-middle">
        <p>Are you sure, do you want to logout ?</p>
      </div>
      <div className="logout-container-bottom">
        <CustomButton
          width={"45%"}
          onClick={() => dispatch(OverlayActions.closeOverlayHandler())}
          backgroundColor={"var(--success)"}
        >
          <h5 className="color-text">No</h5>
        </CustomButton>
        <CustomButton
          width={"45%"}
          onClick={() => {
            dispatch(OverlayActions.closeOverlayHandler());
            authCtx.autoLogout();
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
