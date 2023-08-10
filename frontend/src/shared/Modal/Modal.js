import {useSelector} from "react-redux";

import Logout from "./Logout/Logout";
import ThankYou from "./ThankYou/ThankYou";
import EditStatus from "./EditStatus/EditStatus";
import RemoveFavorite from "./RemoveFavorite/RemoveFavorite";
import RemoveWatchlist from "./RemoveWatchlist/RemoveWatchlist";

import './Modal.css'

const Modal = () => {
    const showRemoveWatchlist = useSelector(state => state.overlay.showRemoveWatchlist);
    const showRemoveFavorite = useSelector(state => state.overlay.showRemoveFavorite);
    const showLogout = useSelector(state => state.overlay.showLogout);
    const showEditWatchlist = useSelector(state => state.overlay.showEditWatchlist);
    const showThankYouBox = useSelector(state => state.overlay.showThankYouBox);

    return (
        <div
            className={`modal ${showThankYouBox ? 'modal-thank-you' : ''} ${showRemoveFavorite || showRemoveWatchlist || showLogout ? 'modal-remove' : ''} ${showEditWatchlist ? 'modal-watchlist-edit' : ''} `}>
            <div className="modal-box-1"/>
            <div className="modal-box-2">
                {showRemoveWatchlist && <RemoveWatchlist/>}
                {showRemoveFavorite && <RemoveFavorite/>}
                {showEditWatchlist && <EditStatus/>}
                {showLogout && <Logout/>}
                {showThankYouBox && <ThankYou/>}
            </div>
        </div>
    )
}

export default Modal;