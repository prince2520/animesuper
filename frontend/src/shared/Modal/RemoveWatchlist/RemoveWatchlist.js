import {useContext} from "react";

import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";

import AuthContext from "../../../Context/auth";

import {AlertBoxActions} from "../../../store/alertBox";
import {OverlayActions} from "../../../store/overlay";
import {MyWatchlistActions} from "../../../store/myWatchlist";
import {deleteWatchlistItem} from "../../../api/watchlist";

const RemoveWatchlist = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.myWatchlist.removeCategory);
    const categoryId = useSelector(state => state.myWatchlist.removeCategoryId);
    const authCtx = useContext(AuthContext);
    const removeWatchlistItemHandler = () => {
        deleteWatchlistItem(authCtx.email, category, categoryId).then(res => {
            dispatch(AlertBoxActions.saveAlertBoxData(res))
            dispatch(MyWatchlistActions.deleteWatchlistItem())
            dispatch(OverlayActions.closeOverlayHandler())
        }).catch(err => console.log(err))
    }

    return (
        <div className="remove-watchlist-container">
            <div className="remove-watchlist-container-top">
                <h1>Remove</h1>
                <span>
                    <Icon
                        onClick={()=> dispatch(OverlayActions.closeOverlayHandler())}
                        className={'cursor-btn'}
                        color="white"
                        icon="material-symbols:close" style={{fontSize: '2rem'}}/>
                </span>
            </div>
            <div className="remove-watchlist-container-middle">
                <p>Are you sure, do you want to remove
                    this item from your watchlist?</p>
            </div>
            <div className="remove-watchlist-container-bottom">
                <button className="yes-button">No</button>
                <button className="no-button" onClick={() => removeWatchlistItemHandler()}>Yes</button>
            </div>
        </div>
    );
};

export default RemoveWatchlist;