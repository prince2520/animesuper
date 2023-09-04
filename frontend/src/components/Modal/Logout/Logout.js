import {useContext} from "react";

import {Icon} from "@iconify/react";
import {useDispatch} from "react-redux";

import AuthContext from "../../../Context/auth";

import {OverlayActions} from "../../../store/overlay";
import ZoomInZoomOut from "../../../animation/Wrapper/ZoomInZoomOut";

const Logout = () => {
    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);

    return (
        <div className="logout-container">
            <div className="logout-container-top">
                <h1>Logout</h1>
                <span>
                    <Icon
                        className={'cursor-btn'}
                        color="white" icon="material-symbols:close" style={{fontSize: '2rem'}}
                        onClick={() => dispatch(OverlayActions.closeOverlayHandler())}/>
                </span>
            </div>
            <div className="logout-container-middle">
                <p>Are you sure, do you want to logout ?</p>
            </div>
            <div className="logout-container-bottom">
                <ZoomInZoomOut width={'fit-content'}>
                    <button className="no-button cursor-btn"
                            onClick={() => dispatch(OverlayActions.closeOverlayHandler())}>No
                    </button>
                </ZoomInZoomOut>
                <ZoomInZoomOut width={'fit-content'}>
                    <button className="yes-button cursor-btn" onClick={() => {
                        dispatch(OverlayActions.closeOverlayHandler());
                        authCtx.autoLogout();
                    }}>Yes
                    </button>
                </ZoomInZoomOut>

            </div>
        </div>
    );
};

export default Logout;