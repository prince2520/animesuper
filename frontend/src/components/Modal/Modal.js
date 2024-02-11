import {useSelector} from "react-redux";

import Logout from "./Logout/Logout";
import ThankYou from "./ThankYou/ThankYou";
import UpAndDown from "../../animation/Wrapper/UpAndDown";
import EditWatchlist from "./EditWatchlist/EditWatchlist";
import RemoveFavorite from "./RemoveFavorite/RemoveFavorite";
import RemoveWatchlist from "./RemoveWatchlist/RemoveWatchlist";

import './Modal.css'

const Modal = () => {
    const showLogout = useSelector(state => state.overlay.showLogout);
    const showThankYouBox = useSelector(state => state.overlay.showThankYouBox);
    const showEditWatchlist = useSelector(state => state.overlay.showEditWatchlist);
    const showRemoveFavorite = useSelector(state => state.overlay.showRemoveFavorite);
    const showRemoveWatchlist = useSelector(state => state.overlay.showRemoveWatchlist);

    return (
        <UpAndDown
            className={`modal ${showThankYouBox ? 'modal-thank-you' : ''} ${showRemoveFavorite || showRemoveWatchlist || showLogout ? 'modal-remove' : ''} ${showEditWatchlist ? 'modal-watchlist-edit' : ''} `}>
            <div className="modal-box-1"/>
            <div className="flex-center modal-box-2">
                {showRemoveWatchlist && <RemoveWatchlist/>}
                {showRemoveFavorite && <RemoveFavorite/>}
                {showEditWatchlist && <EditWatchlist/>}
                {showLogout && <Logout/>}
                {showThankYouBox && <ThankYou/>}
            </div>
        </UpAndDown>
    )
}

export default Modal;