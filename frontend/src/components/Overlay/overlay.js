import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";

import Modal from "../Modal/Modal";
import ProfileCard from "../ProfileCard/ProfileCard";

import {OverlayActions} from "../../store/overlay";
import {MyWatchlistActions} from "../../store/myWatchlist";

import './overlay.css';

const Overlay = () => {
    const dispatch = useDispatch();
    const showProfile = useSelector(state => state.overlay.showProfile);

    const overlayVariant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
        }
    }

    return (
        <div className="flex-center overlay-page">
            <motion.div
                variants={overlayVariant}
                initial="initial"
                animate="animate"
                transition={{duration: 0.15}}
                className="overlay-box" onClick={() => {
                dispatch(OverlayActions.closeOverlayHandler())
                dispatch(MyWatchlistActions.selectedWatchlistItemHandler({}))
            }}/>
            {showProfile && <ProfileCard/>}
            {!showProfile && <Modal/>}
        </div>
    );

}

export default Overlay;