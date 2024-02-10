import React, {useContext, useRef, useState} from "react";

import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";

import Button from "../../Button/Button";
import AuthContext from "../../../Context/auth";

import {categoryType} from "../../../common";
import {editStatus} from "../../../api/watchlist";
import {OverlayActions} from "../../../store/overlay";
import {AlertBoxActions} from "../../../store/alertBox";
import {MyWatchlistActions} from "../../../store/myWatchlist";
import {mangaStatus, animeStatus} from "../../../common";


import './EditStatus.css';

const EditStatus = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.myWatchlist.selectedWatchlistItem);
    const currStatus = useSelector(state => state.myWatchlist.currStatus);
    const authCtx = useContext(AuthContext);
    const [status, setStatus] = useState(data.status);
    const progressRef = useRef(null);

    const saveStatusHandler = () => {
        editStatus(authCtx.email, status, progressRef.current.value, data.category_id).then((res) => {
            dispatch(AlertBoxActions.saveAlertBoxData(res))
            if(res.success){
                dispatch(OverlayActions.closeOverlayHandler())
                dispatch(MyWatchlistActions.editWatchlistItem({
                    category_id: data.category_id,
                    status: status,
                    progress_read_watched: progressRef.current.value,
                    currStatus: currStatus,
                    category: data.category
                }))
            }
        }).catch(err => console.log(err));
    }

    return (
        <div className="edit-status-card">
            <div className="flex-center edit-status-card-left">
                <div className="img-container"><img src={data.img_url} alt={'anime-manga'}/></div>
            </div>
            <div className="edit-status-card-right">
                <div className="edit-status-card-right-top">
                    <h4 className="color-text">{data.title}</h4>
                    <h5 className="close-button cursor-btn">
                            <Icon color="white" onClick={() => dispatch(OverlayActions.closeOverlayHandler())}
                                  icon="material-symbols:close" style={{fontSize: '2rem'}}/>
                    </h5>
                </div>
                <div className="edit-status-card-right-middle">
                    {(data.category === categoryType[0].toLowerCase() ? animeStatus.slice(1, 6) : mangaStatus.slice(1, 6)).map(title => <h6
                        key={title.toString()}
                        onClick={() => setStatus(title)}
                        className={`button cursor-btn color-text ${title === status ? 'selected-status' : ''}`}>{title}</h6>)}
                </div>
                <div className="edit-status-card-right-bottom">
                    <div className="flex-center num_of_episode">
                        <h6>Episode :</h6>
                        <h6><input ref={progressRef} defaultValue={data.progress_read_watched}/> /</h6>
                        <h6 className="color-text"> {data.num_episode_or_chapter ? data.num_episode_or_chapter : 'N/A'}</h6>
                    </div>
                    <div className="save-container"onClick={() => saveStatusHandler()}>
                        <Button title="Save"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditStatus;