import React, {useContext, useRef, useState} from "react";

import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";

import Button from "../../Button/Button";
import AuthContext from "../../../Context/auth";

import {editStatus} from "../../../api";
import {OverlayActions} from "../../../store/overlay";
import {animeStatus, mangaStatus, MyWatchlistActions} from "../../../store/myWatchlist";
import {AlertBoxActions} from "../../../store/alertBox";
import {categoryType} from "../../../common";

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
            <div className="edit-status-card-left">
                <div className="img-container"><img src={data.img_url} alt={'anime-manga'}/></div>
            </div>
            <div className="edit-status-card-right">
                <div className="edit-status-card-right-top">
                    <span className="title">{data.title}</span>
                    <span className="close-button" style={{cursor: 'pointer'}}>
                            <Icon color="white" onClick={() => dispatch(OverlayActions.closeOverlayHandler())}
                                  icon="material-symbols:close" style={{fontSize: '2rem'}}/>
                        </span>
                </div>
                <div className="edit-status-card-right-middle">
                    {(data.category === categoryType[0].toLowerCase() ? animeStatus.slice(1, 6) : mangaStatus.slice(1, 6)).map(title => <span
                        onClick={() => setStatus(title)}
                        style={{cursor: 'pointer'}}
                        className={`button ${title === status ? 'selected-status' : ''}`}>{title}</span>)}
                </div>
                <div className="edit-status-card-right-bottom">
                    <div className="num_of_episode">
                        <span>Episode :</span>
                        <input ref={progressRef} defaultValue={data.progress_read_watched}/>
                        <span>/ {data.num_episode_or_chapter ? data.num_episode_or_chapter : 'N/A'}</span>
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