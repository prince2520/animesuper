import {useContext} from "react";

import {Icon} from "@iconify/react";
import {useDispatch} from "react-redux";

import AuthContext from "../../../Context/auth";

import {OverlayActions} from "../../../store/overlay";

const Logout = () => {
    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);

    return (
        <div className="logout-container">
            <div className="logout-container-top">
                <h1>Logout</h1>
                <span>
                    <Icon color="white" icon="material-symbols:close" style={{fontSize: '2rem'}}
                          onClick={() => dispatch(OverlayActions.closeOverlayHandler())}/>
                </span>
            </div>
            <div className="logout-container-middle">
                <p>Are you sure, do you want to logout ?</p>
            </div>
            <div className="logout-container-bottom">
                <button className="no-button" onClick={() => dispatch(OverlayActions.closeOverlayHandler())}>No</button>
                <button className="yes-button" onClick={() => {
                    dispatch(OverlayActions.closeOverlayHandler());
                    authCtx.autoLogout();
                }}>Yes
                </button>
            </div>
        </div>
    );
};

export default Logout;