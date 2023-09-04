import {useContext} from "react";

import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";

import AuthContext from "../../../Context/auth";

import {OverlayActions} from "../../../store/overlay";
import {AlertBoxActions} from "../../../store/alertBox";
import {removeFavoriteItem} from "../../../api/favorite";
import {MyFavoriteActions} from "../../../store/myFavorite";
import ZoomInZoomOut from "../../../animation/Wrapper/ZoomInZoomOut";

const RemoveFavorite = () => {
    const category = useSelector(state => state.myFavorite.removeCategory);
    const categoryId = useSelector(state => state.myFavorite.removeCategoryId);
    const authCtx = useContext(AuthContext);
    const dispatch = useDispatch()

    const removeFavoriteItemHandler = () => {
        removeFavoriteItem(authCtx.email, category, categoryId).then((res) => {
            dispatch(AlertBoxActions.saveAlertBoxData(res))
            dispatch(MyFavoriteActions.deleteFavoriteItem())
            dispatch(OverlayActions.closeOverlayHandler())
        }).catch(err => console.log(err))
    }

    return (
        <div className="remove-favorite-container">
            <div className="remove-favorite-container-top">
                <h1>Remove</h1>
                <span>
                    <Icon
                        onClick={()=>dispatch(OverlayActions.closeOverlayHandler())}
                        className={'cursor-btn'}
                        color="white" icon="material-symbols:close" style={{fontSize: '2rem'}}/>
                </span>
            </div>
            <div className="remove-favorite-container-middle">
                <p>Are you sure, do you want to remove
                    this item from your favorite?</p>
            </div>
            <div className="remove-favorite-container-bottom">
                <ZoomInZoomOut width={'fit-content'}>
                    <button className="yes-button cursor-btn" onClick={()=>dispatch(OverlayActions.closeOverlayHandler())}>No</button>
                </ZoomInZoomOut>
                <ZoomInZoomOut  width={'fit-content'} >
                    <button className="no-button cursor-btn" onClick={() => removeFavoriteItemHandler()}>Yes</button>
                </ZoomInZoomOut>
            </div>
        </div>
    );
};

export default RemoveFavorite;