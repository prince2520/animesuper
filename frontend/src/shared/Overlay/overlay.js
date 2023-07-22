import {useDispatch, useSelector} from "react-redux";

import Modal from "../Modal/Modal";
import ProfileCard from "../ProfileCard/ProfileCard";

import {OverlayActions} from "../../store/overlay";
import {MyWatchlistActions} from "../../store/myWatchlist";

import './overlay.css';

const Overlay = () => {
    const dispatch = useDispatch();
    const showProfile = useSelector(state => state.overlay.showProfile);

    return (
        <div className="overlay-page">
            <div className="overlay-box" onClick={() => {
                dispatch(OverlayActions.closeOverlayHandler())
                dispatch(MyWatchlistActions.selectedWatchlistItemHandler({}))
            }}/>
            {showProfile && <ProfileCard/>}
            {!showProfile && <Modal/>}
        </div>
    );

}

export default Overlay;