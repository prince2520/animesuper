import { useSelector } from "react-redux";

import Logout from "./Logout/Logout";
import ThankYou from "./ThankYou/ThankYou";
import UpAndDown from "../../animation/Wrapper/UpAndDown";
import RemoveFavorite from "./DeleteFavorite/DeleteFavorite";
import EditWatchlist from "./UpdateWatchlist/UpdateWatchlist";
import RemoveWatchlist from "./DeleteWatchlist/DeleteWatchlist";

import './Modal.css'

const Modal = () => {
    const { showLogout, showDeleteFavorite, showDeleteWatchlist, showUpdateWatchlist, showThankYouBox } = useSelector(state => state.overlay);

    return (
        <UpAndDown
            className={`modal ${showThankYouBox ? 'modal-thank-you' : ''} ${showDeleteFavorite || showDeleteWatchlist || showLogout ? 'modal-remove' : ''} ${showUpdateWatchlist ? 'modal-watchlist-edit' : ''} `}>
            <div className="modal-box-1" />
            <div className="flex-center modal-box-2">
                {showLogout && <Logout />}
                {showThankYouBox && <ThankYou />}
                {showDeleteFavorite && <RemoveFavorite />}
                {showUpdateWatchlist && <EditWatchlist />}
                {showDeleteWatchlist && <RemoveWatchlist />}
            </div>
        </UpAndDown>
    )
}

export default Modal;