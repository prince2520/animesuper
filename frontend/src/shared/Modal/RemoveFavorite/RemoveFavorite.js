import {useContext} from "react";

import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";

import AuthContext from "../../../Context/auth";

import {removeFavoriteItem} from "../../../api";
import {MyFavoriteActions} from "../../../store/myFavorite";
import {OverlayActions} from "../../../store/overlay";
import {AlertBoxActions} from "../../../store/alertBox";
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
                    <Icon color="white" icon="material-symbols:close" style={{fontSize: '2rem'}}/>
                </span>
            </div>
            <div className="remove-favorite-container-middle">
                <p>Are you sure, do you want to remove
                    this item from your favorite?</p>
            </div>
            <div className="remove-favorite-container-bottom">
                <button className="yes-button">No</button>
                <button className="no-button" onClick={() => removeFavoriteItemHandler()}>Yes</button>
            </div>
        </div>
    );
};

export default RemoveFavorite;